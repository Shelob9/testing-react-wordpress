# Testing JavaScript In And Around WordPress Part 2 Example Code


## Development

* Clone
   * `git clone git@github.com:Shelob9/isoblock.git && cd isoblock`
* Install
  * `yarn`
* Start
  * `yarn start`
* Build For Production
  * `yarn build`
* Run Unit Tests
  * `yarn test:unit`
  * Uses [`@wordpress/scripts`](https://www.npmjs.com/package/@wordpress/scripts#test-unit-js)
* Run e2e Tests
  * `yarn test:e2e`
  * Must insall local dev environment first.

## Local Development

A local development server is included. It requires Docker and Docker Compose and is 95% copypated from [WordPress core's local environment](https://github.com/WordPress/wordpress-develop/tree/master/tools/local-env)

* Start server and echo URL
  * `yarn start:env`
