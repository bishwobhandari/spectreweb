import { observable, action, computed } from "mobx";

class BirdStore {
    @observable birds = [];
    @observable

    @action addBird = (bird) => {
        this.birds.push(bird);
    }

    @computed get birdsCount() {
        return this.birds.length;
    }
}

const store = new BirdStore();
export default store;