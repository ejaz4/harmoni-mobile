import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "./screens/authentication/welcome";
import { Authentication } from "./screens/authentication";
import { SafeAreaView } from "react-native-safe-area-context";

import { GlobalStyles } from "./styles";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1, ...GlobalStyles.app }}>
			<NavigationContainer
				theme={{
					dark: true,
					colors: {
						background: "#131313",
						card: "#131313",
						text: "#ffffff",
						border: "#131313",
						notification: "#131313",
						primary: "#ffffff",
					},
				}}
			>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
						statusBarColor: "#131313",
						statusBarStyle: "light",
						animation: "none",
					}}
				>
					<Stack.Screen
						name="Authentication"
						component={Authentication}
					/>
					<Stack.Screen
						name="Home"
						component={() => <Text>Stinky</Text>}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
}
