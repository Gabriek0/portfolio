import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineMail } from 'react-icons/ai'
import { IconContext } from "react-icons";
import styles from './styles.module.scss';

export function SectionContacts() {
    return (
        <IconContext.Provider value={{ className: `${styles.icons}` }}>
            <div className={styles.contactContainer}>
                <ul>
                    <li>
                        <div>
                            <AiFillLinkedin />
                        </div>
                        <h3>LinkedIn</h3>
                    </li>

                    <li>
                        <div>
                            <AiFillGithub />
                        </div>
                        <h3>Github</h3>
                    </li>

                    <li>
                        <div>
                            <AiFillInstagram />
                        </div>
                        <h3>Instagram</h3>
                    </li>

                    <li>
                        <div>
                            <AiOutlineMail />
                        </div>
                        <h3>E-mail</h3>
                    </li>
                </ul>
            </div>
        </IconContext.Provider>
    )
}