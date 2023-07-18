import React, {useEffect} from 'react';
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import {
    Sidenav,
    Dropdown,
    Ripple,
    initTE,
} from "tw-elements";
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";

export default function ContentLayout() {
    useEffect(() => {
        initTE({ Sidenav, Dropdown, Ripple });
    },[])

    return (

        <>
            <header>
                {/*<Header/>*/}
               <Sidebar />
                <Navbar />
            </header>
            <Outlet/>
            <main style={{ marginTop: 58 }}>
                <div className="container">
                    <Outlet/>
                </div>
            </main>
        </>
    );
}
