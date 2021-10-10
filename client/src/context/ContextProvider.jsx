import { useState } from 'react';
import { createContext } from 'react';
//context provider which can be access from any components
export  const LoginContext = createContext(null);

const ContextProvider = ({ children }) => {
    const [account, setAccount] = useState('');
    return (
        <LoginContext.Provider
            value={{ account, setAccount }}>
            {children}

        </LoginContext.Provider>
    )
    
}
export default ContextProvider;

//  export const TotalContext = createContext(null);

//  export const TotalContextProvider = ({ children }) => {
//     const [total, setTotal] = useState();
//     return (
//         <TotalContext.Provider value={{ total, setTotal }}>
//             {children}
//         </TotalContext.Provider>
//     )
// }