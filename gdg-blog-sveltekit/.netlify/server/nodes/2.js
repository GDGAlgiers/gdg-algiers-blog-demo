import * as server from '../entries/pages/_page.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-2c5a9b11.js';
export { server };
export const imports = ["_app/immutable/components/pages/_page.svelte-2c5a9b11.js","_app/immutable/chunks/index-4c4c63a2.js"];
export const stylesheets = [];
export const fonts = [];
