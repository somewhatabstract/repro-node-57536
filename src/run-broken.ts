#!/usr/bin/env -S node -r @swc-node/register
import path from "path";
import {Piscina} from "piscina";

(async () => {
    const piscina = new Piscina({
        filename: path.join(__dirname, "./child-run.mjs"),
    });

    const numbers = Array.from({length: 101}, (_, i) => i);

    for (const n of numbers) {
        await piscina.run({
            fileName: path.join(__dirname, "./worker.ts"),
            a: String(n),
            b: Date.now().toString(),
        });
    }
})();