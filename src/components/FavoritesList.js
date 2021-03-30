import React from 'react';
import styled from 'styled-components';
import PlanCard from './PlanCard';
import StyleTitle from './StyleTitle';

const FavoritesListStyled = styled.div`
    background-color: #ccc;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    height: 250px;
    position: absolute;
    bottom: 0;
    width: 1080px;
`;
const FavoritesList = ({ items }) => {
    return (
        <FavoritesListStyled>
            <StyleTitle text={'즐겨찾기 리스트'} />
            {items.map((item) => (
                <PlanCard key={item.id} item={item} />
            ))}
        </FavoritesListStyled>
    );
};

export default FavoritesList;
