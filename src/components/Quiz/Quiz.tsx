import {Card, CardContent, Grid, Icon, IconButton, Typography} from "@mui/material";
import React, {Component} from "react";
import QuizIcon from '@mui/icons-material/Quiz';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

interface QuizProps {
}

interface QuizState {
    position: number
    answer?: boolean
}

interface QA {
    question: string
    answer: boolean
    commentary: string
}

const collection: QA[] = [
    {question:"결혼식날 기준으로 사귄지 4000일이 넘었다.", answer: true, commentary: "8월 20일 기준으로 4025일만에 결혼합니다."},
    {question:"처음으로 손을 잡은 날은 국토대장정 중이었다.", answer: false, commentary: "처음으로 사귀기로 한 남산타워에서 손을 처음 잡았습니다."},
]

export class Quiz extends Component<QuizProps, QuizState> {
    private shuffled: QA[];

    constructor(props: QuizProps) {
        super(props);
        this.shuffled = collection
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
        this.state = {
            answer: undefined,
            position: 0
        }
        this.handlerAnswerYes = this.handlerAnswerYes.bind(this)
        this.handlerAnswerNo = this.handlerAnswerNo.bind(this)
        this.handlerNextQuiz = this.handlerNextQuiz.bind(this)
    }

    handlerAnswerYes() {
        this.setState({
            answer: true,
        })
    }

    handlerAnswerNo() {
        this.setState({
            answer: false,
        })
    }

    handlerNextQuiz() {
        const position = this.state.position
        this.setState({
            position: position + 1,
            answer: undefined,
        })
    }

    render() {
        let icon, message, buttons

        const TitleIconSize = 30
        const AnswerIconSize = 30
        const messageColor = "gray"

        if (this.state.position >= this.shuffled.length) {
            icon = <EmojiPeopleIcon sx={{fontSize: TitleIconSize}} htmlColor="gray"/>
            message = (
                <>
                    <Typography color={messageColor} component="div">
                        모든 문제를 풀어 주셔서 감사합니다.
                    </Typography>
                    <Typography fontSize={AnswerIconSize}>🙇‍♂️</Typography>
                </>
            )
        } else if (this.state.answer === undefined) {
            icon = <QuizIcon sx={{fontSize: TitleIconSize}} htmlColor="gray"/>
            message = (
                <Typography color={messageColor} component="div">
                    {this.shuffled[this.state.position].question}
                </Typography>
            )
            buttons = (
                <React.Fragment>
                    <Grid item xs={6} textAlign="center">
                        <IconButton onClick={this.handlerAnswerYes}>
                            <CheckIcon sx={{fontSize: AnswerIconSize}}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={6} textAlign="center">
                        <IconButton onClick={this.handlerAnswerNo}>
                            <ClearIcon sx={{fontSize: AnswerIconSize}}/>
                        </IconButton>
                    </Grid>
                </React.Fragment>
            )
        } else {
            // 정답
            if (this.state.answer === this.shuffled[this.state.position].answer) {
                icon = <ThumbUpIcon sx={{fontSize: TitleIconSize}} htmlColor="green"/>
            } else { // 오답
                icon = <ThumbDownIcon sx={{fontSize: TitleIconSize}} htmlColor="red"/>
            }
            message = (
                <Typography color={messageColor} component="div">
                    {this.shuffled[this.state.position].commentary}
                </Typography>
            )
            buttons = (
                <Grid item xs={12} textAlign="center">
                    <IconButton onClick={this.handlerNextQuiz}>
                        <ArrowForwardIcon sx={{fontSize: AnswerIconSize}}/>
                    </IconButton>
                </Grid>
            )
        }

        return (
            <>
                <Card sx={{flexGrow: 1}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" textAlign="center">
                            Quiz
                        </Typography>
                        <Grid container rowSpacing={2}>
                            <Grid item xs={12} textAlign="center">
                                {icon}
                            </Grid>
                            <Grid item xs={12} textAlign="center">
                                {message}
                            </Grid>
                            {buttons}
                        </Grid>
                    </CardContent>
                </Card>
            </>
        )
    }
}