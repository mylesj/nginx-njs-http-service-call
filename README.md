# nginx-njs-http-service-call

An example demonstrating how njs request handlers can interact with external services.

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
a `node` "ping-pong" service. The aim was to assess how `njs` can reliably 
integrate with other system components. This solution defines an internal 
route which an `njs` module can call, that reverse-proxies a web service. 
Note that:

-   `njs` cannot make arbitrary http requests itself, only locally defined 
    sub-requests
-   the `internal` directive can be used inside a `location` block to 
    signal that it not be exposed publicly
-   `subrequest()` does not understand `@named` routes

