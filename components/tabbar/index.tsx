import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
	TabNavigationState,
	ParamListBase,
	NavigationHelpers,
} from "@react-navigation/native";
import {
	BottomTabDescriptorMap,
	BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { colours } from "../../styles";
import { GlobalStyles } from "../../styles";

export const TabBar = ({
	state,
	descriptors,
	navigation,
}: {
	state: TabNavigationState<ParamListBase>;
	descriptors: BottomTabDescriptorMap;
	navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}) => {
	return (
		<View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				let Icon;
				if (options.tabBarIcon) {
					Icon = options.tabBarIcon({
						focused: isFocused,
						color: "#fff",
						size: 24,
					});
				}
				// .({
				// 	focused: isFocused,
				// 	color: isFocused
				// 		? colours.textColourContrast
				// 		: colours.faintColour,
				// 	size: 24,
				// });

				return (
					<TouchableOpacity
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={{
							flex: 1,
							paddingBottom: 12,
							justifyContent: "center",
							alignItems: "center",
							opacity: isFocused ? 1 : 0.2,
						}}
					>
						{Icon ? Icon : null}
						<Text
							style={{
								...GlobalStyles.span,
								alignSelf: "center",
							}}
						>
							{label.toString()}
						</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};
