<h1 align="center">Base App</h1>

A React-based frontend communicating via Socket.io with a Node-based backend that's listening to an Arduino through the Serial port

## Installation


```sh
// clone the repo
git clone git@github.com:ub3rb3457/baseApp.git
//install the backend
cd baseApp && npm install
//then install the frontend
cd client && npm install
//start the app
cd .. && npm run dev
```

⚠️ This is a proof of concept, for our purposes here you will need:

* A linux computer
* An Arduino (any variety) 
* A potentiometer (to simulate RPM)
* The patience of a Saint

You will need to customize the .env configuration files, there's one for each app:
* The REST API Server
* The Serial/Socket Server
* && The React Front-end

## Credits

* node
* react
* express
* [rest-api-nodejs-mongodb](https://github.com/maitraysuthar/rest-api-nodejs-mongodb)
* socket.io & socket.io-client
* serialport
* mongoose
* zustand
* @material-ui/core
* react-axios
* prop-types
* react-swipeable-views
* react-d3-speedometer
* recharts
* react-coverflow
* react-numeric-input
* notistack
* more to come...