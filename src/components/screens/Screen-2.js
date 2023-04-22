import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Text } from '../common/Text';
import { InfoPanel } from '../common/InfoPanel';
import { charactersInfo } from '../../constants/characters';
import { Slider } from '../common/Slider';
import { Button } from '../common/Button';
import arrowLeft from '../../assets/icons/sliderArrowFilledLeft.svg';
import arrowRight from '../../assets/icons/sliderArrowFilledRight.svg';
import { SCREENS } from '../../constants/screens';
import { useScreen } from '../../hooks/useScreen';
import { useGameState } from '../../hooks/useGameState';

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
  max-width: 249px;
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

const CharacterImage = styled.img`
  height: 100%;
  margin-left: 30px;
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
  transition: background-color 1000ms ease-in;
  &:first-of-type {
    margin-left: 0;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(360deg, rgba(255, 255, 255, 0.78) -9.84%, rgba(255, 255, 255, 0) 89.34%);
  padding: 30px 0 17px;
  display: flex;
  justify-content: center;
`;

export const Screen2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { next } = useScreen();
    const { setCharacter } = useGameState();

    const slideData = Object
        .values(charactersInfo)
        .map(character => ({id: character.id, image: character.pictures?.casual}));

    const sliderInfo = Array.from({length: slideData.length});

    function handleNext() {
        setCharacter(slideData[currentIndex].id);
        next(SCREENS.SCREEN_3);
    }

    return <Wrapper>
        <Info>
            <Text>
                <Text bold>{'Выбирай своего персонажа\xa0'}</Text>и отвечай вопросы, чтобы продвинуться по карьерной лестнице
                в компании.{'\n'}
                <Text bold>Впереди тебя ждут гибкие альтернативы и большие перспективы.</Text>
            </Text>
        </Info>
        <SliderInfo>
            {sliderInfo.map((_, id) => (<SliderInfoItem key={id} active={id===currentIndex} />))}
        </SliderInfo>
        <SliderStyled
            slides={slideData}
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
                    <CharacterImage src={slideData[currentIndex]?.image} alt={''}/>
                </CharacterWrapper>
            )}
        />
        <ButtonWrapper>
            <ButtonStyled onClick={handleNext}> Выбрать </ButtonStyled>
        </ButtonWrapper>
    </Wrapper>;
};