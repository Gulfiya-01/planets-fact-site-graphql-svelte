import type { PageLoad } from "./$types";
import { getPlanet } from "$lib/graphql/planet";

export const load:PageLoad=async({params})=>{
    try {
        const planetId = Number(params?.planetId);
            const item = await getPlanet(planetId);
            console.log('data', item);
            return item;
        
    } 
    catch(err){
        console.log("err", err);
    }

};

