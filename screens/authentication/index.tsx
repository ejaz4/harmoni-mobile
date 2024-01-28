import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "./welcome";
import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { ServerSelection } from "./serverSelection";
import { GlobalStyles } from "../../styles";
import { View } from "react-native";

const AuthenticationStack = createNativeStackNavigator();

export const Authentication = ({
	navigation,
}: {
	navigation: NavigationProp<any>;
}) => {
	return (
		<View style={{ flex: 1, ...GlobalStyles.app }}>
			<AuthenticationStack.Navigator
				screenOptions={{
					headerShown: false,
					animation: "fade_from_bottom",
				}}
			>
				<AuthenticationStack.Screen
					name="Welcome"
					component={Welcome}
				/>

				<AuthenticationStack.Screen
					name="ServerSelection"
					component={ServerSelection}
				/>
			</AuthenticationStack.Navigator>
		</View>
	);
};
