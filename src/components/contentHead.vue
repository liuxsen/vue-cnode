<template>
	<div class='head'>
		<!-- icon -->
		<div class="icon" @click="toggoleBar">icon</div>
		<!-- 当前路由 -->
		<div>最新</div>
		<div class="edit">编辑</div>
		{{count}}
	</div>
</template>

<script>
export default {

  name: 'contentHead',

  data () {
    return {

    };
  },
  methods:{
  	toggoleBar:function(){
  		this.$store.commit('toggoleBar');
  	}
  },
  computed:{
  	count(){
  		console.log(this.$store.state.count);
  		return this.$store.state.count;
  	}
  }
};
</script>

<style lang="css" scoped>
	.head{
		padding: 10px;
		background: #333;
		color: #fff;
		font-size: 16px;
	}
	.head:after{
		content: '';
		display: block;
		clear: both;
	}
	.head div{
		float: left;
	}
	.icon{
		margin-right: 30px;
	}
	.head .edit{
		float: right;
	}

</style>