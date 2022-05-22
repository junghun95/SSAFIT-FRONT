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
        <v-btn v-for="tag in getBoard.tags" :key="tag.id">{{ tag.name }}</v-btn>
        <br><br>
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
        <div>
            <Comment></Comment>
            <input type="text" v-model="comment" />
            <v-btn>등록</v-btn>
        </div>
        <div>
            <v-btn @click="pushModify">수정</v-btn>
            <v-btn @click="pushDelete">삭제</v-btn>
            <v-container>
                <v-btn @click="showModify" style="display:none;" ref="modify"></v-btn>

                <v-dialog persistent max-width="600" v-model="modify">
                    <MoDal header-title="수정" submit=1 submit-title="수정" hide-title="취소"
                         @hide="hideModify"
                        @submit="submitModify">
                        <template v-slot:body>
                            <v-container fluid>
                                <label>제목</label>
                                <v-text-field placeholder="제목을 입력하시오" v-model="title"/>
                                <label>작성자</label>
                                <div>{{ getBoard.writer }}</div>
                                <label>태그</label><br>
                                <v-btn v-for="tag in getBoard.tags" :key="tag.id">{{ tag.name }}</v-btn>
                                <div class="tag-insert"></div>
                                <input type="text" placeholder="태그를 입력하시오." />
                                <v-btn>+</v-btn>

                                <v-textarea counter row="20" label="내용" v-model="content"></v-textarea>
                            </v-container>
                        </template>
                    </MoDal>
                </v-dialog>
            </v-container>
            <v-container>
                <v-btn @click="showDelete" style="display:none;" ref="delete"></v-btn>

                <v-dialog persistent max-width="600" v-model="del">
                    <MoDal header-title="삭제" submit=1 submit-title="삭제" hide-title="취소" @hide="hideDelete"
                        @submit="submitDelete">
                        <template v-slot:body>
                            <span>정말 삭제하시겠습니까?</span>
                        </template>
                    </MoDal>
                </v-dialog>
            </v-container>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import LikeIcon from '../icons/LikeIcon.vue'
import CommentIcon from '../icons/CommentIcon.vue'
import Comment from '../comment/Comment.vue';
import MoDal from '@/components/util/MoDal.vue'
export default {
    name: 'BoardDetail',
    components: { LikeIcon, CommentIcon, Comment, MoDal },
    props: {
        id: Int32Array
    },
    data() {
        return {
            comment: "",
            modify: false,
            del: false,
            title:"",
            content:"",
        }
    },
    methods: {
        showModify() {
            this.modify = true;
        },
        hideModify() {
            this.modify = false;
        },
        submitModify() {
            console.log("submit");
            this.modify = false;
        },
        showDelete() {
            this.del = true;
        },
        hideDelete() {
            this.del = false;
        },
        submitDelete() {
            console.log("submit");
            this.del= false;
        },
        pushModify(){
            console.dir(this.$store.getters.getBoard);
            this.title=this.$store.getters.getBoard.title;
            this.content=this.$store.getters.getBoard.content;

            this.$refs.modify.$el.click();
        },
        pushDelete(){
            this.$refs.delete.$el.click();
        },
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