(function(c, b, q) {
    c.tapHandling = !1;
    c.tappy = !0;
    var g = (new Date).getTime(),
        f = function(d) {
            return d.each(function() {
                function d(a) {
                    if (50 > (new Date).getTime() - g) return !1;
                    g = (new Date).getTime();
                    b(a.target).trigger("tap", [a, b(a.target).attr("href")])
                }

                function f(a) {
                    a = a.originalEvent || a;
                    return (a = a.touches || a.targetTouches) ? [a[0].pageX, a[0].pageY] : null
                }

                function h(a) {
                    clearTimeout(k);
                    k = setTimeout(function() {
                        e = c.tapHandling = !1
                    }, 1E3);
                    a.which && 1 < a.which || a.shiftKey || a.altKey || a.metaKey || a.ctrlKey || (a.preventDefault(), e || c.tapHandling && c.tapHandling !== a.type ? e = !1 : (c.tapHandling = a.type, d(a)))
                }
                var k, l, m, e;
                b(this).bind("touchstart.tappy MSPointerDown.tappy", function(a) {
                    if (a.touches && 1 < a.touches.length || a.targetTouches && 1 < a.targetTouches.length) return !1;
                    a = f(a);
                    if(a){
                        m = a[0];
                        l = a[1];
                    }
                }).bind("touchmove.tappy MSPointerMove.tappy", function(a) {
                    e || (a = f(a)) && (10 < Math.abs(l - a[1]) || 10 < Math.abs(m - a[0])) && (e = !0)
                }).bind("touchend.tappy MSPointerUp.tappy", h).bind("click.tappy", h)
            })
        };
    if (b.event && b.event.special) b.event.special.tap = {
        add: function(d) {
            f(b(this))
        },
        remove: function(d) {
            b(this).unbind(".tappy")
        }
    };
    else {
        var n = b.fn.bind,
            p = b.fn.unbind;
        b.fn.bind = function(b) {
            /(^| )tap( |$)/.test(b) && f(this);
            return n.apply(this, arguments)
        };
        b.fn.unbind = function(b) {
            /(^| )tap( |$)/.test(b) && this.unbind(".tappy");
            return p.apply(this, arguments)
        }
    }
})(this, jQuery);
