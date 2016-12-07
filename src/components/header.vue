<template>
	<transition
		name="custom-classes-transition"
	    enter-active-class="animated bounceInLeft"
	    leave-active-class="animated bounceInLeft">
		<div v-show="hide" class="header">
			<p>
				这里是cnodejs的logo
			</p>
			<ul class="content" @click="animate">
				<li>登陆</li>
				<li>板块</li>
				<li>最新</li>
				<li>分享</li>
				<li>问答</li>
				<li>招聘</li>
				<li>其他</li>
				<li>设置</li>
			</ul>
			<!-- github登陆 -->
			<div id="githubLogin">
				github登陆
			</div>
		</div>
	</transition>
</template>

<script>
export default {

  name: 'header',

  data () {
    return {
    	hide: false
    };
  },
  methods:{
  	animate:function(){
  		this.hide = show;
  	}
  }
};
</script>

<style lang="css" scoped>
.header{
	position: absolute;
	left: 0;
	top: 0;
	width: 80%;
	height: 100%;
	border: 1px solid red;
}
.content li{
	border-bottom: 1px solid #aaa;
	color: #333;
	font-size: 14px;
	padding: 10px;
}
#githubLogin{
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 10px;
}
</style>