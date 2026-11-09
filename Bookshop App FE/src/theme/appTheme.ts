import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#111111",
			contrastText: "#ffffff",
		},
		secondary: {
			main: "#C89B3C",
			contrastText: "#ffffff",
		},
		background: {
			default: "#FFFFFF",
			paper: "#F3F2EC",
		},
		text: {
			primary: "#222222",
			secondary: "#777777",
		},
		divider: "#E5E5E5",
	},
	typography: {
		fontFamily: '"Inter", "Lato", "Roboto", "Helvetica", "Arial", sans-serif',

		h1: { fontFamily: '"Playfair Display", "Prata", serif', fontWeight: 400 },
		h2: { fontFamily: '"Playfair Display", "Prata", serif', fontWeight: 400 },
		h3: { fontFamily: '"Playfair Display", "Prata", serif', fontWeight: 400 },
		h4: { fontFamily: '"Playfair Display", "Prata", serif', fontWeight: 400 },
		h5: { fontFamily: '"Playfair Display", "Prata", serif', fontWeight: 400 },
		h6: { fontFamily: '"Playfair Display", "Prata", serif', fontWeight: 400 },

		subtitle1: {
			fontWeight: 500,
			letterSpacing: "0.05em",
			textTransform: "uppercase",
			fontSize: "0.75rem",
			color: "#777777",
		},
		button: {
			fontFamily: '"Inter", sans-serif',
			textTransform: "uppercase",
			letterSpacing: "0.1em",
			fontWeight: 600,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 0,
					padding: "12px 28px",
					boxShadow: "none",
					"&:hover": {
						boxShadow: "none",
					},
				},
				contained: {
					backgroundColor: "#111111",
					"&:hover": {
						backgroundColor: "#333333",
					},
				},
				outlined: {
					borderColor: "#E5E5E5",
					color: "#111111",
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: "none",
					borderRadius: 0,
					backgroundColor: "transparent",
					backgroundImage: "none",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: "none",
				},
			},
		},
	},
});
