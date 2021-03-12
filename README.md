# js_code_challange_marek-firlejczyk
## Requirements

- Node.js (v12.X.X or newer)
- Yarn (v1.X.X)

## Used technologies, tools, methods

- [vue.js 3 with composition api](https://v3.vuejs.org/guide/composition-api-introduction.html)
- typescript
- jest
- [tailwind](https://tailwindcss.com/docs)
- [vite](https://vitejs.dev/)
- [conventional commits](https://highlab.pl/conventional-commits/)
- prettier
- eslint
  
## Local development

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# format codebase
$ yarn format
```

## Test
```
$ yarn test
```

## Production deployment
Client side rendering is default option in vite(https://vitejs.dev/guide/build.html). SSR is possible if needed. 

To preview application in production mode
```
$ yarn serve:production
```

##TODO
- Add CI/CD (github actions)
- Add commitlint
- Add stylelint
- Add E2E tests (Cypress)
- Add components documentation (Storybook)
- Add multiple languages support (translations)
- Add router
