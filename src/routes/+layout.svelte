<script lang="ts">
import type {LayoutData} from './$types'
export let data:LayoutData;
import "./global.css";
import Header from "$lib/Header.svelte"
</script>
<Header data= {data} />;
<slot/>