const os = require('os');

let cpu = os.cpus()[0].model;
let memory = Math.round(os.totalmem() / 1024 / 1024 / 1024) + 'G';
let memoryUseRatio = Math.round(os.freemem() / os.totalmem() * 100) + '%';

let localnet = getLocalnet(os.networkInterfaces());
let macAddress = localnet ? localnet[0].mac : '';
let ipv6 = localnet ? localnet[0].address : '';
let ipv4 = localnet ? localnet[1].address : '';

let platform = os.platform();
let arch = os.arch();
let hostname = os.hostname();
let username = os.userInfo().username;

function getLocalnet (net) {
  let netName = '';
  for (let key in net) {
    if (/本地连接|无线网络/.test(key)) {
      netName = key;
      break;
    }
  }
  return net[netName];
}

let comInfo = {
  cpu,
  memory,
  memoryUseRatio,
  macAddress,
  ipv6,
  ipv4,
  platform,
  arch,
  hostname,
  username
};
console.log('\x1B[33m%s\x1b[0m', 'Computer Info:', comInfo);
module.exports = comInfo;


