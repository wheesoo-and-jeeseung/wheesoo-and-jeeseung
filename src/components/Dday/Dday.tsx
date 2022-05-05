import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

interface DdayProps {
    date: Date
}

export const Dday = ({
        date,
    }: DdayProps) => {

    const today = new Date()
    const diff = date.getTime() - today.getTime()
    const remain = Math.ceil(diff / (1000 * 60 * 60 * 24))
    const dday = remain > 0 ? `D-${remain}` : 'Today'

    const welcomeMessage = [
        "오셔서 함께 축하해주세요~!",
        "함께 축복해주세요~!",
    ]

    return (
        <Card sx={{ flexGrow: 1 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    결혼식까지 앞으로
                </Typography>
                <Typography variant="h5" component="div">
                    {dday}
                </Typography>
                <Typography variant="body2">
                    {welcomeMessage[Math.random() * welcomeMessage.length | 0]}
                </Typography>
            </CardContent>
        </Card>
    )
}