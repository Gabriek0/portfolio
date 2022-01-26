import { useState } from 'react';
import styles from './styles.module.scss';

export function Header() {
    const [hoverEffect, setHoverEffect] = useState(false);
    return (
        <header className={styles.headerContainer}>
            <div className={styles.contentContainer}>
                <h2>Portfólio</h2>
                <nav>
                    <a>Sobre mim</a>
                    <a>Projetos</a>
                    <a>Serviços</a>
                    <a>Minhas skills</a>
                </nav>
            </div>
        </header>
    )
}