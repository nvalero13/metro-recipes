import { action, computed, makeObservable, observable } from "mobx";
import React, { createContext } from "react";


class Favourites {

  constructor() {
    this.archive = new Set();
    this.backlog = new Set();
    this.wishlist = new Set();
    this.workingid = null;

    makeObservable(this, {
      archive: observable,
      backlog: observable,
      wishlist: observable,
      workingid: observable,
      setArchive: action,
      setBacklog: action,
      setWishlist: action,
    });
  }

  setId(gameid) {
    
    this.workingid = gameid
    console.log(this.workingid)
  }

  setArchive() {

    if (this.archive.has(this.workingid)) {
      this.archive.delete(this.workingid);
    } else {
      this.archive.add(this.workingid);
    }
    this.workingid = null
    console.log("Archive: "+[...this.archive])
  }
  setBacklog() {

    if (this.backlog.has(this.workingid)) {
      this.backlog.delete(this.workingid);
    } else {
      this.backlog.add(this.workingid);
    }
    this.workingid = null
    console.log("Backlog: "+[...this.backlog])
  }
  setWishlist() {

    if (this.wishlist.has(this.workingid)) {
      this.wishlist.delete(this.workingid);
    } else {
      this.wishlist.add(this.workingid);
    }
    this.workingid = null
    console.log("Wishlist: "+[...this.wishlist])
  }
}

const model = new Favourites();

export const ModelContext = createContext();

export const FavouritesProvider = ({ children }) => (
  <ModelContext.Provider value={model}>{children}</ModelContext.Provider>
);
