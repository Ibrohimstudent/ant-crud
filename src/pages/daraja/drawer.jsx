import React, { useState } from 'react';
import {Button, Drawer, Form, Select,Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";

const Option = Select
const App = ({open,setOpen}) => {

    const {editData} = useSelector(state => state.DarajaReducer)

    const {daraja} = useSelector(state => state.DarajaReducer)


    const dispatch = useDispatch()

    const [form] = Form.useForm()

    const onClose = () => {
        setOpen(false);
    };
    function onFinish(value) {
        if (editData.id){
            dispatch({type:"EDIT_SAVE3",payload:value})

        }
        else {
            dispatch({type:"ADD_USER3", payload:value})


        }
        setOpen(false)
        form.resetFields()

    }
    return (
        <>

            <Drawer title="Basic Drawer" onClose={onClose} open={open}>

                <Form form={form} onFinish={onFinish} layout={"vertical"}>

                    <Form.Item initialValue={editData.level} name={"level"} label={"Level"} rules={[{required:true}]}>
                        <Select
                            placeholder="Level"
                            allowClear
                        >
                            {
                                daraja.map((item)=><Option value={item.level}>
                                    {item.level}
                                </Option>)
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item initialValue={editData.bonus} name={"bonus"}
                               label={"Bonus"} rules={[{required:true}]}>
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