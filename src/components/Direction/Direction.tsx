import React from "react";
import {
    CardContent, List, ListItem,
    ToggleButton,
    ToggleButtonGroup,
    Typography
} from "@mui/material";

export const Direction = () => {
    const [transportation, setTransportation] = React.useState('public');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newTransportation: string,
    ) => {
        setTransportation(newTransportation);
    };

    let info: string[]
    switch (transportation) {
        default:
        case "public":
            info = [
                "2호선 낙성대역(4번 출구) ➡️ 낙성주유소 뒤편 2번 마을버스 탑승, '노천강당' 또는 '기초과학공동기기원, 교수회관' 정류장에서 하차",
                "2호선 서울대입구역(3번 출구) ➡️ 5511버스 탑승, '기초과학공동기기원, 교수회관' 정류장에서 하차",
            ]
            break
        case "car":
            info = [
                "서울대학교 정문 진입 후 좌회전 ➡️ 직진 ➡️ 기숙사 삼거리에서 오른쪽으로 400m 직진",
                "서울대학교 후문 진입 후 기숙사 삼거리(첫번째 삼거리)에서 좌회전 후 400m 직진",
            ]
            break
        case "taxi":
            info = [
                "서울대역, 낙성대역에서 목적지로 '서울대학교 교수회관' 또는 '서울대학교 학군단' 전달",
                "약 5~10분 소요",
            ]
            break
    }

    return (
        <CardContent>
            <Typography variant="h6">서울대학교 교수회관</Typography>
            <Typography>서울시 관악로1 서울대학교 65동(신림동 산56-1)</Typography>
            <Typography variant="subtitle2" color="gray" gutterBottom>※ 낙성대 근처 '호암교수회관'과 혼동 주의!</Typography>
            <ToggleButtonGroup
                color="primary"
                value={transportation}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="public">대중교통 🚌</ToggleButton>
                <ToggleButton value="car">자가용 🚗</ToggleButton>
                <ToggleButton value="taxi">택시 🚕</ToggleButton>
            </ToggleButtonGroup>
            <List dense>{info.map((v, id) => <ListItem key={id}><Typography variant="body2">- {v}</Typography></ListItem>)}</List>
        </CardContent>
    )
}