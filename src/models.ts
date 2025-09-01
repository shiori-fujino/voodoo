// src/models.ts
export interface Model {
    id: number;
    name: string;
    photo: string;
    nationality: string;
    photos?: string[];
    height?: string;
    size?: string;
    size2?: string;
    availability?: string[];
    preferences?: string[];
    shift?: string; // new
  }
  
  export const models: Model[] = [
    { id: 1, 
      name: "Alice", 
      photo: "https://i.pinimg.com/736x/6b/b5/fc/6bb5fc712b9ed8cc3b67cfe22183387d.jpg",
      photos: ["https://i.pinimg.com/736x/6b/b5/fc/6bb5fc712b9ed8cc3b67cfe22183387d.jpg",
      "https://i.pinimg.com/736x/37/9f/5d/379f5d39bd880f73bf47316fbdc8ec07.jpg",
      "https://i.pinimg.com/1200x/2a/cf/1c/2acf1c477d856392fbc6aba1db7b4522.jpg"],
      nationality: "Korean",
      size: "6", size2: "D Cup", height: "165 cm",
      shift: "10 am - 6 pm" },
    { id: 2, 
      name: "Beatrice", 
      photo: "https://i.pinimg.com/736x/78/72/93/7872935cce58212a5a4ec44a427dfb1d.jpg", 
      photos: ["https://i.pinimg.com/736x/6b/b5/fc/6bb5fc712b9ed8cc3b67cfe22183387d.jpg",
      "https://i.pinimg.com/736x/37/9f/5d/379f5d39bd880f73bf47316fbdc8ec07.jpg",
      "https://i.pinimg.com/1200x/2a/cf/1c/2acf1c477d856392fbc6aba1db7b4522.jpg"],
      nationality: "Japanese", shift: "12 pm - 8 pm" },
    { id: 3, 
      name: "Chloe", 
      photo: "https://i.pinimg.com/1200x/2a/cf/1c/2acf1c477d856392fbc6aba1db7b4522.jpg", 
      photos: ["https://i.pinimg.com/736x/6b/b5/fc/6bb5fc712b9ed8cc3b67cfe22183387d.jpg",
      "https://i.pinimg.com/736x/37/9f/5d/379f5d39bd880f73bf47316fbdc8ec07.jpg",
      "https://i.pinimg.com/1200x/2a/cf/1c/2acf1c477d856392fbc6aba1db7b4522.jpg"],
      nationality: "Australian", shift: "9 am - 5 pm" },
    { id: 4, name: "Diana", photo: "https://i.pinimg.com/736x/ed/2b/71/ed2b717d7d3af55e7188feefca444f1d.jpg", nationality: "Chinese", shift: "10 am - 6 pm" },
    { id: 5, name: "Elina", photo: "https://i.pinimg.com/1200x/42/7a/a8/427aa8e7ecf78162cd6fdce830921fdb.jpg", nationality: "Thai", shift: "10 am - 6 pm" },
    { id: 6, name: "Fiona", photo: "https://i.pinimg.com/736x/d6/10/a0/d610a0444ebf03741fe9be16f87bf1b7.jpg", nationality: "Thai", shift: "10 am - 6 pm" },
    { id: 7, name: "Grace", photo: "https://i.pinimg.com/1200x/2e/25/d1/2e25d16419c527e7617bad6d2a89ebba.jpg", nationality: "Chinese", shift: "10 am - 6 pm" },
    { id: 8, name: "Hana", photo: "https://i.pinimg.com/736x/30/3d/cc/303dcca23b801577dda30394e15811a9.jpg", nationality: "Korean", shift: "10 am - 6 pm" },
    { id: 9, name: "Isabella", photo: "https://i.pinimg.com/736x/e1/38/6e/e1386ee8b413d61e85c989d5edb90bbb.jpg", nationality: "Japanese", shift: "10 am - 6 pm" },
    { id: 10, name: "Julia", photo: "https://i.pinimg.com/736x/05/5b/a8/055ba86a900859bf265777b15cc4aaaa.jpg", nationality: "Australian", shift: "10 am - 6 pm" },
    { id: 11, name: "Kaori", photo: "https://i.pinimg.com/736x/ae/29/8f/ae298ff0047b2e8653dec58e6abcbabc.jpg", nationality: "Japanese", shift: "10 am - 6 pm" },
    { id: 12, name: "Leila", photo: "https://i.pinimg.com/736x/0c/af/4c/0caf4c04361cf1e56adddaf96939fddd.jpg", nationality: "Middle Eastern", shift: "10 am - 6 pm" },
    { id: 13, name: "Mia", photo: "https://i.pinimg.com/1200x/0a/d9/db/0ad9db338cc4f7bd9943a09f8f055793.jpg", nationality: "Australian", shift: "10 am - 6 pm" },
    { id: 14, name: "Noemi", photo: "https://i.pinimg.com/1200x/03/85/78/038578228fbe3ca8cb88d72e946585ff.jpg", nationality: "Italian", shift: "10 am - 6 pm" },
    { id: 15, name: "Olivia", photo: "https://i.pinimg.com/736x/cb/27/47/cb27478a81e8ee47cbace65a71b29982.jpg", nationality: "English", shift: "10 am - 6 pm" },
    { id: 16, name: "Aria", photo: "https://i.pinimg.com/736x/f3/09/a9/f309a9c82cb47beb91a0a7ecd324ee12.jpg", nationality: "Italian", shift: "10 am - 6 pm" },
    { id: 17, name: "Yuna", photo: "https://i.pinimg.com/736x/59/3b/ed/593bed1143d03f724abdc4d83cdb7ed6.jpg", nationality: "Korean", shift: "10 am - 6 pm" },
    { id: 18, name: "Amara", photo: "https://i.pinimg.com/1200x/7e/b5/4e/7eb54eb40fff59f8442b2978b49f7c4e.jpg", nationality: "African", shift: "10 am - 6 pm" },
    { id: 19, name: "Valentina", photo: "https://i.pinimg.com/736x/ad/6a/59/ad6a59abdb77cdff2cfaecf7dc1ccd87.jpg", nationality: "Spanish", shift: "10 am - 6 pm" },
    { id: 20, name: "Aisha", photo: "https://i.pinimg.com/736x/33/31/7c/33317c9656ea8ad8af4a626861c3bc0c.jpg", nationality: "Arabic", shift: "10 am - 6 pm" },
    { id: 21, name: "Hanae", photo: "https://i.pinimg.com/1200x/72/c9/40/72c94052f17323c2d13a774d817ee3d1.jpg", nationality: "Japanese", shift: "10 am - 6 pm" },
    {id: 22, name: "Kaela", photo: "https://i.pinimg.com/736x/7b/46/7f/7b467f145d07f9c5e119e07a7efdffc5.jpg", nationality: "American", shift: "10 am - 6 pm" },
    { id: 23, name: "Sofia", photo: "https://i.pinimg.com/736x/90/2a/03/902a0300cd3f56500e0b0a2ec2488b58.jpg", nationality: "Italian", shift: "10 am - 6 pm" },
    { id: 24, name: "Lina", photo: "https://i.pinimg.com/736x/08/4b/83/084b838e604e1530506c8d78c642f81a.jpg", nationality: "Japanese", shift: "10 am - 6 pm" },
  ];