import { Text } from '../common/Text';
import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { InfoPanel } from '../common/InfoPanel';
import { charactersInfo } from '../../constants/characters';
import { Slider } from '../common/Slider';

const Wrapper = styled.div`
    padding: 46px 19px;
`;

const Info = styled(InfoPanel)`
  padding: 14px 20px;
  white-space: pre-line;
`;

export const Screen2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('');
    const slideData = Object
        .values(charactersInfo)
        .map(character => ({id: character.id, image: character.pictures?.casual}));

    const nextSlide = useCallback(() => {
        setCurrentIndex(cur => cur === slideData.length - 1 ? 0 : cur + 1);
        setDirection('right');
    }, [setCurrentIndex, slideData]);

    const prevSlide = useCallback(() => {
        setCurrentIndex(cur => cur === 0 ? slideData.length - 1 : cur - 1);
        setDirection('left');
    }, [setCurrentIndex, slideData]);

    return <Wrapper>
        <Info>
            <Text>
                <Text bold>{'Выбирай своего персонажа\xa0'}</Text>и отвечай вопросы, чтобы продвинуться по карьерной лестнице
                в компании.{'\n'}
                <Text bold>Впереди тебя ждут гибкие альтернативы и большие перспективы.</Text>
            </Text>
        </Info>
        <Slider
            slides={slideData}
            currentIndex={currentIndex}
            direction={direction}
            renderArrows={() => (<>
                <button onClick={prevSlide}>prev</button>
                <button onClick={nextSlide}>next</button>
            </>)}
            renderContent={({slide}) => <img src={slide.image} alt={''}/>}
        />
    </Wrapper>;
};