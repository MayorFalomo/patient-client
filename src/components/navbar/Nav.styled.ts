import styled from "styled-components"

export const NavContainer = styled.div`
nav{
    border: 1px solid #000;
    height: 100vh;
    .navSection{
        /* border: 1px solid green; */
        display: flex;
        flex-direction: column;
        gap: 40px;
        h1{
            margin: 10px 10px;
            font-size: 35px;
        }
        p{
            display: flex;
            align-items: center;
            font-size: 20px;
            gap: 20px;
            cursor: pointer;
            padding: 10px;
            border-radius: 7px;
            margin: auto 10px;
        }
        p:hover {
            background-color: black;
            color: white;
        }
    }
    ul{
        /* border: 3px yellow solid; */
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        gap: 20px;
        height: 80vh;
        padding: 10px;
        /* margin-top: 10px; */
        li{
            display: flex;
            gap: 10px;
            font-size: 20px;
            font-weight: 500;
            cursor: pointer;
            padding: 10px;
            border-radius: 7px;
        }
        li:hover{
            background-color: black;
            color: white;
        }
    }
}
`