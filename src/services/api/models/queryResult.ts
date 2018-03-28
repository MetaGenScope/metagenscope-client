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
  categories: {
    [key: string]: string[];
  };
  sites: string[];
  data: {
    [key: string]: {
      name: string;
      data: number[][];
    }[];
  };
}

export interface AGSResultType {
  categories: {
    [key: string]: string[];
  };
  distributions: {
    [key: string]: {
      [key: string]: {
        min_val: number;
        q1_val: number;
        mean_val: number;
        q3_val: number;
        max_val: number;
      };
    }[];
  };
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
