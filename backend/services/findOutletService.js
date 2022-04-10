const geoLocationService  = require('./geoLocationService')
const deliveryPolygons = require('../deliveryPolygons.json')
var pointInPolygon = require('point-in-polygon');

const pointWithinPolygon = (latitude,longitude,polygon)=>{
    polygon = polygon.split('\n')
    const coordinates = polygon.map(p=>{
        return p.trim().split(',').slice(0,2).map(d=>Number(d))
    })

    return pointInPolygon([ longitude, latitude ], coordinates);
}

const findOutletService = async (address)=>{
    try {
        const {latitude,longitude} = await geoLocationService(address);
        console.log(latitude,longitude)
        const outlets = []
        deliveryPolygons.forEach((dap)=>{
    
            dap.deliveryArea.forEach(da=>{
                if(pointWithinPolygon(latitude,longitude,da.Polygon.coordinates) == true){
                    outlets.push({
                        name:dap.name,
                        polygon:da
                    })
                }
            })
        })
        return outlets
    } catch (error) {
        console.log(error)
        return []
    }
   
}

module.exports = findOutletService