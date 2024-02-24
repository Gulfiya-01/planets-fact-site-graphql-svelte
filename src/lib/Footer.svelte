<script lang="ts">
	import type { PageData } from "../routes/[planetId]/$types";
    export let data:PageData;
    
    $:planet=data.planets_by_pk;
    function millisecondsToHours(milliseconds:number) {
    return ( milliseconds / (1000 * 60 * 60));
    }
      

    function millisecondsToYears(milliseconds:number) {
      return (milliseconds / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2); 
      }
    function centimetersToKilometers(centimeters:number) {
      return (centimeters / 100000).toFixed(2);
      }
    </script>
  
    <section class="footer">
        <p class="footer-data">
          <span class="footer-item">Rotation time:</span> 
          {millisecondsToHours(planet?.rotation) > 24 
          ? millisecondsToHours(planet?.rotation) / 24 + " days" 
          : millisecondsToHours(planet?.rotation) +" hours"}</p>
        <p class="footer-data">
          <span class="footer-item">Revolution time:</span>
          {parseFloat(millisecondsToYears(planet?.revolution)) < 1
            ? parseFloat(millisecondsToYears(planet?.revolution)) * 365 + " days"
            : millisecondsToYears(planet?.revolution) + " years"}
        </p>
        <p class="footer-data"><span class="footer-item">Radius:</span>{centimetersToKilometers(planet?.radius)} km</p>
        <p class="footer-data"><span class="footer-item">Temperature:</span>{planet?.temperature}°C</p>
    </section>
  
  <style>
    .footer-item{
      color: #FFF;
      font-family: Spartan;
      font-size: 0.5rem;
      font-weight: 700;
      line-height: 1rem; /* 200% */
      letter-spacing: 0.04544rem;
      text-transform: uppercase;
      opacity: 0.5;
    }
    .footer{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap:0.7rem;
    }
    .footer-data{
      display: flex; 
      padding: 1rem; 
      justify-content: space-between;
      flex-direction: column;
       
    }
    .footer{
      margin-top: 1.69rem;
    }
    .footer-data{
      border: 1px solid rgba(255, 255, 255, 0.5);
      color: #FFF;
      font-family: Antonio;
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: -0.05625rem;
      text-transform: uppercase;
      width: 100vw;
    }
    @media only screen and (min-width: 1024px){
      .footer{
        margin-top:10rem;
    }
    .footer-data{
      margin-left: 4rem;
    }}
    </style>