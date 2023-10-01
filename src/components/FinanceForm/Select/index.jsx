export const Select = ({children, id, label, value, setValue, name}) =>{
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <select name={id}
             id={id}  
             value={value}
              onChange={(e) => setValue(e.target.value)}
              >{children}</select>
        </div>
    )
}