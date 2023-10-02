
import { FinanceCard } from "./FinanceCard";
import styles from "./style.module.scss"

export const FinanceList = ({ listNotes, removeNote }) => {
    return (
        <div className={styles.listCards}>
         
            <h3 className="title two">Resumo financeiro</h3>
            {listNotes.length > 0 ? (
                <ul>
                    <li className={` ${category === "tarefas" ? styles.green : styles.white}`}>
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
                    </li>
                </ul>
            ) :

                <p className="title one ">Você ainda não possui nenhum lançamento</p>
            }


        </div>
    )
}