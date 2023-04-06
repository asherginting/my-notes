<template>
  <div>
    <div class="flex justify-between py-4 px-6 bg-white border-b-2 border-black">
      <div class="font-bold text-3xl">
        My Notes
      </div>
      <form class="search-container">
        <div class="search-input-container">
          <svg
            class="search-icon"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            class="search-input px-4 py-2 border border-slate-950 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text"
          >
        </div>
      </form>
    </div>

    <div>
      <button class="button-tambah bg-black text-white py-2 px-4 rounded ml-4">
        +
      </button>
    </div>

    <div class="container mx-auto my-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div class="rounded-md overflow-hidden border-2 border-slate-400">
          <div class="p-4">
            <div
              class="flex justify-between"
            >
              <h2
                class="
              text-xl
              font-semibold
              mb-2"
              >
                Note Title
              </h2>
              <svg
                class="delete-icon"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </div>
            <p class="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div class="rounded-md overflow-hidden border-2 border-slate-400">
          <div class="p-4">
            <div
              class="flex justify-between"
            >
              <h2
                class="
              text-xl
              font-semibold
              mb-2"
              >
                Note Title
              </h2>
              <svg
                class="delete-icon"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </div>
            <p class="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
.button-tambah {
  position: absolute;
  right: 1rem;
  top: 30rem;
}

.search-input-container {
  display: flex;
  align-items: center;
  position: relative;
}

.search-icon {
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  left: 0.5rem;
}

.search-input {
  padding-left: 2.5rem;
  border-radius: 2rem;
  width: 300px;
}

.delete-icon {
  width: 1.5rem;
  height: 1.5rem;
}

</style>
