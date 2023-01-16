var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-VIQ6EAWM.css";

// public/logo.png
var logo_default = "/build/_assets/logo-DZA5KZAG.png";

// app/components/Navbar.jsx
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime"), Navbar = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "ml-2 tracking-wide flex justify-between", children: [
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "font-bold text-xl text-blue-700", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.NavLink, { to: "/", children: "GDG Blog" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.NavLink, { to: "/about", children: "About Us" })
] }) }), Navbar_default = Navbar;

// app/components/Footer.jsx
var import_jsx_runtime3 = require("react/jsx-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-center px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8", children: "Made with \u2665 by GDG Algiers" }), Footer_default = Footer;

// app/root.jsx
var import_jsx_runtime4 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "GDG Blog",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Navbar_default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.LiveReload, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Footer_default, {})
    ] })
  ] });
}
var links = () => [
  { rel: "stylesheet", href: app_default },
  { rel: "icon", type: "image/x-icon", href: logo_default }
];

// app/routes/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => BlogDetailsPage,
  loader: () => loader,
  meta: () => meta2
});
var import_react4 = require("@remix-run/react"), import_jsx_runtime5 = require("react/jsx-runtime");
async function loader({ params }) {
  return await (await fetch(
    `https://blogs-api-cjly.onrender.com/blogs/${params.slug}`
  )).json();
}
var meta2 = ({ data }) => {
  if (data)
    return {
      title: data.title + " - GDG Blog",
      description: data.excerpt
    };
};
function BlogDetailsPage() {
  let post = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { className: "max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto", children: post.title }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: post.image, alt: post.title, className: "rounded my-8 mx-auto" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mb-4", children: [
      "Written by ",
      post.author
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "article",
      {
        className: "pb-6 text-gray-700 text-lg",
        dangerouslySetInnerHTML: { __html: post.content }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "block mt-4 mb-8 text-lg font-bold text-gray-800 hover:text-blue-800", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.NavLink, { to: "/", children: "Back to Home" }) })
  ] });
}

// app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => AboutPage,
  meta: () => meta3
});
var import_react5 = require("@remix-run/react"), import_jsx_runtime6 = require("react/jsx-runtime"), meta3 = ({ data }) => {
  if (data)
    return {
      title: "GDG Blog - About"
    };
};
function AboutPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h1", { className: "text-center max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto", children: "About Us" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("article", { className: "text-gray-700 text-lg pb-6", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ut voluptate ab id accusantium iste veniam enim error vitae quod modi accusamus optio illum obcaecati delectus, dolore, rem dicta? Perferendis incidunt nisi architecto explicabo iure, praesentium mollitia natus unde minus eius labore quas laudantium vel temporibus accusantium nulla eum fuga repellat aspernatur. Suscipit ratione est quae tenetur molestias fugit in mollitia similique. Nesciunt quos amet consectetur, dolores tempore veniam cum libero consequatur illo praesentium fugit fuga nam perspiciatis suscipit expedita quasi obcaecati magni corporis, impedit delectus error minima porro officia. Ex facilis earum esse consectetur architecto excepturi assumenda cum nulla!" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "block mt-4 mb-8 text-lg font-bold text-gray-800 hover:text-blue-800", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.NavLink, { to: "/", children: "Back to Home" }) })
  ] }) });
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => HomePage,
  loader: () => loader2
});
var import_react6 = require("@remix-run/react"), import_jsx_runtime7 = require("react/jsx-runtime");
async function loader2() {
  return await (await fetch("https://blogs-api-cjly.onrender.com/blogs/all")).json();
}
function HomePage() {
  let posts = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "a",
    {
      href: `/${post._id}`,
      className: "overflow-hidden transition-shadow duration-300 bg-gray-200 rounded border hover:text-blue-700 cursor-pointer",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "img",
          {
            src: post.image,
            className: "object-cover w-full h-64",
            alt: post.title
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "p-5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "inline-block mb-3 text-2xl font-bold leading-8", children: post.title }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "mb-3 text-xs font-semibold tracking-wide uppercase", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-blue-gray-900", children: post.author }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "mb-2 text-gray-700", children: post.excerpt })
        ] })
      ]
    },
    post._id
  )) }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "9a904566", entry: { module: "/build/entry.client-R3TL7FGX.js", imports: ["/build/_shared/chunk-HZP6XZTL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-U5365UBK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$slug": { id: "routes/$slug", parentId: "root", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/$slug-TSNVETF7.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-3SFFGYX7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-B7GFZZUO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-9A904566.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$slug": {
    id: "routes/$slug",
    parentId: "root",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
