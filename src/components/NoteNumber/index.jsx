import styles from "./style.module.scss"
export const NoteNumber = ({ listNotes }) => {

    const totalValue = listNotes?.reduce((prevValue, note) => {
        const value = Number(note.number)
        if (note.category === "Despesa") {
            return  prevValue - value;
            
            
        }
        return prevValue + value;
    }, 0)

    return (
        <div className={styles.valueBox}>
            <div>
                <h3 className="title two">Valor total:</h3>
                <p>{totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})} </p>
            </div>

            <p className="body">O valor se refere ao saldo</p>
        </div>
    )
}