import Image from 'next/image';
import styles from './styles.module.scss';

import cssIcon from '../../../public/images/css-icon.svg'
import htmlIcon from '../../../public/images/html-icon.svg'
import jsIcon from '../../../public/images/js-icon.svg'
import tsIcon from '../../../public/images/ts-icon.svg'
import reactIcon from '../../../public/images/react-icon.svg'
import nextIcon from '../../../public/images/next-icon.svg'



export function SectionSkills() {
    return (
        <div id="skills" className={styles.skillsContainer}>
            <h1>Minhas Skills</h1>
            <ul>
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">
                    <li>
                        <Image
                            src={cssIcon}
                            width={80}
                            height={80}
                        />
                    </li>
                </a>

                <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">
                    <li>
                        <Image
                            src={htmlIcon}
                            width={80}
                            height={80}
                        />
                    </li>
                </a>

                <a href="https://www.javascript.com/" target="_blank">
                    <li>
                        <Image
                            src={jsIcon}
                            width={80}
                            height={80}
                        />
                    </li>
                </a>

                <a href="https://www.typescriptlang.org/" target="_blank">
                    <li>
                        <Image
                            src={tsIcon}
                            width={100}
                            height={100}
                        />
                    </li>
                </a>

                <a href="https://pt-br.reactjs.org/" target="_blank">
                    <li>
                        <Image
                            src={reactIcon}
                            width={80}
                            height={80}
                        />
                    </li>
                </a>

                <a href="https://nextjs.org/" target="_blank">
                    <li>
                        <Image
                            src={nextIcon}
                            width={80}
                            height={80}
                        />
                    </li>
                </a>
            </ul>
        </div>
    )
}