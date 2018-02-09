<template>
    <div class="header">
      <h4>饿了么</h4>
      <h2>让世界没有陌生的角落</h2>
      <div class="">
          <ul class="header-uls row justify-content-md-center">
                <li class="col-6 col-md-3">
                    <span><i style="font-size:50px;color:#f00">24</i><em>小时</em></span><br>
                    <b>急速开店</b>
                </li>
                <li class="col-6 col-md-3">
                    <span><i style="font-size:50px;color:#0f0">48</i><em>小时</em></span><br>
                    <b>急速开店</b>
                </li>
                <li class="col-6 col-md-3">
                    <span><i style="font-size:50px;color:blue">72</i><em>小时</em></span><br>
                    <b>急速开店</b>
                </li>
                <li class="col-6 col-md-3">
                    <span><i style="font-size:50px;color:#f00">124</i><em>小时</em></span><br>
                    <b>急速开店</b>
                </li>
            </ul>
      </div>
      <button type="button" class="btn btn-light"><router-link to="/message">我要开店</router-link></button>
    </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style scroped>
b,
i,
em {
  font-style: normal;
  list-style: none;
  font-weight: normal;
}
*{
    padding: 0;
    margin: 0;
}
.header {
  width: 100%;
  height: auto;
  background: url(http://image.youzhan.org/d/dd/2de797545de56274f03a5920eb3a1.jpg) no-repeat;
  box-sizing: border-box;
  color: #fff;
}
.header h2 {
  margin: 30px 0 !important;
}
.header ul {
  list-style: none;
}
.header ul li {
  margin: 50px 0;
}
.header-uls>li>span{
    white-space:nowrap
}

</style>


