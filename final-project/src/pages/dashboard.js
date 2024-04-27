import React, { useEffect, useState } from "react";
import "./landing.css";
import "./dashboard.css";
import { supabase } from "../components/client.js";

const Dashboard = () => {
    const [name, setName] = useState("");
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
        };
        fetchUser();
    }, []);

    return (
        <div>
            <div className="navbar-side">
                <h1>Hello {name ? name : "Loading..."}</h1>
                <div className="navbar-profile"></div>
                <div className="navbar-items"></div>
            </div>
            <div className="content-container"></div>
        </div>
    );
};

// query first user_id
// query user_id from user table
// query user_id from item table
export default Dashboard;
