import React, { useState } from 'react'
import Pulse from 'react-reveal/Pulse';

const PulseText = () => {
    return (
        <div>
            <Pulse
            >
                <img src="./nitdgp.png" alt="," style={{ height: 60, width: "auto" }} />
            </Pulse>
        </div >
    );

}

export default PulseText;