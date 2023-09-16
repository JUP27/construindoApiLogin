import styled from "styled-components"

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 500px;
    height: 500px;
    padding: 20px;
    background: #b7b7b7;
    border-radius: 5px;
    border: 2px solid #262626;
    box-shadow: 4px 4px #262626;
    gap: 20px;
`

export const Input = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: 250px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid #262626;
    background-color: #b7b7b7;
    box-shadow: 4px 4px #262626;
    font-size: 16px;
    color: #000;
    /* position: relative; */
    overflow: hidden;
    /* z-index: 1; */
    gap: 5px;
`

export const Continue = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid #823C9E;
    background-color: #b7b7b7;
    box-shadow: 4px 4px #823C9E;
    font-size: 16px;
    color: #000;
`