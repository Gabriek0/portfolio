import styles from './styles.module.scss';

export function SectionContacts() {
    return (
        <div className={styles.contactContainer}>
            <ul>
                <li>LinkedIn</li>
                <li>E-mail</li>
                <li>Instagram</li>
                <li>Telefone</li>
            </ul>
        </div>
    )
}