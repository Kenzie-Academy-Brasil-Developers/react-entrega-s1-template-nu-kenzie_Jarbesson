import nuKenzie from "../../assets/NuKenzie.svg"
import styles from "./style.module.scss"


export const Header = () =>{
    return(
        <header className={styles.HeaderBox}> 
            <img src={nuKenzie} alt="Logo da NuKenzie" />
        </header>
    )
}