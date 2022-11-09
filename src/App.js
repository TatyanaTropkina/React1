import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App(props) {

    return (

		<BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
					<Routes>
						<Route path="/Profile" element={<Profile posts={props.posts}/>}/>
						<Route path="/Dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
					</Routes>
                </div>
            </div>
		</BrowserRouter>

    );
}


export default App;
