import { TRACKS } from './tracks';
import { GRADES } from './grades';
import { Text } from '../components/common/Text';

export const questions = {
    [TRACKS.UNSPECIFIED] : {
        getQuestion: () => (
            <Text>
                Задумываешься о&nbsp;<b>перспективной сфере для&nbsp;старта карьеры?</b>
                <br/>
                Посмотри на&nbsp;свои <b>возможности с&nbsp;Группой НЛМК</b>&nbsp;—&nbsp;международной металлургической компанией!
                <br/>
                <b>Выбирай область:</b>
            </Text>
        ),
        nextGrade: GRADES.START,
        answers: [
            {
                track: TRACKS.TRACK_1,
                getText: () => (
                    <Text>
                        <b>Мне нравится технология производства!</b>
                        <br/>
                        Хочу создавать сталь для&nbsp;ветрогенераторов и&nbsp;электрокаров
                    </Text>
                )
            },
            {
                track: TRACKS.TRACK_2,
                getText: () => (
                    <Text>
                        <b>
                            Оптимизация процессов — это мое!
                        </b>
                        <br/>
                        Хочу разрабатывать методологии
                    </Text>
                )
            },
            {
                track: TRACKS.TRACK_3,
                getText: () => (
                    <Text>
                        <b>Бизнес-направления и&nbsp;поддерживающие функции&nbsp;—&nbsp;звучит круто!</b>
                        <br/>
                        Хочу заниматься процессами, поддерживающими функционирование бизнеса, и&nbsp;помогать улучшать показатели
                    </Text>
                )
            },
        ]
    },
    [TRACKS.TRACK_1]: {
        [GRADES.START]: {
            getQuestion: () => (
                <Text>
                    <b>Отличный выбор!</b> В&nbsp;каком направлении <b>ты хочешь развиваться?</b>
                </Text>
            ),
            nextGrade: GRADES.GRADE_1,
            answers: [
                {
                    id: '1',
                    track: TRACKS.TRACK_1,
                    getText: () => <Text><b>Горнодобывающее производство</b></Text>
                },
                {
                    id: '2',
                    track: TRACKS.TRACK_1,
                    getText: () => <Text><b>Коксохимическое производство</b></Text>
                },
                {
                    id: '3',
                    track: TRACKS.TRACK_1,
                    getText: () => <Text><b>Аглодоменное производство</b></Text>
                },
                {
                    id: '4',
                    track: TRACKS.TRACK_1,
                    getText: () => <Text><b>Сталеплавильное производство</b></Text>
                },
                {
                    id: '5',
                    track: TRACKS.TRACK_1,
                    getText: () => <Text><b>Прокатное производство</b></Text>
                },
                {
                    id: '6',
                    track: TRACKS.TRACK_1,
                    getText: () => <Text><b>Энергетическое производство</b></Text>
                },
                {
                    id: '7',
                    track: TRACKS.TRACK_1,
                    getText: () => <Text><b>Ремонты</b></Text>
                },
            ]
        },
        [GRADES.GRADE_1]: {
            getQuestion: () => (
                <Text>
                    Ура, у&nbsp;тебя <b>наивысший квалификационный разряд</b>&nbsp;—&nbsp;ты
                    занимаешься настоящим делом: предлагаешь идеи по&nbsp;улучшению
                    производства и&nbsp;получаешь награды за&nbsp;инициативу.
                    Перед тобой открываются <b>новые возможности, что выберешь?</b>
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b>Заменить Мастера</b> на&nbsp;время отпуска{'\n'}и&nbsp;поработать с&nbsp;бригадой</Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_1,
                    getText: () => (
                        <Text>
                            <b>Откликнуться на&nbsp;вакансию ведущего специалиста</b> по&nbsp;внутреннему конкурсу
                        </Text>
                    )
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_1,
                    getText: () => <Text><b>Начать участвовать в&nbsp;проектах</b></Text>
                },
            ]
        },
        [GRADES.GRADE_2]: {
            getQuestion: () => (
                <Text>
                    Поздравляем! Ты&nbsp;<b>успешно проявил управленческие навыки
                    и&nbsp;показал себя компетентным руководителем</b>, умеющим брать ответственность!{'\n'}
                    <b>Готов идти дальше?</b>
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b> Я готов к&nbsp;дальнейшему развитию {'\n'}в&nbsp;производстве</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b> Хочу попробовать себя в&nbsp;проектах</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b>Начну развиваться в&nbsp;бизнес-{'\n'}направлениях</b></Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    getText: () => <Text><b>Продолжить оттачивать мастерство на&nbsp;этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_3]: {
            getQuestion: () => (
                <Text>
                    <b>А&nbsp;ты&nbsp;не&nbsp;промах!</b> Ты&nbsp;не&nbsp;только умеешь управлять процессами,
                    ресурсами и&nbsp;людьми, но&nbsp;и&nbsp;хорошо с&nbsp;этим справляешься!
                    Не&nbsp;каждый <b>вырастает до&nbsp;должности начальника.</b> Что&nbsp;теперь?
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text><b> Я&nbsp;готов к&nbsp;дальнейшему развитию в&nbsp;производстве</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b> Хочу попробовать себя в&nbsp;новой{'\n'} должности бизнес-управленца</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b>У&nbsp;меня есть все навыки{'\n'} для управления проектами&nbsp;—&nbsp;хочу попробовать свои силы</b></Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    getText: () => <Text><b>Продолжить оттачивать мастерство на&nbsp;этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_4]: [
            {
                getQuestion: () => (
                    <Text>
                        <b>Твоим навыкам</b> планирования и&nbsp;принятия
                        решений в&nbsp;условиях неопределенности <b>можно позавидовать.</b>
                        <br/>
                        <b>Что дальше?</b>
                    </Text>
                ),
                answers: [
                    {
                        track: TRACKS.TRACK_1,
                        nextGrade: GRADES.FINAL,
                        getText: () => <Text><b> Я&nbsp;люблю свою работу и&nbsp;готов брать{'\n'} на&nbsp;себя больше ответственности{'\n'} за&nbsp;процессы</b></Text>
                    },
                    {
                        track: TRACKS.TRACK_1,
                        nextGrade: GRADES.GRADE_4,
                        getText: () => (
                            <Text>
                                <b>
                                    Я&nbsp;хочу применять свои управленческие навыки на&nbsp;других площадках, в&nbsp;том числе на&nbsp;международных
                                </b>
                            </Text>
                        )
                    },
                    {
                        track: TRACKS.TRACK_1,
                        nextGrade: null,
                        getText: () => <Text><b>Продолжить оттачивать мастерство на&nbsp;этой позиции</b></Text>
                    },
                ]
            },
            {
                getQuestion: () => (
                    <Text>
                        Ты&nbsp;попробовал себя на&nbsp;нескольких площадках и&nbsp;успешно справляешься! {'\n'}
                        <b>Что дальше?</b>
                    </Text>
                ),
                answers: [
                    {
                        track: TRACKS.TRACK_1,
                        nextGrade: null,
                        getText: () => <Text><b>Продолжить оттачивать мастерство на&nbsp;этой позиции</b></Text>
                    },
                    {
                        track: TRACKS.TRACK_1,
                        nextGrade: GRADES.FINAL,
                        getText: () => <Text><b> Я&nbsp;люблю свою работу и&nbsp;готов брать{'\n'} на&nbsp;себя больше ответственности{'\n'} за&nbsp;процессы</b></Text>
                    },
                ]
            },
        ],
        [GRADES.FINAL]: {
            getQuestion: () => (
                <Text>
                    <b>Поздравляем!{'\n'}</b>
                    Ты&nbsp;добился больших высот. В&nbsp;глазах сотрудников
                    Группы НЛМК <b>ты&nbsp;образец для подражания</b>. Уровень доверия к&nbsp;тебе
                    очень высок.
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    nextScreen: 'SCREEN_10_1',
                    getText: () => <Text><b> Я&nbsp;люблю свою работу! Хочу {'\n'}развить другие площадки Группы</b></Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    nextScreen: 'SCREEN_10_2',
                    getText: () => <Text><b>Продолжить развитие{'\n'}по&nbsp;текущему направлению</b></Text>
                },
            ]
        }
    },
    [TRACKS.TRACK_2]: {
        [GRADES.START]: {
            getQuestion: () => (
                <Text>
                    Ты определенно <b>любишь решать нестандартные задачи.</b> {'\n'}
                    Какое направление выберешь?
                </Text>
            ),
            nextGrade: GRADES.GRADE_1,
            answers: [
                {
                    id: '1',
                    track: TRACKS.TRACK_2,
                    getText: () => <Text><b>Технология и технические функции</b></Text>
                },
                {
                    id: '2',
                    track: TRACKS.TRACK_2,
                    getText: () => <Text><b>Переработка вторичных ресурсов</b></Text>
                },
                {
                    id: '3',
                    track: TRACKS.TRACK_2,
                    getText: () => <Text><b>Автоматизация и цифровизация</b></Text>
                },
                {
                    id: '4',
                    track: TRACKS.TRACK_2,
                    getText: () => <Text><b>Энергетика</b></Text>
                },
                {
                    id: '5',
                    track: TRACKS.TRACK_2,
                    getText: () => <Text><b>Развитие системы ремонтов</b></Text>
                },
                {
                    id: '6',
                    track: TRACKS.TRACK_2,
                    getText: () => <Text><b>Исследования и разработки</b></Text>
                },
            ]
        },
        [GRADES.GRADE_1]: {
            getQuestion: () => (
              <Text>
                  Ты&nbsp;<b>эффективно влился в&nbsp;проектную команду,</b> показал свой
                  профессионализм и&nbsp;развил много полезных навыков.
                  <br/>
                  Каким будет твой <b>следующий&nbsp;шаг?</b>
              </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => (
                      <Text>
                          <b>
                              Мой интерес к&nbsp;проектной деятельности непрерывно растет.{'\n'}Хочу продолжить
                          </b>
                      </Text>
                    )
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_1,
                    getText: () => <Text><b>Я&nbsp;хочу попробовать себя в&nbsp;роли специалиста</b></Text>
                },
            ]
        },
        [GRADES.GRADE_2]: {
            getQuestion: () => (
              <Text>
                  Теперь ты <b>обладаешь опытом работы с&nbsp;проектами </b> и&nbsp;можешь
                  делиться им со&nbsp;своими коллегами. Под твоим руководством <b>проект
                  стал успешен. {'\n'}Готов ли ты к&nbsp;новому карьерному шагу?</b>
              </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b> Я&nbsp;готов к&nbsp;большей ответственности и&nbsp;хочу брать больше проектов</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b>Мне хочется попробовать свои силы в&nbsp;бизнес-задачах</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    getText: () => <Text><b>Продолжить оттачивать мастерство на&nbsp;этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_3]: {
            getQuestion: () => (
              <Text>
                  Ты уже <b>участвуешь во&nbsp;многих проектах,</b> а&nbsp;твоей организованности
                  можно позавидовать. <b>Выбери, что тебе ближе:</b>
              </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text><b> У&nbsp;меня еще много идей, реализация которых улучшит процессы компании</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b>Я&nbsp;помогу бизнесу и&nbsp;компании своими решениями</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    getText: () => <Text><b>Продолжить оттачивать мастерство на&nbsp;этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_4]: {
            getQuestion: () => (
              <Text>
                  <b>Эти овации — для тебя!</b> Твои достижения не&nbsp;остались
                  незамеченными. <b>Тебя хотят перевести на&nbsp;новую
                  должность.</b> Догадываешься,&nbsp;на&nbsp;какую?
              </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text><b> Контроль бизнеса&nbsp;—&nbsp;мой конек. Я&nbsp;готов к&nbsp;новым задачам! </b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    getText: () => <Text><b>Продолжить оттачивать мастерство на&nbsp;этой позиции</b></Text>
                },
            ]
        },
        [GRADES.FINAL]: {
            getQuestion: () => (
                <Text>
                    <b>Поздравляем!{'\n'}</b>
                    Ты&nbsp;добился больших высот. В&nbsp;глазах сотрудников
                    Группы НЛМК <b>ты&nbsp;образец для&nbsp;подражания</b>. Уровень доверия к&nbsp;тебе
                    очень высок.
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    nextScreen: 'SCREEN_10_1',
                    getText: () => <Text><b> Я&nbsp;люблю свою работу! Хочу {'\n'}развить другие площадки Группы</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    nextScreen: 'SCREEN_10_2',
                    getText: () => <Text><b>Продолжить развитие{'\n'}по&nbsp;текущему направлению</b></Text>
                },
            ]
        }
    },
    [TRACKS.TRACK_3]: {
        [GRADES.START]: {
            getQuestion: () => (
                <Text>
                    <b>Прекрасный выбор</b> для старта! {'\n'}
                    В&nbsp;какой сфере <b>тебе было бы интересно применить свои знания?</b>
                </Text>
            ),
            nextGrade: GRADES.GRADE_1,
            answers: [
                {
                    id: '1',
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Снабжение</b></Text>
                },
                {
                    id: '2',
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Логистика</b></Text>
                },
                {
                    id: '3',
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Продажи</b></Text>
                },
                {
                    id: '4',
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Информационные технологии</b></Text>
                },
                {
                    id: '5',
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Экология</b></Text>
                },
                {
                    id: '6',
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Охрана труда и&nbsp;промышленная безопасность</b></Text>
                },
                {
                    id: '7',
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Управление персоналом и&nbsp;связи с&nbsp;общественностью</b></Text>
                },
                {
                    id: '8',
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Финансы и&nbsp;экономика</b></Text>
                },
            ]
        },
        [GRADES.GRADE_1]: {
            getQuestion: () => (
              <Text>
                  <b>Поздравляем!</b> Ты&nbsp;здорово отточил навыки и&nbsp;стал ведущим
                  специалистом! Но&nbsp;тебе еще точно <b>есть куда расти.</b>
                  <br/>
                  Что выберешь?
              </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b>Начать участвовать в&nbsp;проектах</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b>Продолжить развитие {'\n'} по&nbsp;текущему вектору</b></Text>
                },
            ]
        },
        [GRADES.GRADE_2]: {
            getQuestion: () => (
              <Text>
                  Ничего себе, ты стал главным специалистом! Это <b>очень важный 
                  этап в&nbsp;твоей карьере,</b> ведь сейчас ты начинаешь <b>развиваться как руководитель!</b>
              </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b> Хочу попробовать себя в&nbsp;проектной деятельности и&nbsp;других задачах</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b> Класс! Я готов к&nbsp;расширению зон своей ответственности и&nbsp;росту в&nbsp;должности</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: null,
                    getText: () => <Text><b>Продолжить оттачивать мастерство на&nbsp;этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_3]: {
            getQuestion: () => (
              <Text>
                  Как классно иметь команду! Теперь <b>у&nbsp;тебя получается</b> решать большее
                  количества задач. <b>Куда пойдёшь дальше?</b>
              </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text><b> Меня заинтересовала проектная деятельность, хочу попробовать</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text><b> Хочу выйти за&nbsp;рамки деятельности одного отдела и&nbsp;изучить задачи верхнеуровневой структуры</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: null,
                    getText: () => <Text><b>Продолжить оттачивать мастерство на&nbsp;этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_4]: [
            {
                getQuestion: () => (
                  <Text>
                        <b>Отлично!</b> Быть Начальником управления — <b>большая ответственность.</b>
                        <br/>
                        Будешь развиваться дальше?
                  </Text>
                ),
                answers: [
                    {
                        track: TRACKS.TRACK_3,
                        nextGrade: GRADES.FINAL,
                        getText: () => <Text><b> Я люблю свою работу и&nbsp;готов брать {'\n'}на&nbsp;себя больше ответственности {'\n'}за&nbsp;процессы </b></Text>
                    },
                    {
                        track: TRACKS.TRACK_3,
                        nextGrade: GRADES.GRADE_4,
                        getText: () => <Text><b> Я хочу применять свои навыки в&nbsp;управлении на&nbsp;других площадках, в&nbsp;том числе, при&nbsp;международной ротации </b></Text>
                    },
                    {
                        track: TRACKS.TRACK_3,
                        nextGrade: null,
                        getText: () => <Text><b>Продолжить оттачивать мастерство на&nbsp;этой позиции</b></Text>
                    },
                ]
            },
            {
                getQuestion: () => (
                    <Text>
                        Ты попробовал себя на&nbsp;нескольких площадках и&nbsp;успешно справляешься! {'\n'}
                        <b>Что дальше?</b>
                    </Text>
                ),
                answers: [
                    {
                        track: TRACKS.TRACK_3,
                        nextGrade: null,
                        getText: () => <Text><b>Продолжить оттачивать мастерство на&nbsp;этой позиции</b></Text>
                    },
                    {
                        track: TRACKS.TRACK_3,
                        nextGrade: GRADES.FINAL,
                        getText: () => <Text><b> Я люблю свою работу и&nbsp;готов брать {'\n'}на&nbsp;себя больше ответственности {'\n'}за&nbsp;процессы </b></Text>
                    },
                ]
            },
        ],
        [GRADES.FINAL]: {
            getQuestion: () => (
                <Text>
                    <b>Поздравляем!{'\n'}</b>
                    Ты добился больших высот. В&nbsp;глазах сотрудников
                    Группы НЛМК <b>ты образец для&nbsp;подражания</b>. Уровень доверия к&nbsp;тебе
                    очень высок.
                </Text>
            ),
                answers: [
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: null,
                    nextScreen: 'SCREEN_10_1',
                    getText: () => <Text><b> Я люблю свою работу! Хочу {'\n'}развить другие площадки Группы</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: null,
                    nextScreen: 'SCREEN_10_2',
                    getText: () => <Text><b>Продолжить развитие{'\n'}по&nbsp;текущему направлению</b></Text>
                },
            ]
        }
    },
}