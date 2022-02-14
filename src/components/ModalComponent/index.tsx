import Modal from 'react-modal';
import styles from './style.module.scss';

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
                    <button
                        onClick={onRequestClose}
                        className={styles.reactModalClose}
                    >
                        X
                    </button>

                    <div>
                        <img src="" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in</p>
                    </div>
                </div>
            </Modal>
        </>
    )
}