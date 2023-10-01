export const InputValue = ({label,type,name, id, value, placeholder,setValue}) =>{
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input 
            type={type} 
            name={name} 
            value={value} 
            id={id} 
            placeholder={placeholder} 
            onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}