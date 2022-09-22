globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash, joinURL } from 'ufo';
import { createStorage } from 'unstorage';
import { promises } from 'fs';
import { dirname, resolve } from 'pathe';
import { fileURLToPath } from 'url';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.req.url?.startsWith("/__nuxt_error");
  let html = !isErrorPage ? await $fetch(withQuery("/__nuxt_error", errorObject)).catch(() => null) : null;
  if (!html) {
    const { template } = await import('./error-500.mjs');
    html = template(errorObject);
  }
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/about.png": {
    "type": "image/png",
    "etag": "\"1727-n6juTm2tUHRCmXg7kVxzLePwFG4\"",
    "mtime": "2022-09-19T15:29:14.945Z",
    "size": 5927,
    "path": "../public/about.png"
  },
  "/annuaire.jpg": {
    "type": "image/jpeg",
    "etag": "\"10c0e-PnhP11WTplQI81+XfjiS3DfU1m4\"",
    "mtime": "2022-09-21T16:33:24.802Z",
    "size": 68622,
    "path": "../public/annuaire.jpg"
  },
  "/annuaire.svg": {
    "type": "image/svg+xml",
    "etag": "\"f22e-DhQLBBTO8QmcDSEiHB+2L9xvKjQ\"",
    "mtime": "2022-09-21T16:41:17.456Z",
    "size": 61998,
    "path": "../public/annuaire.svg"
  },
  "/apropos.png": {
    "type": "image/png",
    "etag": "\"d04-TMTyr9M0SWbJE+sGGwrR7gMZKMk\"",
    "mtime": "2022-09-21T16:38:35.498Z",
    "size": 3332,
    "path": "../public/apropos.png"
  },
  "/arrow.png": {
    "type": "image/png",
    "etag": "\"164-xfNVigIaKVpEvLyNDo8asyO7tyw\"",
    "mtime": "2022-09-19T15:29:14.946Z",
    "size": 356,
    "path": "../public/arrow.png"
  },
  "/banner.png": {
    "type": "image/png",
    "etag": "\"55ef2-i0J0NOsP2ZjYARXUodi+HxqXK/M\"",
    "mtime": "2022-09-22T10:24:37.162Z",
    "size": 351986,
    "path": "../public/banner.png"
  },
  "/BTP.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e1d3-H5oky0lKPvSrMrb9Z0NUH6OJdZc\"",
    "mtime": "2022-09-22T15:24:37.661Z",
    "size": 123347,
    "path": "../public/BTP.jpg"
  },
  "/Construction.png": {
    "type": "image/png",
    "etag": "\"2235b-6rQAz4hRdzlzlzO8RYH09S+SY34\"",
    "mtime": "2022-09-22T15:25:04.485Z",
    "size": 140123,
    "path": "../public/Construction.png"
  },
  "/CONTACT PRO AFRIQUE.zip": {
    "type": "application/zip",
    "etag": "\"a0636-zNsaVPAaApRCAf+PZPftB1DyP90\"",
    "mtime": "2022-09-22T10:13:40.502Z",
    "size": 656950,
    "path": "../public/CONTACT PRO AFRIQUE.zip"
  },
  "/Copyright©contactpro 2022.svg": {
    "type": "image/svg+xml",
    "etag": "\"4e18-Zqer7w+hfOrGJa/JgX8n85CiTiM\"",
    "mtime": "2022-09-21T16:15:08.000Z",
    "size": 19992,
    "path": "../public/Copyright©contactpro 2022.svg"
  },
  "/Electronique.png": {
    "type": "image/png",
    "etag": "\"2874c-j38dHovnBaN46vloJmejPqQDV4s\"",
    "mtime": "2022-09-22T15:24:53.628Z",
    "size": 165708,
    "path": "../public/Electronique.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"1727-n6juTm2tUHRCmXg7kVxzLePwFG4\"",
    "mtime": "2022-09-19T15:29:14.946Z",
    "size": 5927,
    "path": "../public/favicon.ico"
  },
  "/Finance.png": {
    "type": "image/png",
    "etag": "\"2516e-nkywosRSCLgvnn2e7Un+WRqR4qE\"",
    "mtime": "2022-09-22T15:24:58.517Z",
    "size": 151918,
    "path": "../public/Finance.png"
  },
  "/heart.png": {
    "type": "image/png",
    "etag": "\"546-2PzJ/Ke9Uo9gue0NloNky4yR0yc\"",
    "mtime": "2022-09-19T15:29:14.946Z",
    "size": 1350,
    "path": "../public/heart.png"
  },
  "/home.png": {
    "type": "image/png",
    "etag": "\"4520d-pF3z5kKXDa4v8uZjk4tNIeSH2Tw\"",
    "mtime": "2022-09-19T15:29:14.948Z",
    "size": 283149,
    "path": "../public/home.png"
  },
  "/image.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d8b7-Kx5ArUTRwpOZrImfqQrJeQy/Efs\"",
    "mtime": "2022-09-21T16:32:22.583Z",
    "size": 121015,
    "path": "../public/image.svg"
  },
  "/img.png": {
    "type": "image/png",
    "etag": "\"300e6-SSUWEhD1cwoOyFjUrK+as3rjnP4\"",
    "mtime": "2022-09-21T16:33:04.550Z",
    "size": 196838,
    "path": "../public/img.png"
  },
  "/img2.png": {
    "type": "image/png",
    "etag": "\"44ce8-yz7zjFGvUrOTrik0CGT7F/c3a5o\"",
    "mtime": "2022-09-21T16:33:00.736Z",
    "size": 281832,
    "path": "../public/img2.png"
  },
  "/img3.png": {
    "type": "image/png",
    "etag": "\"33d06-dtb+YtxzQLl8gDZBHGuhFFAimAk\"",
    "mtime": "2022-09-21T16:32:55.759Z",
    "size": 212230,
    "path": "../public/img3.png"
  },
  "/market.png": {
    "type": "image/png",
    "etag": "\"5262b-ldE9Kw2nRFlcXMzxuhnmIk1SWXM\"",
    "mtime": "2022-09-22T10:24:22.202Z",
    "size": 337451,
    "path": "../public/market.png"
  },
  "/Ok-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"61a6-KvINnXkTvwhhie7jzZH6k82wG/4\"",
    "mtime": "2022-09-21T16:15:08.000Z",
    "size": 24998,
    "path": "../public/Ok-1.svg"
  },
  "/Ok-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"3f3-X9ozpgbgM60JSAGjuK5rHli6U5s\"",
    "mtime": "2022-09-21T16:15:08.000Z",
    "size": 1011,
    "path": "../public/Ok-2.svg"
  },
  "/Ok.png": {
    "type": "image/png",
    "etag": "\"13d0f7-Zx6KJ5JaxJ1ph3FagLfSuWp9NHw\"",
    "mtime": "2022-09-20T14:46:46.948Z",
    "size": 1298679,
    "path": "../public/Ok.png"
  },
  "/Ok.svg": {
    "type": "image/svg+xml",
    "etag": "\"c0-hHLru0hJEAWj+C5iTRUip7f5TRE\"",
    "mtime": "2022-09-21T16:15:08.000Z",
    "size": 192,
    "path": "../public/Ok.svg"
  },
  "/Ok1.png": {
    "type": "image/png",
    "etag": "\"235c-UGqaTU0IGVz71rOh+1DzN5RTvmg\"",
    "mtime": "2022-09-20T15:08:31.675Z",
    "size": 9052,
    "path": "../public/Ok1.png"
  },
  "/Ok2.svg": {
    "type": "image/svg+xml",
    "etag": "\"19cba-qjFz4oRYKkbZqq1kSUdIuJA1Idc\"",
    "mtime": "2022-09-21T09:39:42.106Z",
    "size": 105658,
    "path": "../public/Ok2.svg"
  },
  "/Ok3.svg": {
    "type": "image/svg+xml",
    "etag": "\"1eb5f-oLuy5jZHU8phvOxX9L0pd6Urb4M\"",
    "mtime": "2022-09-21T09:39:52.728Z",
    "size": 125791,
    "path": "../public/Ok3.svg"
  },
  "/ph_tiktok-logo-thin.svg": {
    "type": "image/svg+xml",
    "etag": "\"b40-qLKs7wS91HRxSzG2bzAQA+9y1Qw\"",
    "mtime": "2022-09-21T16:15:08.000Z",
    "size": 2880,
    "path": "../public/ph_tiktok-logo-thin.svg"
  },
  "/picture.svg": {
    "type": "image/svg+xml",
    "etag": "\"15b58-NHBT+fXcnnMXKisNGJJf7vh5bV4\"",
    "mtime": "2022-09-22T10:24:13.699Z",
    "size": 88920,
    "path": "../public/picture.svg"
  },
  "/pub.svg": {
    "type": "image/svg+xml",
    "etag": "\"f2b30-R9nBrpNbYC3DMNxggjh/3DpgTkE\"",
    "mtime": "2022-09-22T15:25:27.310Z",
    "size": 994096,
    "path": "../public/pub.svg"
  },
  "/Rectangle.svg": {
    "type": "image/svg+xml",
    "etag": "\"38a-K3UcKU2vgv6SB3LGdGrXBtnZimw\"",
    "mtime": "2022-09-20T14:45:37.075Z",
    "size": 906,
    "path": "../public/Rectangle.svg"
  },
  "/screen.png": {
    "type": "image/png",
    "etag": "\"55b7a-nUV7Ja5R8yw9mt9nFT9+8QoMoP4\"",
    "mtime": "2022-09-22T10:24:30.783Z",
    "size": 351098,
    "path": "../public/screen.png"
  },
  "/social-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d1-pf6hKcu4+L3b/HKlZlzmSoeS0K0\"",
    "mtime": "2022-09-21T16:15:08.000Z",
    "size": 721,
    "path": "../public/social-1.svg"
  },
  "/social-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"14a-syUGEglZbDlgMEsmRe5BykgFi7c\"",
    "mtime": "2022-09-21T16:15:08.000Z",
    "size": 330,
    "path": "../public/social-2.svg"
  },
  "/social-3.svg": {
    "type": "image/svg+xml",
    "etag": "\"743-MDP0+JANjQLm26hu66FyK8uA15U\"",
    "mtime": "2022-09-21T16:15:08.000Z",
    "size": 1859,
    "path": "../public/social-3.svg"
  },
  "/social.svg": {
    "type": "image/svg+xml",
    "etag": "\"1e4-rCRWIFN06QyMs+8npYNLCjNScMw\"",
    "mtime": "2022-09-21T16:15:08.000Z",
    "size": 484,
    "path": "../public/social.svg"
  },
  "/stat.png": {
    "type": "image/png",
    "etag": "\"2d58-o+eCJgG16IkYrFIdq/ZQIAqpzCg\"",
    "mtime": "2022-09-19T15:29:14.948Z",
    "size": 11608,
    "path": "../public/stat.png"
  },
  "/Technologie.png": {
    "type": "image/png",
    "etag": "\"19a69-NvutI8S8z4iaQHa7BHSQwDg7Bmc\"",
    "mtime": "2022-09-22T15:24:47.235Z",
    "size": 105065,
    "path": "../public/Technologie.png"
  },
  "/video.png": {
    "type": "image/png",
    "etag": "\"2f09c-WsrP4MPZrfXSWb07ZAgT3Qd9Y/g\"",
    "mtime": "2022-09-21T16:32:40.117Z",
    "size": 192668,
    "path": "../public/video.png"
  },
  "/CONTACT PRO AFRIQUE/img.jpg": {
    "type": "image/jpeg",
    "etag": "\"17628-Q7PtkB72nevfrSAFuOC9/G4nPk4\"",
    "mtime": "2022-09-22T10:12:36.000Z",
    "size": 95784,
    "path": "../public/CONTACT PRO AFRIQUE/img.jpg"
  },
  "/CONTACT PRO AFRIQUE/img2.jpg": {
    "type": "image/jpeg",
    "etag": "\"19588-wLO4L0Mmp4zC37SWdSpIUTi8FfQ\"",
    "mtime": "2022-09-22T10:12:36.000Z",
    "size": 103816,
    "path": "../public/CONTACT PRO AFRIQUE/img2.jpg"
  },
  "/CONTACT PRO AFRIQUE/img3.jpg": {
    "type": "image/jpeg",
    "etag": "\"231bb-3vNJHjL1RxQP4OwtLpBjuKWP+PE\"",
    "mtime": "2022-09-22T10:12:36.000Z",
    "size": 143803,
    "path": "../public/CONTACT PRO AFRIQUE/img3.jpg"
  },
  "/CONTACT PRO AFRIQUE/img4.jpg": {
    "type": "image/jpeg",
    "etag": "\"14e0f-KaHCKMGySJSmGxmUEMg2rNR2L/c\"",
    "mtime": "2022-09-22T10:12:36.000Z",
    "size": 85519,
    "path": "../public/CONTACT PRO AFRIQUE/img4.jpg"
  },
  "/CONTACT PRO AFRIQUE/img5.jpg": {
    "type": "image/jpeg",
    "etag": "\"37880-gxzK0vijaVYngB2TxsHBrOxW7T4\"",
    "mtime": "2022-09-22T10:12:36.000Z",
    "size": 227456,
    "path": "../public/CONTACT PRO AFRIQUE/img5.jpg"
  },
  "/menu/footer.svg": {
    "type": "image/svg+xml",
    "etag": "\"65a5-lplxB1cSVuxFWwN+Wbt/Aa7AGlc\"",
    "mtime": "2022-09-21T16:15:08.000Z",
    "size": 26021,
    "path": "../public/menu/footer.svg"
  },
  "/menu/header.svg": {
    "type": "image/svg+xml",
    "etag": "\"702b-83lUxF8KK6WAF2+nqYzpp4aclcA\"",
    "mtime": "2022-09-21T16:15:08.000Z",
    "size": 28715,
    "path": "../public/menu/header.svg"
  },
  "/_nuxt/annuaire.ce927db7.svg": {
    "type": "image/svg+xml",
    "etag": "\"f22e-DhQLBBTO8QmcDSEiHB+2L9xvKjQ\"",
    "mtime": "2022-09-22T17:17:25.623Z",
    "size": 61998,
    "path": "../public/_nuxt/annuaire.ce927db7.svg"
  },
  "/_nuxt/banner.976f784a.png": {
    "type": "image/png",
    "etag": "\"55ef2-i0J0NOsP2ZjYARXUodi+HxqXK/M\"",
    "mtime": "2022-09-22T17:17:25.623Z",
    "size": 351986,
    "path": "../public/_nuxt/banner.976f784a.png"
  },
  "/_nuxt/BTP.bfb65e48.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e1d3-H5oky0lKPvSrMrb9Z0NUH6OJdZc\"",
    "mtime": "2022-09-22T17:17:25.619Z",
    "size": 123347,
    "path": "../public/_nuxt/BTP.bfb65e48.jpg"
  },
  "/_nuxt/Construction.78ffd3f6.png": {
    "type": "image/png",
    "etag": "\"2235b-6rQAz4hRdzlzlzO8RYH09S+SY34\"",
    "mtime": "2022-09-22T17:17:25.622Z",
    "size": 140123,
    "path": "../public/_nuxt/Construction.78ffd3f6.png"
  },
  "/_nuxt/contact.79f68a82.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"97-s2et8vYO0d2G174BSAdT/BmhgVg\"",
    "mtime": "2022-09-22T17:17:25.630Z",
    "size": 151,
    "path": "../public/_nuxt/contact.79f68a82.css"
  },
  "/_nuxt/contact.caaed10d.js": {
    "type": "application/javascript",
    "etag": "\"1f85-J3qEoynMRxuAn1GtOch+7Eh2xzA\"",
    "mtime": "2022-09-22T17:17:25.623Z",
    "size": 8069,
    "path": "../public/_nuxt/contact.caaed10d.js"
  },
  "/_nuxt/Electronique.b04894d5.png": {
    "type": "image/png",
    "etag": "\"2874c-j38dHovnBaN46vloJmejPqQDV4s\"",
    "mtime": "2022-09-22T17:17:25.622Z",
    "size": 165708,
    "path": "../public/_nuxt/Electronique.b04894d5.png"
  },
  "/_nuxt/entreprise.1f0c4114.js": {
    "type": "application/javascript",
    "etag": "\"f3e4f-C/O4KlZqQn2mfAL3YyaJeJ20TOc\"",
    "mtime": "2022-09-22T17:17:25.630Z",
    "size": 998991,
    "path": "../public/_nuxt/entreprise.1f0c4114.js"
  },
  "/_nuxt/entreprise.5ec9b811.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"97-NrsVCraXB00GEtCZrVWtCRtnuIw\"",
    "mtime": "2022-09-22T17:17:25.630Z",
    "size": 151,
    "path": "../public/_nuxt/entreprise.5ec9b811.css"
  },
  "/_nuxt/entry.2c945b1f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"49f6-ZP/+3+j9rGtVXz/BRaYp27Bly2c\"",
    "mtime": "2022-09-22T17:17:25.631Z",
    "size": 18934,
    "path": "../public/_nuxt/entry.2c945b1f.css"
  },
  "/_nuxt/entry.7c73b1e8.js": {
    "type": "application/javascript",
    "etag": "\"1eb13-5znjKrpwugZew7TAZ6j3rPKdEmQ\"",
    "mtime": "2022-09-22T17:17:25.623Z",
    "size": 125715,
    "path": "../public/_nuxt/entry.7c73b1e8.js"
  },
  "/_nuxt/error-404.18ced855.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-F8gJ3uSz6Dg2HRyb374Ax3RegKE\"",
    "mtime": "2022-09-22T17:17:25.630Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.18ced855.css"
  },
  "/_nuxt/error-404.f7c1372f.js": {
    "type": "application/javascript",
    "etag": "\"8e2-Zcr8e+49O64KzqYrkA32ErqETVw\"",
    "mtime": "2022-09-22T17:17:25.629Z",
    "size": 2274,
    "path": "../public/_nuxt/error-404.f7c1372f.js"
  },
  "/_nuxt/error-500.6d837ee4.js": {
    "type": "application/javascript",
    "etag": "\"786-dTqeUf7llZ/BI1Zi0a/tO10Uo5U\"",
    "mtime": "2022-09-22T17:17:25.630Z",
    "size": 1926,
    "path": "../public/_nuxt/error-500.6d837ee4.js"
  },
  "/_nuxt/error-500.e60962de.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-VhleGjkSRH7z4cQDJV3dxcboMhU\"",
    "mtime": "2022-09-22T17:17:25.630Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.e60962de.css"
  },
  "/_nuxt/error-component.a1bbe5d5.js": {
    "type": "application/javascript",
    "etag": "\"4b5-EsbUq5lUsHLEKtw4GjHoKDrr1MM\"",
    "mtime": "2022-09-22T17:17:25.624Z",
    "size": 1205,
    "path": "../public/_nuxt/error-component.a1bbe5d5.js"
  },
  "/_nuxt/Finance.2c12f68b.png": {
    "type": "image/png",
    "etag": "\"2516e-nkywosRSCLgvnn2e7Un+WRqR4qE\"",
    "mtime": "2022-09-22T17:17:25.622Z",
    "size": 151918,
    "path": "../public/_nuxt/Finance.2c12f68b.png"
  },
  "/_nuxt/Footer.f1e85156.js": {
    "type": "application/javascript",
    "etag": "\"8aed-mfCnE1h8Ou4U0KwPZIiNdLHzWDg\"",
    "mtime": "2022-09-22T17:17:25.624Z",
    "size": 35565,
    "path": "../public/_nuxt/Footer.f1e85156.js"
  },
  "/_nuxt/img.da61cb3a.png": {
    "type": "image/png",
    "etag": "\"300e6-SSUWEhD1cwoOyFjUrK+as3rjnP4\"",
    "mtime": "2022-09-22T17:17:25.623Z",
    "size": 196838,
    "path": "../public/_nuxt/img.da61cb3a.png"
  },
  "/_nuxt/img2.200f4593.png": {
    "type": "image/png",
    "etag": "\"44ce8-yz7zjFGvUrOTrik0CGT7F/c3a5o\"",
    "mtime": "2022-09-22T17:17:25.622Z",
    "size": 281832,
    "path": "../public/_nuxt/img2.200f4593.png"
  },
  "/_nuxt/img3.78a005ae.png": {
    "type": "image/png",
    "etag": "\"33d06-dtb+YtxzQLl8gDZBHGuhFFAimAk\"",
    "mtime": "2022-09-22T17:17:25.622Z",
    "size": 212230,
    "path": "../public/_nuxt/img3.78a005ae.png"
  },
  "/_nuxt/index.33e4c7e9.js": {
    "type": "application/javascript",
    "etag": "\"20966-jgkXez2KAUgcU9qmXZVkQllWP+0\"",
    "mtime": "2022-09-22T17:17:25.629Z",
    "size": 133478,
    "path": "../public/_nuxt/index.33e4c7e9.js"
  },
  "/_nuxt/market.3ec6b7fa.png": {
    "type": "image/png",
    "etag": "\"5262b-ldE9Kw2nRFlcXMzxuhnmIk1SWXM\"",
    "mtime": "2022-09-22T17:17:25.623Z",
    "size": 337451,
    "path": "../public/_nuxt/market.3ec6b7fa.png"
  },
  "/_nuxt/Ok.6264e8ee.png": {
    "type": "image/png",
    "etag": "\"13d0f7-Zx6KJ5JaxJ1ph3FagLfSuWp9NHw\"",
    "mtime": "2022-09-22T17:17:25.625Z",
    "size": 1298679,
    "path": "../public/_nuxt/Ok.6264e8ee.png"
  },
  "/_nuxt/Ok1.d3d23296.png": {
    "type": "image/png",
    "etag": "\"235c-UGqaTU0IGVz71rOh+1DzN5RTvmg\"",
    "mtime": "2022-09-22T17:17:25.623Z",
    "size": 9052,
    "path": "../public/_nuxt/Ok1.d3d23296.png"
  },
  "/_nuxt/Ok2.7376a865.svg": {
    "type": "image/svg+xml",
    "etag": "\"19cba-qjFz4oRYKkbZqq1kSUdIuJA1Idc\"",
    "mtime": "2022-09-22T17:17:25.623Z",
    "size": 105658,
    "path": "../public/_nuxt/Ok2.7376a865.svg"
  },
  "/_nuxt/Ok3.a51cad97.svg": {
    "type": "image/svg+xml",
    "etag": "\"1eb5f-oLuy5jZHU8phvOxX9L0pd6Urb4M\"",
    "mtime": "2022-09-22T17:17:25.623Z",
    "size": 125791,
    "path": "../public/_nuxt/Ok3.a51cad97.svg"
  },
  "/_nuxt/screen.7187b843.png": {
    "type": "image/png",
    "etag": "\"55b7a-nUV7Ja5R8yw9mt9nFT9+8QoMoP4\"",
    "mtime": "2022-09-22T17:17:25.623Z",
    "size": 351098,
    "path": "../public/_nuxt/screen.7187b843.png"
  },
  "/_nuxt/service.a9e6d820.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"97-ln2jncNLeNdZVvE+izJcoQN+u4o\"",
    "mtime": "2022-09-22T17:17:25.630Z",
    "size": 151,
    "path": "../public/_nuxt/service.a9e6d820.css"
  },
  "/_nuxt/service.d39cf8e4.js": {
    "type": "application/javascript",
    "etag": "\"2670-HMeJmAExBsswFfmJn6b0hS3kYwc\"",
    "mtime": "2022-09-22T17:17:25.630Z",
    "size": 9840,
    "path": "../public/_nuxt/service.d39cf8e4.js"
  },
  "/_nuxt/video.7c3ff32b.png": {
    "type": "image/png",
    "etag": "\"2f09c-WsrP4MPZrfXSWb07ZAgT3Qd9Y/g\"",
    "mtime": "2022-09-22T17:17:25.623Z",
    "size": 192668,
    "path": "../public/_nuxt/video.7c3ff32b.png"
  },
  "/_nuxt/video.e9eb4f16.js": {
    "type": "application/javascript",
    "etag": "\"107-PjSC8vuc2d0p8BfwhqV0FnBbR5o\"",
    "mtime": "2022-09-22T17:17:25.629Z",
    "size": 263,
    "path": "../public/_nuxt/video.e9eb4f16.js"
  },
  "/_nuxt/_plugin-vue_export-helper.a1a6add7.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2022-09-22T17:17:25.629Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.a1a6add7.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size) {
    event.res.setHeader("Content-Length", asset.size);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _lazy_LQceEl = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_LQceEl, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_LQceEl, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen({ host, port }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
