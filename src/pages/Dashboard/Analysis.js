import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown } from 'antd';

import GridContent from '@/components/PageHeaderWrapper/GridContent';
import { getTimeDistance } from '@/utils/utils';

import styles from './Analysis.less';
import PageLoading from '@/components/PageLoading';
import IntroCommon from '@/components/IntroCommon'

const IntroduceRow = React.lazy(() => import('./IntroduceRow'));

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
class Analysis extends Component {
  state = {
    salesType: 'all',
    currentTabKey: '',
    rangePickerValue: getTimeDistance('year'),
  };

  componentDidMount() {
    const { dispatch } = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'chart/fetch',
      });
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chart/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
  }



  render() {
    const { rangePickerValue, salesType, currentTabKey } = this.state;
    const { chart, loading } = this.props;
    const {
      visitData,
    } = chart;
    const defaultNums = [{
      id:'appointClass',
      num:10
    },{
      id:'correcthomework',
      num:10
    },{
      id:'correcthomework',
      num:10
    }]


    return (
      <GridContent>
        <Suspense fallback={<PageLoading />}>
          <IntroCommon  defaultNums={defaultNums} />
        </Suspense>
      </GridContent>
    );
  }
}

export default Analysis;
