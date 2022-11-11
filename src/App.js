import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {updateNewPostText} from "./redux/state";


function App(props) {
    return (
		<BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar friends={props.state.friends}/>
                <div className="app-wrapper-content">
					<Routes>
						<Route path="/Profile" element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
						<Route path="/Dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}/>
					</Routes>
                </div>
            </div>
		</BrowserRouter>

    );
}
// state={props.state.profilePage}
// state={props.state.dialogsPage}
export default App;
