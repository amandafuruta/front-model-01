import styled from "styled-components";

const CommunityStyle = styled.div`
    width: 100%;
    visibility: hidden;     
    opacity: 0 ;
    flex-direction: column;

    .communityButton{
        margin-top: 90px;
        font-size: 17px;
        background-color: transparent;
        width: 100%;
        padding: 20px;
        border: 1px solid #fff;
        color: #fff;
        transition: background-color .6s cubic-bezier(.23,1,.32,1),color .6s cubic-bezier(.23,1,.32,1);

        &:hover{
            background-color: #000;
            color: #fff;
            border-color: #000;
        }
    }

    .top{
        margin-bottom: 190px;
        h1{
            font-size: 200px;
            font-weight: 100;
            max-width: 925px;
            line-height: 190px;
            color: #fff;
        }
    }

    .marketEvents{
        position: relative;

        .communityMarketEvents{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-column-gap: 60px;
    
            .border{
                padding: 80px 0 60px;
                background-image: repeating-linear-gradient(-74deg,#fff,#fff 1px,transparent 0,transparent 8px);
                background-position: 0 0;
                background-repeat: repeat-x;
                background-size: 100% 22px;            
            }
    
            .borderY{
                padding: 80px 0 60px;
                background-image: repeating-linear-gradient(-74deg,#fff,#fff 1px,transparent 0,transparent 8px),repeating-linear-gradient(-74deg,#fff,#fff 1px,transparent 0,transparent 8px);
                background-position: 0 0,0 100%;
                background-size: 100% 22px,100% 22px;
                background-repeat: repeat-x;
            }

            .borderBottom{
                background-image: repeating-linear-gradient(-74deg,#fff,#fff 1px,transparent 0,transparent 8px);
                background-position: 0 100%;
                background-size: 100% 22px;
                background-repeat: repeat-x;
            }
    
            .date{
                color: #fff;
                margin-bottom: 10px;
                font-size: 11px;
            }
    
            .event{    
                color: #fff;            
                text-align: center;
                max-width: 190px;
            }
    
            .column{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }

        h2{
            font-size: 100px;
            line-height: 100px; 
            max-width: 540px;
            text-align: center;
            position: absolute; 
            left: 50%;
            top: 30%;
            transform: translate(-50%,-30%);
            color: #fff;
            font-weight: 100;
        }
    }

    .features{
        padding-top: 120px;
        margin-bottom: 120px;

        h3{
            font-weight: 100;
            font-size: 100px;
            margin-bottom: 30px;
            color: #fff;
        }

        .featuresPost{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px 60px;

            .post{
                position: relative;
                
                .imgBox{
                    max-width: 760px;
                    width: 100%;
                    max-height: 450px;
                    height: 100%;
                    display: flex;

                    img{
                        width: 100%;
                        object-fit: cover;
                    }                    
                }

                .text{
                    position: relative;
                    left: 20px;
                    top: -30px;
                    
                    span{
                        background-color: #fff;
                        width: fit-content;
                        font-size: 45px;
                        line-height: 50px;
                        padding: 10px;
                    }
                }

                .singleLine::after{
                    position: absolute;
                    content:'';
                    width: 10px;
                    height: 75%;
                    background-color: #fff;
                    top: 5px;
                    left: -10px;
                }

                .doubleLine::after{
                    position: absolute;
                    content:'';
                    width: 10px;
                    height: 95%;
                    background-color: #fff;
                    top: 5px;
                    left: -10px;
                }
            }
        }
    }

    .marketRadio{
        padding: 100px 0;
        background-image: repeating-linear-gradient(-45deg,#fff,#fff 1px,transparent 0,transparent 71px),repeating-linear-gradient(45deg,#fff,#fff 1px,transparent 0,transparent 70px);
        background-position: 0 0,0 0;
        background-size: 100px 50px,100px 50px;
        background-repeat: repeat-x;
        animation: 2s infinite normal g;
        animation-timing-function: linear;

        .marketRadio-content{
            display: flex;
            align-items: center;
            justify-content: space-around;

            .marketRadio-svg{
                max-width: 200px;
                width: 100%;
                animation: 3s linear 1s infinite alternate h;

                img{
                    width: 100%;
                }
            }
            .marketRadio-box{
                display: flex;
                align-items: center;
                flex-direction: column;

                .marketRadio-title{
                    font-size: 100px;
                    text-align: center;
                    margin-bottom: 30px;
                    font-weight: 100;
                    color: #fff;
                }

                span{
                    color:#fff;
                }
            }
        }
    }

    @keyframes g {
        0% {
            background-position-x: 0;
        }
        100% {
            background-position-x: 100px;
        }
    }

    @keyframes h {
        0% {
            transform: translateX( 10vh ) ;
        }
        100% {
            transform: translateX( 0 ) ;            
        }
    }

    .marketEvent_body{
        position: relative;
        padding: 75px 0 100px;
        background-image: linear-gradient(90deg,#fff 50%,transparent 0),linear-gradient(90deg,#fff 50%,transparent 0),linear-gradient(90deg,#fff 50%,transparent 0),linear-gradient(90deg,#fff 50%,transparent 0);
        background-position: 0 0,0 100%,left 14px,0 calc(100% - 14px);
        background-repeat: repeat-x,repeat-x,repeat-x,repeat-x;
        background-size: 24px 1px,24px 1px,24px 1px,24px 1px;
        animation: .8s infinite normal c;
        animation-timing-function: linear;
        margin-bottom: 120px;

        .informations{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 60px;
            justify-items: center;
            
            .text{
                max-width: 210px;
                text-align: center;
                letter-spacing: 1px;
                color: #fff;
            }
        }

        button{
            position: absolute;
            font-size: 17px;
            width: 180px;
            padding: 20px;
            left: 50%;
            transform: translateX(-50%);
            bottom: -20px;
            color: #fff;
            border: 1px solid #fff;
            transition: background-color .6s cubic-bezier(.23,1,.32,1),color .6s cubic-bezier(.23,1,.32,1);
            background-color: #91078C;
        }

        button:hover{
            background-color: #000;
            color: #fff;
            border-color: #000;
        }
    }
 
`

export { CommunityStyle }