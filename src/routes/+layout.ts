import type { LayoutLoad } from "./$types";
import { getPlanets } from "$lib/graphql/planets";

export const load:LayoutLoad=async()=>{
const planets =await getPlanets();
return planets;

}