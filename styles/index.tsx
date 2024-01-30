import { StyleSheet } from "react-native";

export const colours = {
	bodyColour: "#131313",
	textColourContrast: "#ffffff",
	faintColour: "rgba(255, 255, 255, 0.2)",
	differentiatorColour: "rgba(255, 255, 255, 0.06)",
	differentiatorActionColour: "rgba(255, 255, 255, 0.12)",
	differentiatorActiveColour: "rgba(255, 255, 255, 0.24)",
	activePlaceholderColour: "rgba(255, 255, 255, 0.5)",
	passthroughInactive: 0.2,
	pageGap: 32,
};

export const GlobalStyles = StyleSheet.create({
	app: {
		backgroundColor: colours.bodyColour,
		color: colours.textColourContrast,
	},
	h2: {
		color: colours.textColourContrast,
		fontSize: 24,
		fontFamily: "PlusJakartaSansB",
	},
	span: {
		color: colours.textColourContrast,
		fontSize: 16,
		fontFamily: "PlusJakartaSans",
	},
	button: {
		borderRadius: 10,
		padding: 8,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colours.differentiatorColour,
		borderColor: colours.faintColour,
		borderWidth: 1,
		borderStyle: "solid",
	},
	centreView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 20,
		paddingRight: 20,
		width: "auto",
	},
	screen: {
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 20,
	},
	textInput: {
		width: "100%",
		padding: 12,
		borderColor: colours.faintColour,
		backgroundColor: colours.differentiatorColour,
		fontSize: 18,
		borderWidth: 1,
		borderRadius: 8,
		color: colours.textColourContrast,
		fontFamily: "PlusJakartaSans",
	},
});
