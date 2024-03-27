import { defineStore } from 'pinia';

import axios from 'axios';
import VueCookies from 'vue-cookies'
import { fa0 } from '@fortawesome/free-solid-svg-icons';

import { useRoute } from 'vue-router';
const Route = useRoute();


export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      // domain_Backend: 'http://127.0.0.1:8000',
      domain_Backend: 'https://xmdt.store',
      domain_Frontend: '', Path_Route: useRoute(),

      // Social///////////////////////
      Table_Lg_Rg: 0, Form_Lg_R: true, Lg: { username: '', password: '' }, Rg: { username: '', email: '', password: '', confirm_password: '' },
      openthongtincanhan: { id: '', username: '', email: '', password: '', token: '' }, Error_Lg: { so: 1, thong_bao: '' }, Error_Rg: { so: 1, thong_bao: '' }, Rg_TC: 1, Show_DD_image: false,
      Profile: { id: '', Date_of_birth: '', Address: '', Avatar: '' }, Edit_Profile: { so: 1, Date_of_birth: '', Address: '', Phone_number: '' }, Edit_Post: { so: 1, Date_of_birth: '', Address: '' }, Data_Image: '', SL_F: 0,
      Create_Post: { Content: '' }, examplee: '', list_user_post: '', show_delete: '', list_post_home: '', search_friend: '', list_search_friend: '',
      all_comments: 0, body_comment: '', show_delete_comment: 0, s_d_p: 0, show_image_inset: 0, Hair: 1, Select_Hair: 0, show_delete_post: 0, Scan_Hair: 0, change_password: { so: 0, thong_bao: '' },
      matkhaucu: '', matkhaumoi: '', tentaikhoan: '', show_change_password: 1, Image_base64: '', Loading: 1, Image_Text: null, xacnhan: 1,

      /////////////////////////////////////////////////////////////////////////
      dinh_co: 'SLOC', Size: '', SSD: { 'PREC': 1.15, 'FLEX': 1, 'RESL': 1, 'TEAM': 1, 'PMAT': 1 }, Chi_phi: '', EAF: 1,
      SCD: { 'RELY': 1.00, 'DATA': 1.00, 'CPLX': 1.00, 'RUSE': 1.00, 'DOCU': 1.00, 'ACAP': 1.00, 'PCAP': 1.00, 'PCON': 1.00, 'APEX': 1.00, 'PLEX': 1.00, 'LTEX': 1.00, 'PVOL': 1.00, 'TOOL': 1.00, 'SITE': 1.00, 'SCED': 1.00, 'STOR': 1.00, 'TIME': 1.00 },
      Data_Calculate: '', History_Calculate: [], Error_Tab: { so: 0, thongbao: '' },
      ////////////////////////////////////////////////////////////////////////
      Search:'',Data_Search:[],Data_Device_list:[],Device_table:1,If_device:{Name:'',Species:'',Code:''},list_delete:[],BTB:'',list_select:[], data_list_select:[],textInput:'',model_list_all:[],model_Name:'',
      time_start:'',time_end:'',test_score:'',data_dathi:'',check_model:1,check_dathi:1,Ten_SV:'',Lop_SV:'',data_device:{Species:'',Code:'',Name:'',Button:''},Camera:1,Image_Base64:'',Data_Feeling:'',bang_luu:'',MSV:'',
      mach_dau_noi:'',kt_mach:'',
      data_GG:'',
      data_xlsx:{'status':'','path':''},
      data_mach_dau_noi:'',
      /////////////////////////////////////////////////// Kim _ Tung
      name_data_group:'',
      data_data_group:[],
      hide_table_upload:false,
      data_data_file:[],
      hide_table_data_text_show:false,
      data_text_show:'',
      filter_text:'',
      search_text:'',
      filter_text_chat:'',
      name_text_chat:'',
      hide_table_login:true,
      question:'',
      data_question:{},

      data_export_mail:'',
      data_export_inbox:[],
      mail_get_new:null,
      mail_get_available:'',
      mail_inbox:'',
      loading_get_mail:false,
      table_inbox:false,
      mail_get_search:null,
    }
  },

  getters: {
    // cookievalue: (state) => state.openthongtincanhan.token + "(Theta)" + state.openthongtincanhan.id,
  },

  actions: {
    async F_GG() {
      // const clientId = '366857870591-45jgsqrgnksiaaboqt4m3a6k9egf0he8.apps.googleusercontent.com'; // Thay YOUR_GOOGLE_CLIENT_ID bằng Client ID của bạn
      // const redirectUri = 'http://127.0.0.1:8000/'; // Thay http://localhost:8000/ bằng Redirect URI của bạn
      // const scope = 'openid profile email';
      // const responseType = 'code';
      // const authUrl = 'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount';

      // // Tạo URL xác thực
      // const authUrlWithParams = `${authUrl}?response_type=${responseType}&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;

      // // Sử dụng authUrlWithParams để chuyển hướng người dùng
      window.location.href = 'https://play.google.com/log?format=json&hasfast=true&authuser=0';
      },
    async dangnhaptaikhoanvataocookie() {
      try {
        this.openthongtincanhan = await axios({ method: 'post', url: this.domain_Backend + '/login', data: { "username": this.Lg.username, "password": this.Lg.password } });
        this.openthongtincanhan = this.openthongtincanhan.data;
        VueCookies.set("Lg_T", this.openthongtincanhan.token + "eab42d241cad8d" + this.openthongtincanhan.id, "7d");
        this.Table_Lg_Rg = 2;
        VueCookies.set("Tab_Lg_T", 2, "365d");
        this.Information_Member();
      }
      catch (error) {
        this.Error_Lg.so = 2;
        this.Error_Lg.thong_bao = error.response.data['Error message English'];
      }

    },
    async keep_login() {
      try {
        this.openthongtincanhan.id = await VueCookies.get("Lg_T").split('eab42d241cad8d')[1];
        this.openthongtincanhan.token = await VueCookies.get("Lg_T").split('eab42d241cad8d')[0];
      }
      catch {
        this.openthongtincanhan = { id: '', username: '', email: '', password: '', token: '' };
        this.Table_Lg_Rg = 1;
      }
      if (this.openthongtincanhan.token != '') {
        try {
          // this.Table_Lg_Rg = 2;
          this.openthongtincanhan = await axios({ method: 'post', url: this.domain_Backend + '/keeplogin', data: { "id": this.openthongtincanhan.id, "token": this.openthongtincanhan.token }, headers: { Authorization: 'Token ' + this.openthongtincanhan.token } });
          this.Table_Lg_Rg = 2;
          this.openthongtincanhan = this.openthongtincanhan.data;
        }
        catch {
          this.openthongtincanhan = { id: '', username: '', email: '', password: '', token: '' };
          this.Table_Lg_Rg = 1;
        }
      }
    },
    async dangxuattaikhoan() {
      await axios({ method: 'post', url: this.domain_Backend + '/user/auth/logout/', headers: { Authorization: 'Token ' + this.openthongtincanhan.token } });
      this.Table_Lg_Rg = 1;
      VueCookies.set("Tab_Lg_T", 1, "365d");
      VueCookies.remove("Lg_T");
      this.counter.Lg={ username: '', password: '' };
    },
    async dangkitaikhoan() {
      try {
        await axios({ method: 'post', url: this.domain_Backend + '/register', data: { "email": this.Rg.email, "username": this.Rg.username, "password": this.Rg.password, "confirm_password": this.Rg.confirm_password } });
        this.Rg_TC = 2;
        this.Error_Rg.so = 1;
        this.Error_Rg.thong_bao = 'Successful account registration';
        this.Rg = { username: '', email: '', password: '', confirm_password: '' };
      }
      catch (error) {
        this.Error_Rg.so = 2;
        this.Rg_TC = 1;
        this.Error_Rg.thong_bao = error.response.data['Error message English'];
      }
    },
    async F_change_password() {
      try {
        this.change_password = await axios({ method: 'patch', url: this.domain_Backend + '/changepassword/', data: { "username": this.tentaikhoan, "password": this.matkhaucu, 'new_password': this.matkhaumoi } });
        this.change_password = { so: 2, thong_bao: this.change_password.data['Update information English'] };
      }
      catch (error) {
        this.change_password = { so: 1, thong_bao: error.response.data['Error message English'] };
      }
    },
    async F_Export_mail_new() {
      this.loading_get_mail = true;
      this.data_export_mail = await axios({ method: 'get', url: this.domain_Backend + '/export-mail/'});
      this.data_export_mail = this.data_export_mail.data;
      this.mail_get_new = this.data_export_mail.mail;
      this.mail_inbox = this.mail_get_new;
      await this.F_Export_inbox();
    },
    async F_Export_mail_available() {
      this.data_export_mail = await axios({ method: 'get', url: this.domain_Backend + '/export-mail/'});
      this.data_export_mail = this.data_export_mail.data;
      this.mail_get_available = this.data_export_mail.mail;
    },
    async F_Export_inbox() {
      this.data_export_inbox = await axios({ method: 'post',data:{mail:this.mail_inbox}, url: this.domain_Backend + '/export-inbox/'});
      this.data_export_inbox = this.data_export_inbox.data;
      this.data_export_inbox = this.data_export_inbox.data_inbox;
      setTimeout(this.F_Export_inbox, 2000);
    },
    async F_Export_inbox_available() {
      this.mail_inbox = this.mail_get_available;
      await this.F_Export_inbox();
      // setTimeout(this.F_Export_inbox_available, 3000);
    },
    async F_Export_inbox_mail_search() {
      this.mail_inbox = this.mail_get_search;
      this.mail_get_search = null;
      await this.F_Export_inbox();
      // setTimeout(this.F_Export_inbox_available, 3000);
    },


    
  }
})


