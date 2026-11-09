import { AppBar, Box, Toolbar } from "@mui/material";
import { appTheme } from "../../theme/appTheme";
import AccountButton from "./AccountButton";

export default function Navbar() {
	return (
		<AppBar position="static" elevation={0}>
			<Toolbar>
				<Box sx={{ display: "flex", flexGrow: 1, justifyContent: "end" }}>
					<AccountButton />
				</Box>
			</Toolbar>
		</AppBar>
	);
}
