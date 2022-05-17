import {Component} from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {Typography} from "@mui/material";

interface HistoryProps {}
interface HistoryState {}

interface EventItem {
    date: string
    title: string
    description: string
    icon?: JSX.Element
}

const Event = (idx: number, event: EventItem) => {
    return (
        <TimelineItem key={idx}>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
                align={idx % 2 == 0 ? "left" : "right"}
            >
                {event.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector/>
                <TimelineDot variant="outlined">
                    {event.icon}
                </TimelineDot>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                <Typography component="span">{event.title}</Typography>
                <Typography variant="body2" color="text.secondary">{event.description}</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

const histories: EventItem[] = [
    {date: "2011. 07. 19", title: "국토대장정 시작", description: "우리의 만남 국토 대장정"},
    {date: "2011. 08. 14", title: "사랑의 시작", description: "남산타워에서 출발!", icon: <FavoriteIcon sx={{ color: "red" }}/>},
    // {date: "2013. 10. 30", title: "위기 극복 탈출", description: "암흑기", icon: <SchoolIcon/>},
    {date: "2014. 04. 24", title: "군입대 👮‍♂️", description: "잠시만 안녕"},
    // {date: "2016. 01. 23", title: "군전역 🫡", description: "오예"},
    // {date: "2018. 09. 01", title: "지승 가방끈 늘리기", description: "2등급 석사 노예"},
    {date: "2021. 02. 18", title: "✈️ 휘수 미국행", description: "잠시만 안녕 ver.2"},
    {date: "2022. 08. 20", title: "결혼식", description: "드디어 결혼에 골인", icon: <Typography>🎉</Typography>},
]

export class History extends Component<any, any> {
    render() {
        return (
            <Timeline position="alternate">
                {histories.map((event: EventItem, idx: number) => Event(idx, event))}
            </Timeline>
        )
    }
}