import React, {Component} from "react";
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";

interface LandingInfoProps {}
interface LandingInfoState {}

export class LandingInfo extends Component<LandingInfoProps, LandingInfoState> {
    render() {
        const date = new Date("2022-08-20T16:30:00+0900")
        const today = new Date()
        const diff = date.getTime() - today.getTime()
        const remain = Math.ceil(diff / (1000 * 60 * 60 * 24))
        const dday = remain > 59400000 ? `D-${remain}` : 'Today'

        const welcomeMessage = [
            "오셔서 함께 축하해주세요~!",
            "함께 축복해주세요~!",
        ]

        return (
            <Box>
                <Card variant="outlined" sx={{backgroundColor: "rgba(0,0,0,0.4)"}}>
                    <CardContent sx={{color: "white"}}>
                        <Grid container justifyContent="center">
                            <Grid item textAlign="center">
                                <Typography sx={{ fontSize: 14 }} gutterBottom>
                                    결혼식까지 앞으로
                                </Typography>
                                <Typography variant="h4" component="div" gutterBottom>
                                    {dday}
                                </Typography>
                                <Typography variant="body2">
                                    {welcomeMessage[Math.random() * welcomeMessage.length | 0]}
                                </Typography>
                                <br/>
                                <br/>
                                <Typography>신부 김휘수</Typography>
                                <Typography>신랑 한지승</Typography>
                                <br/>
                                <br/>
                                <Typography>서울대학교 교수회관 2층</Typography>
                                <Typography>2022년 8월 20일(토) 16시 30분</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
            // <Grid container justifyContent="center">
            //     <Grid item xs={12} textAlign="center">
            //         <Card sx={{ minWidth: 275 }}>
            //             <CardContent>
            //
            //             </CardContent>
            //         </Card>
            //     </Grid>
            //     <Grid item xs={12} textAlign="center">
            //         <Typography>신부 김휘수</Typography>
            //         <Typography>신랑 한지승</Typography>
            //     </Grid>
            //     <Grid item xs={12} textAlign="center">
            //         <Typography>서울대학교 교수회관 2층</Typography>
            //         <Typography>2022년 8월 20일(토) 16시 30분</Typography>
            //     </Grid>
            // </Grid>
        )
    }
}