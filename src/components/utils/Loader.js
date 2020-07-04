import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Load = styled.div`
    height: 20rem;
    width: 20rem;
    border: 10px solid var(--color-main);
    border-top: 10px solid var(--color-secondary);
    animation: spin 1s infinite;
    border-radius: 50%;
`;

const Loader = () => {
    return (
        <Container>
            <Load></Load>
        </Container>
    );
};

export default Loader;
