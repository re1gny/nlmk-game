import styled from '@emotion/styled';
import { InfoPanel } from '../common/InfoPanel';
import { Text } from '../common/Text';
import { Button } from '../common/Button';
import { useGameState } from '../../hooks/useGameState';
import { getCharacterPicture } from '../../utils/getCharacterPicture';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';

const Wrapper = styled.div`
  background: black;
  height: 100%;
  width: 100%;
  position: relative;
`;

const Info = styled(InfoPanel)`
  color: #2C5697;
  background-color: #FFFFFF;
  margin: 20vh 9px 4.7vh 19px;
  white-space: pre-line;
  padding: 16px;
`;

const ButtonStyled = styled(Button)`
  max-width: 249px;
  margin: 0 26px 0 auto;
`;

const CharacterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 14px;
  height: 37vh;
  width: 100%;
  overflow: hidden;
`;

export const Screen3 = () => {
    const {next} = useScreen();
    const {character, start} = useGameState();
    const picture = getCharacterPicture(character, 'casual', 0);

    function handleNext() {
        next(SCREENS.SCREEN_4)
        start()
    }

    return (
        <Wrapper>
            <Info>
                <Text>
                    Сейчас ты будешь <b>перемещаться между разными позициями</b> в компании.{'\n'}
                    Обрати внимание: на карте есть <b> синие объекты — </b>они все сделаны с использованием
                    <b> продукции НЛМК!</b>
                </Text>
            </Info>
            <ButtonStyled onClick={handleNext}>СТАРТ →</ButtonStyled>
            <CharacterWrapper>
                <img src={picture} alt={''}/>
            </CharacterWrapper>
        </Wrapper>
    )
}