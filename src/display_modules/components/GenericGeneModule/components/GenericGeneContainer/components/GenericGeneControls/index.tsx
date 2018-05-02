import * as React from 'react';
import { Well } from 'react-bootstrap';

import DropdownSelect from '../../../../../../controls/DropdownSelect';

const handleCase = (str: string) => {
  if (str.toLowerCase().indexOf('rpkm') > -1) {
    return str.toUpperCase();
  }
  return str;
};

type ControlsProps = {
  metrics: string[];
  activeMetric: string;
  handleMetricChange(metric?: string): void;
};

const GenericGeneControls: React.SFC<ControlsProps> = (props) => {
  const metrics = props.metrics.map(handleCase),
        activeMetric = handleCase(props.activeMetric);
  return (
    <Well>
      <DropdownSelect
        label="Metric"
        options={metrics}
        activeOption={activeMetric}
        handleOptionChange={props.handleMetricChange}
      />
    </Well>
  );
};

export default GenericGeneControls;
