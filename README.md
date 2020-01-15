# Cobalt-Bot

## Microservice portion of Project Cobalt

| Project      | Link                                         |
| ------------ | -------------------------------------------- |
| Bot          | https://github.com/PolarizedIons/cobalt-bot  |
| Core         | https://github.com/PolarizedIons/cobalt-core |
| MicroService | https://github.com/PolarizedIons/cobalt-ms   |
| UI           | https://github.com/PolarizedIons/cobalt-ui   |

## Usage

This is the core microservice for the project. To use it, simply fill out the `.env` file (use `.env.example` as a template), or provide the appropriate environment variables and run via `yarn start`.

Output is in [pino](https://getpino.io/#/) format

## Environment Variables

| Variable       | Description                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------- |
| **NATS_URL**   | The [NATS](https://nats.io/) server to connect to for communication with the rest of the services. |
| **DB_URL**     | The MongoDB database to use                                                                        |
| **CMD_PREFIX** | The prefix messages should have to be considdered commands                                         |
