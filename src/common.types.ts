export interface Poem {
  author: string;
  title: string;
  lines: Array<string>;
}

export enum SourceStyleEnum {
  STANDARD = "Standard",
  NO_SOURCE = "No Source",
  AUTHOR_AND_TITLE = "Author and Title",
  AUTHOR_AND_FIRST_LINE = "Author and First Line",
  AUTHOR_ONLY = "Author Only",
}
