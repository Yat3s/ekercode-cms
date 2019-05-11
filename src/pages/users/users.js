import React from 'react';
import { Table } from 'antd';
import AV from 'leancloud-storage';

const userQuery = new AV.Query('_User');

export default function UsersPage() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '手机',
      dataIndex: 'mobilePhoneNumber',
    },
    {
      title: '孩子年龄',
      dataIndex: 'age',
    },
    {
      title: 'IP',
      dataIndex: 'ip',
    },
    {
      title: '报名时间（注册时间）',
      dataIndex: 'createdAt',
    },
  ];
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    // initializeData();
  }, []);

  return (
    <>
      <Table dataSource={data} columns={columns} />
    </>
  );

  async function initializeData() {
    try {
      const users = await userQuery.find();

      console.log(users);
    } catch (error) {
      console.error(error);
    }
  }
}
