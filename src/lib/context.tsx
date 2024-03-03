import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { Task } from './utils';

interface MyContextType {
    data: Task[];
    setData: Dispatch<SetStateAction<Task[]>>;
}

export const MyContext = createContext<MyContextType>({
    data: [],
    setData: () => {}
});

export const MyProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<Task[]>([]);

    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    );
};
