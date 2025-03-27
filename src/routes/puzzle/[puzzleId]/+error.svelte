<script lang="ts">
	import { page } from '$app/state';
</script>

<h1>{page.status} Error</h1>
<p>{page.error?.message}</p>