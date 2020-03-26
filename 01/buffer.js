const buf = Buffer.alloc(10); //分配内存空间
console.log(buf);
const buf1 = Buffer.from('abc');
console.log(buf1);

const buf2 = Buffer.from('我是中文');
console.log(buf2);

const buf3 = Buffer.concat([buf1,buf2]);
console.log(buf3.toString());
