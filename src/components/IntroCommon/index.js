import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import styles from './index.less';

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
          <Col {...topCol}>
            <div className={styles.introitem}>
              {v.num}
              <div
                style={{
                  width: '100%',
                  height: '20px',
                  lineHeight: '20px',
                  position: 'absolute',
                  top: '0px',
                  left: '0px',
                }}
              >
                {v.title}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}
