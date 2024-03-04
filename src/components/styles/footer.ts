import styled from "styled-components";

const FooterStyle = styled.footer`
    padding: 60px 60px 30px;

    .socialMedia{ 
        margin-bottom : 60px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 60px;

        .white{
            background-image: linear-gradient(90deg,#fff 50%,transparent 0),linear-gradient(90deg,#fff 50%,transparent 0),linear-gradient(180deg,#fff 50%,transparent 0),linear-gradient(180deg,#fff 50%,transparent 0);
            p{
                color: #fff;
            }
        }

        .black{
            background-image: linear-gradient(90deg,#000 50%,transparent 0),linear-gradient(90deg,#000 50%,transparent 0),linear-gradient(180deg,#000 50%,transparent 0),linear-gradient(180deg,#000 50%,transparent 0);
            p{
                color: #000;
            }
        }

        .box{
            background-position: 0 0,0 100%,0 0,100% 0;
            background-repeat: repeat-x,repeat-x,repeat-y,repeat-y;
            background-size: 30px 1px,30px 1px,1px 30px,1px 30px;
            animation: .4s infinite normal a;
            animation-timing-function: linear;
            animation-play-state: paused;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 425px;
            width: 100%;
            padding: 55px 10px;

            p{
                font-size: 15px;
                margin-top: 20px;
                text-align: center;
                height: 40px;
            }
        }

        .box:hover{
            animation-play-state: running;
        }

        @keyframes a {
            0% {
                background-position: 0 0,0 100%,0 0,100% 0;
            }
            100% {
                background-position: 30px 0,-30px 100%,0 -30px,100% 30px;
            }
        }         
    }

    .footerWhite{
        background-image: linear-gradient(90deg,#fff 50%,transparent 0),linear-gradient(90deg,#fff 50%,transparent 0),linear-gradient(180deg,#fff 50%,transparent 0),linear-gradient(180deg,#fff 50%,transparent 0);
        span{
            color: #fff;
        }
    }

    .footerBlack{
        background-image: linear-gradient(90deg,#000 50%,transparent 0),linear-gradient(90deg,#000 50%,transparent 0),linear-gradient(180deg,#000 50%,transparent 0),linear-gradient(180deg,#000 50%,transparent 0);
        span{
            color: #000;
        }
    }

    .footer{
        background-position: 0 0,0 100%,0 0,100% 0;
        background-repeat: repeat-x,repeat-x,repeat-y,repeat-y;
        background-size: 30px 1px,30px 1px,1px 30px,1px 30px;
        animation: .4s infinite normal a;
        animation-timing-function: linear;
        animation-play-state: paused;
        text-align: center;
        padding: 30px 60px;

        &:hover{
            animation-play-state: running;
        }
    }
`

export { FooterStyle }