import { useState } from "react"
import { TodoForm } from "../../components/FinanceForm/TodoForm"
import { FinanceList } from "../../components/FinanceList"

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
            <main>
                <TodoForm addNote={addNote} />
                <FinanceList listNotes={listNotes} removeNote={removeNote} />
            </main>
        </>
    )
}