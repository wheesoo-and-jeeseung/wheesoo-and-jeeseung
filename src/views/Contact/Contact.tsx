import React, {Component} from "react";
import {ContactList} from "../../components/Contact/ContactList";
import {Box, CardContent, Stack, Typography} from "@mui/material";
import {VisitorInput} from "../../components/Visitor/VisitorInput";
import {VisitorList} from "../../components/Visitor/VisitorList";

export class Contact extends Component<any, any> {
    render() {
        return (
            <>
                <Box component={Stack} justifyContent="center" sx={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.623)), url(images/contact_background.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "160px"
                }}>
                    <Typography variant="h6" color="white" align="center">신랑 신부에게 마음 전하기</Typography>
                </Box>
                <Box>
                    <CardContent>
                        <ContactList/>
                    </CardContent>
                </Box>
                <Box>
                    <CardContent>
                        <VisitorInput/>
                        <br/>
                        <VisitorList/>
                    </CardContent>
                </Box>
            </>
        );
    }
}