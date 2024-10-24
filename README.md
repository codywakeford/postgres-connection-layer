# PostgreSQL Database Connection Layer

This layer will provide a connection to PostgreSQL for the rest of the service layers project.

### Getting started

All you need to do is provide the PostgreSQL connection details file in your .env as shown below:

```ts
PG_URI = "postgres=<username>:<password>@<host>:<port>/<database>"

// or

PG_HOST = "localhost"
PG_PORT = 5432
PG_USERNAME = "postgres"
PG_PASSWORD = "postgres"
PG_DATABASE = "postgres"
```

This path should be relative to <?>
