import styled from "styled-components"

const NavStyle = styled.nav`
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

const HomeStyle = styled.main`
    background-color: #fff;
    min-height: 100vh;
    width: calc(100% - 180px);

    .hide{
        display: none;   
    }

    @media (max-width: 760px) {
        width: 100%;
    }
`

const SectionTop = styled.section`
    position: relative ;
    padding: 200px 60px 120px;
    background-color: #fff;    

    h1{
        font-weight: 400;
        letter-spacing: 1px;
        font-size: 75px;
        max-width: 1030px;
        width: 100%;
        line-height: 86px;
    }

    .h1{
        opacity: 0;
    } 

    @media (max-width: 760px) {
        h1{
            font-size: 28px;
            line-height: 40px;
        }
    }

    @media (max-width: 474px) {
        padding: 200px 20px 120px;
        h1{
            font-size: 28px;
            line-height: 40px;
        }
    }
`

const Logo = styled.div`
    .logo{
        position: fixed;
        top: 40px;
        left: 40px;
        cursor: pointer;
        z-index: 1;
    }

    .logoMoved{
        transition: left 1s; 
        left: -3px; 
        transition-delay: 1s;
    }
`

const SectionBanner = styled.section`

    .banner{
        overflow: hidden;
        max-height: 920px;
        height: 100%;
        opacity: 0;   
        transition: opacity 2s; 
        img{
            width: 100%;
            transform: translate(0%, -20%);
        }
    }    

    .visible{
        opacity: 1;  
    }

`

const SectionTypeOfMarkets = styled.section`
    padding: 70px 60px 60px;

    h2{
        font-size: 113px;
        max-width: 645px;
        width: 100%;
        font-weight: 400;
        margin-bottom: 60px;
    }

    .typesOfMarket{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-column-gap: 60px;
        opacity: 0;
        transition: opacity 2s;

        .typesOfMarket_content{
            
            .typesOfMarket_box_img01, .typesOfMarket_box_img02, .typesOfMarket_box_img03{
                padding-bottom: 135%;
                background-size: cover;
                margin-bottom: 30px;
            }

            .typesOfMarket_box_img01{                
                background-image: url('/localimg.png');                
            }

            .typesOfMarket_box_img02{
                background-image: url('/localimg2.png');  
            }

            .typesOfMarket_box_img03{
                background-image: url('/localimg3.png');  
            }

            p{
                letter-spacing: 1px;
                line-height: 21px;
            }
        }
    }

    .visible {
        opacity: 1;
    }

    @media (max-width: 760px) {
        padding: 0 20px;

        h2{
            font-size: 65px;
        }

        .typesOfMarket{
            grid-template-columns: repeat(1,1fr);
            .typesOfMarket_content{
                margin-bottom: 25px;
                .typesOfMarket_box_img01, .typesOfMarket_box_img02{
                    padding-bottom: 90%;
                    background-position-y: bottom;
                }
            }
        }
    }

    @media (max-width: 474px){
        h2{
            font-size: 40px;
        }
    }
    
`

const SectionMarketEvents = styled.section`
    padding: 60px 60px 150px;

    .marketEvent_title{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    h3{
        font-size: 100px;
        text-align: center;
        font-weight: 300;
    }

    .marketEvent_body{
        margin-top: 60px;
        position: relative;
        padding: 75px 0 100px;
        background-image: linear-gradient(90deg,#000 50%,transparent 0),linear-gradient(90deg,#000 50%,transparent 0),linear-gradient(90deg,#000 50%,transparent 0),linear-gradient(90deg,#000 50%,transparent 0);
        background-position: 0 0,0 100%,left 14px,0 calc(100% - 14px);
        background-repeat: repeat-x,repeat-x,repeat-x,repeat-x;
        background-size: 24px 1px,24px 1px,24px 1px,24px 1px;
        animation: .8s infinite normal c;
        animation-timing-function: linear;

        .informations{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 60px;
            justify-items: center;
            
            .text{
                max-width: 210px;
                text-align: center;
                letter-spacing: 1px;
            }
        }

        button{
            position: absolute;
            font-size: 17px;
            background-color: #fff;
            width: 180px;
            padding: 20px;
            left: 50%;
            transform: translateX(-50%);
            bottom: -20px;
            border: 1px solid #000;
            transition: background-color .6s cubic-bezier(.23,1,.32,1),color .6s cubic-bezier(.23,1,.32,1);
        }

        button:hover{
            background-color: #000;
            color: #fff;
        }
    }

    @keyframes c {
        0% {
            background-position-x: 0,0;
        }
        100% {
            background-position-x: 24px,-24px;
        }
    }

    @media (max-width: 760px){
        padding: 60px 20px 150px;
        h3{
            font-size: 80px;
        }
    }

    @media (max-width: 474px){
        h3{
            font-size: 50px;
        }

        .marketEvent_body{
            .informations{
                grid-template-columns: repeat(1, 1fr);
                grid-row-gap: 50px;
            }
        }
    }
    @media (max-width: 360px){
        h3{
            font-size: 40px;
            margin: 0 20px;
        }

    }
`

const SectionMap = styled.section`
    display: flex;
    justify-content: space-around;
    margin-bottom: 60px;
    padding: 0 60px;

    .card{        
        padding: 1px;
        max-width: 770px;
        height: 339px;
        width: 100%;

        // Animation
        background-image: linear-gradient(90deg,#000 50%,transparent 0),linear-gradient(90deg,#000 50%,transparent 0),linear-gradient(180deg,#000 50%,transparent 0),linear-gradient(180deg,#000 50%,transparent 0);
        background-position: 0 0,0 100%,0 0,100% 0;
        background-repeat: repeat-x,repeat-x,repeat-y,repeat-y;
        background-size: 30px 1px,30px 1px,1px 30px,1px 30px;
        animation: .4s infinite normal a;
        animation-timing-function: linear;
        animation-play-state: paused;

        p {
            font-size: 60px;
            text-align: center;
            font-weight: 300;            
            max-width: 385px;
            width: 100%;
        }

        &:first-child{
            margin-right: 20px;
        }
    }

    .txt{
        padding: 90px 10px;
        display: flex;
        justify-content: center;        
        align-items: center;
    }

    @keyframes a {
        0% {
            background-position: 0 0,0 100%,0 0,100% 0;
        }
        100% {
            background-position: 30px 0,-30px 100%,0 -30px,100% 30px;
        }
    } 

    .card:hover{
        animation-play-state: running;
    }

    .map{
        height: 100%;
        width: 100%;
        background-image: url('/map.png');
        background-size: cover;
    }

    @media (max-width: 1080px) {
        .card{
            p{
                font-size: 40px; 
            }
        }
    }

    @media (max-width: 840px) {
        .card{
            p{
                font-size: 35px; 
            }
        }
    }

    @media (max-width: 760px) {
        .card{
            p{
                font-size: 28px; 
            }
        }
    }

    @media (max-width: 474px){
        padding: 0 20px;
        flex-direction: column;

        .card:first-child{
            margin-bottom: 20px;
        }
    }
`
export {
    NavStyle,
    Logo,
    HomeStyle,
    SectionTop,
    SectionBanner,
    SectionTypeOfMarkets,
    SectionMarketEvents,
    SectionMap
}