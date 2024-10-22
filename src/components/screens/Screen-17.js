import {useState, useRef} from 'react';
import { FTClient } from 'ft-client';
import { MapModalScreen } from '../common/MapModalScreen';
import { Button } from '../common/Button';
import styled from '@emotion/styled';
import { Text } from '../common/Text';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import { ModalInfoPanel } from '../common/ModalInfoPanel';
import { Input } from '../common/Input';
import { Checkbox } from '../common/Checkbox';
import {reachMetrikaGoal} from "../../utils/reachMetrikaGoal";

const Info = styled(ModalInfoPanel)`
  padding: 14px 21px;
`;

const FieldInfo = styled(ModalInfoPanel)`
  margin-top: 10px;
  width: 100%;
`;

const SuccessInfo = styled(ModalInfoPanel)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  margin-top: 30px;
  border-radius: 50%;
`;

const ButtonStyled1 = styled(Button)`
    margin-top: 16px;
`;

const ButtonStyled2 = styled(Button)`
    margin-top: 10px;
`;

const InputStyled = styled(Input)`
    margin-top: -1px;
    margin-left: -1px;
    width: calc(100% + 2px);
`;

const CheckboxStyled = styled(Checkbox)`
    margin: 10px;
`;

const SmallTextLink = styled.a`
    color: inherit;
`;

const ftClient = new FTClient('https://games-admin.fut.ru/api/', 'nlmk-career-map')

export const LotteryScreen = () => {
    const [email, setEmail] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const [isAgreedError, setIsAgreedError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const [isTakingPart, setIsTakingPart] = useState(false);
    const isAgreedErrorTimerRef = useRef(null)
    const isEmailErrorTimerRef = useRef(null)
    const {next} = useScreen();

    const text = (
        <Text>
            <b>Оставляй почту,</b> чтобы участвовать
            в&nbsp;конкурсе и&nbsp;<b>выиграть призы</b> от&nbsp;НЛМК,
            а&nbsp;также первым получать предложения по&nbsp;вакансиям!
        </Text>
    );
    const successText = (
        <Text>
            <b>Ты участвуешь в&nbsp;розыгрыше!</b>
            <br/>
            В случае победы сообщим по&nbsp;почте
        </Text>
    );
    const label = (
        <>
            Я согласен(а) на&nbsp;<SmallTextLink target='blank' href='https://fut.ru/personal-data'>обработку
            персональных данных</SmallTextLink> и&nbsp;получение информационных сообщений,
            а&nbsp;также с&nbsp;<SmallTextLink  target='blank' href='https://nlmk-career-map.fut.ru/agreement.pdf'>правилами проведения акции</SmallTextLink>.
        </>
    );

    function handleSaveEmail(email) {
        ftClient.createRecord({ email });
    }

    function handleTakePart() {
        if (!email) {
            clearTimeout(isEmailErrorTimerRef.current)
            setIsEmailError(true);
            isEmailErrorTimerRef.current = setTimeout(() => setIsEmailError(false), 1000);
        }

        if (!isAgreed) {
            clearTimeout(isAgreedErrorTimerRef.current)
            setIsAgreedError(true);
            isAgreedErrorTimerRef.current = setTimeout(() => setIsAgreedError(false), 1000);
        }

        if (email && isAgreed) {
            setIsTakingPart(true)
            handleSaveEmail(email)
            reachMetrikaGoal('mail');
            setTimeout(() => next(SCREENS.SCREEN_15), 2000)
        }
    }

    function handleEmailChange(value) {
        clearTimeout(isEmailErrorTimerRef.current)
        setIsEmailError(false)
        setEmail(value)
    }

    function handleIsAgreedChange(value) {
        clearTimeout(isAgreedErrorTimerRef.current)
        setIsAgreedError(false)
        setIsAgreed(value)
    }

    function handleNext() {
        reachMetrikaGoal('nomail');
        next(SCREENS.SCREEN_15)
    }

    function renderContent({text, buttonText, onNext}) {
        if (isTakingPart) {
            return (
                <>
                    <Info>{successText}</Info>
                    <SuccessInfo>
                        <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M24.5396 2.62003C25.0146 2.14507 25.0146 1.37501 24.5396 0.900045C24.0646 0.425083 23.2946 0.425083 22.8196 0.900045L8.19922 15.5204L2.17875 9.49996C1.70379 9.025 0.933723 9.025 0.458761 9.49996C-0.0162016 9.97492 -0.0162014 10.745 0.458761 11.22L7.33872 18.0999C7.56612 18.3273 7.86117 18.4458 8.15909 18.4555C8.48374 18.4663 8.81189 18.3478 9.0597 18.0999L24.5396 2.62003Z" fill="#003399"/>
                        </svg>
                    </SuccessInfo>
                </>
            )
        }

        return (
            <>
                <Info>{text}</Info>
                <FieldInfo>
                    <InputStyled value={email} error={isEmailError} placeholder='example@post.ru' onChange={handleEmailChange} />
                    <CheckboxStyled value={isAgreed} error={isAgreedError} label={label} onChange={handleIsAgreedChange} />
                </FieldInfo>
                <ButtonStyled1 onClick={onNext}>{buttonText}</ButtonStyled1>
                <ButtonStyled2 variant={'tertiary'} onClick={handleNext}>
                    НЕ ХОЧУ
                </ButtonStyled2>
            </>
        )
    }

    return (
        <MapModalScreen modalKey={isTakingPart} text={text} buttonText={'УЧАСТВОВАТЬ'} renderContent={renderContent} onNext={handleTakePart} />
    )
}