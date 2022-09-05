The design presented here is not the only possible implementation of a RPC service, but it has some important advantages:

If the RPC server is too slow, you can scale up by just running another one. Try running a second rpc_server.js in a new console.
On the client side, the RPC requires sending and receiving only one message. As a result the RPC client needs only one network round trip for a single RPC request.
Our code is still pretty simplistic and doesn't try to solve more complex (but important) problems, like:

- How should the client react if there are no servers running?
- Should a client have some kind of timeout for the RPC?
- If the server malfunctions and raises an exception, should it be forwarded to the client?
- Protecting against invalid incoming messages (eg checking bounds, type) before processing.

## Start server

```
node rpc_server.js
```

## Start client

    arg after node rpc_client.js is the number of fibonacci number to calculate

```
node rpc_client.js 10
```
