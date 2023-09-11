<template>
    <div class="container px-4 py-20 mx-auto ">
        <div class="flex flex-col items-center text-center ">
            <h2 class="[font-size:var(--step-3)] md:[font-size:var(--step-5)] font-bold text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 bg-clip-text">Awesome Gradients Examples</h2>
        
            <p class="mt-4 text-gray-400 ">Choose from our ready-made Tailwind CSS gradients.</p>
        </div>

        
        <div class="grid grid-cols-1 gap-10 mt-12 md:grid-cols-2 xl:grid-cols-3">
            <div v-for="gradient in gradients" :key="gradient.title">
                <gradient-card :gradient="gradient" />
            </div>
        </div>
    </div>
</template>

<script>
import GradientCard from "./GradientCard.vue";

export default {
    name: 'Gradient Examples',

    props: ['gradients'],
    
    components: { GradientCard },
}
</script>