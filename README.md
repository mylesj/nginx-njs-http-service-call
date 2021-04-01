# nginx-njs-internal-service-call

An experiment to evaluate how `njs` request handlers can interact with API
outwith their own context.

## Prerequisites

-   docker
-   docker-compose

## Start

```sh
PORT=80 docker-compose up
```

-   `PORT` defaults to `80` if unspecified
-   View [localhost/test](http://localhost/test) in a browser

## Overview

This project consists of two containers, a client-facing `nginx` server and
an internal `node` "ping-pong" service. The aim was to assess how `njs` can
reliably integrate with other system components. This solutions defines an
internal route which an `njs` module can call, that reverse-proxies the
web service. Note that:

-   `njs` cannot make remote requests, only local sub-requests
    (local routes can still proxy remote services however)
-   the `internal` directive can be used inside a `location` block to signal
    that it not be exposed externally
-   `subrequest()` does not understand `@named` routes
