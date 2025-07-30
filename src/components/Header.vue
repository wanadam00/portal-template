<template>
    <header class="bg-white shadow sticky top-0 z-50">
        <nav class="container mx-auto flex justify-between items-center py-4 px-6">
            <div class="flex items-center space-x-4">
                <!-- Mobile menu button (visible only on small screens) -->
                <button @click="toggleMobileMenu" class="md:hidden text-gray-700 focus:outline-none"
                    aria-label="Toggle menu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <h1 class="text-2xl font-bold text-blue-600">MyPortal</h1>
            </div>

            <!-- Desktop Navigation (hidden on mobile) -->
            <ul class="hidden md:flex space-x-6 font-medium text-gray-700">
                <li><router-link to="/" class="hover:text-blue-600 transition-colors">Home</router-link></li>
                <li><router-link to="/about" class="hover:text-blue-600 transition-colors">About</router-link></li>
                <li><router-link to="/services" class="hover:text-blue-600 transition-colors">Services</router-link>
                </li>
                <li><router-link to="/contact" class="hover:text-blue-600 transition-colors">Contact</router-link></li>
            </ul>
        </nav>

        <!-- Mobile Sidebar Modal -->
        <transition name="slide">
            <div v-if="isMobileMenuOpen" class="fixed inset-0 z-40 md:hidden">
                <!-- Overlay -->
                <div class="fixed inset-0 bg-black bg-opacity-50" @click="toggleMobileMenu"></div>

                <!-- Sidebar Content -->
                <div class="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
                    <div class="flex items-center justify-between p-4 border-b">
                        <h2 class="text-xl font-bold text-blue-600">Menu</h2>
                        <button @click="toggleMobileMenu" class="text-gray-500 hover:text-gray-700">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <ul class="py-4">
                        <li>
                            <router-link to="/" @click="toggleMobileMenu"
                                class="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/about" @click="toggleMobileMenu"
                                class="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                                About
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/services" @click="toggleMobileMenu"
                                class="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                                Services
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/contact" @click="toggleMobileMenu"
                                class="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                                Contact
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;

    // Toggle body scroll when menu is open
    if (isMobileMenuOpen.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};
</script>

<style scoped>
/* Slide transition for mobile menu */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}

/* Active route styling */
.router-link-active {
    @apply text-blue-600 font-semibold;
}
</style>