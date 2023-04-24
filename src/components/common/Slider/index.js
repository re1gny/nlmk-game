import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.css';

const SliderWrapper = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const SliderContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Slider = ({ length, renderArrows, renderContent, onChangeIndex, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [side, setSide] = useState('');

    const nextSlide = () => {
        setCurrentIndex(cur => (cur + 1) % length);
        setSide('slide-right');
        onChangeIndex?.(cur => (cur + 1) % length);
    };

    const prevSlide = () => {
        setCurrentIndex(cur => cur === 0 ? length - 1 : cur - 1);
        setSide('slide-left');
        onChangeIndex?.(cur => cur === 0 ? length - 1 : cur - 1)
    };


    const childFactory = (side) => (child) =>
        React.cloneElement(child, {
            classNames: side,
        });

    return (
        <SliderWrapper className={className}>
            {renderArrows?.({nextSlide, prevSlide})}
            <SliderContent>
                <TransitionGroup childFactory={childFactory(side)} component={null}>
                    <CSSTransition
                        key={currentIndex}
                        classNames={side}
                        timeout={400}
                    >
                        <div className={'slide'}>
                            {renderContent({side})}
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </SliderContent>
        </SliderWrapper>
    );
};