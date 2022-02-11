import Modal from 'react-modal'
import styles from './style.module.scss'

interface ModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function ModalComponent({ isOpen, onRequestClose }: ModalProps) {
    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName={styles.reactModalOverlay}
                className={styles.reactModalContent}
            >
                <div>
                    <button onClick={onRequestClose}>X</button>
                    <h1>Modal</h1>
                </div>
            </Modal>
        </>
    )
}