import {Component} from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CelebrationIcon from '@mui/icons-material/Celebration';
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
                <Typography variant="h6" component="span">{event.title}</Typography>
                <Typography color="text.secondary">{event.description}</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

const histories: EventItem[] = [
    {date: "2011. 07. 19", title: "국토대장정 시작", description: "우리의 만남 국토 대장정"},
    {date: "2011. 08. 14", title: "사랑의 시작", description: "남산타워에서 출발!", icon: <FavoriteIcon sx={{ color: "red" }}/>},
    {date: "2014. 04. 24", title: "군입대", description: "빠이빠이"},
    {date: "2022. 08. 20", title: "결혼식", description: "드디어 결혼의 골인 🏁", icon: <CelebrationIcon />},
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