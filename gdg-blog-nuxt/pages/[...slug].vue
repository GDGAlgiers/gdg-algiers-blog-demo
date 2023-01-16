<script setup>

const route = useRoute();
const slug = route.params.slug[0];

const res = await fetch(`https://blogs-api-cjly.onrender.com/blogs/${slug}`);
const post = await res.json();
</script>

<template>
    <Head>
      <Title>{{ post.title }} - GDG Blog</Title>
      <Meta name="description" :content="post.excerpt" />
    </Head>
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8">
      <div class="text-center">
        <h1 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          {{ post.title }}
        </h1>
      </div>
      <img :src="post.image" :alt="post.title" class="rounded my-8 mx-auto" />
      <div class="mb-4">Written by {{ post.author }}</div>
      <article class="pb-6 text-gray-700 text-lg" v-html="post.content" />
      <div class="block mt-4 mb-8 text-lg font-bold text-gray-800 hover:text-blue-800">
        <a href="/">Back to Home</a>
      </div>
    </div>
</template>
