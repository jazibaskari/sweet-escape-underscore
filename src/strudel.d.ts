declare global {
  function stack(...args: any[]): any;
  function note(pattern: string): any;
  function s(sample: string): any;
  interface Window {
    stack: any;
    note: any;
    s: any;
  }
}
export {};
