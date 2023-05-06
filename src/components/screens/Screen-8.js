import styled from '@emotion/styled';
import { InfoPanel } from '../common/InfoPanel';
import { Text } from '../common/Text';
import { Button } from '../common/Button';
import { SCREENS } from '../../constants/screens';
import { useScreen } from '../../hooks/useScreen';
import { useGameState } from '../../hooks/useGameState';

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

export const Screen8 = () => {
    const {next} = useScreen();
    const {confirmFinish, afterConfirmTrack, afterConfirmGrade, setAfterConfirmGrade, setAfterConfirmTrack, setProgress} = useGameState();

    function handleFinish() {
        next(SCREENS.SCREEN_12);
        setAfterConfirmGrade(null);
        setAfterConfirmTrack(null);
        confirmFinish();
    }

    function handleNext() {
        next(SCREENS[afterConfirmTrack][afterConfirmGrade]);
        setProgress(afterConfirmTrack, afterConfirmGrade);
        setAfterConfirmGrade(null);
        setAfterConfirmTrack(null);
        confirmFinish();
    }

    return (
        <Wrapper>
            <Info>
                <Text bold>
                    Круто, что ты оказался на этом этапе!
                </Text>
                <br/>
                <Text>
                    В Группе НЛМК не обязательно постоянно расти в
                     должности: ты можешь <b>посвятить время развитию
                    на своей позиции, наращивать экспертизу
                    и делиться знаниями с коллегами.</b>
                </Text>
                <Text bold>
                    Маленькими шагами к большой цели!
                </Text>
            </Info>
            <ButtonWrapper>
                <Button variant={'secondary'} onClick={handleFinish}>Остаюсь на этой позиции</Button>
                <ButtonStyled onClick={handleNext}>ДАЛЕЕ</ButtonStyled>
            </ButtonWrapper>
        </Wrapper>
    )
}