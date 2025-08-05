import React from 'react';
import { ModalOverlay, ModalContent, CloseButton } from './Modal.styles';

const Modal = ({ project, closeModal }) => {
    if (!project) return null;

    return (
        <ModalOverlay onClick={closeModal}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <CloseButton onClick={closeModal}>&times;</CloseButton>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {/* You can add more project details here, like images or links */}
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;
