import rusakov from '../../assets/images/rusakov.png'
import { PersonQuote } from '../common/PersonQuoteScreen';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

export const Screen91 = () => {
    const { next } = useScreen();

    const text = 'Рост до руководящих должностей непрост и требует много времени и усилий, но благодаря железной воле у тебя все получится.\n Брось вызов — у нас нет рамок и барьеров для твоего развития!'
    const quote = '«Сотрудников НЛМК отличает\n' + 
        'сплочённость и прагматичность — в любой\n' + 
        'ситуации люди действуют разумно\n' + 
        'и сообща. Стальная закалка — не метафора,\n' + 
        'а описание качеств, которые объединяют\n' + 
        'всех наших коллег»'
    const person = {
        img: rusakov,
        name: 'Михаил Русаков',
        post: 'руководитель направления\nУправления охраны труда\nи промышленной безопасности'
    }

    function handleNext() {
        reachMetrikaGoal('finish');
        next(SCREENS.SCREEN_12_1);
    }

    return <PersonQuote person={person} quote={quote} text={text} onNext={handleNext} />
}