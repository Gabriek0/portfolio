import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineMail } from 'react-icons/ai'
import { IconContext } from "react-icons";
import styles from './styles.module.scss';

export function SectionContacts() {
    return (
        <IconContext.Provider value={{ className: `${styles.icons}` }}>
            <div className={styles.contactContainer}>
                <ul>
                    <a href="https://www.linkedin.com/in/gabriel-henrique-664bb219a/" target="_blank">
                        <li>
                            <div>
                                <AiFillLinkedin />
                            </div>
                            <h3>LinkedIn</h3>
                            <p>Gabriel Henrique</p>
                        </li>
                    </a>

                    <a href="https://github.com/Gabriek0" target="_blank">
                        <li>
                            <div>
                                <AiFillGithub />
                            </div>
                            <h3>Github</h3>
                            <p>Gabriek0</p>
                        </li>
                    </a>

                    <a href="https://www.instagram.com/gabriel.sanches7/" target="_blank">
                        <li>
                            <div>
                                <AiFillInstagram />
                            </div>
                            <h3>Instagram</h3>
                            <p>@gabriel.sanches7</p>
                        </li>
                    </a>

                    <a>
                        <li>
                            <div>
                                <AiOutlineMail />
                            </div>
                            <h3>E-mail</h3>
                            <p>gabriel.sanches170@gmail.com</p>
                        </li>
                    </a>
                </ul>
            </div>
        </IconContext.Provider>
    )
}