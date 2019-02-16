import React, { Component, Suspense } from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import { Input, Button, Table } from 'antd';
import PageLoading from '@/components/PageLoading';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import IntroCommon from '@/components/IntroCommon';
import styles from './List.less';

@connect()
class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          width: 180,
        },
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          width: 200,
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '操作',
          key: 'action',
          width: 250,
          align: 'center',
          render: (text, record) => (
            <span>
              <a href="javascript:void(0);" style={{ color: '#8856FD', marginRight: '40px' }}>
                查看
              </a>
              <a href="javascript:void(0);" style={{ color: '#F67066' }}>
                删除
              </a>
            </span>
          ),
        },
      ],
    };
  }

  componentWillMount = () => {
    let data = [];
    for (let i = 0; i < 5; i += 1) {
      let dataItem = {
        id: i,
        name: 'name' + i,
        age: i + 10,
      };
      data.push(dataItem);
    }

    this.setState({
      data,
    });
  };

  addTeacher = () => {
    this.props.history.push('teacher_edit/0');
  };

  render() {
    const { match, children, location } = this.props;
    const defaultNums = [
      {
        id: 'appointClass',
        title: '已预约课程',
        num: 10,
        backgroundColor: '#36DF97',
        icon: 'icon-appoint',
      },
      {
        id: 'correcthomework',
        title: '待批改作业',
        num: 10,
        backgroundColor: '#F6883D',
        icon: 'icon-book',
      },
      {
        id: 'teachernums',
        title: '老师数量',
        num: 20,
        backgroundColor: '#41AFEE',
        icon: 'icon-people',
      },
      {
        id: 'allmoneys',
        title: '总金额',
        num: 3500,
        backgroundColor: '#7E4EEC',
        icon: 'icon-money',
      },
    ];

    return (
      <GridContent>
        <Suspense fallback={<PageLoading />}>
          {/* 统计 */}
          <IntroCommon defaultNums={defaultNums} />

          {/* 新增按钮 */}
          <Button className={styles.addbtn} onClick={() => this.addTeacher()}>
            +新增老师
          </Button>

          {/* 表格 */}
          <Table columns={this.state.columns} dataSource={this.state.data} />
        </Suspense>
      </GridContent>
    );
  }
}

export default CourseList;
