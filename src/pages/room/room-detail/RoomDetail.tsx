import React, { useState, useEffect } from 'react';
import { Card, Table, Input, Button, Image } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import UseRequest from '../../../hooks/useRequest';
import './roomDetail.less';

export default function RoomDetail(props: any) {
  const [loading] = UseRequest();
  const [profileState] = useState(props);
  const [data, setData] = useState([
    {
      key: '',
      roomNum: 0,
      computer: '',
      imgs: [''],
      isCheckIn: false,
    },
  ]);
  const title = (
    <span>
      <a href="#/" onClick={(e) => e.preventDefault()}>
        <LeftOutlined
          onClick={() => {
            profileState.history.goBack();
          }}
        />
      </a>
      <span>&nbsp;详细信息</span>
    </span>
  );
  const tableTitle = (
    <span>
      <Input
        style={{ width: 200, margin: '0 10px' }}
        placeholder="关键字"
        onChange={() => {}}
      />
      <Button type="primary" onClick={() => {}}>
        搜索
      </Button>
    </span>
  );
  useEffect(() => {
    setData([]);
    setTimeout(() => {
      const data = [
        {
          key: '1',
          roomNum: 101,
          computer: '高配电脑',
          imgs: [
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          ],
          isCheckIn: true,
        },
        {
          key: '2',
          roomNum: 301,
          computer: '高配电脑',
          imgs: [
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          ],
          isCheckIn: false,
        },
        {
          key: '3',
          roomNum: 201,
          computer: '高配电脑',
          imgs: [
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          ],
          isCheckIn: false,
        },
        {
          key: '4',
          roomNum: 102,
          computer: '高配电脑',
          imgs: [
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          ],
          isCheckIn: true,
        },
      ];
      setData(data);
    }, 1000);
  }, []);
  const columns = [
    {
      title: '房间号',
      dataIndex: 'roomNum',
      key: 'roomNum',
      render: (text: any) => <a href="#/">{text}</a>,
    },
    {
      title: '电脑配置',
      dataIndex: 'computer',
      key: 'computer',
    },

    {
      title: '房间环境',
      render: (e: any) => {
        return e.imgs.map((item: any, index: number) => {
          return (
            <Image
              key={index}
              style={{ marginRight: 10 }}
              width={80}
              src={item}
            />
          );
        });
      },
    },
    {
      title: '入住状态',
      dataIndex: 'isCheckIn',
      key: 'isCheckIn',
      width: 150,
      render: (status: Boolean) => (
        <div style={{ textAlign: 'center' }}>
          <span className={status ? 'isCheckIn notCheck' : 'isCheckIn'}>
            {status ? '未入住' : '已入住'}
          </span>
        </div>
      ),
    },
    {
      title: '房间详情',
      key: 'action',
      width: 100,
      render: (text: string, record: any) => {
        return (
          <>
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                props.history.push({
                  pathname: '/room/addOrUpdateRoom',
                  query: { addHouseId: record.key },
                });
              }}
            >
              点击修改
            </a>
            {record.isCheckIn ? (
              <span>暂无详情</span>
            ) : (
              <a
                href="#/"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                查看详情
              </a>
            )}
          </>
        );
      },
    },
  ];
  return (
    <Card className="card" title={title}>
      <Card title={tableTitle}>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          loading={loading}
          pagination={{
            defaultPageSize: 7,
            total: 4,
            showQuickJumper: true,
            onChange: (e) => {
              console.log(e);
            },
            position: ['bottomCenter'],
          }}
        />
      </Card>
    </Card>
  );
}
