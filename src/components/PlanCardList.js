import React from 'react';
import styled from 'styled-components';
import PlanCard from './PlanCard';
import StyleTitle from './StyleTitle';

const PlanCardListStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    height: 250px;
`;
const PlanCardList = ({ items }) => {
    return (
        <PlanCardListStyled>
            <StyleTitle text={'플랜카드 리스트'} />
            {items.map((item) => (
                <PlanCard key={item.id} item={item} />
            ))}
        </PlanCardListStyled>
    );
};

export default PlanCardList;
