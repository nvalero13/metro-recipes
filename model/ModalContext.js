import React, { useContext, useState } from "react";

const ModalContext = React.createContext();
const ModalUpdateContext = React.createContext();

export function useModal() {
  return useContext(ModalContext);
}

export function useModalUpdate() {
  return useContext(ModalUpdateContext);
}

export function ModalProvider({ children }) {
  const [visibility, setVisibility] = useState(false);

  const ToggleModal = () => {
    setVisibility(!visibility);
  };


  return (
    <ModalContext.Provider value={visibility}>
      <ModalUpdateContext.Provider value={(ToggleModal)}>
        {children}
      </ModalUpdateContext.Provider>
    </ModalContext.Provider>
  );
}
