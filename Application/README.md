
<h1 text="center">haveyouheardthis?</h1>

### Tools used

- React
- TailwindCSS
- Nodejs (for Auth Server) 

### How to run

- Fork and Clone this repository
- Go to [Spotify Developer Dashboard](/developer.spotify.com/dashboard/applications) and create an application
- Generate ClientID and Client Secret for the application.
- Update ENV for Server (checkout .env.sample) and src/constants in Client with your information
- Install dependencies for server and client individually, using `npm install`
- Cd into server and run `node server.js`
- Cd into client and run `npm run start`