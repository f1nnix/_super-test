# context bind inside Promise example

```
root@1c3772a8573c:/src# node -v
v4.1.1

root@1c3772a8573c:/src# node test.js

Unhandled rejection SyntaxError: 'super' keyword unexpected here

    at tryCatcher (/src/node_modules/bluebird/js/main/util.js:26:23)
    at Promise._settlePromiseFromHandler (/src/node_modules/bluebird/js/main/promise.js:507:31)
    at Promise._settlePromiseAt (/src/node_modules/bluebird/js/main/promise.js:581:18)
    at Promise._settlePromiseAtPostResolution (/src/node_modules/bluebird/js/main/promise.js:245:10)
    at Async._drainQueue (/src/node_modules/bluebird/js/main/async.js:128:12)
    at Async._drainQueues (/src/node_modules/bluebird/js/main/async.js:133:10)
    at Immediate.Async.drainQueues [as _onImmediate] (/src/node_modules/bluebird/js/main/async.js:15:14)
    at processImmediate [as _immediateCallback] (timers.js:374:17)
```
