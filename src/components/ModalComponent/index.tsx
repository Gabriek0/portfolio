import Modal from 'react-modal';
import { ProjectTypes } from '../../types/TypeProjects';
import styles from './style.module.scss';

interface ModalProps {
    isOpen: boolean
    onRequestClose: () => void
    currentProject: ProjectTypes | null
}

export function ModalComponent({ isOpen, onRequestClose, currentProject }: ModalProps) {
    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName={styles.reactModalOverlay}
                className={styles.reactModalContent}
            >
                <div>
                    <button
                        onClick={onRequestClose}
                        className={styles.reactModalClose}
                    >
                        X
                    </button>

                    <div className={styles.modalContent}>
                        <h1>{currentProject?.title}</h1>
                        {currentProject?.imagePath && <img src={currentProject?.imagePath} alt="project image" />}
                        <p>{currentProject?.description}</p>
                    </div>
                </div>
            </Modal>
        </>
    )
}