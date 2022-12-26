class Pendulum {
    // Constructor for pendulum object
    constructor(ang, len, weight, startPos) {
        this.ang = ang  * Math.PI / 180;
        this.len = len;
        this.weight = weight;
        this.x = startPos + this.len * (Math.sin(this.ang))
        this.y = -this.len * (Math.cos(this.ang))
        this.startPos = startPos
    }

    // Get Location
    getLocation() {
        var obj = {
            x: this.x,
            y: this.y,
            startPos: this.startPos
        }
        return obj
    }

    startSimulation() {

    }

}

module.exports = Pendulum