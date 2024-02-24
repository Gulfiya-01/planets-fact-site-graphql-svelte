import client from "$lib/client";
 
export const getPlanets = async () => {
  const post = client.query({
  planets:{
    id:true,
    name:true,
  }
})
  return post;
};
 