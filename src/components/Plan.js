import React from 'react';
import styled from 'styled-components';
import PlanCardList from './PlanCardList';
import FavoritesList from './FavoritesList';
import StyleTitle from './StyleTitle';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const PlanStyled = styled.div`
    display: flex;
    width: 1080px;
    justify-content: center;
    flex-flow: column;
`;
const PlanCardListWrapper = styled.div`
    height: 760px;
    overflow-y: scroll;
`;
const Plan = ({ plan, favor, handleMoveCard, handleSelectCard }) => {
    return (
        <DndProvider backend={HTML5Backend}>
            <PlanStyled>
                <PlanCardListWrapper>
                    <StyleTitle text={'플랜'} />
                    {plan.map((items, idx) => (
                        <PlanCardList
                            key={`plan${idx}`}
                            items={items}
                            y={idx}
                            handleMoveCard={handleMoveCard}
                            handleSelectCard={handleSelectCard}
                        />
                    ))}
                </PlanCardListWrapper>
                <FavoritesList
                    items={favor}
                    handleSelectCard={handleSelectCard}
                />
            </PlanStyled>
        </DndProvider>
    );
};

export default Plan;
