const { exec } = require('child_process');
module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('log',function(...a) {
            a.forEach(e=>console.log(e.value));
            return "";
        });
    }
};