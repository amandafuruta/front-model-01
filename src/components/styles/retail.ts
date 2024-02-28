import styled from "styled-components";

const Body = styled.body`
    background-color: #fff;
`

const Logo = styled.section`
    position: relative ;

    .logo{
        position: fixed;
        top: 40px;
        left: 40px;
        cursor: pointer;
    }
`

export { Body, Logo }