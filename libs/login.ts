import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const login = async (username: string, password: string) => {
	const serverAddress = await AsyncStorage.getItem("serverAddress");

	if (!serverAddress) {
		throw new Error("Server address not set");
	}

	try {
		const response = await fetch(`${serverAddress}/api/user/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});

		if (!response.ok) {
			return {
				status: false,
				message:
					"Cannot sign in with that username and password combination.",
			};
		} else {
			const data = await response.json();
			await AsyncStorage.setItem("token", data.token);
			return { status: true };
		}
	} catch (error) {
		return {
			status: false,
			message: "Cannot connect to server",
		};
	}
};
