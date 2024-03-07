import { Chart } from 'react-google-charts';
import {theme} from '../../../styles/theme/index';
import React from 'react';

import Loading from '../../../components/loading';

const Pizza = ({name, data}) => {

  const options = {
    title: name,
    pieHole: 0.4,
    backgroundColor: '#363636', 
    legend: { textStyle: { color: '#ecf0f1' } }, 
    titleTextStyle: { color: '#ecf0f1' },
    slices: theme.slices,
  };

  return (
    <Chart
      width={'40vw'}
      height={'300px'}
      chartType="PieChart"
      loader={<Loading/>}
      data={data}
      options={options}
    />
  );
};

export default Pizza;