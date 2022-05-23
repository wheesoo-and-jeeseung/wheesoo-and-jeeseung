import {signInAnonymously} from "firebase/auth";
import {auth} from "./firebase";

export let currentUser: string
signInAnonymously(auth).then((v) => {
    currentUser = v.user.uid
})
