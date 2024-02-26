import client from "$lib/client";
 
export const getPlanet = async (id:number) => {
  const post = client.query({
  planets_by_pk:{
    __args:{
      id,
    },
    
    id:true,
    name:true,
    geology_content: true,
    geology_source: true,
    overview_content: true,
    overview_source: true,
    radius: true,
    revolution: true,
    rotation: true,
    structure_content: true,
    structure_source:true,
    temperature:true,
    
  },
  moons_by_pk:{
    __args:{
      id
    },
    name:true,
  }
})
  return post;
};
 