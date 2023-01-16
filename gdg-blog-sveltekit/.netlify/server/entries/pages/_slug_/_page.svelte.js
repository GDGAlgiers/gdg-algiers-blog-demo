import { c as create_ssr_component, e as escape, f as add_attribute } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const post = data.data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1pfu15v_START -->${$$result.title = `<title>${escape(post.title)} - GDG Blog</title>`, ""}<meta name="${"description"}"${add_attribute("content", post.excerpt, 0)}><!-- HEAD_svelte-1pfu15v_END -->`, ""}

<div class="${"px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8"}"><div class="${"text-center"}"><h1 class="${"max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"}">${escape(post.title)}</h1></div>
    <img${add_attribute("src", post.image, 0)}${add_attribute("alt", post.title, 0)} class="${"rounded my-8 mx-auto"}">
    <div class="${"mb-4"}">Written by ${escape(post.author)}</div>
    <article class="${"pb-6 text-gray-700 text-lg"}"><!-- HTML_TAG_START -->${post.content}<!-- HTML_TAG_END --></article>
    <div class="${"block mt-4 mb-8 text-lg font-bold text-gray-800 hover:text-blue-800"}"><a href="${"/"}">Back to Home</a></div></div>`;
});
export {
  Page as default
};
