// @ts-nocheck
import type { PageLoad } from "./$types";
import { getPlanet } from "$lib/graphql/planet";

export const load=async({params}: Parameters<PageLoad>[0])=>{
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

