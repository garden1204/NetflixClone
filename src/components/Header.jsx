import React from "react";
import styled from "styled-components"
import "./Header.css";
import { Link } from "react-router-dom"
const Wrapper = styled.div`
        width:100%;
        height:68px;
        display:flex;
        padding: 13px 58px;
        box-sizing:border-box;
        justify-content:space-between;
        align-items:center;
        position:fixed;
        top:0;
        left:0;
        right:0;
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
const Flex = styled.div`
    width:100%;
    height:100%;
    display:flex;
`
const Flex2 = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:flex-end;
`

const Header = () => {
    const [number, setNumber] = React.useState(0);

    const change = (e) => {
        setNumber(e);
    }

    return (
        <Wrapper>
            <Flex>
                <Logo src={"https://cdn.pixelprivacy.com/wp-content/uploads/2017/12/Netflix-Logo-1024x277.png"} alt="svg" height="100%" />
                <NavText>
                    <Link to="/"><NavTextItem onClick={e => change(0)} style={number === 0 ? { color: "#fff" } : {}}>홈</NavTextItem></Link>
                    <NavTextItem onClick={e => change(1)} style={number === 1 ? { color: "#fff" } : {}}><Link to="/Tv">TV 프로그램</Link></NavTextItem>
                    <NavTextItem onClick={e => change(2)} style={number === 2 ? { color: "#fff" } : {}}>영화</NavTextItem>
                    <NavTextItem onClick={e => change(3)} style={number === 3 ? { color: "#fff" } : {}}><Link to="/new">최신 등록 콘텐츠</Link></NavTextItem>
                    <NavTextItem onClick={e => change(4)} style={number === 4 ? { color: "#fff" } : {}}><Link to="/favorite">내가 찜한 콘텐츠</Link></NavTextItem>
                </NavText>
            </Flex>
            <Flex2>
                <NavIcon>
                    <NavIconItem><img src="/search.svg" alt="" /></NavIconItem>
                    <NavIconItem><img src="/gift.svg" alt="" /></NavIconItem>
                    <NavIconItem><img src="/bell.svg" alt="" /></NavIconItem>
                </NavIcon>
            </Flex2>
        </Wrapper>
    )
}
export default Header;