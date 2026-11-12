/// <reference types="vite/client" />
declare module '*.lottie' {
  const src: string;
  export default src;
}
declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}
