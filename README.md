# Newsletter-Login-App
# Express.js Mailchimp Mailing List Signup

This is a simple Express.js application that allows users to sign up for a mailing list using a web form. The application integrates with the Mailchimp API to add new subscribers to a specified mailing list.

## Features

- Serving static files, such as HTML, CSS, and client-side JavaScript.
- Parsing form data using the body-parser middleware.
- Handling GET and POST requests to the root ("/") route.
- On a GET request to the root route, the server sends the signup.html file to the client.
- On a POST request to the root route, the server processes the form data, constructs a JSON payload, and sends a request to the Mailchimp API.
- The Mailchimp API request includes the subscriber's first name, last name, and email address.
- If the Mailchimp API request is successful (status code 200), the server sends the success.html file to the client. Otherwise, the failure.html file is sent.
- The server also handles a POST request to the /failure route, which redirects the user back to the root route ("/").

## Dependencies

- express: Web framework for handling HTTP requests and routes.
- body-parser: Middleware for parsing incoming request bodies.
- request: Simplified HTTP client for making requests to the Mailchimp API.
- https: Built-in Node.js module for making HTTPS requests.

## Usage

1. Clone the repository: `git clone <repository-url>`
2. Install the dependencies: `npm install`
3. Add your Mailchimp API key and list ID to the appropriate variables in the code.
4. Start the server: `node app.js`
5. Access the application in your web browser at: `http://localhost:3000`

Please note that you need to provide your own Mailchimp API key and list ID to use this application successfully.

## License

This project is licensed under the [MIT License](LICENSE).

