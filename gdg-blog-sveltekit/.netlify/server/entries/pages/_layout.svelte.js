import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const app = "";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"}"><div class="${"ml-2 tracking-wide flex justify-between"}"><div class="${"font-bold text-xl text-blue-700"}"><a href="${"/"}">GDG Blog</a></div>
      <a href="${"/about"}">About Us</a></div></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"text-center px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"}">Made with ♥ by GDG Algiers
</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
  
  ${slots.default ? slots.default({}) : ``}
  
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
