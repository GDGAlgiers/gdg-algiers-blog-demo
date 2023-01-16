async function load({ url }) {
  const res = await fetch(`https://blogs-api-cjly.onrender.com/blogs/${url.pathname}`);
  const blog = await res.json();
  return {
    data: blog
  };
}
export {
  load
};
