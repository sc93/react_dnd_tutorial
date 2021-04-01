import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

const PlanCardStyled = styled.div`
    width: 150px;
    height: 200px;
    border: 1px solid black;
    background-color: white;
`;
const PlanCard = ({ id, item, handleSelectCard }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'card',
        item: { ...item },
        dropEffect: 'copy',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        end: (dropResult, monitor) => {
            // end는 드래그가 끝날 때 실행되는 함수

            console.log('drag id : ', id);
            const didDrop = monitor.didDrop();
            // handleSelectCard(item);
            //  drop이 가능한 엘리먼트(즉, 다른 카드)에 드롭되지 않고 드래그가 끝났으면 originalIndex로 다시 돌아간다.
            if (!didDrop) {
                console.log('not drop');
                handleSelectCard(null);
            }
        },
    }));
    return (
        <PlanCardStyled
            ref={drag}
            style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
        >
            <h2>플랜카드{item.id}</h2>
        </PlanCardStyled>
    );
};

export default PlanCard;
