// @ts-nocheck
import type { LayoutLoad } from "./$types";
import { getPlanets } from "$lib/graphql/planets";
import { AddPlanets } from "$lib/graphql/AddMoon";
let addPlanetsCalled=false;
export const load = async () => {
    try {
      const planets = await getPlanets();
      if (addPlanetsCalled) {
      const moons = await AddPlanets();
      addPlanetsCalled = true; 
    }
      return planets;
    } 
    catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  };;null as any as LayoutLoad;