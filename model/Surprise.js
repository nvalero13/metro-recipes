import { action, computed, makeObservable, observable } from "mobx";
import React, { createContext } from "react";

const APIKEY = "9482b93722fc485ba8d8c8aa15cdb25f";
class Surprise {
  constructor() {
    this.players = new Set();
    this.platforms = new Set();
    this.genres = new Set();
    this.disablebool1 = false;
    this.playersstring = "";
    this.platformsstring = "";
    this.genresstring = "";
    this.timestring = "";
    this.fetchstring =
      "https://api.rawg.io/api/games?key=" +
      APIKEY +
      this.playersstring +
      this.genresstring +
      "&ordering=-metacritic";
    this.timestyle = 276;
    this.timebarright = 260

    makeObservable(this, {
      timestring: observable,
      playersstring: observable,
      platformsstring: observable,
      genresstring: observable,
      fetchstring: observable,
      timebarright: observable,
      disablebool1: observable,
      timestyle: observable,
      toggleTime: action,
      setBarLength: action,
      togglePlayers: action,
      togglePlatforms: action,
      toggleGenres: action,
      setDisable: action,
      setFetch: action,
    });
  }

  toggleTime(decade) {
    this.time = decade;

    this.timestring = "&dates=" + this.time + "-01-01,2020-01-01";

    this.time === "" ? (this.disablebool1 = true) : (this.disablebool1 = false);
    console.log("Disable:" + this.disablebool1);

    console.log(this.time)
    this.setFetch();
  }

  setBarLength(text) {
    console.log("hey");
    if (text === "1990") {
      this.timebarright = 2;
    }
    if (text === "2000") {
      this.timebarright = 80;
    }
    if (text === "2010") {
      this.timebarright = 140;
    }
    if (text === "2015") {
      this.timebarright = 200;
    }
  };

  togglePlayers(tagid) {
    if (this.players.has(tagid)) {
      this.players.delete(tagid);
    } else {
      this.players.add(tagid);
    }

    this.playersstring = "&tags=" + [...this.players];

    [...this.players].length === 0
      ? (this.disablebool1 = true)
      : (this.disablebool1 = false);
    console.log("Disable:" + this.disablebool1);

    this.setFetch();
  }

  togglePlatforms(platformid) {
    if (this.platforms.has(platformid)) {
      this.platforms.delete(platformid);
    } else {
      this.platforms.add(platformid);
    }

    this.platformsstring = "&parent_platforms=" + [...this.platforms];

    [...this.platforms].length === 0
      ? (this.disablebool1 = true)
      : (this.disablebool1 = false);

    this.setFetch();
  }

  toggleGenres(genreid) {
    if (this.genres.has(genreid)) {
      this.genres.delete(genreid);
    } else {
      this.genres.add(genreid);
    }

    this.genresstring = "&genres=" + [...this.genres];

    [...this.genres].length === 0
      ? (this.disablebool1 = true)
      : (this.disablebool1 = false);

    this.setFetch();
  }

  setFetch() {
    if ([...this.players].length !== 0) {
      this.playersstring = "&tags=" + [...this.players];
    } else {
      this.playersstring = "";
    }
    if ([...this.platforms].length !== 0) {
      this.platformsstring = "&parent_platforms=" + [...this.platforms];
    } else {
      this.platformsstring = "";
    }
    if ([...this.genres].length !== 0) {
      this.genresstring = "&genres=" + [...this.genres];
    } else {
      this.genresstring = "";
    }

    this.fetchstring =
      "https://api.rawg.io/api/games?key=" +
      APIKEY +
      this.timestring +
      this.playersstring +
      this.platformsstring +
      this.genresstring +
      "&ordering=-metacritic";

  }

  clearFetch() {
    this.time = "";
    this.players.clear();
    this.timebarright = 260
    this.platforms.clear();
    this.genres.clear();
    this.setFetch();
    console.log("Fetch:" + this.fetchstring);
  }

  setDisable(screen) {
    if (screen === "surprise2") {
      this.disablebool1 = false;
      this.clearFetch();
    }
    if (screen === "surprise3") {
      this.disablebool1 = false;
    }
    if (screen === "surprise4" && [...this.players].length === 0) {
      console.log(screen, [this.players].length);
      this.disablebool1 = true;
    }
    if (screen === "surprise5" && [...this.platforms].length === 0) {
      console.log(screen, [this.platforms].length);
      this.disablebool1 = true;
    }
    if (screen === "surprise6" && [...this.genres].length === 0) {
      console.log(screen, [this.genres].length);
      this.disablebool1 = true;
    }
  }
}

const model = new Surprise();

export const ModelContext = createContext();

export const SurpriseProvider = ({ children }) => (
  <ModelContext.Provider value={model}>{children}</ModelContext.Provider>
);
