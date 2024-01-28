import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";

export const Welcome = ({
	navigation,
}: {
	navigation: NavigationProp<any>;
}) => {
	return (
		<View>
			<Text>Welcome To Harmoni</Text>
			<Button
				title="Get Started"
				onPress={() => navigation.navigate("ServerSelection")}
			/>
		</View>
	);
};
