import React, { Component } from "react";
import Header from "../components/Header.jsx"
import Preview from "../components/Preview.jsx"
import MovieContainer from "../components/MovieContainer"
import "./Main.css"
import Axios from "axios";
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentWillMount() {
        Axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr").then(response => {
            console.log(response)
            this.setState({ movies: response.data.results })
        }).catch(err => {
            console.log("err");
        });
    }

    render() {
        return (
            <div style={{ marginTop: "45%", overflowX: "hidden", width: "100%" }}>
                <Header></Header>
                <Preview></Preview>
                <MovieContainer title="TV프로그램" movies={this.state.movies}></MovieContainer>
                <MovieContainer title="드라마" movies={[{ title: "신서유기7" }, { title: "신서유기6" }, { title: "신서유기5" }, { title: "신서유기4" }, { title: "신서유기3" }, { title: "신서유기2" }, { title: "신서유기1" }]}></MovieContainer>
            </div>
        )
    }
}
export default Main;