import styles from "./style.module.scss"
export const FinanceCard = ({ title, number, id, removeNote, category }) => {

    const boderLeftColor = category === "Despesa" ? styles.boderLeftGrey : styles.boderLeftGreen
    return (
        <div className={`${styles.cards} ${boderLeftColor}`}>
            <div className={styles.divFirst}>
                <h3 className="title two">{title}</h3>
                <p className="body">{category}</p>
            </div>

            <div className={styles.divSecond}>
            <p className="body">{Number(number).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</p>
            <button onClick={() => removeNote(id)}>Excluir</button>
            </div>
        </div>
    )
}