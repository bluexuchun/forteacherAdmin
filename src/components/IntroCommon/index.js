import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Row, Col, Icon } from 'antd';
import styles from './index.less';
import Link from 'umi/link';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1040094_lav5sdhtyoj.js',
});

const topCol = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

export default class IntroCommon extends PureComponent {
  static propTypes = {
    nums: PropTypes.array,
  };

  static defaultProps = {
    nums: [],
  };

  constructor(props) {
    super(props);
    const { defaultNums } = this.props;
    this.state = {
      nums: defaultNums,
    };
  }

  render() {
    const { nums } = this.state;

    return (
      <Row gutter={24}>
        {nums.map((v, i) => (
          <Col {...topCol} key={v.id}>
            <div className={styles.introitem} style={{ background: v.backgroundColor }}>
              {v.id === 'allmoneys' ? <div style={{ fontSize: '16px' }}>￥</div> : null}
              {v.num}
              <div className={styles.introbox}>
                <IconFont style={{ fontSize: '20px', margin: '0px 8px' }} type={v.icon} />
                {v.title}
              </div>
              {v.id === 'allmoneys' ? (
                <Link
                  to="/textbook_list"
                  style={{
                    position: 'absolute',
                    bottom: '5px',
                    right: '8px',
                    fontSize: '13px',
                    color: '#fff',
                    fontWeight: 'normal',
                  }}
                >
                  去体现 >
                </Link>
              ) : null}
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}
