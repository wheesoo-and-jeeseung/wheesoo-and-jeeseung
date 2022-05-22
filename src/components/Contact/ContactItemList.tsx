import {Box, Button, Grid, IconButton, Snackbar, Stack, Typography} from "@mui/material";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SmsIcon from '@mui/icons-material/Sms';
import CloseIcon from '@mui/icons-material/Close';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import React from "react";

export const ContactItemList = () => {
    const jsh: ContactItemProps = {
        relation: "신랑",
        name: "한지승",
        phone: "01048033187",
        account: "신한 110-302-498397"
    }
    const wsk: ContactItemProps = {
        relation: "신부",
        name: "김휘수",
        phone: "01030501614",
        account: "농협 312-0119-4419-11"
    }
    const jkh: ContactItemProps = {
        relation: "아버지",
        name: "한종기",
        phone: "01042742289",
        account: "신한 110-004-710541"
    }
    const esl: ContactItemProps = {
        relation: "어머니",
        name: "이은숙",
        phone: "01042772289",
        account: "하나 620-163420-469"
    }
    const jbk: ContactItemProps = {
        relation: "아버지",
        name: "김종부",
        phone: "01052641614",
        account: "국민 092-21-0248-333"
    }
    const jhs: ContactItemProps = {
        relation: "어머니",
        name: "신정혜",
        phone: "01023581614",
        account: "국민 493625-01-024712"
    }

    const mintColor = "#95d1cd"
    const pinkColor = "#f9b9da"

    return (
        <Stack>
            <div>
                <Typography component="span" variant="h6" gutterBottom color={mintColor}>🤵‍♂️ 신랑</Typography> | <Typography component="span" variant="h6" gutterBottom color={pinkColor}>신부 👰‍♀️</Typography>
            </div>
            <br/>
            <Stack>
                <ContactItem relation={jsh.relation} name={jsh.name} phone={jsh.phone} account={jsh.account}/>
                <ContactItem relation={wsk.relation} name={wsk.name} phone={wsk.phone} account={wsk.account}/>
            </Stack>
            <br/>
            <Typography variant="h6" color={mintColor} gutterBottom>신랑 측 혼주</Typography>
            <Stack>
                <ContactItem relation={jkh.relation} name={jkh.name} phone={jkh.phone} account={jkh.account}/>
                <ContactItem relation={esl.relation} name={esl.name} phone={esl.phone} account={esl.account}/>
            </Stack>
            <br/>
            <Typography variant="h6" color={pinkColor} gutterBottom>신부 측 혼주</Typography>
            <Stack>
                <ContactItem relation={jbk.relation} name={jbk.name} phone={jbk.phone} account={jbk.account}/>
                <ContactItem relation={jhs.relation} name={jhs.name} phone={jhs.phone} account={jhs.account}/>
            </Stack>
        </Stack>
    )
}

interface ContactItemProps {
    relation: string
    name: string
    phone: string
    account: string
}

const ContactItem = (props: ContactItemProps) => {
    const [open, setOpen] = React.useState(false);
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const copyClipboard = () => {
        navigator.clipboard.writeText(props.account).then(() => console.log("copied"))
        setOpen(true);
    }
    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <Box display="inline-flex" sx={{width: "100%"}}>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message={props.name + "님의 계좌번호가 클립보드에 복사되었습니다."}
                action={action}
                anchorOrigin={{vertical: "top", horizontal: "center"}}
                key="clipboard"
            />
            <Box sx={{width: "100%"}}>
                <Typography variant="body2">{props.relation}</Typography>
                <Typography variant="h6">{props.name}</Typography>
            </Box>
            <Grid sx={{width: "100%"}} alignItems="center" justifyContent="center">
                <Button href={"tel://"+props.phone} startIcon={<PhoneAndroidIcon/>}>전화</Button>
                <Button href={"sms://"+props.phone} startIcon={<SmsIcon/>}>문자</Button>
                <Button onClick={copyClipboard} startIcon={<MonetizationOnIcon/>}>송금</Button>
            </Grid>
        </Box>
    )
}