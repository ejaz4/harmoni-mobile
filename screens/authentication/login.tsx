import React, { useRef, useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { View, Text, TextInput, Alert } from "react-native";

import { GlobalStyles, colours } from "../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Button } from "../../components/button";
import { login } from "../../libs/login";

export const LoginScreen = ({
	navigation,
}: {
	navigation: NavigationProp<any>;
}) => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const [serverAddress, setServerAddress] = useState<URL>();

	const passwordRef = useRef<TextInput>(null);

	const loadServerAddress = async () => {
		const serverAddress = await AsyncStorage.getItem("serverAddress");

		if (serverAddress) {
			const parsedServerAddress = new URL(serverAddress, serverAddress);
			setServerAddress(parsedServerAddress);
		}
	};

	const submitCombination = async () => {
		const newUsername = username.trim();

		if (newUsername === "") {
			return Alert.alert("Error", "Please enter a username");
		}

		const lR = await login(newUsername, password);

		if (lR.status) {
			return navigation.navigate("Home");
		} else {
			return Alert.alert("Error", lR.message);
		}
	};

	loadServerAddress();

	return (
		<View style={{ ...GlobalStyles.centreView, gap: 18 }}>
			<Text style={{ ...GlobalStyles.span, color: colours.faintColour }}>
				Authenticating with {serverAddress?.host}
			</Text>
			<Text style={GlobalStyles.h2}>Sign in</Text>
			<Text style={GlobalStyles.span}>
				Enter your credentials for this server.
			</Text>

			<View
				style={{
					width: "100%",
					gap: 12,
				}}
			>
				<TextInput
					style={{ ...GlobalStyles.textInput, width: "100%" }}
					keyboardType="default"
					placeholder="Username"
					onChangeText={(text) => setUsername(text)}
					value={username}
					returnKeyType="next"
					passwordRules={"minlength: 8;"}
					blurOnSubmit={false}
					onSubmitEditing={() => {
						passwordRef?.current?.focus();
					}}
					placeholderTextColor={colours.faintColour}
				/>

				<TextInput
					style={{ ...GlobalStyles.textInput, width: "100%" }}
					keyboardType="default"
					secureTextEntry={true}
					placeholder="Password"
					onChangeText={(text) => setPassword(text)}
					value={password}
					ref={passwordRef}
					placeholderTextColor={colours.faintColour}
				/>

				<Button
					title="Continue with combination"
					onPress={submitCombination}
				/>
			</View>
		</View>
	);
};
