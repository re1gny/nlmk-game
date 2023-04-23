import fomchenkova from '../../assets/images/fomchenkova.png'
import { PersonQuote } from '../common/PersonQuoteScreen';

export const Screen9 = () => {
    const text = ' Рост до руководящих должностей непрост и требует ' +
        'много времени и усилий, но ты можешь стать исключением. ' +
        'Брось вызов — у нас нет рамок и барьеров для твоего развития!';
    const quote = '«Не нужно ждать повышения годами.\nСейчас молодые,' +
        'яркие и энергичные \nребята приходят в компанию,' +
        'берут на себя \nответственность, добиваются результата \nи быстро растут»'
    const person = {
        img: fomchenkova,
        name: 'Евгения Фомченкова',
        post: 'начальник управления\nпо контроллингу дивизионов'
    }
    return <PersonQuote person={person} quote={quote} text={text} />
}