<template>
  <div class="flex flex-col bg-gray-300 min-h-screen h-full min-w-screen w-full  items-center ">
    <div class="flex h-full max-w-[1200px] min-w-[1200px] flex-col items-center mx-auto bg-gray-300 grow">
      <top-ter />
      <router-view   id="cjss" class="w-full h-full grow  max-w-[1200px] min-w-[1200px]" />
    </div>
  </div>
</template>
  

<script>
// Import thành phần (components) NavBar, SideBar, FooterBar để sử dụng
import HeaDer from '@/components/HeaDer.vue'
import FooTer from '@/components/FooTer.vue'
import TopTer from '@/components/TopTer.vue'

import { useCounterStore } from '@/stores/counter';


// Để sử dụng được các thẻ (tag) của các component tương ứng
// <nav-bar />     -> component NavBar
// <side-bar />    -> component SideBar
// <footer-bar />  -> component FooterBar
// Chúng ta phải khai báo trong thuộc tính `components` của phần export default {}
export default {
  setup() {
    const counter = useCounterStore();
    return { counter }
  },
  mounted: function () {
    // this.F_all_user();
  },
  methods: {
    // async F_all_user(){
    //   await this.counter.keep_login();
    // }
  },
  components: {
    HeaDer,
    FooTer,
    TopTer,
  }
}
</script>
  
<style>
body::-webkit-scrollbar {
  width: 14px;
  /* Chiều rộng vùng chứa scrollbar */
}

body::-webkit-scrollbar-track {
  background: #E5E7EB;
  /* Màu nền ngoài của thanh scrollbar */
}

body::-webkit-scrollbar-thumb {
  background-color: #bcbcbc;
  /* Màu của thanh cuộn (scroll thumb) */
  border-radius: 5px;
  /* Bo góc scroll thumb */
  /* border: 2px solid #ccc;  Không hỗ trợ padding, margin, transition nên dùng viền cùng màu nên để padding scroll thumb */
}

body::-webkit-scrollbar-thumb:hover {
  background-color: #bcbcbc;
  /* Hiệu ứng di chuột đổi màu*/
}

#slider2::-webkit-scrollbar {
  width: 6px;
  /* Chiều rộng vùng chứa scrollbar */
}

#slider2::-webkit-scrollbar-track {
  background: #F3F4F6;
  /* Màu nền ngoài của thanh scrollbar */
}

#slider2::-webkit-scrollbar-thumb {
  background-color: v-bind(cvb);
  /* Màu của thanh cuộn (scroll thumb) */
  border-radius: 5px;
  /* Bo góc scroll thumb */
  /* border: 2px solid #ccc;  Không hỗ trợ padding, margin, transition nên dùng viền cùng màu nên để padding scroll thumb */ 
}

#cjss::-webkit-scrollbar {
  width: 5px;
  height: 8px;               /* Chiều rộng vùng chứa scrollbar */
}
#cjss::-webkit-scrollbar-track {
  background: #e0f2fe;        /* Màu nền ngoài của thanh scrollbar */
}
#cjss::-webkit-scrollbar-thumb {
  background-color: #7dd3fc;    /* Màu của thanh cuộn (scroll thumb) */
  border-radius: 5px;       /* Bo góc scroll thumb */
  /* border: 2px solid #ccc;  Không hỗ trợ padding, margin, transition nên dùng viền cùng màu nên để padding scroll thumb */
}
#cjss::-webkit-scrollbar-thumb:hover {
    background-color: #e0f2fe; /* Hiệu ứng di chuột đổi màu*/
}
</style>
