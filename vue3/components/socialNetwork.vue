<script>
import { defineAsyncComponent } from 'vue'

export default {
    data() {
        return {
            twitter: "twitter.com",
            instagram: "instagram.com"
        }
    },
    components: {
        Portfolio : defineAsyncComponent(() => {
            import('./portfolio')
        }),
        LoaderPortfolio : defineAsyncComponent({
            loader : () => import('./portfolio'),
            loadingComponent: X,
            delay: 3000,
            errorComponent: Y,
            timeout: 4000
        })
    }
}
</script>

<template>
    <h5>{{ twitter }} - {{ instagram }}</h5>
</template>