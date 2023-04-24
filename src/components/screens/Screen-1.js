import styled from '@emotion/styled';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import startScreenGirl from '../../assets/images/startScreenGirl.svg';
import startScreenBackground from '../../assets/images/startScreenBackground.svg';
import arrowRightLong from '../../assets/icons/arrowRightLong.svg';
import heart from '../../assets/icons/heart.svg';
import { Button } from '../common/Button';

const Wrapper = styled.div`
  padding: 8vw 10px;
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
  
  @media screen and (max-width: 320px) {
    font-size: 32px;
  }
`;

const Subtitle = styled(StartText)`
  font-size: 30px;
  margin-top: 10px;

  @media screen and (max-width: 320px) {
    font-size: 22px;
  }
`;

const IconsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const ButtonStyled = styled(Button)`
    margin-top: auto;
`;

const HeartIcon = styled.img`
    margin-left: 18px;
`;

export function Screen1() {
  const { next } = useScreen();

  function handleNext() {
    next(SCREENS.SCREEN_2);
  }

  return (
    <Wrapper>
        <Content>
            <Title>
                Сейчас ты откроешь возможности своего карьерного пути в Группе НЛМК.
            </Title>
            <Subtitle>следуй сердцу!</Subtitle>
            <ButtonStyled variant={'secondary'} onClick={handleNext}>
                <IconsBlock>
                    <img src={arrowRightLong} alt={''}/>
                    <HeartIcon src={heart} alt={''}/>
                </IconsBlock>
            </ButtonStyled>
        </Content>
        <ImageWrapper>
            <Image src={startScreenGirl} alt={''} />
        </ImageWrapper>
    </Wrapper>
  )
}
