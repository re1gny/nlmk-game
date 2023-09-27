import { TRACKS } from './tracks';
import { GRADES } from './grades';
import { Text } from '../components/common/Text';

export const questions = {
    [TRACKS.UNSPECIFIED] : {
        getQuestion: () => (
            <Text>
                Задумываешься о <b>перспективной сфере для старта карьеры?</b> 
                <br/>
                Посмотри на свои <b>возможности с&nbsp;Группой НЛМК</b>&nbsp;—&nbsp;международной металлургической компанией!
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
                        Хочу создавать сталь для ветрогенераторов и электрокаров
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
                        <b>Бизнес-направления и поддерживающие функции&nbsp;—&nbsp;звучит круто!</b>
                        <br/>
                        Хочу заниматься процессами, поддерживающими функционирование бизнеса, и помогать улучшать показатели
                    </Text>
                )
            },
        ]
    },
    [TRACKS.TRACK_1]: {
        [GRADES.START]: {
            getQuestion: () => (
                <Text>
                    <b>Отличный выбор!</b> В каком направлении <b>ты хочешь развиваться?</b>
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
                    Ура, у тебя <b>наивысший квалификационный разряд</b>&nbsp;—&nbsp;ты 
                    занимаешься настоящим делом: предлагаешь идеи по улучшению 
                    производства и получаешь награды за инициативу. 
                    Перед тобой открываются <b>новые возможности, что выберешь?</b>
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b>Заменить Мастера</b> на время отпуска{'\n'}и поработать с бригадой</Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_1,
                    getText: () => (
                        <Text>
                            <b>Откликнуться на вакансию ведущего специалиста</b> по внутреннему конкурсу
                        </Text>
                    )
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_1,
                    getText: () => <Text><b>Начать участвовать в проектах</b></Text>
                },
            ]
        },
        [GRADES.GRADE_2]: {
            getQuestion: () => (
                <Text>
                    Поздравляем! Ты <b>успешно проявил управленческие навыки
                    и показал себя компетентным руководителем</b>, умеющим брать ответственность!{'\n'}
                    <b>Готов идти дальше?</b>
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b> Я готов к дальнейшему развитию {'\n'}в производстве</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b> Хочу попробовать себя в проектах</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b>Начну развиваться в бизнес-{'\n'}направлениях</b></Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    getText: () => <Text><b>Продолжить оттачивать мастерство на этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_3]: {
            getQuestion: () => (
                <Text>
                    <b>А ты не промах!</b> Ты не только умеешь управлять процессами, 
                    ресурсами и людьми, но и хорошо с этим справляешься! 
                    Не каждый <b>вырастает до должности начальника.</b> Что теперь?
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text><b> Я готов к дальнейшему развитию в производстве</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b> Хочу попробовать себя в новой{'\n'} должности бизнес-управленца</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b>У меня есть все навыки{'\n'} для управления проектами — хочу попробовать свои силы</b></Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    getText: () => <Text><b>Продолжить оттачивать мастерство на этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_4]: [
            {
                getQuestion: () => (
                    <Text>
                        <b>Твоим навыкам</b> планирования и принятия 
                        решений в условиях неопределенности <b>можно позавидовать.</b>
                        <br/>
                        <b>Что дальше?</b>
                    </Text>
                ),
                answers: [
                    {
                        track: TRACKS.TRACK_1,
                        nextGrade: GRADES.FINAL,
                        getText: () => <Text><b> Я люблю свою работу и готов брать{'\n'} на себя больше ответственности{'\n'} за процессы</b></Text>
                    },
                    {
                        track: TRACKS.TRACK_1,
                        nextGrade: GRADES.GRADE_4,
                        getText: () => (
                            <Text>
                                <b>
                                    Я хочу применять свои управленческие навыки на других площадках, в том числе на международных
                                </b>
                            </Text>
                        )
                    },
                    {
                        track: TRACKS.TRACK_1,
                        nextGrade: null,
                        getText: () => <Text><b>Продолжить оттачивать мастерство на этой позиции</b></Text>
                    },
                ]
            },
            {
                getQuestion: () => (
                    <Text>
                        Ты попробовал себя на нескольких площадках и успешно справляешься! {'\n'}
                        <b>Что дальше?</b>
                    </Text>
                ),
                answers: [
                    {
                        track: TRACKS.TRACK_1,
                        nextGrade: null,
                        getText: () => <Text><b>Продолжить оттачивать мастерство на этой позиции</b></Text>
                    },
                    {
                        track: TRACKS.TRACK_1,
                        nextGrade: GRADES.FINAL,
                        getText: () => <Text><b> Я люблю свою работу и готов брать{'\n'} на себя больше ответственности{'\n'} за процессы</b></Text>
                    },
                ]
            },
        ],
        [GRADES.FINAL]: {
            getQuestion: () => (
                <Text>
                    <b>Поздравляем!{'\n'}</b>
                    Ты добился больших высот. В глазах сотрудников
                    Группы НЛМК <b>ты образец для подражания</b>. Уровень доверия к тебе
                    очень высок.
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    nextScreen: 'SCREEN_10_1',
                    getText: () => <Text><b> Я люблю свою работу! Хочу {'\n'}развить другие площадки Группы</b></Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    nextScreen: 'SCREEN_10_2',
                    getText: () => <Text><b>Продолжить развитие{'\n'}по текущему направлению</b></Text>
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
                  Ты <b>эффективно влился в проектную команду,</b> показал свой 
                  профессионализм и развил много полезных навыков. 
                  <br/>
                  Каким будет твой <b>следующий шаг?</b>
              </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => (
                      <Text>
                          <b>
                              Мой интерес к проектной деятельности непрерывно растет.{'\n'}Хочу продолжить
                          </b>
                      </Text>
                    )
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_1,
                    getText: () => <Text><b>Я хочу попробовать себя в роли специалиста</b></Text>
                },
            ]
        },
        [GRADES.GRADE_2]: {
            getQuestion: () => (
              <Text>
                  Теперь ты <b>обладаешь опытом работы с проектами </b> и можешь
                  делиться им со своими коллегами. Под твоим руководством <b>проект
                  стал успешен. {'\n'}Готов ли ты к новому карьерному шагу?</b>
              </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b> Я готов к большей ответственности и хочу брать больше проектов</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b>Мне хочется попробовать свои силы в бизнес-задачах</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    getText: () => <Text><b>Продолжить оттачивать мастерство на этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_3]: {
            getQuestion: () => (
              <Text>
                  Ты уже <b>участвуешь во многих проектах,</b> а твоей организованности 
                  можно позавидовать. <b>Выбери, что тебе ближе:</b>
              </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text><b> У меня еще много идей, реализация которых улучшит процессы компании</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b>Я помогу бизнесу и компании своими решениями</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    getText: () => <Text><b>Продолжить оттачивать мастерство на этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_4]: {
            getQuestion: () => (
              <Text>
                  <b>Эти овации — для тебя!</b> Твои достижения не остались
                  незамеченными. <b>Тебя хотят перевести на новую
                  должность.</b> Догадываешься, на какую?
              </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text><b> Контроль бизнеса — мой конек. Я готов к новым задачам! </b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    getText: () => <Text><b>Продолжить оттачивать мастерство на этой позиции</b></Text>
                },
            ]
        },
        [GRADES.FINAL]: {
            getQuestion: () => (
                <Text>
                    <b>Поздравляем!{'\n'}</b>
                    Ты добился больших высот. В глазах сотрудников
                    Группы НЛМК <b>ты образец для подражания</b>. Уровень доверия к тебе
                    очень высок.
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    nextScreen: 'SCREEN_10_1',
                    getText: () => <Text><b> Я люблю свою работу! Хочу {'\n'}развить другие площадки Группы</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    nextScreen: 'SCREEN_10_2',
                    getText: () => <Text><b>Продолжить развитие{'\n'}по текущему направлению</b></Text>
                },
            ]
        }
    },
    [TRACKS.TRACK_3]: {
        [GRADES.START]: {
            getQuestion: () => (
                <Text>
                    <b>Прекрасный выбор</b> для старта! {'\n'}
                    В какой сфере <b>тебе было бы интересно применить свои знания?</b>
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
                    getText: () => <Text><b>Охрана труда и промышленная безопасность</b></Text>
                },
                {
                    id: '7',
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Управление персоналом и связи с общественностью</b></Text>
                },
                {
                    id: '8',
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Финансы и экономика</b></Text>
                },
            ]
        },
        [GRADES.GRADE_1]: {
            getQuestion: () => (
              <Text>
                  <b>Поздравляем!</b> Ты здорово отточил навыки и стал ведущим 
                  специалистом! Но тебе еще точно <b>есть куда расти.</b> 
                  <br/>
                  Что выберешь?
              </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b>Начать участвовать в проектах</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b>Продолжить развитие {'\n'} по текущему вектору</b></Text>
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
                    getText: () => <Text><b> Хочу попробовать себя в проектной деятельности и других задачах</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b> Класс! Я готов к расширению зон своей ответственности и росту в должности</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: null,
                    getText: () => <Text><b>Продолжить оттачивать мастерство на этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_3]: {
            getQuestion: () => (
              <Text>
                  Как классно иметь команду! Теперь <b>у тебя получается</b> решать большее 
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
                    getText: () => <Text><b> Хочу выйти за рамки деятельности одного отдела и изучить задачи верхнеуровневой структуры</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: null,
                    getText: () => <Text><b>Продолжить оттачивать мастерство на этой позиции</b></Text>
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
                        getText: () => <Text><b> Я люблю свою работу и готов брать {'\n'}на себя больше ответственности {'\n'}за процессы </b></Text>
                    },
                    {
                        track: TRACKS.TRACK_3,
                        nextGrade: GRADES.GRADE_4,
                        getText: () => <Text><b> Я хочу применять свои навыки в управлении на других площадках, в том числе, при международной ротации </b></Text>
                    },
                    {
                        track: TRACKS.TRACK_3,
                        nextGrade: null,
                        getText: () => <Text><b>Продолжить оттачивать мастерство на этой позиции</b></Text>
                    },
                ]
            },
            {
                getQuestion: () => (
                    <Text>
                        Ты попробовал себя на нескольких площадках и успешно справляешься! {'\n'}
                        <b>Что дальше?</b>
                    </Text>
                ),
                answers: [
                    {
                        track: TRACKS.TRACK_3,
                        nextGrade: null,
                        getText: () => <Text><b>Продолжить оттачивать мастерство на этой позиции</b></Text>
                    },
                    {
                        track: TRACKS.TRACK_3,
                        nextGrade: GRADES.FINAL,
                        getText: () => <Text><b> Я люблю свою работу и готов брать {'\n'}на себя больше ответственности {'\n'}за процессы </b></Text>
                    },
                ]
            },
        ],
        [GRADES.FINAL]: {
            getQuestion: () => (
                <Text>
                    <b>Поздравляем!{'\n'}</b>
                    Ты добился больших высот. В глазах сотрудников
                    Группы НЛМК <b>ты образец для подражания</b>. Уровень доверия к тебе
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
                    getText: () => <Text><b>Продолжить развитие{'\n'}по текущему направлению</b></Text>
                },
            ]
        }
    },
}