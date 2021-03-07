import React, { useEffect, useReducer, useRef, useState } from 'react';
import { aggregateData } from './shared/utils';
import StockChart from './components/stock-chart/StockChart';
import { fetchQuotes } from './shared/requests';
import { Col, Row, Typography, Checkbox } from 'antd';
import ConfigPanel, { SearchFormData } from './components/config-panel/ConfigPanel';
import { QuoteInterval } from './shared/types';
import { ParentSize } from '@visx/visx';
import moment from 'moment';

import 'antd/dist/antd.css';
import './App.scss';

const { Text } = Typography;

const now = moment('2021-03-07 16:08:00');

const initialValues: SearchFormData = {
  range: [moment(now).subtract(1, 'week'), now],
  symbol: 'AMD'
}

const getChartHeight = () => window.innerHeight * 0.7;

const flip = (state: boolean) => !state;

function App() {
  const [quotes, setQuotes] = useState<QuoteInterval[]>([]);
  const [config, setConfig] = useState<SearchFormData>(initialValues);
  const [displayAverages, changeDisplayAverages] = useReducer(flip, false);
  const [loading, setLoading] = useState(true);

  const chartContainer = useRef<HTMLDivElement | null>(null);



  const fetchData = () => {
    setLoading(true);
    fetchQuotes({
      period1: config.range[0].unix(),
      period2: config.range[1].unix(),
      symbol: config.symbol,
      region: 'US'
    }).then(data => {
      setLoading(false);
      setQuotes(aggregateData(config.range[0], config.range[1], data));
    });
  }

  useEffect(() => {
    fetchData();
  }, [config])

  return (
    <div>
      <div className="header mr-auto ml-auto">
        <h2 className="p-0 m-0">
          Stock Statistics
        </h2>
      </div>
      <div className="vertical-center full-page">

        <Row align="middle">
          <Col span={24} lg={8}>
            <ConfigPanel loading={loading} config={config} onSubmit={setConfig} />
          </Col>
          <Col span={24} lg={16}>
            <Row>
              <Col span={24} ref={chartContainer}>
                <ParentSize>
                  {({ width }) => <StockChart width={width} height={window.innerHeight * 0.6} displayAverages={displayAverages} data={quotes} />
                  }
                </ParentSize>
              </Col>
              <Col className="text-center" span={24}>
                <label>
                  <Text strong className="mr-small cursor-pointer">
                    Display Averages
              </Text>
                  <Checkbox value={displayAverages} onChange={changeDisplayAverages} />
                </label>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
