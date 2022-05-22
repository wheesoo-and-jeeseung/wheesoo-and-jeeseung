import {Component} from "react";
import {Direction} from "../../components/Direction/Direction";
import {Box} from "@mui/material";
import {DynamicMap} from "../../components/DynamicMap/DynamicMap";

export class Map extends Component<any, any> {
    render() {
        return (
            <Box>
                <DynamicMap/>
                <Direction/>
            </Box>
        );
    }
}