import React from 'react';
import { Table } from 'antd';
import AV from 'leancloud-storage';
import moment from 'moment';

import Trial from '@/models/trial';

const trialQuery = new AV.Query(Trial);

export default function TrialsPage() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '手机',
      dataIndex: 'attributes.mobile',
    },
    {
      title: '孩子年龄',
      dataIndex: 'attributes.kidAge',
      render: t => `${t} 岁`,
    },
    {
      title: 'IP',
      dataIndex: 'attributes.ip',
    },
    {
      title: '报名时间',
      dataIndex: 'createdAt',
      render: formatDate,
    },
  ];

  React.useEffect(() => {
    initializeData();
  }, []);

  return (
    <>
      <Table
        title={() => '申请试用的用户'}
        loading={loading}
        dataSource={data}
        columns={columns}
      />
    </>
  );

  async function initializeData() {
    setLoading(true);
    try {
      const users = await trialQuery.find();
      console.log(users);
      setData(users);
      console.log(users);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
}

function formatDate(date) {
  return moment(date).format('YYYY-MM-DD HH:mm');
}
