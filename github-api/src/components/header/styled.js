import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 35px;
        padding: 8px;
        font-weight: 500;       
    }

    button {
        background-color: #dbd18d;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;
        font-weight: normal;
        font-size: 16px;

        &:hover{
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
            background-color: #c2b877;

            span {
                font-weight: bold;
            }
        }
    }

`;