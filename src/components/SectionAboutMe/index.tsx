import { AboutMeData } from '../../data/ProjectData';
import styles from './styles.module.scss';

export function SectionAboutMe() {
    return (
        <div id="aboutMe" className={styles.aboutMeContainer}>
            <h1>Sobre mim</h1>
            <p>{AboutMeData}</p>
        </div>
    )
}