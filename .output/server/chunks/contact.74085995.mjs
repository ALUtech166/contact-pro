import { _ as _export_sfc, u as useState, a as _imports_0$2, b as _imports_1$1, c as _imports_2$1, d as _imports_3$1, e as _imports_4, C as CloseIcon, f as _sfc_main$5, g as __nuxt_component_0, h as _sfc_main$6, i as __nuxt_component_1$2 } from './server.mjs';
import { unref, withCtx, createTextVNode, createVNode, isRef, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'defu';
import '@vue/shared';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const showContact = useState("showContact", () => false, "$upAkW7AZLX");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Top = _sfc_main$5;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Modal = _sfc_main$6;
      const _component_Footer = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-89c2b111>`);
      _push(ssrRenderComponent(_component_Top, null, null, _parent));
      _push(`<main class="mb-16" data-v-89c2b111><section class="py-24 px-8 bg-orange-600" data-v-89c2b111><div class="text-justify" data-v-89c2b111><div class="" data-v-89c2b111><h1 class="font-serif font-bold text-center text-white uppercase text-4xl z-40 animate-slideDown" data-v-89c2b111> Contact </h1></div><div class="text-center relative" data-v-89c2b111><div class="absolute left-0 top-0 rounded-full w-20 h-20 bg-green-400/50 z-10" data-v-89c2b111></div></div><div class="flex items-center justify-evenly space-x-10 basis-1/2" data-v-89c2b111><div class="text-center relative" data-v-89c2b111><div class="absolute left-0 top-0 rounded-full w-20 h-20 bg-green-400/50 z-10" data-v-89c2b111></div></div><div class="text-center relative" data-v-89c2b111><div class="absolute left-0 top-0 rounded-full w-20 h-20 bg-yellow-400/50 z-10" data-v-89c2b111></div></div></div></div></section><section class="mt-10 py-8 px-8 mx-8 my-8 lg:px-desktop lg:mx-desktop bg-[#F3F7F5] lg:rounded-2xl" data-v-89c2b111><div class="" data-v-89c2b111><div class="basis-1/2 space-x-10" data-v-89c2b111><h1 class="font-serif font-bold text-center text-blue-800 uppercase lg:text-4xl text-md z-40 animate-slideDown" data-v-89c2b111> Contactez-Nous </h1></div></div></section><section class="lg:mt-10 lg:py-8 lg:px-8 lg:mx-8 lg:my-8 lg:px-desktop lg:mx-desktop bg-[#F3F7F5] rounded-2xl" data-v-89c2b111><div class="flex flex-col lg:flex-row lg:space-x-4 lg:space-x-12 space-x-10" data-v-89c2b111><div class="basis-1/2 justify-end space-x-10" data-v-89c2b111><h1 class="px-8 font-serif font-bold text-center text-blue-800 uppercase lg:text-2xl text-md z-40 animate-slideDown" data-v-89c2b111> Email </h1><p class="py-4 px-8 font-serif text-left lg:text-xl text-md text-gray-600" data-v-89c2b111> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod eligendi natus dolores velit, </p><h3 class="py-4 px-8 flex font-serif font-bold text-left text-md text-blue-900" data-v-89c2b111> contactpro@afrique.com </h3></div><div class="basis-1/2 justify-end space-x-10" data-v-89c2b111><h1 class="font-serif font-bold text-center text-blue-800 uppercase lg:text-2xl text-md z-40 animate-slideDown" data-v-89c2b111> Telephone </h1><p class="py-4 font-serif text-left lg:text-xl text-md text-gray-600" data-v-89c2b111> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod eligendi natus dolores velit, </p><h3 class="py-4 font-serif flex font-bold text-left text-md text-blue-900" data-v-89c2b111> 91 58 44 74 | 96 36 03 31 </h3></div><div class="basis-1/2 justify-end space-x-10" data-v-89c2b111><h1 class="font-serif font-bold text-center text-blue-800 uppercase text-2xl animate-slideDown" data-v-89c2b111> Adresse </h1><p class="py-4 font-serif text-left lg:text-xl text-md text-gray-600" data-v-89c2b111> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod eligendi natus dolores velit, </p><h3 class="py-4 flex font-serif font-bold text-left text-xl text-blue-900" data-v-89c2b111> Lom\xE9, Togo </h3></div></div></section><section class="lg:mt-10 lg:py-16 lg:px-8 lg:mx-8 lg:my-8 lg:px-desktop lg:mx-desktop bg-orange-600 lg:rounded-2xl" data-v-89c2b111><div class="flex flex-col lg:flex-row lg:space-x-4 lg:space-x-12 space-x-10" data-v-89c2b111><div class="py-4 basis-1/2 font-serif space-x-8 px-8 lg:block" data-v-89c2b111>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: ($event) => showContact.value = !unref(showContact),
        class: "bg-blue-800 text-white py-3 px-7 rounded-md font-medium hover:border-black hover:bg-green-700 hover:text-white transition-all",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Envoyer Un Message`);
          } else {
            return [
              createTextVNode("Envoyer Un Message")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center flex-nowrap space-x-10" data-v-89c2b111><h1 class="font-bold py-4 text-white uppercase text-sm" data-v-89c2b111>suivez-nous sur nos pages :</h1><div class="font-sans font-bold text-left text-white text-justify uppercase text-lg z-40 animate-slideDown" data-v-89c2b111>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$2)} alt="" data-v-89c2b111${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$2,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="font-sans font-bold text-left text-white text-justify uppercase text-lg z-40 animate-slideDown" data-v-89c2b111>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-89c2b111${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1$1,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="font-sans font-bold text-left text-white text-justify uppercase text-lg z-40 animate-slideDown" data-v-89c2b111>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_2$1)} alt="" data-v-89c2b111${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_2$1,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="font-sans font-bold text-left text-white text-justify uppercase text-lg z-40 animate-slideDown" data-v-89c2b111>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_3$1)} alt="" data-v-89c2b111${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_3$1,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="font-sans font-bold text-left text-white text-justify uppercase text-lg z-40 animate-slideDown" data-v-89c2b111>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_4)} alt="" data-v-89c2b111${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_4,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_Modal, {
        class: "my-8",
        show: unref(showContact),
        "onUpdate:show": ($event) => isRef(showContact) ? showContact.value = $event : null,
        bgColor: "bg-white/90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative bg-white rounded-lg max-w-lg min-w-[400px] animate-fade shadow-xl" data-v-89c2b111${_scopeId}><div class="px-8 pb-2 mt-5" data-v-89c2b111${_scopeId}><div class="flex justify-between p-4 border-b border-gray-300" data-v-89c2b111${_scopeId}><h1 class="font-bold text-blue-800 uppercase text-sm" data-v-89c2b111${_scopeId}>Contactez-Nous</h1><button class="" data-v-89c2b111${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CloseIcon), { class: "w-5 h-5 text-gray-400 hover:text-red-600 hover:rotate-[360deg] transition-all duration-500 hover:bg-gray-100 rounded-full focus:outline-dotted focus:outline-gray-300 active:outline active:outline-gray-300" }, null, _parent2, _scopeId));
            _push2(`</button></div><form data-v-89c2b111${_scopeId}><div data-v-89c2b111${_scopeId}><label for="Nom" class="block mb-1 cursor-pointer text-gray-900 font-medium" data-v-89c2b111${_scopeId}>Nom</label><input required type="email" name="email" id="email" class="w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400" data-v-89c2b111${_scopeId}><label for="Email" class="block mb-1 cursor-pointer text-gray-900 font-medium" data-v-89c2b111${_scopeId}>Email</label><input required type="telephone" name="email" id="email" class="w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400" data-v-89c2b111${_scopeId}><label for="Telephone" class="block mb-1 cursor-pointer text-gray-900 font-medium" data-v-89c2b111${_scopeId}>Telephone</label><input required type="email" name="email" id="email" class="w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400" data-v-89c2b111${_scopeId}><label for="Telephone" class="block mb-1 cursor-pointer text-gray-900 font-medium" data-v-89c2b111${_scopeId}>Message</label><textarea class="w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400" name="" id="" cols="20" rows="10" data-v-89c2b111${_scopeId}></textarea></div><div class="mt-5" data-v-89c2b111${_scopeId}><button type="submit" class="block bg-orange-600 w-full py-3 rounded-md font-bold text-white" data-v-89c2b111${_scopeId}> Envoyer </button></div></form></div></div>`);
          } else {
            return [
              createVNode("div", {
                onClick: withModifiers(() => {
                }, ["stop"]),
                class: "relative bg-white rounded-lg max-w-lg min-w-[400px] animate-fade shadow-xl"
              }, [
                createVNode("div", { class: "px-8 pb-2 mt-5" }, [
                  createVNode("div", { class: "flex justify-between p-4 border-b border-gray-300" }, [
                    createVNode("h1", { class: "font-bold text-blue-800 uppercase text-sm" }, "Contactez-Nous"),
                    createVNode("button", {
                      onClick: ($event) => showContact.value = false,
                      class: ""
                    }, [
                      createVNode(unref(CloseIcon), { class: "w-5 h-5 text-gray-400 hover:text-red-600 hover:rotate-[360deg] transition-all duration-500 hover:bg-gray-100 rounded-full focus:outline-dotted focus:outline-gray-300 active:outline active:outline-gray-300" })
                    ], 8, ["onClick"])
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(() => {
                    }, ["prevent"])
                  }, [
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "Nom",
                        class: "block mb-1 cursor-pointer text-gray-900 font-medium"
                      }, "Nom"),
                      createVNode("input", {
                        required: "",
                        type: "email",
                        name: "email",
                        id: "email",
                        class: "w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400"
                      }),
                      createVNode("label", {
                        for: "Email",
                        class: "block mb-1 cursor-pointer text-gray-900 font-medium"
                      }, "Email"),
                      createVNode("input", {
                        required: "",
                        type: "telephone",
                        name: "email",
                        id: "email",
                        class: "w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400"
                      }),
                      createVNode("label", {
                        for: "Telephone",
                        class: "block mb-1 cursor-pointer text-gray-900 font-medium"
                      }, "Telephone"),
                      createVNode("input", {
                        required: "",
                        type: "email",
                        name: "email",
                        id: "email",
                        class: "w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400"
                      }),
                      createVNode("label", {
                        for: "Telephone",
                        class: "block mb-1 cursor-pointer text-gray-900 font-medium"
                      }, "Message"),
                      createVNode("textarea", {
                        class: "w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400",
                        name: "",
                        id: "",
                        cols: "20",
                        rows: "10"
                      })
                    ]),
                    createVNode("div", { class: "mt-5" }, [
                      createVNode("button", {
                        type: "submit",
                        class: "block bg-orange-600 w-full py-3 rounded-md font-bold text-white"
                      }, " Envoyer ")
                    ])
                  ], 40, ["onSubmit"])
                ])
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><br data-v-89c2b111><section data-v-89c2b111><div class="mapouter rounded-md px-8" data-v-89c2b111><div class="gmap_canvas" data-v-89c2b111><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126931.66483124522!2d1.1766505177710849!3d6.182317116520904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c113185419%3A0x3224b5422caf411d!2zTG9tw6k!5e0!3m2!1sfr!2stg!4v1663865125978!5m2!1sfr!2stg" width="100%" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-89c2b111></iframe></div></div></section></main><footer data-v-89c2b111>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-89c2b111"]]);

export { contact as default };
//# sourceMappingURL=contact.74085995.mjs.map
