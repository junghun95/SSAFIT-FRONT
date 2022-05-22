<template>
    <div class="board-view">
        <div class="d-flex md 4">
            <div>
                <div>
                    <v-btn :to="{ name: 'boardList' }" text>
                        <span class="mr-0">게시글</span>
                    </v-btn>
                </div>
                <div>
                    <v-btn :to="{ name: 'boardList' }" text>
                        <span class="mr-0">게시글2</span>
                    </v-btn>
                </div>
            </div>
            <div class="flex-grow-1">
                <router-view />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BoardView',

}
</script>
<style>
</style>