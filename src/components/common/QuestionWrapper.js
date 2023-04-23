import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import arrowLeft from '../../assets/icons/sliderArrowOutlinedLeft.svg';
import arrowRight from '../../assets/icons/sliderArrowOutlinedRight.svg';
import { getCharacterPicture } from '../../utils/getCharacterPicture';
import { useGameState } from '../../hooks/useGameState';
import { InfoPanel } from './InfoPanel';
import { Slider } from './Slider';
import { Button } from './Button';
import { DialogField } from './DialogField';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25px 45vh auto;
  padding: 20px 0;
  grid-gap: 15px;
`;

const Info = styled(InfoPanel)`
  padding: 14px 21px;
  margin: 0 20px 20px;
`;

const Title = styled.p`
  font-family: BebasNeue, sans-serif;
  font-size: 25px;
  line-height: 25px;
  color: #2C5697;
  margin-left: 20px;
`;

const ArrowButton = styled(Button)`
  position: absolute;
  z-index: 3;
  top: calc(50% - 11px);
  transform: translateY(-50%);
  width: 25px;
  background-repeat: no-repeat;
  background-position: center;
`;

const ArrowLeft = styled(ArrowButton)`
  left: 0;
  background-image: url(${arrowLeft});
`;

const ArrowRight = styled(ArrowButton)`
  right: 0;
  background-image: url(${arrowRight});
`;

const QuestionPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SliderStyled = styled(Slider)`
  height: ${({height}) => height}
`;

const ButtonStyled = styled(Button)`
  max-width: 190px;
  margin-left: 20px;
`;

const CharacterWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 67.466vw;
  max-width: 255px;
  overflow: hidden;
  height: 36.43vh;
  max-height: 245px;
`;

const Character = styled.img`
  transform: scale(-1, 1);
  width: 89vw;
  height: 116vh;
  max-width: 335px;
  max-height: 780px;
`;

const DialogFieldStyled = styled(DialogField)`
    margin: 0 20px;
`;

export const QuestionWrapper = ({question, questionNumber, track, grade, onChoose}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const answers = question.answers;
    const {character, setProgress} = useGameState();
    const [contentHeight, setContentHeight] = useState('');

    const contentRef = useRef(null);

    function handleClick() {
        const chosenAnswer = answers[currentIndex];
        const chosenGrade = question.nextGrade ?? chosenAnswer.nextGrade;
        setProgress(chosenAnswer.track, chosenGrade);
        onChoose?.(chosenAnswer.track, chosenGrade);
    }

    useEffect(() => {
        if (!contentRef?.current?.clientHeight) return;
        setContentHeight(contentRef.current.clientHeight + 22 + 'px');
    }, [currentIndex]);

    return (
        <Wrapper>
            <Title>Вопрос №{questionNumber}</Title>
            <QuestionPart>
                <Info>
                    {question.getQuestion()}
                </Info>
                <SliderStyled
                    onChangeIndex={setCurrentIndex}
                    height={contentHeight}
                    length={answers.length}
                    renderArrows={({nextSlide, prevSlide}) => (
                        <>
                            <ArrowLeft variant={'icon'} onClick={prevSlide}/>
                            <ArrowRight variant={'icon'} onClick={nextSlide}/>
                        </>
                    )}
                    renderContent={() => (
                        <DialogFieldStyled
                            innerRef={contentRef}
                        >
                            {answers[currentIndex]?.getText()}
                        </DialogFieldStyled>
                    )}
                />
            </QuestionPart>
            <ButtonStyled onClick={handleClick}>ВЫБРАТЬ</ButtonStyled>
            <CharacterWrapper>
                <Character src={getCharacterPicture(character, track ?? answers[currentIndex]?.track, grade)} />
            </CharacterWrapper>
        </Wrapper>
    );
};