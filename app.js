import express from 'express'
import Amadeus from 'amadeus'
import bodyParser from 'body-parser'
import cors from 'cors'

const amadeus = new Amadeus({
	clientId: '', //type your credentials\
	clientSecret: '', //type your credentials
})

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use(
	cors({
		origin: 'http://localhost:4200',
	})
)

app.get(`/city-and-airport-search/:parameter`, (req, res) => {
	const parameter = req.params.parameter
	amadeus.referenceData.locations
		.get({
			keyword: parameter,
			subType: Amadeus.location.any,
		})
		.then(function (response) {
			res.send(response.result)
		})
		.catch(function (response) {
			res.send(response)
		})
})

app.get(`/flight-search`, (req, res) => {
	const originCode = req.query.originCode
	const destinationCode = req.query.destinationCode
	const dateOfDeparture = req.query.dateOfDeparture

	amadeus.shopping.flightOffersSearch
		.get({
			originLocationCode: originCode,
			destinationLocationCode: destinationCode,
			departureDate: dateOfDeparture,
			adults: '1',
			max: '6',
		})
		.then(function (response) {
			res.send(response.result)
		})
		.catch(function (response) {
			res.send(response)
		})
})

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`))
