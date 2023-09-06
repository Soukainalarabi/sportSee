import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
    padding: 10px;
    border: 10px solid red;
    margin-left: 120px;
    margin-top: 120px;
    backgound-color:black;
    border-bottom-color: transparent;
    border-radius: 50px;
    animation: ${rotate} 1s infinite linear;
    width: 0px;
    height: 0px;
`;

export default Loader;
