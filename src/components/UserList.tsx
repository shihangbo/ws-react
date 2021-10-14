import * as React from 'react'
import {useState,useEffect} from 'react'
import { Table, message, Space, Button } from 'antd'
import {User,UserListResponse} from '@/typings/api'
import request, { AxiosResponse } from '@/api/request';
import { RouteComponentProps, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CombinedState } from '@/typings/state';
import {UserState} from '@/typings/state'
import { Dispatch } from 'redux';
import * as types from '@/store/action-types'

let mapStateToProps = (state:CombinedState):UserState => state.user
let mapDispatchToProps = (dispatch:Dispatch) => ({
  storeUser(list:Array<User>) {
    console.log(list)
    dispatch({type: types.SET_USER, payload: list})
  }
})
type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
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
  // 定义分页
  let limit = 10
  let [offset, setOffset] = useState(0)
  let [users,setUsers] = useState<Array<User>>(props.list)
  useEffect(()=>{
    (async function(){
      // !!!优化：优化UserList接口 拉取多次变为拉取一次
      if (users.length === 0) {
        console.log('请求UserList接口')
        // 接口请求
        // let response:AxiosResponse<UserListResponse> = await request.get<UserListResponse, AxiosResponse<UserListResponse>>(`/api/users?limit=${limit}&offset=${offset}`)
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
          // 当前组件保存数据 - 会触发视图更新!!!
          setUsers(data)
          setOffset(offset + data.length)
          // 派发user仓库保存数据：连接仓库 保存到仓库 - 不会触发视图更新!!!
          props.storeUser(data)
        } else {
          message.error('请求用户列表失败')
        }
      }
    })()
  },[offset])
  const refresh = () => {
    let data = users.slice(0, users.length - 1)
    setUsers(data)
    props.storeUser(data)
    // 刷新数据
    setOffset(users.length)
  }
  
  return (<>
    <Button type="primary" onClick={refresh} style={{marginBottom:'20px'}}>刷新</Button>
    <Table
      columns={columns}
      dataSource={users}
      rowKey={(row:User) => row._id}
    ></Table>
  </>)
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList) 