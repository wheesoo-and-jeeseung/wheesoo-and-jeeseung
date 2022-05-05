import React from "react";

import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import CelebrationIcon from '@mui/icons-material/Celebration';
import MapIcon from '@mui/icons-material/Map';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

interface NavigationProps {
}

export const Navigation = ({}: NavigationProps) => {
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label="청첩장" icon={<CelebrationIcon />} />
            <BottomNavigationAction label="찾아오시는 길" icon={<MapIcon />} />
            <BottomNavigationAction label="축하하기" icon={<HistoryEduIcon />} />
        </BottomNavigation>
    )
}