import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const res = await fetch(`https://blogs-api-cjly.onrender.com/blogs/all`);
  const data = await res.json();
  return data;
}

export default function HomePage() {
  const posts = useLoaderData();

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {posts.map((post) => (
          <a
            href={`/${post._id}`}
            key={post._id}
            className="overflow-hidden transition-shadow duration-300 bg-gray-200 rounded border hover:text-blue-700 cursor-pointer"
          >
            <img
              src={post.image}
              className="object-cover w-full h-64"
              alt={post.title}
            />
            <div className="p-5">
              <div className="inline-block mb-3 text-2xl font-bold leading-8">
                {post.title}
              </div>
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <span className="text-blue-gray-900">{post.author}</span>
              </p>
              <p className="mb-2 text-gray-700">{post.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
