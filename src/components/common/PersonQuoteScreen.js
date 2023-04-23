import { useLayoutEffect } from 'react';
import styled from '@emotion/styled';
import { useScreen } from '../../hooks/useScreen';
import { InfoPanel } from './InfoPanel';
import { Text } from './Text';
import { Button } from './Button';
import { SCREENS } from '../../constants/screens';

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
  background: #003399;
  white-space: pre-line;
  margin-top: 3.7vh;
  position: relative;
  z-index: 1;
`;

const Person = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 45.97vh;
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

export const PersonQuote = ({text, quote, person}) => {
    const { next, config } = useScreen();

    useLayoutEffect(() => {
        config.setDarkBackground();

        return () => {
            config.setLightBackground();
        };
    }, []);

    function handleNext() {
        next(SCREENS.SCREEN_12);
    }

    return (
        <Wrapper>
            <Info variant={'light'}>
                <Text bold>
                    {text}
                </Text>
            </Info>
            <Quote>
                <Text>{quote}</Text>
                <SmallText bold>© {person.name}</SmallText>
                <br/>
                <SmallText>— {person.post}</SmallText>
            </Quote>
            <ButtonStyled onClick={handleNext}>ИДУ ДАЛЬШЕ</ButtonStyled>
            <Person>
                <img src={person.img} alt={''} />
            </Person>
        </Wrapper>
    )
}