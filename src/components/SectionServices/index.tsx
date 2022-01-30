import styles from './styles.module.scss'
import codeIcon from './../../../public/images/code.svg'
import figmaIcon from './../../../public/images/figma.svg'
import smartphoneIcon from './../../../public/images/smartphone.svg'
import Image from 'next/image';


export function SectionServices() {
    return (
        <div className={styles.servicesContainer}>
            <h1>Serviços</h1>
            <ul>
                <li>
                    <Image
                        src={codeIcon}
                        width={56}
                        height={56}
                    />
                    <h1>Criação<br /> de sites</h1>
                </li>
                <li>
                    <Image
                        src={figmaIcon}
                        width={56}
                        height={56}
                    />
                    <h1>Estilização<br /> de sites</h1>
                </li>
                <li>
                    <Image
                        src={smartphoneIcon}
                        width={56}
                        height={56}
                    />
                    <h1>Sites<br /> responsivos</h1>
                </li>
            </ul>
        </div>
    );
}