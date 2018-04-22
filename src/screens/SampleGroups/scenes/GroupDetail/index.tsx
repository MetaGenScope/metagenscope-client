import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import { getSampleGroup, getAnalysisResults } from '../../../../services/api';
import { SampleGroupType } from '../../../../services/api/models/analysisGroup';
import { AnalysisResultType } from '../../../../services/api/models/queryResult';

import AGSModule from '../../../../display_modules/AverageGenomeSize';
import BetaDiversityModule from '../../../../display_modules/BetaDiversity';
import CARDModule from '../../../../display_modules/CARD';
import HMPModule from '../../../../display_modules/HMP';
import Humann2NormalizeModule from '../../../../display_modules/Humann2Normalize';
import MethylModule from '../../../../display_modules/Methyl';
import VFDBModule from '../../../../display_modules/VFDB';
import { ReadsClassifiedModule } from '../../../../display_modules/ReadsClassified';
import { ReadStatsModule } from '../../../../display_modules/ReadStats';
import { SampleSimilarityModule } from '../../../../display_modules/SampleSimilarity';
import { SampleTaxonomyModule } from '../../../../display_modules/SampleTaxonomy';
import { TaxonAbundanceModule } from '../../../../display_modules/TaxonAbundance';

import SampleList from './components/SampleList';

export type ModuleClassTypeProps = {uuid: string, isSingleton?: boolean};
export type ModuleClassType = React.ComponentClass<ModuleClassTypeProps>;

export type ModuleEntry = {
  name: string;
  ModuleClass: ModuleClassType;
};

const mapping: {[key: string]: ModuleClassType} = {
  average_genome_size: AGSModule,
  beta_diversity: BetaDiversityModule,
  card_amr_genes: CARDModule,
  hmp: HMPModule,
  read_stats: ReadStatsModule,
  methyltransferases: MethylModule,
  functional_genes: Humann2NormalizeModule,
  reads_classified: ReadsClassifiedModule,
  sample_similarity: SampleSimilarityModule,
  taxa_tree: SampleTaxonomyModule,
  taxon_abundance: TaxonAbundanceModule,
  virulence_factors: VFDBModule,
};

interface AnalysisGroupList {
  queryResult: AnalysisResultType;
}

const AnalysisGroupList: React.SFC<AnalysisGroupList> = (props) => {
  const modules: ModuleEntry[] = [];
  props.queryResult.result_types.forEach(moduleName => {
    const displayModule = mapping[moduleName];
    if (displayModule !== undefined) {
      modules.push({
        name: moduleName,
        ModuleClass: displayModule,
      });
    }
  });
  return (
    <div>
      {modules.map(Entry => {
        return <Entry.ModuleClass key={Entry.name} uuid={props.queryResult.uuid} />;
      })}
    </div>
  );
};

interface AnalysisGroupDetailProps {
  groupUUID: string;
  updateTheme?(theme?: string): void;
}

interface AnalysisGroupDetailState {
  group?: SampleGroupType;
  queryResults?: AnalysisResultType;
  error?: string;
}

class AnalysisGroupDetail extends React.Component<AnalysisGroupDetailProps, AnalysisGroupDetailState> {

  constructor(props: AnalysisGroupDetailProps) {
    super(props);

    this.state = {
      group: undefined,
      queryResults: undefined,
      error: undefined,
    };
  }

  componentDidMount() {
    getSampleGroup(this.props.groupUUID)
      .then((group) => {
        this.setState({ group });
        if (this.props.updateTheme !== undefined) {
          this.props.updateTheme(group.theme);
        }
        return group;
      })
      .then((group) => {
        return getAnalysisResults(group.analysisResultId);
      })
      .then((queryResults) => {
        this.setState({ queryResults });
      })
      .catch((error) => {
        this.setState({ error: '' + error });
      });
  }

  componentWillUnmount() {
    if (this.props.updateTheme !== undefined) {
      this.props.updateTheme(undefined);
    }
  }

  render() {
    return (
      <div>
        {this.state.group &&
          <div>
            <Helmet>
              <title>MetaGenScope :: {this.state.group.name}</title>
            </Helmet>
            <Row>
              <Col lg={12}>
                <h1>{this.state.group.name}</h1>
                <p>{this.state.group.description}</p>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg={12}>
                <SampleList sampleGroupUuid={this.state.group.uuid} />
                {this.state.queryResults &&
                  <AnalysisGroupList queryResult={this.state.queryResults} />
                }
                {!this.state.queryResults &&
                  <h3>Loading...</h3>
                }
              </Col>
            </Row>
          </div>
        }
        {this.state.error &&
          <h1>Error: {this.state.error}</h1>
        }
        {!this.state.group && !this.state.error &&
          <h1>Loading...</h1>
        }
      </div>
    );
  }
}

export default AnalysisGroupDetail;
