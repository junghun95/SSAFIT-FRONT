<template>
    <div class="board-list">
        <ul>
            <v-card v-for="board in getBoards" :key="board.id">
                <li class="board-list-li">
                    <router-link :to="{ name: 'boardDetail', params: { id: board.id } } " :id="`${board.id}`">
                        <div class="d-flex flex-column">
                            <div>
                                <h3>{{ board.title }}</h3>
                            </div>
                            <p>{{ board.content }}</p>
                            <div></div>
                            <div>
                                <span>{{ board.writer }}</span>
                                <span>&nbsp;·&nbsp;</span>
                                {{ board.regDate }}
                            </div>
                        </div>
                        <div>
                            <LikeIcon></LikeIcon>{{ board.likes }}
                            <CommentIcon></CommentIcon>{{ board.comments }}
                        </div>
                    </router-link>
                </li>
            </v-card>
        </ul>
        <v-btn style="margin: 5px 5px 5px 5px; padding: 5px 5px 5px 5px;">더보기..</v-btn>
    </div>
</template>
<script>
import LikeIcon from '../icons/LikeIcon.vue'
import CommentIcon from '../icons/CommentIcon.vue'
import { mapGetters } from 'vuex'
export default {
    name: "BoardList",
    componenets: {
        LikeIcon,
    },
    components: { LikeIcon, CommentIcon },
    computed: {
        ...mapGetters([
            'getBoards'
        ]),
    }
}
</script>
<style>
a {
    text-decoration: none;

}

li {
    list-style: none;
}

.v-card {
    padding: 5px 5px 5px 5px;
    margin: 5px 5px 5px 5px;
}

.board-list-li * {
    color: black;
}
</style>