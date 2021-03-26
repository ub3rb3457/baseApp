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

You will need to change the variables at the top of server.js [server port, serial port & baud rate] - to suit your needs. 

If you choose to use a different port you must also change the ENDPOINT constant in the RPMGauge component located at client/src/components/RPMGauge.js

## Credits

* node
* react
* express
* socket.io & socket.io-client
* serialport
* @material-ui/core
* prop-types
* react-swipeable-views
* react-d3-speedometer
* recharts
* react-coverflow
* react-numeric-input
* more to come...