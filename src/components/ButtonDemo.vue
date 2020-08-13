<template>
    <div>
        Button 示例
    </div>
    <h1>示例 1</h1>
    <div>
        <Button>默认</Button>
        <Button theme="button">button</Button>
        <Button theme="link">link</Button>
        <Button theme="text">text</Button>
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default {
    components: { Button },
    setup() {
        const onClick = () => {
            console.log('hi')
        }
        return {onClick}
    },
}
</script>