import Image from 'next/image';
import styles from './styles.module.scss';
import developerIcon from '../../../public/images/developer.svg';
import { SectionAboutMe } from '../SectionAboutMe';
import { SectionContacts } from '../SectionContacts';
import { SectionProjects } from '../SectionProjects';
import { SectionServices } from '../SectionServices';
import { SectionSkills } from '../SectionsSkills';

interface SectionProps {
    openModal: () => void
}


export function Section({ openModal }: SectionProps) {
    return (
        <>
            <section className={styles.sectionContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.presentationContainer}>
                        <h1>Olá, eu sou o <br></br>Gabriel Henrique</h1>
                        <h5>Desenvolvedor Front-end</h5>
                        <div className={styles.buttonsContainer}>

                            <a href="../../../public/documents/cv.pdf" download>
                                <button className={styles.buttonDownload} type="button">Download CV</button>
                            </a>

                            <a href="https://web.whatsapp.com/send?phone=5513997522115" target="_blank">
                                <button className={styles.buttonContact}>Entrar em contato</button>
                            </a>
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
                <SectionProjects
                    openModal={openModal}
                />
                <SectionServices />
                <SectionSkills />
            </section>
        </>
    )
}