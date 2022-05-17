import React from "react";
import {Box, SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import MapIcon from '@mui/icons-material/Map';

export const Direction = () => {
    return (
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 100, right: 16}}
            icon={<SpeedDialIcon />}
        >
            <SpeedDialAction
                icon={<MapIcon/>}
                tooltipTitle="네이버로 길 찾기"
                tooltipOpen
            />
            <SpeedDialAction
                icon={<MapIcon/>}
                tooltipTitle="설마 꺠깨오로 길 찾기?"
                tooltipOpen
            />
        </SpeedDial>
    )
}