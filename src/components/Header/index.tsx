import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.contentContainer}>
                <h2>Portfólio</h2>
                <nav>
                    <a href="#aboutMe">Sobre mim</a>
                    <a href="#projects">Projetos</a>
                    <a href="#services">Serviços</a>
                    <a href="#skills">Minhas skills</a>
                </nav>
            </div>
        </header>
    )
}