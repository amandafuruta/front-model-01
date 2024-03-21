import styled from "styled-components";

const NavMobileStyle = styled.div`
    .open{
        width: 100%;
        height: 100vh;
        position: fixed;
        z-index: 3;
        overflow: scroll;
    }

    .close{
        width: 0;
        height: 0;
        position: absolute;
    }

    .icons{
        position: fixed;
        height: 68px;
        z-index: 1;
        top: 65px;
        right: 40px;
        width: 115px;
        
        .menuCloseIcon{
            opacity: 0;
            position: absolute;
            right: 0;        
            transition: 0.5s; 
        }
    
        .menuOpenIcon{
            position: absolute;
            right: 0;
            transition: 0.5s; 
        }
    }

    .hide{
        display: none;
    }

    .option{
        display: flex;
        flex-direction: column;

        .row{
            display: flex;

            .homeBox,.foodBox, .retailBox, .communityBox {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50%;
                height: 40vh;
                opacity: 0;
                
                span{
                    font-size: 20px;
                }
            }

            .homeBox{
                background-color: aliceblue;
                span{
                    transform: rotate(-45deg);
                }
            }

            .foodBox{
                background-color: #31b5bc;
                span{
                    transform: rotate(45deg);
                }
            }

            .retailBox{
                background-color: #f28f32;
                span{
                    transform: rotate(45deg);
                }
            }

            .communityBox {
                background-color: #91078c;
                span{
                    transform: rotate(-45deg);
                }
            }
        }

        .menufooter{
            background-color: #fff;
            opacity: 0;
            padding: 20px;

            button{
                font-size: 17px;
                width: 100%;
                background-color: #fff;
                padding: 20px;
                border: 1px solid #000;
                transition: background-color .6s cubic-bezier(.23,1,.32,1),color .6s cubic-bezier(.23,1,.32,1);

            }

            .row{
                flex-direction: column;

                .text{
                    margin-top: 20px;
                }

                .footer{
                    border: 1px solid #000;
                    padding: 10px;
                    text-align: center;
                    margin-top: 25px;
                }
            }
        }
    }

    @media (min-width: 761px){
        display: none;
    }
`

export { NavMobileStyle }