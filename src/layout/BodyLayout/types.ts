export interface Article {
    urlToImage: string;
    url: string;
    publishedAt: string;
    title: string;
    content: string;
    source: {
      name: string;
    };
  }

  export type parseURLProps = {
    filters : Map<string, string>;
    searchScope : string;
    searchInput : string;
    pageParam : number;
}