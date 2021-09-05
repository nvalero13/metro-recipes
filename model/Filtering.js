import { action, computed, makeObservable, observable } from "mobx";
import React, { createContext } from "react";

class Filtering {
  constructor() {
    this.platforms = new Set();
    this.genres = new Set();

    makeObservable(this, {
      genres: observable,
      platforms: observable,
      togglePlatform: action,
      toggleGenre: action,
      
    });
  }

  togglePlatform(platformid) {

    if (this.platforms.has(platformid)) {
      this.platforms.delete(platformid);
    } else {
      this.platforms.add(platformid);
    }
   
  }

  toggleGenre(genreid) {

    if (this.genres.has(genreid)) {
      this.genres.delete(genreid);
    } else {
      this.genres.add(genreid);
    }
   
  }
}

const model = new Filtering();

export const ModelContext = createContext();

export const FilteringProvider = ({ children }) => (
  <ModelContext.Provider value={model}>{children}</ModelContext.Provider>
);
