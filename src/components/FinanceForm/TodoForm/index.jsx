import { useState } from "react"
import { Inputs } from "../inputs";
import { Select } from "../Select";
import { InputValue } from "../InputValue";
import styles from "./style.module.scss"
export const TodoForm = ({addNote}) => {
    const [title, setTitle] = useState("")
    const [number, setNumber] = useState("")
    const [category, setCategory] = useState("Entrada")

const submit = (e) =>{
    e.preventDefault();
    if ( title !== "" && number !== "") {
        addNote(title, number,category);
        setTitle("")
        setNumber("")

    }
}
 

    return (
        <div className={styles.formBox}>
            <form onSubmit={submit}>
                <Inputs 
                label="Descrição: " 
                type="text"  
                placeholder="Digite aqui sua descrição"
                 value={title} 
                 setValue={setTitle} /> 

                <InputValue label="Valor (R$)" 
                type="number" 
                value={number} 
                setValue={setNumber}/>
                
                 <Select id="category" label="Tipo de valor"  setValue={setCategory} value={category}>                
                 <option value="Entrada">Entrada</option>
                 <option value="Despesa">Despesa</option>
                 </Select>

                <button type="submit" className="btn">Inserir valor</button>         
            </form>
        </div>
    )
}