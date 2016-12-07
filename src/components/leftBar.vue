<template>
		<div class="header" :class="{active: openBar}">
			<p>
				这里是cnodejs的logo
			</p>
			<ul class="content" @click="animate">
				<router-link to="/login"><li>登陆</li></router-link>
				<router-link to="/bankuai"><li>板块</li></router-link>
				<router-link to="/xin"><li>最新</li></router-link>
				<router-link to="/share"><li>分享</li></router-link>
				<router-link to="/action"><li>问答</li></router-link>
				<router-link to="/zhaopin"><li>招聘</li></router-link>
				<router-link to="/athor"><li>其他</li></router-link>
				<router-link to="/setting"><li>设置</li></router-link>
			</ul>
			<!-- github登陆 -->
			<div id="githubLogin">
				github登陆
			</div>
		</div>
</template>

<script>
export default {

  name: 'leftBar',

  data () {
    return {
    	hide: false
    };
  },
  methods:{
  	animate:function(){
  		this.$store.commit('toggoleBar');
  	}
  },
  computed:{
  	openBar(){
  		return this.$store.state.openBar;
  	}
  }
};
</script>

<style lang="css" scoped>
.header{
	position: absolute;
	left: -80%;
	top: 0;
	width: 80%;
	height: 100%;
	border: 1px solid red;
	background-color: #eee;
	transition: ease-in all .5s;
}
.header.active{
	left: 0;
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