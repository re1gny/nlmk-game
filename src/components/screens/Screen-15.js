import { MapModalScreen } from '../common/MapModalScreen';
import { Button } from '../common/Button';
import styled from '@emotion/styled';
import { Text } from '../common/Text';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

const ButtonStyled = styled(Button)`
    margin-top: 16px;
`;

const LargeText = styled(Text)`
    font-size: 18px;
    display: block;
`;

const SmallText = styled(Text)`
    font-size: 12px;
    display: block;
`;

export const FinalScreen = () => {
    const {next} = useScreen();
    const text = (
        <Text>
            Твой карьерный путь в этой игре — <b>лишь один из 
            десятка возможных в НЛМК.</b> Посмотри, как интересно 
            он сложился! Ты можешь пройти игру заново и построить другой трек.
            <br/>
            <b>Для нас главное — люди</b>,
            <br/>
            а не карьерные траектории.
            <br/>
            <br/>
            Малкольм Гладуэлл говорил:
            <br/>
            «Чтобы добиться успеха и стать экспертом в определенной деятельности, 
            необходимо потратить на это 10 000 часов». <b>Мы верим в твои силы 
            и предлагаем начинать карьеру вместе с нами!</b>
        </Text>
    );

    function handleOpenLink() {
        reachMetrikaGoal('vacancy');
        window.open('https://hh.ru/employer/988387', '_blank');
    }

    function handleNext() {
        next(SCREENS.SCREEN_13)
    }

    return (
        <MapModalScreen text={text} buttonText={'ВАКАНСИИ'} onNext={handleOpenLink}>
            <ButtonStyled variant={'tertiary'} onClick={handleNext}>
                <div>
                    <LargeText>
                      <b>ПОСМОТРЕТЬ МОЙ ПУТЬ</b>
                    </LargeText>
                    <SmallText>Ты сможешь вернуться к вакансиям</SmallText>
                </div>
            </ButtonStyled>
    </MapModalScreen>
    )
}