import averchenkova from '../../assets/images/averchenkova.png';
import { PersonQuote } from '../common/PersonQuoteScreen';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';

export const Screen101 = () => {
    const { next } = useScreen();

    const text = 'Бинго! \n' +
        'Ты ценнейший кадр нашей Компании. Успешно руководишь на нескольких ' +
        'площадках предприятия и легко справляешься с большим объемом задач — наш герой!';
    const quote = '«Компания открывает перед сотрудниками\nбольшие возможности. ' +
        'Нужно быть\nактивным и работать на результат — тогда\nего заметят и предложат ' +
        'делать что-то,\nследующая дверь откроется сама»';
    const person = {
        img: averchenkova,
        name: 'Татьяна Аверченкова',
        post: 'управляющий директор\nНЛМК'
    }

    function handleNext() {
        next(SCREENS.SCREEN_12);
    }

    return <PersonQuote person={person} quote={quote} text={text} onNext={handleNext} />
}