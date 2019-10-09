import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInRight } from 'react-animations';
import bounce from 'react-animations/lib/bounce';

const Circle = styled.div`
    width: 40px;
    height: 40px;
    background-color: red;
    margin:30px;
    border-radius:50%;
`;

const Bounce = styled.div`
    animation: 3s ${keyframes`${bounce}`} infinite
`;


class Loading extends React.Component {

    render() {
        return (
            <Bounce><Circle /></Bounce>
        );
    }
}

export default Loading;