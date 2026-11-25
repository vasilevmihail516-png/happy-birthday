/*
 FOR RITA — настройки и весь персональный контент сайта.
 Чтобы добавить свои фото и видео, смотри массив memories ниже.
*/
const SITE = {
  // Укажи год рождения Риты для автоматического возраста: "YYYY-12-10".
  birthDate: 2009-10-12,
  // Замени значение на фразу, которую лично скажешь Рите после десятого этапа.
  finalCode: "НЕЛЬЗЯРИТЕ",

  // THE LOCK — двенадцать разноплановых испытаний.
  // Каждый ответ опирается на конкретную отсылку, а не на отвлечённую головоломку.
  puzzles: [
    {
      title:"Глава 01 — ИЗИ",
      question:"Когда мы познакомились? Ну типа какую даату мы выбрали",
      steps:[],
      answers:["02.06.2026"], type:"text",
      success:"ЙООУ ТОЧНО-ТОЧНО"
    },
    {
      title:"Глава 02 — Поесть",
      question:"Вот что тебе вкусно?",
      steps:[],
      answers:["Яблоки"], type:"choice", options:["Какашки","Яблоки","Подоконник"],
      success:"АВХАХВХА да я знал, чё ты"
    },
    {
      title:"Глава 03 — Нуу",
      question:"Тут крч у меня уже закончилось воображение, я хз че делать. Выбери слово Солнце",
      steps:[],
      answers:["солнечная","солнечный","солнце"], type:"symbol", symbols:[{icon:"☀",label:"Солнце",value:"солнце"},{icon:"☂",label:"Дождь",value:"дождь"},{icon:"❄",label:"Снег",value:"снег"}],
      success:"ТЁПЛАЯ ЗАПИСЬ ВОССТАНОВЛЕНА. Теперь это слово хранит чуть больше смысла, чем раньше."
    },
    {
      title:"Глава 04 — РРРРубрика рандомный вопрос",
      question:"Я сам хз че заа слово. Попробуй собери",
      steps:[],
      answers:["пипидастр"], type:"tiles", tiles:["С","П","И","Д","А","Р","И","П","Т"], tileAnswer:"ПИПИДАСТР",
      success:"АХХААХАХАХХХАХААХА"
    },
    {
      title:"Глава 05 — 01:05",
      question:"Не перестань меня помнить, пожалуйста, я тебя вряд ли забуду теперь...",
      steps:[],
      answers:["Афлапоид", "Aflapoid", "Я влюбился", "Музыка", "Песня", "Ты для меня не последний предатель", "Ты для меня не последний предатель, ты для меня лишь наглядный пример"], type:"text",
      success:"Ну даа)"
    },
    {
      title:"Глава 06 — Коронная фразочка, милая",
      question:"Ну, мы любим так говорить, это изи",
      steps:[],
      answers:["тимоято"], type:"syllables", tiles:["Т","И","М","О","Я","Т","О"], tileAnswer:"ТИМОЯТО",
      success:"Ти моя то"
    },
    {
      title:"Глава 07 — Ну эээ ",
      question:" У фермера есть 100 кг свежих помидоров, которые на 99% состоят из воды. Через сутки они подсохли, и вода стала составлять 98% их массы. Сколько теперь весят помидоры?",
      steps:[],
      answers:["50"], type:"text",
      success:"Ну ну"
    },
    {
      title:"Глава 08 — Погода",
      question:"2026-08-30 00:45:49 Скок граадусов было?",
      steps:[],
      answers:["52"], type:"text",
      success:"52 ДА ЗДРАВСТВУЕТ САНКТ-ПЕТЕРБУРГ"
    },
  ],

  letters: [
    {icon:"☾",tag:"A SOFTER MOMENT",title:"Когда тебе грустно",messages:[
      "Эйййййй, Рита. ну-ка, давай без этого.\n\nЯ, конечно, не знаю, что именно произошло, но хочу напомнить одну вещь: плохой день — это просто плохой день, а не конец света. Даже если сегодня всё пошло не по плану, это не значит, что завтра будет так же.\n\nНеобязательно сейчас улыбаться, делать вид, что всё прекрасно, или пытаться со всем справиться. Можешь просто погрустить, выдохнуть и дать себе немного времени.\n\nИ помни: есть человек, который очень рад, что ты есть в его жизни)",
      "Официальное разрешение: сегодня можно не быть весёлой, продуктивной и собранной. Можно завернуться в плед, отменить внутреннее собрание по решению всех проблем и просто отдохнуть.\n\nТы не становишься менее крутой от того, что у тебя грустный день.",
      "Если бы я мог сейчас передать тебе что-нибудь, это были бы вкусняшка, спокойный вечер и напоминание: тебе не нужно заслуживать хорошее отношение. Ты его уже заслуживаешь.",
      "Мини-задание: найди что-нибудь уютное, устрой себе маленькую передышку и не требуй от себя немедленно прийти в норму. Остальное подождёт.",
      "Короткая записка на случай, если сейчас не хочется читать длинные тексты:\n\nЯ рядом. Ты мне важна. И тебе не нужно прямо сейчас становиться веселее, чем ты есть.\n\nВот. Просто оставлю это здесь. ♡"
    ]},
    {icon:"☕",tag:"LOW BATTERY MODE",title:"Когда ты устала",messages:[
      "Ага, ты устала искать ответ на вопрос\n\nТогда без лишних слов - Тишина",
      "Так, стоп. Рабочий режим выключаем.\n\nТы уже успела за сегодня больше, чем некоторые успевают за неделю. Может, хватит спасать мир хотя бы на пару часов?\n\nНе нужно постоянно куда-то бежать, что-то делать, кому-то помогать и держать всё под контролем. Иногда самое продуктивное занятие — это ничего не делать.\n\nПоэтому отложи дела, найди что-нибудь вкусное, устройся поудобнее и отдохни.\n\nМир как-нибудь переживёт несколько часов без твоего участия. Наверное.",
      "Системное уведомление: заряд Риты ниже рекомендуемого уровня.\n\nДля восстановления требуется: еда, вода, удобное место, отсутствие срочных задач и минимум один час без попыток успеть абсолютно всё.",
      "Сегодняшний план: ничего никому не доказывать. Не выигрывать соревнования по продуктивности. Не брать на себя ещё пять дел. Просто восстановиться.\n\nДа, я знаю, звучит непривычно.",
      "Представь, что я официально назначил тебе выходной от переживаний и обязанностей. Приказ вступает в силу немедленно. Обжалованию не подлежит.",
      "Чек-лист восстановления Риты:\n☐ поесть что-нибудь вкусное\n☐ попить воды\n☐ отложить хотя бы одно необязательное дело\n☐ полежать без чувства вины\n☐ не пытаться за один вечер решить судьбу человечества\n\nОтчёт о выполнении никому сдавать не нужно."
    ]},
    {icon:"♡",tag:"PLEASE EXHALE",title:"Когда ты переживаешь",messages:[
      "Вдох-выдох.\n\nЯ знаю, что ты умеешь найти повод для переживаний даже там, где его, казалось бы, вообще не предусмотрено. Но давай попробуем не превращать каждую мелочь в чрезвычайное происшествие.\n\nНе всё нужно решать прямо сейчас. Не на каждый вопрос сразу найдётся ответ. И не каждая ситуация закончится так плохо, как успела нарисовать твоя фантазия.\n\nЕсли хочется выговориться — выговаривайся. Необязательно искать решение, иногда достаточно просто рассказать всё, что накопилось.\n\nИ пожалуйста, не будь к себе слишком строгой. Ты и так очень стараешься.",
      "Давай проверим: это действительно срочная проблема или мозг уже открыл двенадцать вкладок с вариантами катастрофы?\n\nНе ругай себя за переживания. Просто попробуй не верить каждому тревожному сценарию с первой секунды.",
      "Напоминание: ты можешь попросить помощи. Можешь передумать. Можешь не знать ответа. Это не отменяет того, что ты ответственная, умная и очень многое умеешь.",
      "Я не обещаю, что на всё найдётся простое решение. Но обещаю, что выслушать тебя — уже вполне нормальный план. Иногда именно это и нужно.",
      "— А если я опять всё накрутила?\n— Тогда сначала расскажи, что случилось.\n— А если проблема глупая?\n— У проблем нет допуска по уровню глупости. Если тебя это тревожит, значит, можно обсудить.\n\nТак что не держи всё в голове одна."
    ]},
    {icon:"🏆",tag:"VICTORY CEREMONY",title:"Когда у тебя всё получилось",messages:[
      "АХАХА, НУ КОНЕЧНО.\n\nКто бы сомневался, что у тебя опять всё получится?\n\nПоздравляю! Очередная победа, очередное достижение, очередное доказательство того, что соревноваться с тобой — занятие для очень смелых людей.\n\nНо если серьёзно, я очень рад за тебя. Мне нравится видеть, как ты добиваешься своего, пробуешь новое и радуешься результатам.\n\nНадеюсь, ты сама понимаешь, насколько круто у тебя получается двигаться вперёд.\n\nСегодня можешь собой гордиться. Даже очень.",
      "Внимание! Объявляется внеочередная церемония награждения.\n\nНоминация: «Снова добилась своего». Победитель: Рита. Награда: право гордо сказать «я же говорила» и законно похвастаться результатом.",
      "Срочно зафиксируй этот момент. Не обесценивай результат фразами «да ничего особенного» или «просто повезло». Ты старалась — и у тебя получилось. Это заслуживает радости.",
      "Первое место? Не удивлён. Золотая медаль? Ожидаемо. Но иногда, Рита, оставляй людям хотя бы шанс на интригу)))) Поздравляю, я правда за тебя рад.",
      "ДОКУМЕНТ № 001\n\nНастоящим подтверждается, что Рита снова справилась с задачей, которую сама себе поставила. Комиссия в лице меня выражает уважение, одобряет результат и вручает виртуальную медаль.\n\nПримечание: количество побед за год уже вызывает вопросы у конкурентов."
    ]},
    {icon:"⚡",tag:"DO NOT DISTURB",title:"Когда ты злишься на всё",messages:[
      "О-о-о. Кто-то сегодня выбрал режим уничтожения.\n\nТак, прежде чем ты объявишь войну всему человечеству, предлагаю немного выдохнуть.\n\nНе буду говорить, что всё обязательно прекрасно и что нужно просто успокоиться. Иногда действительно всё бесит, люди ведут себя странно, обстоятельства складываются отвратительно, а терпение заканчивается.\n\nТы можешь злиться. Можешь ругаться. Можешь рассказывать, кто сегодня заслужил премию за самую сомнительную гениальность.\n\nЯ хотя бы выслушаю. А дальше уже разберёмся, кого отправлять на общественные работы.",
      "Объявляется технический перерыв. Все раздражающие люди временно отправляются в режим без звука. Все неприятные события — на повторное рассмотрение завтра.\n\nА сейчас можно просто выдохнуть.",
      "Если хочется высказаться — не фильтруй каждое слово ради приличия. Можешь рассказать всё как есть. Я не буду требовать от тебя дипломатии уровня международного саммита.",
      "Маленький совет от отдела здравого смысла: не принимай важных решений на пике раздражения. Большой совет от отдела поддержки: сначала поешь, отдохни и расскажи мне, кто опять отличился.",
      "Если сегодня всё раздражает, вот официальное разрешение:\n1. Не быть милой со всем миром.\n2. Не отвечать мгновенно на каждое сообщение.\n3. Выговориться без цензуры.\n4. Не принимать решений, пока кипишь.\n\nПодпись: отдел поддержки, который на твоей стороне."
    ]},
    {icon:"☎",tag:"OPEN LINE",title:"Когда тебе хочется поговорить",messages:[
      "Звони!!!!!!!!",
      "Да хоть среди ночи. Ну, если это не три часа ночи и не конец света. Хотя ладно, рассказывай.\n\nМне не обязательно знать, как правильно ответить. Иногда я могу просто послушать.",
      "Говори всё: с самого начала, с середины, с того момента, который внезапно вспомнился. Можно перескакивать с темы на тему — я постараюсь не потерять сюжет))))",
      "Если не хочется звонить, можешь просто написать. Не нужно заранее формулировать красивое сообщение. Кидай как есть.",
      "ФОРМАТ СООБЩЕНИЯ: голосовое на 17 минут.\nТЕМА: вообще всё.\nСТРУКТУРА: сначала главное, потом три отступления, потом внезапная история, потом возвращение к главному.\n\nПриёмная открыта. Можно без вступления и без красивой формулировки. ЗВОНИ или пиши))))"
    ]},
    {icon:"✉",tag:"A LITTLE NOSTALGIA",title:"Когда ты скучаешь",messages:[
      "Знаешь, иногда самые приятные воспоминания — это вообще не какие-то грандиозные события.\n\nЭто случайные дни, разговоры ни о чём, дурацкие приколы, подколы и моменты, которые в тот момент даже не кажутся особенными.\n\nНапример, когда ты просто говоришь, что у тебя есть покушать, а я уже понимаю, что это приглашение. Или когда происходит очередная совершенно случайная ситуация, которую потом ещё долго вспоминаешь.\n\nМне нравится, что у нас есть такие моменты.\n\nИ я надеюсь, что впереди их будет ещё очень много.",
      "Помнишь наше универсальное приглашение на еду? Ты просто говоришь, что у тебя есть покушать, а я уже понимаю, что делать дальше. Навигация работает без GPS))))",
      "Иногда хочется сохранить обычный день в отдельную коробочку: вот этот разговор, вот эту шутку, вот этот момент, когда ты улыбалась. Не потому что случилось что-то грандиозное, а потому что было хорошо.",
      "Если сейчас немного не хватает наших обычных приколов — считай, что это маленькая открытка из тех самых рандомных дней. Продолжение обязательно будет.",
      "Снимок одного обычного дня:\nты говоришь, что у тебя есть покушать; я уже мысленно собираюсь; где-то рядом происходит очередной рандомный разговор; мы смеёмся над какой-нибудь ерундой.\n\nНичего грандиозного. Просто один из тех моментов, которые почему-то хочется оставить с собой."
    ]},
    {icon:"↗",tag:"NOT YOUR FINAL SCORE",title:"Когда кажется, что ничего не получается",messages:[
      "Эй. Не спеши делать выводы.\n\nТо, что что-то не получилось сегодня, не отменяет всего, чего ты уже добилась. Ты не обязана всегда побеждать, всё успевать и с первого раза получать идеальный результат.\n\nДаже у самых крутых людей бывают дни, когда всё идёт наперекосяк. Да, даже у тебя, человека, который, кажется, не признаёт существование второго места.\n\nНо неудача — это не характеристика тебя. Это просто одна ситуация, один опыт и один не самый удачный день.\n\nОтдохни, переведи дух и попробуй снова, когда будешь готова.\n\nЯ в тебя верю. Даже когда ты сама временно забываешь, насколько ты способная.",
      "Сегодня не получилось — значит, сегодня не получилось. Не надо превращать одну попытку в окончательный вердикт о себе.\n\nМожно передохнуть, поменять план и попробовать ещё раз. А можно пока вообще ничего не решать.",
      "Вспомни, сколько всего ты уже освоила, попробовала и довела до результата. Неужели один сложный момент перечеркнёт всё это? Конечно нет.",
      "Тебе не нужно быть лучшей каждую секунду. Ты можешь ошибаться, учиться и начинать заново. И всё равно оставаться той самой крутой Ритой.",
      "ТАБЛО РЕЗУЛЬТАТОВ\n\nТвои прошлые достижения: на месте.\nТвои старания: засчитаны.\nОдна неудачная попытка: не отменяет ничего из перечисленного.\nТвоё право на паузу: подтверждено.\n\nИ да, второе место сегодня тоже не катастрофа. Хотя знаю, что ты сейчас возмутилась))))"
    ]},
    {icon:"☾",tag:"AFTER HOURS",title:"Когда ты не можешь уснуть",messages:[
      "Так, почему мы ещё не спим?\n\nНадеюсь, ты не лежишь и не прокручиваешь в голове все события последних пяти лет, анализируя каждую мелочь. Хотя, зная тебя...\n\nДавай сегодня без глобальных решений, сложных планов и мысленных разборов полётов.\n\nПредставь, что все дела на сегодня официально закрыты. Никому ничего не должна, ничего не нужно срочно исправлять, а завтрашние проблемы пусть подождут до завтра.\n\nУстройся поудобнее, отложи телефон и постарайся немного отдохнуть.\n\nСладких снов, Рита. Пусть завтра будет хорошим днём.",
      "Ночная инструкция:\n1. Устроиться поудобнее.\n2. Перестать мысленно решать завтрашние задачи.\n3. Отложить телефон.\n4. Не вспоминать внезапно неловкий разговор пятилетней давности.\n5. Спать.\n\nПункт 4, знаю, самый сложный.",
      "Представь, что все дела на сегодня официально закрыты. Никому ничего не должна, ничего не нужно срочно исправлять. Сейчас твоя единственная задача — отдохнуть.",
      "Если мысли устроили ночное собрание без твоего согласия, объяви заседание закрытым. Повестку перенести на завтра. Спокойной ночи)",
      "Ночное объявление администрации:\nВсе нерешённые вопросы закрываются до утра. Повторяю: ВСЕ.\n\nЕсли мозг требует срочно вспомнить неловкий момент, сообщи ему, что сегодня технические работы. Заседание переносится.\n\nСпокойной ночи, Рита. Пусть хотя бы во сне никто не просит тебя всё успеть."
    ]},
    {icon:"☀",tag:"RANDOM JOY",title:"Когда просто хочется улыбнуться",messages:[
      "АХАХААХАХХХА, привет!\n\nВспоминай: торжественное награждение, где я отдал тебе свои медали за «Связиста», твои вечные попытки занять первое место вообще во всём и наше легендарное «у меня есть покушать».\n\nЕсли подумать, у нас уже есть целый набор традиций: случайно встретиться, начать разговор с какой-нибудь ерунды, обменяться подколами и внезапно получить приглашение на еду.\n\nВ общем, официально напоминаю: ты классная, а наши рандомные дни — отдельный жанр комедии.\n\nНадеюсь, улыбнулась))))",
      "Срочная новость: Рита снова замечена в попытке успеть всё, победить всех и параллельно позаботиться об окружающих. Очевидцы сообщают, что остановить её пока не удалось.",
      "Небольшое напоминание без повода: ты классная. Не только когда побеждаешь, улыбаешься или у тебя всё получается. Просто потому, что ты — это ты.",
      "Если улыбка пока не загрузилась, попробуй перезагрузить систему: любимая песня, что-нибудь вкусное, смешное видео и никаких мыслей о делах ближайшие двенадцать минут.",
      "МИНИ-КВЕСТ НА УЛЫБКУ\n\nНайди рядом что-нибудь вкусное. Включи песню, которая тебе нравится. Вспомни самую нелепую нашу шутку. И на минуту отмени все серьёзные мысли.\n\nЕсли улыбнулась — задание выполнено. Если нет — требую повторить с печеньем."
    ]}
  ],
  compliments:[
    "Рита, у тебя талант превращать даже обычный день в историю, которую потом вспоминают.",
    "Твоё стремление занять первое место уже можно считать отдельной спортивной дисциплиной))))",
    "Человек, который одновременно всё успевает, обо всём переживает и ещё умудряется накормить окружающих, — редкий экземпляр.",
    "Твоё «у меня есть покушать» — одно из самых понятных приглашений в мире.",
    "Даже случайный разговор с тобой может стать отдельным воспоминанием.",
    "Твои победы в «Связисте», Зарнице и любых других соревнованиях — это уже целая коллекция поводов для гордости.",
    "Ты умеешь замечать мелочи, которые другие могли бы просто пропустить.",
    "Если бы за ответственность и упорство выдавали медали, мне пришлось бы снова вручать тебе свои))))"
  ],

  memories:[
    {type:"note",title:"С чего всё началось",date:"THE BEGINNING",text:"Сначала хотелось сделать для тебя не просто поздравление, а отдельный маленький мир — место, которое можно исследовать. Так появилась идея сайта с загадками, письмами и личными деталями."},
    {type:"note",title:"Смена настроения",date:"THE DESIGN",text:"Первая версия получилась слишком тёмной для дня рождения. Поэтому оформление постепенно стало светлее и праздничнее: появились мягкие оттенки, цветы, анимации и больше воздуха."},
    {type:"note",title:"Двенадцать этапов",date:"THE LOCK",text:"Вместо одной загадки появился THE LOCK из десяти последовательных этапов. Подсказки спрятаны в тексте и деталях сайта, а задания используют разные механики — от логики до взаимодействия со страницами."},
    {type:"note",title:"Письма на разные случаи",date:"OPEN WHEN",text:"Для OPEN WHEN подготовлены двенадцать карточек. В каждой — несколько разных вариантов: от короткой записки до шуточного объявления или небольшого задания. Они не повторяются, пока не будут прочитаны все варианты."},
    {type:"note",title:"Последняя страница",date:"THE FINAL",text:"В финале нет готовой фразы на экране. Последнее слово Михаил скажет лично, а само послание останется его собственными словами."}
  ]
};

// Безопасное хранилище: сайт продолжает работать, даже если браузер запрещает localStorage для file://.
const safeStorage = (() => {
  try { const s = window.localStorage; const k = '__for_rita_storage_test__'; s.setItem(k, '1'); s.removeItem(k); return s; }
  catch { const memory = new Map(); return { getItem:k=>memory.has(k)?memory.get(k):null, setItem:(k,v)=>memory.set(k,String(v)), removeItem:k=>memory.delete(k) }; }
})();
const $=s=>document.querySelector(s);
const norm=s=>s.trim().toLocaleLowerCase("ru-RU").replaceAll("ё","е").replace(/[\s.!?,:;«»"'`-]/g,"");
const STORE="for-rita-progress-v6";
const previousProgress=Number(safeStorage.getItem("for-rita-progress-v5") ?? safeStorage.getItem("for-rita-progress-v4") ?? 0);
let progress=Number(safeStorage.getItem(STORE) ?? previousProgress);
let usedCompliments=[];
let letterCycles={};
try { letterCycles=JSON.parse(safeStorage.getItem("for-rita-letter-cycles-v1") || "{}"); }
catch { letterCycles={}; }
let tileSequence=[];
let explorationFound={};
try { explorationFound=JSON.parse(safeStorage.getItem(`${STORE}-exploration`) || "{}"); }
catch { explorationFound={}; }
function saveExploration(){ safeStorage.setItem(`${STORE}-exploration`,JSON.stringify(explorationFound)); }

// Последние четыре этапа требуют исследовать сам сайт и применить логику.
SITE.puzzles.push(
 {title:"Глава 09 — Случайности не случайны",question:"Иногда нужная деталь появляется только после нескольких попыток. Исследуй место, где сайт каждый раз выбирает для тебя что-то хорошее.",answers:["Свет"],success:"СЛУЧАЙНОСТЬ ОКАЗАЛАСЬ НЕ СОВСЕМ СЛУЧАЙНОЙ.  SECRET BLOCK ОТКРЫТ.",interaction:"random",type:"explore",exploreText:"Внимательно прочитай короткие фразы в этом разделе. Одна деталь оформлена иначе, чем остальные. Найди её и запомни слово."},
 {title:"Глава 10 — Письмо между строк",question:"Одна из записок в этом мире хранит слово, обозначающее то, что исчезает, как только произнесешь его название.",answers:["Тишина"],success:"Молодец.",interaction:"letter",type:"explore",exploreText:"В письмах есть одна фраза. Найди это слово в тексте и запомни его."},
 {title:"Глава 11 — То, что нельзя потрогать",question:"В праздничной части сайта есть карточка, которая хранит особенную деталь. Найди её скрытое послание. Это не вещь и не имя, а то, что можно вложить в подарок, даже если его нельзя упаковать.",answers:["забота"],success:"КРАСАВА ДЕРЖИ ПОДАРОК.",interaction:"birthday",type:"explore",exploreText:"В праздничном тексте спрятано слово, которое нельзя положить в коробку, но можно вложить в подарок. Найди его."},
 {title:"Глава 12 — Последовательность",question:"Последнее испытание — небольшая закономерность. Продолжи ряд: 40, 8, 15,  ... Какое число должно идти следующим?",answers:["3","три"],success:"ВСЕ ДВЕНАДЦАТЬ ЭТАПОВ ПРОЙДЕНЫ. Но последняя дверь откроется только с кодом, который Михаил скажет тебе лично.",type:"choice",options:["10","1","15","0","11:11","18","13","3","2"]}
);

// Перемешивание вариантов не меняет правильные ответы и механику этапа.
const shuffleOptions=list=>{const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
progress=Math.min(progress,SITE.puzzles.length);
safeStorage.setItem(STORE,String(progress));
function taskButton(label,value,extra=""){
 return `<button type="button" class="lock-task-option ${extra}" data-task-answer="${String(value).replaceAll('"','&quot;')}">${label}</button>`;
}
function renderPuzzle(){
 const done=progress>=SITE.puzzles.length, p=SITE.puzzles[Math.min(progress,SITE.puzzles.length-1)];
 $("#progressFill").style.width=`${progress/SITE.puzzles.length*100}%`;
 $("#progressText").textContent=`${progress} / ${SITE.puzzles.length} ОТКРЫТО`;
 $("#levelLabel").textContent=done?"COMPLETED":`LEVEL ${String(progress+1).padStart(2,"0")}`;
 $("#puzzleTitle").textContent=done?"Секрет раскрыт":p.title;
 $("#puzzleQuestion").textContent=done?"Ты прошла всю цепочку. Остался последний шаг — получить секретный код лично.":p.question;
 const form=$("#answerForm"), input=$("#answerInput"), steps=$("#puzzleSteps");
 steps.innerHTML="";form.classList.toggle("hidden",done || p.type!=="text");input.value="";
 $("#finalCodeGate")?.classList.toggle("hidden",!done);
 $("#feedback").textContent="";$("#reward").classList.add("hidden");tileSequence=[];
 if(done){$("#reward").textContent="ДВЕНАДЦАТЬ ЭТАПОВ ПРОЙДЕНЫ ✦ Теперь попроси у Михаила последний код — он скажет его лично.";$("#reward").classList.remove("hidden");}
 else if(p.type==="choice"){
   const opts=shuffleOptions(p.options||p.answers);
   steps.innerHTML=`<div class="lock-mechanic-label">ВЫБЕРИ ПРАВИЛЬНЫЙ ВАРИАНТ</div><div class="lock-task-options">${opts.map(v=>taskButton(v,v)).join("")}</div>`;
 }else if(p.type==="symbol"){
   const opts=shuffleOptions(p.symbols||[]);
   steps.innerHTML=`<div class="lock-mechanic-label">ВЫБЕРИ ПОДХОДЯЩИЙ СИМВОЛ</div><div class="lock-symbol-grid">${opts.map(v=>`<button type="button" class="lock-symbol-card" data-task-answer="${v.value}"><span>${v.icon}</span><small>${v.label}</small></button>`).join("")}</div>`;
 }else if(p.type==="cards"){
   const opts=shuffleOptions(p.cards||[]);
   steps.innerHTML=`<div class="lock-mechanic-label">ВЫБЕРИ ФОРМАТ СООБЩЕНИЯ</div><div class="lock-format-grid">${opts.map(v=>`<button type="button" class="lock-format-card" data-task-answer="${v.value}"><span>${v.icon}</span><strong>${v.label}</strong></button>`).join("")}</div>`;
 }else if(p.type==="tiles" || p.type==="syllables"){
   const tiles=shuffleOptions(p.tiles);
   steps.innerHTML=`<div class="lock-mechanic-label">${p.type==="tiles"?"СОБЕРИ СЛОВО ИЗ БУКВ":"СОБЕРИ СЛОВО ИЗ ЧАСТЕЙ"}</div><div class="lock-tile-tray">${tiles.map((v,i)=>`<button type="button" class="lock-tile" data-tile="${v}" data-tile-id="${i}">${v}</button>`).join("")}</div><div class="lock-tile-result" id="tileResult">Твой ответ: <strong></strong></div><div class="lock-task-actions"><button type="button" class="lock-task-option" id="undoTile">← Отменить</button><button type="button" class="lock-task-option" id="checkTiles">Проверить</button></div>`;
 }else if(p.type==="explore"){
   steps.innerHTML=`<div class="lock-explore-card"><span class="lock-mechanic-label">ИССЛЕДОВАНИЕ САЙТА</span><p>${p.exploreText}</p><div id="exploreStatus" class="lock-explore-status">Когда найдёшь слово, вернись сюда.</div><button type="button" class="lock-task-option" id="checkExplore" ${explorationFound[progress]?"":"disabled"}>Я нашла нужный фрагмент</button></div>`;
 }
 if(progress>=9)unlockArchive();
}
function completeTask(){
 const p=SITE.puzzles[progress];
 $("#feedback").textContent="Верно. Этап пройден ✦";$("#reward").textContent=p.success;$("#reward").classList.remove("hidden");
 progress++;safeStorage.setItem(STORE,String(progress));
 delete explorationFound[progress-1];saveExploration();
 if(progress===9)unlockArchive();
 setTimeout(renderPuzzle,1700);
}
$("#answerForm").addEventListener("submit",e=>{
 e.preventDefault();if(progress>=SITE.puzzles.length)return;
 const p=SITE.puzzles[progress],answer=norm($("#answerInput").value);
 if(p.type==="text" && p.answers.map(norm).includes(answer))completeTask();
 else $("#feedback").textContent="Ответ не подошёл. Проверь детали и попробуй ещё раз.";
});
$("#puzzleSteps").addEventListener("click",e=>{
 const p=SITE.puzzles[progress];if(!p)return;
 const option=e.target.closest("[data-task-answer]");
 if(option){
   if(p.answers.map(norm).includes(norm(option.dataset.taskAnswer)))completeTask();
   else {option.classList.add("is-wrong");$("#feedback").textContent="Не совсем. Попробуй другой вариант.";}
   return;
 }
 const tile=e.target.closest("[data-tile]");
 if(tile){tileSequence.push(tile.dataset.tile);tile.disabled=true;$("#tileResult strong").textContent=tileSequence.join("");return;}
 if(e.target.id==="undoTile"){
   if(tileSequence.length){const last=tileSequence.pop();const used=[...$("#puzzleSteps").querySelectorAll("[data-tile]")].filter(b=>b.dataset.tile===last&&b.disabled);used.at(-1)?.removeAttribute("disabled");$("#tileResult strong").textContent=tileSequence.join("");}
 }
 if(e.target.id==="checkTiles"){
   if(norm(tileSequence.join(""))===norm(p.tileAnswer))completeTask();
   else $("#feedback").textContent="Порядок пока неверный. Можно отменить последнюю часть и попробовать снова.";
 }
 if(e.target.id==="checkExplore"){
   if(explorationFound[progress])completeTask();
 }
});
const FINAL_UNLOCK_KEY="for-rita-final-unlocked-v7";
$("#finalCodeForm")?.addEventListener("submit",e=>{
 e.preventDefault();
 const expected=norm(SITE.finalCode||"");
 const entered=norm($("#finalCodeInput").value);
 if(!expected || expected.includes("ЗАМЕНИТЬ")){
   $("#finalCodeFeedback").textContent="Сначала впиши свой секретный код в настройку SITE.finalCode в script.js.";
   return;
 }
 if(entered===expected){
   safeStorage.setItem(FINAL_UNLOCK_KEY,"yes");
   $("#finalCodeFeedback").textContent="КОД ПРИНЯТ. ПОСЛЕДНЯЯ ДВЕРЬ ОТКРЫТА ✦";
   setTimeout(()=>location.href="confession.html",650);
 }else{
   $("#finalCodeFeedback").textContent="Код не подошёл. Попроси Михаила повторить его.";
 }
});

function unlockArchive(){
 const block=$("#secret-block");if(!block)return;
 block.classList.remove("hidden");$("#archiveNav").classList.remove("hidden");
}
renderPuzzle();
$("#resetProgress")?.addEventListener("click",()=>{
 if(!confirm("Сбросить прохождение THE LOCK на этом устройстве?"))return;
 ["for-rita-progress-v6","for-rita-progress-v5","for-rita-progress-v4","for-rita-progress-v6-exploration","for-rita-challenge-v5","for-rita-final-key-v5","for-rita-final-unlocked-v5","for-rita-challenge-v6","for-rita-challenge-set-v2","for-rita-final-key-v6","for-rita-final-unlocked-v6","for-rita-final-unlocked-v7"].forEach(k=>safeStorage.removeItem(k));
 location.reload();
});

// Этапы исследования отмечаются только после действия пользователя.
// Никаких всплывающих подсказок и автоматически появляющихся ответов.
$("#randomButton").addEventListener("click",()=>{
 if(progress===8){
   explorationFound[8]=true;saveExploration();
   const st=$("#exploreStatus");if(st)st.textContent="Раздел просмотрен. Если заметила необычное слово, возвращайся к заданию.";
   const b=$("#checkExplore");if(b)b.disabled=false;
 }
});
window.addEventListener("site:letter-open",e=>{
 if(progress===9 && e.detail?.index===1){
   explorationFound[9]=true;saveExploration();
   const st=$("#exploreStatus");if(st)st.textContent="Письмо прочитано. Если нашла необычное слово, возвращайся к заданию.";
   const b=$("#checkExplore");if(b)b.disabled=false;
 }
});
function markBirthdayExplored(){
  if(progress===10){
    explorationFound[10]=true;
    saveExploration();

    const st=$("#exploreStatus");
    if(st) st.textContent="Праздничный раздел просмотрен. Если заметила нужное слово, возвращайся к заданию.";

    const b=$("#checkExplore");
    if(b) b.disabled=false;
  }
}

$("#birthdayCard")?.addEventListener("click",markBirthdayExplored);
$("#enterGift")?.addEventListener("click",markBirthdayExplored);

function renderLetters(){
 $("#letterGrid").innerHTML=SITE.letters.map((l,i)=>`<button class="letter-card flip-card" data-index="${i}" type="button" aria-pressed="false"><span class="flip-inner"><span class="flip-face flip-front"><span class="letter-icon">${l.icon}</span><strong>${l.title}</strong><small>${l.tag}</small><span class="letter-card-foot">ПЕРЕВЕРНИ, ЧТОБЫ ОТКРЫТЬ ↻</span></span><span class="flip-face flip-back"><span class="back-mark">✦</span><strong>${l.title}</strong><span class="flip-message"></span><small class="flip-again">НАЖМИ, ЧТОБЫ ЗАКРЫТЬ</small></span></span></button>`).join("");
}
renderLetters();
$("#letterGrid").addEventListener("click",e=>{
 const c=e.target.closest(".flip-card");if(!c)return;
 const index=+c.dataset.index,l=SITE.letters[index],isOpen=c.classList.contains("is-flipped");
 if(isOpen){c.classList.remove("is-flipped");c.setAttribute("aria-pressed","false");return;}
 const arr=l.messages;let used=letterCycles[index]||[];if(used.length>=arr.length)used=[];
 const choices=arr.map((_,i)=>i).filter(i=>!used.includes(i));
 const pick=(progress===7 && index===1)?0:choices[Math.floor(Math.random()*choices.length)];
 used.push(pick);letterCycles[index]=used;safeStorage.setItem("for-rita-letter-cycles-v1",JSON.stringify(letterCycles));
 c.querySelector(".flip-message").innerHTML=arr[pick];
 c.classList.add("is-flipped");c.setAttribute("aria-pressed","true");
 window.dispatchEvent(new CustomEvent("site:letter-open",{detail:{index}}));
});

$("#randomButton").addEventListener("click",()=>{
 if(usedCompliments.length===SITE.compliments.length)usedCompliments=[];
 const available=SITE.compliments.map((_,i)=>i).filter(i=>!usedCompliments.includes(i));
 const n=available[Math.floor(Math.random()*available.length)];usedCompliments.push(n);
 $("#compliment").textContent=SITE.compliments[n];$("#randomCount").textContent=`A LITTLE REMINDER · ${String(usedCompliments.length).padStart(2,"0")}`;
});

function renderArchive(filter){
 const grid=$("#archiveGrid");
 const items=SITE.memories.filter(m=>filter==="all"||m.type===filter);
 grid.innerHTML=items.map(m=>{
   let visual="";
   if(m.type==="photo")visual=`<div class="memory-media"><img src="${m.src}" alt="${m.title}" onerror="this.parentElement.classList.add('media-missing');this.remove()"><span class="media-placeholder">ADD PHOTO<br><small>${m.src}</small></span></div>`;
   if(m.type==="video")visual=`<div class="memory-media video-media"><video controls preload="metadata" src="${m.src}" onerror="this.parentElement.classList.add('media-missing')" onloadeddata="this.parentElement.classList.add('media-ready')"></video><span class="media-placeholder">ADD VIDEO<br><small>${m.src}</small></span></div>`;
   if(m.type==="note")visual=`<div class="memory-note"><span>“</span><p>${m.text}</p></div>`;
   return `<article class="memory-card" data-type="${m.type}">${visual}<div class="memory-card-copy"><div class="section-kicker">${m.date||""}</div><h3>${m.title}</h3>${m.description?`<p>${m.description}</p>`:""}</div></article>`;
 }).join("");
}
document.querySelectorAll(".archive-tab").forEach(b=>b.addEventListener("click",()=>{
 document.querySelectorAll(".archive-tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderArchive(b.dataset.filter);
}));

$("#menuToggle").addEventListener("click",()=>$("#nav").classList.toggle("open"));
document.querySelectorAll(".nav-link").forEach(a=>a.addEventListener("click",()=>{$("#nav").classList.remove("open");document.querySelectorAll(".nav-link").forEach(x=>x.classList.remove("active"));a.classList.add("active");}));

// Музыкальный плеер с локальным треком сайта.
const audio=$("#audioPlayer");
// Запуск музыки на комфортной громкости 30%; если браузер блокирует autoplay,
// повторяем попытку после первого взаимодействия пользователя со страницей.
audio.volume=0.1;
const startSiteMusic=()=>{
 if(!audio.paused)return;
 audio.volume=0.1;
 audio.play().then(()=>{$("#playTrack").textContent="Ⅱ";$("#trackStatus").textContent="Сейчас играет · громкость 30%";}).catch(()=>{});
};
audio.play().then(()=>{$("#playTrack").textContent="Ⅱ";$("#trackStatus").textContent="Сейчас играет · громкость 30%";}).catch(()=>{
 const firstInteraction=(event)=>{
  if(event.target.closest("#playTrack, #stopTrack, #rewindTrack, #soundButton"))return;
  startSiteMusic();
  document.removeEventListener("pointerdown",firstInteraction,true);
  document.removeEventListener("keydown",firstInteraction,true);
 };
 document.addEventListener("pointerdown",firstInteraction,true);
 document.addEventListener("keydown",firstInteraction,true);
});
audio.addEventListener("loadedmetadata",()=>{
 $("#duration").textContent=fmt(audio.duration);
});
$("#rewindTrack").addEventListener("click",()=>{
 audio.currentTime=0;
 if(audio.paused)$("#playTrack").textContent="▶";
});
$("#playTrack").addEventListener("click",async()=>{
 if(audio.paused){try{await audio.play();$("#playTrack").textContent="Ⅱ";}catch(e){toast("Не удалось воспроизвести этот файл.");}}
 else{audio.pause();$("#playTrack").textContent="▶";}
});
$("#stopTrack").addEventListener("click",()=>{audio.pause();audio.currentTime=0;$("#playTrack").textContent="▶";});
audio.addEventListener("timeupdate",()=>{
 $("#trackProgress").style.width=`${audio.duration?audio.currentTime/audio.duration*100:0}%`;
 $("#currentTime").textContent=fmt(audio.currentTime);$("#duration").textContent=fmt(audio.duration);
});
audio.addEventListener("ended",()=>$("#playTrack").textContent="▶");
function fmt(v){if(!Number.isFinite(v))return"00:00";return`${String(Math.floor(v/60)).padStart(2,"0")}:${String(Math.floor(v%60)).padStart(2,"0")}`;}
$("#soundButton").addEventListener("click",()=>{
 document.querySelector("#music").scrollIntoView({behavior:"smooth",block:"center"});
 if(audio.src) {
   if (audio.paused) { audio.play().then(()=>{$("#playTrack").textContent="Ⅱ";}).catch(()=>toast("Не удалось воспроизвести этот файл.")); }
   else { audio.pause(); $("#playTrack").textContent="▶"; }
 } else { toast("Трек загружается. Попробуй ещё раз через секунду."); }
});

function toast(s){const t=$("#toast");t.textContent=s;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2500);}

// OUR STATISTICS — данные подключаются только из подтверждённой выгрузки переписки.
// Пока источник не добавлен, показываем нейтральное сообщение вместо выдуманных нулей.
const conversationStats = window.FOR_RITA_STATS || null;
const statLabels = [
  ["messages", "Сообщений"], ["words", "Слов в переписке"],
  ["photos", "Фотографий"], ["videos", "Видео"],
  ["voice", "Голосовых сообщений"], ["days", "Дней общения"]
];
function animateStatNumber(element, target) {
  const end = Number(target);
  if (!Number.isFinite(end) || end < 0) { element.textContent = "—"; return; }
  const duration = 1450;
  const startAt = performance.now();
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (reduced) { element.textContent = Math.round(end).toLocaleString("ru-RU"); return; }
  const tick = now => {
    const progress = Math.min(1, (now - startAt) / duration);
    const eased = 1 - Math.pow(1 - progress, 4);
    element.textContent = Math.round(end * eased).toLocaleString("ru-RU");
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
function renderStats() {
  const summary = $("#statsSummary");
  if (!summary) return;
  const values = conversationStats && conversationStats.total;
  const hasData = values && statLabels.some(([key]) => Number.isFinite(Number(values[key])));
  if (!hasData) {
    summary.innerHTML = '<div class="stats-empty">Общая статистика появится здесь после добавления полной выгрузки переписки.</div>';
    return;
  }
  summary.innerHTML = statLabels.filter(([key]) => Number.isFinite(Number(values[key]))).map(([key,label]) =>
    `<article class="stats-number"><span>${label}</span><strong data-count="${Number(values[key])}">0</strong></article>`
  ).join("");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateStatNumber(entry.target, entry.target.dataset.count);
      observer.unobserve(entry.target);
    });
  }, { threshold: .45 });
  summary.querySelectorAll("[data-count]").forEach(el => observer.observe(el));
  if (conversationStats.period) {
    const period = document.createElement("p");
    period.className = "stats-period";
    period.textContent = "Период выгрузки: " + conversationStats.period;
    summary.insertAdjacentElement("afterend", period);
  }
}
renderStats();

// Сезонный декор: ноябрь–февраль — зима. Эффекты не перехватывают клики.
function initSeasonalDecor() {
  const layer = $("#seasonalLayer");
  if (!layer) return;
  const month = new Date().getMonth();
  const season = (month === 10 || month === 11 || month === 0 || month === 1) ? "winter" :
    (month >= 2 && month <= 4) ? "spring" : (month >= 5 && month <= 7) ? "summer" : "autumn";
  document.documentElement.dataset.season = season;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
  const seasonal = {
    winter: { count: 30, glyphs: ["❄", "✧", "•"], className: "season-particle" },
    spring: { count: 20, glyphs: ["✿", "❀", "·"], className: "season-particle spring-petal" },
    summer: { count: 18, glyphs: ["✧", "·", "✦"], className: "season-particle summer-glint" },
    autumn: { count: 22, glyphs: ["🍂", "🍁", "·"], className: "season-particle autumn-leaf" }
  }[season];
  const count = window.innerWidth < 600 ? Math.round(seasonal.count * .6) : seasonal.count;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const particle = document.createElement("span");
    particle.className = seasonal.className;
    particle.textContent = seasonal.glyphs[i % seasonal.glyphs.length];
    particle.style.setProperty("--x", `${Math.random() * 100}%`);
    particle.style.setProperty("--delay", `${-Math.random() * 18}s`);
    particle.style.setProperty("--duration", `${12 + Math.random() * 14}s`);
    particle.style.setProperty("--size", `${3 + Math.random() * 8}px`);
    particle.style.setProperty("--drift", `${-35 + Math.random() * 70}px`);
    fragment.appendChild(particle);
  }
  layer.appendChild(fragment);
}
initSeasonalDecor();

const BIRTHDAY_DATE = new Date(2026, 11, 10, 0, 0, 0);
const FRIENDSHIP_DATE = new Date(2026, 5, 2, 0, 0, 0);
function updateCounters(){
 const now=new Date();
 const until=Math.max(0,BIRTHDAY_DATE-now);
 const dayMs=86400000,hourMs=3600000,minuteMs=60000;
 const days=Math.floor(until/dayMs),hours=Math.floor(until%dayMs/hourMs),minutes=Math.floor(until%hourMs/minuteMs),seconds=Math.floor(until%minuteMs/1000);
 [["bdDays",days],["bdHours",hours],["bdMinutes",minutes],["bdSeconds",seconds]].forEach(([id,v])=>{const el=document.getElementById(id);if(el)el.textContent=String(v).padStart(2,"0");});
 const elapsed=Math.max(0,now-FRIENDSHIP_DATE),fd=Math.floor(elapsed/dayMs),fh=Math.floor(elapsed%dayMs/hourMs),fm=Math.floor(elapsed%hourMs/minuteMs),fs=Math.floor(elapsed%minuteMs/1000);
 [["friendDays",fd],["friendHours",fh],["friendMinutes",fm],["friendSeconds",fs]].forEach(([id,v])=>{const el=document.getElementById(id);if(el)el.textContent=String(v).padStart(2,"0");});
}
function birthdayInfo(){
 const now=new Date(),isDay=now.getMonth()===11&&now.getDate()===10;let age=null;
 if(SITE.birthDate){const [y,m,d]=SITE.birthDate.split("-").map(Number);age=now.getFullYear()-y;if(now.getMonth()+1<m||(now.getMonth()+1===m&&now.getDate()<d))age--;}
 $("#birthdayAge").textContent=age!==null?(isDay?`HAPPY BIRTHDAY · ${age} YEARS`:(`AGE · ${age}`)):(isDay?"HAPPY BIRTHDAY":"10 DECEMBER 2026");
 if(isDay)showBirthday();
}
function showBirthday(){
 $("#birthdayOverlay").classList.remove("hidden");
 $("#modalAge").textContent="A DAY MADE JUST FOR YOU";
 $("#birthdayMessage").innerHTML='С днём рождения, Рита! Сегодня этот маленький мир — для тебя. А самое важное, что я хотел сюда вложить, — <span class="lock-secret-word">забота</span>.';
 launchConfetti();
}
function launchConfetti(){
 const layer=document.querySelector(".birthday-confetti");if(!layer)return;
 layer.innerHTML=Array.from({length:64},(_,i)=>`<i style="--x:${Math.random()*100}%;--delay:${Math.random()*1.8}s;--duration:${2.8+Math.random()*2.5}s;--drift:${Math.random()*120-60}px">${["✦","✧","❀","●"][i%4]}</i>`).join("");
}
$("#previewBirthday")?.addEventListener("click",showBirthday);

// Закрытие поздравления
$("#closeBirthday")?.addEventListener("click",()=>{
  $("#birthdayOverlay").classList.add("hidden");
});

// Кнопка «Открыть подарок»
$("#enterGift")?.addEventListener("click",()=>{
  $("#birthdayOverlay").classList.add("hidden");
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

updateCounters();
setInterval(updateCounters,1000);

// Единая система появления блоков при прокрутке (без дублирующих observers).
const revealTargets=document.querySelectorAll(".section-heading,.intro,.lock-panel,.letter-card,.random-section,.random-orb,.music-player,.birthday-card,.journey-card,.intro h2,.intro p");
if ("IntersectionObserver" in window) {
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add("revealed");revealObserver.unobserve(entry.target);}
 }),{threshold:.12});
 revealTargets.forEach(el=>{el.classList.add("reveal");revealObserver.observe(el);});
} else { revealTargets.forEach(el=>el.classList.add("revealed")); }

window.addEventListener("scroll",()=>{
 const y=window.scrollY;
 document.querySelectorAll(".ambient").forEach((el,i)=>el.style.transform=`translateY(${y*(i?.035:.02)}px)`);
},{passive:true});
