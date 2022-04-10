const findOutletService = require('../services/findOutletService')

const findOutlet = async (req,res)=>{
    try {
        const address = req.query.address
        const outlets = await findOutletService(address)
        res.status(200).json(outlets)
    } catch (error) {
        res.status(500).json({"msg":error.message})
    }
    

}
module.exports = {
    findOutlet
}