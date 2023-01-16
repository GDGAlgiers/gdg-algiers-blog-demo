import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <>
      <Layout>
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8">
          <h1 className="text-center max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            About Us
          </h1>
          <article className="text-gray-700 text-lg pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, ut voluptate ab id accusantium iste veniam enim
            error vitae quod modi accusamus optio illum obcaecati delectus,
            dolore, rem dicta? Perferendis incidunt nisi architecto explicabo
            iure, praesentium mollitia natus unde minus eius labore quas
            laudantium vel temporibus accusantium nulla eum fuga repellat
            aspernatur. Suscipit ratione est quae tenetur molestias fugit in
            mollitia similique. Nesciunt quos amet consectetur, dolores tempore
            veniam cum libero consequatur illo praesentium fugit fuga nam
            perspiciatis suscipit expedita quasi obcaecati magni corporis,
            impedit delectus error minima porro officia. Ex facilis earum esse
            consectetur architecto excepturi assumenda cum nulla!
          </article>
          <div className="block mt-4 mb-8 text-lg font-bold text-gray-800 hover:text-blue-800">
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const Head = () => <title>GDG Blog - About</title>;
