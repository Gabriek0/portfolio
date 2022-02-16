import Image from 'next/image';
import styles from './styles.module.scss';

import letsReadGif from '../../../public/images/letsread.gif'
import dtMoneyGif from '../../../public/images/dtmoney.gif'
import rocketShoesGif from '../../../public/images/rocketshoes.gif'
import taskListGif from '../../../public/images/task-list.gif'
import formValidationGif from '../../../public/images/form-validation.gif'
import cpfValidationGif from '../../../public/images/cpf-validation.gif'
import { ProjectTypes } from '../../types/TypeProjects';

interface SectionProjectsProps {
    openModal: (project?: ProjectTypes) => void
}

export function SectionProjects({ openModal }: SectionProjectsProps) {
    const projectList = {
        letsRead: {
            title: `Let's Read`,
            imagePath: '/images/letsread.gif',
            description: 'a'
        },

        dtMoneyGif: {
            title: `Dt money`,
            imagePath: '/images/dtmoney.gif',
            description: 'b'
        },

        rocketShoesGif: {
            title: `Rocket shoes`,
            imagePath: '/images/rocketshoes.gif',
            description: 'c'
        },

        taskListGif: {
            title: `Task list`,
            imagePath: '/images/task-list.gif',
            description: 'd'
        },

        formValidationGif: {
            title: `Form Validation`,
            imagePath: '/images/form-validation.gif',
            description: 'e'
        },

        cpfValidationGif: {
            title: `CPF Validation`,
            imagePath: '/images/cpf-validation.gif',
            description: 'f'
        }
    }

    return (
        <div className={styles.projectsContainer}>
            <h1>Projetos</h1>
            <ul>
                <li>
                    <div className={styles.contentContainer}>
                        <div className={styles.projectContainer}
                        >
                            <Image src={letsReadGif}
                                onClick={() => openModal(projectList.letsRead)}
                            />

                        </div>

                        <h3>Let's Read</h3>
                        <p>Reactjs, Ts, Js, Styled-components</p>
                    </div>
                </li>
                <li>
                    <div className={styles.contentContainer}>
                        <div className={styles.projectContainer}>
                            <Image src={dtMoneyGif}
                                onClick={() => openModal(projectList.dtMoneyGif)}
                            />
                        </div>

                        <h3>Dtmoney</h3>
                        <p>Reactjs, Ts, Js, Styled-components</p>
                    </div>
                </li>

                <li>
                    <div className={styles.contentContainer}>
                        <div className={styles.projectContainer}>
                            <Image src={rocketShoesGif}
                                onClick={() => openModal(projectList.rocketShoesGif)}
                            />
                        </div>

                        <h3>Rocketshoes</h3>
                        <p>Reactjs, Ts, Js, Styled-components</p>
                    </div>
                </li>
                <li>
                    <div className={styles.contentContainer}>
                        <div className={styles.projectContainer}>
                            <Image src={taskListGif}
                                onClick={() => openModal(projectList.taskListGif)}
                            />
                        </div>

                        <h3>Task List</h3>
                        <p>Reactjs, Typescript, Javascript, Sass</p>
                    </div>
                </li>
                <li>
                    <div className={styles.contentContainer}>
                        <div className={styles.projectContainer}>
                            <Image src={cpfValidationGif}
                                onClick={() => openModal(projectList.cpfValidationGif)}
                            />
                        </div>

                        <h3>CPF Validation</h3>
                        <p>Html, CSS, Javascript</p>
                    </div>
                </li>
                <li>
                    <div className={styles.contentContainer}>
                        <div className={styles.projectContainer}>
                            <Image src={formValidationGif}
                                onClick={() => openModal(projectList.formValidationGif)}
                            />
                        </div>

                        <h3>Form Validation</h3>
                        <p>Html, CSS, Javascript</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}