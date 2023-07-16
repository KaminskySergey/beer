
  export interface Beer {
    abv: number;
    attenuation_level: number;
    boil_volume?: {
      unit: string;
      value: number;
    };
    brewers_tips?: string;
    contributed_by?: string;
    description: string;
    ebc?: number;
    first_brewed: object;
    food_pairing?: string[];
    ibu?: number;
    id: number;
    image_url: string;
    ingredients?: {
      hops?: {
        
      }[];
      malt?: {
      }[];
      yeast?: string;
    };
    method?: {
      fermentation?: {
        temp?: {
        };
      };
      mash_temp?: {
      }[];
      twist?: null;
    };
    name: string;
    ph: number;
    srm: number;
    tagline: string;
    target_fg: number;
    target_og: number;
    volume: {
      unit: string;
      value: number;
    };
  }


  export interface BeerSlice {
    beer: Beer[];
    page: number;
    currentBeer: object;
    selectedBeers: Beer[];
    fetchBeer: () => Promise<void>;
    layzyLoadBeer: (page: number) => Promise<void> 
    beerInfo: (el: object) => Promise<void> 
    toggleBeerCards: (beerId: string) => Promise<void> 
    deleteBeers: () => Promise<void> 
  }

  export type IBeers = {
    allBeer: Beer[] | null;
};
