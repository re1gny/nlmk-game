import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import { useLayoutEffect } from 'react';
import { Text } from '../common/Text';
import styled from '@emotion/styled';
import { InfoPanel } from '../common/InfoPanel';
import { Button } from '../common/Button';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

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
        reachMetrikaGoal('tower-start');
        next(SCREENS.SCREEN_11);
    }

    return (
        <Wrapper>
            <Info variant={'light'}>
              <Text>
                Продукция Группы НЛМК используется в&nbsp;различных отраслях: от&nbsp;строительства
                и&nbsp;машиностроения до&nbsp;энергетического оборудования и&nbsp;ветроэнергетики.{'\n'}
                В&nbsp;компании очень много процессов, а&nbsp;<b>задача директора — сделать так,
                чтобы эти процессы работали слаженно</b>
              </Text>
            </Info>
            <Info variant={'light'}>
              <Text>
                <b>Последовательно собери башню,</b> чтобы она была устойчива!{'\n'}
                <b>Выбирай</b> фигуры слева и&nbsp;<b>опускай</b> их на&nbsp;нужные места
              </Text>
            </Info>
            <ButtonStyled onClick={handleNext}>СТАРТ ➔</ButtonStyled>
        </Wrapper>
    )
}