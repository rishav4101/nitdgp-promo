import React from "react";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";


export default function Home() {
    return (
        <>
            <div style={{ maxWidth: 1400, margin: "0px auto" }}>
                <Navbar />
                <Tabs />
            </div>
            <Gallery />
        </>
    )
}
