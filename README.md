# Testing JavaScript In And Around WordPress: Part 2 Example Code

* [JavaScript Testing In And Around WordPress](https://shelob9.github.io/testing-javascript-in-and-around-wordpress)

## Development Quick Start

- Git clone:
    - `git clone git@github.com:shelob9/testing-react-wordpress.git`
- Install.
    - `yarn`
- Build JS/CSS
    - `yarn build`
- Start JS/CSS for development 
    - `yarn start`
- Test changed files
    - `yarn test --watch`
- Test all files once
    - `yarn test`
    - `yarn test --ci`
- Create an installable zip file of your plugin.
  - `yarn zip`

### To Add A New Entry Point

If you want to add additional entry points, for example if you want to add blocks or to have separate JavaScript/ CSS for the front-end, follow these steps:

- Choose a one word handle for the entry point
- Create a directory named for the handle.
- Add an index.js file to that directory
- Add the handle to the array `entryPoints` in webpack.config.js
- Run `yarn build`
- Check that `build/$handle.js` and `build/$handle.asset.php` where created.

## Local Development

- `docker-compose up -d`
- [http://localhost:8000/](http://localhost:8000/)

## Contributing

Please feel free to [open a pull request](https://github.com/shelob9/test-react-wordpress/pulls) if you would like to contribute.