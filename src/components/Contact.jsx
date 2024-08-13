import React from 'react'
import bg from "../assets/bg.jpg";
import { Button, Checkbox, Form, Input } from "antd";

export default function Contact() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div
        className="relative h-[70vh] bg-cover bg-right md:bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-35 backdrop-blur-sm"></div>

        <div className="relative z-10 flex items-center flex-col justify-center h-full">
          <div className="div">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      <div className="about md:p-14 p-8">
        <div className="title text-4xl flex items-center justify-center my-10 md:text-6xl font-bold ">
          <h1>Lets start a Conversation</h1>
        </div>

        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Message"
            name="password"
            rules={[
              {
                required: true,
                message: "Please write your message",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          ></Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
