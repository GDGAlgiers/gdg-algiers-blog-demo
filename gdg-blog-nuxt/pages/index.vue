<script setup>

const res = await fetch(`https://blogs-api-cjly.onrender.com/blogs/all`);
const posts = await res.json();
</script>


<template>
    <Head>
      <Title>GDG Blog</Title>
    </Head>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <a
            v-for="post in posts"
            :key="post._id"
            :href="post._id"
            class="overflow-hidden transition-shadow duration-300 bg-gray-200 rounded border hover:text-blue-700 cursor-pointer"
          >
            <img
            :src="post.image"
              class="object-cover w-full h-64"
              alt="{post.title}"
            />
            <div class="p-5">
              <div class="inline-block mb-3 text-2xl font-bold leading-8">
                {{ post.title }}
              </div>
              <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                <span class="text-blue-gray-900">{{ post.author }}</span>
              </p>
              <p class="mb-2 text-gray-700">{{ post.excerpt }}</p>
            </div>
          </a>
      </div>
    </div>
</template>