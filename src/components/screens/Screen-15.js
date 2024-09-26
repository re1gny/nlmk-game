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
            Твой карьерный путь в&nbsp;этой игре — <b>лишь один из&nbsp;десятка возможных в&nbsp;НЛМК.</b> Посмотри,
            как интересно он сложился! Ты можешь пройти игру заново и&nbsp;построить другой.
            <br/>
            Какой бы путь ты ни&nbsp;выбрал, в&nbsp;НЛМК ты всегда понимаешь, что и&nbsp;зачем делаешь, чтобы достичь своей цели.
            Для этого мы даем тебе инструменты и&nbsp;рекомендации, а&nbsp;ты решаешь, как ими воспользоваться!
            <br/>
            <b>Для нас главное — люди</b>, которые делают нашу компанию надежной, а&nbsp;не&nbsp;карьерные траектории.
            <br/>
            <br/>
            <b>Мы верим в&nbsp;твои силы и&nbsp;предлагаем начинать карьеру вместе с&nbsp;нами!</b>
        </Text>
    );

    function handleOpenLink() {
        reachMetrikaGoal('vacancy');
        window.open('https://vk.com/nlmk.future', '_blank');
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
                    <SmallText>Ты сможешь вернуться к&nbsp;вакансиям</SmallText>
                </div>
            </ButtonStyled>
    </MapModalScreen>
    )
}