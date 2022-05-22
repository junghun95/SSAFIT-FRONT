<template>
    <div class="board-detail">
        <div>
            <div>
                <h2>{{ getBoard.title }}</h2>
            </div>
            <div>
                {{ getBoard.writer }}
                <span>&nbsp;·&nbsp;</span>
                {{ getBoard.regDate }}
            </div>
        </div>
        <hr>
        <br>
        <div>{{ getBoard.content }}</div>
        <br>
        <div>
            <v-btn icon color="pink">
                <LikeIcon></LikeIcon>
            </v-btn>
            {{ getBoard.likes }}
            <CommentIcon></CommentIcon> {{ getBoard.comments }}
        </div>
        <hr>
        <Comment></Comment>
        <input type="text" v-model="comment"/>
        <v-btn>등록</v-btn>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import LikeIcon from '../icons/LikeIcon.vue'
import CommentIcon from '../icons/CommentIcon.vue'
import Comment from '../comment/Comment.vue';
export default {
    name: 'BoardDetail',
    components: { LikeIcon, CommentIcon, Comment },
    props: {
        id: Int32Array
    },
    data(){
        return{
            comment: "",
        }
    },
    function:{

    },
    computed: {
        ...mapGetters([
            'getBoard',
        ]),

    },
    created() {
        this.$store.dispatch('getBoard', this.id);
    }
}
</script>
<style>
.board-detail {
    padding: 10px 10px 10px 10px;
    margin: 10px 10px 10px 10px;
}
</style>