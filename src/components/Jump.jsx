import React from 'react';
import Jump from 'react-reveal/Jump';

class JumpText extends React.Component {
    render() {
        return (
            <div>
                <Jump>

                    <h1 style={{
                        textShadow: "3px 3px 0px #999"
                    }}>national institute of technology, durgapur</h1>
                </Jump>
            </div>
        );
    }
}

export default JumpText;