import React, { useState } from 'react';
import { Divider, Radio, Table,Button, message,Popconfirm } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import Drawer from "./drawer"





const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};

const App = () => {
    const {lavozim} = useSelector(state => state.LavozimReducer)
    const [open, setOpen] = useState(false);

    const dispatch =useDispatch()


    function editItem(item) {
        dispatch({type:"EDIT_DATA2", payload: item})
        setOpen(prevState => !prevState)

    }







    const columns = [

        {
            title: 'Position',
            dataIndex: 'position',
        },
        {
            title: 'Salary',
            dataIndex: 'salary',
        },
        {
            title: "Actions",
            render: (item)=><div>
                <Button onClick={()=>editItem(item)} className={"mx-2"} type={"primary"}>Edit</Button>
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    onConfirm={()=>confirm(item)}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button    className={"mx-2"} type={"primary"} danger>Delete</Button>
                </Popconfirm>
            </div>
        }
    ];

    const confirm = (e) => {
        console.log(e);
        message.success('Deleted');
        dispatch({type:"DELETE_USER2",payload:e.id})
    };
    const cancel = (e) => {
        console.log(e);
        message.error('No Deleted');
    };



    const [selectionType, setSelectionType] = useState('checkbox');
    return (
        <div>
            <Drawer open={open} setOpen={setOpen}/>
            <Radio.Group
                onChange={({ target: { value } }) => {
                    setSelectionType(value);
                }}
                value={selectionType}
            >
                <Radio value="checkbox">Checkbox</Radio>
                <Radio value="radio">radio</Radio>
            </Radio.Group>

            <Button onClick={()=> setOpen(prevState => !prevState)}
                    className={"float-end"} type={"primary"}>Add Position</Button>

            <Divider />

            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={lavozim}
            >

            </Table>
        </div>
    );
};
export default App;