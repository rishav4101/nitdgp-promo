import React from 'react';
import Slide from 'react-reveal/Slide';

class Text extends React.Component {
    render() {
        return (
            <div>
                <Slide left>
                    <h1 style={{
                        textShadow: "3px 3px 0px #999"
                    }}>Image Gallery</h1>
                </Slide>
            </div>
        );
    }
}

export default Text;