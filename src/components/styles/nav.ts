import styled from "styled-components";

const DeskNavStyle = styled.nav`
    position: fixed;
    right: 0;
    display: flex;
    background-color: #fff;
    height: 100vh;
    width: 180px;
    z-index: 1;

    .content{
        width: 100%;
    }
    
    .hide{
        display: none;
    }

    .food{
        background-color: #31b5bc;
        z-index: 3;
        right: 120px;        
        justify-content: start;
    }

    .retail{
        background-color: #f28f32;
        z-index: 4;
        right: 60px;        
        justify-content: start;
    }

    .community{
        background-color: #91078c;
        z-index: 5;
        right: 0px;        
        justify-content: flex-start;
    }

    .widthNormal{
        width: 60px;
    }

    .stripe{
        height: 100%;        
        display: flex;
        align-items: center;
        height: 0;
        position: absolute;
        
        .title{
            cursor: pointer;
            height: 100%;
            width: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;

            h4{            
                transform: rotate(90deg); 
                font-size: 20px;
                color: #fff;
                font-weight: 400;
            }
        }
    }

    .visible{
        height: 100vh;
        overflow: auto;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .content{        
        padding: 295px 60px 0px 120px;
        height: 100%;
        overflow: auto;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .cardContentShow{
        opacity: 1; 
        visibility: visible; 
        transition:visibility 0.3s linear,opacity 0.3s linear;
    }

`

export { DeskNavStyle }