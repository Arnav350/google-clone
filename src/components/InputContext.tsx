import { createContext, useContext, useState } from "react";

interface IInputType {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

interface IInputContextChildren {
  children: React.ReactNode;
}

export const InputContext = createContext<IInputType>({} as IInputType);

export const InputProvider = ({ children }: IInputContextChildren) => {
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
