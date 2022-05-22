import React from "react";

import {AppBar, BottomNavigation, BottomNavigationAction} from "@mui/material";
import CelebrationIcon from '@mui/icons-material/Celebration';
import MapIcon from '@mui/icons-material/Map';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import {Link} from "react-router-dom";

export const Navigation = () => {
    const [value, setValue] = React.useState(0);

    return (
        <AppBar position="fixed" style={{top:"auto", bottom: 0}}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    label="청첩장" icon={<CelebrationIcon />}
                    component={Link}
                    to="/"
                />
                <BottomNavigationAction
                    label="찾아오시는 길" icon={<MapIcon />}
                    component={Link}
                    to="/map"
                />
                <BottomNavigationAction
                    label="축하하기" icon={<HistoryEduIcon />}
                    component={Link}
                    to="/celebration"
                />
            </BottomNavigation>
        </AppBar>
    )
}