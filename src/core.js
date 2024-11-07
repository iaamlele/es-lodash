import ArrayList from "./api/array/index.js";

export default class Core {
    constructor() {
    }

}

Core.prototype.pull = ArrayList.pull;
Core.prototype.chunk = ArrayList.chunk;
Core.prototype.compact = ArrayList.compact;
Core.prototype.drop = ArrayList.drop;


