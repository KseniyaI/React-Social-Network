import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {    
    return (        
            <div className='app-wrapper'>
                <Header />
                <Navbar state={props.store} />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' 
                            element={<Profile 
                                store={props.store} />} />
                        <Route path='/dialogs/*' 
                            element={<DialogsContainer 
                                store={props.store} />} />

                        {/*<Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />*/}
                    </Routes>
                </div>
            </div>
    )
}

export default App;

