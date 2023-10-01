import styles from "./style.module.scss"
export const Select = ({children, id, label, value, setValue, name}) =>{
    return(
        <div className={styles.selectBox}> 
            <label htmlFor={id}>{label}</label>
            <select name={id}
             id={id}  
             value={value}
              onChange={(e) => setValue(e.target.value)}
              >{children}</select>
        </div>
    )
}