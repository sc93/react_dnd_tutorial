import styled from 'styled-components';
import React from 'react';

const TitleStyled = styled.h1`
    width: 250px;
`;

const StyleTitle = ({ text }) => {
    return <TitleStyled>{text}</TitleStyled>;
};

export default StyleTitle;
