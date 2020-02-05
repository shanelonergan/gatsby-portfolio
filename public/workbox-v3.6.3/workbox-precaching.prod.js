(this.workbox = this.workbox || {}),
  (this.workbox.precaching = (function(e, t, n, r, s) {
    'use strict';
    try {
      self.workbox.v['workbox:precaching:3.6.3'] = 1;
    } catch (e) {}
    class i {
      constructor(e, t, n, r) {
        (this.e = e), (this.t = t), (this.n = n);
        const s = new Request(t, { credentials: 'same-origin' });
        (this.r = s), (this.s = r ? this.i(s) : s);
      }
      i(e) {
        let t = e.url;
        const n = { credentials: 'same-origin' };
        if ('cache' in Request.prototype) n.cache = 'reload';
        else {
          const e = new URL(t, location),
            n = encodeURIComponent;
          (e.search +=
            (e.search ? '&' : '') + n('_workbox-cache-bust') + '=' + n(this.n)),
            (t = e.toString());
        }
        return new Request(t, n);
      }
    }
    const c = 'revision',
      o = 'url',
      l = 'precached-details-models';
    class a {
      constructor(t) {
        const n = t.replace(/[^\w-]/g, '_');
        this.c = new e.DBWrapper(n, 2, { onupgradeneeded: this.o });
      }
      o(e) {
        const t = e.target.result;
        e.oldVersion < 2 &&
          (t.objectStoreNames.contains('workbox-precaching') &&
            t.deleteObjectStore('workbox-precaching'),
          t.objectStoreNames.contains(l) && t.deleteObjectStore(l)),
          t.createObjectStore(l);
      }
      l(e, t) {
        var n = this;
        return babelHelpers.asyncToGenerator(function*() {
          return (
            (yield n.a(t.t)) === t.n &&
            !!(yield (yield caches.open(e)).match(t.r))
          );
        })();
      }
      u() {
        var e = this;
        return babelHelpers.asyncToGenerator(function*() {
          return yield e.c.getAllMatching(l, { includeKeys: !0 });
        })();
      }
      a(e) {
        var t = this;
        return babelHelpers.asyncToGenerator(function*() {
          const n = yield t.c.get(l, e);
          return n ? n[c] : null;
        })();
      }
      d(e) {
        var t = this;
        return babelHelpers.asyncToGenerator(function*() {
          yield t.c.put(l, { [c]: e.n, [o]: e.r.url }, e.t);
        })();
      }
      h(e) {
        var t = this;
        return babelHelpers.asyncToGenerator(function*() {
          yield t.c.delete(l, e);
        })();
      }
    }
    const u =
      ((d = babelHelpers.asyncToGenerator(function*(e) {
        const t = e.clone(),
          n = yield 'body' in t ? Promise.resolve(t.body) : t.blob();
        return new Response(n, {
          headers: t.headers,
          status: t.status,
          statusText: t.statusText,
        });
      })),
      function(e) {
        return d.apply(this, arguments);
      });
    var d;
    class h {
      constructor(e) {
        (this.p = t.cacheNames.getPrecacheName(e)),
          (this.f = new Map()),
          (this.y = new a(this.p));
      }
      addToCacheList(e) {
        e.map(e => {
          this.b(this.w(e));
        });
      }
      w(e) {
        switch (typeof e) {
          case 'string':
            return new i(e, e, e);
          case 'object':
            return new i(e, e.url, e.revision || e.url, !!e.revision);
          default:
            throw new n.WorkboxError('add-to-cache-list-unexpected-type', {
              entry: e,
            });
        }
      }
      b(e) {
        const t = this.f.get(e.t);
        if (t) {
          if (t.n !== e.n)
            throw new n.WorkboxError('add-to-cache-list-conflicting-entries', {
              firstEntry: t.e,
              secondEntry: e.e,
            });
        } else this.f.set(e.t, e);
      }
      install({ suppressWarnings: e = !1, event: t, plugins: n } = {}) {
        var r = this;
        return babelHelpers.asyncToGenerator(function*() {
          const e = yield caches.open(r.g()),
            s = yield e.keys();
          yield Promise.all(
            s.map(function(t) {
              return e.delete(t);
            }),
          );
          const i = [],
            c = [];
          for (const e of r.f.values())
            (yield r.y.l(r.p, e)) ? c.push(e) : i.push(e);
          return (
            yield Promise.all(
              i.map(function(e) {
                return r.m({ event: t, plugins: n, precacheEntry: e });
              }),
            ),
            { updatedEntries: i, notUpdatedEntries: c }
          );
        })();
      }
      activate(e = {}) {
        var t = this;
        return babelHelpers.asyncToGenerator(function*() {
          const n = yield caches.open(t.g()),
            r = yield n.keys();
          for (const i of r) {
            const r = yield n.match(i);
            yield s.cacheWrapper.put({
              cacheName: t.p,
              request: i,
              response: r,
              plugins: e.plugins,
            }),
              yield n.delete(i);
          }
          return t.R();
        })();
      }
      g() {
        return `${this.p}-temp`;
      }
      m({ precacheEntry: e, event: t, plugins: n }) {
        var i = this;
        return babelHelpers.asyncToGenerator(function*() {
          let c = yield r.fetchWrapper.fetch({
            request: e.s,
            event: t,
            fetchOptions: null,
            plugins: n,
          });
          return (
            c.redirected && (c = yield u(c)),
            yield s.cacheWrapper.put({
              cacheName: i.g(),
              request: e.r,
              response: c,
              event: t,
              plugins: n,
            }),
            yield i.y.d(e),
            !0
          );
        })();
      }
      R() {
        var e = this;
        return babelHelpers.asyncToGenerator(function*() {
          const t = [];
          e.f.forEach(function(e) {
            const n = new URL(e.r.url, location).toString();
            t.push(n);
          });
          const [n, r] = yield Promise.all([e._(t), e.U(t)]);
          return { deletedCacheRequests: n, deletedRevisionDetails: r };
        })();
      }
      _(e) {
        var t = this;
        return babelHelpers.asyncToGenerator(function*() {
          if (!(yield caches.has(t.p))) return [];
          const n = yield caches.open(t.p),
            r = (yield n.keys()).filter(function(t) {
              return !e.includes(new URL(t.url, location).toString());
            });
          return (
            yield Promise.all(
              r.map(function(e) {
                return n.delete(e);
              }),
            ),
            r.map(function(e) {
              return e.url;
            })
          );
        })();
      }
      U(e) {
        var t = this;
        return babelHelpers.asyncToGenerator(function*() {
          const n = (yield t.y.u()).filter(function(t) {
            const n = new URL(t.value.url, location).toString();
            return !e.includes(n);
          });
          return (
            yield Promise.all(
              n.map(function(e) {
                return t.y.h(e.primaryKey);
              }),
            ),
            n.map(function(e) {
              return e.value.url;
            })
          );
        })();
      }
      getCachedUrls() {
        return Array.from(this.f.keys()).map(e => new URL(e, location).href);
      }
    }
    var p = Object.freeze({ PrecacheController: h });
    let f = !1,
      y = !1,
      b = !1,
      w = [];
    const g = t.cacheNames.getPrecacheName(),
      v = new h(g),
      m = (
        e,
        {
          ignoreUrlParametersMatching: t = [/^utm_/],
          directoryIndex: n = 'index.html',
          cleanUrls: r = !0,
          urlManipulation: s = null,
        } = {},
      ) => {
        const i = new URL(e, location);
        i.hash = '';
        const c = ((e, t) => {
          const n = e.search
              .slice(1)
              .split('&')
              .map(e => e.split('='))
              .filter(e => t.every(t => !t.test(e[0])))
              .map(e => e.join('=')),
            r = new URL(e);
          return (r.search = n.join('&')), r;
        })(i, t);
        let o = [i, c];
        if (n && c.pathname.endsWith('/')) {
          const e = new URL(c);
          (e.pathname += n), o.push(e);
        }
        if (r) {
          const e = new URL(c);
          (e.pathname += '.html'), o.push(e);
        }
        if (s) {
          const e = s({ url: i });
          o = o.concat(e);
        }
        const l = v.getCachedUrls();
        for (const e of o) if (-1 !== l.indexOf(e.href)) return e.href;
        return null;
      },
      R = {
        precache: e => {
          v.addToCacheList(e),
            f ||
              e.length <= 0 ||
              ((f = !0),
              self.addEventListener('install', e => {
                e.waitUntil(
                  v.install({ event: e, plugins: w, suppressWarnings: b }),
                );
              }),
              self.addEventListener('activate', e => {
                e.waitUntil(v.activate({ event: e, plugins: w }));
              }));
        },
        addRoute: e => {
          y ||
            ((y = !0),
            self.addEventListener('fetch', t => {
              const n = m(t.request.url, e);
              if (!n) return;
              let r = caches
                .open(g)
                .then(e => e.match(n))
                .then(e => e || fetch(n));
              t.respondWith(r);
            }));
        },
        precacheAndRoute: (e, t) => {
          R.precache(e), R.addRoute(t);
        },
        suppressWarnings: e => {
          b = e;
        },
        addPlugins: e => {
          w = w.concat(e);
        },
      };
    return Object.assign(R, p);
  })(
    workbox.core._private,
    workbox.core._private,
    workbox.core._private,
    workbox.core._private,
    workbox.core._private,
  ));

//# sourceMappingURL=workbox-precaching.prod.js.map