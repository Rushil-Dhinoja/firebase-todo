import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    border: 0;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0 0 10px var(--button-shadow);
    width: ${(props) => (props.width ? props.width + '%' : '80%')};
    background-color: ${(props) => (props.disabled ? 'var(--box-shadow)' : props.bg)};
    font: 400 1.4rem 'montserrat';
    color: ${(props) => props.color};
    cursor: pointer;
    transition: transform 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: ${(props) => (props.uppercase ? 'uppercase' : '')};

    img {
        margin-right: 1rem;
        width: 20px;
        height: 20px;
    }
    @media ${(props) => props.theme.mediaQueries.small} {
        width: ${(props) => (props.width ? parseInt(props.width) + 20 + '%' : '80%')};
    }
    @media ${(props) => props.theme.mediaQueries.micro} {
        font-size: 1.2rem;
    }
    &:hover {
        transform: ${(props) => (props.disabled ? '' : 'translateY(-2px)')};
    }

    &:not(:last-child) {
        margin-right: 1rem;
        @media ${(props) => props.theme.mediaQueries.small} {
            margin-right: 0;
            margin-bottom: 1rem;
        }
    }
`;

const Button = ({ children, onClick, type, bg, width, color, uppercase, disabled }) => {
    return (
        <Btn
            uppercase={uppercase}
            onClick={() => {
                if (type === 'button') {
                    onClick();
                }
            }}
            color={color}
            bg={bg}
            width={width}
            type={type}
            disabled={disabled}>
            {children}
        </Btn>
    );
};

export default Button;
