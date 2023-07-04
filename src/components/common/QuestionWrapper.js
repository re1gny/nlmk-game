import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  height: 100%;
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
  padding: 40px;
`;

const ArrowLeft = styled(ArrowButton)`
  left: -20px;
  background-image: url(${arrowLeft});
`;

const ArrowRight = styled(ArrowButton)`
  right: -20px;
  background-image: url(${arrowRight});
`;

const QuestionPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({centered}) => centered ? 'center' : 'flex-start'};
`;

const FooterPart = styled.div`
  position: relative;
  flex-grow: 1;
`;

const SliderStyled = styled(Slider)`
  height: ${({height}) => height};
  transition: height 0.2s;
`;

const ButtonStyled = styled(Button)`
  position: absolute;
  bottom: min(220px, calc(100% - 60px));
  left: 20px;
  z-index: 4;
  max-width: 190px;
  padding: 16px 48px;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 89vw;
  height: 206vw;
  max-width: 335px;
  max-height: 780px;
`;

const DialogFieldStyled = styled(DialogField)`
  margin: 0 20px;
  padding-bottom: 24px;
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

const HintText = styled(Text)`
  font-weight: 350;
  font-size: 12px;
  color: #003399;
  margin-left: 20px;
  margin-top: -10px;
  opacity: ${({ hidden }) => hidden ? '0' : '1'};
  transition: opacity 0.1s;
`;

export const QuestionWrapper = ({withHint, question, questionNumber, track, grade, onChoose, post, centered = false}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const answers = question.answers;
    const {character} = useGameState();
    const [contentHeight, setContentHeight] = useState(null);
    const [indexWasChanged, setIndexWasChanged] = useState(false);

    const contentRef = useRef(null);

    function handleChangeIndex(index) {
      setCurrentIndex(index);
      setIndexWasChanged(true);
    }

    function handleClick() {
        const chosenAnswer = answers[currentIndex];
        const chosenGrade = question.nextGrade ?? chosenAnswer.nextGrade;
        onChoose?.(chosenAnswer.track, chosenGrade, track, chosenAnswer.nextScreen, chosenAnswer.id);
    }

    useLayoutEffect(() => {
      if (!contentRef?.current?.clientHeight) return;
      setContentHeight(contentRef.current.clientHeight + 24 + 'px');
    }, [currentIndex]);

    return (
        <Wrapper>
            <Title>Вопрос №{questionNumber}</Title>
            <QuestionPart centered={centered}>
                {post && (
                    <PostWrapper>
                        <Text>
                          <b>Ты {post}</b>
                        </Text>
                    </PostWrapper>
                )}
                <Info>
                    {question.getQuestion()}
                </Info>
                <SliderStyled
                    onChangeIndex={handleChangeIndex}
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
              {withHint && <HintText hidden={indexWasChanged}>Жми на стрелочки и выбирай свой ответ</HintText>}
            </QuestionPart>
            <FooterPart>
              <ButtonStyled onClick={handleClick}>ВЫБРАТЬ</ButtonStyled>
              <CharacterWrapper>
                <Character src={getCharacterPicture(character, track ?? answers[currentIndex]?.track, grade)} />
              </CharacterWrapper>
            </FooterPart>
        </Wrapper>
    );
};