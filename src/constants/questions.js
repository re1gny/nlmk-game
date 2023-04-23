import { TRACKS } from './tracks';
import { GRADES } from './grades';
import { Text } from '../components/common/Text';

export const questions = {
    [TRACKS.UNSPECIFIED] : {
        getQuestion: () => (
            <Text>
                Ты заканчиваешь вуз и <b>ищешь перспективную работу.
                Группа НЛМК — международная металлургическая компания</b>
                — сразу приглашает тебя выбрать область для старта карьеры:
            </Text>
        ),
        nextGrade: GRADES.START,
        answers: [
            {
                track: TRACKS.TRACK_1,
                getText: () => (
                    <>
                        <Text bold>
                            Мне нравится технология производства!
                        </Text>
                        <Text>{'\n'}Хочу плавить металл и заниматься изготовлением продуктов</Text>
                    </>
                )
            },
            {
                track: TRACKS.TRACK_2,
                getText: () => (
                    <>
                        <Text bold>
                            Оптимизация процессов — это мое!
                        </Text>
                        <Text>{'\n'}Хочу разрабатывать методологии</Text>
                    </>
                )
            },
            {
                track: TRACKS.TRACK_3,
                getText: () => (
                    <>
                        <Text bold>
                            Поддерживающие функции и бизнес-направления — звучит круто!
                        </Text>
                        <Text>{'\n'}Хочу работать с контрагентамии сопровождать продажи</Text>
                    </>
                )
            },
        ]
    },
    [TRACKS.TRACK_1]: {
        [GRADES.START]: {
            getQuestion: () => (
                <Text>
                    Класс, <b>отличный выбор!</b>
                    В каком направлении <b>ты хочешь разбираться?</b>
                </Text>
            ),
            nextGrade: GRADES.GRADE_1,
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    getText: () => <Text bold> Горнодобывающее производство</Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    getText: () => <Text bold>Аглодоменное производство</Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    getText: () => <Text bold>Сталеплавильное производство</Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    getText: () => <Text bold>Литейное производство</Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    getText: () => <Text bold>Ремонты</Text>
                },
            ]
        },
        [GRADES.GRADE_1]: {
            getQuestion: () => (
                <Text>
                    Ура, у тебя <b>наивысший квалификационный разряд </b>
                    — ты заслуживаешь максимального уважения. Перед тобой открываются
                    <b>новые возможности, что выберешь?</b>
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text> <b>Заменить Мастера</b> на время отпуска и поработать с бригадой</Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_1,
                    getText: () => (
                        <Text>
                            <b>Откликнуться на вакансию ведущего специалиста</b> по внутреннему конкурсу
                        </Text>
                    )
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_1,
                    getText: () => <Text bold>Начать участвовать в проектах</Text>
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
                    getText: () => <Text bold> Я готов к дальнейшему развитию  в производстве</Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text bold> Хочу попробовать себя в проектах</Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text bold>Начну развиваться в бизнес-направлениях</Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    getText: () => <Text bold>Остаться развивать мастерство на этой позиции</Text>
                },
            ]
        },
        [GRADES.GRADE_3]: {
            getQuestion: () => (
                <Text>
                    <b>А ты не промах!</b> Ты не только любишь управлять процессами,
                    ресурсами и людьми, но и хорошо с этим справляешься!
                    Не каждый <b>дорастает до должности начальника.</b> Что теперь?
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text bold> Я готов к дальнейшему развитию  в производстве</Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text bold> Хочу попробовать себя в новой должности бизнес-управленца</Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text bold>У меня есть все навыки для управления проектами — хочу попробовать свои силы</Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    getText: () => <Text bold>Остаться развивать мастерство на этой позиции</Text>
                },
            ]
        },
        [GRADES.GRADE_4]: {
            getQuestion: () => (
                <Text>
                    На вечере встреч выпускников ты явно будешь сидеть во главе стола.
                    Твоим навыкам планирования и принятия решений в условиях
                    неопределенности можно позавидовать. Что дальше?
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.FINAL,
                    getText: () => <Text bold> Я люблю свою работу и готов брать на себя больше ответственности за процессы</Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    getText: () => (
                        <Text>
                            Я хочу применять свои управленческие навыки на других площадках,
                            в том числе при международной ротации
                        </Text>
                    )
                },
            ]
        },
        [GRADES.FINAL]: {
            getQuestion: () => (
                <Text>
                    <b>Поздравляем!{'\n'}</b>
                    Ты добился больших высот. В глазах сотрудников
                    Группы НЛМК <b>ты образец для подражания</b>. Уровень доверия к тебе очень высок.
                    <b>Выше только звезды :)</b>
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    getText: () => <Text bold> Я люблю свою работу! Хочу развить другие площадки Группы</Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    getText: () => <Text bold>Продолжить развитие{'\n'}по текущему направлению</Text>
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
                    track: TRACKS.TRACK_2,
                    getText: () => <Text bold>Техническая дирекция</Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    getText: () => <Text bold>Энергетика</Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    getText: () => <Text bold>Исследования и разработка</Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    getText: () => <Text bold>Цифровизация производства</Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    getText: () => <Text><b>ОТиПБ</b>(охрана труда и промышленная безопасность)</Text>
                },
            ]
        },
        [GRADES.GRADE_1]: {
            getQuestion: () => (
                <Text>
                    Поздравляем! Ты круто «подрос» и стал ведущим специалистом! Но тебе еще точно есть куда расти. Что выберешь?
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text bold>Начать участвовать в проектах</Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text bold>Продолжить развитие {'\n'} по текущему вектору</Text>
                },
            ]
        },
        [GRADES.GRADE_2]: {
            getQuestion: () => (
                <Text>
                    Ничего себе, ты стал главным специалистом!
                    Эта ступень — очень важный этап в твоей карьере, ведь сейчас
                    ты начинаешь развиваться как руководитель!
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text bold> Хочу попробовать себя в проектной деятельности и других задачах</Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text bold> Класс! Я готов к расширению зон своей ответственности и росту в должности</Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    getText: () => <Text bold>Остаться развивать мастерство на этой позиции</Text>
                },
            ]
        },
        [GRADES.GRADE_3]: {
            getQuestion: () => (
                <Text>
                    Как классно иметь команду! Теперь у тебя
                    получается продвигаться в решении большего количества задач.
                    Куда пойдёшь дальше?
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text bold> Меня заинтересовала проектная деятельность, хочу попробовать</Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text bold> Хочу выйти за рамки деятельности одного отдела и изучить задачи верхнеуровневой структуры</Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    getText: () => <Text bold>Остаться развивать мастерство на этой позиции</Text>
                },
            ]
        },
        [GRADES.GRADE_4]: {
            getQuestion: () => (
                <Text>
                    <b>Супер!</b> Быть Начальником управления — <b>большая ответственность</b>.
                    Будешь развиваться дальше?
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.FINAL,
                    getText: () => <Text bold> Я люблю свою работу и готов брать на себя больше ответственности за процессы </Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    getText: () => <Text bold> Я хочу применять свои навыки в управлении на других площадках, в том числе, при международной ротации </Text>
                },
            ]
        },
        [GRADES.FINAL]: {
            getQuestion: () => (
                <Text>
                    <b>Поздравляем!{'\n'}</b>
                    Ты добился больших высот. В глазах сотрудников
                    Группы НЛМК <b>ты образец для подражания</b>. Уровень доверия к тебе очень высок.
                    <b>Выше только звезды :)</b>
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    getText: () => <Text bold> Я люблю свою работу! Хочу развить другие площадки Группы</Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    getText: () => <Text bold>Продолжить развитие{'\n'}по текущему направлению</Text>
                },
            ]
        }

    },
    [TRACKS.TRACK_3]: {
        [GRADES.START]: {
            getQuestion: () => (
                <Text>
                    <b>Прекрасный выбор</b> для старта!{'\n'}
                    В какой сфере <b>тебе было бы интересно применить свои знания?</b>
                </Text>
            ),
            nextGrade: GRADES.GRADE_1,
            answers: [
                {
                    track: TRACKS.TRACK_3,
                    getText: () => <Text bold>Логистика</Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    getText: () => <Text bold>Продажи</Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    getText: () => <Text bold>Снабжение</Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    getText: () => <Text bold>Экология</Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    getText: () => <Text bold>Инновации</Text>
                },
            ]
        },
        [GRADES.GRADE_1]: {
            getQuestion: () => (
                <Text>
                    Ты <b>эффективно влился в проектную команду</b>,
                    классно себя <b>проявил и прокачал много полезных навыков.</b>
                    Каким будет твой <b>следующий шаг?</b>
                </Text>
            ),
                answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text bold>Хочу уйти в производственное направление</Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => (
                        <Text bold>
                            Мой интерес к проектной деятельности непрерывно растет.{'\n'}Хочу продолжить
                        </Text>
                    )
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_1,
                    getText: () => <Text bold>Я хочу попробовать себя в роли специалиста</Text>
                },
            ]
        },
        [GRADES.GRADE_2]: {
            getQuestion: () => (
                <Text>
                    Теперь ты <b>обладаешь опытом работы с проектами </b>
                    и можешь делиться им со своими коллегами. Под твоим руководством
                    <b>проект стал успешен. {'\n'}Готов ли ты к новому карьерному шагу?</b>
                </Text>
            ),
                answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text bold> Я хочу перенести полученный опыт из проектной деятельности в производство</Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text bold> Я готов к большей ответственности и хочу брать больше проектов</Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text bold>Мне хочется попробовать свои силы в бизнес-задачах</Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: null,
                    getText: () => <Text bold>Остаться развивать мастерство на этой позиции</Text>
                },
            ]
        },
        [GRADES.GRADE_3]: {
            getQuestion: () => (
                <Text>
                    Ты уже <b>участвуешь далеко не в одном проекте</b>,
                    а твоему искусству тайм-менеджмента можно позавидовать.
                    <b>Выбери, что тебе ближе:</b>
                </Text>
            ),
                answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text bold> Меня манит романтика производства</Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text bold> У меня еще много идей, реализация которых улучшит процессы компании</Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text bold>Я помогу бизнесу и компании своими решениями</Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: null,
                    getText: () => <Text bold>Остаться развивать мастерство на этой позиции</Text>
                },
            ]
        },
        [GRADES.GRADE_4]: {
            getQuestion: () => (
                <Text>
                    <b>Эти овации — для тебя!</b> Твои достижения не остались незамеченными.
                    <b>Тебя хотят перевести на новую должность.</b> Догадываешься, на какую?
                </Text>
            ),
                answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text bold> Я предпочту заняться прикладной деятельностью на производстве </Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text bold> Контроль бизнеса — мой конек. Я готов к новым задачам! </Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: null,
                    getText: () => <Text>Остаться развивать мастерство на этой позиции</Text>
                },
            ]
        },
        [GRADES.FINAL]: {
            getQuestion: () => (
                <Text>
                    <b>Поздравляем!{'\n'}</b>
                    Ты добился больших высот. В глазах сотрудников
                    Группы НЛМК <b>ты образец для подражания</b>. Уровень доверия к тебе очень высок.
                    <b>Выше только звезды :)</b>
                </Text>
            ),
                answers: [
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: null,
                    getText: () => <Text bold> Я люблю свою работу! Хочу развить другие площадки Группы</Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: null,
                    getText: () => <Text bold>Продолжить развитие{'\n'}по текущему направлению</Text>
                },
            ]
        }
    },
}