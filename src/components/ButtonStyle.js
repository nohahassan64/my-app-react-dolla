import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    white-space: nowrap;
    cursor: pointer;;
    outline: none;
    border: none;
    transition: all .5s ease-in-out;
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    background: ${({primary}) => (primary ? '#01bf71' : '#010606')};
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};

    &:hover {
        transition: all .5s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01bf71')};
    }
`