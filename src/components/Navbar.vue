<template>
  <nav class="bg-white border-b border-gray-200 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      <div class="text-xl font-bold text-blue-600">MyPortal</div>
      <div class="space-x-6 hidden md:flex">
        <RouterLink to="/" class="hover:text-blue-600">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-blue-600">About</RouterLink>
        <RouterLink to="/services" class="hover:text-blue-600">Services</RouterLink>
        <RouterLink to="/contact" class="hover:text-blue-600">Contact</RouterLink>
      </div>
    </div>
  </nav>
</template>
