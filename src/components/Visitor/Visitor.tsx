import {Button, TextField, Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react";
import {addGuestBook} from "../../common/repository";

export const Visitor = () => {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')

    return (
        <>
            <Typography>축하 메세지 남기기</Typography>
            <TextField
                required
                id="outlined-required"
                label="성함"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <TextField
                required
                id="outlined-basic"
                label="메세지"
                variant="outlined"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={() => {
                addGuestBook(username, message)
                setUsername('')
                setMessage('')
            }}>
                Send
            </Button>
        </>
    )
}