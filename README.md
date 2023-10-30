# Weather APP
This is a weather app that let the user find the local weather via geolocalization or any other city weather/forecast through a search bar

## Preview
![Screenshot 2023-10-30 at 02 33 17](https://github.com/ehelgueroc/weatherapp/assets/10067295/b1d535a9-9348-444f-9162-f90dad506fcd)

## Stack
- **Frontend:**
  - ReactJS, Vite, Typescript, Tailwind, Jest, React Testing library
- **Backend:**
  - NestJS, Typescript
 
## Run the app

## Configure
You need to create an .env file on the client and API folders
**API**
- PORT=3000
- OPENWEATHER_API_KEY= key generated on [openweather page](https://openweathermap.org/api)
- OPENWEATHER_API_BASE_URL=https://api.openweathermap.org

**Client**
- VITE_WEATHER_API_URL: http://localhost:3000
     
### Docker
1. Check you have Docker on your machine
2. Clone the repository
3. In you terminal go to the root folder of the cloned repository
4. Create a .env file inside of each client and api folder
5. You are going to find .env.example to know which keys to add
6. Run `docker-compose up --build`
7. Docker will build the containers, may take a moment
8. When it finishe, client and API should be running
9. Then you can access the client app throught http://localhost:5173

### Run without Docker
1. Check you have Node 18.18.0 or greater on your machine
2. Clone the repository
3. In the terminal go to the root folder
4. Create same .env files as in fifth step on previous steps for Docker
5. Go to the client folder and run `npm install`
6. Then run `npm run dev`
7. Then go to the api folder and run `npm install`
8. Then run `npm run start:dev`
9. This should get both client and api running
10. You can access it on http://localhost:5173
