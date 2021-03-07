import React, { useState } from 'react'
import { Button, DatePicker, Form } from 'antd'
import {SearchOutlined} from '@ant-design/icons';
import moment, { Moment } from 'moment';
import SymbolInput from '../symbol-input/SymbolInput';

const { RangePicker } = DatePicker;
const { Item, useForm } = Form;

export interface SearchFormData {
    range: [moment.Moment, moment.Moment],
    symbol: string
}

export interface ConfigPanelProps {
    onSubmit: (data: SearchFormData) => void
    config: SearchFormData,
    loading: boolean
};



export default function ConfigPanel(props: ConfigPanelProps) {

    const [form] = useForm<SearchFormData>();

    const submitData = (data: SearchFormData) => {
        props.onSubmit(data)
        form.resetFields();
    }

    return (
        <Form
            className="config-form"
            layout="vertical"
            onFinish={submitData}
            initialValues={props.config}
            form={form}>
            <Item label="Stock" name="symbol">
                <SymbolInput />
            </Item>
            <Item 
                rules={[
                    {
                        validator(rule, [start, end]: [Moment, Moment]) {
                            if(end.diff(start, 'days') < 3) {
                                return Promise.reject("You should set a minimum interval of 3 days.");
                            }
                            if(moment().isBefore(end)) {
                                return Promise.reject("End date must be today or a day in the past.")
                            }
                            return Promise.resolve();
                        }
                    }
                ]}
            label="Sample Interval" name="range">
                <RangePicker
                    showNow={false}
                    showTime={false}
                />
            </Item>

            <Button 
                icon={<SearchOutlined />} 
                type="primary"
                htmlType="submit"
                loading={props.loading}
            >
                Display Data
            </Button>
        </Form>
    )
}