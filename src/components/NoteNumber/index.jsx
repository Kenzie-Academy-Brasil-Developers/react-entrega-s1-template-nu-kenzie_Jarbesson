export const NoteNumber = ({ listNotes }) => {
console.log(listNotes, "Venum")
    const totalValue = listNotes?.reduce((prevValue, note) => {
        if (note.category === "Despesa") {
            return  prevValue - note.number;
            
            
        }
        return prevValue + note.number;
    }, 0)

    return (
        <div>
            <div>
                <p>Valor total:</p>
                <p>{totalValue}</p>
            </div>

            <p>O valor se refere ao saldo</p>
        </div>
    )
}