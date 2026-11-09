import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useAuth } from "../../../context/AuthContext";
import { appTheme } from "../../../theme/appTheme";

export default function AccountButton() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isOpen = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const { logout } = useAuth();

	return (
		<>
			<Button
				aria-label="account"
				variant="text"
				startIcon={<PersonIcon />}
				onClick={handleClick}
				sx={{ color: "primary.contrastText" }}
			>
				Account
			</Button>
			<Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
				<MenuItem onClick={logout} sx={{ color: "primary.main" }}>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
}
