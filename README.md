# FirebaseHosting
Сайт перевода руководства [Firebase Hosting](https://firebase.google.com/docs/hosting/?authuser=0) на русский язык.<br>
Проект сгенерирован [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5. с настройками Angular-Universal, что подразумевает под собой часть universal, который хостируется не на сервере NodeJs (к примеру, на [heroku](https://www.heroku.com)), а на Firebase с функциональностью облачных функций, для раздачи именно Universal приложения с платформы Firebase, что собственно и отрабатывалось данным проектом. Сам проект на продакшн (папка /dist), оптимизирован и аглифицирован штатным средством Angular CLI - webpack. Темы изменяются на основе стандартного подхода изменения палитр [Angular-Material](https://material.angular.io/guide/theming)  <br>
###Production
`npm run build:all` - создается папка /dist
### Development server

После загрузки зависимостей, запустить `ng serve` для старта компановки и запуска сервера разработки на `http://localhost:4200/`, затем перейти браузером туда же. 
