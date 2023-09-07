import React, { useState } from "react";

type ModalContextState = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// export const useModalContext = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const initialState = {
//     isModalOpen,
//     setIsModalOpen,
//   };

//   const ModalContext = createContext<ModalContextState>(initialState);

//   return [ModalContext, ModalContext.Provider] as const;
// };

// export const ModalContextProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [ModalContext, ModalProvider] = useModalContext();
//   const;
//   return <ModalProvider value={}>{children}</ModalProvider>;
// };

export function createContext<A extends {} | null>() {
  const context = React.createContext<A | null>(null);

  const useContext = () => {
    const c = React.useContext(context);
    if (c !== null) {
      return c;
    }
    throw new Error("no trabaljo");
  };

  return [useContext, context.Provider] as const;
}

const [useModalContext, ModalContextP] = createContext<ModalContextState>();

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContextP value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ModalContextP>
  );
};

export { useModalContext, ModalContextProvider };
