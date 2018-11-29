
# Result of async and sync

# 1. work async first then sync
Server started! 1234
Server started! 2000
memory used async
rss 18.77 MB
heapTotal 5.7 MB
heapUsed 3.55 MB
external 0.01 MB
memory used async
rss 25.32 MB
heapTotal 6.2 MB
heapUsed 4 MB
external 6.26 MB
memory used sync
rss 50.14 MB
heapTotal 18.6 MB
heapUsed 16.74 MB
external 18.63 MB
memory used sync
rss 68.73 MB
heapTotal 31 MB
heapUsed 29.14 MB
external 24.82 MB

# 2. work sync first then async
Server started! 1234
Server started! 2000
memory used sync
rss 37.47 MB
heapTotal 18.1 MB
heapUsed 15.92 MB
external 6.2 MB
memory used sync
rss 50.88 MB
heapTotal 32 MB
heapUsed 28.39 MB
external 6.2 MB
memory used async
rss 51.03 MB
heapTotal 32 MB
heapUsed 28.45 MB
external 6.2 MB
memory used async
rss 57.15 MB
heapTotal 32 MB
heapUsed 28.81 MB
external 12.45 MB