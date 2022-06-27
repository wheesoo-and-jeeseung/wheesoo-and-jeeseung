import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {collection} from "../../components/Quiz/Quiz";
import {useQuizCorrects, useQuizParticipants} from "../../common/repository";

export const Statistics = () => {
    return (
        <>
            <Typography>퀴즈</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableCell>ID</TableCell>
                        <TableCell>질문</TableCell>
                        <TableCell>정답률</TableCell>
                    </TableHead>
                    <TableBody>
                        {collection.map(v => <QuizStatistics questionId={v.id} question={v.question}/>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

interface QuizStatisticsProps{
    questionId: number
    question: string
}

const QuizStatistics = ({questionId, question}: QuizStatisticsProps) => {
    const qc = useQuizCorrects(questionId)
    const qp = useQuizParticipants(questionId)

    return <TableRow>
        <TableCell>Q{questionId}</TableCell>
        <TableCell>{question}</TableCell>
        <TableCell>{!qc.isLoading && !qp.isLoading ? ((qc.data || 0) / (qp.data || 1) * 100).toFixed(2)+`%[${qc.data || 0}/${qp.data || 0}]` : "로딩 중"}</TableCell>
    </TableRow>
}