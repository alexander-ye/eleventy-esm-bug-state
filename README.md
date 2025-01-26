# eleventy-esm-bug-state
Snapshot of an eleventy website with an ESM bug. Snapshot is of a website built following the [Learn Eleventy](https://learn-eleventy.pages.dev/) tutorial up to [Lesson 8](https://learn-eleventy.pages.dev/lesson/8/).


### Node versions
Same results with node versions `20.17`, `22.13.1`, `23.6.0`.
(managed with `nvm`).

### Error messages
```
[11ty] Eleventy Error (CLI):
[11ty] 1. Error in your Eleventy config file '.eleventy.js'. You may need to run `npm install`. (via EleventyConfigError)
[11ty] 2. Cannot find module '.../eleventy-esm-bug-state/src/utils/sort-by-display-order' imported from .../eleventy-esm-bug-state/.eleventy.js
[11ty] Did you mean to import ../src/utils/sort-by-display-order.js?
[11ty] 
[11ty] Original error stack trace: Error [ERR_MODULE_NOT_FOUND]: Cannot find module '.../eleventy-esm-bug-state/src/utils/sort-by-display-order' imported from .../eleventy-esm-bug-state/.eleventy.js
[11ty] Did you mean to import ../src/utils/sort-by-display-order.js?
[11ty]     at new NodeError (node:internal/errors:405:5)
[11ty]     at finalizeResolution (node:internal/modules/esm/resolve:327:11)
[11ty]     at moduleResolve (node:internal/modules/esm/resolve:980:10)
[11ty]     at defaultResolve (node:internal/modules/esm/resolve:1206:11)
[11ty]     at nextResolve (node:internal/modules/esm/hooks:864:28)
[11ty]     at resolve (file://.../eleventy-esm-bug-state/node_modules/@11ty/eleventy/src/Util/EsmResolver.js:47:9)
[11ty]     at nextResolve (node:internal/modules/esm/hooks:864:28)
[11ty]     at Hooks.resolve (node:internal/modules/esm/hooks:302:30)
[11ty]     at handleMessage (node:internal/modules/esm/worker:196:24)
[11ty]     at Immediate.checkForMessages [as _onImmediate] (node:internal/modules/esm/worker:138:28)
```

If you change your import to the one recommended with "Did you mean to import" (looking at the file structure, it doesn't really make sense to), you see a similar error message:

```
[11ty] Eleventy Error (CLI):
[11ty] 1. Error in your Eleventy config file '.eleventy.js'. You may need to run `npm install`. (via EleventyConfigError)
[11ty] 2. Cannot find module '.../src/utils/sort-by-display-order.js' imported from .../eleventy-esm-bug-state/.eleventy.js
[11ty] 
[11ty] Original error stack trace: Error [ERR_MODULE_NOT_FOUND]: Cannot find module '.../src/utils/sort-by-display-order.js' imported from .../eleventy-esm-bug-state/.eleventy.js
[11ty]     at new NodeError (node:internal/errors:405:5)
[11ty]     at finalizeResolution (node:internal/modules/esm/resolve:327:11)
[11ty]     at moduleResolve (node:internal/modules/esm/resolve:980:10)
[11ty]     at defaultResolve (node:internal/modules/esm/resolve:1206:11)
[11ty]     at nextResolve (node:internal/modules/esm/hooks:864:28)
[11ty]     at resolve (file://.../eleventy-esm-bug-state/node_modules/@11ty/eleventy/src/Util/EsmResolver.js:47:9)
[11ty]     at nextResolve (node:internal/modules/esm/hooks:864:28)
[11ty]     at Hooks.resolve (node:internal/modules/esm/hooks:302:30)
[11ty]     at handleMessage (node:internal/modules/esm/worker:196:24)
[11ty]     at Immediate.checkForMessages (node:internal/modules/esm/worker:138:28)

```