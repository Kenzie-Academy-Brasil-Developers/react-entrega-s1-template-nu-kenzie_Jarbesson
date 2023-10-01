import { useState } from "react"
import { TodoForm } from "../../components/FinanceForm/TodoForm"
import { FinanceList } from "../../components/FinanceList"
import { Header } from "../../components/Header"
import styles from "./style.module.scss"
import { NoteNumber } from "../../components/NoteNumber"

export const HomePage = () => {
    const [listNotes, setListNotes] = useState([])

    const addNote = (title, number, category) => {
        const id = crypto.randomUUID();
        const newNote = { title, number, category, id }

        setListNotes([...listNotes, newNote])

        console.log(listNotes)

    }

    const removeNote = (id) => {
        const listerFILter = listNotes.filter((note) => {
            if (note.id !== id) {
                return note
            }
        });
        setListNotes(listerFILter);
    }

    return (
        <>
            <Header />
            <main className={styles.container} >
                <div className={styles.flexBox}>
                    <TodoForm addNote={addNote} />
                    <NoteNumber listNotes={listNotes}/>
                    <FinanceList listNotes={listNotes} removeNote={removeNote} />
                </div>

            </main>
        </>
    )
}