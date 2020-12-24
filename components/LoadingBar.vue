<template>
  <div v-if="loading" class="loading-page">
    <div class="loading"></div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      },
    },
  }
</script>
<style scoped>
  .loading-page {
    width: 100%;
    height: 100vh;
    background-color: #fefefe;
    position: fixed;
    display: flex;
    z-index: 1000;
    align-items: center;
    justify-content: center;
  }
  .loading {
    display: inline-block;
    width: 5.5rem;
    height: 5.5rem;
    border: 4px solid #333333;
    border-radius: 50%;
    border-top-color: #979797;
    animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
</style>
