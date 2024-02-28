import styled from "styled-components";

const FoodBody = styled.div`
    padding: 180px 60px 60px;
    width: 100%;
    display: none;

    .top{
        display: flex;
        justify-content: space-around;
        h1{
            font-size: 200px;
            font-weight: 100;
            max-width: 860px;
        }
        .imgBox{
            max-width: 378px;
            width: 100%;
            img{
                width: 100%;                
            }
        }
    }
`

export { FoodBody }