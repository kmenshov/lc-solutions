export declare function parseIntString(spaceSeparatedIntegersString: string): number[];
export declare function parseInt10(str: string): number;

export type List = {
  val: any;
  next: List | null;
}

export declare function stringToList(inputString: string): List;
export declare function listToArray(head: List | null): any[];
