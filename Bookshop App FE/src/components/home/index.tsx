import { Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

export default function Home() {
	const { user } = useAuth();

	return (
		<>
			<Typography variant="h4" gutterBottom>
				{`Welcome, ${user?.name}!`}
			</Typography>
		</>
	);
}
