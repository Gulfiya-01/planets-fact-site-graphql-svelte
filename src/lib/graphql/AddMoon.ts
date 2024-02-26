import client from "$lib/client";
import type { moons, moons_insert_input } from "$lib/data";
  
interface MoonsMutationArgs {
  objects: moons_insert_input[];
}

const mutationArgs: MoonsMutationArgs = {
  objects: [
    { id:1, planet_id: 1, name: "Planet has no satellites" },
    { id:2, planet_id: 2, name: "Planet has no satellite"},
    { id:3,planet_id: 3, name: "Moon" },
    { id:4,planet_id: 4, name: "Phobos, Deimos"},
    { id:5,planet_id: 5, name: "Europa, Callisto, Ganymede" },
    { id:6,planet_id: 6, name: "Tethys, Dione, Titan, Hyperion" },
    { id:7,planet_id: 7, name: "Ferdinand, Margaret, Desdemona" },
    { id:8,planet_id: 8, name: "Neso, Sao , Larissa" },
],
};
export const AddPlanets = async () => {

const response = await client.mutation({
  insert_moons: {
    __args: mutationArgs,
    returning: {
      id: true,
      planet_id: true,
      name: true,
    },
  },
});
return response;
}