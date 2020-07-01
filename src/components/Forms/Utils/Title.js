import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    text-align: center;
    padding: 2rem 0;
    font: 600 3rem 'montserrat';
    text-transform: uppercase;
    color: var(--color-main);
    @media ${(props) => props.theme.mediaQueries.small} {
        font-size: 2rem;
    }
    @media ${(props) => props.theme.mediaQueries.micro} {
        font-size: 1.8rem;
    }
`;

const Title = ({ children }) => {
    return <Heading>{children}</Heading>;
};

export default Title;
