import React from "react";

export const UserContext = React.createContext(getInitialState());

export function useUser() {
    return React.useContext(UserContext)
}

export const UserProvider = ({children}) => {
    const [state, setState] = React.useState(getInitialState());

    function loadUser() {
        if (state.token) {
            //     setUser((state) => ({...state, isLoading: true}));
            //fetch() //FIXME quando tiver o metdo getUser utilizar pra pegar usuario logado
            const userString = localStorage.getItem('user'); //TODO remover e pegar usuario da api utilizando token do localStorage
            const user = userString ? JSON.parse(userString) : null;
            setState((state) => ({...state, user}));
        }
    }

    React.useEffect(() => {
        loadUser()
    }, []);

    return (
        <UserContext.Provider value={{...state, loadUser}}>
            {children}
        </UserContext.Provider>
    )
};

function getInitialState() {
    return {
        user: null, token: localStorage.getItem('token'), isLoading: false, error: null, loadUser() {
            throw new Error('Não utilizar o UseProvider antes de chamar essa funcao') //esta funcao é declarada no corpo do user provider
        }
    }
}