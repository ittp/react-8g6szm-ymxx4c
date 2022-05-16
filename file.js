import React, { Component } from 'react';
import { readAsText, readFile, readFileSync, readDir } from 'fs';
import { Input, InputNumber, Form, Select, File } from 'antd';

// const fs = require('fs');

// Calling the fs.readFile() method
// for reading file 'input1.txt'
// fs.readFile('./hr.acl', { encoding: 'utf8', flag: 'r' }, function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// Calling the fs.readFileSync() method
// for reading file 'input2.txt'
// const data = readFileSync('./hr.acl', { encoding: 'utf8', flag: 'r' });

// Display data
// console.log(data);
const Text = (data) => {
  return (
    <Form
      name="text"
      className="text"
      id="text"
      onChange={(data) => console.log(data.target.value)}
    >
      <File />
      <textarea>{data.toString()}</textarea>
    </Form>
  );
};

class TextD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
    };
  }
}

class File extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }
  editFile = async (e) => {};
  loadFile = async (e) => {};
  showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      console.log(text);
      // alert(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  render = () => {
    return (
      <div>
        <input type="file" onChange={(e) => this.showFile(e)} />
        <Text />
      </div>
    );
  };
}

export default File;
