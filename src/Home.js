import React from "react";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

export default function Home() {
    return (
        <>
            <div style={{ maxWidth: 1400, margin: "0px auto" }}>
                <Navbar />
                <Slider />
                <Tabs />
            </div>
            <Footer/>
        </>
    )
}