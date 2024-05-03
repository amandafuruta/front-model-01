import styled from "styled-components";

const NavChildStyle = styled.div`
    width: 100%;
    visibility: hidden;     
    opacity: 0 ;
    flex-direction: column;

    .top{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 100px;

        h1{
            font-size: 200px;
            font-weight: 100;
            max-width: 925px;
            line-height: 190px;
        }
        
        .imgBox{
            max-width: 378px;
            width: 100%;
            img{
                width: 100%;                
            }
        }
    }

    .foodMenu{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 60px;
        grid-row-gap: 80px;
        margin-bottom: 100px;
        position: relative;

        .item{
            position: relative;

            .itemText{
                display: flex;
                flex-direction: column;
                cursor: pointer;
    
                .category{
                    font-size: 16px;
                    margin-bottom: 30px;
                }
                .product{
                    font-size: 32px;
                }
            }

            .foodImg{
                position: absolute;
                max-width: 220px;
                width: 100%;
                left: 50px;
                z-index: 1;

                img{
                    width: 100%;
                }
            }
        }


        .displaynone{
            visibility: hidden;
            opacity: 0;
        }
    }

    .announcement{
        padding: 100px 0;
        background-image: repeating-linear-gradient(-45deg,#000,#000 1px,transparent 0,transparent 68px),repeating-linear-gradient(45deg,#000,#000 1px,transparent 0,transparent 68px),repeating-linear-gradient(-45deg,#000,#000 1px,transparent 0,transparent 71px),repeating-linear-gradient(45deg,#000,#000 1px,transparent 0,transparent 70px);
        background-position: 0 101%,0 101%,0 0,0 0;
        background-size: 93px 50px,93px 50px,100px 50px,100px 50px;
        background-repeat: repeat-x;
        animation: 2s infinite normal e;
        animation-timing-function: linear;
        margin-bottom: 125px;

        .announcement-content{
            display: flex;
            align-items: center;
            justify-content: space-around;

            .announcement-box{
                display: flex;
                align-items: center;
                flex-direction: column;

                .announcement-title{
                    font-size: 100px;
                    text-align: center;
                    margin-bottom: 30px;
                }

                span{
                    font-size: 20px;
                }
            } 

            .announcement-svg{
                max-width: 200px;
                width: 100%;
                animation: 2s infinite alternate f;
                animation-timing-function: ease-in-out;
            }           
        }
    }

    @keyframes e {
        0% {
            background-position: 0 101%,0 101%,0 0,0 0;
        }
        100% {
            background-position: 93px 101%,93px 101%,100px 0,100px 0;
        }
    }

    @keyframes f {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-70deg);
        }
    }
`

export { NavChildStyle }