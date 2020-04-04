<style>
  /* Style for "active" links; need to mark this :global because the router adds the class directly */
  :global(a.active) {
    color: #2b6cb0;
  }
</style>

<script>
  import Main from './Main.svelte';
  import Login from './Login.svelte';
  import { user } from './store';
</script>

{#if $user.isLogin}
  <Main />
{:else}
  <Login />
{/if}
