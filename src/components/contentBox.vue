<template>
	<div class='contentBox'  :class="{moveRight: openBar}">
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
  },
  computed:{
    openBar(){
      return this.$store.getters.openBar;
    }
  }
};
</script>

<style lang="css" scoped>
.contentBox{
  position: relative;
  transition: ease-in .5s all;
  width: 100%;
}
.contentBox.moveRight{
    margin-left: 80%;
  }
</style>