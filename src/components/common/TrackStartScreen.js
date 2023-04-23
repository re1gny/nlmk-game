import styled from '@emotion/styled';
import arrowRightSm from '../../assets/icons/arrowRightSm.svg';
import { InfoPanel } from './InfoPanel';
import { Button } from './Button';
import { useState } from 'react';
import { MapModalScreen } from './MapModalScreen';
import { Map } from './Map';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Info = styled(InfoPanel)`
  position: absolute;
  padding: 40px 20px;
  ${({position}) => position === 'bottom' ? 'bottom: 27px' : 'top: 27px'};
  margin-right: 27px;
  margin-left: 27px;
`;

const NextButton = styled(Button)`
  position: absolute;
  right: 15px;
  top: -15px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 1px solid #002366;
  padding: 0;
`;

const Arrow = styled.div`
  background-image: url(${arrowRightSm});
  background-repeat: no-repeat;
  background-position: center;
  width: 12px;
  height: 12px;
`;

export const TrackStartScreen = ({position, text, additionalText, onNext}) => {
    const [isInfoPart, setIsInfoPart] = useState(false);
    return (
        <Wrapper>
            { isInfoPart ? (
                <MapModalScreen text={additionalText} onNext={onNext} />
            ) : (
                <>
                    <Map />
                    <Info position={position} variant={'light'}>
                        {text}
                        <NextButton onClick={() => setIsInfoPart(true)}>
                            <Arrow/>
                        </NextButton>
                    </Info>
                </>
            )}
        </Wrapper>
    );
};