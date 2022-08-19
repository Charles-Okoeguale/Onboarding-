import { createContext } from "react";
import { IContextType } from "../types"; 

export const AppContext = createContext<IContextType | any>(null) 