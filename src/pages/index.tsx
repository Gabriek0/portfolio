import { useState } from "react";
import { ModalComponent } from "../components/ModalComponent";
import { Section } from "../components/Section";

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <Section openModal={openModal} />
      <ModalComponent
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </>
  )
}
