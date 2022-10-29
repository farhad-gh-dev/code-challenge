![project screenshot](https://github.com/farhad-gh-dev/code-challenge/blob/main/public/project-screenshot.jpg)

This project was a coding challenge.

## Start Guide

First, install the dependencies:

```bash
npm run install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech stack

Next JS, Typescript, Material UI

## Project Folder Structure

- In order to scale the application in the easiest and most maintainable way, I keep most of the code inside the features folder, which should contain different feature-based things. The idea is that you should be able to add or remove a feature and all of it's specific dependencies in a folder in features directory. a feature will contain everything form api calls to sub-components(the ones only used for this feature) and local hooks. This will allow you to keep functionalities scoped to a feature and not mix its declarations with shared things.
- In the other hand we have components directory which we put our shared components and layouts inside of.
- Same idea with api, hooks, contexts and types
- In Style directory we have our global styles and themes.

This was inspired by bulletproof-react repo in github.

    .
    ├─── public
    │   ├─── fonts
    │   └─── locales
    │       └─── [language-code]    -> Related translation file for current language can be detected by i18n
    │           └─── common.json
    └─── src
        ├─── api
        ├─── components
        ├─── contexts
        ├─── features
        ├─── hooks
        ├─── pages
        ├─── styles
        └─── types

## Thing That I Wanted To Add But DID NOT Have Enough Time For

- TEST! Usually there is a directory inside components and features for writing unit and integration tests. I also use cypress for e2e tests.
- I have experience with multi-language applications so i tried to add json files for each language. I did every step in i18n documentation for next.js and the setup is there! but for some reason the translation hook can not access the translations. :(
- I believe state management and data fetching are two different concerns and love the approach of react-query and Redux RTK query on this subject. If I had more time i would like to add redux and on of the mentioned libraries to manage global state and effects in this app.
