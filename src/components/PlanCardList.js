import React from 'react';
import styled from 'styled-components';
import PlanCardWrapper from './PlanCardWrapper';
import StyleTitle from './StyleTitle';

const PlanCardListStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    height: 250px;
`;
const PlanCardList = ({ items, y, handleMoveCard, handleSelectCard }) => {
    return (
        <PlanCardListStyled>
            <StyleTitle text={'플랜카드 리스트'} />
            {items.map((item, idx) => (
                <PlanCardWrapper
                    key={item.id}
                    id={item.id}
                    item={item}
                    y={y}
                    x={idx}
                    handleMoveCard={handleMoveCard}
                    handleSelectCard={handleSelectCard}
                />
            ))}
        </PlanCardListStyled>
    );
};

export default PlanCardList;
