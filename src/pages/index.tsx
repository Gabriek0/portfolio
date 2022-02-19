import { useState } from "react";
import { Footer } from "../components/Footer";
import { ModalComponent } from "../components/ModalComponent";
import { Section } from "../components/Section";
import { ProjectTypes } from "../types/TypeProjects";

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectTypes | null>(null)

  const openModal = (project?: ProjectTypes) => {

    if (project) {
      setCurrentProject(project)
      setIsOpen(true);
    }


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
        currentProject={currentProject}
      />
      <Footer />
    </>
  )
}
