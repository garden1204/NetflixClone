
import * as React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    color:white;
    width:calc(20% - 8px);
    padding-bottom:10%;
    margin-right:10px;
    height:0;
    position:relative;
    &>div{
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background-color:#aaa;

        display:flex;
        justify-content:center;
        align-items:center;
    }
`

const MovieItem = (props) => {
    return (
        <Wrapper>
            <div>{props.title}</div>
        </Wrapper>
    )
}

export default MovieItem;