import React, { useState } from 'react';
import {Button, Drawer, Form, Select,Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";

const Option = Select
const App = ({open,setOpen}) => {

    const {editData} = useSelector(state => state.LavozimReducer)

    const {lavozim} = useSelector(state => state.LavozimReducer)


    const dispatch = useDispatch()

    const [form] = Form.useForm()

    const onClose = () => {
        setOpen(false);
    };
    function onFinish(value) {
        if (editData.id){
            dispatch({type:"EDIT_SAVE2",payload:value})

        }
        else {
            dispatch({type:"ADD_USER2", payload:value})


        }
        setOpen(false)
        form.resetFields()

    }
    return (
        <>

            <Drawer title="Basic Drawer" onClose={onClose} open={open}>

                <Form form={form} onFinish={onFinish} layout={"vertical"}>

                    <Form.Item initialValue={editData.position} name={"position"} label={"Position"} rules={[{required:true}]}>
                        <Select
                            placeholder="Position"
                            allowClear
                        >
                            {
                                lavozim.map((item)=><Option value={item.position}>
                                    {item.position}
                                </Option>)
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item initialValue={editData.salary} name={"salary"} label={"Salary"} rules={[{required:true}]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item  >
                        <Button htmlType={"submit"} type={"primary"} className={"w-100"}>Save</Button>
                    </Form.Item>

                </Form>

            </Drawer>
        </>
    );
};
export default App;