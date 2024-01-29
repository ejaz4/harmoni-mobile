import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

import { GlobalStyles } from "../../styles";

const buttonStylesheet = StyleSheet.create({
	button: {
		...GlobalStyles.button,
	},
	buttonText: {
		color: "#fff",
		fontSize: 18,
		textAlign: "center",
		fontFamily: "PlusJakartaSans",
	},
});

export const Button = ({
	onPress,
	title,
}: {
	onPress: () => void;
	title: string;
}) => {
	return (
		<TouchableOpacity style={buttonStylesheet.button} onPress={onPress}>
			<Text style={buttonStylesheet.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};
