<template>
    <header class="bg-white shadow sticky top-0 z-50">
        <nav class="container mx-auto flex justify-between items-center py-4 px-6">
            <h1 class="text-2xl font-bold text-blue-600">MyPortal</h1>
            <ul class="hidden md:flex space-x-6 font-medium text-gray-700">
                <li><router-link to="/" class="hover:text-blue-600">Home</router-link></li>
                <li><router-link to="/about" class="hover:text-blue-600">About</router-link></li>
                <li><router-link to="/services" class="hover:text-blue-600">Services</router-link></li>
                <li><router-link to="/contact" class="hover:text-blue-600">Contact</router-link></li>
            </ul>
        </nav>
    </header>
</template>
