import { SunburstDataType } from '../../../display_modules/plots/SunburstPlot/util/sunburst';

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
  samples: {
    [key: string]: {
      viral: number;
      archaea: number;
      bacteria: number;
      host: number;
      unknown: number;
    };
  };
}

export interface BetaDiversityEntryType {
  // SampleID
  [key: string]: {
    // SampleID
    [key: string]: number;
  };
}

export interface BetaDiversityType {
  // Rank name
  [key: string]: {
    // Metric name
    [key: string]: {
      // Tool name
      [key: string]: BetaDiversityEntryType;
    };
  };
}

export interface SampleTaxonomyType {
  [key: string]: SunburstDataType;
}

export interface ReadStatsResultType {
  samples: {
    [key: string]: {
      gc_content: number,
      num_reads: number,
      codons: {[key: string]: number},
      tetramers: {[key: string]: number},
    };
  };
}

export interface MethylResultType {
  samples: {
    [key: string]: {
      [key: string]: {
        rpkm: number;
        rpkmg: number;
      }
    }
  };
}

export interface CARDResultType {
  samples: {
    [key: string]: {
      [key: string]: {
        rpkm: number;
        rpkmg: number;
      }
    }
  };
}

export interface VFDBResultType {
  samples: {
    [key: string]: {
      [key: string]: {
        rpkm: number;
        rpkmg: number;
      }
    }
  };
}

export interface Humann2NormalizeResultType {
  samples: {
    [key: string]: {
      [key: string]: {
        rpkm: number;
        rpkmg: number;
      }
    }
  };
}

export interface QueryResultWrapper<T> {
  status: QueryResultStatus;
  data?: T;
}

export interface AnalysisResultType {
  uuid: string;
  result_types: string[];
}
