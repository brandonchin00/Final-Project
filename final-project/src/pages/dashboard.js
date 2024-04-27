import React, { useEffect, useState } from "react";
import "./landing.css";
import "./dashboard.css";
import { supabase } from "../components/client.js";
import Post from "../components/post.js";
import Form from "../components/popup.js";

//useEffect --> Render after Async function
const Dashboard = () => {
    const [name, setName] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            const returnData = await supabase
                .from("profile")
                .select("first_name")
                .eq("id", user.id);

            const returnData2 = await supabase
                .from("profile")
                .select("last_name")
                .eq("id", user.id);

            setName(
                returnData.data[0].first_name +
                    " " +
                    returnData2.data[0].last_name
            );

            const returnData3 = await supabase
                .from("notes")
                .select("id, title, category, content")
                .eq("card_id", user.id);

            setPosts(returnData3.data);
        };
        fetchUser();
    }, []);

    return (
        <div className="dashboard-container">
            <div className="navbar-side">
                <div className="navbar-title-container">
                    <h1>{name ? name : "Loading..."}</h1>
                </div>
                <div className="navbar-items">
                    <Form />
                </div>
            </div>
            <div className="content-container">
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        id={post.id}
                        title={post.title}
                        category={post.category}
                        content={post.content}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
