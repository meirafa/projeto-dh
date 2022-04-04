import './App.scss';
import React from "react";
import RouteList from "./routes/RouteList";
import {UserProvider} from "./pages/context/UserContext";


function App() {
    return (
        <UserProvider>
            <RouteList/>
        </UserProvider>
    );
}

export default App;