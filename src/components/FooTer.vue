<template>
    <div @mouseover="cvb='#bcbcbc'" @mouseleave="cvb='#F3F4F6'" class="flex flex-col   max-h-screen max-w-[300px] min-w-[300px] mt-4  px-3 py-3 bg-gray-100 rounded   grow text-[14px] font-semibold  gap-3">
        <h1 class="text-[15px] border-b-[1px] border-gray-200 pb-2">Hệ thống đã phân tích và đưa ra mẫu tóc phù hợp cho bạn:</h1>
        <div id="slider" class="flex flex-col gap-3 overflow-auto border-b-[1px] border-gray-200 pb-3 ">
            <img v-for="i in counter.Data_Scan" v-on:click="counter.Image_Text=i.Image_post" :src="counter.domain_Backend+i.Image_post" :class="{'border-lime-500 border-[5px]':counter.Image_Text==i.Image_post}" class="cursor-pointer"/>
        </div>
        <div v-show="counter.xacnhan==2" class="flex justify-center items-center w-full"><h1 class="text-[16px] text-lime-600">Đã xác nhận mẫu tóc thành công</h1></div>
        <div v-show="counter.Image_Text!=null" class="flex justify-center items-center w-full mb-[68px]"><button v-on:click="F_FFF();" class="py-2 px-2 text-[16px] font-semibold bg-sky-500 rounded">Xác nhận mẫu tóc</button></div>
    </div>
</template>


<script>
    import { useCounterStore } from '@/stores/counter';
    import axios from 'axios';
    import VueCookies from 'vue-cookies'


    export default {
    data() {
        return {
            cvb:'#E5E7EB' ,
        }
    },
    setup() {
        const counter = useCounterStore();
        return {counter}
    },
    mounted: function () {
    },
    methods:{
        async Follow(aa){
            await this.counter.Follow_user(aa);
            this.counter.List_follow();
            this.counter.List_un_follow();
        },
        async F_FFF(){
            this.counter.xacnhan=1;
            await this.counter.F_add_hair();
            this.counter.F_user_hair();
            this.counter.xacnhan=2;
        },
    }
    }
</script>

<style>
#slider::-webkit-scrollbar {
  width: 6px;               /* Chiều rộng vùng chứa scrollbar */
}
#slider::-webkit-scrollbar-track {
  background: #F3F4F6;        /* Màu nền ngoài của thanh scrollbar */
}
#slider::-webkit-scrollbar-thumb {
  background-color: v-bind(cvb);    /* Màu của thanh cuộn (scroll thumb) */
  border-radius: 5px;       /* Bo góc scroll thumb */
  /* border: 2px solid #ccc;  Không hỗ trợ padding, margin, transition nên dùng viền cùng màu nên để padding scroll thumb */
}


</style>