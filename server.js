const jsonServer = require('json-server')
const cors = require('cors')

const router = jsonServer.router('db.json')
const port = process.env.PORT || 5000
const app = jsonServer.create()

app.use(cors())
app.use(router)

app.listen(port, () => {
    console.log(`Running in http://localhost:${port}`)
})