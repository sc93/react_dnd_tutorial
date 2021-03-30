import React from 'react';
import BoardSquare from './BoardSquare';
import { canMoveKnight, moveKnight } from './Game';
import Knight from './Knight';

const handleSquareClick = (toX, toY) => {
    if (canMoveKnight(toX, toY)) {
        moveKnight(toX, toY);
    }
};
function renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
        return <Knight />;
    }
}
const RenderSquare = (i, knightPosition) => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, knightPosition)}
            </BoardSquare>
        </div>
    );
};

export default RenderSquare;
