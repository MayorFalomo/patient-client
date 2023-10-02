import { styled } from "styled-components";

export const Header = styled.div`
.headerStyle{
    /* border: 1px solid red; */
    background-color: #F9F9F9;
    .subHeader{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        form{
            position: relative;
            display: flex;
            align-items: center;
            border: 1px #000 solid;
            border-radius: 7px;
            .searchBtn{
                cursor: pointer;
                padding: 5px;
                /* position: absolute;
                left: 1px;
                top: 0px; */
            }
            .searchInput{
                padding: 5px 15px;
                font-size: 16px;
                outline: none;
                border: none;
                width:300px;
                background-color: #F9F9F9;
            }
            .searchInput::placeholder{
                padding-left: 10px;
            }
        }
        .flexHeader{
            display: flex;
            align-items: center;
            gap: 20px;
            /* border: 2px green solid; */
        }
        .flexArea{
            display: flex;
            align-items: center;
            gap: 5px;
            .flexAreaImg{
                border-radius: 50%;
                width: 50px;
                height: 50px;
            }
            .patient-Info{
                display: flex;
                align-items: center;
                gap: 10px;
                /* border: 3px red solid; */
            }
        }
    }
}
`