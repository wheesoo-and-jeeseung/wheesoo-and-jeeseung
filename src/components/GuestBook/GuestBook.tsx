import {
    Grid, IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer, TableFooter,
    TableHead,
    TablePagination,
    TableRow, TextField, Typography
} from "@mui/material";
import {addGuestBook, useListGuestBook} from "../../common/repository";
import {useState} from "react";
import SendIcon from "@mui/icons-material/Send";

export const GuestBook = () => {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')

    const [ page, setPage ] = useState(0)
    const { isLoading, data: items, refetch } = useListGuestBook()
    const rowsPerPage = 5

    const count = items?.docs.length || 0

    const rows = isLoading ? (
        <TableRow><TableCell>불러오는 중...</TableCell></TableRow>
    ) : (
        items?.docs.slice(5*page, 5*(page+1)).map(v => (
                <TableRow key={v.id}>
                    <TableCell>{v.get("name")}</TableCell>
                    <TableCell>{v.get("message")}</TableCell>
                </TableRow>
            ))
        )

    return (
        <>
            <Typography variant="h6">축하 메세지 남기기 🎉</Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                    <TextField
                        required
                        id="outlined-required"
                        label="성함"
                        variant="standard"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Grid>
                <Grid item xs={7}>
                    <TextField
                        required
                        id="outlined-basic"
                        label="메세지"
                        variant="standard"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <IconButton color="primary" onClick={() => {
                        if (username && message) {
                            addGuestBook(username, message)
                            setUsername('')
                            setMessage('')
                            refetch()
                        }
                    }}>
                        <SendIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <br/>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{minWidth: "80px"}}>이름</TableCell>
                            <TableCell>메세지</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                count={count}
                                page={page}
                                rowsPerPage={rowsPerPage}
                                onPageChange={(e, p)=>{
                                    setPage(p)
                                }}
                                rowsPerPageOptions={[5]}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </>
    )
}
