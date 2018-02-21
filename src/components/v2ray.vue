<template>
<el-row>
  <el-col :xs="0" :sm="2" :md="6" :lg="6" :xl="8">
      <br>
      <div>
      </div></el-col>
  <el-col :xs="24" :sm="22" :md="12" :lg="12" :xl="8">
      <div class="bg">
          <div class="head">
              <p>V2RAY</p>
          </div> 
            <div class="miao"> 
                <p>请拿手机加速软件扫描此二维码</p>
            </div>
            <br>
            <a href="https://d-01.winudf.com/b/apk/Y29tLnYycmF5LmFuZ180MDAwMDgwX2M2ODhjY2Ew?_fn=djJyYXlOR192MC4zLjEwX2Fwa3B1cmUuY29tLmFwaw&_p=Y29tLnYycmF5LmFuZw&as=41bf689456a558e5e1acb11e3ded36e25a8d65a3&c=1%7CCOMMUNICATION&k=00cb96efa4eca7fc5a0845505b3235215a9119f6">下载安卓版本（v2rayNG）</a>
            <br>
            <br>
            <a href="https://itunes.apple.com/hk/app/shadowrocket/id932747118?mt=8">下载iOS版本（ShadowRocket）</a>
          <div class="qr">
              <qrcode-vue :value="msg" :size="400" level="H"></qrcode-vue>
             
          </div>     
           <el-switch 
                @change="change"           
                style="display: block"
                v-model="value"
                active-color="#13ce66"
                inactive-color="#13ce66"
                active-value="RocketQR"
                inactive-value="QR"
                active-text="iOS"
                inactive-text="Android">
              </el-switch>
      </div></el-col>
  <el-col :xs="0" :sm="2" :md="6" :lg="6" :xl="8"><div></div>
  </el-col>
</el-row>
</template>

<script>
import QrcodeVue from 'qrcode.vue';

export default {
  name: 'v2ray',
  data() {
      return{
          msg: '',
          value: 'RocketQR',
          url: 'http://47.88.229.101:8889/v2ray/'
      }
  },
  mounted(){
    this.$http.get(this.url + this.value).then((response) =>{
          this.msg = response.data
          console.log(this.msg)
        }).catch(function (error){
          console.log(error);
        })
  },
  methods:{
      change: function(){
         this.$http.get(this.url + this.value).then((response) =>{
          this.msg = response.data
          console.log(this.msg)
        }).catch(function (error){
          console.log(error);
        })
      }
  },
   components: {
    QrcodeVue
  }

}
</script>

<style scoped>
.head{
    margin: 8%;
    padding: 7%;
    font-size: 500%;
    text-align: center;
    border-radius: 60px;
    color: #F41F25;
    letter-spacing: 6px;
    font-family: Helvetica;
    font-weight: 200;
    background-image: url(../assets/wall.jpg)

}
p{
    margin: 0%;
}
.qr{
    padding: 5%;
    display: flex;
     justify-content: center;
    align-items: center;
    
}
.miao{
    text-align: center;
    font-size: 150%;
    color: darkcyan
}
a{
    font-size: 16px;
    color: #13ce66;
    text-decoration: none;
}
.bg{
    text-align: center

}


</style>


