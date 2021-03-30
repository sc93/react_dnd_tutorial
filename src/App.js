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
    const [data, setData] = useState(state);
    return (
        <AppStyled>
            <Plan data={data} />
        </AppStyled>
    );
};

export default App;
