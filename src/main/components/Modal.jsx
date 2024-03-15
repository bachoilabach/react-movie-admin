import React from "react";

import { DatePicker, Form, Input, InputNumber } from "antd";

import { Button } from "@material-tailwind/react";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

// const onChange = (value) => {
//   console.log(`selected ${value}`);
// };
// const onSearch = (value) => {
//   console.log("search:", value);
// };
// const filterOption = (input, option) =>
//   (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

export default function Modal({ toggleModal }) {
  return (
    <div className="w-full h-[100vh] fixed inset-0 z-10">
      <div
        onClick={toggleModal}
        className="w-full h-full bg-black opacity-50"
      ></div>
      <div className="absolute w-11/12 h-5/6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 p-8 rounded">
        <Form
          {...formItemLayout}
          variant="filled"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            label="Title"
            name="Title"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Rating ID"
            name="Rating ID"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Country ID"
            name="Country ID"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Release"
            name="Release"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Duration"
            name="Duration"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Thumbnail"
            name="TextArea"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Video URL"
            name="Video URL"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="HTML"
            name="HTML"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          {/* <Form.Item
            label="Select"
            name="Select"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          </Form.Item> */}

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <button
        className="fixed bottom-16 right-16 px-3 py-2 border-[1px] border-black text-black hover:bg-blue-gray-600 rounded-lg"
        onClick={toggleModal}
        type="button"
      >
        CLOSE
      </button>
    </div>
  );
}
