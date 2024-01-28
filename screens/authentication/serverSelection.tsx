import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";

export const ServerSelection = ({
	navigation,
}: {
	navigation: NavigationProp<any>;
}) => {
	return (
		<View>
			<Text>Connect to your server</Text>
			<Text>
				Harmoni is self-hosted, meaning you need to specify the server
				you want to connect to.
			</Text>
			<Button
				title="Get Started"
				onPress={() => navigation.navigate("Home")}
			/>
		</View>
	);
};
