import Vue from 'vue'
<template>
  <div class="MainBounty">
    <div class="title">{{$t("Boundy.title")}}</div>
    <div class="subtitle">{{$t("Boundy.subtitle")}}</div>
    <div class="content clearfix">
      <div class="item1 left">
        <div class="item1_title">{{$t("Boundy.left_title")}}</div>
        <div class="item1_subtitle">
          <div class="icon left"></div>
          <div class="item1_sub_describe left">{{$t("Boundy.left_subtitle")}}</div>  
        </div>
        <div class="item1_contain clearfix">
          <div class = "item1_contain_left left ">
            <div class="item1_contain_left_row1 clearfix">
              <div class="item1_contain_left_row1_1 left">{{$t("Boundy.text_left_1_1")}}</div>
              <div class="item1_contain_left_row1_2 left">100</div>
              <div class="item1_contain_left_row1_3 left">{{$t("Boundy.text_left_1_2")}}</div>
            </div>
            <div class="item1_contain_left_row2">{{$t("Boundy.text_left_2_1")}}</div>
          </div>
          <div class = "item1_contain_mid left">+</div>
          <div class = "item1_contain_right left">
            <div class="item1_contain_right_row1 clearfix">
              <div class="item1_contain_right_row1_1 left">{{$t("Boundy.text_left_1_3")}}</div>
              <div class="item1_contain_right_row1_2 left">30</div>
              <div class="item1_contain_right_row1_3 left">{{$t("Boundy.text_left_1_4")}}</div>
            </div>
            <div class="item1_contain_right_row2">{{$t("Boundy.text_left_2_2")}}</div>
            <div class="item1_contain_right_row3"></div>
          </div>
        </div>
      </div>


      <div class="item2 left">
        <div class="item1_title">{{$t("Boundy.right_title")}}</div>
        <div class="item1_subtitle">
          <div class="icon left"></div>
          <div class="item1_sub_describe left">{{$t("Boundy.right_subtitle")}}</div>  
        </div>
        <div class="item1_contain clearfix">
          <div class = "item1_contain_left left ">
            <div class="item1_contain_left_row1 clearfix">
              <div class="item1_contain_left_row1_1 left">{{$t("Boundy.text_right_1_1")}}</div>
              <div class="item1_contain_left_row1_2 left">100</div>
              <div class="item1_contain_left_row1_3 left">{{$t("Boundy.text_right_1_2")}}</div>
            </div>
            <div class="item1_contain_left_row2">{{$t("Boundy.text_right_2")}}</div>
          </div>
          <div class = "item1_contain_mid left">+</div>
          <div class = "item1_contain_right left">
            <div class="item2_contain_right_row1 clearfix">
              <div class="item2_contain_right_row1_1 left" >{{$t("Boundy.text_right_1_3")}}</div>
            </div>
            <div class="item1_contain_right_row3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
export default {
  name: 'MainBounty',
  computed:{
    test: function(n){
      //return ((n>3)?ranking[n-1][0]:'<div class=\''+''+'\'></div>')
      return "aaa";
    }
  },
  methods:{
     
  },
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../../styles/li.scss";
.MainBounty{
  background:rgba(249,250,253,1);
  margin-top:80px;
  padding-bottom: 80px;
}
.title{
  color:#17213C;
  font-size:30px;
  font-weight: 600;
  padding-top:80px;
  text-align: center;
  line-height: 54px;
}
.subtitle{
  color:#575960;
  margin-top:10px;
  font-size:18px;
  line-height: 20px;
  text-align: center;
}
.content{
  width:1100px;
  margin:0 auto;
  margin-top:50px;
}
.item1{
  width:535px;
  background:#ffffff;
  padding:30px;
  box-sizing: border-box;
}
.item1_title{
  font-size:24px;
  line-height:33px;
  color:#17213C;
  font-weight: 600;
  text-align: center;
}
.item1_subtitle{
  width:fit-content;
  height:50px;
  margin:0 auto;
}
.icon{
  height:50px;
  width:49px;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.2/dist/images/starfish/boundy_icon.png");
  background-size: 100% 100%;
}
.item1_sub_describe{
  color:#575960;
  font-size:16px;
  line-height:50px;
}
.item1_contain{
  
}
.item1_contain_left{
  height:120px;
  width:200px;
  border:1px dashed #D8D8D8;
  box-sizing: border-box;
}
$row_height:56px;
$small_font_size:16px;
$big_font_size:24px;
.item_small{
  color:#838690;
  font-size:$small_font_size;
  line-height: $small_font_size;
  padding-top:$row_height - $small_font_size;
  display:table-cell; 
  vertical-align:bottom;
  margin:0 10px;
}

.item_big{
  color:#17213C;
  font-size:$big_font_size;
  line-height: $big_font_size;
  font-weight: 600;
  padding-top:$row_height - $big_font_size;
}
.item1_contain_left_row1{
  width:fit-content;
  height:56px;
  
  margin:0 auto;
}
.item1_contain_left_row1_1{
  @extend .item_small;
}
.item1_contain_left_row1_2{
  @extend .item_big;
}
.item1_contain_left_row1_3{
  @extend .item_small;
}
.item1_contain_left_row2{
  color:#17213C;
  font-size:20px;
  line-height: 28px;
  margin-top:10px;
  text-align: center;
}
.item1_contain_mid{
  font-size:48px;
  line-height: 122px;
  font-weight: 800;
  margin: 0 22px;
}
.item1_contain_right{
  @extend .item1_contain_left;
}
.item1_contain_right_row1{@extend .item1_contain_left_row1;}
.item1_contain_right_row1_1{@extend .item1_contain_left_row1_1;}
.item1_contain_right_row1_2{@extend .item1_contain_left_row1_2;}
.item1_contain_right_row1_3{@extend .item1_contain_left_row1_3;}
.item1_contain_right_row2{@extend .item1_contain_left_row2;}
.item2{
  @extend .item1;
  margin-left:30px;
}
.item2_contain_right_row1{
  padding-top:16px;
}

.item2_contain_right_row1_1{
  text-align: center;
  font-size:20px;
  width: 100%;
  height: 100px;
  padding:16px;
  box-sizing: border-box;

}
</style>
