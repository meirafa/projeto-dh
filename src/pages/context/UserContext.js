import React from "react";
import {appConfig} from "../../appConfig";

export const UserContext = React.createContext(getInitialState());

export function useUser() {
    return React.useContext(UserContext)
}

export const UserProvider = ({children}) => {
    const [state, setState] = React.useState(getInitialState());
    const [scheduleDates, setScheduleDates] = React.useState([undefined, undefined]);

    function setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
        setState(state => ({...state, user}))
    }

    function loadUser(token) {
        setState(state => ({...state, user: JSON.parse(localStorage.getItem('user'))}))
        // setState((state) => ({...state, isLoading: true}));
        // fetch(appConfig.apiUrl + '/users', {
        //     method: 'GET',
        //     headers: {
        //         "Content-Type": "application/json;",
        //         Authorization: `Bearer ${token}`
        //     }
        // })
        //     // conventendo o http response em um objeto json
        //     .then(res => {
        //
        //         if (res.ok) {
        //             return res.json()
        //         } else {
        //             localStorage.clear();
        //             setState(() => ({...getInitialState(), error: res.statusText}));
        //             alert('dados incorretos \n' + res.statusText);
        //         }
        //     })
        //     // recebendo o objeto json do "then" anterior e setando no context
        //     .then((user) => {
        //
        //         setState((state) => ({...state, user, isLoading: false}))
        //     });
    }

    React.useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            loadUser(token)
        }
    }, []);

    return (
        <UserContext.Provider value={{...state, loadUser, setUser, scheduleDates, setScheduleDates}}>
            {children}
        </UserContext.Provider>
    )
};

function getInitialState() {
    return {
        user: null, isLoading: false, error: null, loadUser() {
            throw new Error('Não utilizar o UseProvider antes de chamar essa funcao') //esta funcao é declarada no corpo do user provider
        }, setUser() {

        }
    }
}