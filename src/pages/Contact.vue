<template>
    <section class="py-20 px-4 max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-center text-blue-700">Contact Us</h1>
        <form class="mt-8 space-y-4">
            <input type="text" placeholder="Your Name"
                class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300" />
            <input type="email" placeholder="Your Email"
                class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300" />
            <textarea rows="5" placeholder="Your Message"
                class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"></textarea>
            <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send
                Message</button>
        </form>
    </section>
</template>