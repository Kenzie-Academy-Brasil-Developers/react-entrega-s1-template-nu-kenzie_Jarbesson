
import styles from "./style.module.scss"
export const Inputs = ({ label, type, id,name, placeholder, value, setValue}) => {
    return (
        <div className={styles.inputBox}>
            <label htmlFor={id}>{label}</label>
            <input  
            type={type} 
            name={name} 
            id={id} 
            placeholder={placeholder} 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
             />
        </div>
    )
}