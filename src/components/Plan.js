import React from 'react';
import styled from 'styled-components';
import PlanCardList from './PlanCardList';
import FavoritesList from './FavoritesList';
import StyleTitle from './StyleTitle';

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
const Plan = ({ data }) => {
    const { plan, favor } = data;
    return (
        <PlanStyled>
            <PlanCardListWrapper>
                <StyleTitle text={'플랜'} />
                {plan.map((items, idx) => (
                    <PlanCardList key={`plan${idx}`} items={items} />
                ))}
            </PlanCardListWrapper>
            <FavoritesList items={favor} />
        </PlanStyled>
    );
};

export default Plan;
