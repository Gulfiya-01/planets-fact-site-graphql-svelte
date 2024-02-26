
<script lang="ts">
	import Footer from "$lib/Footer.svelte";
	import PlanetImage from "$lib/PlanetImage.svelte";
  import type { PageData } from "./$types";


  export let data: PageData;
  
  let selectedView = 'overview';
  $: planet = data;
  function handleButtonClick(view: string) {
    selectedView = view;
  }
</script>
<picture>
  <PlanetImage data={planet} { selectedView} />
</picture>

<main class="content">
  <section class="left-column">
    <p class="planet-name">{data.planets_by_pk?.name}</p>
    <article class="selected-content">
      {#if selectedView === 'overview'}
        <p>{data.planets_by_pk?.overview_content}</p>
        <p class="source">Source: <a href={data.planets_by_pk?.overview_source}>Wikipedia</a></p>
      {:else if selectedView === 'geology'}
        <p>{data.planets_by_pk?.geology_content}</p>
        <p class="source">Source: <a href={data.planets_by_pk?.geology_source}>Wikipedia</a></p>
      {:else if selectedView === 'structure'}
        <p>{data.planets_by_pk?.structure_content}</p>
        <p class="source">Source: <a href={data.planets_by_pk?.structure_source}>Wikipedia</a></p>
      {:else if selectedView === 'moons'}
        <p>{data.moons_by_pk?.name}</p>
        <p class="source">Source: <a href={data.planets_by_pk?.overview_source}>Wikipedia</a></p>
      {/if}
    </article>
  </section>

  <section class="right-column">
    <div class="btn-main" >
      <button class="content-btn" on:click={() => handleButtonClick('overview')}>
        <span class="btn-number">01</span>OVERVIEW
      </button>
      
      <button class="content-btn" on:click={() => handleButtonClick('structure')}>
        <span class="btn-number">02</span>INTERNAL STRUCTURE
      </button>
      
      <button class="content-btn" on:click={() => handleButtonClick('geology')}>
        <span class="btn-number">03</span>SURFACE GEOLOGY
      </button>
      <button class="content-btn" on:click={() => handleButtonClick('moons')}>
        <span class="btn-number">04</span>PLANET SATELLITES
      </button>
    </div>
  </section>

</main>


<footer>
 <Footer data={planet} /> 
</footer>



<style>


  
 .source {
    margin-top: 2rem;
    color: #FFF;
    font-family: Spartan Reg;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    opacity: 0.5;
    line-height: 1.5625rem;
  }

  .source a {
    font-weight: 700;
    text-decoration-line: underline;
    font-family: Spartan;
    color: #FFF;
  }

  .selected-content {
    margin-top: 1.5rem;
    font-family: Spartan Reg;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.375rem;
  }

  .planet-name {
    color: #FFF;
    font-family: Antonio;
    font-size: 3rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  .btn-number {
    color: white;
    font-family: Spartan Reg;
  }

  .btn-main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.5625rem; 
    letter-spacing: 0.16069rem;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;

  }

  .left-column {
    flex: 1;
  }

  .right-column {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  .content-btn {
    gap: 1rem;
    display: grid;
    grid-column-gap: 1rem;
    grid-template-columns: auto 1fr;
    padding: 0.5rem 0 0.5rem 1.5rem;
    justify-content: space-between;
    justify-items: flex-start;
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 17.5625rem;
    height: 2.5rem;
    font-family: Spartan ;
    background-color: transparent;
    color: #FFF;
    letter-spacing: 0.15rem;
  }
  .content-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
  
  }
  .content-btn:focus {
    background-color:#419EBB;
  }
  picture {
    margin-top: 17rem;
  }

  p {
    color: white;  
  }
  
  @media only screen and (min-width: 1024px){
    .content {
      flex-direction:column;
      justify-content:flex-end;
      position: absolute;
      top: 3rem; 
      margin-left:38.5rem;
      align-items:flex-start;
      padding-right:5rem;
      /* Adjust positioning as needed */
    }
    .btn-main{
   margin-top:2.4rem;
  }
  .planet-name{
    font-size: 5rem;
  }
  .selected-content {
    font-size: 0.875rem;
    line-height: 1.5625rem;
  }

  }
</style>
