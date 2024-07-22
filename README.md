<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


Literary Tips API
"Literary Tips" es una API creada con NestJS que permite gestionar tips literarios. Las funcionalidades incluyen crear, actualizar, eliminar (soft delete), y consultar tips con filtros por tipo y nivel.

## Description
Literary Tips API
"Literary Tips" es una API creada con NestJS que permite gestionar tips literarios. Las funcionalidades incluyen crear, actualizar, eliminar (soft delete), y consultar tips con filtros por tipo y nivel.

Descripción
Este proyecto es una API RESTful que permite:

Crear un tip
Actualizar un tip
Eliminar un tip (soft delete)
Consultar todos los tips paginados
Consultar un tip filtrado por tipo (filosofía, ciencia y tecnología)
Consultar un tip filtrado por nivel (básico, medio, avanzado)
Poblar la base de datos con al menos 20 tips diversos
La API utiliza una base de datos PostgreSQL y TypeORM para la gestión de datos.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation


```bash
git clone 
$ https://github.com/JuanCamilo97-stack/literary-tips.git
cd literary-tips

```
render https://literary-tips.onrender.com/api/swagger


```bash
Instalar las dependencias
$ npm install
```
```bash
Crear un archivo .env en la raíz del proyecto con la siguiente configuración:
DB_HOST=""
DB_PORT=
DB_USER=""
DB_PASSWORD=""
DB_NAME=""
```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## structure

```bash
Estructura del Proyecto
El proyecto está estructurado en módulos para una mejor organización:

Tips: Gestión de tips literarios.
Levels: Gestión de niveles (básico, medio, avanzado).
Genres: Gestión de géneros (filosofía, ciencia, tecnología).

Endpoints
Tips
POST /tips: Crear un nuevo tip.
GET /tips: Obtener todos los tips paginados.
GET /tips/
: Obtener un tip por ID.
PATCH /tips/
: Actualizar un tip por ID.
DELETE /tips/
: Eliminar un tip por ID (soft delete).
Levels
POST /levels: Crear un nuevo nivel.
GET /levels: Obtener todos los niveles paginados.
GET /levels/
: Obtener un nivel por ID.
PATCH /levels/
: Actualizar un nivel por ID.
DELETE /levels/
: Eliminar un nivel por ID (soft delete).
Genres
POST /genres: Crear un nuevo género.
GET /genres: Obtener todos los géneros paginados.
GET /genres/
: Obtener un género por ID.
PATCH /genres/
: Actualizar un género por ID.
DELETE /genres/
: Eliminar un género por ID (soft delete).
```
## Support
Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

Si necesitas ayuda, por favor abre un issue en el repositorio o contacta al autor.

## Stay in touch

- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)


## Author
```bash
Juan Camilo Atehortua Herrera
Email juanatehortua97@gmail.com
```

## License

Nest is [MIT licensed](LICENSE).
