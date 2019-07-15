const os = require("os");

//OS platform
console.log(os.platform());

//CPU arch
console.log(os.arch());

//cpu cores
console.log(os.cpus());

//free memory
console.log(os.freemem());

//total memory
console.log(os.totalmem());

//home dir
console.log(os.homedir());

//uptime, displays is seconds
console.log(os.uptime());
