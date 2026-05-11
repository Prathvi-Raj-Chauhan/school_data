function validateSchool(data){
    const {
        name,
        address,
        latitude,
        longitude
    } = data;

    if(typeof(name) !== "string"){
        const error = new Error("Invalid Name")
        error.statusCode = 400
        throw error
    }
    if(typeof(address) !== "string"){
        const error = new Error("Invalid address")
        error.statusCode = 400
        throw error
    }
    if (Number.isNaN(Number(latitude))) {
        const error = new Error("Latitude must be number");
        error.statusCode = 400
        throw error
    }
    if (Number.isNaN(Number(longitude))) {
        const error = new Error("Longitude must be number");
        error.statusCode = 400
        throw error
    }
    if(latitude < -90 || latitude > 90){
        const error = new Error("Invalid latitude values")
        error.statusCode = 400
        throw error
    }
    if(longitude < -180 || longitude > 180){
        const error = new Error("Invalid longitude values")
        error.statusCode = 400
        throw error
    }

}
module.exports = {
    validateSchool
}