# Pre-reservation Component
> Proof of concept - React web component

## Quick Start
Install all dependencies
```sh
npm install
```
Build the webcomponent with direflow-scripts
```sh
npm run build
```

Make the web component available at http://localhost:3100/ using :
```sh
npm run serve
```

Implement your web component in any other application, like the following html document:


```html
<head>
    ...
    <script src='http://localhost:3100/main.js' async></script>
</head>
<body>
    ...
    <searchbar-component></searchbar-component>
</body>
```

## About
This component was bootstrapped with [Direflow](https://direflow.io).