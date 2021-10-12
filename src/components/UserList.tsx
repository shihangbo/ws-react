import * as React from 'react'
import {useState,useEffect} from 'react'
import { Table, message, Space } from 'antd'
import {User,UserListResponse} from '@/typings/api'
import request, { AxiosResponse } from '@/api/request';
import { RouteComponentProps, Link } from 'react-router-dom';

type Props = RouteComponentProps
function UserList(props:Props) {
  // 事件处理跳转
  const handleShowDetail = (record:any) => {
    props.history.push('/user/detail/' + record._id)
  }
  let columns = [
    {
      title:'用户名',
      dataIndex:'username',
      key:'username'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text:string, record:User) => {
        return (
          <Link to={`/user/detail/${record._id}`}>查看</Link>
        )
      },
    }
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (text:string, record:any) => (
    //     <Space size="middle">
    //       <a onClick={() => (handleShowDetail(record))}>查看</a>
    //     </Space>
    //   ),
    // }
  ]
  let [users,setUsers] = useState<Array<User>>([])
  useEffect(()=>{
    (async function(){
      // 优化：优化UserList接口 拉取多次变为拉取一次
      console.log('请求UserList接口')
      // 接口请求
      // let response:AxiosResponse<UserListResponse> = await request.get<UserListResponse, AxiosResponse<UserListResponse>>('/api/users')
      // moke数据
      let response = {
        data: {
          code:0,
          data:[
            {
              username:'111',
              _id:'111'
            },
            {
              username:'222',
              _id:'222'
            },
            {
              username:'333',
              _id:'333'
            }
          ]
        }
      }
      let {data,code} = response.data
      if (code === 0) {
        setUsers(data)
      } else {
        message.error('请求用户列表失败')
      }
    })()
  },[])
  
  return (<Table
    columns={columns}
    dataSource={users}
    rowKey={(row:User) => row._id}
  ></Table>)
}

export default UserList