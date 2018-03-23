export enum QueryResultStatus {
  Error = 'E',
  Pending = 'P',
  Working = 'W',
  Success = 'S',
}

export interface TaxonAbundanceResultType {
  nodes: {
    id: string;
    name: string;
    value: number;
  }[];
  edges: {
    source: string;
    target: string;
    value: number;
  }[];
}

export interface SampleSimilarityResultType {
  categories: {
    [key: string]: string[];
  };
  tools: {
    [key: string]: {
      x_label: string;
      y_label: string;
    };
  };
  data_records: {
    // tslint:disable-next-line no-any
    [index: string]: any;
  }[];
}

export interface HMPResultType {
  categories: Map<string, string[]>;
  sites: string[];
  data: Map<string, {
    name: string;
    data: number[][];
  }[]>;
}

export interface ReadsClassifiedType {
  categories: string[];
  sample_names: string[];
  data: {
    category: string;
    values: number[];
  }[];
}

export interface QueryResultWrapper<T> {
  status: QueryResultStatus;
  data?: T;
}

export interface AnalysisResultType {
  uuid: string;
  result_types: string[];
}
