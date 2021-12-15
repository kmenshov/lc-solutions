declare namespace benchmark {
  function timer(name: string): { stop: () => void };
  function repeat(times: number, callback: (...params: any) => any): void;
  function randomInt(max: number): number;
  function randomString(length: number, charSet?: string): string;
}
