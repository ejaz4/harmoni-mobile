import { NavigationProp } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";

import { Button } from "../../components/button";

import { GlobalStyles, colours } from "../../styles";
import { heartbeatServer } from "../../libs/heartbeat";

import AsyncStorage from "@react-native-async-storage/async-storage";

const serverselectStylesheet = StyleSheet.create({
	serverselect: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 18,
	},
});

export const ServerSelection = ({
	navigation,
}: {
	navigation: NavigationProp<any>;
}) => {
	const [serverAddress, setServerAddress] = useState<string>("");

	const connnectAndCheck = async () => {
		const address = serverAddress.trim();

		if (address === "") {
			return Alert.alert("Error", "Please enter a server address");
		}

		const hb = await heartbeatServer(address);

		if (hb.status) {
			const serverStorage = await AsyncStorage.setItem(
				"serverAddress",
				address
			);
			return navigation.navigate("Login", { serverAddress: address });
		} else {
			return Alert.alert("Server Error", hb.message);
		}
	};

	return (
		<View
			style={{
				...GlobalStyles.centreView,
				...serverselectStylesheet.serverselect,
			}}
		>
			<Text style={{ ...GlobalStyles.h2, textAlign: "center" }}>
				Enter server address
			</Text>
			<Text style={{ ...GlobalStyles.span, textAlign: "center" }}>
				As Harmoni is hosted locally, you need to enter the address of
				the server you want to connect to.
			</Text>
			<Text style={{ ...GlobalStyles.span, textAlign: "center" }}>
				This is typically the same address you use to access the web
				version of Harmoni.
			</Text>

			<TextInput
				style={{ ...GlobalStyles.textInput, width: "100%" }}
				keyboardType="url"
				placeholder="protocol://server:port"
				onChangeText={(text) => setServerAddress(text)}
				value={serverAddress}
				placeholderTextColor={colours.faintColour}
			/>
			<Button title="Connect" onPress={connnectAndCheck} />
		</View>
	);
};
