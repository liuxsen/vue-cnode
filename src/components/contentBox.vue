<template>
	<div>
		<content-head></content-head>
		 <!-- 路由匹配到的组件将渲染在这里 -->
  		<router-view></router-view>
	</div>
</template>

<script>
  import contentHead from './contentHead'
export default {

  name: 'content',
  components: {contentHead},
  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
</style>