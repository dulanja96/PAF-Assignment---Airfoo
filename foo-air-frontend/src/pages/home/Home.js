import React, {} from "react";
import "./Home.css";
import CreatePost from "../../components/CreatePost";

const Home = () => {

    return (
        <div className="home-container bg-blue-100">
            <div className="container">
                <CreatePost/>

            </div>
        </div>
    );
};

export default Home;
