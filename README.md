# viewcom
View the computer information, including cpu, memory, ipv4, ipv6 etc.

## install globally

```
npm install viewcom -g
```
### use
run the command:
```
$ viewcom
```
### view computer information in the console
```js
{ 
    cpu: 'Intel(R) Core(TM) i7-4790 CPU @ 3.60GHz',
    memory: '8G',
    memoryUseRatio: '13%',
    macAddress: 'xx',
    ipv6: 'xx',
    ipv4: 'xx',
    platform: 'win32',
    arch: 'x64',
    hostname: 'xx',
    username: 'xx' 
}
```
## install partially 
```
npm install viewcom -S
```
### use
```js
const viewcom = requie('viewcom');
console.log('ipv4:', viewcom.ipv4);
```
