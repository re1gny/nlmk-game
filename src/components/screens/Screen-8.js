import styled from '@emotion/styled';
import { InfoPanel } from '../common/InfoPanel';
import { Text } from '../common/Text';
import { Button } from '../common/Button';
import { SCREENS } from '../../constants/screens';
import { useScreen } from '../../hooks/useScreen';

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

    function handleNext() {
        next(SCREENS.SCREEN_12);
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
                <Button variant={'secondary'}>Остаюсь на этой позиции</Button>
                <ButtonStyled onClick={handleNext}>ДАЛЕЕ</ButtonStyled>
            </ButtonWrapper>
        </Wrapper>
    )
}