# Тестовое задание в Okko

### Требования
1. Сделать страницу, на которой отображается расписание докладов воображаемой однопоточной конференции, которая «проходит» в текущий день. Требований к дизайну нет кроме того, что расписание должно быть в виде списка и удобно читаемо и на десктопе, и на мобильных. 
Для примера:
https://jscamp.tech/2019/schedule/
https://2019.holyjs-piter.ru/
2. После первой загрузки с интернетом расписание должно открываться в офлайне;
3. За несколько минут до следующего доклада в браузере должен приходить пуш с напоминанием;
4. Код должен быть выложен на гитхаб и запушен в gh-pages.

### Разработка

Запуск дев сервера
```
npm run start
```

Запуск локального сервера для тестирования service-worker
```
npm run start-sw
```

Сборка проекта
```
npm run build
```

Запуск линтера
```
npm run lint
```
