<template>
  <div>
    <!--<h1 class="subjectName">{{titleName}}</h1>-->
    <!--<div class="divide"></div>-->
    <div class="numList">
      <span class="questionNo" @click="locationQuestionNo(index)" v-for="(questionitem, index) in this.question">
        <span  class="questionNum" :class="{bgColor: questionitem.status}">{{questionitem.no}}</span>
      </span>
    </div>
    <div class="space"></div>
    <!--<div class="sheetSubmit" @click="submitPapers()">交卷</div>-->
    <div class="sheetSubmit">交卷</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Store from '../../store.js'
  import Beiyi from '../../common.js'
  export default {
    data () {
      return {
        showLoading: false
      }
    },
    created () {
      // 读取用户信息
      this.user = Store.fetch('user')
      // 从缓存读取题目列表
      this.question = Store.fetch('question')
      // 从缓存读取用户答案
      this.answer = Store.fetch('answer')
      // 从缓存读取试题名称
//      this.titleName = Store.fetch('tipName')
    },
    methods: {
      locationQuestionNo (index) {
        console.log(index)
        Store.save('questionno', index)
        this.$router.push({path: '/study/cuoti'})
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .subjectName
    padding: 20px 16px
    font-size 15px
    text-align center

  .numList
    width: 100%
    overflow: hidden
    .questionNo
      display block
      width: 20%
      float: left
      .questionNum
        display: block
        width: 30px
        height: 30px
        font-size 18px
        color: rgb(172, 169, 169)
        text-align: center
        line-height: 30px
        border-radius: 50%
        margin: 15px auto
        border: 1px solid rgb(172, 169, 169)
      .bgColor
        background-color rgb(242, 90, 41)
        color: #fff !important
        border: none !important
  .sheetSubmit
    position fixed
    bottom 0
    z-index 100
    width: 100%
    height: 55px
    line-height 55px
    text-align center
    font-size 16px
    background-color #fff
    color: #fff
</style>
