import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";
import { colours } from "../../styles";

export const HomeIcon = ({
	focused,
	color,
	size,
}: {
	focused: boolean;
	color: string;
	size: number;
}) => (
	<Svg
		width={size}
		height={size}
		fill="none"
		stroke={colours.textColourContrast}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={2}
	>
		<Path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
		<Path d="M9 22V12h6v10" />
	</Svg>
);

export const SearchIcon = ({
	focused,
	color,
	size,
}: {
	focused: boolean;
	color: string;
	size: number;
}) => (
	<Svg
		width={size}
		height={size}
		fill="none"
		stroke={colours.textColourContrast}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={2}
	>
		<Circle cx={11} cy={11} r={8} />
		<Path d="m21 21-4.3-4.3" />
	</Svg>
);

export const LibraryIcon = ({
	focused,
	color,
	size,
}: {
	focused: boolean;
	color: string;
	size: number;
}) => (
	<Svg
		width={size}
		height={size}
		fill="none"
		stroke={colours.textColourContrast}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={2}
	>
		<Path d="m16 6 4 14M12 6v14M8 8v12M4 4v16" />
	</Svg>
);

export const PlayingIcon = ({
	focused,
	color,
	size,
}: {
	focused: boolean;
	color: string;
	size: number;
}) => (
	<Svg
		width={size}
		height={size}
		fill="none"
		stroke={colours.textColourContrast}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={2}
	>
		<Path d="M2 10v3M6 6v11M10 3v18M14 8v7M18 5v13M22 10v3" />
	</Svg>
);
