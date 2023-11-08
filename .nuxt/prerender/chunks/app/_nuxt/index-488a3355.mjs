import { u as useHead } from '../server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/hookable/dist/index.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/unctx/dist/index.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/unhead/dist/index.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/h3/dist/index.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/ufo/dist/index.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/defu/dist/defu.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/klona/dist/index.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/tailwind-merge/dist/tailwind-merge.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/destr/dist/index.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/scule/dist/index.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/ohash/dist/index.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/jiayuzheng/WebstormProjects/J/node_modules/pathe/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "My Demo Page",
      meta: [
        { name: "description", content: "My demo page description." }
      ],
      bodyAttrs: {
        class: "test"
      },
      script: [{ innerHTML: "console.log('Hello Demo')" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-cyan-400" }, _attrs))}>Demo Page</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-488a3355.mjs.map
