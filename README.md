### Local Development

To start the local development server, run the following commands:

npm run start

npm run start:css

node server/index.js

If you edit the server/index.ts, you will need to run the typescript compiler on that as well

tsc server/index.ts

or 

tsc server/index.ts --watch

### Building and Deploying

First, change the fetch route in src/App.tsx to /weather instead of localhost:5000

Run the following commands to build the project:

npm run build

npm run build:css

Finally, run node server/index.js to deploy