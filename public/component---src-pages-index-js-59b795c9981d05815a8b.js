(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  Array(281).concat([
    function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(0),
        i = n.n(r),
        o = n(278),
        a = (n(4), n(6), n(2), n(13), n(120), n(28), n(310)),
        l = n(88),
        s = n(119),
        c = (n(20), n(30), n(29), n(42), n(7), n(313)),
        u = n(321),
        f = n.n(u),
        p = n(182),
        d = n.n(p),
        h =
          'undefined' != typeof window
            ? window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function(e) {
                window.setTimeout(e, 1e3 / 60);
              }
            : function() {},
        m = function(e, t) {
          if (
            !(
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              (window.mozRequestAnimationFrame &&
                window.mozCancelRequestAnimationFrame) ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame
            )
          )
            return window.setTimeout(e, t);
          var n = new Date().getTime(),
            r = { value: 0 };
          return (
            (r.value = h(function i() {
              new Date().getTime() - n >= t ? e.call(null) : (r.value = h(i));
            })),
            r
          );
        },
        g = function(e) {
          return window.cancelAnimationFrame
            ? window.cancelAnimationFrame(e.value)
            : window.webkitCancelAnimationFrame
            ? window.webkitCancelAnimationFrame(e.value)
            : window.webkitCancelRequestAnimationFrame
            ? window.webkitCancelRequestAnimationFrame(e.value)
            : window.mozCancelRequestAnimationFrame
            ? window.mozCancelRequestAnimationFrame(e.value)
            : window.oCancelRequestAnimationFrame
            ? window.oCancelRequestAnimationFrame(e.value)
            : window.msCancelRequestAnimationFrame
            ? window.msCancelRequestAnimationFrame(e.value)
            : clearTimeout(e);
        };
      function v() {
        return (v =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var w = (function(e) {
        var t, n;
        function r(t) {
          var n;
          b(y((n = e.call(this, t) || this)), 'isUnMounting', !1),
            b(y(n), 'tickDelay', 0),
            b(y(n), 'tickLoop', 0),
            b(y(n), 'wordBox', null),
            b(y(n), 'willLeave', function() {
              var e = n.getDimensions().height;
              return {
                opacity: Object(c.spring)(n.getOpacity(), n.props.springConfig),
                translate: Object(c.spring)(-e, n.props.springConfig),
              };
            }),
            b(y(n), 'willEnter', function() {
              var e = n.getDimensions().height;
              return { opacity: n.getOpacity(), translate: e };
            }),
            b(y(n), 'tick', function() {
              n.isUnMounting ||
                n.setState(
                  function(e, t) {
                    var n = (e.currentWordIndex + 1) % e.elements.length,
                      r = {
                        currentWordIndex: n,
                        currentEl: e.elements[n],
                        wordCount: (e.wordCount + 1) % 1e3,
                        currentInterval: Array.isArray(t.interval)
                          ? t.interval[n % t.interval.length]
                          : t.interval,
                      };
                    return t.onChange && t.onChange(r), r;
                  },
                  function() {
                    n.state.currentInterval > 0 &&
                      (n.clearTimeouts(),
                      (n.tickLoop = m(n.tick, n.state.currentInterval)));
                  },
                );
            }),
            b(
              y(n),
              'wrapperStyles',
              f()(
                v(
                  {},
                  n.props.mask && { overflow: 'hidden' },
                  {},
                  {
                    display: 'inline-block',
                    position: 'relative',
                    verticalAlign: 'top',
                  },
                ),
              ),
            ),
            b(
              y(n),
              'elementStyles',
              f()({
                display: 'inline-block',
                left: 0,
                top: 0,
                whiteSpace: n.props.noWrap ? 'nowrap' : 'normal',
              }),
            );
          var r = i.a.Children.toArray(t.children);
          return (
            (n.state = {
              elements: r,
              currentEl: r[0],
              currentWordIndex: 0,
              wordCount: 0,
              currentInterval: Array.isArray(t.interval)
                ? t.interval[0]
                : t.interval,
            }),
            n
          );
        }
        (n = e),
          ((t = r).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
        var o = r.prototype;
        return (
          (o.componentDidMount = function() {
            var e = this,
              t = this.props.delay,
              n = this.state,
              r = n.currentInterval,
              i = n.elements;
            r > 0 &&
              i.length > 1 &&
              (this.tickDelay = m(function() {
                e.tickLoop = m(e.tick, r);
              }, t));
          }),
          (o.componentDidUpdate = function(e, t) {
            var n = this,
              r = this.props,
              o = r.interval,
              a = r.children,
              l = r.delay,
              s = this.state.currentWordIndex,
              c = Array.isArray(o) ? o[s % o.length] : o;
            t.currentInterval !== c &&
              (this.clearTimeouts(),
              c > 0 && i.a.Children.count(a) > 1
                ? (this.tickDelay = m(function() {
                    n.tickLoop = m(n.tick, c);
                  }, l))
                : this.setState(function(e, t) {
                    var n = e.currentWordIndex;
                    return {
                      currentInterval: Array.isArray(t.interval)
                        ? t.interval[n % t.interval.length]
                        : t.interval,
                    };
                  })),
              d()(e.children, a) ||
                this.setState({ elements: i.a.Children.toArray(a) });
          }),
          (o.componentWillUnmount = function() {
            (this.isUnMounting = !0), this.clearTimeouts();
          }),
          (o.clearTimeouts = function() {
            null != this.tickLoop && g(this.tickLoop),
              null != this.tickDelay && g(this.tickDelay);
          }),
          (o.getOpacity = function() {
            return this.props.fade ? 0 : 1;
          }),
          (o.getDimensions = function() {
            return null == this.wordBox
              ? { width: 0, height: 0 }
              : this.wordBox.getBoundingClientRect();
          }),
          (o.getTransitionMotionStyles = function() {
            var e = this.props.springConfig,
              t = this.state;
            return [
              {
                key: 'step-' + t.wordCount,
                data: { currentEl: t.currentEl },
                style: {
                  opacity: Object(c.spring)(1, e),
                  translate: Object(c.spring)(0, e),
                },
              },
            ];
          }),
          (o.render = function() {
            var e = this,
              t = this.props.className,
              n = void 0 === t ? '' : t;
            return i.a.createElement(
              'div',
              { className: this.wrapperStyles + ' ' + n },
              i.a.createElement(
                c.TransitionMotion,
                {
                  willLeave: this.willLeave,
                  willEnter: this.willEnter,
                  styles: this.getTransitionMotionStyles(),
                },
                function(t) {
                  var n = e.getDimensions(),
                    r = n.height,
                    o = n.width,
                    a = null == e.wordBox ? 'auto' : o,
                    l = null == e.wordBox ? 'auto' : r;
                  return i.a.createElement(
                    'div',
                    {
                      style: {
                        transition:
                          'width ' + e.props.adjustingSpeed + 'ms linear',
                        height: l,
                        width: a,
                      },
                    },
                    t.map(function(t) {
                      return i.a.createElement(
                        'div',
                        {
                          className: e.elementStyles,
                          ref: function(t) {
                            e.wordBox = t;
                          },
                          key: t.key,
                          style: {
                            opacity: t.style.opacity,
                            transform:
                              'translateY(' + t.style.translate + 'px)',
                            position:
                              null == e.wordBox ? 'relative' : 'absolute',
                          },
                        },
                        t.data.currentEl,
                      );
                    }),
                  );
                },
              ),
            );
          }),
          r
        );
      })(i.a.PureComponent);
      b(w, 'defaultProps', {
        interval: 3e3,
        delay: 0,
        adjustingSpeed: 150,
        springConfig: { stiffness: 340, damping: 30 },
        fade: !0,
        mask: !1,
        noWrap: !0,
      });
      var I = w,
        A = n(72),
        C = n(276),
        x =
          (n(56),
          n(18),
          n(22),
          n(12),
          n(86),
          n(17),
          n(300),
          n(69),
          n(43),
          n(41),
          n(55),
          n(301));
      function k() {
        return (k =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function O(e, t) {
        e.innerHTML = t;
      }
      function E(e) {
        return !(!e || !e._tippy || e._tippy.reference !== e);
      }
      function S(e, t) {
        return {}.hasOwnProperty.call(e, t);
      }
      function T(e) {
        return M(e)
          ? [e]
          : (function(e) {
              return P(e, 'NodeList');
            })(e)
          ? B(e)
          : Array.isArray(e)
          ? e
          : B(document.querySelectorAll(e));
      }
      function j(e, t, n) {
        if (Array.isArray(e)) {
          var r = e[t];
          return null == r ? (Array.isArray(n) ? n[t] : n) : r;
        }
        return e;
      }
      function N(e, t) {
        return e && e.modifiers && e.modifiers[t];
      }
      function P(e, t) {
        var n = {}.toString.call(e);
        return 0 === n.indexOf('[object') && n.indexOf(t + ']') > -1;
      }
      function M(e) {
        return P(e, 'Element');
      }
      function L(e) {
        return P(e, 'MouseEvent');
      }
      function _(e, t) {
        return 'function' == typeof e ? e.apply(void 0, t) : e;
      }
      function D(e, t, n, r) {
        e.filter(function(e) {
          return e.name === t;
        })[0][n] = r;
      }
      function H() {
        return document.createElement('div');
      }
      function R(e, t) {
        e.forEach(function(e) {
          e && (e.style.transitionDuration = t + 'ms');
        });
      }
      function z(e, t) {
        e.forEach(function(e) {
          e && e.setAttribute('data-state', t);
        });
      }
      function W(e, t) {
        return 0 === t
          ? e
          : function(r) {
              clearTimeout(n),
                (n = setTimeout(function() {
                  e(r);
                }, t));
            };
        var n;
      }
      function Z(e, t, n) {
        e && e !== t && e.apply(void 0, n);
      }
      function B(e) {
        return [].slice.call(e);
      }
      function Y(e, t) {
        for (; e; ) {
          if (t(e)) return e;
          e = e.parentElement;
        }
        return null;
      }
      function F(e, t) {
        return e.indexOf(t) > -1;
      }
      function U(e) {
        return e.split(/\s+/).filter(Boolean);
      }
      function V(e, t) {
        return void 0 !== e ? e : t;
      }
      function G(e) {
        return [].concat(e);
      }
      function q(e) {
        var t = G(e)[0];
        return (t && t.ownerDocument) || document;
      }
      function X(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function J(e) {
        return 'number' == typeof e ? e : parseFloat(e);
      }
      function K(e, t, n) {
        void 0 === t && (t = 5);
        var r = { top: 0, right: 0, bottom: 0, left: 0 };
        return Object.keys(r).reduce(function(r, i) {
          return (
            (r[i] = 'number' == typeof t ? t : t[i]),
            e === i && (r[i] = 'number' == typeof t ? t + n : t[e] + n),
            r
          );
        }, r);
      }
      var Q = k(
          {
            allowHTML: !0,
            animation: 'fade',
            appendTo: function() {
              return document.body;
            },
            aria: 'describedby',
            arrow: !0,
            boundary: 'scrollParent',
            content: '',
            delay: 0,
            distance: 10,
            duration: [300, 250],
            flip: !0,
            flipBehavior: 'flip',
            flipOnUpdate: !1,
            hideOnClick: !0,
            ignoreAttributes: !1,
            inertia: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            lazy: !0,
            maxWidth: 350,
            multiple: !1,
            offset: 0,
            onAfterUpdate: function() {},
            onBeforeUpdate: function() {},
            onCreate: function() {},
            onDestroy: function() {},
            onHidden: function() {},
            onHide: function() {},
            onMount: function() {},
            onShow: function() {},
            onShown: function() {},
            onTrigger: function() {},
            onUntrigger: function() {},
            placement: 'top',
            plugins: [],
            popperOptions: {},
            role: 'tooltip',
            showOnCreate: !1,
            theme: '',
            touch: !0,
            trigger: 'mouseenter focus',
            triggerTarget: null,
            updateDuration: 0,
            zIndex: 9999,
          },
          {
            animateFill: !1,
            followCursor: !1,
            inlinePositioning: !1,
            sticky: !1,
          },
        ),
        $ = Object.keys(Q),
        ee = [
          'arrow',
          'boundary',
          'distance',
          'flip',
          'flipBehavior',
          'flipOnUpdate',
          'offset',
          'placement',
          'popperOptions',
        ],
        te = function(e) {
          Object.keys(e).forEach(function(t) {
            Q[t] = e[t];
          });
        };
      function ne(e) {
        var t = (e.plugins || []).reduce(function(t, n) {
          var r = n.name,
            i = n.defaultValue;
          return r && (t[r] = void 0 !== e[r] ? e[r] : i), t;
        }, {});
        return k({}, e, {}, t);
      }
      function re(e, t) {
        var n = k(
          {},
          t,
          { content: _(t.content, [e]) },
          t.ignoreAttributes
            ? {}
            : (function(e, t) {
                return (t
                  ? Object.keys(ne(k({}, Q, { plugins: t })))
                  : $
                ).reduce(function(t, n) {
                  var r = (e.getAttribute('data-tippy-' + n) || '').trim();
                  if (!r) return t;
                  if ('content' === n) t[n] = r;
                  else
                    try {
                      t[n] = JSON.parse(r);
                    } catch (i) {
                      t[n] = r;
                    }
                  return t;
                }, {});
              })(e, t.plugins),
        );
        return n.interactive && (n.aria = null), n;
      }
      var ie = { passive: !0 },
        oe = { isTouch: !1 },
        ae = 0;
      function le() {
        oe.isTouch ||
          ((oe.isTouch = !0),
          window.performance && document.addEventListener('mousemove', se));
      }
      function se() {
        var e = performance.now();
        e - ae < 20 &&
          ((oe.isTouch = !1), document.removeEventListener('mousemove', se)),
          (ae = e);
      }
      function ce() {
        var e = document.activeElement;
        if (E(e)) {
          var t = e._tippy;
          e.blur && !t.state.isVisible && e.blur();
        }
      }
      var ue = 'undefined' != typeof window && 'undefined' != typeof document,
        fe = ue ? navigator.userAgent : '',
        pe = /MSIE |Trident\//.test(fe),
        de = /UCBrowser\//.test(fe),
        he = ue && /iPhone|iPad|iPod/.test(navigator.platform);
      function me(e) {
        var t = e && he && oe.isTouch;
        document.body.classList[t ? 'add' : 'remove']('tippy-iOS');
      }
      function ge(e) {
        return e.split('-')[0];
      }
      function ve(e) {
        e.setAttribute('data-inertia', '');
      }
      function ye(e) {
        e.setAttribute('data-interactive', '');
      }
      function be(e, t) {
        if (M(t.content)) O(e, ''), e.appendChild(t.content);
        else if ('function' != typeof t.content) {
          e[t.allowHTML ? 'innerHTML' : 'textContent'] = t.content;
        }
      }
      function we(e) {
        return {
          tooltip: e.querySelector('.tippy-tooltip'),
          content: e.querySelector('.tippy-content'),
          arrow:
            e.querySelector('.tippy-arrow') ||
            e.querySelector('.tippy-svg-arrow'),
        };
      }
      function Ie(e) {
        var t = H();
        return (
          !0 === e
            ? (t.className = 'tippy-arrow')
            : ((t.className = 'tippy-svg-arrow'),
              M(e) ? t.appendChild(e) : O(t, e)),
          t
        );
      }
      function Ae(e, t, n) {
        var r,
          i = we(e),
          o = i.tooltip,
          a = i.content,
          l = i.arrow;
        (e.style.zIndex = '' + n.zIndex),
          o.setAttribute('data-animation', n.animation),
          (o.style.maxWidth =
            'number' == typeof (r = n.maxWidth) ? r + 'px' : r),
          n.role ? o.setAttribute('role', n.role) : o.removeAttribute('role'),
          t.content !== n.content && be(a, n),
          !t.arrow && n.arrow
            ? (o.appendChild(Ie(n.arrow)), o.setAttribute('data-arrow', ''))
            : t.arrow && !n.arrow
            ? (o.removeChild(l), o.removeAttribute('data-arrow'))
            : t.arrow !== n.arrow &&
              (o.removeChild(l), o.appendChild(Ie(n.arrow))),
          !t.interactive && n.interactive
            ? ye(o)
            : t.interactive &&
              !n.interactive &&
              (function(e) {
                e.removeAttribute('data-interactive');
              })(o),
          !t.inertia && n.inertia
            ? ve(o)
            : t.inertia &&
              !n.inertia &&
              (function(e) {
                e.removeAttribute('data-inertia');
              })(o),
          t.theme !== n.theme &&
            (xe(o, 'remove', t.theme), xe(o, 'add', n.theme));
      }
      function Ce(e, t, n) {
        var r =
          de && void 0 !== document.body.style.webkitTransition
            ? 'webkitTransitionEnd'
            : 'transitionend';
        e[t + 'EventListener'](r, n);
      }
      function xe(e, t, n) {
        U(n).forEach(function(n) {
          e.classList[t](n + '-theme');
        });
      }
      var ke = 1,
        Oe = [],
        Ee = [];
      function Se(e, t) {
        var n,
          r,
          i,
          o = re(e, k({}, Q, {}, ne(t)));
        if (!o.multiple && e._tippy) return null;
        var a,
          l,
          s,
          c,
          u,
          f = !1,
          p = !1,
          d = !1,
          h = 0,
          m = [],
          g = W(Pe, o.interactiveDebounce),
          v = q(o.triggerTarget || e),
          y = ke++,
          b = (function(e, t) {
            var n = H();
            (n.className = 'tippy-popper'),
              (n.style.position = 'absolute'),
              (n.style.top = '0'),
              (n.style.left = '0');
            var r = H();
            (r.className = 'tippy-tooltip'),
              (r.id = 'tippy-' + e),
              r.setAttribute('data-state', 'hidden'),
              r.setAttribute('tabindex', '-1'),
              xe(r, 'add', t.theme);
            var i = H();
            return (
              (i.className = 'tippy-content'),
              i.setAttribute('data-state', 'hidden'),
              t.interactive && ye(r),
              t.arrow &&
                (r.setAttribute('data-arrow', ''), r.appendChild(Ie(t.arrow))),
              t.inertia && ve(r),
              be(i, t),
              r.appendChild(i),
              n.appendChild(r),
              Ae(n, t, t),
              n
            );
          })(y, o),
          w = we(b),
          I = (u = o.plugins).filter(function(e, t) {
            return u.indexOf(e) === t;
          }),
          A = w.tooltip,
          C = w.content,
          O = [A, C],
          E = {
            id: y,
            reference: e,
            popper: b,
            popperChildren: w,
            popperInstance: null,
            props: o,
            state: {
              currentPlacement: null,
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1,
            },
            plugins: I,
            clearDelayTimeouts: function() {
              clearTimeout(n), clearTimeout(r), cancelAnimationFrame(i);
            },
            setProps: function(t) {
              0;
              if (E.state.isDestroyed) return;
              0;
              ae('onBeforeUpdate', [E, t]), je();
              var n = E.props,
                r = re(e, k({}, E.props, {}, t, { ignoreAttributes: !0 }));
              (r.ignoreAttributes = V(t.ignoreAttributes, n.ignoreAttributes)),
                (E.props = r),
                Te(),
                n.interactiveDebounce !== r.interactiveDebounce &&
                  (ce(), (g = W(Pe, r.interactiveDebounce)));
              Ae(b, n, r),
                (E.popperChildren = we(b)),
                n.triggerTarget && !r.triggerTarget
                  ? G(n.triggerTarget).forEach(function(e) {
                      e.removeAttribute('aria-expanded');
                    })
                  : r.triggerTarget && e.removeAttribute('aria-expanded');
              if ((se(), E.popperInstance))
                if (
                  ee.some(function(e) {
                    return S(t, e) && t[e] !== n[e];
                  })
                ) {
                  var i = E.popperInstance.reference;
                  E.popperInstance.destroy(),
                    De(),
                    (E.popperInstance.reference = i),
                    E.state.isVisible &&
                      E.popperInstance.enableEventListeners();
                } else E.popperInstance.update();
              ae('onAfterUpdate', [E, t]);
            },
            setContent: function(e) {
              E.setProps({ content: e });
            },
            show: function(e) {
              void 0 === e && (e = j(E.props.duration, 0, Q.duration));
              0;
              var t = E.state.isVisible,
                n = E.state.isDestroyed,
                r = !E.state.isEnabled,
                i = oe.isTouch && !E.props.touch;
              if (t || n || r || i) return;
              if ($().hasAttribute('disabled')) return;
              E.popperInstance || De();
              if ((ae('onShow', [E], !1), !1 === E.props.onShow(E))) return;
              fe(),
                (b.style.visibility = 'visible'),
                (E.state.isVisible = !0),
                E.state.isMounted || R(O.concat(b), 0);
              (l = function() {
                E.state.isVisible &&
                  (R([b], E.props.updateDuration),
                  R(O, e),
                  z(O, 'visible'),
                  le(),
                  se(),
                  X(Ee, E),
                  me(!0),
                  (E.state.isMounted = !0),
                  ae('onMount', [E]),
                  (function(e, t) {
                    he(e, t);
                  })(e, function() {
                    (E.state.isShown = !0), ae('onShown', [E]);
                  }));
              }),
                (function() {
                  h = 0;
                  var e,
                    t = E.props.appendTo,
                    n = $();
                  e =
                    (E.props.interactive && t === Q.appendTo) || 'parent' === t
                      ? n.parentNode
                      : _(t, [n]);
                  e.contains(b) || e.appendChild(b);
                  0;
                  D(
                    E.popperInstance.modifiers,
                    'flip',
                    'enabled',
                    E.props.flip,
                  ),
                    E.popperInstance.enableEventListeners(),
                    E.popperInstance.update();
                })();
            },
            hide: function(e) {
              void 0 === e && (e = j(E.props.duration, 1, Q.duration));
              0;
              var t = !E.state.isVisible && !f,
                n = E.state.isDestroyed,
                r = !E.state.isEnabled && !f;
              if (t || n || r) return;
              if ((ae('onHide', [E], !1), !1 === E.props.onHide(E) && !f))
                return;
              de(),
                (b.style.visibility = 'hidden'),
                (E.state.isVisible = !1),
                (E.state.isShown = !1),
                R(O, e),
                z(O, 'hidden'),
                le(),
                se(),
                (function(e, t) {
                  he(e, function() {
                    !E.state.isVisible &&
                      b.parentNode &&
                      b.parentNode.contains(b) &&
                      t();
                  });
                })(e, function() {
                  E.popperInstance.disableEventListeners(),
                    (E.popperInstance.options.placement = E.props.placement),
                    b.parentNode.removeChild(b),
                    0 ===
                      (Ee = Ee.filter(function(e) {
                        return e !== E;
                      })).length && me(!1),
                    (E.state.isMounted = !1),
                    ae('onHidden', [E]);
                });
            },
            enable: function() {
              E.state.isEnabled = !0;
            },
            disable: function() {
              E.hide(), (E.state.isEnabled = !1);
            },
            destroy: function() {
              0;
              if (E.state.isDestroyed) return;
              (f = !0),
                E.clearDelayTimeouts(),
                E.hide(0),
                je(),
                delete e._tippy,
                E.popperInstance && E.popperInstance.destroy();
              (f = !1), (E.state.isDestroyed = !0), ae('onDestroy', [E]);
            },
          };
        (e._tippy = E), (b._tippy = E);
        var T = I.map(function(e) {
          return e.fn(E);
        });
        return (
          Te(),
          se(),
          o.lazy || De(),
          ae('onCreate', [E]),
          o.showOnCreate && Re(),
          b.addEventListener('mouseenter', function() {
            E.props.interactive && E.state.isVisible && E.clearDelayTimeouts();
          }),
          b.addEventListener('mouseleave', function() {
            E.props.interactive &&
              F(E.props.trigger, 'mouseenter') &&
              v.addEventListener('mousemove', g);
          }),
          E
        );
        function P() {
          var e = E.props.touch;
          return Array.isArray(e) ? e : [e, 0];
        }
        function M() {
          return 'hold' === P()[0];
        }
        function $() {
          return c || e;
        }
        function te(e) {
          return (E.state.isMounted && !E.state.isVisible) ||
            oe.isTouch ||
            (a && 'focus' === a.type)
            ? 0
            : j(E.props.delay, e ? 0 : 1, Q.delay);
        }
        function ae(e, t, n) {
          var r;
          (void 0 === n && (n = !0),
          T.forEach(function(n) {
            S(n, e) && n[e].apply(n, t);
          }),
          n) && (r = E.props)[e].apply(r, t);
        }
        function le() {
          var t = E.props.aria;
          if (t) {
            var n = 'aria-' + t,
              r = A.id;
            G(E.props.triggerTarget || e).forEach(function(e) {
              var t = e.getAttribute(n);
              if (E.state.isVisible) e.setAttribute(n, t ? t + ' ' + r : r);
              else {
                var i = t && t.replace(r, '').trim();
                i ? e.setAttribute(n, i) : e.removeAttribute(n);
              }
            });
          }
        }
        function se() {
          G(E.props.triggerTarget || e).forEach(function(e) {
            E.props.interactive
              ? e.setAttribute(
                  'aria-expanded',
                  E.state.isVisible && e === $() ? 'true' : 'false',
                )
              : e.removeAttribute('aria-expanded');
          });
        }
        function ce() {
          v.body.removeEventListener('mouseleave', ze),
            v.removeEventListener('mousemove', g),
            (Oe = Oe.filter(function(e) {
              return e !== g;
            }));
        }
        function ue(e) {
          if (!E.props.interactive || !b.contains(e.target)) {
            if ($().contains(e.target)) {
              if (oe.isTouch) return;
              if (E.state.isVisible && F(E.props.trigger, 'click')) return;
            }
            !0 === E.props.hideOnClick &&
              ((p = !1),
              E.clearDelayTimeouts(),
              E.hide(),
              (d = !0),
              setTimeout(function() {
                d = !1;
              }),
              E.state.isMounted || de());
          }
        }
        function fe() {
          v.addEventListener('mousedown', ue, !0);
        }
        function de() {
          v.removeEventListener('mousedown', ue, !0);
        }
        function he(e, t) {
          function n(e) {
            e.target === A && (Ce(A, 'remove', n), t());
          }
          if (0 === e) return t();
          Ce(A, 'remove', s), Ce(A, 'add', n), (s = n);
        }
        function Se(t, n, r) {
          void 0 === r && (r = !1),
            G(E.props.triggerTarget || e).forEach(function(e) {
              e.addEventListener(t, n, r),
                m.push({ node: e, eventType: t, handler: n, options: r });
            });
        }
        function Te() {
          M() && (Se('touchstart', Ne, ie), Se('touchend', Me, ie)),
            U(E.props.trigger).forEach(function(e) {
              if ('manual' !== e)
                switch ((Se(e, Ne), e)) {
                  case 'mouseenter':
                    Se('mouseleave', Me);
                    break;
                  case 'focus':
                    Se(pe ? 'focusout' : 'blur', Le);
                }
            });
        }
        function je() {
          m.forEach(function(e) {
            var t = e.node,
              n = e.eventType,
              r = e.handler,
              i = e.options;
            t.removeEventListener(n, r, i);
          }),
            (m = []);
        }
        function Ne(e) {
          var t = !1;
          if (E.state.isEnabled && !_e(e) && !d) {
            if (
              ((a = e),
              (c = e.currentTarget),
              se(),
              !E.state.isVisible &&
                L(e) &&
                Oe.forEach(function(t) {
                  return t(e);
                }),
              'click' !== e.type ||
                (F(E.props.trigger, 'mouseenter') && !p) ||
                !1 === E.props.hideOnClick ||
                !E.state.isVisible)
            ) {
              var r = P(),
                i = r[0],
                o = r[1];
              oe.isTouch && 'hold' === i && o
                ? (n = setTimeout(function() {
                    Re(e);
                  }, o))
                : Re(e);
            } else t = !0;
            'click' === e.type && (p = !t), t && ze(e);
          }
        }
        function Pe(t) {
          Y(t.target, function(t) {
            return t === e || t === b;
          }) ||
            ((function(e, t) {
              var n = t.clientX,
                r = t.clientY;
              return e.every(function(e) {
                var t = e.popperRect,
                  i = e.tooltipRect,
                  o = e.interactiveBorder,
                  a = Math.min(t.top, i.top),
                  l = Math.max(t.right, i.right),
                  s = Math.max(t.bottom, i.bottom),
                  c = Math.min(t.left, i.left);
                return a - r > o || r - s > o || c - n > o || n - l > o;
              });
            })(
              B(b.querySelectorAll('.tippy-popper'))
                .concat(b)
                .map(function(e) {
                  var t = e._tippy,
                    n = t.popperChildren.tooltip,
                    r = t.props.interactiveBorder;
                  return {
                    popperRect: e.getBoundingClientRect(),
                    tooltipRect: n.getBoundingClientRect(),
                    interactiveBorder: r,
                  };
                }),
              t,
            ) &&
              (ce(), ze(t)));
        }
        function Me(e) {
          if (!(_e(e) || (F(E.props.trigger, 'click') && p)))
            return E.props.interactive
              ? (v.body.addEventListener('mouseleave', ze),
                v.addEventListener('mousemove', g),
                void X(Oe, g))
              : void ze(e);
        }
        function Le(e) {
          e.target === $() &&
            ((E.props.interactive &&
              e.relatedTarget &&
              b.contains(e.relatedTarget)) ||
              ze(e));
        }
        function _e(e) {
          var t = 'ontouchstart' in window,
            n = F(e.type, 'touch'),
            r = M();
          return (t && oe.isTouch && r && !n) || (oe.isTouch && !r && n);
        }
        function De() {
          var t,
            n = E.props.popperOptions,
            r = E.popperChildren.arrow,
            i = N(n, 'flip'),
            o = N(n, 'preventOverflow');
          function a(e) {
            var n = E.state.currentPlacement;
            (E.state.currentPlacement = e.placement),
              E.props.flip &&
                !E.props.flipOnUpdate &&
                (e.flipped &&
                  (E.popperInstance.options.placement = e.placement),
                D(E.popperInstance.modifiers, 'flip', 'enabled', !1)),
              A.setAttribute('data-placement', e.placement),
              !1 !== e.attributes['x-out-of-boundaries']
                ? A.setAttribute('data-out-of-boundaries', '')
                : A.removeAttribute('data-out-of-boundaries');
            var r = ge(e.placement),
              i = F(['top', 'bottom'], r),
              o = F(['bottom', 'right'], r);
            (A.style.top = '0'),
              (A.style.left = '0'),
              (A.style[i ? 'top' : 'left'] = (o ? 1 : -1) * t + 'px'),
              n && n !== e.placement && E.popperInstance.update();
          }
          var l = k({ eventsEnabled: !1, placement: E.props.placement }, n, {
            modifiers: k({}, n && n.modifiers, {
              tippyDistance: {
                enabled: !0,
                order: 0,
                fn: function(e) {
                  t = (function(e, t) {
                    var n = 'string' == typeof t && F(t, 'rem'),
                      r = e.documentElement;
                    return r && n
                      ? parseFloat(getComputedStyle(r).fontSize || String(16)) *
                          J(t)
                      : J(t);
                  })(v, E.props.distance);
                  var n = ge(e.placement),
                    r = K(n, o && o.padding, t),
                    a = K(n, i && i.padding, t),
                    l = E.popperInstance.modifiers;
                  return (
                    D(l, 'preventOverflow', 'padding', r),
                    D(l, 'flip', 'padding', a),
                    e
                  );
                },
              },
              preventOverflow: k({ boundariesElement: E.props.boundary }, o),
              flip: k(
                { enabled: E.props.flip, behavior: E.props.flipBehavior },
                i,
              ),
              arrow: k({ element: r, enabled: !!r }, N(n, 'arrow')),
              offset: k({ offset: E.props.offset }, N(n, 'offset')),
            }),
            onCreate: function(e) {
              a(e), Z(n && n.onCreate, l.onCreate, [e]), He();
            },
            onUpdate: function(e) {
              a(e), Z(n && n.onUpdate, l.onUpdate, [e]), He();
            },
          });
          E.popperInstance = new x.a(e, b, l);
        }
        function He() {
          0 === h
            ? (h++, E.popperInstance.update())
            : l && 1 === h && (h++, b.offsetHeight, l());
        }
        function Re(e) {
          E.clearDelayTimeouts(),
            E.popperInstance || De(),
            e && ae('onTrigger', [E, e]),
            fe();
          var t = te(!0);
          t
            ? (n = setTimeout(function() {
                E.show();
              }, t))
            : E.show();
        }
        function ze(e) {
          if (
            (E.clearDelayTimeouts(),
            ae('onUntrigger', [E, e]),
            E.state.isVisible)
          ) {
            if (
              !(
                F(E.props.trigger, 'mouseenter') &&
                F(E.props.trigger, 'click') &&
                F(['mouseleave', 'mousemove'], e.type) &&
                p
              )
            ) {
              var t = te(!1);
              t
                ? (r = setTimeout(function() {
                    E.state.isVisible && E.hide();
                  }, t))
                : (i = requestAnimationFrame(function() {
                    E.hide();
                  }));
            }
          } else de();
        }
      }
      function Te(e, t, n) {
        void 0 === t && (t = {}),
          void 0 === n && (n = []),
          (n = Q.plugins.concat(t.plugins || n)),
          document.addEventListener(
            'touchstart',
            le,
            k({}, ie, { capture: !0 }),
          ),
          window.addEventListener('blur', ce);
        var r = k({}, t, { plugins: n }),
          i = T(e).reduce(function(e, t) {
            var n = t && Se(t, r);
            return n && e.push(n), e;
          }, []);
        return M(e) ? i[0] : i;
      }
      (Te.version = '5.1.4'),
        (Te.defaultProps = Q),
        (Te.setDefaultProps = te),
        (Te.currentInput = oe);
      var je = n(21),
        Ne = n.n(je),
        Pe = n(113);
      function Me() {
        return (Me =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Le(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
      }
      var _e = 'undefined' != typeof window && 'undefined' != typeof document;
      function De(e, t) {
        e &&
          ('function' == typeof e && e(t),
          {}.hasOwnProperty.call(e, 'current') && (e.current = t));
      }
      function He(e, t, n) {
        n.split(/\s+/).forEach(function(n) {
          n && e.classList[t](n);
        });
      }
      var Re = _e ? r.useLayoutEffect : r.useEffect;
      function ze(e, t, n) {
        Re(function() {
          var n = e.instance.popperChildren.tooltip;
          if (t)
            return (
              He(n, 'add', t),
              function() {
                He(n, 'remove', t);
              }
            );
        }, [t].concat(n));
      }
      function We(e) {
        var t = Object(r.useRef)();
        return (
          t.current || (t.current = 'function' == typeof e ? e() : e), t.current
        );
      }
      function Ze(e) {
        var t = e.children,
          n = e.content,
          o = e.className,
          a = e.visible,
          l = e.singleton,
          s = e.enabled,
          c = void 0 === s || s,
          u = e.multiple,
          f = void 0 === u || u,
          p = e.ignoreAttributes,
          d = void 0 === p || p,
          h =
            (e.__source,
            e.__self,
            Le(e, [
              'children',
              'content',
              'className',
              'visible',
              'singleton',
              'enabled',
              'multiple',
              'ignoreAttributes',
              '__source',
              '__self',
            ])),
          m = void 0 !== a,
          g = void 0 !== l,
          v = Object(r.useState)(!1),
          y = v[0],
          b = v[1],
          w = We(function() {
            return {
              container: _e && document.createElement('div'),
              renders: 1,
            };
          }),
          I = Me({ ignoreAttributes: d, multiple: f }, h, {
            content: w.container,
          });
        m && (I.trigger = 'manual'), g && (c = !1);
        var A = [t.type];
        return (
          Re(function() {
            var e = Te(w.ref, I);
            return (
              (w.instance = e),
              c || e.disable(),
              a && e.show(),
              g && l(e),
              b(!0),
              function() {
                e.destroy();
              }
            );
          }, A),
          Re(function() {
            if (1 !== w.renders) {
              var e = w.instance;
              e.setProps(I),
                c ? e.enable() : e.disable(),
                m && (a ? e.show() : e.hide());
            } else w.renders++;
          }),
          ze(w, o, A),
          i.a.createElement(
            i.a.Fragment,
            null,
            Object(r.cloneElement)(t, {
              ref: function(e) {
                (w.ref = e), De(t.ref, e);
              },
            }),
            y && Object(Pe.createPortal)(n, w.container),
          )
        );
      }
      var Be = Object(r.forwardRef)(function(e, t) {
          var n = e.children,
            o = Le(e, ['children']);
          return i.a.createElement(
            Ze,
            o,
            Object(r.cloneElement)(n, {
              ref: function(e) {
                De(t, e), De(n.ref, e);
              },
            }),
          );
        }),
        Ye = n(23),
        Fe = n(299),
        Ue = n.n(Fe),
        Ve =
          (n(311),
          Object(Ye.default)(s.Link).withConfig({
            displayName: 'SocialLink__IconLink',
            componentId: 'sc-13bp2vw-0',
          })(
            [
              'transition:color 0.5s;color:',
              ';text-decoration:none;&:hover{color:',
              ';}',
            ],
            function(e) {
              return e.theme.colors[e.color] || e.theme.colors.primary;
            },
            function(e) {
              return e.theme.colors.primaryLight;
            },
          )),
        Ge = function(e) {
          var t = e.fontAwesomeIcon,
            n = e.name,
            r = e.url,
            o = e.color;
          return i.a.createElement(
            Be,
            {
              content: n,
              placement: 'bottom',
              trigger: 'mouseenter',
              arrow: !1,
            },
            i.a.createElement(
              Ve,
              {
                href: r,
                target: '_blank',
                color: o,
                rel: 'noreferrer',
                'aria-label': n,
              },
              i.a.createElement(Ue.a, { name: t }),
            ),
          );
        },
        qe = Ye.default.svg.withConfig({
          displayName: 'MouseIcon__MouseContainer',
          componentId: 'xyrakf-0',
        })(['max-width:2.5rem;width:100%;height:auto;']),
        Xe = Ye.default.span.withConfig({
          displayName: 'MouseIcon__ScrollLink',
          componentId: 'xyrakf-1',
        })([
          'position:absolute;bottom:1rem;left:50%;transform:translateX(-50%);cursor:pointer;@media only screen and (max-width:700px){display:none;}',
        ]),
        Je = Object(Ye.keyframes)([
          '0%,20%{transform:translateY(0) scaleY(1);}10%{opacity:1;}100%{transform:translateY(36px) scaleY(2);opacity:0.01;}',
        ]),
        Ke = Ye.default.rect
          .attrs(function(e) {
            return { stroke: e.theme.colors.primary, strokeWidth: '3' };
          })
          .withConfig({
            displayName: 'MouseIcon__Mouse',
            componentId: 'xyrakf-2',
          })(['']),
        Qe = Ye.default.circle.withConfig({
          displayName: 'MouseIcon__Scroll',
          componentId: 'xyrakf-3',
        })(
          [
            'animation-name:',
            ';animation-duration:1.5s;animation-timing-function:cubic-bezier(0.65,-0.55,0.25,1.5);animation-iteration-count:infinite;transform-origin:50% 20.5px;will-change:transform;fill:',
            ';',
          ],
          Je,
          function(e) {
            return e.theme.colors.primary;
          },
        ),
        $e = function(e) {
          var t = e.onClick;
          return i.a.createElement(
            Xe,
            { onClick: t },
            i.a.createElement(
              qe,
              { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 76 130' },
              i.a.createElement(
                'g',
                { fill: 'none' },
                i.a.createElement(Ke, {
                  width: '70',
                  height: '118',
                  x: '1.5',
                  y: '1.5',
                  rx: '36',
                }),
                i.a.createElement(Qe, { cx: '36.5', cy: '31.5', r: '4.5' }),
              ),
            ),
          );
        },
        et = n(277);
      var tt = function() {
          return i.a.createElement(
            'div',
            null,
            i.a.createElement(et.a, {
              color: 'backgroundDark',
              height: ['35vh', '80vh'],
              width: ['95vw', '60vw'],
            }),
            i.a.createElement(et.a, {
              color: 'secondary',
              height: ['38vh', '80vh'],
              width: ['50vw', '35vw'],
            }),
            i.a.createElement(et.a, {
              color: 'primaryDark',
              height: ['25vh', '35vh'],
              width: ['75vw', '60vw'],
              invertX: !0,
            }),
            i.a.createElement(et.a, {
              color: 'backgroundDark',
              height: ['20vh', '20vh'],
              width: ['100vw', '100vw'],
              invertX: !0,
              invertY: !0,
            }),
          );
        },
        nt = { marginRight: 'auto', marginLeft: 'auto' },
        rt = function() {
          return i.a.createElement(
            C.a.Container,
            { id: 'home', Background: tt },
            i.a.createElement(l.StaticQuery, {
              query: '1816468451',
              render: function(e) {
                var t = e.contentfulAbout,
                  n = e.site,
                  o = t.name,
                  a = t.socialLinks,
                  l = t.roles,
                  c = n.siteMetadata.deterministicBehaviour;
                return i.a.createElement(
                  r.Fragment,
                  null,
                  i.a.createElement(
                    s.Heading,
                    {
                      textAlign: 'center',
                      as: 'h1',
                      color: 'primary',
                      fontSize: [5, 6, 8],
                      mb: [3, 4, 5],
                    },
                    "Hi, I'm " + o + '!',
                  ),
                  i.a.createElement(
                    s.Heading,
                    {
                      as: 'h2',
                      color: 'primary',
                      fontSize: [4, 5, 6],
                      mb: [3, 5],
                      textAlign: 'center',
                      style: nt,
                    },
                    i.a.createElement(
                      I,
                      { interval: 5e3 },
                      l
                        .sort(function() {
                          return c || Math.random() - 0.5;
                        })
                        .map(function(e) {
                          return i.a.createElement(
                            s.Text,
                            { width: [300, 500], key: e },
                            e,
                          );
                        }),
                    ),
                  ),
                  i.a.createElement(
                    s.Flex,
                    {
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                    },
                    a.map(function(e) {
                      var t = e.id,
                        n = (function(e, t) {
                          if (null == e) return {};
                          var n,
                            r,
                            i = {},
                            o = Object.keys(e);
                          for (r = 0; r < o.length; r++)
                            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                          return i;
                        })(e, ['id']);
                      return i.a.createElement(
                        s.Box,
                        { mx: 3, fontSize: [5, 6, 6], key: t },
                        i.a.createElement(Ge, n),
                      );
                    }),
                  ),
                  i.a.createElement(A.c, { section: 'about' }, function(e) {
                    var t = e.onClick;
                    return i.a.createElement($e, { onClick: t });
                  }),
                );
              },
              data: a,
            }),
          );
        },
        it = n(322),
        ot = n(323),
        at = n.n(ot),
        lt = n(285),
        st = n.n(lt),
        ct =
          (n(177),
          Ye.default.a.withConfig({
            displayName: 'MarkdownRenderer__StyledLink',
            componentId: 'sc-18jt37u-0',
          })(
            [
              "display:inline-block;transition:color 250ms,text-shadow 250ms;color:black;cursor:pointer;position:relative;text-decoration:none;&:after{position:absolute;z-index:-1;bottom:1px;left:50%;transform:translateX(-50%);content:'';width:100%;height:3px;background-color:",
              ';transition:all 250ms;}&:hover{color:white;&::after{height:110%;width:110%;}}',
            ],
            function(e) {
              return e.theme.colors.primaryLight;
            },
          )),
        ut = Ye.default.p.withConfig({
          displayName: 'MarkdownRenderer__MarkdownParagraph',
          componentId: 'sc-18jt37u-1',
        })(['line-height:2em;&:first-child{margin-top:0em;}']),
        ft = Ye.default.ul.withConfig({
          displayName: 'MarkdownRenderer__MarkdownList',
          componentId: 'sc-18jt37u-2',
        })(['margin:0;']),
        pt = Ye.default.li.withConfig({
          displayName: 'MarkdownRenderer__MarkdownListItem',
          componentId: 'sc-18jt37u-3',
        })(['margin:1em 0;line-height:2em;']),
        dt = {
          paragraph: function(e) {
            return i.a.createElement(ut, e);
          },
          list: function(e) {
            return i.a.createElement(ft, e);
          },
          listItem: function(e) {
            return i.a.createElement(pt, e);
          },
          link: function(e) {
            var t = e.href,
              n = e.children;
            return t.startsWith('#')
              ? i.a.createElement(
                  A.c,
                  { section: t.substring(1, t.length) },
                  function(e) {
                    var t = e.onClick;
                    return i.a.createElement(ct, { onClick: t }, n);
                  },
                )
              : i.a.createElement(
                  ct,
                  { href: t, target: '_blank', rel: 'noreferrer' },
                  n,
                );
          },
        },
        ht = function() {
          return i.a.createElement(
            'div',
            null,
            i.a.createElement(et.a, {
              color: 'secondaryLight',
              height: ['50vh', '20vh'],
              width: ['50vw', '50vw'],
              invertY: !0,
            }),
            i.a.createElement(et.a, {
              color: 'primaryDark',
              height: ['20vh', '40vh'],
              width: ['75vw', '70vw'],
              invertX: !0,
            }),
            i.a.createElement(et.a, {
              color: 'backgroundDark',
              height: ['25vh', '20vh'],
              width: ['100vw', '100vw'],
            }),
          );
        },
        mt = Object(Ye.default)(s.Image).withConfig({
          displayName: 'About__ProfilePicture',
          componentId: 'sc-1epo0wx-0',
        })([
          'border-radius:50%;transition:all 0.25s ease-out;&:hover{border-radius:20%;}',
        ]),
        gt = function() {
          return i.a.createElement(
            C.a.Container,
            { id: 'about', Background: ht },
            i.a.createElement(C.a.Header, {
              name: 'About me',
              icon: '🙋‍♂️',
              label: 'person',
            }),
            i.a.createElement(l.StaticQuery, {
              query: '1331387878',
              render: function(e) {
                var t = e.contentfulAbout,
                  n = t.aboutMe,
                  r = t.profile;
                return i.a.createElement(
                  s.Flex,
                  {
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  },
                  i.a.createElement(
                    s.Box,
                    { width: [1, 1, 4 / 6], px: [1, 2, 4] },
                    i.a.createElement(
                      st.a,
                      { bottom: !0 },
                      i.a.createElement(at.a, {
                        source: n.childMarkdownRemark.rawMarkdownBody,
                        renderers: dt,
                      }),
                    ),
                  ),
                  i.a.createElement(
                    s.Box,
                    {
                      width: [1, 1, 2 / 6],
                      style: { maxWidth: '300px', margin: 'auto' },
                    },
                    i.a.createElement(
                      st.a,
                      { right: !0 },
                      i.a.createElement(mt, {
                        src: r.image.src,
                        alt: r.title,
                        mt: [4, 4, 0],
                        ml: [0, 0, 1],
                      }),
                    ),
                  ),
                );
              },
              data: it,
            }),
          );
        },
        vt = n(403),
        yt = Ye.default.div.withConfig({
          displayName: 'Card__CardContainer',
          componentId: 'sc-1ta9k8w-0',
        })(
          [
            'display:grid;grid-gap:30px;grid-template-columns:repeat( auto-fill,minmax(',
            ',1fr) );justify-items:center;@media only screen and (max-width:400px){grid-template-columns:repeat(auto-fill,minmax(280px,1fr));}',
          ],
          function(e) {
            return e.minWidth;
          },
        ),
        bt = Object(Ye.default)(s.Card)
          .attrs({ bg: 'white', boxShadow: 0, borderRadius: 8 })
          .withConfig({ displayName: 'Card', componentId: 'sc-1ta9k8w-1' })(
          [
            'position:relative;box-shadow:0 2px 2px rgba(0,0,0,0.2);transition:all 0.25s;top:0;height:100%;cursor:',
            ';&:hover{top:-10px;box-shadow:0 12px 16px rgba(0,0,0,0.2);}',
          ],
          function(e) {
            return e.onClick ? 'pointer' : 'default';
          },
        ),
        wt = {
          'top-left':
            'polygon(0 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%);',
          'top-right': 'polygon(0 0%, 100% 0%, 100% 100%, 20px 100%);',
          'bottom-right': 'polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%);',
          'bottom-left':
            'polygon(0 0%, calc(100% - 20px) 0%, 100% 100%, 0% 100%);',
        },
        It = {
          'top-left': '8px 0 0 0',
          'top-right': '0 8px 0 0',
          'bottom-right': '0 0 8px 0',
          'bottom-left': '0 0 0 8px',
        },
        At = Object(Ye.default)(s.Box).withConfig({
          displayName: 'ImageSubtitle',
          componentId: 'sc-1e7i66g-0',
        })(
          [
            'position:absolute;display:inline;padding:10px;font-size:14px;font-weight:600;text-transform:uppercase;',
            ':0;',
            ':0;',
            ' clip-path:',
            ';',
            '',
          ],
          function(e) {
            return e.x;
          },
          function(e) {
            return e.y;
          },
          function(e) {
            return 'left' === e.x
              ? 'padding-right: 20px;'
              : 'padding-left: 20px;';
          },
          function(e) {
            return wt[e.y + '-' + e.x];
          },
          function(e) {
            return e.round && 'border-radius: ' + It[e.y + '-' + e.x] + ';';
          },
        );
      (At.propTypes = {
        x: Ne.a.oneOf(['left', 'right']),
        y: Ne.a.oneOf(['top', 'bottom']),
        round: Ne.a.bool,
      }),
        (At.defaultProps = { x: 'left', y: 'top', round: !1 });
      var Ct = At,
        xt = {
          xs: '@media screen and (max-width: 40em)',
          sm: '@media screen and (min-width: 40em) and (max-width: 52em)',
          md: '@media screen and (min-width: 52em) and (max-width: 64em)',
          lg: '@media screen and (min-width: 64em)',
        },
        kt = function(e) {
          return function(t) {
            var n;
            return t[e] && (((n = {})[xt[e]] = { display: 'none' }), n);
          };
        },
        Ot = kt('xs'),
        Et = kt('sm'),
        St = kt('md'),
        Tt = kt('lg'),
        jt = Ye.default.div.withConfig({
          displayName: 'Hide',
          componentId: 'sc-148ocpz-0',
        })([], Ot, Et, St, Tt, function(e) {
          var t;
          return e.query && (((t = {})[e.query] = { display: 'none' }), t);
        }),
        Nt = function() {
          return i.a.createElement(
            'div',
            null,
            i.a.createElement(et.a, {
              color: 'secondaryLight',
              height: ['80vh', '80vh'],
              width: ['100vw', '100vw'],
              invertX: !0,
            }),
            i.a.createElement(et.a, {
              color: 'background',
              height: ['50vh', '20vh'],
              width: ['50vw', '50vw'],
              invertX: !0,
            }),
            i.a.createElement(et.a, {
              color: 'primaryDark',
              height: ['25vh', '40vh'],
              width: ['75vw', '60vw'],
              invertX: !0,
              invertY: !0,
            }),
            i.a.createElement(et.a, {
              color: 'backgroundDark',
              height: ['25vh', '20vh'],
              width: ['100vw', '100vw'],
              invertY: !0,
            }),
          );
        },
        Pt = '@media (max-width: 400px)',
        Mt = Object(Ye.default)(s.Text).withConfig({
          displayName: 'Projects__Title',
          componentId: 'mcap94-0',
        })(
          [
            'font-size:14px;font-weight:600;text-transform:uppercase;display:table;border-bottom:',
            ' 5px solid;',
          ],
          function(e) {
            return e.theme.colors.primary;
          },
        ),
        Lt = Ye.default.div.withConfig({
          displayName: 'Projects__TextContainer',
          componentId: 'mcap94-1',
        })(
          [
            'display:flex;flex-direction:column;padding:10px;width:100%;width:calc(100% - ',
            ');',
            '{width:calc(100% - (',
            ' / 2));}',
          ],
          '200px',
          Pt,
          '200px',
        ),
        _t = Ye.default.div.withConfig({
          displayName: 'Projects__ImageContainer',
          componentId: 'mcap94-2',
        })(
          ['margin:auto;width:', ';', '{width:calc(', ' / 2);}'],
          '200px',
          Pt,
          '200px',
        ),
        Dt = Object(Ye.default)(s.Image).withConfig({
          displayName: 'Projects__ProjectImage',
          componentId: 'mcap94-3',
        })(
          [
            'width:',
            ';height:',
            ';padding:40px;margin-top:0px;',
            '{height:calc(',
            ' / 2);width:calc(',
            ' / 2);margin-top:calc(',
            ' / 4);padding:10px;}',
          ],
          '200px',
          '200px',
          Pt,
          '200px',
          '200px',
          '200px',
        ),
        Ht = Ye.default.div.withConfig({
          displayName: 'Projects__ProjectTag',
          componentId: 'mcap94-4',
        })(
          [
            'position:relative;height:',
            ';top:calc( -',
            ' - 3.5px );',
            '{top:calc(-',
            ' - 3.5px + (',
            ' / 4));}',
          ],
          '200px',
          '200px',
          Pt,
          '200px',
          '200px',
        ),
        Rt = function(e) {
          var t = e.name,
            n = e.description,
            r = e.projectUrl,
            o = e.repositoryUrl,
            a = e.type,
            l = e.publishedDate,
            c = e.logo;
          return i.a.createElement(
            bt,
            { p: 0 },
            i.a.createElement(
              s.Flex,
              { style: { height: '200px' } },
              i.a.createElement(
                Lt,
                null,
                i.a.createElement(
                  'span',
                  null,
                  i.a.createElement(Mt, { my: 2, pb: 1 }, t),
                ),
                i.a.createElement(
                  s.Text,
                  { width: [1], style: { overflow: 'auto' } },
                  n,
                ),
              ),
              i.a.createElement(
                _t,
                null,
                i.a.createElement(Dt, { src: c.image.src, alt: c.title }),
                i.a.createElement(
                  Ht,
                  null,
                  i.a.createElement(
                    s.Flex,
                    { style: { float: 'right' } },
                    i.a.createElement(
                      s.Box,
                      { mx: 1, fontSize: 5 },
                      i.a.createElement(Ge, {
                        name: 'Check repository',
                        fontAwesomeIcon: 'github',
                        url: o,
                      }),
                    ),
                    i.a.createElement(
                      s.Box,
                      { mx: 1, fontSize: 5 },
                      i.a.createElement(Ge, {
                        name: 'See project',
                        fontAwesomeIcon: 'globe',
                        url: r,
                      }),
                    ),
                  ),
                  i.a.createElement(
                    Ct,
                    {
                      bg: 'primary',
                      color: 'white',
                      y: 'bottom',
                      x: 'right',
                      round: !0,
                    },
                    a,
                  ),
                  i.a.createElement(
                    jt,
                    { query: Pt },
                    i.a.createElement(Ct, { bg: 'backgroundDark' }, l),
                  ),
                ),
              ),
            ),
          );
        },
        zt = function() {
          return i.a.createElement(
            C.a.Container,
            { id: 'projects', Background: Nt },
            i.a.createElement(C.a.Header, {
              name: 'Projects',
              icon: '💻',
              label: 'notebook',
            }),
            i.a.createElement(l.StaticQuery, {
              query: '3598858759',
              render: function(e) {
                var t = e.contentfulAbout;
                return i.a.createElement(
                  yt,
                  { minWidth: '350px' },
                  t.projects.map(function(e, t) {
                    return i.a.createElement(
                      st.a,
                      { bottom: !0, delay: 200 * t, key: e.id },
                      i.a.createElement(Rt, e),
                    );
                  }),
                );
              },
              data: vt,
            }),
          );
        },
        Wt = n(404);
      var Zt = function() {
          return i.a.createElement(
            'div',
            null,
            i.a.createElement(et.a, {
              color: 'backgroundDark',
              height: ['15vh', '10vh'],
              width: ['100vw', '100vw'],
              invertX: !0,
            }),
            i.a.createElement(et.a, {
              color: 'secondary',
              height: ['50vh', '40vh'],
              width: ['70vw', '40vw'],
              invertY: !0,
            }),
            i.a.createElement(et.a, {
              color: 'primaryDark',
              height: ['40vh', '15vh'],
              width: ['100vw', '100vw'],
              invertX: !0,
              invertY: !0,
            }),
          );
        },
        Bt = Ye.default.img.withConfig({
          displayName: 'Writing__CoverImage',
          componentId: 'sc-1bgpzyr-0',
        })(['width:100%;object-fit:cover;']),
        Yt = Object(Ye.default)(s.Heading).withConfig({
          displayName: 'Writing__EllipsisHeading',
          componentId: 'sc-1bgpzyr-1',
        })(
          [
            'overflow:hidden;text-overflow:ellipsis;font-size:18px;display:-webkit-inline-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;border-bottom:',
            ' 5px solid;',
          ],
          function(e) {
            return e.theme.colors.primary;
          },
        ),
        Ft = function(e) {
          var t = e.title,
            n = e.text,
            r = e.image,
            o = e.url,
            a = e.date,
            l = e.time;
          return i.a.createElement(
            bt,
            {
              onClick: function() {
                return window.open(o, '_blank');
              },
              pb: 4,
            },
            i.a.createElement(Yt, { m: 3, p: 1 }, t),
            r && i.a.createElement(Bt, { src: r, height: '200px', alt: t }),
            i.a.createElement(s.Text, { m: 3 }, n),
            i.a.createElement(
              Ct,
              {
                bg: 'primary',
                color: 'white',
                x: 'right',
                y: 'bottom',
                round: !0,
              },
              a + ' - ' + Math.ceil(l) + ' min',
            ),
          );
        },
        Ut = function(e) {
          var t = e.username,
            n = e.name,
            r = e.number;
          return i.a.createElement(
            bt,
            {
              onClick: function() {
                return window.open('https://medium.com/' + t + '/', '_blank');
              },
              p: 4,
            },
            i.a.createElement(
              s.Flex,
              {
                flexDirection: 'column',
                justifyContent: 'space-between',
                style: { height: '100%' },
              },
              i.a.createElement(
                s.Box,
                null,
                i.a.createElement(
                  Yt,
                  { fontSize: 5, my: 2 },
                  'Hooray!  ',
                  i.a.createElement(
                    'span',
                    { role: 'img', 'aria-label': 'party' },
                    '🎉',
                  ),
                ),
                i.a.createElement(
                  s.Heading,
                  { lineHeight: 1.5 },
                  'It seems that',
                  i.a.createElement(s.Text, { color: 'secondary' }, n),
                  'has published ' + r + ' more posts!',
                ),
              ),
              i.a.createElement(
                s.Heading,
                { color: 'primary', mt: 5, textAlign: 'right' },
                'Go to Medium  ',
                i.a.createElement(Ue.a, {
                  name: 'arrow-right',
                  'aria-label': 'Go to Medium',
                }),
              ),
            ),
          );
        },
        Vt = function() {
          return i.a.createElement(l.StaticQuery, {
            query: '2935304898',
            render: function(e) {
              var t,
                n = e.allMediumPost,
                r = e.site,
                o = e.author,
                a = ((t = n),
                t.edges.map(function(e) {
                  return e.node;
                })).map(
                  (function(e) {
                    return function(t) {
                      var n = t.id,
                        r = t.uniqueSlug,
                        i = t.createdAt,
                        o = t.title,
                        a = t.virtuals,
                        l =
                          a.previewImage.imageId &&
                          'https://cdn-images-1.medium.com/max/400/' +
                            a.previewImage.imageId;
                      return {
                        id: n,
                        title: o,
                        time: a.readingTime,
                        date: i,
                        text: a.subtitle,
                        image: l,
                        url: 'https://medium.com/' + e.username + '/' + r,
                        Component: Ft,
                      };
                    };
                  })(o),
                ),
                l = n.totalCount - a.length;
              return (
                l > 0 &&
                  a.push(
                    Object.assign({}, o, {
                      id: 'more-field',
                      number: l,
                      Component: Ut,
                    }),
                  ),
                r.siteMetadata.isMediumUserDefined &&
                  i.a.createElement(
                    C.a.Container,
                    { id: 'writing', Background: Zt },
                    i.a.createElement(C.a.Header, {
                      name: 'Writing',
                      icon: '✍️',
                      label: 'writing',
                    }),
                    i.a.createElement(
                      yt,
                      { minWidth: '300px' },
                      a.map(function(e) {
                        var t = e.Component,
                          n = (function(e, t) {
                            if (null == e) return {};
                            var n,
                              r,
                              i = {},
                              o = Object.keys(e);
                            for (r = 0; r < o.length; r++)
                              (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                          })(e, ['Component']);
                        return i.a.createElement(
                          st.a,
                          { bottom: !0, key: n.id },
                          i.a.createElement(
                            t,
                            Object.assign({}, n, { key: n.id }),
                          ),
                        );
                      }),
                    ),
                  )
              );
            },
            data: Wt,
          });
        },
        Gt = (n(89), n(175), n(34), n(31), n(180), n(405)),
        qt = n.n(Gt),
        Xt = n(159),
        Jt = function(e) {
          var t = e.onClick,
            n = e.selected,
            r = e.name;
          return i.a.createElement(
            s.Box,
            { ml: [2, 3], color: 'background', fontSize: [2, 3] },
            i.a.createElement(Xt.a, { onClick: t, selected: n }, r),
          );
        },
        Kt = n(407),
        Qt = n.n(Kt);
      function $t(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance',
            );
          })()
        );
      }
      var en = Object(Ye.default)(qt.a).withConfig({
          displayName: 'Header__HeaderContainer',
          componentId: 'sc-4ejxt5-0',
        })(
          ['.headroom--pinned{background:', ';}position:absolute;width:100%;'],
          function(e) {
            return e.theme.colors.primaryDark;
          },
        ),
        tn = function() {
          return i.a.createElement(
            en,
            null,
            i.a.createElement(
              st.a,
              { top: !0 },
              i.a.createElement(
                s.Flex,
                {
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 3,
                },
                i.a.createElement(A.d, null, function(e) {
                  var t = (function(e) {
                      return Object.entries(e).reduce(
                        function(e, t) {
                          var n,
                            r = t[0],
                            i = t[1];
                          return 'home' === r
                            ? Object.assign({}, e, { home: i })
                            : Object.assign({}, e, {
                                links: [].concat($t(e.links), [
                                  {
                                    name:
                                      ((n = r),
                                      n && n[0].toUpperCase() + n.slice(1)),
                                    value: i,
                                  },
                                ]),
                              });
                        },
                        { links: [], home: null },
                      );
                    })(e.allLinks),
                    n = t.home,
                    o = t.links,
                    a =
                      n &&
                      i.a.createElement(s.Image, {
                        src: Qt.a,
                        width: '50px',
                        alt: 'Portfolio Logo',
                        onClick: n.onClick,
                        style: { cursor: 'pointer' },
                      }),
                    l = o.map(function(e) {
                      var t = e.name,
                        n = e.value;
                      return i.a.createElement(Jt, {
                        key: t,
                        onClick: n.onClick,
                        selected: n.selected,
                        name: t,
                      });
                    });
                  return i.a.createElement(
                    r.Fragment,
                    null,
                    a,
                    i.a.createElement(s.Flex, { mr: [0, 3, 5] }, l),
                  );
                }),
              ),
            ),
          );
        },
        nn = n(408);
      var rn = Ye.default.div.withConfig({
          displayName: 'Footer__FooterContainer',
          componentId: 'sc-125l0ns-0',
        })([
          'min-width:320px;max-width:1366px;display:flex;flex:0 1 auto;flex-direction:row;justify-content:space-between;align-items:center;margin:auto;',
        ]),
        on = Object(Ye.default)(s.Text).withConfig({
          displayName: 'Footer__TextFooter',
          componentId: 'sc-125l0ns-1',
        })(
          ['color:', ';& a{color:', ';}'],
          function(e) {
            return e.theme.colors.background;
          },
          function(e) {
            return e.theme.colors.background;
          },
        ),
        an = function() {
          return i.a.createElement(l.StaticQuery, {
            query: '1394511336',
            render: function(e) {
              var t = e.contentfulAbout,
                n = t.name,
                r = t.socialLinks;
              return i.a.createElement(
                s.Box,
                { p: 3, backgroundColor: 'primaryDark', as: 'footer' },
                i.a.createElement(
                  rn,
                  null,
                  i.a.createElement(
                    st.a,
                    { left: !0 },
                    i.a.createElement(
                      on,
                      { fontSize: [2, 3] },
                      i.a.createElement(
                        'span',
                        null,
                        n + "'s Portfolio - Powered by ",
                      ),
                      i.a.createElement(
                        s.Link,
                        { href: 'https://www.gatsbyjs.org/' },
                        'Gatsby',
                      ),
                      i.a.createElement('span', null, ', '),
                      i.a.createElement(
                        s.Link,
                        { href: 'https://www.contentful.com/', mr: 1 },
                        'Contentful',
                      ),
                      i.a.createElement('span', null, ' and '),
                      i.a.createElement(
                        s.Link,
                        { href: 'https://www.netlify.com/', mr: 1 },
                        'Netlify',
                      ),
                      i.a.createElement(
                        'span',
                        { role: 'img', 'aria-label': 'heart' },
                        '🚀',
                      ),
                    ),
                  ),
                  i.a.createElement(
                    s.Flex,
                    null,
                    i.a.createElement(
                      st.a,
                      { right: !0 },
                      r.map(function(e) {
                        var t = e.id,
                          n = (function(e, t) {
                            if (null == e) return {};
                            var n,
                              r,
                              i = {},
                              o = Object.keys(e);
                            for (r = 0; r < o.length; r++)
                              (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                          })(e, ['id']);
                        return i.a.createElement(
                          s.Box,
                          { mx: [2, 3], fontSize: [4, 5], key: t },
                          i.a.createElement(
                            Ge,
                            Object.assign({}, n, { color: 'background' }),
                          ),
                        );
                      }),
                    ),
                  ),
                ),
              );
            },
            data: nn,
          });
        };
      t.default = function() {
        return i.a.createElement(
          o.a,
          null,
          i.a.createElement(tn, null),
          i.a.createElement(rt, null),
          i.a.createElement(gt, null),
          i.a.createElement(zt, null),
          i.a.createElement(Vt, null),
          i.a.createElement(an, null),
        );
      };
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        return i.test('number' == typeof e ? r(e) : e.charAt(0));
      };
      var r = String.fromCharCode,
        i = /\s/;
    },
    function(e, t) {
      e.exports = function() {
        for (var e = {}, t = 0; t < arguments.length; t++) {
          var r = arguments[t];
          for (var i in r) n.call(r, i) && (e[i] = r[i]);
        }
        return e;
      };
      var n = Object.prototype.hasOwnProperty;
    },
    function(e, t, n) {
      n(17),
        ((t = e.exports = function(e) {
          return e.replace(/^\s*|\s*$/g, '');
        }).left = function(e) {
          return e.replace(/^\s*/, '');
        }),
        (t.right = function(e) {
          return e.replace(/\s*$/, '');
        });
    },
    function(e, t, n) {
      'use strict';
      function r(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      function i(e, t) {
        var n = t.distance,
          r = t.left,
          i = t.right,
          o = t.up,
          a = t.down,
          l = t.top,
          c = t.bottom,
          u = t.big,
          f = t.mirror,
          d = t.opposite,
          h =
            (n ? n.toString() : 0) +
            ((r ? 1 : 0) |
              (i ? 2 : 0) |
              (l || a ? 4 : 0) |
              (c || o ? 8 : 0) |
              (f ? 16 : 0) |
              (d ? 32 : 0) |
              (e ? 64 : 0) |
              (u ? 128 : 0));
        if (p.hasOwnProperty(h)) return p[h];
        var m = r || i || o || a || l || c,
          g = void 0,
          v = void 0;
        if (m) {
          if (!f != !(e && d)) {
            var y = [i, r, c, l, a, o];
            (r = y[0]),
              (i = y[1]),
              (l = y[2]),
              (c = y[3]),
              (o = y[4]),
              (a = y[5]);
          }
          var b = n || (u ? '2000px' : '100%');
          (g = r ? '-' + b : i ? b : '0'),
            (v = a || l ? '-' + b : o || c ? b : '0');
        }
        return (
          (p[h] = (0, s.animation)(
            (e ? 'to' : 'from') +
              ' {opacity: 0;' +
              (m ? ' transform: translate3d(' + g + ', ' + v + ', 0);' : '') +
              '}\n     ' +
              (e ? 'from' : 'to') +
              ' {opacity: 1;transform: none;} ',
          )),
          p[h]
        );
      }
      function o() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : s.defaults,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.children,
          o = (e.out, e.forever),
          a = e.timeout,
          l = e.duration,
          c = void 0 === l ? s.defaults.duration : l,
          f = e.delay,
          p = void 0 === f ? s.defaults.delay : f,
          d = e.count,
          h = void 0 === d ? s.defaults.count : d,
          m = r(e, [
            'children',
            'out',
            'forever',
            'timeout',
            'duration',
            'delay',
            'count',
          ]),
          g = {
            make: i,
            duration: void 0 === a ? c : a,
            delay: p,
            forever: o,
            count: h,
            style: { animationFillMode: 'both' },
            reverse: m.left,
          };
        return t ? (0, u.default)(m, g, g, n) : g;
      }
      n(29),
        n(41),
        n(55),
        n(2),
        n(183),
        n(12),
        Object.defineProperty(t, '__esModule', { value: !0 });
      var a,
        l = n(21),
        s = n(84),
        c = n(184),
        u = (a = c) && a.__esModule ? a : { default: a },
        f = {
          out: l.bool,
          left: l.bool,
          right: l.bool,
          top: l.bool,
          bottom: l.bool,
          big: l.bool,
          mirror: l.bool,
          opposite: l.bool,
          duration: l.number,
          timeout: l.number,
          distance: l.string,
          delay: l.number,
          count: l.number,
          forever: l.bool,
        },
        p = {};
      (o.propTypes = f), (t.default = o), (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.default = function(e) {
          var t = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              (t[n] = 'number' == typeof e[n] ? e[n] : e[n].val);
          return t;
        }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      (function(t) {
        for (
          var r = n(315),
            i = 'undefined' == typeof window ? t : window,
            o = ['moz', 'webkit'],
            a = 'AnimationFrame',
            l = i['request' + a],
            s = i['cancel' + a] || i['cancelRequest' + a],
            c = 0;
          !l && c < o.length;
          c++
        )
          (l = i[o[c] + 'Request' + a]),
            (s = i[o[c] + 'Cancel' + a] || i[o[c] + 'CancelRequest' + a]);
        if (!l || !s) {
          var u = 0,
            f = 0,
            p = [];
          (l = function(e) {
            if (0 === p.length) {
              var t = r(),
                n = Math.max(0, 1e3 / 60 - (t - u));
              (u = n + t),
                setTimeout(function() {
                  var e = p.slice(0);
                  p.length = 0;
                  for (var t = 0; t < e.length; t++)
                    if (!e[t].cancelled)
                      try {
                        e[t].callback(u);
                      } catch (n) {
                        setTimeout(function() {
                          throw n;
                        }, 0);
                      }
                }, Math.round(n));
            }
            return p.push({ handle: ++f, callback: e, cancelled: !1 }), f;
          }),
            (s = function(e) {
              for (var t = 0; t < p.length; t++)
                p[t].handle === e && (p[t].cancelled = !0);
            });
        }
        (e.exports = function(e) {
          return l.call(i, e);
        }),
          (e.exports.cancel = function() {
            s.apply(i, arguments);
          }),
          (e.exports.polyfill = function(e) {
            e || (e = i),
              (e.requestAnimationFrame = l),
              (e.cancelAnimationFrame = s);
          });
      }.call(this, n(176)));
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        var t = 'string' == typeof e ? e.charCodeAt(0) : e;
        return t >= 48 && t <= 57;
      };
    },
    function(e, t, n) {
      'use strict';
      n(12), (e.exports = l);
      var r = n(356),
        i = r.CONTINUE,
        o = r.SKIP,
        a = r.EXIT;
      function l(e, t, n, i) {
        'function' == typeof t &&
          'function' != typeof n &&
          ((i = n), (n = t), (t = null)),
          r(
            e,
            t,
            function(e, t) {
              var r = t[t.length - 1],
                i = r ? r.children.indexOf(e) : null;
              return n(e, i, r);
            },
            i,
          );
      }
      (l.CONTINUE = i), (l.SKIP = o), (l.EXIT = a);
    },
    function(e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.default = function(e) {
          var t = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = 0);
          return t;
        }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.default = function(e, t, n, i, o, a, l) {
          var s = n + (-o * (t - i) + -a * n) * e,
            c = t + s * e;
          if (Math.abs(s) < l && Math.abs(c - i) < l)
            return (r[0] = i), (r[1] = 0), r;
          return (r[0] = c), (r[1] = s), r;
        });
      var r = [0, 0];
      e.exports = t.default;
    },
    function(e, t, n) {
      (function(t) {
        n(44),
          function() {
            var n, r, i;
            'undefined' != typeof performance &&
            null !== performance &&
            performance.now
              ? (e.exports = function() {
                  return performance.now();
                })
              : null != t && t.hrtime
              ? ((e.exports = function() {
                  return (n() - i) / 1e6;
                }),
                (r = t.hrtime),
                (i = (n = function() {
                  var e;
                  return 1e9 * (e = r())[0] + e[1];
                })()))
              : Date.now
              ? ((e.exports = function() {
                  return Date.now() - i;
                }),
                (i = Date.now()))
              : ((e.exports = function() {
                  return new Date().getTime() - i;
                }),
                (i = new Date().getTime()));
          }.call(this);
      }.call(this, n(174)));
    },
    function(e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.default = function(e, t, n) {
          for (var r in t)
            if (Object.prototype.hasOwnProperty.call(t, r)) {
              if (0 !== n[r]) return !1;
              var i = 'number' == typeof t[r] ? t[r] : t[r].val;
              if (e[r] !== i) return !1;
            }
          return !0;
        }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      var r = n(345),
        i = n(346),
        o = n(288),
        a = n(347),
        l = n(348),
        s = n(349);
      e.exports = function(e, t) {
        var n,
          o,
          a = {};
        t || (t = {});
        for (o in p) (n = t[o]), (a[o] = null == n ? p[o] : n);
        (a.position.indent || a.position.start) &&
          ((a.indent = a.position.indent || []),
          (a.position = a.position.start));
        return (function(e, t) {
          var n,
            o,
            a,
            p,
            b,
            w,
            I,
            A,
            C,
            x,
            k,
            O,
            E,
            S,
            T,
            j,
            N,
            P,
            M,
            L = t.additional,
            _ = t.nonTerminated,
            D = t.text,
            H = t.reference,
            R = t.warning,
            z = t.textContext,
            W = t.referenceContext,
            Z = t.warningContext,
            B = t.position,
            Y = t.indent || [],
            F = e.length,
            U = 0,
            V = -1,
            G = B.column || 1,
            q = B.line || 1,
            X = '',
            J = [];
          'string' == typeof L && (L = L.charCodeAt(0));
          (j = Q()),
            (A = R
              ? function(e, t) {
                  var n = Q();
                  (n.column += t), (n.offset += t), R.call(Z, v[e], n, e);
                }
              : f),
            U--,
            F++;
          for (; ++U < F; )
            if ((10 === b && (G = Y[V] || 1), 38 === (b = e.charCodeAt(U)))) {
              if (
                9 === (I = e.charCodeAt(U + 1)) ||
                10 === I ||
                12 === I ||
                32 === I ||
                38 === I ||
                60 === I ||
                I != I ||
                (L && I === L)
              ) {
                (X += u(b)), G++;
                continue;
              }
              for (
                O = E = U + 1,
                  M = E,
                  35 === I
                    ? ((M = ++O),
                      88 === (I = e.charCodeAt(M)) || 120 === I
                        ? ((S = h), (M = ++O))
                        : (S = 'decimal'))
                    : (S = d),
                  n = '',
                  k = '',
                  p = '',
                  T = g[S],
                  M--;
                ++M < F && ((I = e.charCodeAt(M)), T(I));

              )
                (p += u(I)), S === d && c.call(r, p) && ((n = p), (k = r[p]));
              (a = 59 === e.charCodeAt(M)) &&
                (M++, (o = S === d && s(p)) && ((n = p), (k = o))),
                (P = 1 + M - E),
                (a || _) &&
                  (p
                    ? S === d
                      ? (a && !k
                          ? A(5, 1)
                          : (n !== p &&
                              ((M = O + n.length), (P = 1 + M - O), (a = !1)),
                            a ||
                              ((C = n ? 1 : 3),
                              t.attribute
                                ? 61 === (I = e.charCodeAt(M))
                                  ? (A(C, P), (k = null))
                                  : l(I)
                                  ? (k = null)
                                  : A(C, P)
                                : A(C, P))),
                        (w = k))
                      : (a || A(2, P),
                        (w = parseInt(p, m[S])),
                        ((K = w) >= 55296 && K <= 57343) || K > 1114111
                          ? (A(7, P), (w = u(65533)))
                          : w in i
                          ? (A(6, P), (w = i[w]))
                          : ((x = ''),
                            y(w) && A(6, P),
                            w > 65535 &&
                              ((x += u(((w -= 65536) >>> 10) | 55296)),
                              (w = 56320 | (1023 & w))),
                            (w = x + u(w))))
                    : S !== d && A(4, P)),
                w
                  ? ($(),
                    (j = Q()),
                    (U = M - 1),
                    (G += M - E + 1),
                    J.push(w),
                    (N = Q()).offset++,
                    H && H.call(W, w, { start: j, end: N }, e.slice(E - 1, M)),
                    (j = N))
                  : ((p = e.slice(E - 1, M)),
                    (X += p),
                    (G += p.length),
                    (U = M - 1));
            } else
              10 === b && (q++, V++, (G = 0)),
                b == b ? ((X += u(b)), G++) : $();
          var K;
          return J.join('');
          function Q() {
            return { line: q, column: G, offset: U + (B.offset || 0) };
          }
          function $() {
            X &&
              (J.push(X), D && D.call(z, X, { start: j, end: Q() }), (X = ''));
          }
        })(e, a);
      };
      var c = {}.hasOwnProperty,
        u = String.fromCharCode,
        f = Function.prototype,
        p = {
          warning: null,
          reference: null,
          text: null,
          warningContext: null,
          referenceContext: null,
          textContext: null,
          position: {},
          additional: null,
          attribute: !1,
          nonTerminated: !0,
        },
        d = 'named',
        h = 'hexadecimal',
        m = { hexadecimal: 16, decimal: 10 },
        g = {};
      (g.named = l), (g.decimal = o), (g[h] = a);
      var v = {};
      function y(e) {
        return (
          (e >= 1 && e <= 8) ||
          11 === e ||
          (e >= 13 && e <= 31) ||
          (e >= 127 && e <= 159) ||
          (e >= 64976 && e <= 65007) ||
          65535 == (65535 & e) ||
          65534 == (65535 & e)
        );
      }
      (v[1] = 'Named character references must be terminated by a semicolon'),
        (v[2] =
          'Numeric character references must be terminated by a semicolon'),
        (v[3] = 'Named character references cannot be empty'),
        (v[4] = 'Numeric character references cannot be empty'),
        (v[5] = 'Named character references must be known'),
        (v[6] = 'Numeric character references cannot be disallowed'),
        (v[7] =
          'Numeric character references cannot be outside the permissible Unicode range');
    },
    function(e, t, n) {
      'use strict';
      var r,
        i = '';
      e.exports = function(e, t) {
        if ('string' != typeof e) throw new TypeError('expected a string');
        if (1 === t) return e;
        if (2 === t) return e + e;
        var n = e.length * t;
        if (r !== e || void 0 === r) (r = e), (i = '');
        else if (i.length >= n) return i.substr(0, n);
        for (; n > i.length && t > 1; ) 1 & t && (i += e), (t >>= 1), (e += e);
        return (i = (i += e).substr(0, n));
      };
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        var t = String(e),
          n = t.length;
        for (; '\n' === t.charAt(--n); );
        return t.slice(0, n + 1);
      };
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e, t, n, r) {
        var i,
          o,
          a,
          l,
          s,
          c,
          u = ['pedantic', 'commonmark'],
          f = u.length,
          p = e.length,
          d = -1;
        for (; ++d < p; ) {
          for (i = e[d], o = i[1] || {}, a = i[0], l = -1, c = !1; ++l < f; )
            if (void 0 !== o[(s = u[l])] && o[s] !== n.options[s]) {
              c = !0;
              break;
            }
          if (!c && t[a].apply(n, r)) return !0;
        }
        return !1;
      };
    },
    function(e, t, n) {
      'use strict';
      var r = n(369);
      e.exports = function(e) {
        return r(e).toLowerCase();
      };
    },
    function(e, t, n) {
      'use strict';
      n(28),
        n(60),
        n(42),
        n(12),
        n(7),
        n(29),
        Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = l(n(0)),
        a = l(n(21));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = (function(e) {
        function t() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var e = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (e.displayName = 'FontAwesome'), e;
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          i(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.border,
                  n = e.cssModule,
                  i = e.className,
                  a = e.fixedWidth,
                  l = e.flip,
                  s = e.inverse,
                  c = e.name,
                  u = e.pulse,
                  f = e.rotate,
                  p = e.size,
                  d = e.spin,
                  h = e.stack,
                  m = e.tag,
                  g = void 0 === m ? 'span' : m,
                  v = e.ariaLabel,
                  y = (function(e, t) {
                    var n = {};
                    for (var r in e)
                      t.indexOf(r) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, r) &&
                          (n[r] = e[r]));
                    return n;
                  })(e, [
                    'border',
                    'cssModule',
                    'className',
                    'fixedWidth',
                    'flip',
                    'inverse',
                    'name',
                    'pulse',
                    'rotate',
                    'size',
                    'spin',
                    'stack',
                    'tag',
                    'ariaLabel',
                  ]),
                  b = v ? { 'aria-label': v } : { 'aria-hidden': !0 },
                  w = [];
                return (
                  n
                    ? (w.push(n.fa),
                      w.push(n['fa-' + c]),
                      p && w.push(n['fa-' + p]),
                      d && w.push(n['fa-spin']),
                      u && w.push(n['fa-pulse']),
                      t && w.push(n['fa-border']),
                      a && w.push(n['fa-fw']),
                      s && w.push(n['fa-inverse']),
                      l && w.push(n['fa-flip-' + l]),
                      f && w.push(n['fa-rotate-' + f]),
                      h && w.push(n['fa-stack-' + h]))
                    : (w.push('fa'),
                      w.push('fa-' + c),
                      p && w.push('fa-' + p),
                      d && w.push('fa-spin'),
                      u && w.push('fa-pulse'),
                      t && w.push('fa-border'),
                      a && w.push('fa-fw'),
                      s && w.push('fa-inverse'),
                      l && w.push('fa-flip-' + l),
                      f && w.push('fa-rotate-' + f),
                      h && w.push('fa-stack-' + h)),
                  i && w.push(i),
                  o.default.createElement(
                    g,
                    r({}, y, b, { className: w.join(' ') }),
                  )
                );
              },
            },
          ]),
          t
        );
      })(o.default.Component);
      (s.propTypes = {
        ariaLabel: a.default.string,
        border: a.default.bool,
        className: a.default.string,
        cssModule: a.default.object,
        fixedWidth: a.default.bool,
        flip: a.default.oneOf(['horizontal', 'vertical']),
        inverse: a.default.bool,
        name: a.default.string.isRequired,
        pulse: a.default.bool,
        rotate: a.default.oneOf([90, 180, 270]),
        size: a.default.oneOf(['lg', '2x', '3x', '4x', '5x']),
        spin: a.default.bool,
        stack: a.default.oneOf(['1x', '2x']),
        tag: a.default.string,
      }),
        (t.default = s),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      var r = n(8),
        i = n(35),
        o = n(57),
        a = n(124),
        l = n(90),
        s = n(15),
        c = n(91).f,
        u = n(123).f,
        f = n(19).f,
        p = n(179).trim,
        d = r.Number,
        h = d,
        m = d.prototype,
        g = 'Number' == o(n(71)(m)),
        v = 'trim' in String.prototype,
        y = function(e) {
          var t = l(e, !1);
          if ('string' == typeof t && t.length > 2) {
            var n,
              r,
              i,
              o = (t = v ? t.trim() : p(t, 3)).charCodeAt(0);
            if (43 === o || 45 === o) {
              if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN;
            } else if (48 === o) {
              switch (t.charCodeAt(1)) {
                case 66:
                case 98:
                  (r = 2), (i = 49);
                  break;
                case 79:
                case 111:
                  (r = 8), (i = 55);
                  break;
                default:
                  return +t;
              }
              for (var a, s = t.slice(2), c = 0, u = s.length; c < u; c++)
                if ((a = s.charCodeAt(c)) < 48 || a > i) return NaN;
              return parseInt(s, r);
            }
          }
          return +t;
        };
      if (!d(' 0o1') || !d('0b1') || d('+0x1')) {
        d = function(e) {
          var t = arguments.length < 1 ? 0 : e,
            n = this;
          return n instanceof d &&
            (g
              ? s(function() {
                  m.valueOf.call(n);
                })
              : 'Number' != o(n))
            ? a(new h(y(t)), n, d)
            : y(t);
        };
        for (
          var b,
            w = n(14)
              ? c(h)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                  ',',
                ),
            I = 0;
          w.length > I;
          I++
        )
          i(h, (b = w[I])) && !i(d, b) && f(d, b, u(h, b));
        (d.prototype = m), (m.constructor = d), n(24)(r, 'Number', d);
      }
    },
    function(e, t, n) {
      'use strict';
      (function(e) {
        n(45),
          n(43),
          n(122),
          n(86),
          n(87),
          n(28),
          n(69),
          n(22),
          n(312),
          n(178),
          n(17),
          n(18),
          n(56),
          n(4),
          n(6),
          n(13),
          n(20),
          n(120),
          n(7),
          n(29),
          n(2),
          n(12);
        var r =
            'undefined' != typeof window &&
            'undefined' != typeof document &&
            'undefined' != typeof navigator,
          i = (function() {
            for (
              var e = ['Edge', 'Trident', 'Firefox'], t = 0;
              t < e.length;
              t += 1
            )
              if (r && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
            return 0;
          })();
        var o =
          r && window.Promise
            ? function(e) {
                var t = !1;
                return function() {
                  t ||
                    ((t = !0),
                    window.Promise.resolve().then(function() {
                      (t = !1), e();
                    }));
                };
              }
            : function(e) {
                var t = !1;
                return function() {
                  t ||
                    ((t = !0),
                    setTimeout(function() {
                      (t = !1), e();
                    }, i));
                };
              };
        function a(e) {
          return e && '[object Function]' === {}.toString.call(e);
        }
        function l(e, t) {
          if (1 !== e.nodeType) return [];
          var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
          return t ? n[t] : n;
        }
        function s(e) {
          return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
        }
        function c(e) {
          if (!e) return document.body;
          switch (e.nodeName) {
            case 'HTML':
            case 'BODY':
              return e.ownerDocument.body;
            case '#document':
              return e.body;
          }
          var t = l(e),
            n = t.overflow,
            r = t.overflowX,
            i = t.overflowY;
          return /(auto|scroll|overlay)/.test(n + i + r) ? e : c(s(e));
        }
        function u(e) {
          return e && e.referenceNode ? e.referenceNode : e;
        }
        var f = r && !(!window.MSInputMethodContext || !document.documentMode),
          p = r && /MSIE 10/.test(navigator.userAgent);
        function d(e) {
          return 11 === e ? f : 10 === e ? p : f || p;
        }
        function h(e) {
          if (!e) return document.documentElement;
          for (
            var t = d(10) ? document.body : null, n = e.offsetParent || null;
            n === t && e.nextElementSibling;

          )
            n = (e = e.nextElementSibling).offsetParent;
          var r = n && n.nodeName;
          return r && 'BODY' !== r && 'HTML' !== r
            ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) &&
              'static' === l(n, 'position')
              ? h(n)
              : n
            : e
            ? e.ownerDocument.documentElement
            : document.documentElement;
        }
        function m(e) {
          return null !== e.parentNode ? m(e.parentNode) : e;
        }
        function g(e, t) {
          if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
          var n =
              e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            r = n ? e : t,
            i = n ? t : e,
            o = document.createRange();
          o.setStart(r, 0), o.setEnd(i, 0);
          var a,
            l,
            s = o.commonAncestorContainer;
          if ((e !== s && t !== s) || r.contains(i))
            return 'BODY' === (l = (a = s).nodeName) ||
              ('HTML' !== l && h(a.firstElementChild) !== a)
              ? h(s)
              : s;
          var c = m(e);
          return c.host ? g(c.host, t) : g(e, m(t).host);
        }
        function v(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'top',
            n = 'top' === t ? 'scrollTop' : 'scrollLeft',
            r = e.nodeName;
          if ('BODY' === r || 'HTML' === r) {
            var i = e.ownerDocument.documentElement,
              o = e.ownerDocument.scrollingElement || i;
            return o[n];
          }
          return e[n];
        }
        function y(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = v(t, 'top'),
            i = v(t, 'left'),
            o = n ? -1 : 1;
          return (
            (e.top += r * o),
            (e.bottom += r * o),
            (e.left += i * o),
            (e.right += i * o),
            e
          );
        }
        function b(e, t) {
          var n = 'x' === t ? 'Left' : 'Top',
            r = 'Left' === n ? 'Right' : 'Bottom';
          return (
            parseFloat(e['border' + n + 'Width']) +
            parseFloat(e['border' + r + 'Width'])
          );
        }
        function w(e, t, n, r) {
          return Math.max(
            t['offset' + e],
            t['scroll' + e],
            n['client' + e],
            n['offset' + e],
            n['scroll' + e],
            d(10)
              ? parseInt(n['offset' + e]) +
                  parseInt(r['margin' + ('Height' === e ? 'Top' : 'Left')]) +
                  parseInt(r['margin' + ('Height' === e ? 'Bottom' : 'Right')])
              : 0,
          );
        }
        function I(e) {
          var t = e.body,
            n = e.documentElement,
            r = d(10) && getComputedStyle(n);
          return { height: w('Height', t, n, r), width: w('Width', t, n, r) };
        }
        var A = function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          },
          C = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function(t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          x = function(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          },
          k =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            };
        function O(e) {
          return k({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height,
          });
        }
        function E(e) {
          var t = {};
          try {
            if (d(10)) {
              t = e.getBoundingClientRect();
              var n = v(e, 'top'),
                r = v(e, 'left');
              (t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
            } else t = e.getBoundingClientRect();
          } catch (p) {}
          var i = {
              left: t.left,
              top: t.top,
              width: t.right - t.left,
              height: t.bottom - t.top,
            },
            o = 'HTML' === e.nodeName ? I(e.ownerDocument) : {},
            a = o.width || e.clientWidth || i.width,
            s = o.height || e.clientHeight || i.height,
            c = e.offsetWidth - a,
            u = e.offsetHeight - s;
          if (c || u) {
            var f = l(e);
            (c -= b(f, 'x')), (u -= b(f, 'y')), (i.width -= c), (i.height -= u);
          }
          return O(i);
        }
        function S(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = d(10),
            i = 'HTML' === t.nodeName,
            o = E(e),
            a = E(t),
            s = c(e),
            u = l(t),
            f = parseFloat(u.borderTopWidth),
            p = parseFloat(u.borderLeftWidth);
          n &&
            i &&
            ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
          var h = O({
            top: o.top - a.top - f,
            left: o.left - a.left - p,
            width: o.width,
            height: o.height,
          });
          if (((h.marginTop = 0), (h.marginLeft = 0), !r && i)) {
            var m = parseFloat(u.marginTop),
              g = parseFloat(u.marginLeft);
            (h.top -= f - m),
              (h.bottom -= f - m),
              (h.left -= p - g),
              (h.right -= p - g),
              (h.marginTop = m),
              (h.marginLeft = g);
          }
          return (
            (r && !n ? t.contains(s) : t === s && 'BODY' !== s.nodeName) &&
              (h = y(h, t)),
            h
          );
        }
        function T(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            r = S(e, n),
            i = Math.max(n.clientWidth, window.innerWidth || 0),
            o = Math.max(n.clientHeight, window.innerHeight || 0),
            a = t ? 0 : v(n),
            l = t ? 0 : v(n, 'left'),
            s = {
              top: a - r.top + r.marginTop,
              left: l - r.left + r.marginLeft,
              width: i,
              height: o,
            };
          return O(s);
        }
        function j(e) {
          var t = e.nodeName;
          if ('BODY' === t || 'HTML' === t) return !1;
          if ('fixed' === l(e, 'position')) return !0;
          var n = s(e);
          return !!n && j(n);
        }
        function N(e) {
          if (!e || !e.parentElement || d()) return document.documentElement;
          for (var t = e.parentElement; t && 'none' === l(t, 'transform'); )
            t = t.parentElement;
          return t || document.documentElement;
        }
        function P(e, t, n, r) {
          var i =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = { top: 0, left: 0 },
            a = i ? N(e) : g(e, u(t));
          if ('viewport' === r) o = T(a, i);
          else {
            var l = void 0;
            'scrollParent' === r
              ? 'BODY' === (l = c(s(t))).nodeName &&
                (l = e.ownerDocument.documentElement)
              : (l = 'window' === r ? e.ownerDocument.documentElement : r);
            var f = S(l, a, i);
            if ('HTML' !== l.nodeName || j(a)) o = f;
            else {
              var p = I(e.ownerDocument),
                d = p.height,
                h = p.width;
              (o.top += f.top - f.marginTop),
                (o.bottom = d + f.top),
                (o.left += f.left - f.marginLeft),
                (o.right = h + f.left);
            }
          }
          var m = 'number' == typeof (n = n || 0);
          return (
            (o.left += m ? n : n.left || 0),
            (o.top += m ? n : n.top || 0),
            (o.right -= m ? n : n.right || 0),
            (o.bottom -= m ? n : n.bottom || 0),
            o
          );
        }
        function M(e) {
          return e.width * e.height;
        }
        function L(e, t, n, r, i) {
          var o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === e.indexOf('auto')) return e;
          var a = P(n, r, o, i),
            l = {
              top: { width: a.width, height: t.top - a.top },
              right: { width: a.right - t.right, height: a.height },
              bottom: { width: a.width, height: a.bottom - t.bottom },
              left: { width: t.left - a.left, height: a.height },
            },
            s = Object.keys(l)
              .map(function(e) {
                return k({ key: e }, l[e], { area: M(l[e]) });
              })
              .sort(function(e, t) {
                return t.area - e.area;
              }),
            c = s.filter(function(e) {
              var t = e.width,
                r = e.height;
              return t >= n.clientWidth && r >= n.clientHeight;
            }),
            u = c.length > 0 ? c[0].key : s[0].key,
            f = e.split('-')[1];
          return u + (f ? '-' + f : '');
        }
        function _(e, t, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null,
            i = r ? N(t) : g(t, u(n));
          return S(n, i, r);
        }
        function D(e) {
          var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
          return { width: e.offsetWidth + r, height: e.offsetHeight + n };
        }
        function H(e) {
          var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom',
          };
          return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e];
          });
        }
        function R(e, t, n) {
          n = n.split('-')[0];
          var r = D(e),
            i = { width: r.width, height: r.height },
            o = -1 !== ['right', 'left'].indexOf(n),
            a = o ? 'top' : 'left',
            l = o ? 'left' : 'top',
            s = o ? 'height' : 'width',
            c = o ? 'width' : 'height';
          return (
            (i[a] = t[a] + t[s] / 2 - r[s] / 2),
            (i[l] = n === l ? t[l] - r[c] : t[H(l)]),
            i
          );
        }
        function z(e, t) {
          return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function W(e, t, n) {
          return (
            (void 0 === n
              ? e
              : e.slice(
                  0,
                  (function(e, t, n) {
                    if (Array.prototype.findIndex)
                      return e.findIndex(function(e) {
                        return e[t] === n;
                      });
                    var r = z(e, function(e) {
                      return e[t] === n;
                    });
                    return e.indexOf(r);
                  })(e, 'name', n),
                )
            ).forEach(function(e) {
              e.function &&
                console.warn(
                  '`modifier.function` is deprecated, use `modifier.fn`!',
                );
              var n = e.function || e.fn;
              e.enabled &&
                a(n) &&
                ((t.offsets.popper = O(t.offsets.popper)),
                (t.offsets.reference = O(t.offsets.reference)),
                (t = n(t, e)));
            }),
            t
          );
        }
        function Z() {
          if (!this.state.isDestroyed) {
            var e = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {},
            };
            (e.offsets.reference = _(
              this.state,
              this.popper,
              this.reference,
              this.options.positionFixed,
            )),
              (e.placement = L(
                this.options.placement,
                e.offsets.reference,
                this.popper,
                this.reference,
                this.options.modifiers.flip.boundariesElement,
                this.options.modifiers.flip.padding,
              )),
              (e.originalPlacement = e.placement),
              (e.positionFixed = this.options.positionFixed),
              (e.offsets.popper = R(
                this.popper,
                e.offsets.reference,
                e.placement,
              )),
              (e.offsets.popper.position = this.options.positionFixed
                ? 'fixed'
                : 'absolute'),
              (e = W(this.modifiers, e)),
              this.state.isCreated
                ? this.options.onUpdate(e)
                : ((this.state.isCreated = !0), this.options.onCreate(e));
          }
        }
        function B(e, t) {
          return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t;
          });
        }
        function Y(e) {
          for (
            var t = [!1, 'ms', 'Webkit', 'Moz', 'O'],
              n = e.charAt(0).toUpperCase() + e.slice(1),
              r = 0;
            r < t.length;
            r++
          ) {
            var i = t[r],
              o = i ? '' + i + n : e;
            if (void 0 !== document.body.style[o]) return o;
          }
          return null;
        }
        function F() {
          return (
            (this.state.isDestroyed = !0),
            B(this.modifiers, 'applyStyle') &&
              (this.popper.removeAttribute('x-placement'),
              (this.popper.style.position = ''),
              (this.popper.style.top = ''),
              (this.popper.style.left = ''),
              (this.popper.style.right = ''),
              (this.popper.style.bottom = ''),
              (this.popper.style.willChange = ''),
              (this.popper.style[Y('transform')] = '')),
            this.disableEventListeners(),
            this.options.removeOnDestroy &&
              this.popper.parentNode.removeChild(this.popper),
            this
          );
        }
        function U(e) {
          var t = e.ownerDocument;
          return t ? t.defaultView : window;
        }
        function V(e, t, n, r) {
          (n.updateBound = r),
            U(e).addEventListener('resize', n.updateBound, { passive: !0 });
          var i = c(e);
          return (
            (function e(t, n, r, i) {
              var o = 'BODY' === t.nodeName,
                a = o ? t.ownerDocument.defaultView : t;
              a.addEventListener(n, r, { passive: !0 }),
                o || e(c(a.parentNode), n, r, i),
                i.push(a);
            })(i, 'scroll', n.updateBound, n.scrollParents),
            (n.scrollElement = i),
            (n.eventsEnabled = !0),
            n
          );
        }
        function G() {
          this.state.eventsEnabled ||
            (this.state = V(
              this.reference,
              this.options,
              this.state,
              this.scheduleUpdate,
            ));
        }
        function q() {
          var e, t;
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state =
              ((e = this.reference),
              (t = this.state),
              U(e).removeEventListener('resize', t.updateBound),
              t.scrollParents.forEach(function(e) {
                e.removeEventListener('scroll', t.updateBound);
              }),
              (t.updateBound = null),
              (t.scrollParents = []),
              (t.scrollElement = null),
              (t.eventsEnabled = !1),
              t)));
        }
        function X(e) {
          return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function J(e, t) {
          Object.keys(t).forEach(function(n) {
            var r = '';
            -1 !==
              ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(
                n,
              ) &&
              X(t[n]) &&
              (r = 'px'),
              (e.style[n] = t[n] + r);
          });
        }
        var K = r && /Firefox/i.test(navigator.userAgent);
        function Q(e, t, n) {
          var r = z(e, function(e) {
              return e.name === t;
            }),
            i =
              !!r &&
              e.some(function(e) {
                return e.name === n && e.enabled && e.order < r.order;
              });
          if (!i) {
            var o = '`' + t + '`',
              a = '`' + n + '`';
            console.warn(
              a +
                ' modifier is required by ' +
                o +
                ' modifier in order to work, be sure to include it before ' +
                o +
                '!',
            );
          }
          return i;
        }
        var $ = [
            'auto-start',
            'auto',
            'auto-end',
            'top-start',
            'top',
            'top-end',
            'right-start',
            'right',
            'right-end',
            'bottom-end',
            'bottom',
            'bottom-start',
            'left-end',
            'left',
            'left-start',
          ],
          ee = $.slice(3);
        function te(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = ee.indexOf(e),
            r = ee.slice(n + 1).concat(ee.slice(0, n));
          return t ? r.reverse() : r;
        }
        var ne = 'flip',
          re = 'clockwise',
          ie = 'counterclockwise';
        function oe(e, t, n, r) {
          var i = [0, 0],
            o = -1 !== ['right', 'left'].indexOf(r),
            a = e.split(/(\+|\-)/).map(function(e) {
              return e.trim();
            }),
            l = a.indexOf(
              z(a, function(e) {
                return -1 !== e.search(/,|\s/);
              }),
            );
          a[l] &&
            -1 === a[l].indexOf(',') &&
            console.warn(
              'Offsets separated by white space(s) are deprecated, use a comma (,) instead.',
            );
          var s = /\s*,\s*|\s+/,
            c =
              -1 !== l
                ? [
                    a.slice(0, l).concat([a[l].split(s)[0]]),
                    [a[l].split(s)[1]].concat(a.slice(l + 1)),
                  ]
                : [a];
          return (
            (c = c.map(function(e, r) {
              var i = (1 === r ? !o : o) ? 'height' : 'width',
                a = !1;
              return e
                .reduce(function(e, t) {
                  return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t)
                    ? ((e[e.length - 1] = t), (a = !0), e)
                    : a
                    ? ((e[e.length - 1] += t), (a = !1), e)
                    : e.concat(t);
                }, [])
                .map(function(e) {
                  return (function(e, t, n, r) {
                    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                      o = +i[1],
                      a = i[2];
                    if (!o) return e;
                    if (0 === a.indexOf('%')) {
                      var l = void 0;
                      switch (a) {
                        case '%p':
                          l = n;
                          break;
                        case '%':
                        case '%r':
                        default:
                          l = r;
                      }
                      return (O(l)[t] / 100) * o;
                    }
                    if ('vh' === a || 'vw' === a) {
                      return (
                        (('vh' === a
                          ? Math.max(
                              document.documentElement.clientHeight,
                              window.innerHeight || 0,
                            )
                          : Math.max(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0,
                            )) /
                          100) *
                        o
                      );
                    }
                    return o;
                  })(e, i, t, n);
                });
            })).forEach(function(e, t) {
              e.forEach(function(n, r) {
                X(n) && (i[t] += n * ('-' === e[r - 1] ? -1 : 1));
              });
            }),
            i
          );
        }
        var ae = {
            placement: 'bottom',
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
              shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                  var t = e.placement,
                    n = t.split('-')[0],
                    r = t.split('-')[1];
                  if (r) {
                    var i = e.offsets,
                      o = i.reference,
                      a = i.popper,
                      l = -1 !== ['bottom', 'top'].indexOf(n),
                      s = l ? 'left' : 'top',
                      c = l ? 'width' : 'height',
                      u = {
                        start: x({}, s, o[s]),
                        end: x({}, s, o[s] + o[c] - a[c]),
                      };
                    e.offsets.popper = k({}, a, u[r]);
                  }
                  return e;
                },
              },
              offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                  var n = t.offset,
                    r = e.placement,
                    i = e.offsets,
                    o = i.popper,
                    a = i.reference,
                    l = r.split('-')[0],
                    s = void 0;
                  return (
                    (s = X(+n) ? [+n, 0] : oe(n, o, a, l)),
                    'left' === l
                      ? ((o.top += s[0]), (o.left -= s[1]))
                      : 'right' === l
                      ? ((o.top += s[0]), (o.left += s[1]))
                      : 'top' === l
                      ? ((o.left += s[0]), (o.top -= s[1]))
                      : 'bottom' === l && ((o.left += s[0]), (o.top += s[1])),
                    (e.popper = o),
                    e
                  );
                },
                offset: 0,
              },
              preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                  var n = t.boundariesElement || h(e.instance.popper);
                  e.instance.reference === n && (n = h(n));
                  var r = Y('transform'),
                    i = e.instance.popper.style,
                    o = i.top,
                    a = i.left,
                    l = i[r];
                  (i.top = ''), (i.left = ''), (i[r] = '');
                  var s = P(
                    e.instance.popper,
                    e.instance.reference,
                    t.padding,
                    n,
                    e.positionFixed,
                  );
                  (i.top = o), (i.left = a), (i[r] = l), (t.boundaries = s);
                  var c = t.priority,
                    u = e.offsets.popper,
                    f = {
                      primary: function(e) {
                        var n = u[e];
                        return (
                          u[e] < s[e] &&
                            !t.escapeWithReference &&
                            (n = Math.max(u[e], s[e])),
                          x({}, e, n)
                        );
                      },
                      secondary: function(e) {
                        var n = 'right' === e ? 'left' : 'top',
                          r = u[n];
                        return (
                          u[e] > s[e] &&
                            !t.escapeWithReference &&
                            (r = Math.min(
                              u[n],
                              s[e] - ('right' === e ? u.width : u.height),
                            )),
                          x({}, n, r)
                        );
                      },
                    };
                  return (
                    c.forEach(function(e) {
                      var t =
                        -1 !== ['left', 'top'].indexOf(e)
                          ? 'primary'
                          : 'secondary';
                      u = k({}, u, f[t](e));
                    }),
                    (e.offsets.popper = u),
                    e
                  );
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent',
              },
              keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                  var t = e.offsets,
                    n = t.popper,
                    r = t.reference,
                    i = e.placement.split('-')[0],
                    o = Math.floor,
                    a = -1 !== ['top', 'bottom'].indexOf(i),
                    l = a ? 'right' : 'bottom',
                    s = a ? 'left' : 'top',
                    c = a ? 'width' : 'height';
                  return (
                    n[l] < o(r[s]) && (e.offsets.popper[s] = o(r[s]) - n[c]),
                    n[s] > o(r[l]) && (e.offsets.popper[s] = o(r[l])),
                    e
                  );
                },
              },
              arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                  var n;
                  if (!Q(e.instance.modifiers, 'arrow', 'keepTogether'))
                    return e;
                  var r = t.element;
                  if ('string' == typeof r) {
                    if (!(r = e.instance.popper.querySelector(r))) return e;
                  } else if (!e.instance.popper.contains(r))
                    return (
                      console.warn(
                        'WARNING: `arrow.element` must be child of its popper element!',
                      ),
                      e
                    );
                  var i = e.placement.split('-')[0],
                    o = e.offsets,
                    a = o.popper,
                    s = o.reference,
                    c = -1 !== ['left', 'right'].indexOf(i),
                    u = c ? 'height' : 'width',
                    f = c ? 'Top' : 'Left',
                    p = f.toLowerCase(),
                    d = c ? 'left' : 'top',
                    h = c ? 'bottom' : 'right',
                    m = D(r)[u];
                  s[h] - m < a[p] && (e.offsets.popper[p] -= a[p] - (s[h] - m)),
                    s[p] + m > a[h] && (e.offsets.popper[p] += s[p] + m - a[h]),
                    (e.offsets.popper = O(e.offsets.popper));
                  var g = s[p] + s[u] / 2 - m / 2,
                    v = l(e.instance.popper),
                    y = parseFloat(v['margin' + f]),
                    b = parseFloat(v['border' + f + 'Width']),
                    w = g - e.offsets.popper[p] - y - b;
                  return (
                    (w = Math.max(Math.min(a[u] - m, w), 0)),
                    (e.arrowElement = r),
                    (e.offsets.arrow =
                      (x((n = {}), p, Math.round(w)), x(n, d, ''), n)),
                    e
                  );
                },
                element: '[x-arrow]',
              },
              flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                  if (B(e.instance.modifiers, 'inner')) return e;
                  if (e.flipped && e.placement === e.originalPlacement)
                    return e;
                  var n = P(
                      e.instance.popper,
                      e.instance.reference,
                      t.padding,
                      t.boundariesElement,
                      e.positionFixed,
                    ),
                    r = e.placement.split('-')[0],
                    i = H(r),
                    o = e.placement.split('-')[1] || '',
                    a = [];
                  switch (t.behavior) {
                    case ne:
                      a = [r, i];
                      break;
                    case re:
                      a = te(r);
                      break;
                    case ie:
                      a = te(r, !0);
                      break;
                    default:
                      a = t.behavior;
                  }
                  return (
                    a.forEach(function(l, s) {
                      if (r !== l || a.length === s + 1) return e;
                      (r = e.placement.split('-')[0]), (i = H(r));
                      var c = e.offsets.popper,
                        u = e.offsets.reference,
                        f = Math.floor,
                        p =
                          ('left' === r && f(c.right) > f(u.left)) ||
                          ('right' === r && f(c.left) < f(u.right)) ||
                          ('top' === r && f(c.bottom) > f(u.top)) ||
                          ('bottom' === r && f(c.top) < f(u.bottom)),
                        d = f(c.left) < f(n.left),
                        h = f(c.right) > f(n.right),
                        m = f(c.top) < f(n.top),
                        g = f(c.bottom) > f(n.bottom),
                        v =
                          ('left' === r && d) ||
                          ('right' === r && h) ||
                          ('top' === r && m) ||
                          ('bottom' === r && g),
                        y = -1 !== ['top', 'bottom'].indexOf(r),
                        b =
                          !!t.flipVariations &&
                          ((y && 'start' === o && d) ||
                            (y && 'end' === o && h) ||
                            (!y && 'start' === o && m) ||
                            (!y && 'end' === o && g)),
                        w =
                          !!t.flipVariationsByContent &&
                          ((y && 'start' === o && h) ||
                            (y && 'end' === o && d) ||
                            (!y && 'start' === o && g) ||
                            (!y && 'end' === o && m)),
                        I = b || w;
                      (p || v || I) &&
                        ((e.flipped = !0),
                        (p || v) && (r = a[s + 1]),
                        I &&
                          (o = (function(e) {
                            return 'end' === e
                              ? 'start'
                              : 'start' === e
                              ? 'end'
                              : e;
                          })(o)),
                        (e.placement = r + (o ? '-' + o : '')),
                        (e.offsets.popper = k(
                          {},
                          e.offsets.popper,
                          R(
                            e.instance.popper,
                            e.offsets.reference,
                            e.placement,
                          ),
                        )),
                        (e = W(e.instance.modifiers, e, 'flip')));
                    }),
                    e
                  );
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport',
                flipVariations: !1,
                flipVariationsByContent: !1,
              },
              inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                  var t = e.placement,
                    n = t.split('-')[0],
                    r = e.offsets,
                    i = r.popper,
                    o = r.reference,
                    a = -1 !== ['left', 'right'].indexOf(n),
                    l = -1 === ['top', 'left'].indexOf(n);
                  return (
                    (i[a ? 'left' : 'top'] =
                      o[n] - (l ? i[a ? 'width' : 'height'] : 0)),
                    (e.placement = H(t)),
                    (e.offsets.popper = O(i)),
                    e
                  );
                },
              },
              hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                  if (!Q(e.instance.modifiers, 'hide', 'preventOverflow'))
                    return e;
                  var t = e.offsets.reference,
                    n = z(e.instance.modifiers, function(e) {
                      return 'preventOverflow' === e.name;
                    }).boundaries;
                  if (
                    t.bottom < n.top ||
                    t.left > n.right ||
                    t.top > n.bottom ||
                    t.right < n.left
                  ) {
                    if (!0 === e.hide) return e;
                    (e.hide = !0), (e.attributes['x-out-of-boundaries'] = '');
                  } else {
                    if (!1 === e.hide) return e;
                    (e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1);
                  }
                  return e;
                },
              },
              computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                  var n = t.x,
                    r = t.y,
                    i = e.offsets.popper,
                    o = z(e.instance.modifiers, function(e) {
                      return 'applyStyle' === e.name;
                    }).gpuAcceleration;
                  void 0 !== o &&
                    console.warn(
                      'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!',
                    );
                  var a = void 0 !== o ? o : t.gpuAcceleration,
                    l = h(e.instance.popper),
                    s = E(l),
                    c = { position: i.position },
                    u = (function(e, t) {
                      var n = e.offsets,
                        r = n.popper,
                        i = n.reference,
                        o = Math.round,
                        a = Math.floor,
                        l = function(e) {
                          return e;
                        },
                        s = o(i.width),
                        c = o(r.width),
                        u = -1 !== ['left', 'right'].indexOf(e.placement),
                        f = -1 !== e.placement.indexOf('-'),
                        p = t ? (u || f || s % 2 == c % 2 ? o : a) : l,
                        d = t ? o : l;
                      return {
                        left: p(
                          s % 2 == 1 && c % 2 == 1 && !f && t
                            ? r.left - 1
                            : r.left,
                        ),
                        top: d(r.top),
                        bottom: d(r.bottom),
                        right: p(r.right),
                      };
                    })(e, window.devicePixelRatio < 2 || !K),
                    f = 'bottom' === n ? 'top' : 'bottom',
                    p = 'right' === r ? 'left' : 'right',
                    d = Y('transform'),
                    m = void 0,
                    g = void 0;
                  if (
                    ((g =
                      'bottom' === f
                        ? 'HTML' === l.nodeName
                          ? -l.clientHeight + u.bottom
                          : -s.height + u.bottom
                        : u.top),
                    (m =
                      'right' === p
                        ? 'HTML' === l.nodeName
                          ? -l.clientWidth + u.right
                          : -s.width + u.right
                        : u.left),
                    a && d)
                  )
                    (c[d] = 'translate3d(' + m + 'px, ' + g + 'px, 0)'),
                      (c[f] = 0),
                      (c[p] = 0),
                      (c.willChange = 'transform');
                  else {
                    var v = 'bottom' === f ? -1 : 1,
                      y = 'right' === p ? -1 : 1;
                    (c[f] = g * v),
                      (c[p] = m * y),
                      (c.willChange = f + ', ' + p);
                  }
                  var b = { 'x-placement': e.placement };
                  return (
                    (e.attributes = k({}, b, e.attributes)),
                    (e.styles = k({}, c, e.styles)),
                    (e.arrowStyles = k({}, e.offsets.arrow, e.arrowStyles)),
                    e
                  );
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right',
              },
              applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                  var t, n;
                  return (
                    J(e.instance.popper, e.styles),
                    (t = e.instance.popper),
                    (n = e.attributes),
                    Object.keys(n).forEach(function(e) {
                      !1 !== n[e]
                        ? t.setAttribute(e, n[e])
                        : t.removeAttribute(e);
                    }),
                    e.arrowElement &&
                      Object.keys(e.arrowStyles).length &&
                      J(e.arrowElement, e.arrowStyles),
                    e
                  );
                },
                onLoad: function(e, t, n, r, i) {
                  var o = _(i, t, e, n.positionFixed),
                    a = L(
                      n.placement,
                      o,
                      t,
                      e,
                      n.modifiers.flip.boundariesElement,
                      n.modifiers.flip.padding,
                    );
                  return (
                    t.setAttribute('x-placement', a),
                    J(t, { position: n.positionFixed ? 'fixed' : 'absolute' }),
                    n
                  );
                },
                gpuAcceleration: void 0,
              },
            },
          },
          le = (function() {
            function e(t, n) {
              var r = this,
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              A(this, e),
                (this.scheduleUpdate = function() {
                  return requestAnimationFrame(r.update);
                }),
                (this.update = o(this.update.bind(this))),
                (this.options = k({}, e.Defaults, i)),
                (this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: [],
                }),
                (this.reference = t && t.jquery ? t[0] : t),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(k({}, e.Defaults.modifiers, i.modifiers)).forEach(
                  function(t) {
                    r.options.modifiers[t] = k(
                      {},
                      e.Defaults.modifiers[t] || {},
                      i.modifiers ? i.modifiers[t] : {},
                    );
                  },
                ),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function(e) {
                    return k({ name: e }, r.options.modifiers[e]);
                  })
                  .sort(function(e, t) {
                    return e.order - t.order;
                  })),
                this.modifiers.forEach(function(e) {
                  e.enabled &&
                    a(e.onLoad) &&
                    e.onLoad(r.reference, r.popper, r.options, e, r.state);
                }),
                this.update();
              var l = this.options.eventsEnabled;
              l && this.enableEventListeners(), (this.state.eventsEnabled = l);
            }
            return (
              C(e, [
                {
                  key: 'update',
                  value: function() {
                    return Z.call(this);
                  },
                },
                {
                  key: 'destroy',
                  value: function() {
                    return F.call(this);
                  },
                },
                {
                  key: 'enableEventListeners',
                  value: function() {
                    return G.call(this);
                  },
                },
                {
                  key: 'disableEventListeners',
                  value: function() {
                    return q.call(this);
                  },
                },
              ]),
              e
            );
          })();
        (le.Utils = ('undefined' != typeof window ? window : e).PopperUtils),
          (le.placements = $),
          (le.Defaults = ae),
          (t.a = le);
      }.call(this, n(176)));
    },
    function(e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.default = {
          noWobble: { stiffness: 170, damping: 26 },
          gentle: { stiffness: 120, damping: 14 },
          wobbly: { stiffness: 180, damping: 12 },
          stiff: { stiffness: 210, damping: 20 },
        }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      (function(e) {
        function r(e, t) {
          for (var n = 0, r = e.length - 1; r >= 0; r--) {
            var i = e[r];
            '.' === i
              ? e.splice(r, 1)
              : '..' === i
              ? (e.splice(r, 1), n++)
              : n && (e.splice(r, 1), n--);
          }
          if (t) for (; n--; n) e.unshift('..');
          return e;
        }
        function i(e, t) {
          if (e.filter) return e.filter(t);
          for (var n = [], r = 0; r < e.length; r++)
            t(e[r], r, e) && n.push(e[r]);
          return n;
        }
        n(56),
          n(18),
          (t.resolve = function() {
            for (
              var t = '', n = !1, o = arguments.length - 1;
              o >= -1 && !n;
              o--
            ) {
              var a = o >= 0 ? arguments[o] : e.cwd();
              if ('string' != typeof a)
                throw new TypeError(
                  'Arguments to path.resolve must be strings',
                );
              a && ((t = a + '/' + t), (n = '/' === a.charAt(0)));
            }
            return (
              (n ? '/' : '') +
                (t = r(
                  i(t.split('/'), function(e) {
                    return !!e;
                  }),
                  !n,
                ).join('/')) || '.'
            );
          }),
          (t.normalize = function(e) {
            var n = t.isAbsolute(e),
              a = '/' === o(e, -1);
            return (
              (e = r(
                i(e.split('/'), function(e) {
                  return !!e;
                }),
                !n,
              ).join('/')) ||
                n ||
                (e = '.'),
              e && a && (e += '/'),
              (n ? '/' : '') + e
            );
          }),
          (t.isAbsolute = function(e) {
            return '/' === e.charAt(0);
          }),
          (t.join = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return t.normalize(
              i(e, function(e, t) {
                if ('string' != typeof e)
                  throw new TypeError('Arguments to path.join must be strings');
                return e;
              }).join('/'),
            );
          }),
          (t.relative = function(e, n) {
            function r(e) {
              for (var t = 0; t < e.length && '' === e[t]; t++);
              for (var n = e.length - 1; n >= 0 && '' === e[n]; n--);
              return t > n ? [] : e.slice(t, n - t + 1);
            }
            (e = t.resolve(e).substr(1)), (n = t.resolve(n).substr(1));
            for (
              var i = r(e.split('/')),
                o = r(n.split('/')),
                a = Math.min(i.length, o.length),
                l = a,
                s = 0;
              s < a;
              s++
            )
              if (i[s] !== o[s]) {
                l = s;
                break;
              }
            var c = [];
            for (s = l; s < i.length; s++) c.push('..');
            return (c = c.concat(o.slice(l))).join('/');
          }),
          (t.sep = '/'),
          (t.delimiter = ':'),
          (t.dirname = function(e) {
            if (('string' != typeof e && (e += ''), 0 === e.length)) return '.';
            for (
              var t = e.charCodeAt(0),
                n = 47 === t,
                r = -1,
                i = !0,
                o = e.length - 1;
              o >= 1;
              --o
            )
              if (47 === (t = e.charCodeAt(o))) {
                if (!i) {
                  r = o;
                  break;
                }
              } else i = !1;
            return -1 === r
              ? n
                ? '/'
                : '.'
              : n && 1 === r
              ? '/'
              : e.slice(0, r);
          }),
          (t.basename = function(e, t) {
            var n = (function(e) {
              'string' != typeof e && (e += '');
              var t,
                n = 0,
                r = -1,
                i = !0;
              for (t = e.length - 1; t >= 0; --t)
                if (47 === e.charCodeAt(t)) {
                  if (!i) {
                    n = t + 1;
                    break;
                  }
                } else -1 === r && ((i = !1), (r = t + 1));
              return -1 === r ? '' : e.slice(n, r);
            })(e);
            return (
              t &&
                n.substr(-1 * t.length) === t &&
                (n = n.substr(0, n.length - t.length)),
              n
            );
          }),
          (t.extname = function(e) {
            'string' != typeof e && (e += '');
            for (
              var t = -1, n = 0, r = -1, i = !0, o = 0, a = e.length - 1;
              a >= 0;
              --a
            ) {
              var l = e.charCodeAt(a);
              if (47 !== l)
                -1 === r && ((i = !1), (r = a + 1)),
                  46 === l
                    ? -1 === t
                      ? (t = a)
                      : 1 !== o && (o = 1)
                    : -1 !== t && (o = -1);
              else if (!i) {
                n = a + 1;
                break;
              }
            }
            return -1 === t ||
              -1 === r ||
              0 === o ||
              (1 === o && t === r - 1 && t === n + 1)
              ? ''
              : e.slice(t, r);
          });
        var o =
          'b' === 'ab'.substr(-1)
            ? function(e, t, n) {
                return e.substr(t, n);
              }
            : function(e, t, n) {
                return t < 0 && (t = e.length + t), e.substr(t, n);
              };
      }.call(this, n(174)));
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        var t = 'string' == typeof e ? e.charCodeAt(0) : e;
        return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
      };
    },
    function(e, t, n) {
      'use strict';
      e.exports = {
        position: !0,
        gfm: !0,
        commonmark: !1,
        footnotes: !1,
        pedantic: !1,
        blocks: n(353),
      };
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        var t,
          n = 0,
          i = 0,
          o = e.charAt(n),
          a = {};
        for (; o in r; )
          (i += t = r[o]),
            t > 1 && (i = Math.floor(i / t) * t),
            (a[i] = n),
            (o = e.charAt(++n));
        return { indent: i, stops: a };
      };
      var r = { ' ': 1, '\t': 4 };
    },
    function(e, t, n) {
      'use strict';
      n(121);
      var r =
          '<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"\'=<>`\\u0000-\\u0020]+|\'[^\']*\'|"[^"]*"))?)*\\s*\\/?>',
        i = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
      (t.openCloseTag = new RegExp('^(?:' + r + '|' + i + ')')),
        (t.tag = new RegExp(
          '^(?:' +
            r +
            '|' +
            i +
            '|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)',
        ));
    },
    function(e, t, n) {
      'use strict';
      n(12),
        (e.exports = function(e, t) {
          return e.indexOf('<', t);
        });
    },
    function(e, t, n) {
      'use strict';
      n(12),
        (e.exports = function(e, t) {
          var n = e.indexOf('[', t),
            r = e.indexOf('![', t);
          if (-1 === r) return n;
          return n < r ? n : r;
        });
    },
    function(e) {
      e.exports = JSON.parse(
        '{"data":{"contentfulAbout":{"name":"Shane","roles":["Web Developer 👨‍💻","React Lover ⚛️","Ruby on Rails Engineer 💎","JavaScript Wrangler 🤠"],"socialLinks":[{"id":"d346bda6-36b7-511c-a363-b79320d1d6a1","url":"https://github.com/shanelonergan","name":"Github","fontAwesomeIcon":"github"},{"id":"0e71cbfd-ee90-56a5-b365-d538d8a7171a","url":"https://medium.com/@sptlonergan","name":"Medium","fontAwesomeIcon":"medium"},{"id":"84da2bc3-d7ca-5fb9-add6-a01b3df06489","url":"https://shane823656.typeform.com/to/gXwRT3","name":"Contact me","fontAwesomeIcon":"envelope"},{"id":"e45de385-02a6-50fd-a389-dfff147b3698","url":"https://twitter.com/shane__lonergan","name":"Twitter","fontAwesomeIcon":"twitter"},{"id":"0806eb36-0fa8-5de9-b954-4a5538addcb0","url":"https://www.linkedin.com/in/shane-lonergan/","name":"LinkedIn","fontAwesomeIcon":"linkedin"}]},"site":{"siteMetadata":{"deterministicBehaviour":false}}}}',
      );
    },
    ,
    function(e, t, n) {
      'use strict';
      var r = n(1),
        i = n(47)(6),
        o = 'findIndex',
        a = !0;
      o in [] &&
        Array(1)[o](function() {
          a = !1;
        }),
        r(r.P + r.F * a, 'Array', {
          findIndex: function(e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n(70)(o);
    },
    function(e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e.default : e;
      }
      t.__esModule = !0;
      var i = n(314);
      t.Motion = r(i);
      var o = n(316);
      t.StaggeredMotion = r(o);
      var a = n(317);
      t.TransitionMotion = r(a);
      var l = n(319);
      t.spring = r(l);
      var s = n(302);
      t.presets = r(s);
      var c = n(286);
      t.stripStyle = r(c);
      var u = n(320);
      t.reorderKeys = r(u);
    },
    function(e, t, n) {
      'use strict';
      n(60), n(42), n(29), n(7), (t.__esModule = !0);
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = o(n(290)),
        l = o(n(286)),
        s = o(n(291)),
        c = o(n(292)),
        u = o(n(287)),
        f = o(n(293)),
        p = o(n(0)),
        d = o(n(21)),
        h = (function(e) {
          function t(n) {
            var i = this;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              e.call(this, n),
              (this.wasAnimating = !1),
              (this.animationID = null),
              (this.prevTime = 0),
              (this.accumulatedTime = 0),
              (this.unreadPropStyle = null),
              (this.clearUnreadPropStyle = function(e) {
                var t = !1,
                  n = i.state,
                  o = n.currentStyle,
                  a = n.currentVelocity,
                  l = n.lastIdealStyle,
                  s = n.lastIdealVelocity;
                for (var c in e)
                  if (Object.prototype.hasOwnProperty.call(e, c)) {
                    var u = e[c];
                    'number' == typeof u &&
                      (t ||
                        ((t = !0),
                        (o = r({}, o)),
                        (a = r({}, a)),
                        (l = r({}, l)),
                        (s = r({}, s))),
                      (o[c] = u),
                      (a[c] = 0),
                      (l[c] = u),
                      (s[c] = 0));
                  }
                t &&
                  i.setState({
                    currentStyle: o,
                    currentVelocity: a,
                    lastIdealStyle: l,
                    lastIdealVelocity: s,
                  });
              }),
              (this.startAnimationIfNecessary = function() {
                i.animationID = u.default(function(e) {
                  var t = i.props.style;
                  if (
                    f.default(i.state.currentStyle, t, i.state.currentVelocity)
                  )
                    return (
                      i.wasAnimating && i.props.onRest && i.props.onRest(),
                      (i.animationID = null),
                      (i.wasAnimating = !1),
                      void (i.accumulatedTime = 0)
                    );
                  i.wasAnimating = !0;
                  var n = e || c.default(),
                    r = n - i.prevTime;
                  if (
                    ((i.prevTime = n),
                    (i.accumulatedTime = i.accumulatedTime + r),
                    i.accumulatedTime > (1e3 / 60) * 10 &&
                      (i.accumulatedTime = 0),
                    0 === i.accumulatedTime)
                  )
                    return (
                      (i.animationID = null), void i.startAnimationIfNecessary()
                    );
                  var o =
                      (i.accumulatedTime -
                        Math.floor(i.accumulatedTime / (1e3 / 60)) *
                          (1e3 / 60)) /
                      (1e3 / 60),
                    a = Math.floor(i.accumulatedTime / (1e3 / 60)),
                    l = {},
                    u = {},
                    p = {},
                    d = {};
                  for (var h in t)
                    if (Object.prototype.hasOwnProperty.call(t, h)) {
                      var m = t[h];
                      if ('number' == typeof m)
                        (p[h] = m), (d[h] = 0), (l[h] = m), (u[h] = 0);
                      else {
                        for (
                          var g = i.state.lastIdealStyle[h],
                            v = i.state.lastIdealVelocity[h],
                            y = 0;
                          y < a;
                          y++
                        ) {
                          var b = s.default(
                            1e3 / 60 / 1e3,
                            g,
                            v,
                            m.val,
                            m.stiffness,
                            m.damping,
                            m.precision,
                          );
                          (g = b[0]), (v = b[1]);
                        }
                        var w = s.default(
                            1e3 / 60 / 1e3,
                            g,
                            v,
                            m.val,
                            m.stiffness,
                            m.damping,
                            m.precision,
                          ),
                          I = w[0],
                          A = w[1];
                        (p[h] = g + (I - g) * o),
                          (d[h] = v + (A - v) * o),
                          (l[h] = g),
                          (u[h] = v);
                      }
                    }
                  (i.animationID = null),
                    (i.accumulatedTime -= a * (1e3 / 60)),
                    i.setState({
                      currentStyle: p,
                      currentVelocity: d,
                      lastIdealStyle: l,
                      lastIdealVelocity: u,
                    }),
                    (i.unreadPropStyle = null),
                    i.startAnimationIfNecessary();
                });
              }),
              (this.state = this.defaultState());
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            i(t, null, [
              {
                key: 'propTypes',
                value: {
                  defaultStyle: d.default.objectOf(d.default.number),
                  style: d.default.objectOf(
                    d.default.oneOfType([d.default.number, d.default.object]),
                  ).isRequired,
                  children: d.default.func.isRequired,
                  onRest: d.default.func,
                },
                enumerable: !0,
              },
            ]),
            (t.prototype.defaultState = function() {
              var e = this.props,
                t = e.defaultStyle,
                n = e.style,
                r = t || l.default(n),
                i = a.default(r);
              return {
                currentStyle: r,
                currentVelocity: i,
                lastIdealStyle: r,
                lastIdealVelocity: i,
              };
            }),
            (t.prototype.componentDidMount = function() {
              (this.prevTime = c.default()), this.startAnimationIfNecessary();
            }),
            (t.prototype.componentWillReceiveProps = function(e) {
              null != this.unreadPropStyle &&
                this.clearUnreadPropStyle(this.unreadPropStyle),
                (this.unreadPropStyle = e.style),
                null == this.animationID &&
                  ((this.prevTime = c.default()),
                  this.startAnimationIfNecessary());
            }),
            (t.prototype.componentWillUnmount = function() {
              null != this.animationID &&
                (u.default.cancel(this.animationID), (this.animationID = null));
            }),
            (t.prototype.render = function() {
              var e = this.props.children(this.state.currentStyle);
              return e && p.default.Children.only(e);
            }),
            t
          );
        })(p.default.Component);
      (t.default = h), (e.exports = t.default);
    },
    function(e, t, n) {
      (function(t) {
        n(44),
          function() {
            var n, r, i, o, a, l;
            'undefined' != typeof performance &&
            null !== performance &&
            performance.now
              ? (e.exports = function() {
                  return performance.now();
                })
              : null != t && t.hrtime
              ? ((e.exports = function() {
                  return (n() - a) / 1e6;
                }),
                (r = t.hrtime),
                (o = (n = function() {
                  var e;
                  return 1e9 * (e = r())[0] + e[1];
                })()),
                (l = 1e9 * t.uptime()),
                (a = o - l))
              : Date.now
              ? ((e.exports = function() {
                  return Date.now() - i;
                }),
                (i = Date.now()))
              : ((e.exports = function() {
                  return new Date().getTime() - i;
                }),
                (i = new Date().getTime()));
          }.call(this);
      }.call(this, n(174)));
    },
    function(e, t, n) {
      'use strict';
      n(20), n(60), n(42), n(29), n(7), (t.__esModule = !0);
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = o(n(290)),
        l = o(n(286)),
        s = o(n(291)),
        c = o(n(292)),
        u = o(n(287)),
        f = o(n(293)),
        p = o(n(0)),
        d = o(n(21));
      var h = (function(e) {
        function t(n) {
          var i = this;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            e.call(this, n),
            (this.animationID = null),
            (this.prevTime = 0),
            (this.accumulatedTime = 0),
            (this.unreadPropStyles = null),
            (this.clearUnreadPropStyle = function(e) {
              for (
                var t = i.state,
                  n = t.currentStyles,
                  o = t.currentVelocities,
                  a = t.lastIdealStyles,
                  l = t.lastIdealVelocities,
                  s = !1,
                  c = 0;
                c < e.length;
                c++
              ) {
                var u = e[c],
                  f = !1;
                for (var p in u)
                  if (Object.prototype.hasOwnProperty.call(u, p)) {
                    var d = u[p];
                    'number' == typeof d &&
                      (f ||
                        ((f = !0),
                        (s = !0),
                        (n[c] = r({}, n[c])),
                        (o[c] = r({}, o[c])),
                        (a[c] = r({}, a[c])),
                        (l[c] = r({}, l[c]))),
                      (n[c][p] = d),
                      (o[c][p] = 0),
                      (a[c][p] = d),
                      (l[c][p] = 0));
                  }
              }
              s &&
                i.setState({
                  currentStyles: n,
                  currentVelocities: o,
                  lastIdealStyles: a,
                  lastIdealVelocities: l,
                });
            }),
            (this.startAnimationIfNecessary = function() {
              i.animationID = u.default(function(e) {
                var t = i.props.styles(i.state.lastIdealStyles);
                if (
                  (function(e, t, n) {
                    for (var r = 0; r < e.length; r++)
                      if (!f.default(e[r], t[r], n[r])) return !1;
                    return !0;
                  })(i.state.currentStyles, t, i.state.currentVelocities)
                )
                  return (i.animationID = null), void (i.accumulatedTime = 0);
                var n = e || c.default(),
                  r = n - i.prevTime;
                if (
                  ((i.prevTime = n),
                  (i.accumulatedTime = i.accumulatedTime + r),
                  i.accumulatedTime > (1e3 / 60) * 10 &&
                    (i.accumulatedTime = 0),
                  0 === i.accumulatedTime)
                )
                  return (
                    (i.animationID = null), void i.startAnimationIfNecessary()
                  );
                for (
                  var o =
                      (i.accumulatedTime -
                        Math.floor(i.accumulatedTime / (1e3 / 60)) *
                          (1e3 / 60)) /
                      (1e3 / 60),
                    a = Math.floor(i.accumulatedTime / (1e3 / 60)),
                    l = [],
                    u = [],
                    p = [],
                    d = [],
                    h = 0;
                  h < t.length;
                  h++
                ) {
                  var m = t[h],
                    g = {},
                    v = {},
                    y = {},
                    b = {};
                  for (var w in m)
                    if (Object.prototype.hasOwnProperty.call(m, w)) {
                      var I = m[w];
                      if ('number' == typeof I)
                        (g[w] = I), (v[w] = 0), (y[w] = I), (b[w] = 0);
                      else {
                        for (
                          var A = i.state.lastIdealStyles[h][w],
                            C = i.state.lastIdealVelocities[h][w],
                            x = 0;
                          x < a;
                          x++
                        ) {
                          var k = s.default(
                            1e3 / 60 / 1e3,
                            A,
                            C,
                            I.val,
                            I.stiffness,
                            I.damping,
                            I.precision,
                          );
                          (A = k[0]), (C = k[1]);
                        }
                        var O = s.default(
                            1e3 / 60 / 1e3,
                            A,
                            C,
                            I.val,
                            I.stiffness,
                            I.damping,
                            I.precision,
                          ),
                          E = O[0],
                          S = O[1];
                        (g[w] = A + (E - A) * o),
                          (v[w] = C + (S - C) * o),
                          (y[w] = A),
                          (b[w] = C);
                      }
                    }
                  (p[h] = g), (d[h] = v), (l[h] = y), (u[h] = b);
                }
                (i.animationID = null),
                  (i.accumulatedTime -= a * (1e3 / 60)),
                  i.setState({
                    currentStyles: p,
                    currentVelocities: d,
                    lastIdealStyles: l,
                    lastIdealVelocities: u,
                  }),
                  (i.unreadPropStyles = null),
                  i.startAnimationIfNecessary();
              });
            }),
            (this.state = this.defaultState());
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          i(t, null, [
            {
              key: 'propTypes',
              value: {
                defaultStyles: d.default.arrayOf(
                  d.default.objectOf(d.default.number),
                ),
                styles: d.default.func.isRequired,
                children: d.default.func.isRequired,
              },
              enumerable: !0,
            },
          ]),
          (t.prototype.defaultState = function() {
            var e = this.props,
              t = e.defaultStyles,
              n = e.styles,
              r = t || n().map(l.default),
              i = r.map(function(e) {
                return a.default(e);
              });
            return {
              currentStyles: r,
              currentVelocities: i,
              lastIdealStyles: r,
              lastIdealVelocities: i,
            };
          }),
          (t.prototype.componentDidMount = function() {
            (this.prevTime = c.default()), this.startAnimationIfNecessary();
          }),
          (t.prototype.componentWillReceiveProps = function(e) {
            null != this.unreadPropStyles &&
              this.clearUnreadPropStyle(this.unreadPropStyles),
              (this.unreadPropStyles = e.styles(this.state.lastIdealStyles)),
              null == this.animationID &&
                ((this.prevTime = c.default()),
                this.startAnimationIfNecessary());
          }),
          (t.prototype.componentWillUnmount = function() {
            null != this.animationID &&
              (u.default.cancel(this.animationID), (this.animationID = null));
          }),
          (t.prototype.render = function() {
            var e = this.props.children(this.state.currentStyles);
            return e && p.default.Children.only(e);
          }),
          t
        );
      })(p.default.Component);
      (t.default = h), (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      n(20), n(60), n(42), n(29), n(7), (t.__esModule = !0);
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = o(n(290)),
        l = o(n(286)),
        s = o(n(291)),
        c = o(n(318)),
        u = o(n(292)),
        f = o(n(287)),
        p = o(n(293)),
        d = o(n(0)),
        h = o(n(21));
      function m(e, t, n) {
        var r = t;
        return null == r
          ? e.map(function(e, t) {
              return { key: e.key, data: e.data, style: n[t] };
            })
          : e.map(function(e, t) {
              for (var i = 0; i < r.length; i++)
                if (r[i].key === e.key)
                  return { key: r[i].key, data: r[i].data, style: n[t] };
              return { key: e.key, data: e.data, style: n[t] };
            });
      }
      function g(e, t, n, r, i, o, l, s, u) {
        for (
          var f = c.default(r, i, function(e, r) {
              var i = t(r);
              return null == i
                ? (n({ key: r.key, data: r.data }), null)
                : p.default(o[e], i, l[e])
                ? (n({ key: r.key, data: r.data }), null)
                : { key: r.key, data: r.data, style: i };
            }),
            d = [],
            h = [],
            m = [],
            g = [],
            v = 0;
          v < f.length;
          v++
        ) {
          for (var y = f[v], b = null, w = 0; w < r.length; w++)
            if (r[w].key === y.key) {
              b = w;
              break;
            }
          if (null == b) {
            var I = e(y);
            (d[v] = I), (m[v] = I);
            var A = a.default(y.style);
            (h[v] = A), (g[v] = A);
          } else (d[v] = o[b]), (m[v] = s[b]), (h[v] = l[b]), (g[v] = u[b]);
        }
        return [f, d, h, m, g];
      }
      var v = (function(e) {
        function t(n) {
          var i = this;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            e.call(this, n),
            (this.unmounting = !1),
            (this.animationID = null),
            (this.prevTime = 0),
            (this.accumulatedTime = 0),
            (this.unreadPropStyles = null),
            (this.clearUnreadPropStyle = function(e) {
              for (
                var t = g(
                    i.props.willEnter,
                    i.props.willLeave,
                    i.props.didLeave,
                    i.state.mergedPropsStyles,
                    e,
                    i.state.currentStyles,
                    i.state.currentVelocities,
                    i.state.lastIdealStyles,
                    i.state.lastIdealVelocities,
                  ),
                  n = t[0],
                  o = t[1],
                  a = t[2],
                  l = t[3],
                  s = t[4],
                  c = 0;
                c < e.length;
                c++
              ) {
                var u = e[c].style,
                  f = !1;
                for (var p in u)
                  if (Object.prototype.hasOwnProperty.call(u, p)) {
                    var d = u[p];
                    'number' == typeof d &&
                      (f ||
                        ((f = !0),
                        (o[c] = r({}, o[c])),
                        (a[c] = r({}, a[c])),
                        (l[c] = r({}, l[c])),
                        (s[c] = r({}, s[c])),
                        (n[c] = {
                          key: n[c].key,
                          data: n[c].data,
                          style: r({}, n[c].style),
                        })),
                      (o[c][p] = d),
                      (a[c][p] = 0),
                      (l[c][p] = d),
                      (s[c][p] = 0),
                      (n[c].style[p] = d));
                  }
              }
              i.setState({
                currentStyles: o,
                currentVelocities: a,
                mergedPropsStyles: n,
                lastIdealStyles: l,
                lastIdealVelocities: s,
              });
            }),
            (this.startAnimationIfNecessary = function() {
              i.unmounting ||
                (i.animationID = f.default(function(e) {
                  if (!i.unmounting) {
                    var t = i.props.styles,
                      n =
                        'function' == typeof t
                          ? t(
                              m(
                                i.state.mergedPropsStyles,
                                i.unreadPropStyles,
                                i.state.lastIdealStyles,
                              ),
                            )
                          : t;
                    if (
                      (function(e, t, n, r) {
                        if (r.length !== t.length) return !1;
                        for (var i = 0; i < r.length; i++)
                          if (r[i].key !== t[i].key) return !1;
                        for (i = 0; i < r.length; i++)
                          if (!p.default(e[i], t[i].style, n[i])) return !1;
                        return !0;
                      })(
                        i.state.currentStyles,
                        n,
                        i.state.currentVelocities,
                        i.state.mergedPropsStyles,
                      )
                    )
                      return (
                        (i.animationID = null), void (i.accumulatedTime = 0)
                      );
                    var r = e || u.default(),
                      o = r - i.prevTime;
                    if (
                      ((i.prevTime = r),
                      (i.accumulatedTime = i.accumulatedTime + o),
                      i.accumulatedTime > (1e3 / 60) * 10 &&
                        (i.accumulatedTime = 0),
                      0 === i.accumulatedTime)
                    )
                      return (
                        (i.animationID = null),
                        void i.startAnimationIfNecessary()
                      );
                    for (
                      var a =
                          (i.accumulatedTime -
                            Math.floor(i.accumulatedTime / (1e3 / 60)) *
                              (1e3 / 60)) /
                          (1e3 / 60),
                        l = Math.floor(i.accumulatedTime / (1e3 / 60)),
                        c = g(
                          i.props.willEnter,
                          i.props.willLeave,
                          i.props.didLeave,
                          i.state.mergedPropsStyles,
                          n,
                          i.state.currentStyles,
                          i.state.currentVelocities,
                          i.state.lastIdealStyles,
                          i.state.lastIdealVelocities,
                        ),
                        f = c[0],
                        d = c[1],
                        h = c[2],
                        v = c[3],
                        y = c[4],
                        b = 0;
                      b < f.length;
                      b++
                    ) {
                      var w = f[b].style,
                        I = {},
                        A = {},
                        C = {},
                        x = {};
                      for (var k in w)
                        if (Object.prototype.hasOwnProperty.call(w, k)) {
                          var O = w[k];
                          if ('number' == typeof O)
                            (I[k] = O), (A[k] = 0), (C[k] = O), (x[k] = 0);
                          else {
                            for (
                              var E = v[b][k], S = y[b][k], T = 0;
                              T < l;
                              T++
                            ) {
                              var j = s.default(
                                1e3 / 60 / 1e3,
                                E,
                                S,
                                O.val,
                                O.stiffness,
                                O.damping,
                                O.precision,
                              );
                              (E = j[0]), (S = j[1]);
                            }
                            var N = s.default(
                                1e3 / 60 / 1e3,
                                E,
                                S,
                                O.val,
                                O.stiffness,
                                O.damping,
                                O.precision,
                              ),
                              P = N[0],
                              M = N[1];
                            (I[k] = E + (P - E) * a),
                              (A[k] = S + (M - S) * a),
                              (C[k] = E),
                              (x[k] = S);
                          }
                        }
                      (v[b] = C), (y[b] = x), (d[b] = I), (h[b] = A);
                    }
                    (i.animationID = null),
                      (i.accumulatedTime -= l * (1e3 / 60)),
                      i.setState({
                        currentStyles: d,
                        currentVelocities: h,
                        lastIdealStyles: v,
                        lastIdealVelocities: y,
                        mergedPropsStyles: f,
                      }),
                      (i.unreadPropStyles = null),
                      i.startAnimationIfNecessary();
                  }
                }));
            }),
            (this.state = this.defaultState());
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          i(t, null, [
            {
              key: 'propTypes',
              value: {
                defaultStyles: h.default.arrayOf(
                  h.default.shape({
                    key: h.default.string.isRequired,
                    data: h.default.any,
                    style: h.default.objectOf(h.default.number).isRequired,
                  }),
                ),
                styles: h.default.oneOfType([
                  h.default.func,
                  h.default.arrayOf(
                    h.default.shape({
                      key: h.default.string.isRequired,
                      data: h.default.any,
                      style: h.default.objectOf(
                        h.default.oneOfType([
                          h.default.number,
                          h.default.object,
                        ]),
                      ).isRequired,
                    }),
                  ),
                ]).isRequired,
                children: h.default.func.isRequired,
                willEnter: h.default.func,
                willLeave: h.default.func,
                didLeave: h.default.func,
              },
              enumerable: !0,
            },
            {
              key: 'defaultProps',
              value: {
                willEnter: function(e) {
                  return l.default(e.style);
                },
                willLeave: function() {
                  return null;
                },
                didLeave: function() {},
              },
              enumerable: !0,
            },
          ]),
          (t.prototype.defaultState = function() {
            var e = this.props,
              t = e.defaultStyles,
              n = e.styles,
              r = e.willEnter,
              i = e.willLeave,
              o = e.didLeave,
              s = 'function' == typeof n ? n(t) : n,
              c = void 0;
            c =
              null == t
                ? s
                : t.map(function(e) {
                    for (var t = 0; t < s.length; t++)
                      if (s[t].key === e.key) return s[t];
                    return e;
                  });
            var u =
                null == t
                  ? s.map(function(e) {
                      return l.default(e.style);
                    })
                  : t.map(function(e) {
                      return l.default(e.style);
                    }),
              f =
                null == t
                  ? s.map(function(e) {
                      return a.default(e.style);
                    })
                  : t.map(function(e) {
                      return a.default(e.style);
                    }),
              p = g(r, i, o, c, s, u, f, u, f),
              d = p[0];
            return {
              currentStyles: p[1],
              currentVelocities: p[2],
              lastIdealStyles: p[3],
              lastIdealVelocities: p[4],
              mergedPropsStyles: d,
            };
          }),
          (t.prototype.componentDidMount = function() {
            (this.prevTime = u.default()), this.startAnimationIfNecessary();
          }),
          (t.prototype.componentWillReceiveProps = function(e) {
            this.unreadPropStyles &&
              this.clearUnreadPropStyle(this.unreadPropStyles);
            var t = e.styles;
            (this.unreadPropStyles =
              'function' == typeof t
                ? t(
                    m(
                      this.state.mergedPropsStyles,
                      this.unreadPropStyles,
                      this.state.lastIdealStyles,
                    ),
                  )
                : t),
              null == this.animationID &&
                ((this.prevTime = u.default()),
                this.startAnimationIfNecessary());
          }),
          (t.prototype.componentWillUnmount = function() {
            (this.unmounting = !0),
              null != this.animationID &&
                (f.default.cancel(this.animationID), (this.animationID = null));
          }),
          (t.prototype.render = function() {
            var e = m(
                this.state.mergedPropsStyles,
                this.unreadPropStyles,
                this.state.currentStyles,
              ),
              t = this.props.children(e);
            return t && d.default.Children.only(t);
          }),
          t
        );
      })(d.default.Component);
      (t.default = v), (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      n(120),
        (t.__esModule = !0),
        (t.default = function(e, t, n) {
          for (var r = {}, i = 0; i < e.length; i++) r[e[i].key] = i;
          var o = {};
          for (i = 0; i < t.length; i++) o[t[i].key] = i;
          var a = [];
          for (i = 0; i < t.length; i++) a[i] = t[i];
          for (i = 0; i < e.length; i++)
            if (!Object.prototype.hasOwnProperty.call(o, e[i].key)) {
              var l = n(i, e[i]);
              null != l && a.push(l);
            }
          return a.sort(function(e, n) {
            var i = o[e.key],
              a = o[n.key],
              l = r[e.key],
              s = r[n.key];
            if (null != i && null != a) return o[e.key] - o[n.key];
            if (null != l && null != s) return r[e.key] - r[n.key];
            if (null != i) {
              for (var c = 0; c < t.length; c++) {
                var u = t[c].key;
                if (Object.prototype.hasOwnProperty.call(r, u)) {
                  if (i < o[u] && s > r[u]) return -1;
                  if (i > o[u] && s < r[u]) return 1;
                }
              }
              return 1;
            }
            for (c = 0; c < t.length; c++) {
              u = t[c].key;
              if (Object.prototype.hasOwnProperty.call(r, u)) {
                if (a < o[u] && l > r[u]) return 1;
                if (a > o[u] && l < r[u]) return -1;
              }
            }
            return -1;
          });
        }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      n(7), (t.__esModule = !0);
      var r =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
      t.default = function(e, t) {
        return r({}, l, t, { val: e });
      };
      var i,
        o = n(302),
        a = (i = o) && i.__esModule ? i : { default: i },
        l = r({}, a.default.noWobble, { precision: 0.01 });
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.default = function() {
          0;
        });
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      n(120), n(86), n(41), n(55), n(4), n(6), n(2), n(13), n(20), n(17);
      var r = {},
        i = 'x',
        o = [],
        a = function(e) {
          return o.push(e);
        },
        l = function(e, t) {
          return t ? t + '{' + e + '}' : e;
        },
        s = function(e, t, n) {
          return (
            '.' +
            e +
            '{' +
            t.replace(/[A-Z]|^ms/g, '-$&').toLowerCase() +
            ':' +
            n +
            '}'
          );
        },
        c = function(e) {
          return e.replace(/&/g, '');
        },
        u = function e(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : '',
            u = arguments[2];
          return Object.keys(t)
            .map(function(f) {
              var p = t[f];
              if (null === p) return '';
              if ('object' == typeof p) {
                var d = /^@/.test(f) ? f : null;
                return e(p, d ? n : n + f, d || u);
              }
              var h = f + p + n + u;
              if (r[h]) return r[h];
              var m = i + o.length.toString(36);
              return a(l(s(m + c(n), f, p), u)), (r[h] = m), m;
            })
            .join(' ');
        };
      if (
        ((e.exports = function() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t
            .map(function(e) {
              return u(e);
            })
            .join(' ')
            .trim();
        }),
        (e.exports.css = function() {
          return o.sort().join('');
        }),
        (e.exports.reset = function() {
          for (r = {}; o.length; ) o.pop();
        }),
        (e.exports.prefix = function(e) {
          return (i = e);
        }),
        'undefined' != typeof document)
      ) {
        var f = document.head.appendChild(document.createElement('style'))
          .sheet;
        a = function(e) {
          o.push(e), f.insertRule(e, f.cssRules.length);
        };
      }
    },
    function(e) {
      e.exports = JSON.parse(
        '{"data":{"contentfulAbout":{"aboutMe":{"childMarkdownRemark":{"rawMarkdownBody":"Hello 👋 My name is Shane Lonergan. I am a man with many hats, my favorites being full stack web developer, actor, musician, and keyboard enthusiast. Born and raised in Michigan, I went to Oberlin College intending to become a doctor. However, in my first semester I was lucky enough to be cast in a student theater production of the musical Next to Normal, and my life would never be the same. Though I held on to my Biology major, a burning love of Musical Theater consumed my college years, and after graduating I moved to New York to pursue my Broadway dream. After a few years though, I found there was a hole in my life Biology had once filled. In search of something to replace it, I stumbled upon some coding tutorials on youtube, and I was immediately hooked. I attended the Flatiron school, where I learned more in 15 weeks then I ever thought was possible, and met some of the most incredible people doing it. I am now seeking my first job as a developer, freelancing on the side, and learning as much as I possibly can. Don’t hesitate to reach out!\\n"}},"profile":{"title":"Shane ","image":{"src":"//images.ctfassets.net/u68h6i4dgl0q/6nf3rNaaVaUqYcoAcciSeC/1ab9ec2114c327ca8258b8387b1c7ec7/shane_sunday.jpg?w=450&fl=progressive&q=100"}}}}}',
      );
    },
    function(e, t, n) {
      'use strict';
      function r(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance',
            );
          })()
        );
      }
      n(69),
        n(12),
        n(56),
        n(43),
        n(6),
        n(13),
        n(30),
        n(89),
        n(175),
        n(41),
        n(55),
        n(2),
        n(34),
        n(31),
        n(4);
      var i = n(283),
        o = n(324),
        a = n(337),
        l = n(21),
        s = n(393),
        c = n(395),
        u = n(396),
        f = n(397),
        p = n(398),
        d = n(399),
        h = n(400),
        m = n(401),
        g = n(402),
        v = Object.keys(m),
        y = function(e) {
          var t = e.source || e.children || '',
            n = e.parserOptions;
          if (e.allowedTypes && e.disallowedTypes)
            throw new Error(
              'Only one of `allowedTypes` and `disallowedTypes` should be defined',
            );
          var r = i(m, e.renderers),
            l = [[a, n]].concat(e.plugins || []).reduce(b, o()),
            h = l.parse(t),
            y = i(e, { renderers: r, definitions: d(h) }),
            w = (function(e) {
              var t = [p, s()],
                n = e.disallowedTypes;
              e.allowedTypes &&
                (n = v.filter(function(t) {
                  return 'root' !== t && -1 === e.allowedTypes.indexOf(t);
                }));
              var r = e.unwrapDisallowed ? 'unwrap' : 'remove';
              n && n.length > 0 && t.push(u.ofType(n, r));
              e.allowNode && t.push(u.ifNotMatch(e.allowNode, r));
              var i = !e.escapeHtml && !e.skipHtml,
                o = (e.astPlugins || []).some(function(e) {
                  return (
                    (Array.isArray(e) ? e[0] : e).identity === g.HtmlParser
                  );
                });
              i && !o && t.push(c);
              return e.astPlugins ? t.concat(e.astPlugins) : t;
            })(e),
            I = l.runSync(h),
            A = w.reduce(function(e, t) {
              return t(e, y);
            }, I);
          return f(A, y);
        };
      function b(e, t) {
        return Array.isArray(t) ? e.use.apply(e, r(t)) : e.use(t);
      }
      (y.defaultProps = {
        renderers: {},
        escapeHtml: !0,
        skipHtml: !1,
        sourcePos: !1,
        rawSourcePos: !1,
        transformLinkUri: h,
        astPlugins: [],
        plugins: [],
        parserOptions: {},
      }),
        (y.propTypes = {
          className: l.string,
          source: l.string,
          children: l.string,
          sourcePos: l.bool,
          rawSourcePos: l.bool,
          escapeHtml: l.bool,
          skipHtml: l.bool,
          allowNode: l.func,
          allowedTypes: l.arrayOf(l.oneOf(v)),
          disallowedTypes: l.arrayOf(l.oneOf(v)),
          transformLinkUri: l.oneOfType([l.func, l.bool]),
          linkTarget: l.oneOfType([l.func, l.string]),
          transformImageUri: l.func,
          astPlugins: l.arrayOf(l.func),
          unwrapDisallowed: l.bool,
          renderers: l.object,
          plugins: l.array,
          parserOptions: l.object,
        }),
        (y.types = v),
        (y.renderers = m),
        (y.uriTransformer = h),
        (e.exports = y);
    },
    function(e, t, n) {
      'use strict';
      n(46), n(2);
      var r = n(325),
        i = n(326),
        o = n(327),
        a = n(333),
        l = n(335),
        s = n(336);
      e.exports = (function e() {
        var t = [],
          n = a(),
          y = {},
          b = !1,
          w = -1;
        return (
          (I.data = function(e, t) {
            if (l(e))
              return 2 === arguments.length
                ? (m('data', b), (y[e] = t), I)
                : (u.call(y, e) && y[e]) || null;
            if (e) return m('data', b), (y = e), I;
            return y;
          }),
          (I.freeze = A),
          (I.attachers = t),
          (I.use = function(e) {
            var n;
            if ((m('use', b), null == e));
            else if ('function' == typeof e) l.apply(null, arguments);
            else {
              if ('object' != typeof e)
                throw new Error('Expected usable value, not `' + e + '`');
              'length' in e ? a(e) : i(e);
            }
            n && (y.settings = r(y.settings || {}, n));
            return I;
            function i(e) {
              a(e.plugins), e.settings && (n = r(n || {}, e.settings));
            }
            function o(e) {
              if ('function' == typeof e) l(e);
              else {
                if ('object' != typeof e)
                  throw new Error('Expected usable value, not `' + e + '`');
                'length' in e ? l.apply(null, e) : i(e);
              }
            }
            function a(e) {
              var t, n;
              if (null == e);
              else {
                if (!('object' == typeof e && 'length' in e))
                  throw new Error(
                    'Expected a list of plugins, not `' + e + '`',
                  );
                for (t = e.length, n = -1; ++n < t; ) o(e[n]);
              }
            }
            function l(e, n) {
              var i = C(e);
              i
                ? (s(i[1]) && s(n) && (n = r(i[1], n)), (i[1] = n))
                : t.push(c.call(arguments));
            }
          }),
          (I.parse = function(e) {
            var t,
              n = o(e);
            if ((A(), d('parse', (t = I.Parser)), p(t)))
              return new t(String(n), n).parse();
            return t(String(n), n);
          }),
          (I.stringify = function(e, t) {
            var n,
              r = o(t);
            if ((A(), h('stringify', (n = I.Compiler)), g(e), p(n)))
              return new n(e, r).compile();
            return n(e, r);
          }),
          (I.run = x),
          (I.runSync = function(e, t) {
            var n,
              r = !1;
            return (
              x(e, t, function(e, t) {
                (r = !0), i(e), (n = t);
              }),
              v('runSync', 'run', r),
              n
            );
          }),
          (I.process = k),
          (I.processSync = function(e) {
            var t,
              n = !1;
            return (
              A(),
              d('processSync', I.Parser),
              h('processSync', I.Compiler),
              k((t = o(e)), function(e) {
                (n = !0), i(e);
              }),
              v('processSync', 'process', n),
              t
            );
          }),
          I
        );
        function I() {
          for (var n = e(), i = t.length, o = -1; ++o < i; )
            n.use.apply(null, t[o]);
          return n.data(r(!0, {}, y)), n;
        }
        function A() {
          var e, r, i, o;
          if (b) return I;
          for (; ++w < t.length; )
            (r = (e = t[w])[0]),
              null,
              !1 !== (i = e[1]) &&
                (!0 === i && (e[1] = void 0),
                'function' == typeof (o = r.apply(I, e.slice(1))) && n.use(o));
          return (b = !0), (w = 1 / 0), I;
        }
        function C(e) {
          for (var n, r = t.length, i = -1; ++i < r; )
            if ((n = t[i])[0] === e) return n;
        }
        function x(e, t, r) {
          if (
            (g(e),
            A(),
            r || 'function' != typeof t || ((r = t), (t = null)),
            !r)
          )
            return new Promise(i);
          function i(i, a) {
            n.run(e, o(t), function(t, n, o) {
              (n = n || e), t ? a(t) : i ? i(n) : r(null, n, o);
            });
          }
          i(null, r);
        }
        function k(e, t) {
          if ((A(), d('process', I.Parser), h('process', I.Compiler), !t))
            return new Promise(n);
          function n(n, r) {
            var i = o(e);
            f.run(I, { file: i }, function(e) {
              e ? r(e) : n ? n(i) : t(null, i);
            });
          }
          n(null, t);
        }
      })().freeze();
      var c = [].slice,
        u = {}.hasOwnProperty,
        f = a()
          .use(function(e, t) {
            t.tree = e.parse(t.file);
          })
          .use(function(e, t, n) {
            e.run(t.tree, t.file, function(e, r, i) {
              e ? n(e) : ((t.tree = r), (t.file = i), n());
            });
          })
          .use(function(e, t) {
            t.file.contents = e.stringify(t.tree, t.file);
          });
      function p(e) {
        return (
          'function' == typeof e &&
          (function(e) {
            var t;
            for (t in e) return !0;
            return !1;
          })(e.prototype)
        );
      }
      function d(e, t) {
        if ('function' != typeof t)
          throw new Error('Cannot `' + e + '` without `Parser`');
      }
      function h(e, t) {
        if ('function' != typeof t)
          throw new Error('Cannot `' + e + '` without `Compiler`');
      }
      function m(e, t) {
        if (t)
          throw new Error(
            [
              'Cannot invoke `' + e + '` on a frozen processor.\nCreate a new ',
              'processor first, by invoking it: use `processor()` instead of ',
              '`processor`.',
            ].join(''),
          );
      }
      function g(e) {
        if (!e || !l(e.type)) throw new Error('Expected node, got `' + e + '`');
      }
      function v(e, t, n) {
        if (!n)
          throw new Error(
            '`' + e + '` finished async. Use `' + t + '` instead',
          );
      }
    },
    function(e, t, n) {
      'use strict';
      n(28), n(30), n(29), n(41), n(55), n(2);
      var r = Object.prototype.hasOwnProperty,
        i = Object.prototype.toString,
        o = Object.defineProperty,
        a = Object.getOwnPropertyDescriptor,
        l = function(e) {
          return 'function' == typeof Array.isArray
            ? Array.isArray(e)
            : '[object Array]' === i.call(e);
        },
        s = function(e) {
          if (!e || '[object Object]' !== i.call(e)) return !1;
          var t,
            n = r.call(e, 'constructor'),
            o =
              e.constructor &&
              e.constructor.prototype &&
              r.call(e.constructor.prototype, 'isPrototypeOf');
          if (e.constructor && !n && !o) return !1;
          for (t in e);
          return void 0 === t || r.call(e, t);
        },
        c = function(e, t) {
          o && '__proto__' === t.name
            ? o(e, t.name, {
                enumerable: !0,
                configurable: !0,
                value: t.newValue,
                writable: !0,
              })
            : (e[t.name] = t.newValue);
        },
        u = function(e, t) {
          if ('__proto__' === t) {
            if (!r.call(e, t)) return;
            if (a) return a(e, t).value;
          }
          return e[t];
        };
      e.exports = function e() {
        var t,
          n,
          r,
          i,
          o,
          a,
          f = arguments[0],
          p = 1,
          d = arguments.length,
          h = !1;
        for (
          'boolean' == typeof f && ((h = f), (f = arguments[1] || {}), (p = 2)),
            (null == f || ('object' != typeof f && 'function' != typeof f)) &&
              (f = {});
          p < d;
          ++p
        )
          if (null != (t = arguments[p]))
            for (n in t)
              (r = u(f, n)),
                f !== (i = u(t, n)) &&
                  (h && i && (s(i) || (o = l(i)))
                    ? (o
                        ? ((o = !1), (a = r && l(r) ? r : []))
                        : (a = r && s(r) ? r : {}),
                      c(f, { name: n, newValue: e(h, a, i) }))
                    : void 0 !== i && c(f, { name: n, newValue: i }));
        return f;
      };
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        if (e) throw e;
      };
    },
    function(e, t, n) {
      'use strict';
      n(28);
      var r = n(328),
        i = n(330);
      e.exports = i;
      var o = i.prototype;
      function a(e, t, n) {
        var i = this.path,
          o = new r(e, t, n);
        return (
          i && ((o.name = i + ':' + o.name), (o.file = i)),
          (o.fatal = !1),
          this.messages.push(o),
          o
        );
      }
      (o.message = a),
        (o.info = function() {
          var e = this.message.apply(this, arguments);
          return (e.fatal = null), e;
        }),
        (o.fail = function() {
          var e = this.message.apply(this, arguments);
          throw ((e.fatal = !0), e);
        }),
        (o.warn = a);
    },
    function(e, t, n) {
      'use strict';
      n(12), n(28);
      var r = n(329);
      function i() {}
      (e.exports = a), (i.prototype = Error.prototype), (a.prototype = new i());
      var o = a.prototype;
      function a(e, t, n) {
        var i, o, a;
        'string' == typeof t && ((n = t), (t = null)),
          (i = (function(e) {
            var t,
              n = [null, null];
            'string' == typeof e &&
              (-1 === (t = e.indexOf(':'))
                ? (n[1] = e)
                : ((n[0] = e.slice(0, t)), (n[1] = e.slice(t + 1))));
            return n;
          })(n)),
          (o = r(t) || '1:1'),
          (a = {
            start: { line: null, column: null },
            end: { line: null, column: null },
          }),
          t && t.position && (t = t.position),
          t && (t.start ? ((a = t), (t = t.start)) : (a.start = t)),
          e.stack && ((this.stack = e.stack), (e = e.message)),
          (this.message = e),
          (this.name = o),
          (this.reason = e),
          (this.line = t ? t.line : null),
          (this.column = t ? t.column : null),
          (this.location = a),
          (this.source = i[0]),
          (this.ruleId = i[1]);
      }
      (o.file = ''),
        (o.name = ''),
        (o.reason = ''),
        (o.message = ''),
        (o.stack = ''),
        (o.fatal = null),
        (o.column = null),
        (o.line = null);
    },
    function(e, t, n) {
      'use strict';
      var r = {}.hasOwnProperty;
      function i(e) {
        return (
          (e && 'object' == typeof e) || (e = {}), a(e.line) + ':' + a(e.column)
        );
      }
      function o(e) {
        return (
          (e && 'object' == typeof e) || (e = {}), i(e.start) + '-' + i(e.end)
        );
      }
      function a(e) {
        return e && 'number' == typeof e ? e : 1;
      }
      e.exports = function(e) {
        if (!e || 'object' != typeof e) return null;
        if (r.call(e, 'position') || r.call(e, 'type')) return o(e.position);
        if (r.call(e, 'start') || r.call(e, 'end')) return o(e);
        if (r.call(e, 'line') || r.call(e, 'column')) return i(e);
        return null;
      };
    },
    function(e, t, n) {
      'use strict';
      (function(t) {
        n(29), n(12), n(41), n(55), n(2);
        var r = n(303),
          i = n(331),
          o = n(332);
        e.exports = c;
        var a = {}.hasOwnProperty,
          l = c.prototype;
        l.toString = function(e) {
          var t = this.contents || '';
          return o(t) ? t.toString(e) : String(t);
        };
        var s = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
        function c(e) {
          var n, r, i;
          if (e) {
            if ('string' == typeof e || o(e)) e = { contents: e };
            else if ('message' in e && 'messages' in e) return e;
          } else e = {};
          if (!(this instanceof c)) return new c(e);
          for (
            this.data = {},
              this.messages = [],
              this.history = [],
              this.cwd = t.cwd(),
              r = -1,
              i = s.length;
            ++r < i;

          )
            (n = s[r]), a.call(e, n) && (this[n] = e[n]);
          for (n in e) -1 === s.indexOf(n) && (this[n] = e[n]);
        }
        function u(e, t) {
          if (-1 !== e.indexOf(r.sep))
            throw new Error(
              '`' + t + '` cannot be a path: did not expect `' + r.sep + '`',
            );
        }
        function f(e, t) {
          if (!e) throw new Error('`' + t + '` cannot be empty');
        }
        function p(e, t) {
          if (!e)
            throw new Error(
              'Setting `' + t + '` requires `path` to be set too',
            );
        }
        Object.defineProperty(l, 'path', {
          get: function() {
            return this.history[this.history.length - 1];
          },
          set: function(e) {
            f(e, 'path'), e !== this.path && this.history.push(e);
          },
        }),
          Object.defineProperty(l, 'dirname', {
            get: function() {
              return 'string' == typeof this.path
                ? r.dirname(this.path)
                : void 0;
            },
            set: function(e) {
              p(this.path, 'dirname'),
                (this.path = r.join(e || '', this.basename));
            },
          }),
          Object.defineProperty(l, 'basename', {
            get: function() {
              return 'string' == typeof this.path
                ? r.basename(this.path)
                : void 0;
            },
            set: function(e) {
              f(e, 'basename'),
                u(e, 'basename'),
                (this.path = r.join(this.dirname || '', e));
            },
          }),
          Object.defineProperty(l, 'extname', {
            get: function() {
              return 'string' == typeof this.path
                ? r.extname(this.path)
                : void 0;
            },
            set: function(e) {
              var t = e || '';
              if ((u(t, 'extname'), p(this.path, 'extname'), t)) {
                if ('.' !== t.charAt(0))
                  throw new Error('`extname` must start with `.`');
                if (-1 !== t.indexOf('.', 1))
                  throw new Error('`extname` cannot contain multiple dots');
              }
              this.path = i(this.path, t);
            },
          }),
          Object.defineProperty(l, 'stem', {
            get: function() {
              return 'string' == typeof this.path
                ? r.basename(this.path, this.extname)
                : void 0;
            },
            set: function(e) {
              f(e, 'stem'),
                u(e, 'stem'),
                (this.path = r.join(
                  this.dirname || '',
                  e + (this.extname || ''),
                ));
            },
          });
      }.call(this, n(174)));
    },
    function(e, t, n) {
      'use strict';
      var r = n(303);
      e.exports = function(e, t) {
        if ('string' != typeof e) return e;
        if (0 === e.length) return e;
        var n = r.basename(e, r.extname(e)) + t;
        return r.join(r.dirname(e), n);
      };
    },
    function(e, t) {
      function n(e) {
        return (
          !!e.constructor &&
          'function' == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      }
      e.exports = function(e) {
        return (
          null != e &&
          (n(e) ||
            (function(e) {
              return (
                'function' == typeof e.readFloatLE &&
                'function' == typeof e.slice &&
                n(e.slice(0, 0))
              );
            })(e) ||
            !!e._isBuffer)
        );
      };
    },
    function(e, t, n) {
      'use strict';
      var r = n(334);
      (e.exports = o), (o.wrap = r);
      var i = [].slice;
      function o() {
        var e = [],
          t = {
            run: function() {
              var t = -1,
                n = i.call(arguments, 0, -1),
                o = arguments[arguments.length - 1];
              if ('function' != typeof o)
                throw new Error('Expected function as last argument, not ' + o);
              function a(l) {
                var s = e[++t],
                  c = i.call(arguments, 0),
                  u = c.slice(1),
                  f = n.length,
                  p = -1;
                if (l) o(l);
                else {
                  for (; ++p < f; )
                    (null !== u[p] && void 0 !== u[p]) || (u[p] = n[p]);
                  (n = u),
                    s
                      ? r(s, a).apply(null, n)
                      : o.apply(null, [null].concat(n));
                }
              }
              a.apply(null, [null].concat(n));
            },
            use: function(n) {
              if ('function' != typeof n)
                throw new Error('Expected `fn` to be a function, not ' + n);
              return e.push(n), t;
            },
          };
        return t;
      }
    },
    function(e, t, n) {
      'use strict';
      var r = [].slice;
      e.exports = function(e, t) {
        var n;
        return function() {
          var t,
            a = r.call(arguments, 0),
            l = e.length > a.length;
          l && a.push(i);
          try {
            t = e.apply(null, a);
          } catch (s) {
            if (l && n) throw s;
            return i(s);
          }
          l ||
            (t && 'function' == typeof t.then
              ? t.then(o, i)
              : t instanceof Error
              ? i(t)
              : o(t));
        };
        function i() {
          n || ((n = !0), t.apply(null, arguments));
        }
        function o(e) {
          i(null, e);
        }
      };
    },
    function(e, t, n) {
      n(41), n(55), n(2);
      var r = Object.prototype.toString;
      e.exports = function(e) {
        return '[object String]' === r.call(e);
      };
    },
    function(e, t, n) {
      'use strict';
      n(41), n(55), n(2);
      var r = Object.prototype.toString;
      e.exports = function(e) {
        var t;
        return (
          '[object Object]' === r.call(e) &&
          (null === (t = Object.getPrototypeOf(e)) ||
            t === Object.getPrototypeOf({}))
        );
      };
    },
    function(e, t, n) {
      'use strict';
      var r = n(338),
        i = n(283),
        o = n(340);
      function a(e) {
        var t = r(o);
        (t.prototype.options = i(
          t.prototype.options,
          this.data('settings'),
          e,
        )),
          (this.Parser = t);
      }
      (e.exports = a), (a.Parser = o);
    },
    function(e, t, n) {
      'use strict';
      var r = n(283),
        i = n(339);
      e.exports = function(e) {
        var t, n, o;
        for (n in (i(l, e), i(a, l), (t = l.prototype)))
          (o = t[n]) &&
            'object' == typeof o &&
            (t[n] = 'concat' in o ? o.concat() : r(o));
        return l;
        function a(t) {
          return e.apply(this, t);
        }
        function l() {
          return this instanceof l
            ? e.apply(this, arguments)
            : new a(arguments);
        }
      };
    },
    function(e, t, n) {
      n(42),
        'function' == typeof Object.create
          ? (e.exports = function(e, t) {
              t &&
                ((e.super_ = t),
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })));
            })
          : (e.exports = function(e, t) {
              if (t) {
                e.super_ = t;
                var n = function() {};
                (n.prototype = t.prototype),
                  (e.prototype = new n()),
                  (e.prototype.constructor = e);
              }
            });
    },
    function(e, t, n) {
      'use strict';
      var r = n(283),
        i = n(341),
        o = n(342),
        a = n(343),
        l = n(344),
        s = n(350);
      function c(e, t) {
        (this.file = t),
          (this.offset = {}),
          (this.options = r(this.options)),
          this.setOptions({}),
          (this.inList = !1),
          (this.inBlock = !1),
          (this.inLink = !1),
          (this.atStart = !0),
          (this.toOffset = o(t).toOffset),
          (this.unescape = a(this, 'escape')),
          (this.decode = l(this));
      }
      e.exports = c;
      var u = c.prototype;
      function f(e) {
        var t,
          n = [];
        for (t in e) n.push(t);
        return n;
      }
      (u.setOptions = n(351)),
        (u.parse = n(354)),
        (u.options = n(305)),
        (u.exitStart = i('atStart', !0)),
        (u.enterList = i('inList', !1)),
        (u.enterLink = i('inLink', !1)),
        (u.enterBlock = i('inBlock', !1)),
        (u.interruptParagraph = [
          ['thematicBreak'],
          ['atxHeading'],
          ['fencedCode'],
          ['blockquote'],
          ['html'],
          ['setextHeading', { commonmark: !1 }],
          ['definition', { commonmark: !1 }],
          ['footnote', { commonmark: !1 }],
        ]),
        (u.interruptList = [
          ['atxHeading', { pedantic: !1 }],
          ['fencedCode', { pedantic: !1 }],
          ['thematicBreak', { pedantic: !1 }],
          ['definition', { commonmark: !1 }],
          ['footnote', { commonmark: !1 }],
        ]),
        (u.interruptBlockquote = [
          ['indentedCode', { commonmark: !0 }],
          ['fencedCode', { commonmark: !0 }],
          ['atxHeading', { commonmark: !0 }],
          ['setextHeading', { commonmark: !0 }],
          ['thematicBreak', { commonmark: !0 }],
          ['html', { commonmark: !0 }],
          ['list', { commonmark: !0 }],
          ['definition', { commonmark: !1 }],
          ['footnote', { commonmark: !1 }],
        ]),
        (u.blockTokenizers = {
          newline: n(358),
          indentedCode: n(359),
          fencedCode: n(360),
          blockquote: n(361),
          atxHeading: n(362),
          thematicBreak: n(363),
          list: n(364),
          setextHeading: n(366),
          html: n(367),
          footnote: n(368),
          definition: n(370),
          table: n(371),
          paragraph: n(372),
        }),
        (u.inlineTokenizers = {
          escape: n(373),
          autoLink: n(375),
          url: n(376),
          html: n(378),
          link: n(379),
          reference: n(380),
          strong: n(381),
          emphasis: n(383),
          deletion: n(386),
          code: n(388),
          break: n(390),
          text: n(392),
        }),
        (u.blockMethods = f(u.blockTokenizers)),
        (u.inlineMethods = f(u.inlineTokenizers)),
        (u.tokenizeBlock = s('block')),
        (u.tokenizeInline = s('inline')),
        (u.tokenizeFactory = s);
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e, t, n) {
        return function() {
          var r = n || this,
            i = r[e];
          return (
            (r[e] = !t),
            function() {
              r[e] = i;
            }
          );
        };
      };
    },
    function(e, t, n) {
      'use strict';
      function r(e) {
        return function(t) {
          var n = -1,
            r = e.length;
          if (t < 0) return {};
          for (; ++n < r; )
            if (e[n] > t)
              return {
                line: n + 1,
                column: t - (e[n - 1] || 0) + 1,
                offset: t,
              };
          return {};
        };
      }
      function i(e) {
        return function(t) {
          var n = t && t.line,
            r = t && t.column;
          if (!isNaN(n) && !isNaN(r) && n - 1 in e)
            return (e[n - 2] || 0) + r - 1 || 0;
          return -1;
        };
      }
      n(12),
        (e.exports = function(e) {
          var t = (function(e) {
            var t = [],
              n = e.indexOf('\n');
            for (; -1 !== n; ) t.push(n + 1), (n = e.indexOf('\n', n + 1));
            return t.push(e.length + 1), t;
          })(String(e));
          return { toPosition: r(t), toOffset: i(t) };
        });
    },
    function(e, t, n) {
      'use strict';
      n(12),
        (e.exports = function(e, t) {
          return function(n) {
            var r,
              i = 0,
              o = n.indexOf('\\'),
              a = e[t],
              l = [];
            for (; -1 !== o; )
              l.push(n.slice(i, o)),
                (i = o + 1),
                ((r = n.charAt(i)) && -1 !== a.indexOf(r)) || l.push('\\'),
                (o = n.indexOf('\\', i));
            return l.push(n.slice(i)), l.join('');
          };
        });
    },
    function(e, t, n) {
      'use strict';
      var r = n(283),
        i = n(294);
      e.exports = function(e) {
        return (
          (o.raw = function(e, o, a) {
            return i(e, r(a, { position: t(o), warning: n }));
          }),
          o
        );
        function t(t) {
          for (var n = e.offset, r = t.line, i = []; ++r && r in n; )
            i.push((n[r] || 0) + 1);
          return { start: t, indent: i };
        }
        function n(t, n, r) {
          3 !== r && e.file.message(t, n);
        }
        function o(r, o, a) {
          i(r, {
            position: t(o),
            warning: n,
            text: a,
            reference: a,
            textContext: e,
            referenceContext: e,
          });
        }
      };
    },
    function(e) {
      e.exports = JSON.parse(
        '{"AElig":"Æ","AMP":"&","Aacute":"Á","Acirc":"Â","Agrave":"À","Aring":"Å","Atilde":"Ã","Auml":"Ä","COPY":"©","Ccedil":"Ç","ETH":"Ð","Eacute":"É","Ecirc":"Ê","Egrave":"È","Euml":"Ë","GT":">","Iacute":"Í","Icirc":"Î","Igrave":"Ì","Iuml":"Ï","LT":"<","Ntilde":"Ñ","Oacute":"Ó","Ocirc":"Ô","Ograve":"Ò","Oslash":"Ø","Otilde":"Õ","Ouml":"Ö","QUOT":"\\"","REG":"®","THORN":"Þ","Uacute":"Ú","Ucirc":"Û","Ugrave":"Ù","Uuml":"Ü","Yacute":"Ý","aacute":"á","acirc":"â","acute":"´","aelig":"æ","agrave":"à","amp":"&","aring":"å","atilde":"ã","auml":"ä","brvbar":"¦","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","curren":"¤","deg":"°","divide":"÷","eacute":"é","ecirc":"ê","egrave":"è","eth":"ð","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","iacute":"í","icirc":"î","iexcl":"¡","igrave":"ì","iquest":"¿","iuml":"ï","laquo":"«","lt":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","ntilde":"ñ","oacute":"ó","ocirc":"ô","ograve":"ò","ordf":"ª","ordm":"º","oslash":"ø","otilde":"õ","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","raquo":"»","reg":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","thorn":"þ","times":"×","uacute":"ú","ucirc":"û","ugrave":"ù","uml":"¨","uuml":"ü","yacute":"ý","yen":"¥","yuml":"ÿ"}',
      );
    },
    function(e) {
      e.exports = JSON.parse(
        '{"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"}',
      );
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        var t = 'string' == typeof e ? e.charCodeAt(0) : e;
        return (
          (t >= 97 && t <= 102) || (t >= 65 && t <= 70) || (t >= 48 && t <= 57)
        );
      };
    },
    function(e, t, n) {
      'use strict';
      var r = n(304),
        i = n(288);
      e.exports = function(e) {
        return r(e) || i(e);
      };
    },
    function(e, t, n) {
      'use strict';
      var r;
      e.exports = function(e) {
        var t,
          n = '&' + e + ';';
        if (
          (((r = r || document.createElement('i')).innerHTML = n),
          59 === (t = r.textContent).charCodeAt(t.length - 1) && 'semi' !== e)
        )
          return !1;
        return t !== n && t;
      };
    },
    function(e, t, n) {
      'use strict';
      n(12),
        (e.exports = function(e) {
          return function(t, n) {
            var o,
              a,
              l,
              s,
              c,
              u,
              f = this,
              p = f.offset,
              d = [],
              h = f[e + 'Methods'],
              m = f[e + 'Tokenizers'],
              g = n.line,
              v = n.column;
            if (!t) return d;
            (I.now = b), (I.file = f.file), y('');
            for (; t; ) {
              for (
                o = -1, a = h.length, c = !1;
                ++o < a &&
                ((s = h[o]),
                !(l = m[s]) ||
                  (l.onlyAtStart && !f.atStart) ||
                  (l.notInList && f.inList) ||
                  (l.notInBlock && f.inBlock) ||
                  (l.notInLink && f.inLink) ||
                  ((u = t.length), l.apply(f, [I, t]), !(c = u !== t.length)));

              );
              c || f.file.fail(new Error('Infinite loop'), I.now());
            }
            return (f.eof = b()), d;
            function y(e) {
              for (var t = -1, n = e.indexOf('\n'); -1 !== n; )
                g++, (t = n), (n = e.indexOf('\n', n + 1));
              -1 === t ? (v += e.length) : (v = e.length - t),
                g in p &&
                  (-1 !== t ? (v += p[g]) : v <= p[g] && (v = p[g] + 1));
            }
            function b() {
              var e = { line: g, column: v };
              return (e.offset = f.toOffset(e)), e;
            }
            function w(e) {
              (this.start = e), (this.end = b());
            }
            function I(e) {
              var n,
                o = (function() {
                  var e = [],
                    t = g + 1;
                  return function() {
                    for (var n = g + 1; t < n; ) e.push((p[t] || 0) + 1), t++;
                    return e;
                  };
                })(),
                a =
                  ((n = b()),
                  function(e, t) {
                    var r = e.position,
                      i = r ? r.start : n,
                      o = [],
                      a = r && r.end.line,
                      l = n.line;
                    if (((e.position = new w(i)), r && t && r.indent)) {
                      if (((o = r.indent), a < l)) {
                        for (; ++a < l; ) o.push((p[a] || 0) + 1);
                        o.push(n.column);
                      }
                      t = o.concat(t);
                    }
                    return (e.position.indent = t || []), e;
                  }),
                l = b();
              return (
                (function(e) {
                  t.substring(0, e.length) !== e &&
                    f.file.fail(
                      new Error(
                        'Incorrectly eaten value: please report this warning on http://git.io/vg5Ft',
                      ),
                      b(),
                    );
                })(e),
                (s.reset = c),
                (c.test = u),
                (s.test = u),
                (t = t.substring(e.length)),
                y(e),
                (o = o()),
                s
              );
              function s(e, t) {
                return a(
                  (function(e, t) {
                    var n = t ? t.children : d,
                      o = n[n.length - 1];
                    return (
                      o &&
                        e.type === o.type &&
                        e.type in r &&
                        i(o) &&
                        i(e) &&
                        (e = r[e.type].call(f, o, e)),
                      e !== o && n.push(e),
                      f.atStart && 0 !== d.length && f.exitStart(),
                      e
                    );
                  })(a(e), t),
                  o,
                );
              }
              function c() {
                var n = s.apply(null, arguments);
                return (g = l.line), (v = l.column), (t = e + t), n;
              }
              function u() {
                var n = a({});
                return (g = l.line), (v = l.column), (t = e + t), n.position;
              }
            }
          };
        });
      var r = {
        text: function(e, t) {
          return (e.value += t.value), e;
        },
        blockquote: function(e, t) {
          if (this.options.commonmark) return t;
          return (e.children = e.children.concat(t.children)), e;
        },
      };
      function i(e) {
        var t, n;
        return (
          'text' !== e.type ||
          !e.position ||
          ((t = e.position.start),
          (n = e.position.end),
          t.line !== n.line || n.column - t.column === e.value.length)
        );
      }
    },
    function(e, t, n) {
      'use strict';
      var r = n(283),
        i = n(352),
        o = n(305);
      e.exports = function(e) {
        var t,
          n,
          a = this.options;
        if (null == e) e = {};
        else {
          if ('object' != typeof e)
            throw new Error('Invalid value `' + e + '` for setting `options`');
          e = r(e);
        }
        for (t in o) {
          if (
            (null == (n = e[t]) && (n = a[t]),
            ('blocks' !== t && 'boolean' != typeof n) ||
              ('blocks' === t && 'object' != typeof n))
          )
            throw new Error(
              'Invalid value `' + n + '` for setting `options.' + t + '`',
            );
          e[t] = n;
        }
        return (this.options = e), (this.escape = i(e)), this;
      };
    },
    function(e, t, n) {
      'use strict';
      e.exports = a;
      var r = [
          '\\',
          '`',
          '*',
          '{',
          '}',
          '[',
          ']',
          '(',
          ')',
          '#',
          '+',
          '-',
          '.',
          '!',
          '_',
          '>',
        ],
        i = r.concat(['~', '|']),
        o = i.concat([
          '\n',
          '"',
          '$',
          '%',
          '&',
          "'",
          ',',
          '/',
          ':',
          ';',
          '<',
          '=',
          '?',
          '@',
          '^',
        ]);
      function a(e) {
        var t = e || {};
        return t.commonmark ? o : t.gfm ? i : r;
      }
      (a.default = r), (a.gfm = i), (a.commonmark = o);
    },
    function(e) {
      e.exports = JSON.parse(
        '["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]',
      );
    },
    function(e, t, n) {
      'use strict';
      n(17);
      var r = n(283),
        i = n(355);
      e.exports = function() {
        var e,
          t = String(this.file),
          n = { line: 1, column: 1, offset: 0 },
          a = r(n);
        65279 === (t = t.replace(o, '\n')).charCodeAt(0) &&
          ((t = t.slice(1)), a.column++, a.offset++);
        (e = {
          type: 'root',
          children: this.tokenizeBlock(t, a),
          position: { start: n, end: this.eof || r(n) },
        }),
          this.options.position || i(e, !0);
        return e;
      };
      var o = /\r\n|\r/g;
    },
    function(e, t, n) {
      'use strict';
      var r = n(289);
      function i(e) {
        delete e.position;
      }
      function o(e) {
        e.position = void 0;
      }
      e.exports = function(e, t) {
        return r(e, t ? i : o), e;
      };
    },
    function(e, t, n) {
      'use strict';
      e.exports = i;
      var r = n(357);
      function i(e, t, n, i) {
        var a;
        function l(e, r, s) {
          var c,
            u = [];
          return ((t && !a(e, r, s[s.length - 1] || null)) ||
            !1 !== (u = o(n(e, s)))[0]) &&
            e.children &&
            'skip' !== u[0] &&
            !1 ===
              (c = o(
                (function(e, t) {
                  var n,
                    r = i ? -1 : 1,
                    o = (i ? e.length : -1) + r;
                  for (; o > -1 && o < e.length; ) {
                    if (!1 === (n = l(e[o], o, t))[0]) return n;
                    o = 'number' == typeof n[1] ? n[1] : o + r;
                  }
                })(e.children, s.concat(e)),
              ))[0]
            ? c
            : u;
        }
        'function' == typeof t &&
          'function' != typeof n &&
          ((i = n), (n = t), (t = null)),
          (a = r(t)),
          l(e, null, []);
      }
      function o(e) {
        return null !== e && 'object' == typeof e && 'length' in e
          ? e
          : 'number' == typeof e
          ? [!0, e]
          : [e];
      }
      (i.CONTINUE = !0), (i.SKIP = 'skip'), (i.EXIT = !1);
    },
    function(e, t, n) {
      'use strict';
      function r(e) {
        if ('string' == typeof e)
          return (function(e) {
            return function(t) {
              return Boolean(t && t.type === e);
            };
          })(e);
        if (null == e) return a;
        if ('object' == typeof e) return ('length' in e ? o : i)(e);
        if ('function' == typeof e) return e;
        throw new Error('Expected function, string, or object as test');
      }
      function i(e) {
        return function(t) {
          var n;
          for (n in e) if (t[n] !== e[n]) return !1;
          return !0;
        };
      }
      function o(e) {
        var t = (function(e) {
            for (var t = [], n = e.length, i = -1; ++i < n; ) t[i] = r(e[i]);
            return t;
          })(e),
          n = t.length;
        return function() {
          var e = -1;
          for (; ++e < n; ) if (t[e].apply(this, arguments)) return !0;
          return !1;
        };
      }
      function a() {
        return !0;
      }
      e.exports = r;
    },
    function(e, t, n) {
      'use strict';
      var r = n(282);
      e.exports = function(e, t, n) {
        var i,
          o,
          a,
          l,
          s = t.charAt(0);
        if ('\n' !== s) return;
        if (n) return !0;
        (l = 1), (i = t.length), (o = s), (a = '');
        for (; l < i && ((s = t.charAt(l)), r(s)); )
          (a += s), '\n' === s && ((o += a), (a = '')), l++;
        e(o);
      };
    },
    function(e, t, n) {
      'use strict';
      var r = n(295),
        i = n(296);
      e.exports = function(e, t, n) {
        var r,
          a,
          l,
          s = -1,
          c = t.length,
          u = '',
          f = '',
          p = '',
          d = '';
        for (; ++s < c; )
          if (((r = t.charAt(s)), l))
            if (((l = !1), (u += p), (f += d), (p = ''), (d = ''), '\n' === r))
              (p = r), (d = r);
            else
              for (u += r, f += r; ++s < c; ) {
                if (!(r = t.charAt(s)) || '\n' === r) {
                  (d = r), (p = r);
                  break;
                }
                (u += r), (f += r);
              }
          else if (
            ' ' === r &&
            t.charAt(s + 1) === r &&
            t.charAt(s + 2) === r &&
            t.charAt(s + 3) === r
          )
            (p += o), (s += 3), (l = !0);
          else if ('\t' === r) (p += r), (l = !0);
          else {
            for (a = ''; '\t' === r || ' ' === r; )
              (a += r), (r = t.charAt(++s));
            if ('\n' !== r) break;
            (p += a + r), (d += r);
          }
        if (f) return !!n || e(u)({ type: 'code', lang: null, value: i(f) });
      };
      var o = r(' ', 4);
    },
    function(e, t, n) {
      'use strict';
      var r = n(296);
      e.exports = function(e, t, n) {
        var i,
          o,
          a,
          l,
          s,
          c,
          u,
          f,
          p,
          d,
          h,
          m = this.options,
          g = t.length + 1,
          v = 0,
          y = '';
        if (!m.gfm) return;
        for (; v < g && (' ' === (a = t.charAt(v)) || '\t' === a); )
          (y += a), v++;
        if (((d = v), '~' !== (a = t.charAt(v)) && '`' !== a)) return;
        v++, (o = a), (i = 1), (y += a);
        for (; v < g && (a = t.charAt(v)) === o; ) (y += a), i++, v++;
        if (i < 3) return;
        for (; v < g && (' ' === (a = t.charAt(v)) || '\t' === a); )
          (y += a), v++;
        (l = ''), (s = '');
        for (; v < g && '\n' !== (a = t.charAt(v)) && '~' !== a && '`' !== a; )
          ' ' === a || '\t' === a ? (s += a) : ((l += s + a), (s = '')), v++;
        if ((a = t.charAt(v)) && '\n' !== a) return;
        if (n) return !0;
        ((h = e.now()).column += y.length),
          (h.offset += y.length),
          (y += l),
          (l = this.decode.raw(this.unescape(l), h)),
          s && (y += s);
        (s = ''), (f = ''), (p = ''), (c = ''), (u = '');
        for (; v < g; )
          if (
            ((a = t.charAt(v)),
            (c += f),
            (u += p),
            (f = ''),
            (p = ''),
            '\n' === a)
          ) {
            for (
              c ? ((f += a), (p += a)) : (y += a), s = '', v++;
              v < g && ' ' === (a = t.charAt(v));

            )
              (s += a), v++;
            if (((f += s), (p += s.slice(d)), !(s.length >= 4))) {
              for (s = ''; v < g && (a = t.charAt(v)) === o; ) (s += a), v++;
              if (((f += s), (p += s), !(s.length < i))) {
                for (
                  s = '';
                  v < g && (' ' === (a = t.charAt(v)) || '\t' === a);

                )
                  (f += a), (p += a), v++;
                if (!a || '\n' === a) break;
              }
            }
          } else (c += a), (p += a), v++;
        return e((y += c + f))({ type: 'code', lang: l || null, value: r(u) });
      };
    },
    function(e, t, n) {
      'use strict';
      n(12);
      var r = n(284),
        i = n(297);
      e.exports = function(e, t, n) {
        var o,
          a,
          l,
          s,
          c,
          u,
          f,
          p,
          d,
          h = this.offset,
          m = this.blockTokenizers,
          g = this.interruptBlockquote,
          v = e.now(),
          y = v.line,
          b = t.length,
          w = [],
          I = [],
          A = [],
          C = 0;
        for (; C < b && (' ' === (a = t.charAt(C)) || '\t' === a); ) C++;
        if ('>' !== t.charAt(C)) return;
        if (n) return !0;
        C = 0;
        for (; C < b; ) {
          for (
            s = t.indexOf('\n', C), f = C, p = !1, -1 === s && (s = b);
            C < b && (' ' === (a = t.charAt(C)) || '\t' === a);

          )
            C++;
          if (
            ('>' === t.charAt(C)
              ? (C++, (p = !0), ' ' === t.charAt(C) && C++)
              : (C = f),
            (c = t.slice(C, s)),
            !p && !r(c))
          ) {
            C = f;
            break;
          }
          if (!p && ((l = t.slice(C)), i(g, m, this, [e, l, !0]))) break;
          (u = f === C ? c : t.slice(f, s)),
            A.push(C - f),
            w.push(u),
            I.push(c),
            (C = s + 1);
        }
        (C = -1), (b = A.length), (o = e(w.join('\n')));
        for (; ++C < b; ) (h[y] = (h[y] || 0) + A[C]), y++;
        return (
          (d = this.enterBlock()),
          (I = this.tokenizeBlock(I.join('\n'), v)),
          d(),
          o({ type: 'blockquote', children: I })
        );
      };
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e, t, n) {
        var r,
          i,
          o,
          a = this.options,
          l = t.length + 1,
          s = -1,
          c = e.now(),
          u = '',
          f = '';
        for (; ++s < l; ) {
          if (' ' !== (r = t.charAt(s)) && '\t' !== r) {
            s--;
            break;
          }
          u += r;
        }
        o = 0;
        for (; ++s <= l; ) {
          if ('#' !== (r = t.charAt(s))) {
            s--;
            break;
          }
          (u += r), o++;
        }
        if (o > 6) return;
        if (!o || (!a.pedantic && '#' === t.charAt(s + 1))) return;
        (l = t.length + 1), (i = '');
        for (; ++s < l; ) {
          if (' ' !== (r = t.charAt(s)) && '\t' !== r) {
            s--;
            break;
          }
          i += r;
        }
        if (!a.pedantic && 0 === i.length && r && '\n' !== r) return;
        if (n) return !0;
        (u += i), (i = ''), (f = '');
        for (; ++s < l && (r = t.charAt(s)) && '\n' !== r; )
          if (' ' === r || '\t' === r || '#' === r) {
            for (; ' ' === r || '\t' === r; ) (i += r), (r = t.charAt(++s));
            for (; '#' === r; ) (i += r), (r = t.charAt(++s));
            for (; ' ' === r || '\t' === r; ) (i += r), (r = t.charAt(++s));
            s--;
          } else (f += i + r), (i = '');
        return (
          (c.column += u.length),
          (c.offset += u.length),
          e((u += f + i))({
            type: 'heading',
            depth: o,
            children: this.tokenizeInline(f, c),
          })
        );
      };
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e, t, n) {
        var r,
          i,
          o,
          a,
          l = -1,
          s = t.length + 1,
          c = '';
        for (; ++l < s && ('\t' === (r = t.charAt(l)) || ' ' === r); ) c += r;
        if ('*' !== r && '-' !== r && '_' !== r) return;
        (i = r), (c += r), (o = 1), (a = '');
        for (; ++l < s; )
          if ((r = t.charAt(l)) === i) o++, (c += a + i), (a = '');
          else {
            if (' ' !== r)
              return o >= 3 && (!r || '\n' === r)
                ? ((c += a), !!n || e(c)({ type: 'thematicBreak' }))
                : void 0;
            a += r;
          }
      };
    },
    function(e, t, n) {
      'use strict';
      n(300), n(18), n(17), n(87), n(12);
      var r = n(284),
        i = n(295),
        o = n(288),
        a = n(306),
        l = n(365),
        s = n(297);
      e.exports = function(e, t, n) {
        var i,
          a,
          l,
          c,
          u,
          f,
          p,
          d,
          y,
          b,
          w,
          I,
          A,
          C,
          x,
          k,
          O,
          E,
          S,
          T,
          j,
          N,
          P,
          M,
          L = this.options.commonmark,
          _ = this.options.pedantic,
          D = this.blockTokenizers,
          H = this.interruptList,
          R = 0,
          z = t.length,
          W = null,
          Z = 0;
        for (; R < z; ) {
          if ('\t' === (c = t.charAt(R))) Z += 4 - (Z % 4);
          else {
            if (' ' !== c) break;
            Z++;
          }
          R++;
        }
        if (Z >= 4) return;
        if (((c = t.charAt(R)), (i = L ? g : m), !0 === h[c]))
          (u = c), (l = !1);
        else {
          for (l = !0, a = ''; R < z && ((c = t.charAt(R)), o(c)); )
            (a += c), R++;
          if (((c = t.charAt(R)), !a || !0 !== i[c])) return;
          (W = parseInt(a, 10)), (u = c);
        }
        if (' ' !== (c = t.charAt(++R)) && '\t' !== c) return;
        if (n) return !0;
        (R = 0), (C = []), (x = []), (k = []);
        for (; R < z; ) {
          for (
            f = t.indexOf('\n', R),
              p = R,
              d = !1,
              M = !1,
              -1 === f && (f = z),
              P = R + 4,
              Z = 0;
            R < z;

          ) {
            if ('\t' === (c = t.charAt(R))) Z += 4 - (Z % 4);
            else {
              if (' ' !== c) break;
              Z++;
            }
            R++;
          }
          if (
            (Z >= 4 && (M = !0),
            O && Z >= O.indent && (M = !0),
            (c = t.charAt(R)),
            (y = null),
            !M)
          ) {
            if (!0 === h[c]) (y = c), R++, Z++;
            else {
              for (a = ''; R < z && ((c = t.charAt(R)), o(c)); ) (a += c), R++;
              (c = t.charAt(R)),
                R++,
                a && !0 === i[c] && ((y = c), (Z += a.length + 1));
            }
            if (y)
              if ('\t' === (c = t.charAt(R))) (Z += 4 - (Z % 4)), R++;
              else if (' ' === c) {
                for (P = R + 4; R < P && ' ' === t.charAt(R); ) R++, Z++;
                R === P && ' ' === t.charAt(R) && ((R -= 3), (Z -= 3));
              } else '\n' !== c && '' !== c && (y = null);
          }
          if (y) {
            if (!_ && u !== y) break;
            d = !0;
          } else
            L || M || ' ' !== t.charAt(p)
              ? L && O && (M = Z >= O.indent || Z > 4)
              : (M = !0),
              (d = !1),
              (R = p);
          if (
            ((w = t.slice(p, f)),
            (b = p === R ? w : t.slice(R, f)),
            ('*' === y || '_' === y || '-' === y) &&
              D.thematicBreak.call(this, e, w, !0))
          )
            break;
          if (((I = A), (A = !r(b).length), M && O))
            (O.value = O.value.concat(k, w)), (x = x.concat(k, w)), (k = []);
          else if (d)
            0 !== k.length && (O.value.push(''), (O.trail = k.concat())),
              (O = { value: [w], indent: Z, trail: [] }),
              C.push(O),
              (x = x.concat(k, w)),
              (k = []);
          else if (A) {
            if (I) break;
            k.push(w);
          } else {
            if (I) break;
            if (s(H, D, this, [e, w, !0])) break;
            (O.value = O.value.concat(k, w)), (x = x.concat(k, w)), (k = []);
          }
          R = f + 1;
        }
        (j = e(x.join('\n')).reset({
          type: 'list',
          ordered: l,
          start: W,
          loose: null,
          children: [],
        })),
          (E = this.enterList()),
          (S = this.enterBlock()),
          (T = !1),
          (R = -1),
          (z = C.length);
        for (; ++R < z; )
          (O = C[R].value.join('\n')),
            (N = e.now()),
            (O = e(O)(v(this, O, N), j)).loose && (T = !0),
            (O = C[R].trail.join('\n')),
            R !== z - 1 && (O += '\n'),
            e(O);
        return E(), S(), (j.loose = T), j;
      };
      var c = /\n\n(?!\s*$)/,
        u = /^\[([ \t]|x|X)][ \t]/,
        f = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,
        p = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,
        d = /^( {1,4}|\t)?/gm,
        h = { '*': !0, '+': !0, '-': !0 },
        m = { '.': !0 },
        g = {};
      function v(e, t, n) {
        var r,
          i,
          o = e.offset,
          a = e.options.pedantic ? y : b,
          l = null;
        return (
          (t = a.apply(null, arguments)),
          e.options.gfm &&
            (r = t.match(u)) &&
            ((i = r[0].length),
            (l = 'x' === r[1].toLowerCase()),
            (o[n.line] += i),
            (t = t.slice(i))),
          {
            type: 'listItem',
            loose: c.test(t) || '\n' === t.charAt(t.length - 1),
            checked: l,
            children: e.tokenizeBlock(t, n),
          }
        );
      }
      function y(e, t, n) {
        var r = e.offset,
          i = n.line;
        return (t = t.replace(p, o)), (i = n.line), t.replace(d, o);
        function o(e) {
          return (r[i] = (r[i] || 0) + e.length), i++, '';
        }
      }
      function b(e, t, n) {
        var r,
          o,
          s,
          c,
          u,
          p,
          d,
          h = e.offset,
          m = n.line;
        for (
          c = (t = t.replace(f, function(e, t, n, a, l) {
            (o = t + n + a),
              (s = l),
              Number(n) < 10 && o.length % 2 == 1 && (n = ' ' + n);
            return (r = t + i(' ', n.length) + a) + s;
          })).split('\n'),
            (u = l(t, a(r).indent).split('\n'))[0] = s,
            h[m] = (h[m] || 0) + o.length,
            m++,
            p = 0,
            d = c.length;
          ++p < d;

        )
          (h[m] = (h[m] || 0) + c[p].length - u[p].length), m++;
        return u.join('\n');
      }
      (g['.'] = !0), (g[')'] = !0);
    },
    function(e, t, n) {
      'use strict';
      n(18);
      var r = n(284),
        i = n(295),
        o = n(306);
      e.exports = function(e, t) {
        var n,
          a,
          l,
          s,
          c = e.split('\n'),
          u = c.length + 1,
          f = 1 / 0,
          p = [];
        c.unshift(i(' ', t) + '!');
        for (; u--; )
          if (((a = o(c[u])), (p[u] = a.stops), 0 !== r(c[u]).length)) {
            if (!a.indent) {
              f = 1 / 0;
              break;
            }
            a.indent > 0 && a.indent < f && (f = a.indent);
          }
        if (f !== 1 / 0)
          for (u = c.length; u--; ) {
            for (l = p[u], n = f; n && !(n in l); ) n--;
            (s = 0 !== r(c[u]).length && f && n !== f ? '\t' : ''),
              (c[u] = s + c[u].slice(n in l ? l[n] + 1 : 0));
          }
        return c.shift(), c.join('\n');
      };
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e, t, n) {
        var i,
          o,
          a,
          l,
          s,
          c = e.now(),
          u = t.length,
          f = -1,
          p = '';
        for (; ++f < u; ) {
          if (' ' !== (a = t.charAt(f)) || f >= 3) {
            f--;
            break;
          }
          p += a;
        }
        (i = ''), (o = '');
        for (; ++f < u; ) {
          if ('\n' === (a = t.charAt(f))) {
            f--;
            break;
          }
          ' ' === a || '\t' === a ? (o += a) : ((i += o + a), (o = ''));
        }
        if (
          ((c.column += p.length),
          (c.offset += p.length),
          (p += i + o),
          (a = t.charAt(++f)),
          (l = t.charAt(++f)),
          '\n' !== a || !r[l])
        )
          return;
        (p += a), (o = l), (s = r[l]);
        for (; ++f < u; ) {
          if ((a = t.charAt(f)) !== l) {
            if ('\n' !== a) return;
            f--;
            break;
          }
          o += a;
        }
        if (n) return !0;
        return e(p + o)({
          type: 'heading',
          depth: s,
          children: this.tokenizeInline(i, c),
        });
      };
      var r = {};
      (r['='] = 1), (r['-'] = 2);
    },
    function(e, t, n) {
      'use strict';
      n(12), n(121);
      var r = n(307).openCloseTag;
      e.exports = function(e, t, n) {
        var i,
          o,
          a,
          l,
          s,
          c,
          u,
          f = this.options.blocks,
          p = t.length,
          d = 0,
          h = [
            [
              /^<(script|pre|style)(?=(\s|>|$))/i,
              /<\/(script|pre|style)>/i,
              !0,
            ],
            [/^<!--/, /-->/, !0],
            [/^<\?/, /\?>/, !0],
            [/^<![A-Za-z]/, />/, !0],
            [/^<!\[CDATA\[/, /\]\]>/, !0],
            [
              new RegExp('^</?(' + f.join('|') + ')(?=(\\s|/?>|$))', 'i'),
              /^$/,
              !0,
            ],
            [new RegExp(r.source + '\\s*$'), /^$/, !1],
          ];
        for (; d < p && ('\t' === (l = t.charAt(d)) || ' ' === l); ) d++;
        if ('<' !== t.charAt(d)) return;
        (i = -1 === (i = t.indexOf('\n', d + 1)) ? p : i),
          (o = t.slice(d, i)),
          (a = -1),
          (s = h.length);
        for (; ++a < s; )
          if (h[a][0].test(o)) {
            c = h[a];
            break;
          }
        if (!c) return;
        if (n) return c[2];
        if (((d = i), !c[1].test(o)))
          for (; d < p; ) {
            if (
              ((i = -1 === (i = t.indexOf('\n', d + 1)) ? p : i),
              (o = t.slice(d + 1, i)),
              c[1].test(o))
            ) {
              o && (d = i);
              break;
            }
            d = i;
          }
        return (u = t.slice(0, d)), e(u)({ type: 'html', value: u });
      };
    },
    function(e, t, n) {
      'use strict';
      n(17);
      var r = n(282),
        i = n(298);
      (e.exports = a), (a.notInList = !0), (a.notInBlock = !0);
      var o = /^( {4}|\t)?/gm;
      function a(e, t, n) {
        var a,
          l,
          s,
          c,
          u,
          f,
          p,
          d,
          h,
          m,
          g,
          v,
          y = this.offset;
        if (this.options.footnotes) {
          for (
            a = 0, l = t.length, s = '', c = e.now(), u = c.line;
            a < l && ((h = t.charAt(a)), r(h));

          )
            (s += h), a++;
          if ('[' === t.charAt(a) && '^' === t.charAt(a + 1)) {
            for (
              a = (s += '[^').length, p = '';
              a < l && ']' !== (h = t.charAt(a));

            )
              '\\' === h && ((p += h), a++, (h = t.charAt(a))), (p += h), a++;
            if (p && ']' === t.charAt(a) && ':' === t.charAt(a + 1)) {
              if (n) return !0;
              for (
                m = i(p), a = (s += p + ']:').length;
                a < l && ('\t' === (h = t.charAt(a)) || ' ' === h);

              )
                (s += h), a++;
              for (
                c.column += s.length,
                  c.offset += s.length,
                  p = '',
                  f = '',
                  d = '';
                a < l;

              ) {
                if ('\n' === (h = t.charAt(a))) {
                  for (d = h, a++; a < l && '\n' === (h = t.charAt(a)); )
                    (d += h), a++;
                  for (p += d, d = ''; a < l && ' ' === (h = t.charAt(a)); )
                    (d += h), a++;
                  if (0 === d.length) break;
                  p += d;
                }
                p && ((f += p), (p = '')), (f += h), a++;
              }
              return (
                (s += f),
                (f = f.replace(o, function(e) {
                  return (y[u] = (y[u] || 0) + e.length), u++, '';
                })),
                (g = e(s)),
                (v = this.enterBlock()),
                (f = this.tokenizeBlock(f, c)),
                v(),
                g({ type: 'footnoteDefinition', identifier: m, children: f })
              );
            }
          }
        }
      }
    },
    function(e, t, n) {
      'use strict';
      n(17),
        (e.exports = function(e) {
          return String(e).replace(/\s+/g, ' ');
        });
    },
    function(e, t, n) {
      'use strict';
      var r = n(282),
        i = n(298);
      (e.exports = o), (o.notInList = !0), (o.notInBlock = !0);
      function o(e, t, n) {
        for (
          var r,
            o,
            s,
            c,
            u,
            f,
            p,
            d,
            h = this.options.commonmark,
            m = 0,
            g = t.length,
            v = '';
          m < g && (' ' === (c = t.charAt(m)) || '\t' === c);

        )
          (v += c), m++;
        if ('[' === (c = t.charAt(m))) {
          for (m++, v += c, s = ''; m < g && ']' !== (c = t.charAt(m)); )
            '\\' === c && ((s += c), m++, (c = t.charAt(m))), (s += c), m++;
          if (s && ']' === t.charAt(m) && ':' === t.charAt(m + 1)) {
            for (
              f = s, m = (v += s + ']:').length, s = '';
              m < g && ('\t' === (c = t.charAt(m)) || ' ' === c || '\n' === c);

            )
              (v += c), m++;
            if (((s = ''), (r = v), '<' === (c = t.charAt(m)))) {
              for (m++; m < g && a((c = t.charAt(m))); ) (s += c), m++;
              if ((c = t.charAt(m)) === a.delimiter) (v += '<' + s + c), m++;
              else {
                if (h) return;
                (m -= s.length + 1), (s = '');
              }
            }
            if (!s) {
              for (; m < g && l((c = t.charAt(m))); ) (s += c), m++;
              v += s;
            }
            if (s) {
              for (
                p = s, s = '';
                m < g &&
                ('\t' === (c = t.charAt(m)) || ' ' === c || '\n' === c);

              )
                (s += c), m++;
              if (
                ((u = null),
                '"' === (c = t.charAt(m))
                  ? (u = '"')
                  : "'" === c
                  ? (u = "'")
                  : '(' === c && (u = ')'),
                u)
              ) {
                if (!s) return;
                for (
                  m = (v += s + c).length, s = '';
                  m < g && (c = t.charAt(m)) !== u;

                ) {
                  if ('\n' === c) {
                    if ((m++, '\n' === (c = t.charAt(m)) || c === u)) return;
                    s += '\n';
                  }
                  (s += c), m++;
                }
                if ((c = t.charAt(m)) !== u) return;
                (o = v), (v += s + c), m++, (d = s), (s = '');
              } else (s = ''), (m = v.length);
              for (; m < g && ('\t' === (c = t.charAt(m)) || ' ' === c); )
                (v += c), m++;
              return (c = t.charAt(m)) && '\n' !== c
                ? void 0
                : !!n ||
                    ((r = e(r).test().end),
                    (p = this.decode.raw(this.unescape(p), r, {
                      nonTerminated: !1,
                    })),
                    d &&
                      ((o = e(o).test().end),
                      (d = this.decode.raw(this.unescape(d), o))),
                    e(v)({
                      type: 'definition',
                      identifier: i(f),
                      title: d || null,
                      url: p,
                    }));
            }
          }
        }
      }
      function a(e) {
        return '>' !== e && '[' !== e && ']' !== e;
      }
      function l(e) {
        return '[' !== e && ']' !== e && !r(e);
      }
      a.delimiter = '>';
    },
    function(e, t, n) {
      'use strict';
      n(12);
      var r = n(282);
      e.exports = function(e, t, n) {
        var i,
          o,
          a,
          l,
          s,
          c,
          u,
          f,
          p,
          d,
          h,
          m,
          g,
          v,
          y,
          b,
          w,
          I,
          A,
          C,
          x,
          k,
          O,
          E;
        if (!this.options.gfm) return;
        (i = 0), (I = 0), (c = t.length + 1), (u = []);
        for (; i < c; ) {
          if (
            ((k = t.indexOf('\n', i)),
            (O = t.indexOf('|', i + 1)),
            -1 === k && (k = t.length),
            -1 === O || O > k)
          ) {
            if (I < 2) return;
            break;
          }
          u.push(t.slice(i, k)), I++, (i = k + 1);
        }
        (l = u.join('\n')),
          (o = u.splice(1, 1)[0] || []),
          (i = 0),
          (c = o.length),
          I--,
          (a = !1),
          (h = []);
        for (; i < c; ) {
          if ('|' === (p = o.charAt(i))) {
            if (((d = null), !1 === a)) {
              if (!1 === E) return;
            } else h.push(a), (a = !1);
            E = !1;
          } else if ('-' === p) (d = !0), (a = a || null);
          else if (':' === p)
            a = 'left' === a ? 'center' : d && null === a ? 'right' : 'left';
          else if (!r(p)) return;
          i++;
        }
        !1 !== a && h.push(a);
        if (h.length < 1) return;
        if (n) return !0;
        (w = -1),
          (C = []),
          (x = e(l).reset({ type: 'table', align: h, children: C }));
        for (; ++w < I; ) {
          for (
            A = u[w],
              s = { type: 'tableRow', children: [] },
              w && e('\n'),
              e(A).reset(s, x),
              c = A.length + 1,
              i = 0,
              f = '',
              m = '',
              g = !0,
              v = null,
              y = null;
            i < c;

          )
            if ('\t' !== (p = A.charAt(i)) && ' ' !== p) {
              if ('' === p || '|' === p)
                if (g) e(p);
                else {
                  if (p && y) {
                    (f += p), i++;
                    continue;
                  }
                  (!m && !p) ||
                    g ||
                    ((l = m),
                    f.length > 1 &&
                      (p
                        ? ((l += f.slice(0, f.length - 1)),
                          (f = f.charAt(f.length - 1)))
                        : ((l += f), (f = ''))),
                    (b = e.now()),
                    e(l)(
                      {
                        type: 'tableCell',
                        children: this.tokenizeInline(m, b),
                      },
                      s,
                    )),
                    e(f + p),
                    (f = ''),
                    (m = '');
                }
              else if (
                (f && ((m += f), (f = '')),
                (m += p),
                '\\' === p && i !== c - 2 && ((m += A.charAt(i + 1)), i++),
                '`' === p)
              ) {
                for (v = 1; A.charAt(i + 1) === p; ) (m += p), i++, v++;
                y ? v >= y && (y = 0) : (y = v);
              }
              (g = !1), i++;
            } else m ? (f += p) : e(p), i++;
          w || e('\n' + o);
        }
        return x;
      };
    },
    function(e, t, n) {
      'use strict';
      n(12);
      var r = n(284),
        i = n(288),
        o = n(296),
        a = n(297);
      e.exports = function(e, t, n) {
        var l,
          s,
          c,
          u,
          f,
          p = this.options,
          d = p.commonmark,
          h = p.gfm,
          m = this.blockTokenizers,
          g = this.interruptParagraph,
          v = t.indexOf('\n'),
          y = t.length;
        for (; v < y; ) {
          if (-1 === v) {
            v = y;
            break;
          }
          if ('\n' === t.charAt(v + 1)) break;
          if (d) {
            for (u = 0, l = v + 1; l < y; ) {
              if ('\t' === (c = t.charAt(l))) {
                u = 4;
                break;
              }
              if (' ' !== c) break;
              u++, l++;
            }
            if (u >= 4) {
              v = t.indexOf('\n', v + 1);
              continue;
            }
          }
          if (((s = t.slice(v + 1)), a(g, m, this, [e, s, !0]))) break;
          if (
            m.list.call(this, e, s, !0) &&
            (this.inList || d || (h && !i(r.left(s).charAt(0))))
          )
            break;
          if (
            ((l = v),
            -1 !== (v = t.indexOf('\n', v + 1)) && '' === r(t.slice(l, v)))
          ) {
            v = l;
            break;
          }
        }
        if (((s = t.slice(0, v)), '' === r(s))) return e(s), null;
        if (n) return !0;
        return (
          (f = e.now()),
          (s = o(s)),
          e(s)({ type: 'paragraph', children: this.tokenizeInline(s, f) })
        );
      };
    },
    function(e, t, n) {
      'use strict';
      n(12);
      var r = n(374);
      function i(e, t, n) {
        var r, i;
        if (
          '\\' === t.charAt(0) &&
          ((r = t.charAt(1)), -1 !== this.escape.indexOf(r))
        )
          return (
            !!n ||
            ((i = '\n' === r ? { type: 'break' } : { type: 'text', value: r }),
            e('\\' + r)(i))
          );
      }
      (e.exports = i), (i.locator = r);
    },
    function(e, t, n) {
      'use strict';
      n(12),
        (e.exports = function(e, t) {
          return e.indexOf('\\', t);
        });
    },
    function(e, t, n) {
      'use strict';
      var r = n(282),
        i = n(294),
        o = n(308);
      (e.exports = l), (l.locator = o), (l.notInLink = !0);
      var a = 'mailto:'.length;
      function l(e, t, n) {
        var o, l, s, c, u, f, p, d, h, m, g;
        if ('<' === t.charAt(0)) {
          for (
            this,
              o = '',
              l = t.length,
              s = 0,
              c = '',
              f = !1,
              p = '',
              s++,
              o = '<';
            s < l &&
            ((u = t.charAt(s)),
            !(
              r(u) ||
              '>' === u ||
              '@' === u ||
              (':' === u && '/' === t.charAt(s + 1))
            ));

          )
            (c += u), s++;
          if (c) {
            if (((p += c), (c = ''), (p += u = t.charAt(s)), s++, '@' === u))
              f = !0;
            else {
              if (':' !== u || '/' !== t.charAt(s + 1)) return;
              (p += '/'), s++;
            }
            for (; s < l && ((u = t.charAt(s)), !r(u) && '>' !== u); )
              (c += u), s++;
            if (((u = t.charAt(s)), c && '>' === u))
              return (
                !!n ||
                ((h = p += c),
                (o += p + u),
                (d = e.now()).column++,
                d.offset++,
                f &&
                  ('mailto:' === p.slice(0, a).toLowerCase()
                    ? ((h = h.substr(a)), (d.column += a), (d.offset += a))
                    : (p = 'mailto:' + p)),
                (m = this.inlineTokenizers),
                (this.inlineTokenizers = { text: m.text }),
                (g = this.enterLink()),
                (h = this.tokenizeInline(h, d)),
                (this.inlineTokenizers = m),
                g(),
                e(o)({
                  type: 'link',
                  title: null,
                  url: i(p, { nonTerminated: !1 }),
                  children: h,
                }))
              );
          }
        }
      }
    },
    function(e, t, n) {
      'use strict';
      n(12);
      var r = n(294),
        i = n(282),
        o = n(377);
      (e.exports = s), (s.locator = o), (s.notInLink = !0);
      var a = ['http://', 'https://', 'mailto:'],
        l = a.length;
      function s(e, t, n) {
        var o, s, c, u, f, p, d, h, m, g, v, y;
        if (this.options.gfm) {
          for (o = '', u = -1, h = l; ++u < h; )
            if (((p = a[u]), (d = t.slice(0, p.length)).toLowerCase() === p)) {
              o = d;
              break;
            }
          if (o) {
            for (
              u = o.length, h = t.length, m = '', g = 0;
              u < h &&
              ((c = t.charAt(u)), !i(c) && '<' !== c) &&
              (('.' !== c &&
                ',' !== c &&
                ':' !== c &&
                ';' !== c &&
                '"' !== c &&
                "'" !== c &&
                ')' !== c &&
                ']' !== c) ||
                ((v = t.charAt(u + 1)) && !i(v))) &&
              (('(' !== c && '[' !== c) || g++,
              (')' !== c && ']' !== c) || !(--g < 0));

            )
              (m += c), u++;
            if (m) {
              if (((s = o += m), 'mailto:' === p)) {
                if (-1 === (f = m.indexOf('@')) || f === h - 1) return;
                s = s.substr('mailto:'.length);
              }
              return (
                !!n ||
                ((y = this.enterLink()),
                (s = this.tokenizeInline(s, e.now())),
                y(),
                e(o)({
                  type: 'link',
                  title: null,
                  url: r(o, { nonTerminated: !1 }),
                  children: s,
                }))
              );
            }
          }
        }
      }
    },
    function(e, t, n) {
      'use strict';
      n(12),
        (e.exports = function(e, t) {
          var n,
            i = r.length,
            o = -1,
            a = -1;
          if (!this.options.gfm) return -1;
          for (; ++o < i; )
            -1 !== (n = e.indexOf(r[o], t)) && (n < a || -1 === a) && (a = n);
          return a;
        });
      var r = ['https://', 'http://', 'mailto:'];
    },
    function(e, t, n) {
      'use strict';
      n(87);
      var r = n(304),
        i = n(308),
        o = n(307).tag;
      (e.exports = s), (s.locator = i);
      var a = /^<a /i,
        l = /^<\/a>/i;
      function s(e, t, n) {
        var i,
          s,
          c = t.length;
        if (
          !('<' !== t.charAt(0) || c < 3) &&
          ((i = t.charAt(1)),
          (r(i) || '?' === i || '!' === i || '/' === i) && (s = t.match(o)))
        )
          return (
            !!n ||
            ((s = s[0]),
            !this.inLink && a.test(s)
              ? (this.inLink = !0)
              : this.inLink && l.test(s) && (this.inLink = !1),
            e(s)({ type: 'html', value: s }))
          );
      }
    },
    function(e, t, n) {
      'use strict';
      var r = n(282),
        i = n(309);
      (e.exports = s), (s.locator = i);
      var o = {}.hasOwnProperty,
        a = { '"': '"', "'": "'" },
        l = {};
      function s(e, t, n) {
        var i,
          s,
          c,
          u,
          f,
          p,
          d,
          h,
          m,
          g,
          v,
          y,
          b,
          w,
          I,
          A,
          C,
          x,
          k,
          O = '',
          E = 0,
          S = t.charAt(0),
          T = this.options.pedantic,
          j = this.options.commonmark,
          N = this.options.gfm;
        if (
          ('!' === S && ((m = !0), (O = S), (S = t.charAt(++E))),
          '[' === S && (m || !this.inLink))
        ) {
          for (
            O += S,
              I = '',
              E++,
              y = t.length,
              w = 0,
              (C = e.now()).column += E,
              C.offset += E;
            E < y;

          ) {
            if (((p = S = t.charAt(E)), '`' === S)) {
              for (s = 1; '`' === t.charAt(E + 1); ) (p += S), E++, s++;
              c ? s >= c && (c = 0) : (c = s);
            } else if ('\\' === S) E++, (p += t.charAt(E));
            else if ((c && !N) || '[' !== S) {
              if ((!c || N) && ']' === S) {
                if (!w) {
                  if (!T)
                    for (; E < y && ((S = t.charAt(E + 1)), r(S)); )
                      (p += S), E++;
                  if ('(' !== t.charAt(E + 1)) return;
                  (p += '('), (i = !0), E++;
                  break;
                }
                w--;
              }
            } else w++;
            (I += p), (p = ''), E++;
          }
          if (i) {
            for (g = I, O += I + p, E++; E < y && ((S = t.charAt(E)), r(S)); )
              (O += S), E++;
            if (
              ((S = t.charAt(E)), (h = j ? l : a), (I = ''), (u = O), '<' === S)
            ) {
              for (E++, u += '<'; E < y && '>' !== (S = t.charAt(E)); ) {
                if (j && '\n' === S) return;
                (I += S), E++;
              }
              if ('>' !== t.charAt(E)) return;
              (O += '<' + I + '>'), (A = I), E++;
            } else {
              for (
                S = null, p = '';
                E < y && ((S = t.charAt(E)), !p || !o.call(h, S));

              ) {
                if (r(S)) {
                  if (!T) break;
                  p += S;
                } else {
                  if ('(' === S) w++;
                  else if (')' === S) {
                    if (0 === w) break;
                    w--;
                  }
                  (I += p),
                    (p = ''),
                    '\\' === S && ((I += '\\'), (S = t.charAt(++E))),
                    (I += S);
                }
                E++;
              }
              (A = I), (E = (O += I).length);
            }
            for (I = ''; E < y && ((S = t.charAt(E)), r(S)); ) (I += S), E++;
            if (((S = t.charAt(E)), (O += I), I && o.call(h, S)))
              if ((E++, (O += S), (I = ''), (v = h[S]), (f = O), j)) {
                for (; E < y && (S = t.charAt(E)) !== v; )
                  '\\' === S && ((I += '\\'), (S = t.charAt(++E))),
                    E++,
                    (I += S);
                if ((S = t.charAt(E)) !== v) return;
                for (
                  b = I, O += I + S, E++;
                  E < y && ((S = t.charAt(E)), r(S));

                )
                  (O += S), E++;
              } else
                for (p = ''; E < y; ) {
                  if ((S = t.charAt(E)) === v)
                    d && ((I += v + p), (p = '')), (d = !0);
                  else if (d) {
                    if (')' === S) {
                      (O += I + v + p), (b = I);
                      break;
                    }
                    r(S) ? (p += S) : ((I += v + p + S), (p = ''), (d = !1));
                  } else I += S;
                  E++;
                }
            if (')' === t.charAt(E))
              return (
                !!n ||
                ((O += ')'),
                (A = this.decode.raw(this.unescape(A), e(u).test().end, {
                  nonTerminated: !1,
                })),
                b &&
                  ((f = e(f).test().end),
                  (b = this.decode.raw(this.unescape(b), f))),
                (k = { type: m ? 'image' : 'link', title: b || null, url: A }),
                m
                  ? (k.alt = this.decode.raw(this.unescape(g), C) || null)
                  : ((x = this.enterLink()),
                    (k.children = this.tokenizeInline(g, C)),
                    x()),
                e(O)(k))
              );
          }
        }
      }
      (l['"'] = '"'), (l["'"] = "'"), (l['('] = ')');
    },
    function(e, t, n) {
      'use strict';
      n(12);
      var r = n(282),
        i = n(309),
        o = n(298);
      (e.exports = a), (a.locator = i);
      function a(e, t, n) {
        var i,
          a,
          l,
          s,
          c,
          u,
          f,
          p,
          d = t.charAt(0),
          h = 0,
          m = t.length,
          g = '',
          v = '',
          y = 'link',
          b = 'shortcut';
        if (
          ('!' === d && ((y = 'image'), (v = d), (d = t.charAt(++h))),
          '[' === d)
        ) {
          if (
            (h++,
            (v += d),
            (u = ''),
            this.options.footnotes && '^' === t.charAt(h))
          ) {
            if ('image' === y) return;
            (v += '^'), h++, (y = 'footnote');
          }
          for (p = 0; h < m; ) {
            if ('[' === (d = t.charAt(h))) (f = !0), p++;
            else if (']' === d) {
              if (!p) break;
              p--;
            }
            '\\' === d && ((u += '\\'), (d = t.charAt(++h))), (u += d), h++;
          }
          if (((g = u), (i = u), ']' === (d = t.charAt(h)))) {
            for (h++, g += d, u = ''; h < m && ((d = t.charAt(h)), r(d)); )
              (u += d), h++;
            if (((d = t.charAt(h)), 'footnote' !== y && '[' === d)) {
              for (
                a = '', u += d, h++;
                h < m && '[' !== (d = t.charAt(h)) && ']' !== d;

              )
                '\\' === d && ((a += '\\'), (d = t.charAt(++h))), (a += d), h++;
              ']' === (d = t.charAt(h))
                ? ((b = a ? 'full' : 'collapsed'), (u += a + d), h++)
                : (a = ''),
                (g += u),
                (u = '');
            } else {
              if (!i) return;
              a = i;
            }
            if ('full' === b || !f)
              return (
                (g = v + g),
                'link' === y && this.inLink
                  ? null
                  : !!n ||
                    ('footnote' === y && -1 !== i.indexOf(' ')
                      ? e(g)({
                          type: 'footnote',
                          children: this.tokenizeInline(i, e.now()),
                        })
                      : (((l = e.now()).column += v.length),
                        (l.offset += v.length),
                        (s = {
                          type: y + 'Reference',
                          identifier: o((a = 'full' === b ? a : i)),
                        }),
                        ('link' !== y && 'image' !== y) ||
                          (s.referenceType = b),
                        'link' === y
                          ? ((c = this.enterLink()),
                            (s.children = this.tokenizeInline(i, l)),
                            c())
                          : 'image' === y &&
                            (s.alt =
                              this.decode.raw(this.unescape(i), l) || null),
                        e(g)(s)))
              );
          }
        }
      }
    },
    function(e, t, n) {
      'use strict';
      var r = n(284),
        i = n(282),
        o = n(382);
      (e.exports = a), (a.locator = o);
      function a(e, t, n) {
        var o,
          a,
          l,
          s,
          c,
          u,
          f,
          p = 0,
          d = t.charAt(p);
        if (
          !(
            ('*' !== d && '_' !== d) ||
            t.charAt(++p) !== d ||
            ((a = this.options.pedantic),
            (c = (l = d) + l),
            (u = t.length),
            p++,
            (s = ''),
            (d = ''),
            a && i(t.charAt(p)))
          )
        )
          for (; p < u; ) {
            if (
              ((f = d),
              !(
                (d = t.charAt(p)) !== l ||
                t.charAt(p + 1) !== l ||
                (a && i(f))
              ) && (d = t.charAt(p + 2)) !== l)
            ) {
              if (!r(s)) return;
              return (
                !!n ||
                (((o = e.now()).column += 2),
                (o.offset += 2),
                e(c + s + c)({
                  type: 'strong',
                  children: this.tokenizeInline(s, o),
                }))
              );
            }
            a || '\\' !== d || ((s += d), (d = t.charAt(++p))), (s += d), p++;
          }
      }
    },
    function(e, t, n) {
      'use strict';
      n(12),
        (e.exports = function(e, t) {
          var n = e.indexOf('**', t),
            r = e.indexOf('__', t);
          if (-1 === r) return n;
          if (-1 === n) return r;
          return r < n ? r : n;
        });
    },
    function(e, t, n) {
      'use strict';
      var r = n(284),
        i = n(384),
        o = n(282),
        a = n(385);
      (e.exports = l), (l.locator = a);
      function l(e, t, n) {
        var a,
          l,
          s,
          c,
          u,
          f,
          p,
          d = 0,
          h = t.charAt(d);
        if (
          !(
            ('*' !== h && '_' !== h) ||
            ((l = this.options.pedantic),
            (u = h),
            (s = h),
            (f = t.length),
            d++,
            (c = ''),
            (h = ''),
            l && o(t.charAt(d)))
          )
        )
          for (; d < f; ) {
            if (((p = h), !((h = t.charAt(d)) !== s || (l && o(p))))) {
              if ((h = t.charAt(++d)) !== s) {
                if (!r(c) || p === s) return;
                if (!l && '_' === s && i(h)) {
                  c += s;
                  continue;
                }
                return (
                  !!n ||
                  ((a = e.now()).column++,
                  a.offset++,
                  e(u + c + s)({
                    type: 'emphasis',
                    children: this.tokenizeInline(c, a),
                  }))
                );
              }
              c += s;
            }
            l || '\\' !== h || ((c += h), (h = t.charAt(++d))), (c += h), d++;
          }
      }
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        return i.test('number' == typeof e ? r(e) : e.charAt(0));
      };
      var r = String.fromCharCode,
        i = /\w/;
    },
    function(e, t, n) {
      'use strict';
      n(12),
        (e.exports = function(e, t) {
          var n = e.indexOf('*', t),
            r = e.indexOf('_', t);
          if (-1 === r) return n;
          if (-1 === n) return r;
          return r < n ? r : n;
        });
    },
    function(e, t, n) {
      'use strict';
      var r = n(282),
        i = n(387);
      (e.exports = o), (o.locator = i);
      function o(e, t, n) {
        var i,
          o,
          a,
          l = '',
          s = '',
          c = '',
          u = '';
        if (
          this.options.gfm &&
          '~' === t.charAt(0) &&
          '~' === t.charAt(1) &&
          !r(t.charAt(2))
        )
          for (
            i = 1, o = t.length, (a = e.now()).column += 2, a.offset += 2;
            ++i < o;

          ) {
            if (!('~' !== (l = t.charAt(i)) || '~' !== s || (c && r(c))))
              return (
                !!n ||
                e('~~' + u + '~~')({
                  type: 'delete',
                  children: this.tokenizeInline(u, a),
                })
              );
            (u += s), (c = s), (s = l);
          }
      }
    },
    function(e, t, n) {
      'use strict';
      n(12),
        (e.exports = function(e, t) {
          return e.indexOf('~~', t);
        });
    },
    function(e, t, n) {
      'use strict';
      var r = n(282),
        i = n(389);
      (e.exports = o), (o.locator = i);
      function o(e, t, n) {
        for (
          var i, o, a, l, s, c, u, f, p = t.length, d = 0, h = '', m = '';
          d < p && '`' === t.charAt(d);

        )
          (h += '`'), d++;
        if (h) {
          for (s = h, l = d, h = '', f = t.charAt(d), a = 0; d < p; ) {
            if (
              ((c = f),
              (f = t.charAt(d + 1)),
              '`' === c ? (a++, (m += c)) : ((a = 0), (h += c)),
              a && '`' !== f)
            ) {
              if (a === l) {
                (s += h + m), (u = !0);
                break;
              }
              (h += m), (m = '');
            }
            d++;
          }
          if (!u) {
            if (l % 2 != 0) return;
            h = '';
          }
          if (n) return !0;
          for (i = '', o = '', p = h.length, d = -1; ++d < p; )
            (c = h.charAt(d)),
              r(c) ? (o += c) : (o && (i && (i += o), (o = '')), (i += c));
          return e(s)({ type: 'inlineCode', value: i });
        }
      }
    },
    function(e, t, n) {
      'use strict';
      n(12),
        (e.exports = function(e, t) {
          return e.indexOf('`', t);
        });
    },
    function(e, t, n) {
      'use strict';
      var r = n(391);
      (e.exports = i), (i.locator = r);
      function i(e, t, n) {
        for (var r, i = t.length, o = -1, a = ''; ++o < i; ) {
          if ('\n' === (r = t.charAt(o))) {
            if (o < 2) return;
            return !!n || e((a += r))({ type: 'break' });
          }
          if (' ' !== r) return;
          a += r;
        }
      }
    },
    function(e, t, n) {
      'use strict';
      n(12),
        (e.exports = function(e, t) {
          var n = e.indexOf('\n', t);
          for (; n > t && ' ' === e.charAt(n - 1); ) n--;
          return n;
        });
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e, t, n) {
        var r, i, o, a, l, s, c, u, f, p;
        if (n) return !0;
        (r = this.inlineMethods),
          (a = r.length),
          (i = this.inlineTokenizers),
          (o = -1),
          (f = t.length);
        for (; ++o < a; )
          'text' !== (u = r[o]) &&
            i[u] &&
            ((c = i[u].locator) || e.file.fail('Missing locator: `' + u + '`'),
            -1 !== (s = c.call(this, t, 1)) && s < f && (f = s));
        (l = t.slice(0, f)),
          (p = e.now()),
          this.decode(l, p, function(t, n, r) {
            e(r || t)({ type: 'text', value: t });
          });
      };
    },
    function(e, t, n) {
      var r = n(394);
      e.exports = function() {
        return function(e) {
          return (
            r(e, 'list', function(e, t) {
              var n,
                r,
                i = 0;
              for (n = 0, r = t.length; n < r; n++)
                'list' === t[n].type && (i += 1);
              for (n = 0, r = e.children.length; n < r; n++) {
                var o = e.children[n];
                (o.index = n), (o.ordered = e.ordered);
              }
              e.depth = i;
            }),
            e
          );
        };
      };
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e, t, n) {
        var r = [];
        'function' == typeof t && ((n = t), (t = null));
        function i(e) {
          var o;
          return (
            (t && e.type !== t) || (o = n(e, r.concat())),
            e.children && !1 !== o
              ? (function(e, t) {
                  var n,
                    o = e.length,
                    a = -1;
                  r.push(t);
                  for (; ++a < o; ) if ((n = e[a]) && !1 === i(n)) return !1;
                  return r.pop(), !0;
                })(e.children, e)
              : o
          );
        }
        i(e);
      };
    },
    function(e, t, n) {
      'use strict';
      n(12), n(87);
      var r = n(289),
        i = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i,
        o = /^<(\/?)([a-z]+)\s*>$/;
      e.exports = function(e) {
        var t, n;
        return (
          r(
            e,
            'html',
            function(e, r, a) {
              n !== a && ((t = []), (n = a));
              var l = (function(e) {
                var t = e.value.match(i);
                return !!t && t[1];
              })(e);
              if (l)
                return (
                  a.children.splice(r, 1, {
                    type: 'virtualHtml',
                    tag: l,
                    position: e.position,
                  }),
                  !0
                );
              var s = (function(e, t) {
                var n = e.value.match(o);
                return !!n && { tag: n[2], opening: !n[1], node: e };
              })(e);
              if (!s) return !0;
              var c = (function(e, t) {
                var n = e.length;
                for (; n--; ) if (e[n].tag === t) return e.splice(n, 1)[0];
                return !1;
              })(t, s.tag);
              return (
                c
                  ? a.children.splice(
                      r,
                      0,
                      (function(e, t, n) {
                        var r = n.children.indexOf(e.node),
                          i = n.children.indexOf(t.node),
                          o = n.children.splice(r, i - r + 1).slice(1, -1);
                        return {
                          type: 'virtualHtml',
                          children: o,
                          tag: e.tag,
                          position: {
                            start: e.node.position.start,
                            end: t.node.position.end,
                            indent: [],
                          },
                        };
                      })(s, c, a),
                    )
                  : s.opening || t.push(s),
                !0
              );
            },
            !0,
          ),
          e
        );
      };
    },
    function(e, t, n) {
      'use strict';
      n(22);
      var r = n(289);
      function i(e, t, n, r) {
        if ('remove' === r) n.children.splice(t, 1);
        else if ('unwrap' === r) {
          var i = [t, 1];
          e.children && (i = i.concat(e.children)),
            Array.prototype.splice.apply(n.children, i);
        }
      }
      (t.ofType = function(e, t) {
        return function(t) {
          return (
            e.forEach(function(e) {
              return r(t, e, n, !0);
            }),
            t
          );
        };
        function n(e, n, r) {
          r && i(e, n, r, t);
        }
      }),
        (t.ifNotMatch = function(e, t) {
          return function(e) {
            return r(e, n, !0), e;
          };
          function n(n, r, o) {
            o && !e(n, r, o) && i(n, r, o, t);
          }
        });
    },
    function(e, t, n) {
      'use strict';
      n(43), n(30), n(18), n(12), n(20);
      var r = n(0),
        i = n(283),
        o = n(115),
        a = {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 1, offset: 0 },
        };
      function l(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          c = t.renderers[e.type];
        void 0 === e.position &&
          (e.position = (n.node && n.node.position) || a);
        var u = e.position.start,
          f = [e.type, u.line, u.column, i].join('-');
        if (!o.isValidElementType(c))
          throw new Error(
            'Renderer for type `'.concat(
              e.type,
              '` not defined or is not renderable',
            ),
          );
        var p = s(e, f, t, c, n, i);
        return r.createElement(c, p, p.children || d() || void 0);
        function d() {
          return (
            e.children &&
            e.children.map(function(n, r) {
              return l(n, t, { node: e, props: p }, r);
            })
          );
        }
      }
      function s(e, t, n, o, a, s) {
        var u,
          f = { key: t },
          p = 'string' == typeof o;
        n.sourcePos &&
          e.position &&
          (f['data-sourcepos'] = [
            (u = e.position).start.line,
            ':',
            u.start.column,
            '-',
            u.end.line,
            ':',
            u.end.column,
          ]
            .map(String)
            .join('')),
          n.rawSourcePos && !p && (f.sourcePosition = e.position),
          n.includeNodeIndex &&
            a.node &&
            a.node.children &&
            !p &&
            ((f.index = a.node.children.indexOf(e)),
            (f.parentChildCount = a.node.children.length));
        var d =
          null !== e.identifier && void 0 !== e.identifier
            ? n.definitions[e.identifier] || {}
            : null;
        switch (e.type) {
          case 'root':
            c(f, { className: n.className });
            break;
          case 'text':
            (f.nodeKey = t), (f.children = e.value);
            break;
          case 'heading':
            f.level = e.depth;
            break;
          case 'list':
            (f.start = e.start),
              (f.ordered = e.ordered),
              (f.tight = !e.loose),
              (f.depth = e.depth);
            break;
          case 'listItem':
            (f.checked = e.checked),
              (f.tight = !e.loose),
              (f.ordered = e.ordered),
              (f.index = e.index),
              (f.children = (function(e, t) {
                if (e.loose) return e.children;
                if (t.node && e.index > 0 && t.node.children[e.index - 1].loose)
                  return e.children;
                return (function(e) {
                  return e.children.reduce(function(e, t) {
                    return e.concat(
                      'paragraph' === t.type ? t.children || [] : [t],
                    );
                  }, []);
                })(e);
              })(e, a).map(function(t, r) {
                return l(t, n, { node: e, props: f }, r);
              }));
            break;
          case 'definition':
            c(f, { identifier: e.identifier, title: e.title, url: e.url });
            break;
          case 'code':
            c(f, { language: e.lang && e.lang.split(/\s/, 1)[0] });
            break;
          case 'inlineCode':
            (f.children = e.value), (f.inline = !0);
            break;
          case 'link':
            c(f, {
              title: e.title || void 0,
              target:
                'function' == typeof n.linkTarget
                  ? n.linkTarget(e.url, e.children, e.title)
                  : n.linkTarget,
              href: n.transformLinkUri
                ? n.transformLinkUri(e.url, e.children, e.title)
                : e.url,
            });
            break;
          case 'image':
            c(f, {
              alt: e.alt || void 0,
              title: e.title || void 0,
              src: n.transformImageUri
                ? n.transformImageUri(e.url, e.children, e.title, e.alt)
                : e.url,
            });
            break;
          case 'linkReference':
            c(
              f,
              i(d, {
                href: n.transformLinkUri ? n.transformLinkUri(d.href) : d.href,
              }),
            );
            break;
          case 'imageReference':
            c(f, {
              src:
                n.transformImageUri && d.href
                  ? n.transformImageUri(d.href, e.children, d.title, e.alt)
                  : d.href,
              title: d.title || void 0,
              alt: e.alt || void 0,
            });
            break;
          case 'table':
          case 'tableHead':
          case 'tableBody':
            f.columnAlignment = e.align;
            break;
          case 'tableRow':
            (f.isHeader = 'tableHead' === a.node.type),
              (f.columnAlignment = a.props.columnAlignment);
            break;
          case 'tableCell':
            c(f, {
              isHeader: a.props.isHeader,
              align: a.props.columnAlignment[s],
            });
            break;
          case 'virtualHtml':
            f.tag = e.tag;
            break;
          case 'html':
            (f.isBlock = e.position.start.line !== e.position.end.line),
              (f.escapeHtml = n.escapeHtml),
              (f.skipHtml = n.skipHtml);
            break;
          case 'parsedHtml':
            var h;
            e.children &&
              (h = e.children.map(function(t, r) {
                return l(t, n, { node: e, props: f }, r);
              })),
              (f.escapeHtml = n.escapeHtml),
              (f.skipHtml = n.skipHtml),
              (f.element = (function(e, t) {
                var n = e.element;
                if (Array.isArray(n)) {
                  var i = r.Fragment || 'div';
                  return r.createElement(i, null, n);
                }
                if (n.props.children || t) {
                  var o = r.Children.toArray(n.props.children).concat(t);
                  return r.cloneElement(n, null, o);
                }
                return r.cloneElement(n, null);
              })(e, h));
            break;
          default:
            c(f, i(e, { type: void 0, position: void 0, children: void 0 }));
        }
        return !p && e.value && (f.value = e.value), f;
      }
      function c(e, t) {
        for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
      }
      e.exports = l;
    },
    function(e, t, n) {
      'use strict';
      var r = n(289);
      function i(e) {
        var t = e.children;
        (e.children = [
          {
            type: 'tableHead',
            align: e.align,
            children: [t[0]],
            position: t[0].position,
          },
        ]),
          t.length > 1 &&
            e.children.push({
              type: 'tableBody',
              align: e.align,
              children: t.slice(1),
              position: {
                start: t[1].position.start,
                end: t[t.length - 1].position.end,
              },
            });
      }
      e.exports = function(e) {
        return r(e, 'table', i), e;
      };
    },
    function(e, t, n) {
      'use strict';
      n(43),
        (e.exports = function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (t.children || []).reduce(function(t, n) {
            return (
              'definition' === n.type &&
                (t[n.identifier] = { href: n.url, title: n.title }),
              e(n, t)
            );
          }, n);
        });
    },
    function(e, t, n) {
      'use strict';
      n(12), n(86);
      var r = ['http', 'https', 'mailto', 'tel'];
      e.exports = function(e) {
        var t = (e || '').trim(),
          n = t.charAt(0);
        if ('#' === n || '/' === n) return t;
        var i = t.indexOf(':');
        if (-1 === i) return t;
        for (var o = r.length, a = -1; ++a < o; ) {
          var l = r[a];
          if (i === l.length && t.slice(0, l.length).toLowerCase() === l)
            return t;
        }
        return -1 !== (a = t.indexOf('?')) && i > a
          ? t
          : -1 !== (a = t.indexOf('#')) && i > a
          ? t
          : 'javascript:void(0)';
      };
    },
    function(e, t, n) {
      'use strict';
      n(41), n(55), n(2), n(45);
      var r = n(283),
        i = n(0),
        o = parseInt((i.version || '16').slice(0, 2), 10) >= 16,
        a = i.createElement;
      function l(e, t) {
        return a(e, s(t), t.children);
      }
      function s(e) {
        return e['data-sourcepos']
          ? { 'data-sourcepos': e['data-sourcepos'] }
          : {};
      }
      e.exports = {
        break: 'br',
        paragraph: 'p',
        emphasis: 'em',
        strong: 'strong',
        thematicBreak: 'hr',
        blockquote: 'blockquote',
        delete: 'del',
        link: 'a',
        image: 'img',
        linkReference: 'a',
        imageReference: 'img',
        table: l.bind(null, 'table'),
        tableHead: l.bind(null, 'thead'),
        tableBody: l.bind(null, 'tbody'),
        tableRow: l.bind(null, 'tr'),
        tableCell: function(e) {
          var t = e.align ? { textAlign: e.align } : void 0,
            n = s(e);
          return a(
            e.isHeader ? 'th' : 'td',
            t ? r({ style: t }, n) : n,
            e.children,
          );
        },
        root: function(e) {
          var t = !e.className,
            n = (t && i.Fragment) || 'div';
          return a(n, t ? null : e, e.children);
        },
        text: function(e) {
          return o ? e.children : a('span', null, e.children);
        },
        list: function(e) {
          var t = s(e);
          null !== e.start &&
            1 !== e.start &&
            void 0 !== e.start &&
            (t.start = e.start.toString());
          return a(e.ordered ? 'ol' : 'ul', t, e.children);
        },
        listItem: function(e) {
          var t = null;
          if (null !== e.checked && void 0 !== e.checked) {
            var n = e.checked;
            t = a('input', { type: 'checkbox', checked: n, readOnly: !0 });
          }
          return a('li', s(e), t, e.children);
        },
        definition: function() {
          return null;
        },
        heading: function(e) {
          return a('h'.concat(e.level), s(e), e.children);
        },
        inlineCode: function(e) {
          return a('code', s(e), e.children);
        },
        code: function(e) {
          var t = e.language && 'language-'.concat(e.language),
            n = a('code', t ? { className: t } : null, e.value);
          return a('pre', s(e), n);
        },
        html: function(e) {
          if (e.skipHtml) return null;
          var t = e.isBlock ? 'div' : 'span';
          if (e.escapeHtml) {
            var n = i.Fragment || t;
            return a(n, null, e.value);
          }
          var r = { dangerouslySetInnerHTML: { __html: e.value } };
          return a(t, r);
        },
        virtualHtml: function(e) {
          return a(e.tag, s(e), e.children);
        },
        parsedHtml: function(e) {
          return e['data-sourcepos']
            ? i.cloneElement(e.element, {
                'data-sourcepos': e['data-sourcepos'],
              })
            : e.element;
        },
      };
    },
    function(e, t, n) {
      'use strict';
      n(34), n(31);
      t.HtmlParser =
        'undefined' == typeof Symbol
          ? '__RMD_HTML_PARSER__'
          : Symbol('__RMD_HTML_PARSER__');
    },
    function(e) {
      e.exports = JSON.parse(
        '{"data":{"contentfulAbout":{"projects":[{"id":"1a1938f9-3599-56f8-9a65-d81d108d2c7d","name":"Indigo","description":"A clothing resale application created specifically for denim. It allows listing, sorting, and filtering based on denim specific attributes, creating a marketplace tailored to the needs of new and vintage high-quality denim garments.","projectUrl":"https://indigo-resale.store/","repositoryUrl":"https://github.com/shanelonergan/indigo","publishedDate":"2019","type":"React & Rails ","logo":{"title":"Indigo","image":{"src":"//images.ctfassets.net/u68h6i4dgl0q/3AorRmtWOsGQ4o8gK0YWKG/d6be72e17198cae228828413ba5da963/indigo-home-1_copy.png?w=200&fl=progressive&q=100"}}},{"id":"89fd112c-25c8-5f1e-a4ff-71ad97be4948","name":"Typing Royale","description":"A retro themed typing game that allows players to compete head to head over the web.","projectUrl":"https://typingroyale.pro/","repositoryUrl":"https://github.com/wukrit/typing-royale-frontend","publishedDate":"2019","type":"React & Rails","logo":{"title":"Typing Royale","image":{"src":"//images.ctfassets.net/u68h6i4dgl0q/u3Um4zkMrAaQioyq4oSIW/e76f23c15b3ff22bd5d92604d5750c52/Screen_Shot_2020-01-28_at_9.53.56_PM.png?w=200&fl=progressive&q=100"}}},{"id":"fba7df09-4d29-595a-8f2c-8bf8ed689fb8","name":"Breathe","description":"A clean application which walks through a meditative breathing cycle based on the Wim Hof method, and tracks daily streaks. ","projectUrl":"https://shanelonergan.github.io/breathe/","repositoryUrl":"https://github.com/shanelonergan/breathe","publishedDate":"2019","type":"JS & Rails ","logo":{"title":"Indigo","image":{"src":"//images.ctfassets.net/u68h6i4dgl0q/6rkOXCpyvuekYIgy6U6gGu/1a0ac51178a41d25349d29349800567a/Screen_Shot_2020-01-28_at_9.54.32_PM.png?w=200&fl=progressive&q=100"}}}]}}}',
      );
    },
    function(e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"isMediumUserDefined":true}},"allMediumPost":{"totalCount":4,"edges":[{"node":{"id":"2fc37482-4474-5cc6-94e2-3e0abf8eaf51","uniqueSlug":"what-even-is-rest-7c31d88846a1","title":"What Even is REST?","createdAt":"Apr 2020","virtuals":{"subtitle":"De-mystifying one of programming’s most notorious acronyms","readingTime":3.4641509433962265,"previewImage":{"imageId":"1*ZVmb_WePlYo01GwGjOBVdw.jpeg"}}}},{"node":{"id":"ccf86a2a-4367-54aa-8b4d-aad1ff89fc01","uniqueSlug":"tracking-user-streaks-in-ruby-a49e90ce46a1","title":"Tracking User Streaks in Ruby","createdAt":"Feb 2020","virtuals":{"subtitle":"Maintain user engagement through daily habit-tracking","readingTime":5.034905660377358,"previewImage":{"imageId":"1*ov0UdO8OowCzTX37bVraVg.jpeg"}}}},{"node":{"id":"d3716ba8-5d43-5b57-bf2b-e91681c9ba22","uniqueSlug":"building-javascript-from-scratch-5caf5e7cc464","title":"How Would You Build document.getElementsByClassName From Scratch?","createdAt":"Jan 2020","virtuals":{"subtitle":"A look at an interesting interview question","readingTime":2.267924528301887,"previewImage":{"imageId":"1*o0L2M4H7xMQgY69sa-hM-w.png"}}}},{"node":{"id":"42aff537-ae7d-5fe5-8b61-0a5edf5fb2f9","uniqueSlug":"creating-new-bash-commands-and-aliases-c9272fd589c4","title":"Creating new bash commands and aliases","createdAt":"Sep 2019","virtuals":{"subtitle":"Streamline your workflow with custom terminal commands","readingTime":4.30188679245283,"previewImage":{"imageId":"0*cMLbIq7p7g3nejWg.jpg"}}}}]},"author":{"username":"sptlonergan","name":"Shane Lonergan"}}}',
      );
    },
    function(e, t, n) {
      'use strict';
      n(60),
        n(42),
        n(12),
        n(7),
        n(29),
        Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = n(0),
        a = f(o),
        l = f(n(21)),
        s = f(n(181)),
        c = f(n(287)),
        u = f(n(406));
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      var d = function() {},
        h = (function(e) {
          function t(e) {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t);
            var n = (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || ('object' != typeof t && 'function' != typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (n.setRef = function(e) {
                return (n.inner = e);
              }),
              (n.setHeightOffset = function() {
                n.setState({ height: n.inner ? n.inner.offsetHeight : '' }),
                  (n.resizeTicking = !1);
              }),
              (n.getScrollY = function() {
                return void 0 !== n.props.parent().pageYOffset
                  ? n.props.parent().pageYOffset
                  : void 0 !== n.props.parent().scrollTop
                  ? n.props.parent().scrollTop
                  : (
                      document.documentElement ||
                      document.body.parentNode ||
                      document.body
                    ).scrollTop;
              }),
              (n.getViewportHeight = function() {
                return (
                  window.innerHeight ||
                  document.documentElement.clientHeight ||
                  document.body.clientHeight
                );
              }),
              (n.getDocumentHeight = function() {
                var e = document.body,
                  t = document.documentElement;
                return Math.max(
                  e.scrollHeight,
                  t.scrollHeight,
                  e.offsetHeight,
                  t.offsetHeight,
                  e.clientHeight,
                  t.clientHeight,
                );
              }),
              (n.getElementPhysicalHeight = function(e) {
                return Math.max(e.offsetHeight, e.clientHeight);
              }),
              (n.getElementHeight = function(e) {
                return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight);
              }),
              (n.getScrollerPhysicalHeight = function() {
                var e = n.props.parent();
                return e === window || e === document.body
                  ? n.getViewportHeight()
                  : n.getElementPhysicalHeight(e);
              }),
              (n.getScrollerHeight = function() {
                var e = n.props.parent();
                return e === window || e === document.body
                  ? n.getDocumentHeight()
                  : n.getElementHeight(e);
              }),
              (n.isOutOfBound = function(e) {
                var t = e < 0,
                  r = n.getScrollerPhysicalHeight(),
                  i = n.getScrollerHeight();
                return t || e + r > i;
              }),
              (n.handleScroll = function() {
                n.scrollTicking ||
                  ((n.scrollTicking = !0), (0, c.default)(n.update));
              }),
              (n.handleResize = function() {
                n.resizeTicking ||
                  ((n.resizeTicking = !0), (0, c.default)(n.setHeightOffset));
              }),
              (n.unpin = function() {
                n.props.onUnpin(),
                  n.setState({
                    translateY: '-100%',
                    className: 'headroom headroom--unpinned',
                    animation: !0,
                    state: 'unpinned',
                  });
              }),
              (n.unpinSnap = function() {
                n.props.onUnpin(),
                  n.setState({
                    translateY: '-100%',
                    className:
                      'headroom headroom--unpinned headroom-disable-animation',
                    animation: !1,
                    state: 'unpinned',
                  });
              }),
              (n.pin = function() {
                n.props.onPin(),
                  n.setState({
                    translateY: 0,
                    className: 'headroom headroom--pinned',
                    animation: !0,
                    state: 'pinned',
                  });
              }),
              (n.unfix = function() {
                n.props.onUnfix(),
                  n.setState({
                    translateY: 0,
                    className:
                      'headroom headroom--unfixed headroom-disable-animation',
                    animation: !1,
                    state: 'unfixed',
                  });
              }),
              (n.update = function() {
                if (
                  ((n.currentScrollY = n.getScrollY()),
                  !n.isOutOfBound(n.currentScrollY))
                ) {
                  var e = (0, u.default)(
                    n.lastKnownScrollY,
                    n.currentScrollY,
                    n.props,
                    n.state,
                  ).action;
                  'pin' === e
                    ? n.pin()
                    : 'unpin' === e
                    ? n.unpin()
                    : 'unpin-snap' === e
                    ? n.unpinSnap()
                    : 'unfix' === e && n.unfix();
                }
                (n.lastKnownScrollY = n.currentScrollY), (n.scrollTicking = !1);
              }),
              (n.currentScrollY = 0),
              (n.lastKnownScrollY = 0),
              (n.scrollTicking = !1),
              (n.resizeTicking = !1),
              (n.state = {
                state: 'unfixed',
                translateY: 0,
                className: 'headroom headroom--unfixed',
              }),
              n
            );
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            i(t, null, [
              {
                key: 'getDerivedStateFromProps',
                value: function(e, t) {
                  return e.disable && 'unfixed' !== t.state
                    ? {
                        translateY: 0,
                        className:
                          'headroom headroom--unfixed headroom-disable-animation',
                        animation: !1,
                        state: 'unfixed',
                      }
                    : null;
                },
              },
            ]),
            i(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.setHeightOffset(),
                    this.props.disable ||
                      (this.props
                        .parent()
                        .addEventListener('scroll', this.handleScroll),
                      this.props.calcHeightOnResize &&
                        this.props
                          .parent()
                          .addEventListener('resize', this.handleResize));
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function(e, t) {
                  return (
                    !(0, s.default)(this.props, e) ||
                    !(0, s.default)(this.state, t)
                  );
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(e, t) {
                  e.children !== this.props.children && this.setHeightOffset(),
                    !e.disable && this.props.disable
                      ? (this.props
                          .parent()
                          .removeEventListener('scroll', this.handleScroll),
                        this.props
                          .parent()
                          .removeEventListener('resize', this.handleResize),
                        'unfixed' !== t.state &&
                          'unfixed' === this.state.state &&
                          this.props.onUnfix())
                      : e.disable &&
                        !this.props.disable &&
                        (this.props
                          .parent()
                          .addEventListener('scroll', this.handleScroll),
                        this.props.calcHeightOnResize &&
                          this.props
                            .parent()
                            .addEventListener('resize', this.handleResize));
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.props
                    .parent()
                    .removeEventListener('scroll', this.handleScroll),
                    window.removeEventListener('scroll', this.handleScroll),
                    this.props
                      .parent()
                      .removeEventListener('resize', this.handleResize);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.className,
                    n = p(e, ['className']);
                  delete n.onUnpin,
                    delete n.onPin,
                    delete n.onUnfix,
                    delete n.disableInlineStyles,
                    delete n.disable,
                    delete n.parent,
                    delete n.children,
                    delete n.upTolerance,
                    delete n.downTolerance,
                    delete n.pinStart,
                    delete n.calcHeightOnResize;
                  var i = n.style,
                    o = n.wrapperStyle,
                    l = p(n, ['style', 'wrapperStyle']),
                    s = {
                      position:
                        this.props.disable || 'unfixed' === this.state.state
                          ? 'relative'
                          : 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      zIndex: 1,
                      WebkitTransform:
                        'translate3D(0, ' + this.state.translateY + ', 0)',
                      MsTransform:
                        'translate3D(0, ' + this.state.translateY + ', 0)',
                      transform:
                        'translate3D(0, ' + this.state.translateY + ', 0)',
                    },
                    c = this.state.className;
                  this.state.animation &&
                    ((s = r({}, s, {
                      WebkitTransition: 'all .2s ease-in-out',
                      MozTransition: 'all .2s ease-in-out',
                      OTransition: 'all .2s ease-in-out',
                      transition: 'all .2s ease-in-out',
                    })),
                    (c += ' headroom--scrolled')),
                    (s = this.props.disableInlineStyles ? i : r({}, s, i));
                  var u = r({}, o, {
                      height: this.state.height ? this.state.height : null,
                    }),
                    f = t ? t + ' headroom-wrapper' : 'headroom-wrapper';
                  return a.default.createElement(
                    'div',
                    { style: u, className: f },
                    a.default.createElement(
                      'div',
                      r({ ref: this.setRef }, l, { style: s, className: c }),
                      this.props.children,
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(o.Component);
      (h.propTypes = {
        className: l.default.string,
        parent: l.default.func,
        children: l.default.any.isRequired,
        disableInlineStyles: l.default.bool,
        disable: l.default.bool,
        upTolerance: l.default.number,
        downTolerance: l.default.number,
        onPin: l.default.func,
        onUnpin: l.default.func,
        onUnfix: l.default.func,
        wrapperStyle: l.default.object,
        pinStart: l.default.number,
        style: l.default.object,
        calcHeightOnResize: l.default.bool,
      }),
        (h.defaultProps = {
          parent: function() {
            return window;
          },
          disableInlineStyles: !1,
          disable: !1,
          upTolerance: 5,
          downTolerance: 0,
          onPin: d,
          onUnpin: d,
          onUnfix: d,
          wrapperStyle: {},
          pinStart: 0,
          calcHeightOnResize: !0,
        }),
        (t.default = h);
    },
    function(e, t, n) {
      'use strict';
      n(12),
        n(29),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            i = t >= e ? 'down' : 'up',
            o = Math.abs(t - e);
          return n.disable
            ? { action: 'none', scrollDirection: i, distanceScrolled: o }
            : t <= n.pinStart && 'unfixed' !== r.state
            ? { action: 'unfix', scrollDirection: i, distanceScrolled: o }
            : t <= r.height && 'down' === i && 'unfixed' === r.state
            ? { action: 'none', scrollDirection: i, distanceScrolled: o }
            : t > r.height + n.pinStart && 'down' === i && 'unfixed' === r.state
            ? { action: 'unpin-snap', scrollDirection: i, distanceScrolled: o }
            : 'down' === i &&
              ['pinned', 'unfixed'].indexOf(r.state) >= 0 &&
              t > r.height + n.pinStart &&
              o > n.downTolerance
            ? { action: 'unpin', scrollDirection: i, distanceScrolled: o }
            : 'up' === i &&
              o > n.upTolerance &&
              ['pinned', 'unfixed'].indexOf(r.state) < 0
            ? { action: 'pin', scrollDirection: i, distanceScrolled: o }
            : 'up' === i &&
              t <= r.height &&
              ['pinned', 'unfixed'].indexOf(r.state) < 0
            ? { action: 'pin', scrollDirection: i, distanceScrolled: o }
            : { action: 'none', scrollDirection: i, distanceScrolled: o };
        });
    },
    function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgogICAgeG1sbnM6bnMxPSJodHRwOi8vc296aS5iYWllcm91Z2UuZnIiCiAgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICAgaWQ9InN2ZzMwOTQiCiAgICBzb2RpcG9kaTpkb2NuYW1lPSJOZXcgZG9jdW1lbnQgNCIKICAgIHZpZXdCb3g9IjAgMCA3NC4yMTIgNjAuODUzIgogICAgdmVyc2lvbj0iMS4xIgogICAgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC40IHI5OTM5IgogID4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgIGlkPSJiYXNlIgogICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICAgaW5rc2NhcGU6d2luZG93LXk9IjM3NyIKICAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgICBpbmtzY2FwZTp6b29tPSIwLjM1IgogICAgICBpbmtzY2FwZTp3aW5kb3cteD0iNTY1IgogICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI0NzUiCiAgICAgIHNob3dncmlkPSJmYWxzZSIKICAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgIGlua3NjYXBlOmN4PSIzNy4xMDU5NjUiCiAgICAgIGlua3NjYXBlOmN5PSIzMC40MjY3MDUiCiAgICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjcwNyIKICAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogIC8+CiAgPGcKICAgICAgaWQ9ImxheWVyMSIKICAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMzcuODkgLTUwMS45NCkiCiAgICA+CiAgICA8ZwogICAgICAgIGlkPSJnNTEwNSIKICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4yMTIgMzE4Ljg3KSIKICAgICAgPgogICAgICA8cmVjdAogICAgICAgICAgaWQ9InJlY3Q1MDU5IgogICAgICAgICAgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDozO2ZpbGw6bm9uZSIKICAgICAgICAgIHJ4PSIxLjQ5MjQiCiAgICAgICAgICByeT0iMTUiCiAgICAgICAgICBoZWlnaHQ9IjQwLjQwMSIKICAgICAgICAgIHdpZHRoPSI1My41MzMiCiAgICAgICAgICB5PSIxODQuNTciCiAgICAgICAgICB4PSIzMjMuOTciCiAgICAgIC8+CiAgICAgIDxyZWN0CiAgICAgICAgICBpZD0icmVjdDUwNjEiCiAgICAgICAgICBzdHlsZT0ic3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjM7ZmlsbDpub25lIgogICAgICAgICAgcng9IjEuNDkyNCIKICAgICAgICAgIHJ5PSIwIgogICAgICAgICAgaGVpZ2h0PSIyNiIKICAgICAgICAgIHdpZHRoPSI0MCIKICAgICAgICAgIHk9IjE5MC42MSIKICAgICAgICAgIHg9IjMzMC40OSIKICAgICAgLz4KICAgICAgPHJlY3QKICAgICAgICAgIGlkPSJyZWN0NTA2MyIKICAgICAgICAgIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MztmaWxsOm5vbmUiCiAgICAgICAgICByeD0iMS40OTI0IgogICAgICAgICAgcnk9IjEuNDkyNCIKICAgICAgICAgIGhlaWdodD0iMTcuNDc1IgogICAgICAgICAgd2lkdGg9IjcxLjIxMiIKICAgICAgICAgIHk9IjIyNC45NSIKICAgICAgICAgIHg9IjMxNS4xOCIKICAgICAgLz4KICAgICAgPHBhdGgKICAgICAgICAgIGlkPSJwYXRoNTA2NyIKICAgICAgICAgIGQ9Im0zMjAuMzYgMjMwLjdoMTUiCiAgICAgICAgICBzdHlsZT0ic3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjIuMTtmaWxsOm5vbmUiCiAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAvPgogICAgICA8cGF0aAogICAgICAgICAgaWQ9InBhdGg1MDY3LTMiCiAgICAgICAgICBkPSJtMzc3Ljc5IDIzMC41OGgzLjkyMzgiCiAgICAgICAgICBzdHlsZT0ic3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjIuMTtmaWxsOm5vbmUiCiAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAvPgogICAgICA8cGF0aAogICAgICAgICAgaWQ9InBhdGg1MDY3LTMtMyIKICAgICAgICAgIGQ9Im0zNjguNDMgMjIwLjczaDMuOTIzOCIKICAgICAgICAgIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Mi4xO2ZpbGw6bm9uZSIKICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgIC8+CiAgICA8L2cKICAgID4KICA8L2cKICA+CiAgPG1ldGFkYXRhCiAgICA+CiAgICA8cmRmOlJERgogICAgICA+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgPgogICAgICAgIDxkYzpmb3JtYXQKICAgICAgICAgID5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQKICAgICAgICA+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIKICAgICAgICAvPgogICAgICAgIDxjYzpsaWNlbnNlCiAgICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvcHVibGljZG9tYWluLyIKICAgICAgICAvPgogICAgICAgIDxkYzpwdWJsaXNoZXIKICAgICAgICAgID4KICAgICAgICAgIDxjYzpBZ2VudAogICAgICAgICAgICAgIHJkZjphYm91dD0iaHR0cDovL29wZW5jbGlwYXJ0Lm9yZy8iCiAgICAgICAgICAgID4KICAgICAgICAgICAgPGRjOnRpdGxlCiAgICAgICAgICAgICAgPk9wZW5jbGlwYXJ0PC9kYzp0aXRsZQogICAgICAgICAgICA+CiAgICAgICAgICA8L2NjOkFnZW50CiAgICAgICAgICA+CiAgICAgICAgPC9kYzpwdWJsaXNoZXIKICAgICAgICA+CiAgICAgIDwvY2M6V29yawogICAgICA+CiAgICAgIDxjYzpMaWNlbnNlCiAgICAgICAgICByZGY6YWJvdXQ9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL3B1YmxpY2RvbWFpbi8iCiAgICAgICAgPgogICAgICAgIDxjYzpwZXJtaXRzCiAgICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjUmVwcm9kdWN0aW9uIgogICAgICAgIC8+CiAgICAgICAgPGNjOnBlcm1pdHMKICAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNEaXN0cmlidXRpb24iCiAgICAgICAgLz4KICAgICAgICA8Y2M6cGVybWl0cwogICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI0Rlcml2YXRpdmVXb3JrcyIKICAgICAgICAvPgogICAgICA8L2NjOkxpY2Vuc2UKICAgICAgPgogICAgPC9yZGY6UkRGCiAgICA+CiAgPC9tZXRhZGF0YQogID4KPC9zdmcKPgo=';
    },
    function(e) {
      e.exports = JSON.parse(
        '{"data":{"contentfulAbout":{"name":"Shane","roles":["Web Developer 👨‍💻","React Lover ⚛️","Ruby on Rails Engineer 💎","JavaScript Wrangler 🤠"],"socialLinks":[{"id":"d346bda6-36b7-511c-a363-b79320d1d6a1","url":"https://github.com/shanelonergan","name":"Github","fontAwesomeIcon":"github"},{"id":"0e71cbfd-ee90-56a5-b365-d538d8a7171a","url":"https://medium.com/@sptlonergan","name":"Medium","fontAwesomeIcon":"medium"},{"id":"84da2bc3-d7ca-5fb9-add6-a01b3df06489","url":"https://shane823656.typeform.com/to/gXwRT3","name":"Contact me","fontAwesomeIcon":"envelope"},{"id":"e45de385-02a6-50fd-a389-dfff147b3698","url":"https://twitter.com/shane__lonergan","name":"Twitter","fontAwesomeIcon":"twitter"},{"id":"0806eb36-0fa8-5de9-b954-4a5538addcb0","url":"https://www.linkedin.com/in/shane-lonergan/","name":"LinkedIn","fontAwesomeIcon":"linkedin"}]}}}',
      );
    },
  ]),
]);
//# sourceMappingURL=component---src-pages-index-js-59b795c9981d05815a8b.js.map
