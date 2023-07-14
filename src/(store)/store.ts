import { create } from "zustand";
import { BeerSlice } from "@/types/beer.types";
import { createSliceBeer } from "./slice/createSliseBeer";
type StateStore = BeerSlice



  const useBeer = create<StateStore>((...a) => ({
  ...createSliceBeer(...a),
  // Дополнительное состояние и действия...
}));

export default useBeer