# Welcome



Smoothee is a tiny but powerful open-source label and artist credition platform made with Node.js, MongoDB, Google Cloud, and hosted on Microsoft Azure. 

## Features

* Sign in using local authentication, Instagram or Google.
* Search for your other users.
* Chat with your friends in realtime.
* Like and comment on a feed.
* API for developers
* View your/others profile.
* Follow a particular artist and get notified for his/her activities.
* Change your profile picture, bio, people who follow you etc.
* Find people with similar music taste thanks to TensorFlow Magenta

And a lot more to be added soon...

## To Do's

* Activity feature for user to see follow requests and his/her daily activity.
* Notifications

## Requirements

* [Node.js](https://nodejs.org)  
  * expressjs [ExpressJS HTTP middleware](https://npmjs.org/package/express)
  * ejs [Embedded JavaScript templates](https://npmjs.org/package/ejs)        
* [MongoDB](http://mongodb.org)

## Installation

Clone the repo locally then install all the dependencies using [NPM](https://npmjs.org/)

```bash
$ download or clone this repo
$ cd spruce-master
$ npm i
```

Before running, we need to add the Instgram and Google API Credentials to the project. Under the `config` directory of the repo, you will find `instagram.js` and `google.js`. We need to add the `<CLIENT_ID>`, `<CLIENT_SECRET>` and `<host>:<port>` with our own API credentials

```javascript
/** REPLACE YOUR API CREDENTIALS HERE **/
var in_client_id = 'XXXXXXXXXXXXXXXXXX', // <CLIENT_ID>
    in_client_secret = 'XXXXXXXXXXXXXXXXXXXX', // <CLIENT_SECRET>
```

Now Replace the `<host>` & `<port>` with the redirect uri specified in the [Instagram API Dashboard](https://www.instagram.com/developer) and [Google API Dashboard](https://developers.google.com). Default is `http://localhost:80/account/oauth`.

```javascript
var in_redirect_uri = 'http://localhost:80/account/oauth/:service'
```

Finally start the MongoDB server in a seperate bash

```bash
$ mongod
```

and then start the spruce server via `npm`.

```bash
$ npm start
```