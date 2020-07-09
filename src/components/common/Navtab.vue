<template>
    <div id="tabsNav" v-if="showTags">
        <ul class="nt-ul el-tabs__nav" id="tabsNavList">
            <li v-for="(item,index) in tagsList" :class="{'is-active':isActive(item.path)}" :key="index">
                <router-link :to="item.path" class="tags-li-title">
                    {{item.title}}
                </router-link>
                <i @click="closeTags(index)" class="el-tag__close el-icon-close"></i>
            </li>
        </ul>
    </div>
</template>
<script>
import bus from './bus'
export default {
    data(){
        return{
            tagsList:[],
            counter:'0'
        }
    },
    methods:{

    }
}
</script>
<style lang="">
    
</style>