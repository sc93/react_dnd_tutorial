import React, { useState } from 'react';
import styled from 'styled-components';
import Plan from './components/Plan';
const AppStyled = styled.div`
    display: flex;
    justify-content: center;
`;
const state = {
    plan: [
        [
            { id: '0001' },
            { id: '0002' },
            { id: '0003' },
            { id: '0004' },
            { id: '0005' },
        ],
        [
            { id: '0011' },
            { id: '0012' },
            { id: '0013' },
            { id: '0014' },
            { id: '0015' },
        ],
        [
            { id: '0021' },
            { id: '0022' },
            { id: '0023' },
            { id: '0024' },
            { id: '0025' },
        ],
    ],
    favor: [
        { id: '0031' },
        { id: '0032' },
        { id: '0033' },
        { id: '0034' },
        { id: '0035' },
    ],
};
const App = () => {
    const [plan, setPlan] = useState(state.plan);
    const [favor, setFavor] = useState(state.favor);
    const [selectCard, setSelectCard] = useState(null);

    const handleSelectCard = (card) => {
        setSelectCard(card);
    };
    // move = 옮길곳
    // select = 선택한 것
    const handleMoveCard = (moveCard, selectCard) => {
        let tmpPlan = [...plan];
        //삭제하고
        tmpPlan = tmpPlan.map((p1) =>
            p1.filter((p2) => p2.id !== selectCard.id),
        );
        console.log(tmpPlan);
        // tmpPlan[y].splice(x, 0, card);
        setPlan(tmpPlan);
        console.log(plan);
    };
    return (
        <AppStyled>
            <Plan
                plan={plan}
                favor={favor}
                handleMoveCard={handleMoveCard}
                handleSelectCard={handleSelectCard}
            />
        </AppStyled>
    );
};

export default App;
