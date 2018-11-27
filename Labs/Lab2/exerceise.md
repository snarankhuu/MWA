1. Explain why do we want sometimes to use  setImmediate instead of using setTimeout?
    setTimeout - doens't matter about priority we can use it
    setImmediate - in Event loop we need to execute after I/O callbacks or incoming connections,datas
2. Explain the difference between process.nextTick and setImmediate?
    process.nextTick - right after current operation ends(blocking)
    setImmediate - runs in the check phase of the event loop (non-blocking)
3. Name 10 core modules that Node provides by default.
os
fs
dns
buffer
http
url
util
querystring
path
v8
crypto
events
timers
zlib