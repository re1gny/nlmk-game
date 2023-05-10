import { useLayoutEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useScreen } from '../../hooks/useScreen';
import { InfoPanel } from './InfoPanel';
import { Text } from './Text';
import { Button } from './Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16% 20px 20px;
`;

const Info = styled(InfoPanel)`
  padding: 30px 20px;
  white-space: pre-line;
`;

const Quote = styled.div`
  color: #FFFFFF;
  white-space: pre-line;
  margin-top: 5%;
  position: relative;
  z-index: 1;
  animation: bgAppear 1000ms both;
  animation-delay: 300ms;

  @media screen and (max-width: 310px) {
    white-space: normal;
  }

  @keyframes bgAppear {
    0% {
      background-color: initial;
    }
    100% {
      background-color: #003399;
    }
  }
`;

const Person = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 80.333vw;
  max-height: 320px;
  width: 58.8vw;
  max-width: 228px;
  z-index: 2;

  & img {
    height: 100%;
  }
`;

const SmallText = styled(Text)`
  font-size: 14px;
  
  @media screen and (max-width: 325px) {
    font-size: 12px;
  }
`;

const ButtonStyled = styled(Button)`
  margin-top: auto;
  position: relative;
  z-index: 3;
`;

export const PersonQuote = ({text, quote, person, onNext}) => {
    const [isBackgroundChanged, setIsBackgroundChanged] = useState(false);
    const { config } = useScreen();

    useLayoutEffect(() => {
        config.setDarkBackground();
        setIsBackgroundChanged(true);
        return () => {
            setIsBackgroundChanged(false);
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
            <Quote isBackgroundChanged={isBackgroundChanged}>
                <Text>{quote}</Text>
                <SmallText>
                  <b>© {person.name}</b>
                </SmallText>
                <br/>
                <SmallText>— {person.post}</SmallText>
            </Quote>
            <ButtonStyled onClick={onNext}>ДАЛЕЕ</ButtonStyled>
            <Person>
                <img src={person.img} alt={''} />
            </Person>
        </Wrapper>
    )
}