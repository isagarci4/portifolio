import { ArrowRight } from 'phosphor-react'

import styles from './Presentation.module.css'

export function Presentation() {
    return(
        <div className={styles.presentation}>
            <div className={styles.avatar}>
                <img src="https://via.placeholder.com/64x54" />
            </div>
            <h1>Olá, eu sou a Isa 🤙</h1>
            <p>Desenvolvo <span>ideias</span> e ajudo a construir um mundo melhor através do software.</p>
            <div className={styles.buttons}>
                <button className={styles.contactButton}>Contato</button>
                <button className={styles.dowloadButton}>
                    Download CV
                    <ArrowRight  size={20} weight='bold' />
                </button>
            </div>
        </div>
    )
}