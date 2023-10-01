import { NoteNumber } from "../NoteNumber";
import { FinanceCard } from "./FinanceCard";

export const FinanceList = ({ listNotes, removeNote }) => {
    return (
        <div>
            <h2>Resumo financeiro</h2>
            <NoteNumber listNotes={listNotes}/>
            {listNotes.length > 0 ? (
                <ul>
                    {listNotes.map((note) => {
                        const { title, number, id, category } = note;
                        return (
                            <FinanceCard
                                key={id}
                                id={id}
                                title={title}
                                number={number}
                                category={category}
                                removeNote={removeNote}
                            />
                        );
                    })}
                </ul>
            ) :

                <p>Você ainda não possui nenhum lançamento</p>
            }


        </div>
    )
}