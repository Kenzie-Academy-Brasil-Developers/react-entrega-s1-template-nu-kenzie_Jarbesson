export const FinanceCard = ({ title, number, id, removeNote, category }) => {
    console.log(number)

    return (
        <div>
            <h3>{title}</h3>
            <p>{category}</p>

            <div>
                <p>{Number(number).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</p>
                <button onClick={() => removeNote(id)}>Excluir</button>
            </div>
        </div>
    )
}