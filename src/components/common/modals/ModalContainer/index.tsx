import React from 'react';
import './ModalContainer.scss';

type ModalContainerProps = {
  children: React.ReactNode;
};

export default function ModalContainer({ children }: ModalContainerProps) {
  return <main className="modal-container">{children}</main>;
}
