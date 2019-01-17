var mongoose=require('mongoose');
var schema = mongoose.Schema;

var collegeSchema = new mongoose.Schema({
    name : {
        type:String
    },
    email : {
        type:String
    },
    affiliation : {
        type : String
    },
    college_type : {
        type:schema.Types.ObjectId,
        ref:"College"
    },
    state : {
        type : String
    },
    nirf_ranking : {
        type : String
    } 
});


const college= mongoose.model('college',collegeSchema);
module.exports=college;