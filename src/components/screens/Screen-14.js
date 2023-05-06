import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import { useLayoutEffect } from 'react';
import { Text } from '../common/Text';
import styled from '@emotion/styled';
import { InfoPanel } from '../common/InfoPanel';
import { Button } from '../common/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 28% 20px 20px;
`;

const Info = styled(InfoPanel)`
  padding: 14px 20px;
  white-space: pre-line;
  
  & + & {
    margin-top: 16px;
  }
`;

const ButtonStyled = styled(Button)`
  padding: 25px 4.5px;
  max-width: 249px;
  margin: 24px auto 0;
`;

export const PreTetrisScreen = () => {
    const { next, config } = useScreen();

    useLayoutEffect(() => {
        config.setDarkBackground();
        return () => {
            config.setLightBackground();
        };
    }, []);

    function handleNext() {
        next(SCREENS.SCREEN_11);
    }

    return (
        <Wrapper>
            <Info variant={'light'}>
              <Text>
                Продукция Группы НЛМК используется в различных отраслях: от строительства
                и машиностроения до энергетического оборудования и ветроэнергетики.{'\n'}
                В компании очень много процессов, а <Text bold>задача директора — сделать так,
                чтобы эти процессы работали слаженно</Text>
              </Text>
            </Info>
            <Info variant={'light'}>
              <Text>
                <Text bold>Последовательно собери башню,</Text> чтобы она была устойчива!{'\n'}
                <Text bold>Выбирай</Text> фигуры слева и <Text bold>опускай</Text> их на нужные места
              </Text>
            </Info>
            <ButtonStyled onClick={handleNext}>СТАРТ ➔</ButtonStyled>
        </Wrapper>
    )
}