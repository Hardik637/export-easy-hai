"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { RegistrationModal } from "./RegistrationModal";

interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useRegistrationModal(): ModalContextType {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useRegistrationModal must be used within a RegistrationModalProvider");
  }
  return context;
}

export function RegistrationModalProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
}

interface ReserveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ReserveButton({ children, className, ...props }: ReserveButtonProps) {
  const { openModal } = useRegistrationModal();

  return (
    <button
      type="button"
      onClick={openModal}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}
