 <script lang="ts">
    import type { PageData } from "../routes/[planetId]/$types";
    export let data:PageData;
    export let selectedView:string;
    $:planet=data.planets_by_pk;
    const determineImageSrc = (selectedView: string, planetName: string | undefined) => {
    const name = planetName?.toLowerCase(); 
    if (selectedView === "overview" || selectedView === "geology"||selectedView === "moons" ) {
      return `../../public/assets/planet-${name}.svg`;
    }
    if (selectedView === "structure") {
      return `../../public/assets/planet-${name}-internal.svg`;
    }
  };
  </script>
  
  <section class="image-container">
    <div class="image-wrapper">
         <img
          src={determineImageSrc(selectedView, planet?.name)}
          alt={planet?.name}
          class="planet-image"
        />
    
        {#if selectedView === "geology"}
          <img
            src={`../../public/assets/geology-${planet?.name?.toLowerCase()}.png`}
            alt={planet?.name}
            class="geology-img"
          />
         
        {/if}
      </div>
      
  </section>
  
  <style>
    
  .image-container {
    margin-top: 7.75rem;
    padding: 0 12.6rem;
    display: flex;
    position: relative;
    justify-content: center;
   
  }
  
  .image-wrapper {
      position: relative;
    }

    .planet-image{
    width: 100%;
    }
  .geology-img{
    width: 40%;
    position: absolute;
    margin-top: 15rem;
    margin-left: -14rem;
  
  }
  
  @media only screen and (min-width: 1024px){
    .image-container {
        margin-top: 7.75rem;
        padding: 0rem 0rem;
        width: 25rem;
        height: 25rem;
        display: flex;
        margin-left:10rem;
        justify-content: flex-start;
      }
  
  }
  </style>
  
  