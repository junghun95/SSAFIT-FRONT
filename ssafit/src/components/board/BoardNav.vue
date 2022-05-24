<template>
    <v-card height="10" width="256" class="mx-auto">
        <v-navigation-drawer permanent fixed>
            <v-list dense nav>
                <v-list-item :to="{name: 'boardList', params:{category:'notice'}}" >
                    <v-list-item-content>
                         <v-list-item-title>소식통</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{name: 'boardList', params:{category:'bbom'}}">
                    <v-list-item-content>
                         <v-list-item-title>뽐내기</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{name: 'boardList', params:{category:'question'}}" >
                    <v-list-item-content>
                        <v-list-item-title>질문/답변</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item  :to="{name: 'boardList', params:{category:'tip'}}">
                    <v-list-item-content>
                        <v-list-item-title>꿀팁</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>
    </v-card>
</template>


<script>
export default {
    name: "BoardNav",

}
</script>

<style>
    .v-navigation-drawer{
    /* .v-navigation-drawer, 
    .v-navigation-drawer__content, 
    .v-navigation-drawer__border{ */
        top:65px !important;
        height: 300px !important;
        border: 1px solid gray;
    }
</style>