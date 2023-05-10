import averchenkova from '../../assets/images/averchenkova.png';
import { PersonQuote } from '../common/PersonQuoteScreen';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';

export const Screen102 = () => {
    const { next } = useScreen();

    const text = 'Рост до следующей ступени непрост,\n' +
      'но твои усердие и стремление расширять границы точно не останутся незамеченным. Вперед к новым вершинам!';
    const quote = '«Компания открывает перед сотрудниками\nбольшие возможности. ' +
        'Нужно быть\nактивным и работать на результат — тогда\nего заметят и предложат ' +
        'делать что-то,\nследующая дверь откроется сама»';
    const person = {
        img: averchenkova,
        name: 'Татьяна Аверченкова',
        post: 'управляющий директор\nНЛМК'
    }

    function handleNext() {
        next(SCREENS.SCREEN_12_2);
    }

    return <PersonQuote person={person} quote={quote} text={text} onNext={handleNext} />
}