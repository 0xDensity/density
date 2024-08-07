import { secureFunction } from "@riggs/secure";

export const coreFunction = () => {
  secureFunction();
  console.log("Core function");
};
