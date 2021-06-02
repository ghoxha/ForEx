# Bootstraped React Website W/ Mongo DB
This is a simple money management tool to experiment with React. You only need to initialize a mongoDB instance and you're good to go.
## Setup
The only setup you need is to create a ``keys.js`` file in the ``config`` folder. The set up of the file looks like:
```
module.exports = {
  mongoURI: "",
  secretOrKey: "secret"
};
```
where the mongoURI is your mongoDB instance. I used mLAB to host my DB.
## Installation
In the ForEx folder, you will first need to run

```bash
npm install
```

Then after installation has finished, you will need to run

```bash
npm run client-install
```

To start node and react, run the command
```bash
npm run dev
```
This will get both of them running

