import React from "react";
import {Box, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";

export const Direction = () => {
    const [transportation, setTransportation] = React.useState<string | null>('자가용');

    const handleTransportation = (
        event: React.MouseEvent<HTMLElement>,
        newTrasportation: string | null,
    ) => {
        setTransportation(newTrasportation);
    };

    return (
        <>
            <ToggleButtonGroup
                value={transportation}
                exclusive
                onChange={handleTransportation}
                aria-label="transportation"
            >
                <ToggleButton value="자가용" aria-label="car">
                    <Typography>자가용 🚗</Typography>
                </ToggleButton>
                <ToggleButton value="대중교통" aria-label="public-transportation">
                    <Typography>대중교통 🚌</Typography>
                </ToggleButton>
                <ToggleButton value="도보" aria-label="walking">
                    <Typography>도보 🚶‍♂️</Typography>
                </ToggleButton>
            </ToggleButtonGroup>
            <Box>
                <Typography variant="h6">현재 위치에서 {transportation}으로 5분 거리에 있어요.</Typography>
            </Box>
        </>
    );
}