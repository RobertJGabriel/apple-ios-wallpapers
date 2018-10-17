
# iOs wallpaper

## About

A vue app that allows you to browse all past ios wallpapers. iOs 1 - 12



## Getting Started

```sh

# Install

npm i

# Build
npm run dev

# Transform updated source written by ES2015 (default option)
gulp babel

# or Using watch to update source continuously

# Make a production version 
npm run build
```

## Add  a new image.

Create a pr and add it to the folder under app/images/

## build tasks

### Babel

The generator supports ES 2015 syntax through babel transforming. You may have a source files in `script.babel` if your project has been generated without `--no-babel` options. While developing, When those of source has been changed, `gulp babel` should be run before test and run a extension on Chrome.

```sh
npm run build
```

### Build and Package

It will build your app as a result you can have a distribution version of the app in `dist`. Run this command to build your Chrome Extension app.

```bash
npm run  build
```


## Options

* `--no-babel`

  If you wouldn't use [Babel](https://babeljs.io/) ES2015 transpiler.

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after
  scaffolding has finished.

* `--test-framework=[framework]`

  Defaults to `mocha`. Can be switched for
  another supported testing framework like `jasmine`.

* `--sass`

  Add support for [Sass](http://sass-lang.com/libsass).

* `--all-permissions`

  All of permissions of chrome extension will be shown.

