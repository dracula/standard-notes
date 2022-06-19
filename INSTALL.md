### [Standard Notes](https://standardnotes.com/)

#### Install manually

1. Preferences → General → Advanced Settings → Install: `https://cdn.jsdelivr.net/gh/dracula/standard-notes@master/ext.json`

2. Activate the theme!

3. Boom! It's working

#### Running locally

##### Serving

```
npm install
node devServer.js
```

Extension link will be available at `http://localhost:8080/ext.json` for use with installation step #1.

##### Making changes

1. Run `grunt watch`
2. Edit `src/main.scss`
3. Reload Standard Notes

##### Bundling changes

1. Run `grunt`
2. Compiled results will be outputted to the `dist` directory.
