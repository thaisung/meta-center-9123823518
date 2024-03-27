<template>
    <div class="flex flex-col max-w-[1200px] w-full  items-center  bg-sky-400">
        <div  class="flex  w-full px-3 py-2 bg-gray-900 justify-between items-center border-gray-400 border-b-[1px]">
            <div class="flex gap-2 items-center text-[25px] font-bold">
                <router-link to='/'><img src="https://play-lh.googleusercontent.com/SQpgBJE02qLwhyniKeDPXvSxpnHM74Kv_9NEDqDyomHAT8lkZuNmGHqr7yFO337rlx3O" class="h-[60px]"/></router-link>
                <router-link to='/' ></router-link>
            </div>
        </div>
    </div>
</template>


<script >

    import { useCounterStore } from '@/stores/counter';
    import axios from 'axios';
    import VueCookies from 'vue-cookies'


    export default {

    setup() {
        const counter = useCounterStore();
        return {counter}
    },
    }
</script>


