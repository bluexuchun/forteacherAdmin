import React, { Component, Suspense } from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import { Input, Button, Row, Col, Calendar } from 'antd';
import PageLoading from '@/components/PageLoading';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import IntroCommon from '@/components/IntroCommon';
import styles from './index.less';

@connect()
class ArrangeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    console.log(this.props)
  };

  onPanelChange = (value, mode) => {
    console.log(value, mode);
  }

  render() {
    const { match, children, location } = this.props;

    return (
      <GridContent>
        <Suspense fallback={<PageLoading />}>
          <div className={styles.tit}>开放时间</div>
          <Row gutter={12} style={{ padding: '20px 0px' }}>
            <Col span={8} style={{ textAlign: 'center' }}>
                <Calendar fullscreen={false} onPanelChange={() => this.onPanelChange} />
            </Col>
            <Col span={1}>
              <div className={styles.line}></div>
            </Col>
            <Col span={12}>
              
            </Col>
          </Row>
        </Suspense>
      </GridContent>
    );
  }
}

export default ArrangeIndex;
