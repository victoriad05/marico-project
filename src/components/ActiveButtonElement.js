import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ActiveBtn = styled(Link)`
    width: 180px;
    padding: 15px 25px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    color: #fff;
    background: #326CF9;
    text-align: center;

    &:hover {
        background: #fff;
        color: #326CF9;
        transition: all 0.5s ease-in-out;
    }

    @media screen and (max-width:480px) {
        width: 170px;
        font-size: 14px;
    }
`