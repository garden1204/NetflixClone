import React, { Component } from "react";
import Header from "../components/Header.jsx"
import Preview from "../components/Preview.jsx"
import MovieContainer from "../components/MovieContainer"
import "./Main.css"
class Main extends Component {

    render() {
        return (
            <div style={{ marginTop: "45%", overflowX: "hidden", width: "100%" }}>
                <Header></Header>
                <Preview></Preview>
                <MovieContainer title="TV프로그램" movies={[{ title: "신서유기7" }, { title: "신서유기6" }, { title: "신서유기5" }, { title: "신서유기4" }, { title: "신서유기3" }, { title: "신서유기2" }, { title: "신서유기1" }]}></MovieContainer>
                <MovieContainer title="드라마" movies={[{ title: "신서유기7" }, { title: "신서유기6" }, { title: "신서유기5" }, { title: "신서유기4" }, { title: "신서유기3" }, { title: "신서유기2" }, { title: "신서유기1" }]}></MovieContainer>
            </div>
        )
    }
}
export default Main;