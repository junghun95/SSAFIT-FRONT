<template>
    <div class="board-view">
        <div class="d-flex md 4">
            <div>
                <BoardNav></BoardNav>     
            </div>
            <div class="flex-grow-1">
                <router-view />
            </div>
        </div>
    </div>
</template>
<script>
import BoardNav from '@/components/board/BoardNav.vue'
export default {
    name: 'BoardView',
    components:{
        BoardNav,
    }
}
</script>
<style>
</style>