async function load() {
  const res = await fetch(`https://blogs-api-cjly.onrender.com/blogs/all`);
  const blogs = await res.json();
  return {
    data: blogs
  };
}
export {
  load
};
