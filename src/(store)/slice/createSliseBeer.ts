import axios from "axios";
import { StateCreator } from "zustand";
import { BeerSlice, Beer } from "@/types/beer.types";


export const createSliceBeer: StateCreator<BeerSlice> = (set) => ({
  beer: [] as Beer[],
  page: 1,
  currentBeer: {} as Beer,
  selectedBeers: [] as Beer[],
  fetchBeer: async () => {
    try {
      const { data } = await axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=5`);
      set((state) => ({ beer: data }));
    } catch (error) {
      console.log('Что-то пошло не так');
    }
  },
  layzyLoadBeer: async (page: number) => {
    try {
      const { data } = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=5`);
      set((state) => {
        if (state.beer.length + data.length > 15 ) {
          const newBeerSlice = state.beer.slice(5);
          return {
            beer: [...newBeerSlice, ...data],
            page: state.page + 1,
          };
        } else {
          console.log(data, 'data')
          console.log(state.beer, 'beer')
          return {
            beer: [...state.beer, ...data],
            page: state.page + 1,
          };
        }
      });
    } catch (error) {
      console.error('Что-то пошло не так');
    }
  },
  beerInfo: async (info: object) => {
    try {
      set({ currentBeer: info as Beer });
    } catch (error) {
      console.log('Что-то пошло не так');
    }
  },
  toggleBeerCards: async (beerId: string) => {
    set((state) => {
      const selectedProduct = state.beer.find((beer) => beer.id.toString() === beerId.toString());

      if (selectedProduct) {
        const isProductSelected = state.selectedBeers.some((beer) => beer.id.toString() === beerId.toString());

        if (isProductSelected) {
          return {
            ...state,
            selectedBeers: state.selectedBeers.filter((beer) => beer.id.toString() !== beerId.toString()),
          };
        }

        return {
          ...state,
          selectedBeers: [...state.selectedBeers, selectedProduct],
        };
      }

      return state;
    });
  },
  deleteBeers: async () => {
    set((state) => {
      const updatedBeer = state.beer.filter(
        (beer) => !state.selectedBeers.find((selectedBeer) => selectedBeer.id === beer.id)
      );

      return {
        ...state,
        beer: updatedBeer,
        selectedBeers: [],
      };
    });
  },
});

