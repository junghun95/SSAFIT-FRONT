<template>
    <v-card>
        <v-card-title>
            {{headerTitle}}
        </v-card-title>
        <v-card-text>
            <slot name="body">
                {{slotBody}}
            </slot>
        </v-card-text>

        <v-card-actions class="justify-end mr-2 pb-4">
            <v-btn
                color="amber"
                dark
                rounded
                small
                @click="$emit('hide')"    
            >
                {{hideTitle}}
                </v-btn>
                <template v-if="submit != 0">
                    <v-btn
                        color="success"
                        rounded
                        small
                        @click="$emit('submit')"
                    >
                        {{submitTitle}}
                    </v-btn>
                </template>

        </v-card-actions>

    </v-card>
</template>

<script>
    export default{
        name: 'MoDal',
        props:{
            submit:{
                type:Int32Array,
                default:0,
            },
            headerTitle:{
                type:String,
                default:'제목',
            },
            submitTitle:{
                type:String,
                default:'저장',
            },
            hideTitle:{
                type:String,
                default:'닫기',
            },
            slotBody:{
                type:String,
                default:"기본 바디를 입력하시오",
            },
        }
    }
</script>

<style>
</style>