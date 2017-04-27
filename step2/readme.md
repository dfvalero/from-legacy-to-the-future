# From Legacy to the Future - Webpack

## 2.1 Webpack Configuration - First Steps

- Adding webpack
```
npm install webpack --save-dev
```
- Creating Webpack Configuration
```
npm install jquery --save
```
- NPM Scripts
- Module exports (validator.js)
- Build
```
npm run build-21
```

## 2.2 CSS and Loaders

- Add CSS Loaders
```
npm install css-loader style-loader --save-dev
```
- Move inline style to a file
```
npm install extract-text-webpack-plugin --save-dev
```
- Create app file, install dependencies (normalize.css) and import it
```
npm install --save normalize.css
```
- Build
```
npm run build-22
```
## 2.3 Global code to Scoped Code
- Talk about REM Pattern, and rem units (change body font-size to see the example).
- Move CSS to components.
- Changing CSS convention breaks Javascript, talk about that.
- Move Javascript to components (Same CSS components).
    - Explain how hard is to deal with events.
    - Need of a Bus to talk between components.
    ```
    npm install event-emitter --save
    ```
    - Nothing is reactive, you have to create all the reactivity.
    - Components are scoped but not clear (DOM manipulation and business logic mixed).