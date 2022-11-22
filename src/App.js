import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App(props) {
    return (
		<BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
					<Routes>
						<Route path="/Profile" element={<Profile />}/>
						<Route path="/Dialogs/*" element={<DialogsContainer />}/>
					</Routes>
                </div>
            </div>
		</BrowserRouter>

    );
}
// state={props.state.profilePage}
// state={props.state.dialogsPage}
export default App;
