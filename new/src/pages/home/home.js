import { useNavigate } from "react-router-dom"
import {useEffect} from "react"
import { Button } from '@chakra-ui/react'

function Home() {
    const navigate = useNavigate()

    const goNews = () =>{
        navigate('/news')
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        navigate('/');
    };

    return(
       <>
            <h2>WELCOME HOME!</h2>
            <Button onClick={goNews} colorScheme='purple'>Go to News</Button>
            <Button onClick={handleLogout}>Logout</Button>
       </>
    )
}

export default Home; 