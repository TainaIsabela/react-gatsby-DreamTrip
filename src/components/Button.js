import styled from "styled-components"
import {Link} from "gatsby"

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#F26A2E' : '#077BF1')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '18px 45px' :'13px 32px')};
    color: #FFF;
    font-size: ${({big}) => (big ? '20px' : '18px')};
    outline:none;
    border:none;
    min-width: 100px;
    cursor:pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({round}) => (round ? '50px' : 'none')};

    &:hover {
        background: ${({primary}) => (primary ? '#077bf1' : '#F36A2E' )};
        transform: translateY(-2px);
    }
`