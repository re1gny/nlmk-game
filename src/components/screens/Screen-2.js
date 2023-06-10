import React, { useState } from 'react';
import styled from '@emotion/styled';
import arrowLeft from '../../assets/icons/sliderArrowFilledLeft.svg';
import arrowRight from '../../assets/icons/sliderArrowFilledRight.svg';
import done from '../../assets/icons/done.svg';
import { useScreen } from '../../hooks/useScreen';
import { useGameState } from '../../hooks/useGameState';
import { charactersInfo } from '../../constants/characters';
import { SCREENS } from '../../constants/screens';
import { Text } from '../common/Text';
import { InfoPanel } from '../common/InfoPanel';
import { Slider } from '../common/Slider';
import { Button } from '../common/Button';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 46px;
  height: 100%;
`;

const Info = styled(InfoPanel)`
  padding: 14px 20px;
  margin: 0 19px;
  white-space: pre-line;
`;

const ButtonStyled = styled(Button)`
  transition: background-color 150ms ease-in, border 150ms ease-in;
  max-width: 249px;
  max-height: 75px;
  padding: 25px 4.5px;
  border-width: 2px;
`;

const ArrowBtn = styled(Button)`
  position: absolute;
  z-index: 3;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  background-repeat: no-repeat;
  background-position: center;
`;

const LeftButton = styled(ArrowBtn)`
  left: 19px;
  background-image: url(${arrowLeft});
`;

const RightButton = styled(ArrowBtn)`
  right: 19px;
  background-image: url(${arrowRight});
`;

const CharacterWrapper = styled.div`
  width: 245px;
  margin: 0 auto;
`;

const CHARACTER_ID_TO_OFFSET_LEFT_MAP = {
  0: 0,
  1: 30,
  2: 30,
  3: 10,
  4: 30,
  5: 20,
}

const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  margin-left: ${({ id }) => CHARACTER_ID_TO_OFFSET_LEFT_MAP[id]}px;
`;

const SliderStyled = styled(Slider)`
  flex-grow: 1;
`;

const SliderInfo = styled.div`
  margin: 5.9vh auto;
  display: flex;
  align-items: center;
`;

const SliderInfoItem = styled.div`
  border: 1px solid #2C5697;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: ${({active}) => active ? '#2C5697' : '#FFFFFF'};
  margin-left: 19px;
  transition: background-color 400ms ease-in;
  &:first-of-type {
    margin-left: 0;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(360deg, rgba(255, 255, 255, 0.78) -9.84%, rgba(255, 255, 255, 0) 89.34%);
  padding: 30px 0 17px;
  display: flex;
  justify-content: center;
`;

const DoneIcon = styled.img`
  width: 45px;
  height: 45px;
  animation: appear 500ms ease-in;

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Screen2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChosen, setIsChosen] = useState(false);
  const { next } = useScreen();
  const { setCharacter, start } = useGameState();

  const slideData = Object
    .values(charactersInfo)
    .map(character => ({id: character.id, image: character.pictures?.casual[0]}));

  const sliderInfo = Array.from({length: slideData.length});

  function handleNext() {
    reachMetrikaGoal('character');
    setIsChosen(true);
    setCharacter(slideData[currentIndex].id);
    start();
    setTimeout(() => next(SCREENS.SCREEN_3), 800);
  }

  return <Wrapper>
    <Info>
      <Text>
        <b>{'Выбирай своего персонажа\xa0'}</b>и отвечай на вопросы, чтобы продвинуться по карьерной лестнице
        в компании.{'\n'}
        <b>Впереди тебя ждут гибкие альтернативы и большие перспективы.</b>
      </Text>
    </Info>
    <SliderInfo>
      {sliderInfo.map((_, id) => (<SliderInfoItem key={id} active={id===currentIndex} />))}
    </SliderInfo>
    <SliderStyled
      onChangeIndex={setCurrentIndex}
      length={slideData.length}
      renderArrows={({nextSlide, prevSlide}) => (
        <>
          <LeftButton variant={'icon'} onClick={prevSlide} />
          <RightButton variant={'icon'} onClick={nextSlide} />
        </>
      )}
      renderContent={() => (
        <CharacterWrapper>
          <CharacterImage id={slideData[currentIndex]?.id} src={slideData[currentIndex]?.image} alt={''}/>
        </CharacterWrapper>
      )}
    />
    <ButtonWrapper>
      <ButtonStyled
        onClick={handleNext}
        variant={isChosen ? 'secondary' : 'primary'}
      >
        {isChosen ? <DoneIcon src={done} /> : 'Выбрать'}
      </ButtonStyled>
    </ButtonWrapper>
  </Wrapper>;
};