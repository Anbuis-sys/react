import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Main from './Components/Main.jsx';
import Astros from './Components/Astros.jsx';
import Apod from './Components/Apod.jsx'; 
import './App.css';

function App() {

    const linksData = [
        { name: 'Home', href: '/'},
        { name: 'About', href: '/'},
        { name: 'Astros', href: '/astros'},
        { name: 'APOD', href: '/apod'}, 
    ];

    return (
        <>
            <Navbar header='Navbar' links={linksData} />
            <Routes>
                <Route
                    element={<Main />}
                    path='/'
                />
                <Route 
                    element={<Astros />}
                    path='/astros'
                />
                <Route
                    element={<Apod />}
                    path='/apod'  
                />
            </Routes>
        </>
    );
}

export default App;

