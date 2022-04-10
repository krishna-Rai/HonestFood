const axios = require('axios')

const geoLocationService = async (address)=>{
    if(!address) throw new Error('Address cannot be empty')
    const endpoint = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1Ijoia3Jpc2huYS1yYWkiLCJhIjoiY2wxcmhyZmoxMDU3eTNqcGxrNGRjbjRkYiJ9.C0xV92-POoS0XWURC-YdqA&limit=1"
    const {data:response} = await axios.get(endpoint)
    const latitude = response.features[0].geometry.coordinates[1]
    const longitude = response.features[0].geometry.coordinates[0]
    return {
        longitude,latitude
    }
}

module.exports = geoLocationService