import Link from "next/link";
import Head from "next/head";

export async function getServerSideProps({ params, res }) {
  const response = await fetch(
    `https://blogs-api-cjly.onrender.com/blogs/${params.slug}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}

export default function BlogDetailsPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} - GDG Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8">
        <div className="text-center">
          <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            {post.title}
          </h1>
        </div>
        <img
          src={post.image}
          alt={post.title}
          className="rounded my-8 mx-auto"
        />
        <div className="mb-4">Written by {post.author}</div>
        <article
          className="pb-6 text-gray-700 text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="block mt-4 mb-8 text-lg font-bold text-gray-800 hover:text-blue-800">
          <Link href="/">Back to Home</Link>
        </div>
      </div>
    </>
  );
}
