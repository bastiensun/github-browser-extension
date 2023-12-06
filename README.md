# GitHub Browser Extension

## About The Project

### Build With

- [Plasmo](https://plasmo.com/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- `node` (`v18.0.0` or later)
 
### Installation

Install npm packages

```shell
npm install
```

### Development

First, run the development server:

```shell
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

For further guidance, [visit Plasmo documentation](https://docs.plasmo.com/).

## Making production build

For `Firefox`, run the following:

```shell
npm run build -- --target=firefox-mv2 --zip
```

For `Chrome`, run the following:

```shell
npm run build -- --target=chrome-mv3 --zip
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.
