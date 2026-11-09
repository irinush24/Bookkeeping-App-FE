import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthProvider.tsx";
import App from "./App.tsx";
import { appTheme } from "./theme/appTheme.ts";
import { CssBaseline, ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId="787511852606-5v5vrbja0tje6h2rpdbcak8js2ln0vn5.apps.googleusercontent.com">
			<AuthProvider>
				<ThemeProvider theme={appTheme}>
					<CssBaseline />
					<App />
				</ThemeProvider>
			</AuthProvider>
		</GoogleOAuthProvider>
	</React.StrictMode>,
);
