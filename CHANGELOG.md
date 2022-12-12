# v0.1.0 (Sun Dec 11 2022)

## Abstract

At this point the project is enabled to support a production-ready design system.
Right now you will only see a dummy component used to create the setup of the project, so expect to see it change in the upcoming updates prior to v1.0.0 release.

The setup includes:

- [Create-React-App](https://create-react-app.dev/) installation serving as project foundation.
- Formatting, linting, commit-linting, and parsing configs.
  - Formatting is covered with [Prettier](https://prettier.io/).
  - Linting is covered with [ESLint](https://eslint.org/).
  - Commit-linting is covered with [commitlint](https://commitlint.js.org/#/). This assures compliance with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
  - Parsing is covered with [Babel](https://babeljs.io/).
- It also includes a CI workflow to test and deploy stories from Storybook in [Chromantic](https://github.com/selsa-inube/design-system/actions/workflows/chromatic.yml).
- Release management is automatized using [auto](https://intuit.github.io/auto/index).

All Git Hooks are controlled with [Husky](https://typicode.github.io/husky/#/).

#### 🐛 Bug Fix

- 29 accessibility addons [#30](https://github.com/selsa-inube/design-system/pull/30) ([@wfercanas](https://github.com/wfercanas))
- 27 storybook jest test runner [#28](https://github.com/selsa-inube/design-system/pull/28) ([@wfercanas](https://github.com/wfercanas))
- chore: tweak dummy button to test chromatic ci [#26](https://github.com/selsa-inube/design-system/pull/26) ([@wfercanas](https://github.com/wfercanas))
- ci: gh-actions for chromatic [#24](https://github.com/selsa-inube/design-system/pull/24) ([@wfercanas](https://github.com/wfercanas))
- 21 install chromatic [#22](https://github.com/selsa-inube/design-system/pull/22) ([@wfercanas](https://github.com/wfercanas))
- feat: first dummy component [#20](https://github.com/selsa-inube/design-system/pull/20) ([@wfercanas](https://github.com/wfercanas))
- feat: install styled-components [#19](https://github.com/selsa-inube/design-system/pull/19) ([@wfercanas](https://github.com/wfercanas))
- feat: commitlint [#15](https://github.com/selsa-inube/design-system/pull/15) ([@wfercanas](https://github.com/wfercanas))
- ref: move eslint config from package.json to eslintrc.json [#14](https://github.com/selsa-inube/design-system/pull/14) ([@wfercanas](https://github.com/wfercanas))
- install: storybook [#12](https://github.com/selsa-inube/design-system/pull/12) ([@wfercanas](https://github.com/wfercanas))
- feat: eslint in pre-commit [#10](https://github.com/selsa-inube/design-system/pull/10) ([@wfercanas](https://github.com/wfercanas))
- install: husky and lint-staged [#8](https://github.com/selsa-inube/design-system/pull/8) ([@wfercanas](https://github.com/wfercanas))

#### ⚠️ Pushed to `main`

- ci: install auto for auto release management ([@wfercanas](https://github.com/wfercanas))
- chore: ignore .env files ([@wfercanas](https://github.com/wfercanas))
- chore: run npm init and organize package.json file ([@wfercanas](https://github.com/wfercanas))
- build: edit build script and install @babel/preset-react ([@wfercanas](https://github.com/wfercanas))
- build: include BABEL_ENV===production ([@wfercanas](https://github.com/wfercanas))
- feat: index.js as entry point for exporting components ([@wfercanas](https://github.com/wfercanas))
- build: ignore dist/ versioning ([@wfercanas](https://github.com/wfercanas))
- build: babel preset for react-app ([@wfercanas](https://github.com/wfercanas))
- build: install @babel/cli and cross-env ([@wfercanas](https://github.com/wfercanas))
- install: prettier ([@wfercanas](https://github.com/wfercanas))
- install: create-react-app ([@wfercanas](https://github.com/wfercanas))

#### Authors: 1

- Fernando Cañas ([@wfercanas](https://github.com/wfercanas))
