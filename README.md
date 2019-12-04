# Bankifi Tech Test

This is a single page application builti with Reactjs. It is a search engine app, which makes RESTful GET requests to the Marvel Developer API https://developer.marvel.com/. You can search for either characters or creators. Requests are paginated and display is reponsive.

## Getting Started

The instructions below will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this locally you will need Node.js and git installated on your system.

First check if you have node.js installed with below command:

```bash
node -v
```

If you do not have Node.js installed or command above does not work please follow the instructions on this guide: https://nodejs.org/en/download/package-manager/

Finally, check if git is installed on your machine enter the following command on your terminal:

```bash
git --version
```

You will also require an API key from the Marvel Developer Portal, https://developer.marvel.com/account. In order to keep it private, create a .env file at the root of your application in which to store it, and then add this file to .gitignore before making public.

If you do not have git installed on your machine please follow this guide.

### Installation/Running local version

Now that the prerequisites have been installed you can now install and run this application.

First you will need to clone this repo, to do so use the command line to navigate to your preferred directory on your local machine and enter the following command on the terminal:

```bash
git clone https://github.com/hynesy23/bankifi-test.git
```

Navigate inside the folder and install all dependencies by entering the following commands on your terminal window:

```bash
cd bankifi-test

npm install
```

Finally to run the webapp enter the following command in your terminal window:

```
npm start
```

This will run the server on port 3000 and open the webpage in your browser or you can navigate to http://localhost:3000 in your browser manually.

Should you wish to run tests, stop the app from running, and enter the following command:

```
npm test
```

### Using the site

On loading the web app you are greeted with a short welcome message, and asked to press Continue to move on. Next, you are asked to select if you would like to search for creators or characters.

After this, you are presented with a search field where you can type a name to search for. Should the search bring back more than 20 results, you are able to click to the next page of results using buttons at the bottom of the page.

Should you wish to return to the Welcome page at any time, there is a Return button on the bottom of each page.

### Built with

- Runtime environment: Node.js
- React bootstrap: Create React App
- HTTP client: axios
- React Routing: reach/router
- Majority of styling: Materialize CSS

## Author

Cillian Hynes

## Contributing

This project is a portfolio piece and is not accepting contributions.

## Acknowledgments

This website was created as part of a technical test for Bankifi. All content is part of Marvel Comics

https://developer.marvel.com/
