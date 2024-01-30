import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { TextInput, View } from "react-native";
import { GlobalStyles, colours } from "../../styles";

export const SearchScreen = ({
	navigation,
}: {
	navigation: NavigationProp<any>;
}) => {
	const possibleText = ["songs", "albums", "artists", "playlists"];
	const [text, setText] = React.useState(possibleText[0]);

	setInterval(() => {
		const index = possibleText.indexOf(text);
		setText(possibleText[(index + 1) % possibleText.length]);
	}, 3000);

	return (
		<View style={GlobalStyles.screen}>
			<TextInput
				style={GlobalStyles.textInput}
				placeholderTextColor={colours.faintColour}
				placeholder={`Search ${text}`}
			/>
		</View>
	);
};
