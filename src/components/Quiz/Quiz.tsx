import {Card, CardContent, Grid, IconButton, Typography} from "@mui/material";
import React from "react";
import QuizIcon from '@mui/icons-material/Quiz';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import {addQuizResult} from "../../common/repository";
import {useNavigate} from "react-router-dom";

interface QA {
    id: number
    question: string
    answer: boolean
    commentary: string
}

export const collection: QA[] = [
    {id: 1, question:"결혼식날 기준으로 사귄지 4000일이 넘었다.", answer: true, commentary: "8월 20일 기준으로 4025일만에 결혼합니다."},
    {id: 2, question:"처음으로 손을 잡은 날은 국토대장정 중이었다.", answer: false, commentary: "처음으로 사귀기로 한 남산타워에서 손을 처음 잡았습니다."},
    {id: 3, question: "둘이 가장 좋아하는 공통음식은 라면이다", answer: false, commentary: "둘은 데이트를 하면서 마라샹궈를 제일 많이먹고 좋아합니다. 같이먹으러가요"},
    {id: 4, question: "둘이 가장 데이트를 많이하는 장소는 이태원이다", answer: true, commentary: "둘은 이태원 거리를 걸어다니는 것을 좋아해서 자주 갑니다. 주말에 이태원에서 목격하실수도...ㅎㅎ"},
    {id: 5, question: "둘이 제일 처음 맞춘 커플아이템은 커플링이다", answer: false, commentary: "둘이 제일 처음 맞춘 커플아이템은 티셔츠입니다. 거의 처음이자 마지막이였네요 ㅎㅎ"},
    {id: 6, question: "둘의 커플 명칭은 휫승이다", answer: true, commentary: "둘의 커플 명칭은 잘 사용하진 않지만 휫승입니다. 인스타그램에서 태그를 확인하실 수 있어요"},
    {id: 7, question: "둘은 소개팅으로 만났다", answer: false, commentary: "둘은 대학생때 학생회를 통해서 처음 만났습니다."},
    {id: 8, question: "둘은 같은 학교를 6년간 같이 다녔다", answer: true, commentary: "둘은 학부 뿐만아니라 대학원도 같은 학교를 다니게되어 6년동안 CC였다고합니다."},
    {id: 9, question: "둘은 서로 비밀번호를 공유한다", answer: true, commentary: "딩동댕! 서로 아무런 비밀이 없을정도로 투명하답니다. 이제라도 바꿔야할까요?ㅎㅎ"},
    {id: 10, question: "둘은 서로 방귀를 텃다", answer: false, commentary: "둘은 아직 트지않았습니다."},
    {id: 11, question: "휘수는 지승이의 면회를 3번이상 갔다", answer: false, commentary: "공교롭게도 지승이가 의경으로 매주 밖을 나오게되어, 면회를 가본적이 없었습니다....."},
    {id: 12, question: "둘은 사귀고나서 살이 10kg이상 쪘다.", answer: true, commentary: "사귄날부터 지승이는 22kg, 휘수는 10kg 살크업이 진행되었었습니다."},
    {id: 13, question: "둘의 혈액형은 같다.", answer: false, commentary: "지승이는 O형, 휘수는 B형으로 둘의 혈액형은 다릅니다. 휘수는 지승이의 피를 수혈받을 수 있죠"},
    {id: 14, question: "둘은 비오는 날 데이트를 좋아한다", answer: false, commentary: "둘은 비맞는걸 정말 싫어합니다. 그래서 비가오면 데이트는 무조건 실내에서 합니다."},
    {id: 15, question: "둘은 애완동물을 키울 것이다", answer: false, commentary: "둘은 고양이파입니다. 하지만, 결혼해서 키우지는 못할 것 같아요."},
    {id: 16, question: "둘의 신혼여행지는 칸쿤이다", answer: true, commentary: "둘은 여러가지 후보들중에서 결정한곳이 칸쿤입니다! 즐겁고 재밌게 놀다오겠습니다~"},
    {id: 17, question: "둘은 같은 직장에서 일하고있다", answer: false, commentary: "현재 지승이는 직장을 다니고있고, 휘수는 미국에서 포닥생활을 진행중인 롱디 커플입니다."}
]

const shuffled = collection
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

export const Quiz = () => {
    const navigate = useNavigate();
    const [clickCnt, setClickCnt] = React.useState(0)
    const [correct, setCorrect] = React.useState<boolean | undefined>(undefined)
    const [position, setPosition] = React.useState(0)
    const [score, setScore] = React.useState(0)

    let icon, message, buttons

    const TitleIconSize = 30
    const AnswerIconSize = 30
    const messageColor = "gray"

    const handlerAnswer = (ox: boolean) => {
        const isCorrect = shuffled[position].answer === ox
        setCorrect(isCorrect)
        if (isCorrect) {
            setScore(score + 1)
        }
        addQuizResult(shuffled[position].id, shuffled[position].question, isCorrect)
    }
    const handlerNextQuiz = () => {
        setCorrect(undefined)
        setPosition(position+1)
    }

    if (shuffled.length <= position) {
        icon = <EmojiPeopleIcon sx={{fontSize: TitleIconSize}} htmlColor="gray"/>
        message = (
            <>
                <Typography></Typography>
                <Typography color={messageColor} component="div">
                    저희에 대해서 {Math.ceil(score / shuffled.length * 100)}% 만큼 알고 계시군요!<br/>
                    모든 문제를 풀어 주셔서 감사합니다.
                </Typography>
                <Typography fontSize={AnswerIconSize}>🙇‍♂️</Typography>
            </>
        )
    } else if (correct === undefined) {
        icon = <QuizIcon sx={{fontSize: TitleIconSize}} htmlColor="gray"/>
        message = (
            <Typography color={messageColor} component="div">
                {shuffled[position].question}
            </Typography>
        )
        buttons = (
            <React.Fragment>
                <Grid item xs={6} textAlign="center">
                    <IconButton onClick={() => handlerAnswer(true)}>
                        <CircleOutlinedIcon sx={{fontSize: AnswerIconSize}}/>
                    </IconButton>
                </Grid>
                <Grid item xs={6} textAlign="center">
                    <IconButton onClick={() => handlerAnswer(false)}>
                        <ClearIcon sx={{fontSize: AnswerIconSize}}/>
                    </IconButton>
                </Grid>
            </React.Fragment>
        )
    } else {
        // 정답
        if (correct) {
            icon = <ThumbUpIcon sx={{fontSize: TitleIconSize}} htmlColor="green"/>
        } else { // 오답
            icon = <ThumbDownIcon sx={{fontSize: TitleIconSize}} htmlColor="red"/>
        }
        message = (
            <Typography color={messageColor} component="div">
                {shuffled[position].commentary}
            </Typography>
        )
        buttons = (
            <Grid item xs={12} textAlign="center">
                <IconButton onClick={handlerNextQuiz}>
                    <ArrowForwardIcon sx={{fontSize: AnswerIconSize}}/>
                </IconButton>
            </Grid>
        )
    }

    return (
        <>
            <Card sx={{flexGrow: 1}}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" textAlign="center" onClick={() => {
                        if (clickCnt >= 10) {
                            setClickCnt(0)
                            navigate('/statistics')
                        } else {
                            setClickCnt(clickCnt + 1)
                        }
                    }}>
                        👰‍♀️ 신부 | 신랑 🤵‍♂️ 퀴즈 타임!
                    </Typography>
                    <br/>
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