import {AppBar, Box, Typography} from "@mui/material";

interface HeaderProps {
    title: string
}

export const Header = ({title}: HeaderProps) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                textAlign: "center",
                color: "gray",
                backgroundColor: "white",
            }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
            </AppBar>
        </Box>
    )
}