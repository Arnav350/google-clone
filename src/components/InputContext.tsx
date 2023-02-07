import { createContext, useContext, useState } from "react";

interface InputType {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

interface InputContextChildren {
  children: React.ReactNode;
}

export const InputContext = createContext<InputType>({} as InputType);

export const InputProvider = ({ children }: InputContextChildren) => {
  const [input, setInput] = useState<string>("");

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  );
};

export default InputProvider;

export const useInput = () => {
  useContext(InputContext);
};
