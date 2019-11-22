import * as React from "react";
import styled from "styled-components"


const Wrapper = styled.div`
    position:absolute;
    color:white;
    left:0;
    top:0;
    right:0;
    z-index:-1;
`
const Button = styled.button`
    padding: 7px 20px;
    margin: 0px 5px;
    background: rgba(0,0,0,0.4);
    color:white;
    border:0px; 
    border-radius:5px; 
    transition:0.2s;
    &:hover{
        transform : scale(1.1);
        color:black;
        background-color:white;
    }
    
`
const ButtonGroup = styled.div`
    margin-top:20px;
    display:flex;
`

const Preview = (props) => {
    return <Wrapper>
        <img src="https://occ-0-988-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSpHMNyvIRy6PolVWkmMg80JA0Kdcldq3vIxohYsRrtBKVZEyJAW6ls4b6EoKP7DzCQ6Fvnq5C694tN5eN06_Hb5gHp2.webp?r=105" alt="" width="100%" />
        <div style={{ position: "absolute", top: "14%", left: "5%", right: "65%" }}>
            <img src="https://occ-0-988-993.1.nflxso.net/dnm/api/v6/5e0byrbbfBPBmtxyXMpKqMuqOQY/AAAABduWV1XI_V1CpMePQjJ8-_aIvKPmyAvR8CAXcOAAOByHH-uTuwXXxspW-VTWODhxZtUSBI1BPK3cvJE818mM1QQ_e73MVBZPxu6c.webp?r=9a5" alt="" />
            <div>
                격동의 구한말, 불꽃처럼 타오르는 여인이 있다. 조국을 위해 <br />
                가시밭길을 택한 명문가의 규수. 그녀가 한 사내를 만난다. <br />
                동지인지, 적인지, 그저 이방인인지 모를 사내를. <br />
            </div>
            <ButtonGroup>
                <Button>재생</Button>
                <Button>내가 찜한 콘텐츠</Button>
                <Button>상세정보</Button>
            </ButtonGroup>
        </div>
    </Wrapper>

};
export default Preview;