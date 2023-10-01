import styles from "./style.module.scss"
export const FinanceCard = ({ title, number, id, removeNote, category }) => {
   

    return (
        <div className={styles.cards}>
            <h3 className="title two">{title}</h3>
            <p className="body">{category}</p>

            <div>
                <p className="body">{Number(number).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</p>
                <button onClick={() => removeNote(id)}>Excluir</button>
            </div>
        </div>
    )
}