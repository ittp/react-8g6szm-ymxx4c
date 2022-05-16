import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { List, message, Avatar, Spin, Button, Tag, Switch } from 'antd';

import File from './file';
import reqwest from 'reqwest';

import InfiniteScroll from 'react-infinite-scroller';
import { readFileSync, fs } from 'fs';
import fse from 'fs-extra';
import rfd from 'react-fs';
import path from 'path';
// const { readFileSync } = require('fs')
let dir = path.dirname('.');

let loadFile = async (f) => {
  let file = await fs.readFileSync(f);
  console.log(file);
};
try {
  loadFile('hr.acl');
} catch (e) {
  console.log('catch');
}

let file = async (file) => await readFileSync('list.acl');
//.then((data) => data.toString());

// console.log(file);

const getType = (id) => {
  const { icon, title, subtupes } = types[id];

  return types[id];
};

const checkValue = (data) => {
  const cidr = require('is-cidr');
  const ip = require('is-ip');
  const lodash = require('lodash');
  let a = Object.getOwnPropertyNames(data);
  console.log(a);
  if (value) {
  }
};

const DomainsList = (data) => {
  const domain = '';
  let { name, value } = data;
  let types = {};
  if (value) {
  }
  const acl = 'acl ' + { ...data };
};

const fakeDataUrl =
  'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

let edata = `.gov.spb.ru
.metro.spb.ru
.avtobus.spb.ru
.electrotrans.spb.ru
.orgp.spb.ru
.avt.spb.ru
.gudodd.ru
.gcup.spb.ru
.ctpspb.ru
.spb.hh.ru
.web.telegram.org
.isiao.vpn
.kgs.vpn
.hr.gov.spb.ru
.disk.yandex.ru
.yandex.ru`;

const list = [
  '.gov.spb.ru',
  '.metro.spb.ru',
  '.avtobus.spb.ru',
  '.electrotrans.spb.ru',
  '.orgp.spb.ru',
  '.avt.spb.ru',
  '.gudodd.ru',
  '.gcup.spb.ru',
  '.ctpspb.ru',
  '.spb.hh.ru',
  '.web.telegram.org',
  '.isiao.vpn',
  '.kgs.vpn',
  '.hr.gov.spb.ru',
  '.disk.yandex.ru',
  '.yandex.ru',
];

const v = {
  key: 'acl',
  data: {},
};

let load_data = async (file) => {
  let load = fs.readFileSync(file);
  // console.log(load);
};

load_data(path.join('__basedir', 'hr.acl'));
let text_json = (data, params) => {
  if (data) {
    // console.log(data);
  }
};
text_json(list);
let list_json = (params) =>
  Object.values(list).map((i) => [{ ...params, value: i }]);

//console.log(list_json({ name: 'allow' }));
const acls = [
  {
    yandex: {
      dstdomain: '.yandex.ru',
      dstdomain: '.yandex.net',
      dstdomain: '.yastatic.net',
    },
  },
];

let data_a = edata.split('\n');
let dd = [];
let ds = Object.values(data_a).map((value, k) => {
  return (dd[k] = {
    key: k + 1,
    value,
    file: {
      acl: 'acl hr_domains dstdomain /etc/squid/hr.acl',
      name: 'hr_lan',
      access: 'allow hr_lan hr_domains',
    },
  });
});

const View = () => {};

class InfiniteListExample extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  };

  componentDidMount() {
    this.fetchData((res) => {
      this.setState({
        acl: {},
        filename: '',
        // data: res.results,
        // data: res,
        data: dd,
      });
    });
  }

  fetchData = (callback) => {
    callback(dd);

    // reqwest({
    //   url: edata,
    //   type: 'json',
    //   method: 'get',
    //   contentType: 'application/json',
    //   success: (res) => {
    //     callback(res);
    //   },
    // });
  };
  EditListItem = (d) => {
    let value = d.target.innerHTML;
    if (d.target.tagName == 'a') {
      console.log(d.target.attributes.href);
    }

    console.log(d.target);
    console.log(value);
    return value;
  };

  handleInfiniteOnLoad = () => {
    let { data } = this.state;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData((res) => {
      data = data.concat(res.results);
      //data = dd;
      this.setState({
        data,
        loading: false,
      });
    });
  };
  render() {
    return (
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            onClick={this.EditListItem}
            // onClick={(d) => console.log(d.target.innerHTML)}
            dataSource={this.state.data}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  // avatar={'o'}
                  key={item.key}
                  footer={'5'}
                  avatar={<Tag>{item.key}</Tag>}
                  title={
                    <a
                      onClick={(data) => console.log(data)}
                      href={'#' + item.key}
                    >
                      {item.value}
                    </a>
                  }
                  description={item.file.access}
                />
                <div>1</div>

                <div>
                  <Button
                    onClick={(d) => console.log(d.target.attrubutes)}
                    key={item.key}
                  >
                    Изменить
                  </Button>
                </div>
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}

ReactDOM.render(<File />, document.getElementById('container'));
