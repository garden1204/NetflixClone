import React, { Component } from "react";
import Preview from "../components/Preview.jsx"
import MovieContainer from "../components/MovieContainer"
import withLayout from "../components/withLayout"
import Axios from "axios";
class Favorite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            week: []
        }
    }

    componentWillMount() {
        Axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr").then(response => {
            console.log(response)
            this.setState({ movies: response.data.results })
        }).catch(err => {
            console.log("err");
        });

        Axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr").then(response => {
            console.log(response)
            this.setState({ week: response.data.results })
        }).catch(err => {
            console.log("err");
        });

    }

    render() {
        return (
            <div style={{ marginTop: "15%", overflowX: "hidden", overflowY: "hidden", width: "100%" }}>
                <MovieContainer title="TV프로그램" movies={this.state.week}></MovieContainer>
            </div>
        )
    }
}
export default withLayout(Favorite);