import {register} from "@swc-node/register/register";

let cachedWorker;

const run = async (args) => {
    if (cachedWorker) {
        return cachedWorker.default(args);
    }
    await register();
    cachedWorker = await import(args.fileName);
    return cachedWorker.default(args);
};

export default run;
