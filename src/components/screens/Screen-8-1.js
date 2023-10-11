import styled from '@emotion/styled';
import { InfoPanel } from '../common/InfoPanel';
import { Text } from '../common/Text';
import { Button } from '../common/Button';
import { SCREENS } from '../../constants/screens';
import { useScreen } from '../../hooks/useScreen';
import { useGameState } from '../../hooks/useGameState';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

const Wrapper = styled.div`
  padding: min(17.8vh, 119px) 19px 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Info = styled(InfoPanel)`
    padding: 30px 20px;
`;

const ButtonWrapper = styled.div`
  margin-top: auto;
`;

const ButtonStyled = styled(Button)`
    margin-top: 16px;
`;

export const Screen81 = () => {
    const {next} = useScreen();
    const {confirmFinish, track, grade} = useGameState();

    function handleFinish() {
        reachMetrikaGoal('stay-here');
        next(SCREENS.SCREEN_9_1);
        confirmFinish();
    }

    function handleBack() {
        next(SCREENS[track][grade]);
        confirmFinish();
    }

    return (
        <Wrapper>
            <Info>
                <Text>
                    <b>Круто, что ты&nbsp;оказался на&nbsp;этом этапе!</b>
                    <br/>
                    <br/>
                    В Группе НЛМК не&nbsp;обязательно постоянно расти в&nbsp;должности:
                    ты&nbsp;можешь <b>посвятить время развитию
                    на&nbsp;своей позиции, наращивать экспертизу
                    и&nbsp;делиться знаниями с&nbsp;коллегами.</b>
                    <br/>
                    <br/>
                    <b>Маленькими шагами к&nbsp;большой цели!</b>
                </Text>
            </Info>
            <ButtonWrapper>
                <Button variant={'secondary'} onClick={handleFinish}>Остаюсь на&nbsp;этой позиции</Button>
                <ButtonStyled onClick={handleBack}>ИЗМЕНИТЬ ВЫБОР</ButtonStyled>
            </ButtonWrapper>
        </Wrapper>
    )
}