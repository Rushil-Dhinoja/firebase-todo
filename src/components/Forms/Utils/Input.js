import React from 'react';
import styled from 'styled-components';

const Field = styled.input`
    padding: 1rem 2rem;
    width: 80%;
    border: 1px solid transparent;
    box-shadow: 0 0 5px var(--box-shadow);
    margin: 0 0 2rem 0;
    border-radius: 10px;
    font: 400 1.4rem 'montserrat';

    @media ${(props) => props.theme.mediaQueries.small} {
        margin: 0 0 1rem 0;
        width: 90%;
    }

    &:last-of-type {
        margin: 0 0 3rem 0;
        @media ${(props) => props.theme.mediaQueries.small} {
            margin: 0 0 2rem 0;
        }
    }
`;

const Input = ({ placeholder, type, name, value, onChange }) => {
    return (
        <Field
            name={name}
            value={value}
            onChange={(e) => onChange(e)}
            placeholder={placeholder}
            type={type}></Field>
    );
};

export default Input;
