export const DB = {
    talks: [
        {
            time: {
                start: '02:00',
                end: '11:00',
            },
            title: 'Переводим React-приложение на SSR, используя Next.js',
            description: 'Хотели бы оптимизировать React-приложение для SEO и улучшить метрики загрузки страницы? Стоит ли смотреть в сторону создания «универсального» приложения или генераторов статических сайтов? Как можно улучшить UX, не потеряв при этом DX? В этом докладе Наталия расскажет о результатах и опыте, накопленном за время перехода на Next.js.'
        },
        {
            time: {
                start: '11:10',
                end: '12:00',
            },
            title: 'Алгоритмы на графах',
            description: 'Марина расскажет о разных алгоритмах обхода графа на примере решения проблемы рекомендаций. Доклад будет представлен в формате live coding, минимум слайдов, все происходит в IDE.'
        },
        {
            time: {
                start: '13:00',
                end: '14:00',
            },
            title: 'ApolloClient или Relay с фрагментами, «волосатый» GraphQL и TypeScript — всё, что нужно для правильного статического анализа React-приложения',
            description: 'В начале Павел разберет архитектуру Apollo Client и Relay. Расскажет, что такое «волосатый» GraphQL, чем он полезен и чем отличается от RestQL. Покажет, как правильно использовать GraphQL на стороне клиента в react-apollo, как писать запросы снизу вверх через фрагменты (прямо как в Фейсбуке). Все это дело подружит с TypeScript, чтоб получить суровый энтерпрайзный статический анализ.'
        },
        {
            time: {
                start: '14:10',
                end: '15:00',
            },
            title: 'Протокол Chrome DevTools',
            description: 'Доклад посвящен настоящему и будущему инструментов для Node.js. Алексей расскажет о DevTools Protocol и о том, как и какие его части можно использовать для того, чтобы делать свои инструменты для Node.js. В качестве примера он покажет, как можно измерить покрытие кода, используя только протокол.'
        },
        {
            time: {
                start: '15:10',
                end: '16:00',
            },
            title: 'Обработка озера данных на Node.js в serverless-архитектуре',
            description: 'Мы рассмотрим процесс обработки озера данных с помощью облачных функций AWS Lambda на Node.js: от выбора применяемых архитектурных облачных паттернов до углубления в оптимизации лямбда-функций на Node.js. Выявим и используем сильные стороны Node.js для ускорения обработки данных. Исследуем увеличение пропускной способности с помощью масштабирования до 7000 экземпляров лямбда-функций и используемых сервисов (стримов, очередей и баз данных), тюнинга и оптимизаций лямбда-функций на Node.js и выбора оптимальных протоколов передачи данных. Рассмотрим особенности профилирования функций, логирования и мониторинга в облачной инфраструктуре для выхода в продакшн.'
        }
    ]
}
