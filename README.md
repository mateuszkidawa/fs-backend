# Flight Searching Application - Backend Part
Wyszukiwarka lotów dostępną przez stronę WWW bazująca na Amadeus Self-Service API. \
Aplikacja webowa umożliwia znalezienie lotów po wprowadzeniu: \
lotniska wylotu, lotniska przylotu i daty podróży.

### Prepare back-end
0. Install Dependencies \
in: \
flight-searching\fs-backend\ \
run: \
npm install

1. Get & use credentials for Amadeus API \
https://developers.amadeus.com/register \
in:\
flight-searching\fs-backend\app.js \
set:\
clientId: '', //type your credentials\
clientSecret: '', //type your credentials

### Run server
in: \
flight-searching\fs-backend\ \
run: \
npm run start-server
