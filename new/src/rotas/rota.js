import {BrowserRouter, Route, Routes} from 'react-router-dom'
import News from '../pages/feed/feed';
import Home from '../pages/home/home';
import Login from '../pages/login/login';

function Rota() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>} />
                <Route path='home' element={<Home/>} />
                <Route path='news' element={<News/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rota; 