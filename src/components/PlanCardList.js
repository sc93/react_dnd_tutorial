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
    const moveCard = (id, toIndex) => {
        console.log(id, toIndex);
    };
    const findCard = (id) => {
        const findCardIndex = items.findIndex((item) => item.id === id);
        return {
            findCardIndex,
        };
    };
    return (
        <PlanCardListStyled>
            <StyleTitle text={'플랜카드 리스트'} />
            {items.map((item) => (
                <PlanCard
                    key={item.id}
                    id={item.id}
                    item={item}
                    moveCard={moveCard}
                    findCard={findCard}
                />
            ))}
        </PlanCardListStyled>
    );
};

export default PlanCardList;
