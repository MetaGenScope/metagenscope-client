export enum QueryResultStatus {
  Error = 'ERROR',
  Pending = 'PENDING',
  Working = 'WORKING',
  Success = 'SUCCESS',
};

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
  categories: object;
  tools: object;
  data_records: object[];
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

export interface QueryResultType {
  status: QueryResultStatus;
  sample_group_id: string;
  sample_similarity?: SampleSimilarityResultType;
  taxon_abundance?: TaxonAbundanceResultType;
  hmp?: HMPResultType;
  reads_classified?: ReadsClassifiedType;
}
