import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const posts = data.data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1olv9z4_START -->${$$result.title = `<title>GDG Blog</title>`, ""}<!-- HEAD_svelte-1olv9z4_END -->`, ""}

<div class="${"px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"}"><div class="${"grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"}">${each(posts, (post) => {
    return `<a${add_attribute("href", `/${post._id}`, 0)}${add_attribute("key", post._id, 0)} class="${"overflow-hidden transition-shadow duration-300 bg-gray-200 rounded border hover:text-blue-700 cursor-pointer"}"><img${add_attribute("src", post.image, 0)} class="${"object-cover w-full h-64"}"${add_attribute("alt", post.title, 0)}>
				<div class="${"p-5"}"><div class="${"inline-block mb-3 text-2xl font-bold leading-8"}">${escape(post.title)}</div>
				<p class="${"mb-3 text-xs font-semibold tracking-wide uppercase"}"><span class="${"text-blue-gray-900"}">${escape(post.author)}</span></p>
				<p class="${"mb-2 text-gray-700"}">${escape(post.excerpt)}</p></div>
			</a>`;
  })}</div></div>`;
});
export {
  Page as default
};
