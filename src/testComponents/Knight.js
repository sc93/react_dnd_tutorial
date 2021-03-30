import React from 'react';
import { ItemTypes } from './Constants';
import { useDrag } from 'react-dnd';

const Knight = () => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.KNIGHT,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <div
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontWeight: 'bold',
                cursor: 'move',
                fontSize: '5rem',
                textAlign: 'center',
            }}
            ref={drag}
        >
            ♘
        </div>
    );
};

export default Knight;
