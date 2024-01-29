import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "./screens/authentication/welcome";
import { Authentication } from "./screens/authentication";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import { GlobalStyles } from "./styles";
import { MainScreen } from "./screens";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const Initialiser = ({ navigation }: { navigation: NavigationProp<any> }) => {
	const checkAuthentication = async () => {
		const serverAddress = await AsyncStorage.getItem("serverAddress");
		const token = await AsyncStorage.getItem("token");

		if (serverAddress) {
			if (token) {
				return navigation.navigate("Home");
			} else {
				return navigation.navigate("Authentication");
			}
		} else {
			return navigation.navigate("Authentication");
		}
	};

	checkAuthentication();
	return <View></View>;
};

export default function App() {
	const [fontsLoaded] = useFonts({
		PlusJakartaSans: require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
		PlusJakartaSansB: require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
	});

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
					initialRouteName="Initialiser"
				>
					<Stack.Screen name="Initialiser" component={Initialiser} />
					<Stack.Screen
						name="Authentication"
						component={Authentication}
					/>
					<Stack.Screen name="Home" component={MainScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
}
