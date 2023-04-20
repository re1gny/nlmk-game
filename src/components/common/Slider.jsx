import { useState } from 'react';
import styled from '@emotion/styled';

const SliderWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slide = styled.div`
  opacity: ${({active}) => active ? 1 : 0};
  transition: 1s ease;
  transform: translateX(${({active, direction}) => active ? 0 : direction === 'right' ? '-100%' : '100%'});
`;

export const Slider = ({ slides, renderArrows, renderContent, currentIndex, className, direction }) => {
    const { length } = slides;

    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }

    return (
        <SliderWrapper className={className}>
            {renderArrows?.()}
            {slides.map((slide, index) => {
                return (
                    <Slide
                        active={index === currentIndex}
                        direction={direction}
                        key={index}
                    >
                        {index === currentIndex && renderContent({slide})}
                    </Slide>
                );
            })}
        </SliderWrapper>
    );
};