import { useLayoutEffect } from 'react';
import styled from '@emotion/styled';
import infoPeopleImage from '../../assets/images/infoPeople.png';
import { useScreen } from '../../hooks/useScreen';
import { InfoPanel } from './InfoPanel';
import { Text } from './Text';
import { Button } from './Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 32% 20px 20px;
`;

const Info = styled(InfoPanel)`
  padding: 30px 20px;
  white-space: pre-line;
  z-index: 3;
`;

const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  z-index: 2;

  & img {
    width: 100%;
  }
`;

const ButtonStyled = styled(Button)`
  margin-top: auto;
  position: relative;
  padding: 28.5px;
  z-index: 3;
`;

export const InfoScreen = ({text, onNext}) => {
    const { config } = useScreen();

    useLayoutEffect(() => {
        config.setDarkBackground();
        return () => {
            config.setLightBackground();
        };
    }, []);

    return (
        <Wrapper>
            <Info variant={'light'}>
                <Text>
                    <b>{text}</b>
                </Text>
            </Info>
            <ButtonStyled onClick={onNext}>ИДУ ДАЛЬШЕ</ButtonStyled>
            <ImageWrapper>
                <img src={infoPeopleImage} alt={''} />
            </ImageWrapper>
        </Wrapper>
    )
}