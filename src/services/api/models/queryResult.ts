export enum QueryResultStatus {
  Error = 'ERROR',
  Pending = 'PENDING',
  Working = 'WORKING',
  Success = 'SUCCESS',
};

export interface SampleSimilarityResultType {
  categories: object;
  tools: object;
  data_records: Array<object>;
}

export interface QueryResultType {
  status: QueryResultStatus;
  sample_group_id: string;
  sample_similarity?: SampleSimilarityResultType;
}
