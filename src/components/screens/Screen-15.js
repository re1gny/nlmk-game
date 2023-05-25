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
          Твой карьерный путь в этой игре — лишь один из десятка возможных
          в НЛМК. <b>Посмотри, как интересно он сложился!</b> Если захочешь,
          попробуй построить другой карьерный трек, пройдя игру заново.
          <br/>
          <br/>
          А мы уже верим в твои силы!
          <br/>
          <b>Пора начинать строить настоящую карьеру в НЛМК!</b>
        </Text>
    );

    function handleOpenLink() {
        reachMetrikaGoal('vacancy');
        window.open('', '_blank');
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