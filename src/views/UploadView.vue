<template>
    <div class="flex relative  w-full h-full bg-gray-100 ">
        <div class="bg-gray-200 w-[400px] min-h-full flex flex-col gap-2 px-2 py-2">
            <div class="flex justify-between items-center bg-gray-300 px-2 py-1 rounded">
                <input  id="input_name"  v-model="counter.name_data_group" type="text" placeholder="Nhập tên nhóm dữ liệu" class="border-none outline-none bg-transparent bg-none"/>
                <div v-on:click="counter.F_Create_data_group();" class="px-1 py-1 bg-gray-700 rounded cursor-pointer" title="Thêm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14">
                    <path fill="white" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                  </svg>
                </div>
            </div>
            <div class="flex flex-col border-t-[1px] border-gray-500">
              <div v-for="(i, index) in counter.data_data_group" class="flex justify-between gap-1 items-center border-b-[1px] border-gray-500 py-2">
                  <div class="flex gap-1 font-bold text-[14px] w-full">
                    <p class="">{{index + 1}} - </p>
                    <input :value="i.Name"  @keydown.enter="counter.F_Update_data_group(i.id, $event.target.value); moveToNextInput();" type="text"  class="border-none outline-none bg-transparent grow"/>
                  </div>
                  <svg v-on:click="counter.F_Delete_data_group(i.id);" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20" title="Xóa">
                      <path fill="red" d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                  </svg>
              </div>
            </div>
            <button v-on:click="counter.hide_table_upload=true" class="bg-gray-800 rounded py-2 font-bold text-gray-100">Upload file</button>
            <div v-show="counter.hide_table_upload"  class="flex absolute inset-0 bg-opacity-50 bg-black  items-center justify-center w-full h-full">
                <div class="flex flex-col gap-4 relative cursor-pointer font-semibold items-center justify-center bg-gray-100 px-8 py-8">
                  <svg v-on:click="counter.hide_table_upload=false" class="absolute top-2 right-2" xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                  </svg>
                  <div class="flex w-full gap-1 items-center justify-between border-b-[1px] border-gray-500 py-2">
                    <p>Tên dữ liệu :</p>
                    <input id="ten_du_lieu" type="text"  class=" flex text-end justify-end rounded px-1 py-1  border-none  outline-none  grow font-medium bg-gray-100"/>
                  </div>
                  <div class="flex w-full gap-1 items-center justify-between border-b-[1px] border-gray-500 py-2 bg-transparent">
                    <p class="whitespace-nowrap">Nhóm dữ liệu :</p>
                    <div class="flex justify-between items-center bg-gray-300 px-2 py-1 rounded-full h-[32px] w-full font-medium">
                        <select id="nhom_du_lieu"  class="bg-transparent border-none outline-none w-full">
                        <option disabled value="">Chọn nhóm Dữ liệu</option>
                        <option v-for="(i,index) in counter.data_data_group" :value="i.Name">{{ index+1 }} - {{ i.Name }}</option>
                        </select>
                    </div>
                  </div>
                  <div class="flex w-full gap-1 items-center justify-between border-b-[1px] border-gray-500 py-2">
                    <p>File upload :</p>
                    <input id="file_upload" multiple="multiple" type="file" accept=".pdf, .xlsx, .docx, .txt"  class="border-none outline-none  grow font-medium"/>
                  </div>
                  <button v-on:click="F_Create_data_file();" class="bg-green-500 rounded px-2 py-1 mt-2">Thêm dữ liệu</button>
                </div>
            </div>
        </div>
        <div class="flex flex-col bg-gray-100 w-full min-h-full border-l-[1px] border-gray-300">
            <div class=" flex items-center  w-full h-[50px]  border-gray-300 px-2 py-2 gap-2">
                <div class="flex justify-between items-center bg-gray-300 px-2 py-1 rounded-full">
                    <input @keyup.enter="counter.F_Search_data_file();" v-model="counter.search_text" type="text" placeholder="Tìm kiếm tài liệu" class="border-none outline-none bg-transparent"/>
                    <svg v-on:click="counter.F_Search_data_file();" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer"  height="24" viewBox="0 0 24 24" width="24" ><path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>
                </div>
                <div class="flex justify-between items-center bg-gray-300 px-2 py-1 rounded-full h-[32px]">
                  <select v-model="counter.filter_text" @change="counter.F_Filter_data_file();" class="bg-transparent border-none outline-none">
                    <option value="">Tất cả</option>
                    <option v-for="(i, index) in counter.data_data_group" :value="i.Name" :key="index">{{ index + 1 }} - {{ i.Name }}</option>
                  </select>
                </div>
                <button v-on:click="counter.dangxuattaikhoan();" class="bg-green-500 rounded px-2 py-1 font-bold">Đăng xuất</button>
            </div>
            <div class=" w-full h-full  border-t-[1px] border-gray-300 px-2 py-2" >
                <div class="overflow-x-auto  ">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Tên tài liệu
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Nhóm
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Tên File
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ngày
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Chức năng
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(i,index) in counter.data_data_file" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ i.Name }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ i.Belong_Group.Name }}
                                </td>
                                <td v-on:click="counter.data_text_show=i.Text_data; counter.hide_table_data_text_show=true;" class="cursor-pointer underline underline-offset-4 px-6 py-4">
                                    {{ i.File }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ i.Creation_time }}
                                </td>
                                <td class="px-6 py-4">
                                    <img v-on:click="counter.F_Delete_data_file(i.id)" class="cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png" loading="lazy" alt="Bin " title="Xóa" width="28" height="28" >
                                </td>
                            </tr>
                        </tbody>
                        <div v-show="counter.hide_table_data_text_show"  class="flex absolute inset-0 bg-opacity-50 bg-black  items-center justify-center w-full h-full px-3 py-2">
                          <div class="flex flex-col gap-4 relative cursor-pointer font-semibold items-center justify-center bg-gray-100 px-8 py-8 w-full h-full">
                            <svg v-on:click="counter.hide_table_data_text_show=false" class="absolute top-2 right-2" xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 384 512">
                              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                            <textarea v-model="counter.data_text_show" class="w-full h-full text-[16px] font-medium px-1 py-1"></textarea>
                          </div>
                        </div>
                    </table>
                </div>
            </div>
        </div>
        <div v-show="counter.Table_Lg_Rg==1"  class="flex absolute inset-0  bg-white items-center justify-center w-full h-full">
          <div class="flex flex-col gap-4 relative border-[1px] border-gray-600 cursor-pointer font-semibold items-center justify-center bg-gray-100 px-8 py-8">
            <div class="flex w-full gap-1 items-center justify-between border-b-[1px] border-gray-500 py-2">
              <p>Tên tài khoản :</p>
              <input id="ten_du_lieu" v-model="counter.Lg.username" type="text"  class=" flex text-end justify-end rounded px-1 py-1  border-none  outline-none  grow font-medium bg-gray-100"/>
            </div>
            <div class="flex w-full gap-1 items-center justify-between border-b-[1px] border-gray-500 py-2">
              <p>Mật khẩu :</p>
              <input id="ten_du_lieu" v-model="counter.Lg.password" type="password"  class=" flex text-end justify-end rounded px-1 py-1  border-none  outline-none  grow font-medium bg-gray-100"/>
            </div>
            <button v-on:click="counter.dangnhaptaikhoanvataocookie();" class="bg-green-500 rounded px-2 py-1 mt-2">Đăng nhập</button>
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
    methods: {
      moveToNextInput() {
      const nextInput = document.getElementById('input_name');
      if (nextInput) {
        nextInput.focus();
      }
    },
    async F_Create_data_file() {
          if (!this.validateFields()) {
            return; // Stop execution if fields are not valid
        };
        const formData = new FormData();
        formData.append('ten_du_lieu', document.querySelector('#ten_du_lieu').value);
        formData.append('nhom_du_lieu', document.querySelector('#nhom_du_lieu').value);
        formData.append('file_upload', document.querySelector('#file_upload').files[0]);
        await axios({ method: 'post',data:formData,headers: {"content-type": "multipart/form-data"},url: this.counter.domain_Backend+'/data-file/' });
        this.counter.F_List_data_file();
        this.counter.hide_table_upload = !this.counter.hide_table_upload;
        document.querySelector('#ten_du_lieu').value = '';
        document.querySelector('#nhom_du_lieu').value = '';
        document.querySelector('#file_upload').value = null;
    },
    validateFields() {
          const tenDuLieu = document.querySelector('#ten_du_lieu').value;
          const nhomDuLieu = document.querySelector('#nhom_du_lieu').value;
          const fileUpload = document.querySelector('#file_upload').files[0];

          if (!tenDuLieu || !nhomDuLieu || !fileUpload) {
              // Display error message if any field is empty
              alert('Vui lòng nhập đầy đủ thông tin.');
              return false; // Fields are not valid
          }

          return true; // All fields are valid
      }
    },
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
  