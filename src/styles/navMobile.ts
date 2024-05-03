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
        z-index: 2;
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
        height: 100%;

        .row{
            display: flex;
            position: relative;
            height: 100%;

            .homeBox,.foodBox, .retailBox, .communityBox {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50%;
                height: 40vh;
                opacity: 0;
                position: absolute;
                overflow: hidden;
                
                span{
                    font-size: 20px;
                }

                .content{
                    display: none;
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
                right: 0;
                span{
                    transform: rotate(45deg);
                }
            }

            .retailBox{
                background-color: #f28f32;
                top: 40vh;
                span{
                    transform: rotate(45deg);
                }
            }

            .communityBox {
                background-color: #91078c;
                top: 40vh;
                right: 0;
                span{
                    transform: rotate(-45deg);
                }
            }

            .menufooter{
                background-color: #fff;
                opacity: 0;
                padding: 20px;
                position: absolute;
                bottom: -22vh;
                width: 100%;

                button{
                    font-size: 17px;
                    width: 100%;
                    background-color: #fff;
                    padding: 20px;
                    border: 1px solid #000;
                    transition: background-color .6s cubic-bezier(.23,1,.32,1),color .6s cubic-bezier(.23,1,.32,1);
                }

                .txtbox{
                    display: flex;
                    flex-direction: column;

                    .text{
                        display: flex;
                        flex-direction: column;
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

            .optionSelected{
                width: 100%;
                height: 100%;
                z-index: 1;
            }
            .cardContentShow{
                opacity: 1; 
                visibility: visible; 
                transition:visibility 0.3s linear,opacity 0.3s linear;
            }
            
        }

        
    }

    .cardContentShow{
        opacity: 1; 
        visibility: visible; 
        transition:visibility 0.3s linear,opacity 0.3s linear;
    }

    @media (min-width: 761px){
        display: none;
    }
`

export { NavMobileStyle }