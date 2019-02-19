import React, { Component, Suspense } from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import { Input, Button, Row, Col, Avatar, Form } from 'antd';
import PageLoading from '@/components/PageLoading';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import IntroCommon from '@/components/IntroCommon';
import styles from './AppointEdit.less';

const FormItem = Form.Item;
const { TextArea } = Input;
@connect()
class AppointEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {};

  render() {
    const { match, children, location } = this.props;

    const formItemSmallLayout = {
      labelCol: {
        xs: { span: 3 },
        sm: { span: 3 },
      },
      wrapperCol: {
        xs: { span: 6 },
        sm: { span: 6 },
      },
    };
    const formDefaultLayout = {
      labelCol: {
        xs: {
          span: 3,
        },
        sm: {
          span: 3,
        },
      },
      wrapperCol: {
        xs: {
          span: 10,
        },
        sm: {
          span: 10,
        },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 3,
          offset: 0,
        },
        sm: {
          span: 3,
          offset: 3,
        },
      },
    };
    return (
      <GridContent>
        <Suspense fallback={<PageLoading />}>
          <Row gutter={12} style={{ padding: '20px 0px' }}>
            <Col span={4} style={{ textAlign: 'center' }}>
              <Avatar size={120} icon="user" />
            </Col>
            <Col span={14}>
              <div className={styles.tabTitle}>个人基本信息</div>
              <Form onSubmit={this.submit}>
                <FormItem {...formItemSmallLayout} label="姓名：">
                  <Input placeholder="请输入教师姓名" />
                </FormItem>
                <FormItem {...formItemSmallLayout} label="年龄：">
                  <Input placeholder="请输入教师年龄" />
                </FormItem>
                <FormItem {...formItemSmallLayout} label="学历：">
                  <Input placeholder="请输入教师学历" />
                </FormItem>
                <FormItem {...formDefaultLayout} label="简介：">
                  <TextArea placeholder="教师简介" />
                </FormItem>
              </Form>
            </Col>
          </Row>
          <div className={styles.line} />
          <Row gutter={12} style={{ padding: '20px 0px' }}>
            <Col span={4} style={{ textAlign: 'center' }} />
            <Col span={14}>
              <div className={styles.tabTitle}>联系方式</div>
              <Form onSubmit={this.submit}>
                <FormItem {...formItemSmallLayout} label="手机号：">
                  <Input placeholder="请输入手机号" />
                </FormItem>
                <FormItem {...formItemSmallLayout} label="Facebook：">
                  <Input placeholder="请输入Facebook" />
                </FormItem>
                <FormItem {...formItemSmallLayout} label="Skype：">
                  <Input placeholder="请输入Skype" />
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                  <Button className={styles.addbtn} htmlType="submit">
                    提交
                  </Button>
                </FormItem>
              </Form>
            </Col>
          </Row>
        </Suspense>
      </GridContent>
    );
  }
}

const newAppointEdit = Form.create()(AppointEdit);

export default newAppointEdit;
