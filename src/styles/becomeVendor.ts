import styled from "styled-components";

const BecomeVendorStyle = styled.div`
    .paddingOn{
        padding: 60px;
    }

    .paddingOff{
        padding: 60px 0;
    }

    .black{
        background-image: repeating-linear-gradient(-74deg,rgba(0,0,0,.2),rgba(0,0,0,.2) 1px,transparent 0,transparent 4px),repeating-linear-gradient(-74deg,rgba(0,0,0,.2),rgba(0,0,0,.2) 1px,transparent 0,transparent 4px);
        padding: 60px;

        p{
            color: #000;
        }

        button{
            border: 1px solid #000;
            transition: background-color .6s cubic-bezier(.23,1,.32,1),color .6s cubic-bezier(.23,1,.32,1);
        }
    }

    .white{
        background-image: repeating-linear-gradient(-74deg,#fff,#fff 1px,transparent 0,transparent 4px),repeating-linear-gradient(-74deg,#fff,#fff 1px,transparent 0,transparent 4px);
        padding: 60px 0;

        p{
            color: #fff;
        }

        button{
            border: 1px solid #fff;
            transition: background-color .6s cubic-bezier(.23,1,.32,1),color .6s cubic-bezier(.23,1,.32,1);
            color: #fff;
        }
        
    }

    .bodyDiv{
        background-position: 0 0,0 100%;
        background-size: 100% 12px,100% 12px;
        animation: none;
        background-repeat: repeat-x,repeat-x,repeat-y,repeat-y;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p{
        font-size: 45px;
        text-align: center;
        margin-bottom: 30px;
    }

    button{
        font-size: 17px;
        background-color: transparent;
        width: 180px;
        padding: 20px;
        
    }

    button:hover{
        background-color: #000;
        color: #fff;
        border-color: #000;
    }   
    
    @media (max-width: 474px) {
        .paddingOn{
            padding: 20px;
        }
        .paddingOff{
            padding: 20px 0;
        }
    }
`

export { BecomeVendorStyle }