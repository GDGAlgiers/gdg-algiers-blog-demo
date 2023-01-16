import { NavLink, useLoaderData } from "@remix-run/react";

export async function loader({ params }) {
  const res = await fetch(
    `https://blogs-api-cjly.onrender.com/blogs/${params.slug}`
  );

  const data = await res.json();

  return data;
}

export const meta = ({ data }) => {
  if (data) {
    return {
      title: data.title + " - GDG Blog",
      description: data.excerpt,
    };
  }
};

export default function BlogDetailsPage() {
  const post = useLoaderData();

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8">
      <div className="text-center">
        <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          {post.title}
        </h1>
      </div>
      <img src={post.image} alt={post.title} className="rounded my-8 mx-auto" />
      <div className="mb-4">Written by {post.author}</div>
      <article
        className="pb-6 text-gray-700 text-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="block mt-4 mb-8 text-lg font-bold text-gray-800 hover:text-blue-800">
        <NavLink to="/">Back to Home</NavLink>
      </div>
    </div>
  );
}
