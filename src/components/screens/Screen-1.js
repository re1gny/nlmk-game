import styled from '@emotion/styled';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import startScreenGirl from '../../assets/images/startScreenGirl.svg';
import startScreenBackground from '../../assets/images/startScreenBackground.svg';
import { StartButton } from '../common/StartButton';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

const Wrapper = styled.div`
  padding: 4.5vh 10px;
  height: 100%;
  width: 100%;
  background: url(${startScreenBackground});
  background-size: cover;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const StartText = styled.p`
  letter-spacing: -0.01em;
  text-transform: uppercase;
  text-align: center;
  color: #FFFFFF;
  font-family: BebasNeue, sans-serif;
`;

const Title = styled(StartText)`
  font-size: 40px;
  font-weight: 400;
  
  @media screen and (max-width: 320px) {
    font-size: 32px;
  }
`;

const Subtitle = styled(StartText)`
  font-size: 30px;
  margin-top: 10px;
  font-weight: 400;

  @media screen and (max-width: 320px) {
    font-size: 22px;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: 59vh;
  max-height: 400px;
  width: 100%;
  left: 0;
`;

const Image = styled.img`
    height: 100%;
`;

const ButtonStyled = styled(StartButton)`
  margin: auto auto 0;
  width: 252px;
`;

export function Screen1() {
  const { next } = useScreen();

  function handleNext() {
    reachMetrikaGoal('start');
    next(SCREENS.SCREEN_2);
  }

  return (
    <Wrapper>
        <Content>
            <Title>
              Здесь ты узнаешь, какие карьерные маршруты есть в Группе НЛМК
            </Title>
            <Subtitle>следуй за сердцем!</Subtitle>
            <ButtonStyled onStart={handleNext} />
        </Content>
        <ImageWrapper>
            <Image src={startScreenGirl} alt={''} />
        </ImageWrapper>
    </Wrapper>
  )
}
