import Image from 'next/image';
import styles from './styles.module.scss';
import developerIcon from '../../../public/images/developer.svg';
import { SectionAboutMe } from '../SectionAboutMe';
import { SectionContacts } from '../SectionContacts';
import { SectionProjects } from '../SectionProjects';
import { SectionServices } from '../SectionServices';
import { SectionSkills } from '../SectionsSkills';

export function Section() {
    return (
        <>
            <section className={styles.sectionContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.presentationContainer}>
                        <h1>Olá, eu sou o <br></br>Gabriel Henrique :)</h1>
                        <h5>Desenvolvedor Front-end</h5>
                        <div className={styles.buttonsContainer}>
                            <button>Download CV</button>
                            <button>Entrar em contato</button>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={developerIcon}
                        ></Image>
                    </div>

                </div>
                <SectionAboutMe />
                <SectionContacts />
                <SectionProjects />
                <SectionServices />
                <SectionSkills />
            </section>
        </>
    )
}