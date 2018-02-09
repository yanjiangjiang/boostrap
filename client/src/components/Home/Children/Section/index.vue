<template>
  <div class="section-box">     
           <div class="section-image">
               <h4>他们已入驻，你呢？</h4>   
               <ul class="row justify-content-md-center">
                   <li class="col-4 col-md-1"><img src="../../../../../static/1.png" alt=""></li>
                   <li class="col-4 col-md-1"><img src="../../../../../static/2.png" alt=""></li>
                   <li class="col-4 col-md-1"><img src="../../../../../static/3.png" alt=""></li>
                   <li class="col-4 col-md-1"><img src="../../../../../static/4.png" alt=""></li>
                   <li class="col-4 col-md-1"><img src="../../../../../static/5.png" alt=""></li>
                   <li class="col-4 col-md-1"><img src="../../../../../static/6.png" alt=""></li>
                   <li class="col-4 col-md-1"><img src="../../../../../static/7.png" alt=""></li>
                   <li class="col-4 col-md-1"><img src="../../../../../static/8.png" alt=""></li>
                  <li class="col-4 col-md-1"><img src="../../../../../static/8.png" alt=""></li>
               </ul>
           </div>
           <div class="section-banner">
               <ul class="row justify-content-md-center">
                   <li class="col-12 col-md-4">
                       <img src="../../../../../static/t.png" alt="">
                   </li>
                   <li class="col-12 col-md-4">
                       <img src="../../../../../static/z.png" alt="">
                   </li>
                   <li class="col-12 col-md-4">
                       <img src="../../../../../static/b.png" alt="">
                   </li>
               </ul>
           </div>
  </div>
</template>
<script>
export default {
  name: "Section"
};
</script>
<style scoped>
ul {
  list-style: none;
}
.section-image {
  padding: 30px 0;
  background: #eff4f7;
}
.section-image ul li img {
  width: 100px;
  height: 100px;
}
.section-banner {
  width: 100%;
  height: auto;
  background: #ebeef2;
}
.section-banner ul li img {
  width: 350px;
  height: 350px;
}
</style>
