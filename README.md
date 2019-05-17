# vue-pwa-workbox

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles, minifies and serves for production
```
yarn build
yarn serve
```

## Requirements
- `http-server`: to serve production server
- choose PWA support from `vue create` menu
- `@vue/cli-plugin-pwa` &rarr; automatically adds `workbox`

## Caveats
- for see it in work, use production mode
- when accessing it on browser, must use `incognito` mode. otherwise it'll mangle all caches, as many dev apps use localhost.