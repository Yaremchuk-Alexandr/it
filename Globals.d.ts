declare module "*.module.css";
declare module "*.module.scss";
declare module "*.svg" {
    const value: any;
    export = value;
 }
// and so on for whatever flavor of css you're using