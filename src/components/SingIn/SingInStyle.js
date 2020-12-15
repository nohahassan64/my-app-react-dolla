import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SingContainer = styled.div`
    min-height: 692px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: 0;
    background: linear-gradient(180deg , rgba(1 , 147 , 86 , 1) 0% , rgba(10 , 201 , 122 , 1 ) 100%);

`
export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`
export const Icon = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 32px;
    margin-left: 32px;
    margin-top: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`
export const FormContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 480px) {
        padding: 10px
    }

`
export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    padding: 80px 32px;
    margin: 0 auto;
    border-radius: 4px;
    display: grid;
    z-index: 1;
    box-shadow: 0 1px 3px rgba(0 , 0 , 0 , .9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`
export const FormH1 = styled.h1`
    font-weight: 400;
    text-align: center;
    margin-bottom: 40px;
    font-size: 20px;
    color: #fff;
`
export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`
export const FormInput = styled.input`
    padding: 16px 16px;
    border-radius: 4px;
    border: none;
    margin-bottom: 32px;
`
export const FormButton = styled.button`
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    padding: 16px 0;
    background: #01bf71;
`
export const Text = styled.span`
    font-size: 14px;
    color: #fff;
    margin-top: 24px;
    text-align: center;
`