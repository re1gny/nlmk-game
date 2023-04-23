import { MapModalScreen } from '../common/MapModalScreen';
import { Button } from '../common/Button';
import styled from '@emotion/styled';
import { Text } from '../common/Text';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';

const ButtonStyled = styled(Button)`
    margin-top: 16px;
`;

const SmallText = styled(Text)`
    font-size: 12px;
    margin-top: -4px;
`;

export const FinalScreen = () => {
    const {next} = useScreen();
    const text = (
        <>
            <Text bold> Коллеги тобой восхищаются. </Text>
            <Text>
                Ты звезда уже на нескольких площадках предприятия,
                в том числе международных!<b> Желаем тебе успеха во всех твоих свершениях.</b>
            </Text>
            <Text>
                Уверены — с каждым начинанием ты <b>будешь справляться так же легко, как с сегодняшними заданиями!</b>
            </Text>
        </>
    );

    function handleOpenLink() {
        window.open('', '_blank');
    }

    function handleNext() {
        next(SCREENS.SCREEN_13)
    }

    return (
        <MapModalScreen text={text} buttonText={'К ВАКАНСИЯМ'} onNext={handleOpenLink}>
            <ButtonStyled variant={'tertiary'} onClick={handleNext}>
                <div>
                    <Text bold>ТВОЙ ТРЭК НА КАРТЕ </Text>
                    <SmallText>P. S. Ты сможешь вернуться к вакансиям</SmallText>
                </div>
            </ButtonStyled>
    </MapModalScreen>
    )
}