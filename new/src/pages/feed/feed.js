import { useNavigate } from "react-router-dom"
import {useState, useEffect} from "react"
import { Button } from '@chakra-ui/react'
import axios from "axios";
import MyCard from "../../components/Card/card"


function News() {
    const navigate = useNavigate()
    const [noticias, setNoticias] = useState([]);

    const goHome = () =>{
        navigate('/')
    }

    const goBack = () =>{
        navigate(-1)
    }

    const takeNews = async () => {
        try {
            const response = await axios.get('http://localhost:8000/news');
            setNoticias(response.data); 
        } catch (error) {
            console.error("Erro ao buscar notícias:", error);
        }
    };

    useEffect(() => {
        takeNews();
    }, []);


    return(
        <>
            <h2>Bem vindo ao Feed de noticias</h2>

            {noticias.map((noticia, index) => (
                <MyCard
                    title={noticia.title}
                    content={noticia.content}
                    i={index}
                />
            ))}

            <Button onClick={goHome} colorScheme='purple'>Home</Button>
            <Button onClick={goBack} colorScheme='purple'>Voltar</Button>
        </>
    )
}

export default News; 