import { Button, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

export default function Home() {

    const {user, logout} = useAuth();
    
	return (
		<>
			<Typography variant="h4" gutterBottom>
				{`Welcome, ${user?.name}!`}
			</Typography>
			<Button variant="contained" onClick = {logout}>Logout</Button>
		</>
	);
}
