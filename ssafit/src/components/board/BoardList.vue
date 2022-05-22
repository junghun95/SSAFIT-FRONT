<template>
    <div class="board-list">
        <div class="d-flex flex-column flex-grow-1 search">
            <div class="d-flex flex-row flex-grow-1">
                <SearchIcon></SearchIcon>
                <input class="flex-grow-1" type="text" placeholder="검색어를 입력하세요" />
                <v-btn>검색</v-btn>
            </div>
            <div class="d-flex flex-row flex-grow-1">
                <v-icon>mdi-fire</v-icon>
                <input class="flex-grow-1" type="text" placeholder="태그로 검색하세요" />
                <v-btn icon>
                    <v-icon>mdi-cached</v-icon>
                </v-btn>
            </div>
        </div>
        <ul>
            <v-card v-for="board in getBoards" :key="board.id">
                <li class="board-list-li">
                    <v-btn v-for="t in board.tags" :key="t.id">
                        {{t.name}}
                    </v-btn>
                    <router-link :to="{ name: 'boardDetail', params: { id: board.id } }" :id="`${board.id}`">
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
import SearchIcon from '../icons/SearchIcon.vue'
import { mdiCached } from '@mdi/js';
import { mdiFire } from '@mdi/js';
import { mapGetters } from 'vuex'
export default {
    name: "BoardList",
    data() {
        return {
            'mdi-cached': mdiCached,
            'mdi-fire': mdiFire,
        }
    },
    componenets: {
        LikeIcon,
    },
    components: { LikeIcon, CommentIcon, SearchIcon },
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

.search {
    padding: 5px 5px 5px 5px;
    margin: 5px 5px 5px 5px;
    border: 0.5px solid black;
}
</style>