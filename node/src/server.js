const http = require('http')

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/ping':
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end('pong')
            break

        default:
            res.writeHead(404)
            res.end()
    }
})

if (!process.env.NODE_SERVICE_PORT) {
    throw new Error('unspecified env: NODE_PORT')
}

server.listen(process.env.NODE_SERVICE_PORT)
process.on('SIGTERM', () => process.exit())

console.log(`node service listening on port ${process.env.NODE_SERVICE_PORT}`)
