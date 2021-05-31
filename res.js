'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values': values
    };
     res.json(data);
     res.end();
}

// nested response
exports.oknested = function(values,res){
    //accumulation
    const hasil = values.reduce((accumulation, items)=>{
        // key group
        if(accumulation[items.nama]){
            // make variabel group
            const group = accumulation[items.nama];
            //check
            if(Array.isArray(group.matakuliah)){
                // add values in group
                group.matakuliah.push(items.matakuliah);
            } else {
                group.matakuliah=[group.matakuliah,items.matakuliah];
            }
        } else {
            accumulation[items.nama] = items;
        }
        return accumulation;
    }, {});

    var data = {
        'status':200,
        'values': hasil
    };
     res.json(data);
     res.end();
}