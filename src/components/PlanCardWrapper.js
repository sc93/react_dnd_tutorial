import React from 'react';
import PlanCard from './PlanCard';
import { useDrop } from 'react-dnd';

const PlanCardWrapper = ({
    id,
    item,
    x,
    y,
    handleMoveCard,
    handleSelectCard,
}) => {
    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: 'card',
            drop: (selectItem) => {
                console.log({ selectItem });
                console.log({ item });
                console.log('drop id : ', id);
                console.log('x, y : ', x, y);
                handleMoveCard(item, selectItem);
            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
        }),
        [],
    );
    return (
        <div ref={drop}>
            <PlanCard id={id} item={item} handleSelectCard={handleSelectCard} />
        </div>
    );
};

export default PlanCardWrapper;
