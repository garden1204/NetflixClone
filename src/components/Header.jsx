import React from "react";
import styled from "styled-components"
import "./Header.css";

const Wrapper = styled.div`
        width:100%;
        height:68px;
        display:flex;
        padding: 13px 58px;
        box-sizing:border-box;
        align-items:center;
`;
const Logo = styled.img`
    height:100%;
    margin-right:30px;
`;

const NavText = styled.ul`
    display:flex;
    color:white;
    list-style:none;
    height:100%;
    flex:1;
    margin:0px;
    align-items:center ;
    z-index:90000;
    
`

const NavTextItem = styled.li`
    margin: 0px 10px;
    color:#e5e5e5;
    &:hover{
        color:#b3b3b3;
    }
`

const NavIcon = styled.ul`
display: flex;
list-style: none;
height: 70%;
margin: 0px;
justify-content: center;

`

const NavIconItem = styled.li`
width: fit-content;

    & > img{
    height: 100%;
    margin: 0px 10px;

}
`

const Header = () => {
    const [number, setNumber] = React.useState(0);

    const change = (e) => {
        setNumber(e);
    }



    return (
        <Wrapper>
            <Logo src={"https://cdn.pixelprivacy.com/wp-content/uploads/2017/12/Netflix-Logo-1024x277.png"} alt="svg" height="100%" />
            <NavText>
                <NavTextItem onClick={e => change(0)} style={number === 0 ? { color: "#000fff" } : {}}>홈</NavTextItem>
                <NavTextItem onClick={e => change(1)} style={number === 1 ? { color: "#000fff" } : {}}>TV 프로그램</NavTextItem>
                <NavTextItem onClick={e => change(2)} style={number === 2 ? { color: "#000fff" } : {}}>영화</NavTextItem>
                <NavTextItem onClick={e => change(3)} style={number === 3 ? { color: "#000fff" } : {}}>최신 등록 콘텐츠</NavTextItem>
                <NavTextItem onClick={e => change(4)} style={number === 4 ? { color: "#000fff" } : {}}>내가 찜한 콘텐츠</NavTextItem>
            </NavText>
            <NavIcon>
                <NavIconItem><img src="/search.svg" alt="" /></NavIconItem>
                <NavIconItem><img src="/gift.svg" alt="" /></NavIconItem>
                <NavIconItem><img src="/bell.svg" alt="" /></NavIconItem>
            </NavIcon>
        </Wrapper>
    )
}
export default Header;