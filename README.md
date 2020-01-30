# sandbox-vue-qa-wolf
QA Wolf test sample repository with Vue.js.  
The following two tests are run in QA Wolf.

**1. show fullname**
![Jan-29-2020 07-37-47](https://user-images.githubusercontent.com/11070996/73428011-63a4bb00-437b-11ea-964f-304a51ec652a.gif)

**2. add messages**
![Jan-29-2020 07-37-56](https://user-images.githubusercontent.com/11070996/73428010-630c2480-437b-11ea-98cb-c9b8ef4bfa51.gif)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Create QA Wolf test
After local server start.

```
npx create test http://localhost:8080 sample
```

### Run QA Wolf test

```
npx qawolf test
```
