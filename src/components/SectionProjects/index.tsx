import Image from 'next/image';
import styles from './styles.module.scss';

import letsReadGif from '../../../public/images/letsread.gif'
import dtMoneyGif from '../../../public/images/dtmoney.gif'
import rocketShoesGif from '../../../public/images/rocketshoes.gif'
import taskListGif from '../../../public/images/task-list.gif'
import formValidationGif from '../../../public/images/form-validation.gif'
import cpfValidationGif from '../../../public/images/cpf-validation.gif'


export function SectionProjects() {
    return (
        <div className={styles.projectsContainer}>
            <h1>Projetos</h1>
            <ul>
                <li>
                    <div className={styles.contentContainer}>
                        <div className={styles.projectContainer}>
                            <Image src={letsReadGif} />
                        </div>

                        <h3>Let's Read</h3>
                        <p>Reactjs, Ts, Js, Styled-components</p>
                    </div>
                </li>
                <li>
                    <div className={styles.contentContainer}>
                        <div className={styles.projectContainer}>
                            <Image src={dtMoneyGif} />
                        </div>

                        <h3>Dtmoney</h3>
                        <p>Reactjs, Ts, Js, Styled-components</p>
                    </div>
                </li>

                <li>
                    <div className={styles.contentContainer}>
                        <div className={styles.projectContainer}>
                            <Image src={rocketShoesGif} />
                        </div>

                        <h3>Rocketshoes</h3>
                        <p>Reactjs, Ts, Js, Styled-components</p>
                    </div>
                </li>
                <li>
                    <div className={styles.contentContainer}>
                        <div className={styles.projectContainer}>
                            <Image src={taskListGif} />
                        </div>

                        <h3>Task List</h3>
                        <p>Reactjs, Typescript, Javascript, Sass</p>
                    </div>
                </li>
                <li>
                    <div className={styles.contentContainer}>
                        <div className={styles.projectContainer}>
                            <Image src={cpfValidationGif} />
                        </div>

                        <h3>CPF Validation</h3>
                        <p>Html, CSS, Javascript</p>
                    </div>
                </li>
                <li>
                    <div className={styles.contentContainer}>
                        <div className={styles.projectContainer}>
                            <Image src={formValidationGif} />
                        </div>

                        <h3>Form Validation</h3>
                        <p>Html, CSS, Javascript</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}