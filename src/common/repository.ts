import { db } from "./firebase";
import { doc, setDoc, getDocs, getDoc, addDoc, collection }from "firebase/firestore";
import { currentUser } from "./user";

const GUESTBOOK_COLLECTION = "guestbook"
const QUIZ_COLLECTION = "quiz"

const guestBookCol = collection(db, GUESTBOOK_COLLECTION)
const quizCol = collection(db, QUIZ_COLLECTION)

export const addGuestBook = (name: string, message: string) => {
    const guestBookRef = doc(guestBookCol, currentUser)
    setDoc(guestBookRef, {
        name: name,
        message: message,
        timestamp: new Date(),
    }).then((v) => {
        console.log(v)
    })
}

export const listGuestBook = () => {
    const guestBookRef = doc(guestBookCol, currentUser)
}

export const addQuizResult = (questionId: number, question: string, correct: boolean) => {
    const quizRef = doc(quizCol, questionId.toString(), "users", currentUser)
    setDoc(quizRef, {
        questionId: questionId,
        question: question,
        correct: correct,
        timestamp: new Date(),
    }).then(v => {
        console.log(v)
    })
}