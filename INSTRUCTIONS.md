#### Homework
* Create a REST API that stores, displays and manages information about various Avengers
  * `npm install` and `require()` needed modules `express` and `body-parser`
  * Initalize an object to store Avengers data
  * Initalize express `app` and `listen` to port `8080`
  * Expose a `PUT` endpoint that injects body data (`req.body`) into Avengers storage
  * Expose a `GET` endpoint that returns data about a given Avenger from storage
  * Expose a `POST` endpoint that alters existing Avenger storage
  * Expose a `DELETE` endpoint that removes an Avenger from storage

* Bonus 1: add checks to ensure data exists (or doesn't) prior to request execution
  * return a `400` if data does not exist when it's supposed to

* Bonus 2: create methods in separate `avengers.js` file to manipulate data
  * separation of concern between express routes and avengers storage