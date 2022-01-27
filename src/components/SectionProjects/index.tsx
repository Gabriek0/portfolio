import styles from './styles.module.scss';

export function SectionProjects() {
    return (
        <div className={styles.projectsContainer}>
            <h1>Projetos</h1>
            <ul>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
                <li>Project 4</li>
                <li>Project 5</li>
                <li>Project 6</li>
            </ul>
        </div>
    )
}