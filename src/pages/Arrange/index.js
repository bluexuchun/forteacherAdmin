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
    this.state = {
      timelist:[
        {
          id:1,
          starttime:'2019-2-26 9:00',
          endtime:'2019-2-27 9:00'
        },
        {
          id:2,
          starttime:'2019-2-26 9:00',
          endtime:'2019-2-27 9:00'
        },
        {
          id:3,
          starttime:'2019-2-26 9:00',
          endtime:'2019-2-27 9:00'
        }
      ]
    };
  }

  componentWillMount = () => {
    console.log(this.props);
  };

  onPanelChange = (value, mode) => {
    console.log(value, mode);
  };

  render() {
    const { match, children, location } = this.props;

    let { timelist } = this.state

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
              {/* 时间的选择 */}
              <div className={styles.timemain}>
                <Row className={styles.timegroup}>
                  <Col span={10} className={styles.timeitem}>
                    <TimePicker defaultValue={moment('9', minutes)} format={minutes} />
                    <span>:</span>
                    <TimePicker defaultValue={moment('12', second)} format={second} />
                  </Col>
                  <Col span={4} className={styles.timecenter}>
                    <div className={styles.itemline} />
                  </Col>
                  <Col span={10} className={styles.timeitem}>
                    <TimePicker defaultValue={moment('9', minutes)} format={minutes} />
                    <span>:</span>
                    <TimePicker defaultValue={moment('12', second)} format={second} />
                  </Col>
                </Row>
              </div>

              {/* 时间的列表 */}
              <div className={styles.timemain}>
                <div className={styles.box}>
                  {timelist ? timelist.map((v,i) => (
                    <div className={styles.boxGroup}>
                      <div className={styles.boxItemFirst}>{v.starttime}</div>
                      <div className={styles.boxItemFirst}>{v.endtime}</div>
                      <div className={styles.boxItemBtn}>
                        <Button type="danger" size="small">删除</Button>
                      </div>
                    </div>
                  )) : null}
                </div>
              </div>

              {/* 添加 */}
              <div className={styles.timemainSpe}>
                <div className={styles.boxSpe}>
                  <div className={styles.boxGroupSpe}>
                    <Button type="primary" size="small">添加日程+</Button>
                  </div>
                </div>
              </div>

              {/* 添加 */}
              <div className={styles.timemainSpe}>
                <div className={styles.boxSpe}>
                  <div className={styles.btnGroup}>
                    <Button className={styles.btnRight} type="primary">确认</Button>
                    <Button>取消</Button>
                  </div>
                </div>
              </div>

            </Col>
          </Row>
        </Suspense>
      </GridContent>
    );
  }
}

export default ArrangeIndex;
