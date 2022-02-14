import { useState } from "react";
import { ModalComponent } from "../components/ModalComponent";
import { Section } from "../components/Section";

import letsReadGif from '../../../public/images/letsread.gif'
import dtMoneyGif from '../../../public/images/dtmoney.gif'
import rocketShoesGif from '../../../public/images/rocketshoes.gif'
import taskListGif from '../../../public/images/task-list.gif'
import formValidationGif from '../../../public/images/form-validation.gif'
import cpfValidationGif from '../../../public/images/cpf-validation.gif'


export default function Home() {
  const images = [
    {
      id: 1,
      img: letsReadGif
    },

    {
      id: 2,
      img: dtMoneyGif
    },

    {
      id: 3,
      img: rocketShoesGif
    },

    {
      id: 4,
      img: taskListGif
    },

    {
      id: 5,
      img: formValidationGif
    },

    {
      id: 6,
      img: cpfValidationGif
    }
  ]


  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageProject, setImage] = useState('');

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
