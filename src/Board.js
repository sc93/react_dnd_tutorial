import React from 'react';
import RenderSquare from './testComponents/RenderSquare';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Board = ({ knightPosition }) => {
    const squares = [];
    for (let i = 0; i < 64; i++) {
        squares.push(RenderSquare(i, knightPosition));
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    width: '1080px',
                    height: '920px',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                {squares}
            </div>
        </DndProvider>
    );
};

export default Board;
