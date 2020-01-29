(this.workbox = this.workbox || {}),
  (this.workbox.streams = (function(e) {
    'use strict';
    try {
      self.workbox.v['workbox:streams:3.6.3'] = 1;
    } catch (e) {}
    function n(e) {
      const n = e.map(e =>
        Promise.resolve(e).then(e =>
          (e = e).body && e.body.getReader
            ? e.body.getReader()
            : e.getReader
            ? e.getReader()
            : new Response(e).body.getReader(),
        ),
      );
      var t;
      let r, s;
      let o = 0;
      return {
        done: new Promise((e, n) => {
          (r = e), (s = n);
        }),
        stream: new ReadableStream({
          pull(e) {
            return n[o]
              .then(e => e.read())
              .then(t => {
                if (t.done)
                  return ++o >= n.length ? (e.close(), void r()) : this.pull(e);
                e.enqueue(t.value);
              })
              .catch(e => {
                throw (s(e), e);
              });
          },
          cancel() {
            r();
          },
        }),
      };
    }
    function t(e = {}) {
      const n = new Headers(e);
      return n.has('content-type') || n.set('content-type', 'text/html'), n;
    }
    function r(e, r) {
      const { done: s, stream: o } = n(e),
        u = t(r);
      return { done: s, response: new Response(o, { headers: u }) };
    }
    let s = void 0;
    function o() {
      if (void 0 === s)
        try {
          new ReadableStream({ start() {} }), (s = !0);
        } catch (e) {
          s = !1;
        }
      return s;
    }
    return (
      (e.concatenate = n),
      (e.concatenateToResponse = r),
      (e.isSupported = o),
      (e.strategy = function(e, n) {
        return (
          (s = babelHelpers.asyncToGenerator(function*({
            event: s,
            url: u,
            params: i,
          }) {
            if (o()) {
              const { done: t, response: o } = r(
                e.map(function(e) {
                  return e({ event: s, url: u, params: i });
                }),
                n,
              );
              return s.waitUntil(t), o;
            }
            const c = yield Promise.all(
              e
                .map(function(e) {
                  return e({ event: s, url: u, params: i });
                })
                .map(
                  ((a = babelHelpers.asyncToGenerator(function*(e) {
                    const n = yield e;
                    return n instanceof Response ? n.blob() : n;
                  })),
                  function(e) {
                    return a.apply(this, arguments);
                  }),
                ),
            );
            var a;
            const l = t(n);
            return new Response(new Blob(c), { headers: l });
          })),
          function(e) {
            return s.apply(this, arguments);
          }
        );
        var s;
      }),
      e
    );
  })({}));

//# sourceMappingURL=workbox-streams.prod.js.map
