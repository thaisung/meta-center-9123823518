<template>
    <div class="flex  w-full h-full bg-gray-100 ">
        <div class="bg-gray-200 w-[400px] min-h-full px-2 py-2 flex flex-col items-center">
          <div class=" flex flex-col items-center  w-full  border-gray-300  py-2 gap-2">
              <div class="flex justify-between items-center bg-gray-300 px-2 py-1 rounded-full h-[32px] w-full">
                  <input v-model="counter.search_text" type="text" placeholder="Tìm kiếm tài liệu" class="border-none outline-none bg-transparent"/>
                  <svg v-on:click="counter.F_Search_data_file();" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer"  height="24" viewBox="0 0 24 24" width="24" ><path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>
              </div>
              <div class="flex justify-between items-center bg-gray-300 px-2 py-1 rounded-full h-[32px] w-full">
                  <select @change="counter.name_text_chat=''" v-model="counter.filter_text_chat" class="bg-transparent border-none outline-none w-full">
                  <option value="">Chọn nhóm dữ liệu để Chat</option>
                  <option v-for="(i,index) in counter.data_data_group" :value="i.Name">{{ index+1 }} - {{ i.Name }}</option>
                  </select>
              </div>
          </div>
          <div class="overflow-x-auto w-full ">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Tên tài liệu
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Nhóm
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-on:click="counter.filter_text_chat=''; counter.name_text_chat=i.Name" v-for="(i,index) in counter.data_data_file" :class="{'border-[2px] border-green-600':counter.name_text_chat===i.Name}" class="odd:bg-white cursor-pointer hover:bg-gray-200 hover:border-gray-600 hover:border-[1px] odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800  dark:border-gray-700">
                                <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ i.Name }}
                                </th>
                                <td class="px-6 py-4">
                                  {{ i.Belong_Group.Name }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
          <!-- <button class="bg-gray-800 rounded px-2 py-1 mt-2 w-full font-bold text-gray-100">Áp dụng</button> -->
          <div class="flex flex-col justify-center items-center mt-2 bg-gray-900 w-full  py-2">
            <p class="text-[18px] font-bold text-gray-200">Dữ liệu dùng để chat</p>
            <div class="flex flex-col justify-center items-center text-[16px] font-medium text-lime-600">
              <div v-if="counter.name_text_chat==='' && counter.filter_text_chat===''" class="flex justify-center items-center gap-2">
                <p>Tất cả tài liệu trong hệ thống</p>
              </div>
              <div v-if="counter.name_text_chat" v-on:click="counter.name_text_chat=''" class="flex justify-center items-center gap-2">
                <p>Tài liệu : {{ counter.name_text_chat }}</p>
                <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16">
                  <path fill="#65a30d" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                </svg>
              </div>
              <div v-if="counter.filter_text_chat" v-on:click="counter.filter_text_chat=''" class="flex justify-center items-center gap-2">
                <p >Nhóm tài liệu : {{ counter.filter_text_chat }}</p>
                <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16">
                  <path fill="#65a30d" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col bg-gray-100 w-full min-h-full border-l-[1px] border-gray-300">
            <div class=" flex flex-col gap-2 w-full h-full  border-t-[1px] border-gray-300 px-2 py-2" >
                <div class="flex flex-col  w-full   px-2 py-2">
                  <div class="flex gap-1 justify-end mb-2">
                    <div class="bg-gray-200 border-[1px] border-gray-300 px-2 py-1  rounded rounded-br-none">
                        Keo con ong là j
                    </div>
                  </div>
                  <div class="flex gap-1">
                      <img src="https://cdn-icons-png.flaticon.com/128/7476/7476308.png" loading="lazy" alt="Chatbot " title="Chatbot " width="36" height="36">
                      <div class="bg-gray-200 border-[1px] border-gray-300 px-2 py-1  rounded rounded-bl-none">
                          Keo con ong là keo con chứ sao
                      </div>
                  </div>
                </div>
                <div class="flex flex-col  w-full  px-2 py-2">
                  <div class="flex gap-1 justify-end mb-2">
                    <div class="bg-gray-200 border-[1px] border-gray-300 px-2 py-1  rounded rounded-br-none">
                        Keo con ong là j
                    </div>
                  </div>
                  <div class="flex gap-1">
                      <img src="https://cdn-icons-png.flaticon.com/128/7476/7476308.png" loading="lazy" alt="Chatbot " title="Chatbot " width="36" height="36">
                      <div class="bg-gray-200 border-[1px] border-gray-300 px-2 py-1  rounded rounded-bl-none">
                          Keo con ong là keo con chứ sao
                      </div>
                  </div>
                </div>
            </div>
            <div class=" flex items-center justify-between w-full h-[70px]  border-t-[1px] border-gray-300 px-2 py-2">
                <input v-model="counter.question" type="text" placeholder="Gửi câu hỏi ..." class="border-none outline-none bg-transparent w-full"/>
                <button v-on:click="counter.F_Question_BotAi()" class="bg-black w-[30px] h-[30px] rounded flex justify-center items-center" >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-white dark:text-black"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
            </div>
        </div>
    </div>
</template>  
  <script>
  import { useCounterStore } from "@/stores/counter";
  import axios from "axios";
  import VueCookies from "vue-cookies";
  
  export default {
    data() {
      return {
        url_image: [],
        url_image_inset: [{ id: 4, Image_post: "", post: 4 }],
        url_image_inset_one: "",
      };
    },
    setup() {
      const counter = useCounterStore();
      return { counter };
    },
    mounted: function () {
      this.counter.F_List_data_group();
      this.counter.F_List_data_file();
    },
    computed: {},
    methods: {},
    components: {},
  };
  </script>
  
  <style>
  #cjss::-webkit-scrollbar {
    width: 5px;
    height: 8px; /* Chiều rộng vùng chứa scrollbar */
  }
  #cjss::-webkit-scrollbar-track {
    background: #1f2937; /* Màu nền ngoài của thanh scrollbar */
  }
  #cjss::-webkit-scrollbar-thumb {
    background-color: #7dd3fc; /* Màu của thanh cuộn (scroll thumb) */
    border-radius: 1px; /* Bo góc scroll thumb */
    /* border: 2px solid #ccc;  Không hỗ trợ padding, margin, transition nên dùng viền cùng màu nên để padding scroll thumb */
  }
  #cjss::-webkit-scrollbar-thumb:hover {
    background-color: #e0f2fe; /* Hiệu ứng di chuột đổi màu*/
  }
  
  #cjss1::-webkit-scrollbar {
    width: 5px;
    height: 8px; /* Chiều rộng vùng chứa scrollbar */
  }
  #cjss1::-webkit-scrollbar-track {
    background: #393636; /* Màu nền ngoài của thanh scrollbar */
  }
  #cjss1::-webkit-scrollbar-thumb {
    background-color: #595857; /* Màu của thanh cuộn (scroll thumb) */
    border-radius: 1px; /* Bo góc scroll thumb */
    /* border: 2px solid #ccc;  Không hỗ trợ padding, margin, transition nên dùng viền cùng màu nên để padding scroll thumb */
  }
  #cjss1::-webkit-scrollbar-thumb:hover {
    background-color: #655f58; /* Hiệu ứng di chuột đổi màu*/
  }
  
  #video {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg); /* Safari and Chrome */
    -moz-transform: rotateY(180deg); /* Firefox */
  }
  </style>
  