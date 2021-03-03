class Store {
    constructor(rootReducer) {
        this.rootReducer = rootReducer;
        this.state = {};
    }

    getState() {
        let newState = {};
        return Object.assign(newState, this.state)
    }
}