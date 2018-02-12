const os = require('os');

let cpu = os.cpus()[0].model;
let memory = Math.round(os.totalmem() / 1024 / 1024 / 1024) + 'G';
let memoryUseRatio = Math.round(os.freemem() / os.totalmem() * 100) + '%';

let localnet = os.networkInterfaces()['本地连接'];
let macAddress = localnet[0].mac;
let ipv6 = localnet[0].address;
let ipv4 = localnet[1].address;

let platform = os.platform();
let arch = os.arch();
let hostname = os.hostname();
let username = os.userInfo().username;

console.log('\x1B[33m%s\x1b[0m', 'Computer Info:', {
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
});
