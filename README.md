PWA Text Editor
Table of Contents
Overview
Access
Installation
How to Use

Overview
The objective of this project was to develop a text editor that adheres to Progressive Web App (PWA) standards. This single-page application is capable of running in a web browser, even without an internet connection.

User Story
css
Copy code
As a developer, I want to create and store notes or code snippets, whether I have an internet connection or not, so that I can reliably access them later.
Tools and Technologies Utilized
For the creation of this application, the following tools and technologies were employed:

IndexedDB (utilizing the idb package) as the database
Webpack for bundling the front-end code
Workbox to generate a service worker responsible for caching static assets
Additionally, Heroku was utilized for deployment.

Application Screenshot
[Screenshot application](./assets/images/screenshoapplication.png)

Installation
To install the required dependencies, execute the following command:

Copy code
npm install
How to Use
To utilize the application from the command line (after installing dependencies), follow these steps:

Launch your terminal or bash and navigate to the root directory of the repository.
Bundle the front-end code by executing npm run build in the command line.
Initiate the server by entering npm run start in the command line.
Access the application via the port on your local host.
Click the "Install" button.