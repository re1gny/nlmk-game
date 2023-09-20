import styled from '@emotion/styled';
import { InfoPanel } from '../common/InfoPanel';
import { Text } from '../common/Text';
import { Button } from '../common/Button';
import { useGameState } from '../../hooks/useGameState';
import { getCharacterPicture } from '../../utils/getCharacterPicture';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import { Map } from '../common/Map';

const Wrapper = styled.div`
  background: black;
  height: 100%;
  width: 100%;
  position: relative;
`;

const Info = styled(InfoPanel)`
  margin: 10vh 9px 1.8vh 19px;
  white-space: pre-line;
  padding: 16px;
`;

const ButtonStyled = styled(Button)`
  position: relative;
  max-width: 249px;
  margin: 0 auto;
  padding: 25px 0;
  z-index: 1;
`;

const CharacterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 14px;
  height: 64vw;
  max-height: 242px;
  width: 100%;
  overflow: hidden;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.6;
`;

const Content = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;


export const Screen3 = () => {
    const {next} = useScreen();
    const {character} = useGameState();
    const picture = getCharacterPicture(character, 'casual', 0);

    function handleNext() {
        next(SCREENS.SCREEN_4)
    }

    return (
        <Wrapper>
            <Map />
            <Backdrop />
            <Content>
                <Info variant={'light'}>
                    <Text>
                      Ты будешь <b>перемещаться между разными позициями</b> в компании.
                      <br />
                      От ответов на вопросы зависит твой карьерный путь, поэтому будь 
                      внимателен&nbsp;—&nbsp;их нельзя будет изменить.
                      Но ты сможешь построить новый карьерный трек после окончания игры!
                      <br/>
                      <br/>
                      Кликай по <b>синим объектам</b> на карте, чтобы узнать больше — они сделаны из стали НЛМК!
                    </Text>
                </Info>
                <ButtonStyled onClick={handleNext}>СТАРТ ➔</ButtonStyled>
                <CharacterWrapper>
                    <img src={picture} alt={''}/>
                </CharacterWrapper>
            </Content>
        </Wrapper>
    )
}