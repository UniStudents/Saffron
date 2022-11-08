# Listeners

## `start`
Called when starting saffron.

## `stop`
Called when stopping saffron.

## `scheduler.sources.new`
Called when all the sources are loaded.
Passes one argument, which is the source's names.

## `scheduler.job.new`
Called when the scheduler pushes a new source scrapping job at the stack.
Passes one argument, which is the job instance.

### `scheduler.job.finished`
Called when the scheduler finds a finished source scrapping job at the stack.
Passes one argument, which is the job instance.

### `scheduler.job.failed`
Called when the scheduler finds a failed source scrapping job at the stack.
Passes one argument, which is the job instance.

### `scheduler.job.reincarnate`
Called a little after [`scheduler.job.failed`](#schedulerjobfailed) event after the job has
been pushed back to the list.
Passes one argument, which is the job instance.

### `scheduler.job.worker.replace`
Called when replacing a worker for a specific job
Passes two argument, which is oldWorkerId and the job instance with the updated worker.

### `scheduler.job.push`
Called when the scheduler finds a job ready to run and pushes it to the workers.
Passes one argument, which is the job instance.

### `grid.connection.okay`
Called when grid is online, for `main` node when server is running and for `worker` node when
it connected to the server.

### `grid.node.connected`
Called when a new node is connected to the Grid.
Passes one argument, which is the socket instance.

### `grid.node.disconnected`
Called when a node disconnects from the Grid.
Passes one argument, which is the socket instance.

### `grid.worker.announced`
Called when a worker is available to take source scrapping jobs.
Passes one argument, which is the worker's id.

### `grid.worker.destroyed`
Called when a worker stops receiving source scrapping jobs.
Passes one argument, which is the worker's id.

### `grid.node.auth.failed`
Called when a `wroker` node tries to connect with invalid authentication token.
Passes one argument, which is the socket instance.

### `worker.job.finished`
Called when a worker finishes a job.
Passes one argument, which is the job's id.

### `worker.articles.found`
Called after [`worker.job.finished`](#workerjobfinished).
Passes two arguments, which is the articles that where found and the table name.

### `scheduler.sources.error`
Called when the scheduler failed to load a source file or reading the source file directory.
Passes two arguments, which is the source file and the error instance.

### `grid.connection.failed`
Called when the connection with the `main` node fails.
Passes one argument, which is the reason it failed.

### `worker.job.failed`
Called when a worker fails a job.
Passes one argument, which is the job's id.

### `worker.parsers.error`
Called when a parser fails a job.
Passes one argument, which is the error instance.

### `middleware.error`
Called when an unhandled error is thrown at a middleware function.
Passes two arguments, which is the middleware name and the error instance.

### `middleware.before`
Called before middlewares are applied.
Passes one argument, which is the articles array.

### `middleware.after`
Called after middlewares are applied.
Passes one argument, which is the modified articles array.

## Catch All
To catch all the events:

```javascript
saffron.on("*", (eventName, ...args) => {
    // ...
    console.log(args)
});
```