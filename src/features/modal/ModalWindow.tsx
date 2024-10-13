import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export interface ModalProps {
  title?: string;
  closeButton?: boolean;
  saveButton?: boolean;
  size?: 'sm' | 'lg' | 'xl' | undefined;
  children: JSX.Element | JSX.Element[];
  fullscreen?: string | true | undefined;
  show: boolean;
  onClose: () => void;
}

const ModalWindow = ({ title, closeButton, saveButton, size, children, fullscreen, show, onClose }: ModalProps) => {
  let showHeader = false;
  if (title !== undefined) showHeader = true;

  let showFooter = false;
  if (closeButton || saveButton) showFooter = true;

  return (
    <>
      <Modal show={show} centered keyboard={true} onEscapeKeyDown={onClose} size={size} fullscreen={fullscreen}>
        {showHeader && (
          <Modal.Header closeButton onHide={onClose}>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{children}</Modal.Body>
        {showFooter && (
          <Modal.Footer>
            {closeButton && (
              <Button variant="secondary" onClick={onClose}>
                Close
              </Button>
            )}
            {saveButton && (
              <Button type="submit" variant="primary">
                Submit
              </Button>
            )}
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};

export default ModalWindow;
