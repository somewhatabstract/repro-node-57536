export default function doWork({a, b}: {a:string; b:string;}) {
    console.log(`Hello, I'm a worker! I received ${a} and ${b}`);
}