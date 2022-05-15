import {Component} from "react";
import {Direction} from "../../components/Direction/Direction";
import {Box} from "@mui/material";

export class Map extends Component<any, any> {
    render() {
        return (
            <Box>
                <Direction />
            </Box>
        );
    }
}