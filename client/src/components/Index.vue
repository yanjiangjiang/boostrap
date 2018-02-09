<template>
    <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="getPath!='/login'" >
                <a class="navbar-brand" href="#">后台店铺管理</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="javascript:;"><router-link to="/home">主页</router-link><span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:;"><router-link to="/message">信息</router-link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="javascript:;"><router-link to="/apply">申请</router-link></a>
                            </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="搜索" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
                            </form>
                        </div>
            </nav>
            <div>
                <router-view></router-view>
            </div>
    </div>

</template>

<script>
export default {
  name: "Main",
  components: {},
    data(){
        return{
            flag:false
        }
    },
    computed:{
        getPath(){
            return this.$route.path
        }
    }
    
};
</script>
