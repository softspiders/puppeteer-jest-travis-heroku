# The simplest example of testing a web application in the Puppeteer and Jest, included in the CI/CD pipeline *GitHub->Travis CI->Heroku*.

## Requirements

[Node.js](https://nodejs.org/en/download/package-manager/) >= v6.4.0

---

## Direct feature ancestors

* [puppeteer-jest](https://github.com/softspider/puppeteer-jest)
* [node-travis-heroku-cd](https://github.com/softspider/node-travis-heroku-cd)

## Direct code ancestors

[puppeteer-jest](https://github.com/softspider/puppeteer-jest)

---

## Installation

```sh
yarn
```

Note: When you install Puppeteer, it downloads a recent version of Chromium (~170MB Mac, ~282MB Linux, ~280MB Win) that is guaranteed to work with the API. To skip the download, see [Environment variables](https://github.com/GoogleChrome/puppeteer/blob/v1.15.0/docs/api.md#environment-variables).

## Application run

```sh
node index
```

## Test run

```sh
yarn test
```
---

## Demo

https://puppeteer-jest-travis-heroku.herokuapp.com/

---

## Authors

[Alexander Lapygin](https://github.com/AlexanderLapygin)

### License

Licensed under the [MIT license](./LICENSE)
