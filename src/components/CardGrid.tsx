import React, { useEffect, useState } from 'react';
import Card from './Card';
import { shuffleArray } from '../utils/shuffleArray';
import cardData from '../cards.json';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-height: calc(100vh - 340px); /* Adjust for header and footer */
  overflow-y: scroll;
  margin-top: 20px; /* Add margin to ensure top card is visible */
  padding-top: 35px;
  border : 1px solid #f0f2f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow to the grid */

  
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const CardGrid: React.FC = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  useEffect(() => {
    setCards(shuffleArray(cardData));
  }, []);

  const handleCardClick = (id: number) => {
    if (flippedCard === id) {
      // 이미 뒤집힌 카드를 다시 클릭하는 경우
      return;
    }

    if (flippedCard !== null) {
      alert('카드는 1장만 선택할 수 있습니다');
      return;
    }

    if (selectedCard === id) {
      setFlippedCard(id); // 선택된 카드를 다시 클릭하면 뒤집힘
    } else {
      setSelectedCard(id); // 다른 카드를 클릭하면 선택 상태로 변경
    }
  };

  return (
    <Grid>
      {cards.map((card) => (
        <Card 
          key={card.id} 
          text={card.text} 
          onClick={() => handleCardClick(card.id)} 
          flipped={flippedCard === card.id}
          selected={selectedCard === card.id}
        />
      ))}
    </Grid>
  );
};

export default CardGrid;
