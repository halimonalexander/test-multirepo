// console.log(global);
console.log(global.env)
// console.log(process);
console.log(process.argv);

setTimeout(() => {
    console.log('HEllo')
}, 2000);

const url = new URL('http://my.me/local/host.html');
console.log(
    url.hostname,
    url.port,
    url.pathname,
    url.hash,
);

