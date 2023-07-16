import { create } from "zustand";
// import { BeerSlice } from "@/types/beer.types";
import  {createSliceBeer}  from "./slice/createSliseBeer";
import { persist, createJSONStorage } from 'zustand/middleware';


type BeerSlice = any



const useBeer = create<BeerSlice>(
  persist<BeerSlice>(
    (...a) => ({
      ...createSliceBeer(...a),
    }),
    {
      name: 'beerStore',
      storage: createJSONStorage(() => localStorage),
      // whitelist: ['beer', 'selectedBeers'],
    }
  )
);

export default useBeer;