export default {
    testServiceCall: (res) => {
        res.subrequest(
            '/internal/node-service/ping',
            {
                method: 'GET',
            },
            (serviceRes) => {
                Object.assign(res.headersOut, {
                    'Content-Type': 'text/plain',
                })

                serviceRes.status === 200
                    ? res.return(
                          200,
                          `Requested "ping", got "${serviceRes.responseBody}".`
                      )
                    : res.return(500)
            }
        )
    },
}
