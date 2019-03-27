Задача

Создание SPA, реализующего CRUD-функционал для сущности "Кролик"
Требования:

    Использование фронтенд-фреймворка (react/vue/angular)
    Приложение должно быть совместимо с основными версиями популярных браузеров (Chrome, Firefox, Safari, Opera, Edge)

Описание:

Приложение должно состоять из следующих страниц:

    авторизация
    создание кролика
    редактирование кролика
    список кроликов (в списке должна быть возможность удаления)

Требования к дизайну отстутствуют, адаптивная версия не требуется, допускается использование дополнительных библиотек для быстрого создания UI на выбор соискателя. Так же, в API допущена уязвимость, обнаружение и эксплуатация которой будет дополнительным бонусом (достаточно в текстовом виде). Результат ожидается в виде git-репозитория.
Техническая информация:

Адрес API: http://conquest.weekendads.ru

Приложению предстоит общаться с REST API, реализующим CRUD-функционал для сущности "Кролик". API имеет stateless-модель аутентификации. Аутентификация производится посредством передачи токена в заголовке запроса: Authorization: Bearer <token> Токен получается с помощью запроса следующего вида (здесь и далее HTTP-запросы представленны в виде curl-команды):

curl -X POST \
  http://conquest.weekendads.ru/login_check \
  -H 'Content-Type: application/json' \
  -d '{"username":"<username>","password":"<password>"}'

Где username и password -- предоставленные соискателю данные.

Сервер пришлёт ответ следующего вида:

{
    "token": "<token>"
}

Где поле token -- JWT, содержащий в себе основную информцию о пользователе и время создания/истечения токена. Дополнительным плюсом будет отображение в каком-либо месте имени пользователя, полученного из токена.
Описание работы с методами API
GetRabbitList, получение списка кроликов:

curl -X GET \
  http://conquest.weekendads.ru/rabbit/list \
  -H 'Authorization: Bearer <token>' \

CreateRabbit, создание кролика:

curl -X POST \
  http://conquest.weekendads.ru/rabbit \
  -H 'Authorization: Bearer <token>' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'rabbit[name]=<name>&rabbit[weight]=<weight>'

Где name -- имя кролика (строка), а weight -- его вес (число с плавающей точкой)
UpdateRabbit, изменение кролика:

curl -X POST \
  http://conquest.weekendads.ru/rabbit/<rabbit.id> \
  -H 'Authorization: Bearer <token>' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'rabbit[name]=<name>&rabbit[weight]=<weight>'

Где rabbit.id -- id кролика (целое число), name -- имя кролика (строка), а weight -- его вес (число с плавающей точкой).
DeleteRabbit, удаление кролика:

curl -X DELETE \
  http://conquest.weekendads.ru/rabbit/<rabbit.id> \
  -H 'Authorization: Bearer <token>' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'rabbit[name]=<name>&rabbit[weight]=<weight>'

Где rabbit.id -- id кролика (целое число), name -- имя кролика (строка), а weight -- его вес (число с плавающей точкой).