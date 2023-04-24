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
import { Text } from './Text';

const Wrapper = styled.div`
  padding: 20px 0;
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
  margin-bottom: 15px;
  
  @media screen and (max-width: 320px) {
    font-size: 22px;
    line-height: 22px;
  }
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
  min-height: min(85vw, 48vh);
`;

const SliderStyled = styled(Slider)`
  height: ${({height}) => height}
`;

const ButtonStyled = styled(Button)`
  position: absolute;
  top: calc(min(85vw, 48vh) + 40px);
  left: 20px;
  z-index: 4;
  max-width: 190px;
  
  @media screen and (max-height: 590px) {
    top: calc(min(90vw, 50vh) + 50px);
  }
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
  height: 65.333vw;
  max-height: 245px;
`;

const Character = styled.img`
  transform: scale(-1, 1);
  width: 89vw;
  height: 206vw;
  max-width: 335px;
  max-height: 780px;
`;

const DialogFieldStyled = styled(DialogField)`
  margin: 0 20px;
`;

const PostWrapper = styled.div`
  margin: 0 20px 10px 20px;
  background: #0099FF;
  border: 1px solid #002366;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  color: white;
`;

export const QuestionWrapper = ({question, questionNumber, track, grade, onChoose, post}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const answers = question.answers;
    const {character, setProgress} = useGameState();
    const [contentHeight, setContentHeight] = useState('');

    const contentRef = useRef(null);

    function handleClick() {
        const chosenAnswer = answers[currentIndex];
        const chosenGrade = question.nextGrade ?? chosenAnswer.nextGrade;
        setProgress(chosenAnswer.track, chosenGrade);
        onChoose?.(chosenAnswer.track, chosenGrade, track);
    }

    useEffect(() => {
        if (!contentRef?.current?.clientHeight) return;
        setContentHeight(contentRef.current.clientHeight + 24 + 'px');
    }, [contentRef?.current?.clientHeight, currentIndex]);

    return (
        <Wrapper>
            <Title>Вопрос №{questionNumber}</Title>
            <QuestionPart>
                {post && (
                    <PostWrapper>
                        <Text bold>Ты {post} </Text>
                    </PostWrapper>
                )}
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