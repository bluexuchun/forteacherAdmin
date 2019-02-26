import React, { Component, Suspense } from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import { Input, Button, Row, Col, Calendar, TimePicker } from 'antd';
import PageLoading from '@/components/PageLoading';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import IntroCommon from '@/components/IntroCommon';
import styles from './index.less';
import moment from 'moment';

@connect()
class ArrangeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    console.log(this.props);
  };

  onPanelChange = (value, mode) => {
    console.log(value, mode);
  };

  render() {
    const { match, children, location } = this.props;

    const minutes = 'm';
    const second = 'ss';

    return (
      <GridContent>
        <Suspense fallback={<PageLoading />}>
          <div className={styles.tit}>开放时间</div>
          <Row gutter={12} style={{ padding: '20px 0px', position: 'relative' }}>
            <div className={styles.line} />

            <Col span={10} className={styles.mainCol}>
              <div
                style={{
                  width: '75%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Calendar
                  style={{ width: '100%' }}
                  fullscreen={false}
                  onPanelChange={() => this.onPanelChange}
                />
              </div>
            </Col>

            <Col span={14}>
              <div className={styles.timemain}>
                <Row className={styles.timegroup}>
                  <Col span={10} className={styles.timeitem}>
                    <TimePicker defaultValue={moment('9', minutes)} format={minutes} />
                    <TimePicker defaultValue={moment('12', second)} format={second} />
                  </Col>
                  <Col span={2} className={styles.timecenter}>
                    <div className={styles.itemline} />
                  </Col>
                  <Col span={10} className={styles.timeitem}>
                    <TimePicker defaultValue={moment('9', minutes)} format={minutes} />
                    <TimePicker defaultValue={moment('12', second)} format={second} />
                  </Col>
                </Row>
                {/* <div className={styles.timegroup}>
                  <div className={styles.timeitem}>
                    <TimePicker defaultValue={moment('9', minutes)} format={minutes} />
                    <TimePicker defaultValue={moment('12', second)} format={second} />
                  </div>

                  <div className={styles.timeitem}>
                    <TimePicker defaultValue={moment('9', minutes)} format={minutes} />
                    <TimePicker defaultValue={moment('12', second)} format={second} />
                  </div>
                </div> */}
              </div>
            </Col>
          </Row>
        </Suspense>
      </GridContent>
    );
  }
}

export default ArrangeIndex;
