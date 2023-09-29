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

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
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

# NestJS Backend Project

This project is a NestJS backend application with enhanced features for better maintainability and scalability.

## Table of Contents

1. [Environment Configuration](#environment-configuration)
2. [Logging](#logging)
3. [Pagination in GET All](#pagination-in-get-all)

---

## 1. Environment Configuration

### Description

We use `.env` files for environment variables. The `ConfigModule` is used to load these variables and make them globally accessible.

### How to Use

1. Create a `.env` file at the root of the `back` folder.
2. Add your environment variables, e.g., `PORT=3001`.
3. Use `ConfigService` to read these variables in your code.

```typescript
const port = configService.get<number>('PORT') || 3001;
```

---

## 2. Logging

### Description

We use `Winston` for logging. It is configured in a separate `logger.config.ts` file and can be injected anywhere in the application.

### How to Use

1. Install `winston` and `nest-winston` packages.
2. Create a `logger.config.ts` in the `config` folder.
3. Import this configuration in your `app.module.ts`.

    ```typescript
    import { winstonConfig } from './config/logger.config';
    ```

4. Inject `WINSTON_MODULE_PROVIDER` to use logging.

    ```typescript
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
    ```

---

## 3. Pagination in GET All

### Description

The `GET /posts` endpoint now supports pagination. You can specify `limit` and `offset` query parameters to paginate the results.

### How to Use

1. Update the `findAll` method in `posts.repository.ts` to accept `limit` and `offset`.
2. Update `getPosts` in `posts.service.ts` and `posts.controller.ts` to use these parameters.

    ```typescript
    @Get()
    getPosts(@Query('limit') limit: number, @Query('offset') offset: number) {
      return this.postsService.getPosts(limit, offset);
    }
    ```

---
