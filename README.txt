INSTALLATION

In the ForEx folder, you will first need to run 

npm install 

then after it has finished, you will need to run 

npm run client-install

To start node and react, run the command

npm run dev

This will get both of them up and running.

DOCUMENTATION/NOTES
For database management, I used MongoDB, and I used Mongoose to create schemas for my models for easier access and manipulation.

I used an online storage, MLAB. the credentials to log in are 
username: javajerry
password: Gerald12
https://mlab.com/home

I utilized express for my backend api to help establish links between my models,apis, and the server. I used PostMan to do some backend testing, most notably to check the GET, POST and DELETE requests. There are a few requests that I have not completed yet.

I used passport to pass around JWT for access to protected routes, adding some authorization protocol to the web app.
The relevant database is inside the ForExDB. 

I have created two users you can log in with. You can also use the register page to make your own account.

User that has a portfolio initalized and a few features loaded:
Username: ghoxha 
Password: 123456

User that has portfolio initalized but nothing added
Username: jdoe
Password: 123456

On the front end side, I used a combination of React and Redux for state management. I designed the main page using some basic HTML and CSS styling. I used Redux for state management for my users and portfolios, along with my login and registration forms.

I utilized a few reducers, for authentication, errors, and my portfolios.

Once you have reached the dashboard, you can see the three options for currency, cryptocurrency, and stock. Clicking on them will open up a form that a user can fill out, to enter what they have and how much of it. These will be bounced back to the MongoDB server where the portfolios are stored. 

Under this is the current currency rate. I utilized the Alpha Vantage API to run calculations for current currency rates for the 4 biggest currencies. More currencies can easily be added.

I have not been able to complete the conversion of money from one currency type to another. Inside the Currency.js file, I laid out the plan of what I would do to complete it. To summarize it, I would need to implement the addition and subtraction of wealth, add the crypto and stock options by utilizing alpha vantage's api, and some more bug testing. 




