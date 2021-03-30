import React from 'react';
import styled from 'styled-components';

const PlanCardStyled = styled.div`
    width: 150px;
    height: 200px;
    border: 1px solid black;
    background-color: white;
`;
const PlanCard = ({ item }) => {
    return (
        <PlanCardStyled>
            <h2>플랜카드{item.id}</h2>
        </PlanCardStyled>
    );
};

export default PlanCard;
