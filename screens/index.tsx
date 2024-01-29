import { NavigationProp } from "@react-navigation/native";
import { Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ServerSelection } from "./authentication/serverSelection";
import { LoginScreen } from "./authentication/login";
import React from "react";
import { TabBar } from "../components/tabbar";
import { GlobalStyles } from "../styles";
import {
	HomeIcon,
	LibraryIcon,
	PlayingIcon,
	SearchIcon,
} from "../components/tabbar/icons";

const Tab = createBottomTabNavigator();

export const MainScreen = ({
	navigation,
}: {
	navigation: NavigationProp<any>;
}) => {
	return (
		<Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
			<Tab.Screen
				name="Home"
				component={() => <View></View>}
				options={{
					tabBarIcon: HomeIcon,
				}}
			/>
			<Tab.Screen
				name="Search"
				options={{
					tabBarIcon: SearchIcon,
				}}
				component={() => <View></View>}
			/>
			<Tab.Screen
				name="Library"
				options={{
					tabBarIcon: LibraryIcon,
				}}
				component={() => <View></View>}
			/>
			<Tab.Screen
				name="Playing"
				options={{
					tabBarIcon: PlayingIcon,
				}}
				component={() => <View></View>}
			/>
		</Tab.Navigator>
	);
};
