# Saffron | News &amp; announcements aggregation framework.

## Table of contents
* [What is Saffron](#what-is-saffron)
* [Architecture](#architecture)
* [Installation](#installation)
* [Initialization](#initialization)
* [Configuration](#configuration)
* [Collaborators](#collaborators)


## What is Saffron?
* Saffron stands for **S**imple **A**bstract **F**ramework **F**or the **R**etrieval **O**f **N**ews

As said saffron is a framework. It is an abstraction engine that helps you collect news and
announcements from websites in a uniform way.

It supports different ways of data collection, such as API endpoints and web-scraping.
It tries to ease the process of integrating all data sources, by abstracting data collection into a few simple
and powerful functions.

## Architecture

Saffron's architecture is based on a `main` node that issues scraping instructions and several `worker` nodes
that do the scraping & upload the data to the database.

The communication between the nodes is happening through the `Grid`. The grid will generate events to communicate
with other classes. Saffron supports remote nodes by using [`socket.io`](https://socket.io) server and clients
as a middleware to connect to the `main` node.

## Installation

To install the latest release:
```shell
npm install @poiw/saffron
```
To install a specific version:
```shell
npm install @poiw/saffron@version
```

## Initialization

Once you have installed the library and created your [configuration](./docs/configuration.md):

```ts
import Saffron from "@poiw/saffron";

const saffron = new Saffron();

// Initialize saffron
saffron.initialize({ /* configuration */})

// Start sheduler and workers.
saffron.start();
```

## Configuration

Read the [configuration](./docs/configuration.md) file for more information.











For more information visit our [docs](https://saffron.poiw.org).

## Collaborators
<img src="https://unistudents.gr/wp-content/uploads/2020/09/logo2-1024x341-1.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="200"  alt="UniStudents"/>
