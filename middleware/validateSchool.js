function validateSchool(req, res, next){

    try{
        let {
        name,
        address,
        latitude,
        longitude
    } = req.body;

    if(typeof(name) !== "string"){
        return res.status(400).json({
            error : "Invalid Name"
        })
    }
    if(typeof(address) !== "string"){
        return res.status(400).json({
            error : "Invalid address"
        })
    }
    latitude = Number(latitude);
    longitude = Number(longitude);
    if (Number.isNaN(latitude)) {
        return res.status(400).json({
            error : "Latitude must be number"
        })
    }
    if (Number.isNaN(longitude)) {
        return res.status(400).json({
            error : "Longitude must be number"
        })
    }
    if(latitude < -90 || latitude > 90){
        return res.status(400).json({
            error : "Invalid latitude values"
        })
    }
    if(longitude < -180 || longitude > 180){
        return res.status(400).json({
            error : "Invalid latitude values"
        })
        
    }

    req.body.latitude = latitude;
    req.body.longitude = longitude;
    next()}catch(e){
        return res.status(500).json({
            error: "Validation middleware failed"
        });
    }
}
module.exports = {
    validateSchool
}