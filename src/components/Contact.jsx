import React from 'react'
import bg from "../assets/bg.jpg";
import { Button, Checkbox, Form, Input } from "antd";

export default function Contact() {
  const onFinish = (values) => {
    alert("Success");
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

      {/* 



 */}

      <div className="about md:p-14 p-8">
        <div className="title text-4xl flex items-center justify-center my-10 md:text-6xl font-bold ">
          <h1>Lets start a Conversation</h1>
        </div>
        <div className="details flex justify-between items-start flex-wrap md:flex-nowrap">
          <div className="Form w-96">
            <Form
              name="basic"
              className="flex flex-col justify-center"
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
                name="email"
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
                name="message"
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
                className="lg:pl-32"
                wrapperCol={{
                  offset: 0,
                  span: 16,
                }}
              >
                <Button className="w-full" type="default" htmlType="submit">
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="mapDiv">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13282.52353348593!2d73.0406221!3d33.6667249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9577908c75e5%3A0x4c1cf7b9779118bc!2sNational%20Incubation%20Center!5e0!3m2!1sen!2s!4v1723617077127!5m2!1sen!2s"
              className="h-44 md:w-96 w-80 m-auto"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="pt-3 font-semibold text-xl">
              electricvehiclesquare@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
