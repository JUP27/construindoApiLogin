import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Continue, Input, Form } from "./loginStyled";


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const saveUserInfoLocalStorage = (token) => {
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)

    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        const credentials = { email, password }

        axios.post('http://localhost:8000/login', credentials, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            alert(response.data.message)
            saveUserInfoLocalStorage(response.data.token)
            navigate('home')
        })
            .catch(error => console.log(error))
    }



    return(
        <Form onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <Input>
                <input type="email" 
                        value={email} 
                        placeholder="E-mail"
                        onChange={(ev) => setEmail(ev.target.value)}               
                    />
             </Input>
             <Input>
                    <input 
                        type="password" 
                        value={password} 
                        placeholder="Senha"
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
            </Input>
            <Continue type="submit">ENTRAR</Continue>
        </Form>

    )
};

export default Login; 