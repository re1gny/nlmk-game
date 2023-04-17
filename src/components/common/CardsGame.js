import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import cardBack from '../../assets/icons/cardBack.svg';
import card1 from '../../assets/icons/card1.svg';
import card2 from '../../assets/icons/card2.svg';
import card3 from '../../assets/icons/card3.svg';
import card4 from '../../assets/icons/card4.svg';
import card5 from '../../assets/icons/card5.svg';
import card6 from '../../assets/icons/card6.svg';
import card7 from '../../assets/icons/card7.svg';
import card8 from '../../assets/icons/card8.svg';
import { shuffleArray } from '../../utils/shuffleArray';

const FLIP_DURATION = 800;
const CARD_ICONS = [card1, card2, card3, card4, card5, card6, card7, card8];
export const UNIQ_CARDS_AMOUNT = CARD_ICONS.length;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 24px;
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  perspective: 1000px;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform ${FLIP_DURATION}ms;
  transform-style: preserve-3d;
  transform: ${({ flipped, correct }) => correct || flipped ? 'rotateY(0)' : 'rotateY(180deg)'};
`;

const CardSide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
`;

const CardFront = styled(CardSide)`
  background-color: #4DDA64;
`;

const CardBack = styled(CardSide)`
  background-color: #FFFFFF;
  transform: rotateY(180deg);
`;

function createInitialCards() {
  return shuffleArray(CARD_ICONS.reduce((acc, icon, index) => (
    [...acc, ...(new Array(2).fill({ icon, id: index }))]
  ), []));
}

function createInitialCardsState(amount) {
  return new Array(amount).fill(0).reduce((acc, item, index) => ({
    ...acc,
    [index]: {
      flipped: false,
      correct: false,
    },
  }), {});
}

export function CardsGame({ className, onGuess, onFinish }) {
  const [cards] = useState(createInitialCards());
  const [cardsState, setCardsState] = useState(createInitialCardsState(cards.length));
  const lastSelectedCardRef = useRef(null);

  function updateCardState(index, newState) {
    setCardsState(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        ...(typeof newState === 'function' ? newState(prev[index]) : newState)
      },
    }));
  }

  function handleFlip(card, index) {
    if (cardsState[index].correct) {
      return;
    }

    updateCardState(index, (prev) => ({ flipped: !prev.flipped }));

    if (!lastSelectedCardRef.current) {
      lastSelectedCardRef.current = [card, index];
    } else if (lastSelectedCardRef.current[0].id === card.id && lastSelectedCardRef.current[1] !== index) {
      updateCardState(index, { flipped: true, correct: true });
      updateCardState(lastSelectedCardRef.current[1], { flipped: true, correct: true });
      lastSelectedCardRef.current = null;
      onGuess?.();
    } else if (lastSelectedCardRef.current[0].id !== card.id) {
      const lastIndex = lastSelectedCardRef.current[1];

      setTimeout(() => {
        updateCardState(index, { flipped: false });
        updateCardState(lastIndex, { flipped: false });
      }, FLIP_DURATION);
      lastSelectedCardRef.current = null;
    }
  }

  useEffect(() => {
    if (Object.keys(cardsState).every(key => cardsState[key].correct)) {
      onFinish?.();
    }
  }, [cardsState]);

  return (
    <Wrapper className={className}>
      {cards.map((card, index) => (
        <Card key={index} onClick={() => handleFlip(card, index)}>
          <CardInner correct={cardsState[index].correct} flipped={cardsState[index].flipped}>
            <CardFront>
              <img src={card.icon} alt=""/>
            </CardFront>
            <CardBack>
              <img src={cardBack} alt=""/>
            </CardBack>
          </CardInner>
        </Card>
      ))}
    </Wrapper>
  );
}
