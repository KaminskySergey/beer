import { BeerSlice } from "@/types/beer.types";
import axios from "axios";
import { StateCreator } from "next-zustand";



export const createSliceBeer: StateCreator<BeerSlice> = (set: any) => ({
    beer: [],
    page: 1,
    fetchBeer: async () => {
      try {
        // const { page } = set.getState();
        // console.log(page)
        const { data } = await axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=5`);
        set({ beer: data });
      } catch (error) {
        console.log('Что-то пошло не так');
      }
    },
    layzyLoadBeer: async (page: number) => {
      try {
        const {data} = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=5`)
        
      set((state) => ({
        
        beer: [...state.beer, ...data],
        page: state.page + 1,
      }))
      } catch (error) {
        
      }
    }
    
})

