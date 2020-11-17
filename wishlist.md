1. Somewhat elegant query invalidation
2. Access to request meta (headers, etc) in the backend function. Preferably as a last parameter
3. Fast bootup? First determine if this truly is one of the major bottlenecks on Android. If it needs to be fixed, mayybe fix with an async cache or maybe an intelligent cache that only stores one version of the same object
