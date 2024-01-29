import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles";

import { Button } from "../../components/button";

const welcomeStylesheet = StyleSheet.create({
	welcome: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 18,
	},
});

export const Welcome = ({
	navigation,
}: {
	navigation: NavigationProp<any>;
}) => {
	return (
		<View
			style={{ ...GlobalStyles.centreView, ...welcomeStylesheet.welcome }}
		>
			<Text style={{ ...GlobalStyles.h2, textAlign: "center" }}>
				Welcome To Harmoni
			</Text>
			<Text style={{ ...GlobalStyles.span, textAlign: "center" }}>
				Harmoni is a music streaming service hosted locally.
			</Text>
			<Button
				title="Get Started"
				onPress={() => navigation.navigate("ServerSelection")}
			/>
		</View>
	);
};
