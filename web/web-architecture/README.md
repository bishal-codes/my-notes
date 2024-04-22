## Web Architecture

1. Tier Architecture

Single Tier Architecture: Here the client, server, and database all are on the same machine.

(client, server, database) ----> app

2. Two Tier Architecture

In this architecture, the application logic is separated from the database. The client communicates with the server, and the server communicates with the database.

User ----> client ---- (request: API) ----> server
user <---- client <---- (response: API) <---- server

3. Three Tier Architecture

- n-tier architecture
- as many servers as needed
- separation of concerns (SoC) principle
- scalability
- maintainability
- security

In this architecture, the client communicates with the server, and the server communicates with the database. The server is separated from the database.

User ----> client (browser) ---- (request: API) ----> RESPONSIBLE server ---- (request: API) ----> server ----> database
user <---- client (browser) <---- (response: API) <----- server <---- (response: API) <---- server <---- database
