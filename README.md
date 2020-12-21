# test-devops-page

## TODO

- setup qa and production in CircleCI

## Environment variables

- PORT - a port which the app listens on
- DATABASE_URL - the url of the database. Now we use PostgreSQL.

## How to start

Run ```node ./src/app.js```

The app listens on 0.0.0.0 ip.

## Database

To create a database you need

1. ```yarn db:create``` - to create the database
2. ```yarn db:migrate``` - to create tables
3. ```yarn db:seed``` - to fill the table by test data
