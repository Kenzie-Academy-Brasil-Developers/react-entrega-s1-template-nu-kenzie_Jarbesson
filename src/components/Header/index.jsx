import Nukenzie from "../../assets/Nukenzie.png"
import styles from "./style.module.scss"


export const Header = () =>{
    return(
        <header className={styles.HeaderBox}> 
            <img src={Nukenzie} alt="Logo da NuKenzie" />
        </header>
    )
}