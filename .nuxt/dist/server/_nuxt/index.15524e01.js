import { _ as _export_sfc, f as _sfc_main$1, j as __nuxt_component_1, i as __nuxt_component_1$1 } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "destr";
import "h3";
import "defu";
import "@vue/shared";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Top = _sfc_main$1;
  const _component_Hero = __nuxt_component_1;
  const _component_Footer = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Top, null, null, _parent));
  _push(`<main class="mb-16">`);
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(`</main><footer>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index.15524e01.js.map
