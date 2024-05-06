# Fetch API with async/await
Fetch API is an asynchronous web API that comes with native JavaScript, and it returns the data in the form of promises.

###  fetch()
The Fetch API accesses resources across the network. You can make HTTP requests (using GET, POST and other methods), download, and upload files.

| To start a request, call the special function fetch():
```typescript
const response = await fetch(resource, [options]);
```
which accepts 2 arguments:
* resource: the *URL string*, or a *Request object.*
* options: the *configuration object with properties* like **method, headers, body, credentials**, and more.

| let's make a request to fetch tutorials:
```typescript
async function fetchMovies() {
  const response = await fetch('/tutorials');
  // waits until the request completes...
  console.log(response);
}
```

### Fetching JSON
* The `response` object, returned by the `await fetch()`, is a generic placeholder for multiple data formats.

* The Response object offers a lot of [useful methods](https://rapidapi.com/guides/fetch-api-async-await#extracting-data) (all returning promises) like: `response.json()` , `response.text()` , `response.formData()` , `response.blob()` , `response.arrayBuffer()`.

* `response.json()` is a method of the **Response object** that allows a JSON object to be extracted from the response. The method returns a *promise*, so you have to wait for the JSON: `await response.json()`.

| you can extract the JSON object from a fetch response:
```typescript
async function fetchtutorialsJSON() {
  const response = await fetch('/tutorials');
  const tutorials = await response.json();
  return tutorials;
}

fetchtutorialsJSON().then(tutorials => {
  tutorials; // fetched tutorials
});
```

### Handling fetch errors
* `fetch()` doesn't throw an error when the server returns a bad HTTP status, e.g. client errors (`400–499`) or server errors (`500–599`).

| let's access a non-existing page '/oops' on the server. As expected, such request ends in a `404` response status:
```typescript
async function fetchMovies404() {
  const response = await fetch('/oops');
  
  response.ok;     // => false
  response.status; // => 404

  const text = await response.text();
  return text;
};
```

* `response.ok` property lets you distinguish good from bad HTTP response statuses. The property is set to true only if the response has status `200-299`.

* To throw an error on a bad HTTP status (outside of the range `200-299`), check the value of `response.ok` property and throw an error manually:
```ts
async function fetchMoviesBadStatus() {
  const response = await fetch('/oops');

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const movies = await response.json();
  return movies;
};
```

### Summary
* Calling `fetch()` starts a request and returns a promise. When the request completes, the promise resolves to the response object. From the response object you can extract data in the format you need: JSON, raw text, Blob.

* Because `fetch()` returns a promise, you can simplify the code by using the `async/await` syntax: `response = await fetch()`.

* If you need to [cancel a `fetch()` request](https://dmitripavlutin.com/javascript-fetch-async-await/#4-canceling-a-fetch-request), then you need to connect the request with an abort controller.
