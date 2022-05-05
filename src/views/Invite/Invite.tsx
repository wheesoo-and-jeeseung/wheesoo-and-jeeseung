import {Component} from "react";
import {Landing} from "../../components/Landing/Landing";
import {LandingInfo} from "../../components/Landing/LandingInfo";
import {History} from "../../components/History/History";
import {Box, Grid} from "@mui/material";
import {Quiz} from "../../components/Quiz/Quiz";

interface InviteProps {}
interface InviteState {}

export class Invite extends Component<InviteProps, InviteState> {
    render() {
        return (
            <Box>
                <Grid container position="relative" justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <Landing />
                    </Grid>
                    <Grid item xs={12} position="absolute">
                        <LandingInfo/>
                    </Grid>
                </Grid>
                <History/>
                <Quiz/>

            </Box>
        )
    }
}