import {Box, Button, Grid, IconButton, TextField, Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react";
import {addGuestBook} from "../../common/repository";

export const VisitorInput = () => {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')

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
                        }
                    }}>
                        <SendIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    )
}