import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { Box, Typography } from "@mui/material";
import { useAuth } from "./context/AuthContext";
import { authApi } from "./api/clients/authApi";
import {
	AuthenticatedTemplate,
	UnauthenticatedTemplate,
} from "./components/common/Templates";
import Home from "./components/home";

export default function App() {
	const { login } = useAuth();

	const handleGoogleSuccess = async (
		credentialResponse: CredentialResponse,
	) => {
		try {
			const googleToken = credentialResponse.credential;
			if (!googleToken) {
				throw new Error("No credential received from Google.");
			}

			// Verify the token with .NET backend
			const userData = await authApi.verifyGoogleToken(googleToken);

			// Update the React Context state to switch the templates
			login(userData);
		} catch (error) {
			console.error("Backend verification failed:", error);
		}
	};

	return (
		<>
			<UnauthenticatedTemplate>
				<Box sx ={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
					<Typography variant="h4" gutterBottom>
						Welcome to the Bookshop App!
					</Typography>
					<Typography variant="body1" gutterBottom>
						Please log in to continue.
					</Typography>
					<GoogleLogin
						onError={() => console.error("Google Login Widget Failed")}
						onSuccess={handleGoogleSuccess}
					/>
				</Box>
			</UnauthenticatedTemplate>

			<AuthenticatedTemplate>
				<Home />
			</AuthenticatedTemplate>
		</>
	);
}
