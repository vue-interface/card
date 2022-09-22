import { openBlock as t, createElementBlock as r, renderSlot as e, createCommentVNode as s } from "vue";
const c = (o, d) => {
  const l = o.__vccOpts || o;
  for (const [n, a] of d)
    l[n] = a;
  return l;
}, i = {}, m = { class: "card" }, $ = {
  key: 1,
  class: "card-header"
}, f = {
  key: 0,
  class: "card-body"
}, u = {
  key: 2,
  class: "card-footer"
};
function y(o, d) {
  return t(), r("div", m, [
    o.$slots["img-top"] ? e(o.$slots, "img-top", { key: 0 }) : s("", !0),
    o.$slots.header ? (t(), r("div", $, [
      e(o.$slots, "header")
    ])) : s("", !0),
    e(o.$slots, "default", {}, () => [
      o.$slots.body ? (t(), r("div", f, [
        e(o.$slots, "body")
      ])) : s("", !0)
    ]),
    o.$slots.footer ? (t(), r("div", u, [
      e(o.$slots, "footer")
    ])) : s("", !0),
    o.$slots["img-bottom"] ? e(o.$slots, "img-bottom", { key: 3 }) : s("", !0)
  ]);
}
const k = /* @__PURE__ */ c(i, [["render", y]]);
export {
  k as Card
};
