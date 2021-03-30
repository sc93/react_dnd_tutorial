import React from 'react';
import styled from 'styled-components';
import { useDrag, useDrop } from 'react-dnd';

const PlanCardStyled = styled.div`
    width: 150px;
    height: 200px;
    border: 1px solid black;
    background-color: white;
`;
const PlanCard = ({ item, moveCard, findCard }) => {
    const originalIndex = findCard(item.id);
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: 'card', id: originalIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            // 현재 엘리먼트가 드래그되고 있는지 여부를 반환
            // 이를 이용하여 드래그중일때 스타일을 변경할 수 있음.
        }),
        end: (dropResult, monitor) => {
            // end는 드래그가 끝날 때 실행되는 함수

            const { id: droppedId, originalIndex } = monitor.getItem();

            const didDrop = monitor.didDrop();
            //  drop이 가능한 엘리먼트(즉, 다른 카드)에 드롭되지 않고 드래그가 끝났으면 originalIndex로 다시 돌아간다.
            if (!didDrop) {
                moveCard(droppedId, originalIndex);
            }
        },
    });
    // 카드순서는 useDrop에서 바꿔준다.
    const [{ isOver }, drop] = useDrop({
        accept: 'card',
        // accept는 어떤 엘리먼트가 자신 위로 drop되는 것을 허용할지 설정한다
        // useDrag 함수의 `item`에서 `type`을 정의해주는 이유!
        // useDrag 함수의 `item`의 `type`을 `card`로 설정했으니 똑같이 `card`로 써준다.

        collect: (monitor) => ({
            isOver: monitor.isOver(),
            // isOver은 다른 카드가 현재 엘리먼트 위로 지나가고 있는지를 반환
            // isOver가 true일때 스타일을 정해주자!
        }),

        drop({ id: draggedId }) {
            // `드래그중인 엘리먼트`와 `닿은 엘리먼트`가 `실시간`으로 위치가 바뀌게 하려면 `hover` 이벤트에 `moveCard`를 실행시켜주면 된다. (에러가 발생해서 drop으로 변경함....)
            // drop시에만 위치가 바뀌게 하고 싶다면 hover를 drop으로 바꿔주면 된다
            if (draggedId !== item.id) {
                const { findTagIndex: overIndex } = findCard(item.id);
                moveCard(draggedId, overIndex);
            }
        },
    });

    return (
        <PlanCardStyled
            ref={(node) => {
                drop(preview(node));
                drag(node);
            }}
            isDragging={isDragging}
            isOver={isOver}
        >
            <h2>플랜카드{item.id}</h2>
        </PlanCardStyled>
    );
};

export default PlanCard;
