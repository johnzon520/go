/*
北京汽车
邀请注册：http://wx.smartservice.bjev.com.cn/register.html?id=8a8d81de81fd7e8701823589a4aa5bcb

积分换实物
自动完成签到和转发任务，其他任务不会做

https://api.smartservice.bjev.com.cn/gateway-api/v1/users/xxxxxxxxx
捉包把上面url的后面那串id，跟header里的Authorization(去掉Bearer)用#连起来，填到bjqcCookie里

重写：打开APP获取
[task_local]
#北京汽车
58 0,9-22/4 * * * https://raw.githubusercontent.com/leafTheFish/DeathNote/main/bjqc.js, tag=北京汽车, enabled=true
[rewrite_local]
https://api.smartservice.bjev.com.cn/gateway-api/v1/app/userAppInfo url script-request-header https://raw.githubusercontent.com/leafTheFish/DeathNote/main/bjqc.js
[MITM]
hostname = api.smartservice.bjev.com.cn

定时：一天一两次
cron: 45 7,20 * * *	

const $ = new Env("北京汽车")
*/

const _0x14e444 = new _0x5aabb5("北京汽车");
let _0x308035 = ["\n"],
  _0x4db032 = "bjqcCookie",
  _0x16029c = (_0x14e444.isNode() ? process.env[_0x4db032] : _0x14e444.getdata(_0x4db032)) || "",
  _0x31d071 = [],
  _0xe7d16f = 0,
  _0x5af966 = 0,
  _0x1417fe = "application/json; charset=utf-8",
  _0x3a9222 = "CarPlatform/2.11.0 (iPhone; iOS 15.0; Scale/3.00)",
  _0x4c33a5 = 8,
  _0x1d9a9d = 1.02,
  _0x37d660 = "bjqc",
  _0xdfe236 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json";
class _0x58ab1b {
  constructor(_0xabdc8a) {
    this.index = ++_0xe7d16f;
    this.name = this.index;
    this.valid = false;
    let _0x49863a = _0xabdc8a.split("#");
    this.id = _0x49863a[0];
    this.auth = _0x49863a[1];
  }
  getFakeSign() {
    return _0x14e444.randomString(32) + "|" + _0x14e444.randomPattern("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX") + "|" + Date.now();
  }
  async taskApi(_0x378cf8 = {}) {
    let _0x6f66fd = {};
    try {
      let _0x5c0c89 = _0x378cf8.url.replace("//", "/").split("/")[1],
        _0x2775f7 = _0x378cf8.url;
      if (_0x378cf8.queryParam) {
        _0x2775f7 += "?" + _0x14e444.json2str(_0x378cf8.queryParam, "&", true);
      }
      let _0x18bebf = {
        url: _0x2775f7,
        headers: {
          Host: _0x5c0c89,
          Connection: "keep-alive",
          "User-Agent": _0x3a9222,
          "security-sign": this.getFakeSign(),
          Authorization: "Bearer " + this.auth
        },
        timeout: 5000
      };
      if (_0x378cf8.body) {
        _0x18bebf.headers["Content-Type"] = _0x378cf8["Content-Type"] || _0x1417fe;
        if (typeof _0x378cf8.body === "object") {
          if (_0x18bebf.headers["Content-Type"].includes("json")) {
            _0x18bebf.body = JSON.stringify(_0x378cf8.body);
          } else {
            for (let _0x1ee507 in _0x378cf8.body) {
              typeof _0x378cf8.body[_0x1ee507] === "object" && (_0x378cf8.body[_0x1ee507] = JSON.stringify(_0x378cf8.body[_0x1ee507]));
            }
            _0x18bebf.body = _0x14e444.json2str(_0x378cf8.body, "&");
          }
        } else {
          _0x18bebf.body = _0x378cf8.body;
        }
      }
      if (_0x378cf8.urlObjectParam) {
        Object.assign(_0x18bebf, _0x378cf8.urlObjectParam);
      }
      if (_0x378cf8.headerParam) {
        Object.assign(_0x18bebf.headers, _0x378cf8.headerParam);
      }
      _0x6f66fd = Object.assign({}, await _0xbe49c4(_0x378cf8.method, _0x18bebf));
      _0x6f66fd.statusCode = _0x6f66fd?.["err"]?.["response"]?.["statusCode"] || _0x6f66fd?.["resp"]?.["statusCode"];
      _0x6f66fd.statusCode != 200 && console.log("[" + _0x378cf8.fn + "]返回[" + _0x6f66fd.statusCode + "]");
      if (_0x6f66fd?.["resp"]?.["body"]) {
        if (typeof _0x6f66fd.resp.body === "object") {
          _0x6f66fd.result = _0x6f66fd.resp.body;
        } else {
          try {
            _0x6f66fd.result = JSON.parse(_0x6f66fd.resp.body);
          } catch (_0x998257) {
            _0x6f66fd.result = _0x6f66fd.resp.body;
          }
        }
      }
    } catch (_0x1c9e59) {
      console.log(_0x1c9e59);
    } finally {
      return Promise.resolve(_0x6f66fd);
    }
  }
  async getUserInfo() {
    let _0xe5a92 = {};
    try {
      let _0x50ccd1 = {
        fn: "getUserInfo",
        method: "get",
        url: "https://api.smartservice.bjev.com.cn/gateway-api/v1/users/" + this.id
      };
      _0xe5a92 = Object.assign({}, await this.taskApi(_0x50ccd1));
      let _0x46788e = _0xe5a92.result;
      if (_0x46788e?.["user"]) {
        this.valid = true;
        this.points = _0x46788e.member.totalpoints;
        this.phone = _0x46788e.user.mobile;
        this.mixPhone = this.phone.slice(0, 3) + "****" + this.phone.slice(7, 13);
        this.name = _0x46788e.user.name;
        this.oneid = _0x46788e.user.oneId;
        _0x14e444.logAndNotify("昵称：" + this.name);
        _0x14e444.logAndNotify("手机：" + this.mixPhone);
      } else {
        _0x14e444.logAndNotify("登录失败：" + (_0x46788e || ""));
      }
    } catch (_0x3e262c) {
      console.log(_0x3e262c);
    } finally {
      return Promise.resolve(_0xe5a92);
    }
  }
  async getUserPoint() {
    let _0x251d60 = {};
    try {
      let _0xe5b9cf = {
        fn: "getUserPoint",
        method: "get",
        url: "https://api.smartservice.bjev.com.cn/gateway-api/v1/users/" + this.id
      };
      _0x251d60 = Object.assign({}, await this.taskApi(_0xe5b9cf));
      let _0xaf4ede = _0x251d60.result;
      _0xaf4ede.user ? (this.points = _0xaf4ede.member.totalpoints, _0x14e444.logAndNotify("积分：" + this.points)) : console.log("查询积分失败：" + _0xaf4ede);
    } catch (_0x39574f) {
      console.log(_0x39574f);
    } finally {
      return Promise.resolve(_0x251d60);
    }
  }
  async getSignInfo() {
    let _0x12d276 = {};
    try {
      let _0x5ebbfb = {
        fn: "getSignInfo",
        method: "get",
        url: "https://api.smartservice.bjev.com.cn/gateway-api//v1/sign"
      };
      _0x12d276 = Object.assign({}, await this.taskApi(_0x5ebbfb));
      let _0x17f289 = _0x12d276.result;
      _0x17f289.returnStatus == 1 ? await this.doSign() : console.log(_0x17f289.returnMsg || _0x17f289);
    } catch (_0x558104) {
      console.log(_0x558104);
    } finally {
      return Promise.resolve(_0x12d276);
    }
  }
  async doSign() {
    let _0x593334 = {};
    try {
      const _0x3a6320 = {
        id: this.id
      };
      let _0x5b687c = {
        fn: "doSign",
        method: "post",
        url: "http://api.smartservice.bjev.com.cn/gateway-api/v1/sign",
        queryParam: _0x3a6320
      };
      _0x593334 = Object.assign({}, await this.taskApi(_0x5b687c));
      let _0x546742 = _0x593334.result;
      _0x546742.points ? console.log("签到获得" + _0x546742.points + "积分") : console.log(_0x546742.returnMsg || _0x546742);
    } catch (_0xb7fd5e) {
      console.log(_0xb7fd5e);
    } finally {
      return Promise.resolve(_0x593334);
    }
  }
  async getTaskList() {
    let _0x7e29b2 = {};
    try {
      const _0x5b949b = {
        oneid: this.oneid
      };
      let _0x2dfdc1 = {
        fn: "getTaskList",
        method: "get",
        url: "http://api.smartservice.bjev.com.cn/gateway-api/v1/pointRule/behaviour",
        queryParam: _0x5b949b
      };
      _0x7e29b2 = Object.assign({}, await this.taskApi(_0x2dfdc1));
      let _0x17b0d6 = _0x7e29b2.result;
      if (_0x17b0d6.returnStatus == 1) {
        for (let _0x1a749f of _0x17b0d6.returnDataList) {
          console.log(_0x1a749f.channel + " -- " + (_0x1a749f.triggers && _0x1a749f.daynum >= _0x1a749f.triggers ? "已" : "未") + "完成" + (_0x1a749f.triggers ? "，" + (_0x1a749f.daynum || "0") + "/" + _0x1a749f.triggers : ""));
        }
        for (let _0x188fd7 of _0x17b0d6.returnDataList) {
          switch (_0x188fd7.code) {
            case "forward":
              for (let _0x47bfec = _0x188fd7.daynum; _0x47bfec < _0x188fd7.triggers; _0x47bfec++) {
                await this.noteForword();
              }
              break;
            default:
              break;
          }
        }
      } else {
        console.log(_0x17b0d6.returnMsg || _0x17b0d6);
      }
    } catch (_0x4c3899) {
      console.log(_0x4c3899);
    } finally {
      return Promise.resolve(_0x7e29b2);
    }
  }
  async getTaskReward() {
    let _0x38e544 = {};
    try {
      const _0x35aa94 = {
        oneid: this.oneid
      };
      let _0x4cefcf = {
        fn: "getTaskReward",
        method: "get",
        url: "http://api.smartservice.bjev.com.cn/gateway-api/v1/pointRule/behaviour",
        queryParam: _0x35aa94
      };
      _0x38e544 = Object.assign({}, await this.taskApi(_0x4cefcf));
      let _0x1e8eae = _0x38e544.result;
      if (_0x1e8eae.returnStatus == 1) {
        for (let _0x5cf1a2 of _0x1e8eae.returnDataList) {
          _0x5cf1a2.currentNum && (await this.getPoints(_0x5cf1a2));
        }
      } else {
        console.log(_0x1e8eae.returnMsg || _0x1e8eae);
      }
    } catch (_0x4c0c12) {
      console.log(_0x4c0c12);
    } finally {
      return Promise.resolve(_0x38e544);
    }
  }
  async noteForword() {
    let _0x581b96 = {};
    try {
      let _0x1367ca = {
        fn: "noteForword",
        method: "get",
        url: "https://api.smartservice.bjev.com.cn/gateway-api/v1/user/noteForword",
        queryParam: {
          id: this.id,
          otherId: _0x14e444.randomString(32)
        }
      };
      _0x581b96 = Object.assign({}, await this.taskApi(_0x1367ca));
    } catch (_0x2f893b) {
      console.log(_0x2f893b);
    } finally {
      return Promise.resolve(_0x581b96);
    }
  }
  async getPoints(_0x128601) {
    let _0x2ce009 = {};
    try {
      const _0x6d628d = {
        code: _0x128601.code,
        oneid: this.oneid
      };
      let _0x3b0763 = {
        fn: "getPoints",
        method: "get",
        url: "http://api.smartservice.bjev.com.cn/gateway-api/v1/pointRule/points",
        queryParam: _0x6d628d
      };
      _0x2ce009 = Object.assign({}, await this.taskApi(_0x3b0763));
      let _0xb04542 = _0x2ce009.result;
      _0xb04542.returnStatus == 1 ? console.log("领取任务[" + _0x128601.channel + "]奖励成功") : console.log(_0xb04542.returnMsg || _0xb04542);
    } catch (_0x28d254) {
      console.log(_0x28d254);
    } finally {
      return Promise.resolve(_0x2ce009);
    }
  }
  async userTask() {
    let _0xa51da4 = {};
    try {
      _0x14e444.logAndNotify("\n============= 账号[" + this.index + "] =============");
      await this.getUserInfo();
      if (!this.valid) {
        return;
      }
      await this.getSignInfo();
      await this.getTaskList();
      await this.getTaskReward();
      await this.getUserPoint();
    } catch (_0x3970d4) {
      console.log(_0x3970d4);
    } finally {
      return Promise.resolve(_0xa51da4);
    }
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x44f897();
  } else {
    if (!(await _0x1a86e1())) {
      return;
    }
    if (!_0x49a6f0()) {
      return;
    }
    for (let _0x50f1ec of _0x31d071) {
      await _0x50f1ec.userTask();
    }
  }
})().catch(_0x3b3f8d => console.log(_0x3b3f8d)).finally(() => _0x14e444.done());
async function _0x44f897() {
  if ($request.url.includes("v1/app/userAppInfo")) {
    try {
      let _0x2fa794 = $request.url.match(/v1\/app\/userAppInfo\/(\w+)/)[1],
        _0x2e8c51 = $request.headers.Authorization.match(/Bearer (\w+)/)[1],
        _0x3154e7 = _0x2fa794 + "#" + _0x2e8c51,
        _0x17f52d = _0x308035[0];
      for (let _0x1712c8 of _0x308035) {
        if (_0x16029c?.["includes"](_0x1712c8)) {
          _0x17f52d = _0x1712c8;
          break;
        }
      }
      if (!_0x16029c?.["includes"](_0x2fa794)) {
        let _0x29e4e0 = _0x16029c ? _0x16029c.split(_0x17f52d) : [];
        _0x29e4e0.push(_0x3154e7);
        _0x16029c = _0x29e4e0.join(_0x17f52d);
        _0x14e444.setdata(_0x16029c, _0x4db032);
        _0x14e444.msg("获取第" + _0x29e4e0.length + "个账户CK成功，保存到变量[" + _0x4db032 + "]: " + _0x3154e7);
      } else {
        if (!_0x16029c?.["includes"](_0x3154e7)) {
          let _0x24b6d4 = _0x16029c.split(_0x17f52d);
          for (let _0x43101f in _0x24b6d4) {
            if (_0x24b6d4[_0x43101f]?.["includes"](_0x2fa794)) {
              _0x24b6d4[_0x43101f] = _0x3154e7;
              _0x14e444.msg("更新第" + (Number(_0x43101f) + 1) + "个账户CK成功，保存到变量[" + _0x4db032 + "]: " + _0x3154e7);
              break;
            }
          }
          _0x16029c = _0x24b6d4.join(_0x17f52d);
          _0x14e444.setdata(_0x16029c, _0x4db032);
        }
      }
    } catch (_0x36aea1) {}
  }
}
function _0x49a6f0() {
  if (_0x16029c) {
    let _0x3554b8 = _0x308035[0];
    for (let _0x265972 of _0x308035) {
      if (_0x16029c.indexOf(_0x265972) > -1) {
        _0x3554b8 = _0x265972;
        break;
      }
    }
    for (let _0x26b406 of _0x16029c.split(_0x3554b8)) {
      if (_0x26b406) {
        _0x31d071.push(new _0x58ab1b(_0x26b406));
      }
    }
    _0x5af966 = _0x31d071.length;
  } else {
    console.log("未找到CK: " + _0x4db032);
    return false;
  }
  console.log("共找到" + _0x5af966 + "个账号");
  return true;
}
async function _0x1a86e1(_0x2be9a2 = 0) {
  let _0x2863a0 = true;
  try {
    let _0x568d3c = {
        url: _0xdfe236,
        timeout: 5000
      },
      _0xc9e079 = null,
      _0xaa40db = await _0xbe49c4("get", _0x568d3c);
    if (_0xaa40db.err) {
      console.log("服务器错误[" + _0xaa40db?.["resp"]?.["statusCode"] + "]，重试...");
    } else {
      try {
        _0xc9e079 = JSON.parse(_0xaa40db.resp.body);
        _0xc9e079?.["code"] == 0 && (_0xc9e079 = JSON.parse(_0xc9e079.data.file.data));
      } catch (_0x1f9df2) {}
    }
    if (!_0xc9e079) {
      if (_0x2be9a2 < _0x4c33a5) {
        _0x2863a0 = await _0x1a86e1(++_0x2be9a2);
      }
    } else {
      _0xc9e079?.["commonNotify"] && _0xc9e079.commonNotify.length > 0 && _0x14e444.logAndNotify(_0xc9e079.commonNotify.join("\n") + "\n");
      _0xc9e079?.["commonMsg"] && _0xc9e079.commonMsg.length > 0 && console.log(_0xc9e079.commonMsg.join("\n") + "\n");
      if (_0xc9e079[_0x37d660]) {
        let _0x40e24b = _0xc9e079[_0x37d660];
        _0x40e24b.status == 0 ? _0x1d9a9d >= _0x40e24b.version ? (_0x2863a0 = true, console.log(_0x40e24b.msg[_0x40e24b.status]), console.log(_0x40e24b.updateMsg), console.log("现在运行的脚本版本是：" + _0x1d9a9d + "，最新脚本版本：" + _0x40e24b.latestVersion)) : console.log(_0x40e24b.versionMsg) : console.log(_0x40e24b.msg[_0x40e24b.status]);
      } else {
        console.log(_0xc9e079.errorMsg);
      }
    }
  } catch (_0x166890) {
    console.log(_0x166890);
  } finally {
    return Promise.resolve(_0x2863a0);
  }
}
async function _0xbe49c4(_0x42d966, _0x504ecb) {
  return new Promise(_0x12cb5e => {
    _0x14e444.send(_0x42d966, _0x504ecb, async (_0x408bb9, _0x48ffa1, _0x411d38) => {
      const _0x5600a6 = {
        err: _0x408bb9,
        req: _0x48ffa1,
        resp: _0x411d38
      };
      _0x12cb5e(_0x5600a6);
    });
  });
}
function _0x5aabb5(_0x2806f6, _0x12ff7e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x1dc5e9, _0x250582) {
      this.name = _0x1dc5e9;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x250582);
      console.log(this.name + " 开始运行：\n");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    getdata(_0x2a8b94) {
      let _0x42e495 = this.getval(_0x2a8b94);
      if (/^@/.test(_0x2a8b94)) {
        const [, _0x924f81, _0x5b1949] = /^@(.*?)\.(.*?)$/.exec(_0x2a8b94),
          _0x5a5857 = _0x924f81 ? this.getval(_0x924f81) : "";
        if (_0x5a5857) {
          try {
            const _0x91e37 = JSON.parse(_0x5a5857);
            _0x42e495 = _0x91e37 ? this.lodash_get(_0x91e37, _0x5b1949, "") : _0x42e495;
          } catch (_0x19ad28) {
            _0x42e495 = "";
          }
        }
      }
      return _0x42e495;
    }
    setdata(_0x34eec9, _0x3d64f3) {
      let _0x2ee41b = !1;
      if (/^@/.test(_0x3d64f3)) {
        const [, _0x4ef508, _0x486f1e] = /^@(.*?)\.(.*?)$/.exec(_0x3d64f3),
          _0x242ad8 = this.getval(_0x4ef508),
          _0xeb6e75 = _0x4ef508 ? "null" === _0x242ad8 ? null : _0x242ad8 || "{}" : "{}";
        try {
          const _0x1e8da8 = JSON.parse(_0xeb6e75);
          this.lodash_set(_0x1e8da8, _0x486f1e, _0x34eec9);
          _0x2ee41b = this.setval(JSON.stringify(_0x1e8da8), _0x4ef508);
        } catch (_0x5cd717) {
          const _0x2e738b = {};
          this.lodash_set(_0x2e738b, _0x486f1e, _0x34eec9);
          _0x2ee41b = this.setval(JSON.stringify(_0x2e738b), _0x4ef508);
        }
      } else {
        _0x2ee41b = this.setval(_0x34eec9, _0x3d64f3);
      }
      return _0x2ee41b;
    }
    getval(_0x3abc9d) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x3abc9d) : this.isQuanX() ? $prefs.valueForKey(_0x3abc9d) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x3abc9d]) : this.data && this.data[_0x3abc9d] || null;
    }
    setval(_0x38ea22, _0x177272) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x38ea22, _0x177272) : this.isQuanX() ? $prefs.setValueForKey(_0x38ea22, _0x177272) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x177272] = _0x38ea22, this.writedata(), !0) : this.data && this.data[_0x177272] || null;
    }
    send(_0x1fde03, _0x21540c, _0x53c818 = () => {}) {
      if (_0x1fde03 != "get" && _0x1fde03 != "post" && _0x1fde03 != "put" && _0x1fde03 != "delete") {
        console.log("无效的http方法：" + _0x1fde03);
        return;
      }
      if (_0x1fde03 == "get" && _0x21540c.headers) {
        delete _0x21540c.headers["Content-Type"];
        delete _0x21540c.headers["Content-Length"];
      } else {
        if (_0x21540c.body && _0x21540c.headers) {
          if (!_0x21540c.headers["Content-Type"]) {
            _0x21540c.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x21540c.headers = _0x21540c.headers || {};
          const _0x2bb79e = {
            "X-Surge-Skip-Scripting": !1
          };
          Object.assign(_0x21540c.headers, _0x2bb79e);
        }
        let _0x3e7045 = {
          method: _0x1fde03,
          url: _0x21540c.url,
          headers: _0x21540c.headers,
          timeout: _0x21540c.timeout,
          data: _0x21540c.body
        };
        if (_0x1fde03 == "get") {
          delete _0x3e7045.data;
        }
        $axios(_0x3e7045).then(_0x200f84 => {
          const {
              status: _0x158d8c,
              request: _0x2a12a9,
              headers: _0x430a28,
              data: _0x41071a
            } = _0x200f84,
            _0x43c63e = {
              statusCode: _0x158d8c,
              headers: _0x430a28,
              body: _0x41071a
            };
          _0x53c818(null, _0x2a12a9, _0x43c63e);
        }).catch(_0xd5ceea => console.log(_0xd5ceea));
      } else {
        if (this.isQuanX()) {
          const _0xecb22a = {
            hints: !1
          };
          _0x21540c.method = _0x1fde03.toUpperCase();
          this.isNeedRewrite && (_0x21540c.opts = _0x21540c.opts || {}, Object.assign(_0x21540c.opts, _0xecb22a));
          $task.fetch(_0x21540c).then(_0x5e7537 => {
            const {
                statusCode: _0x16b7e3,
                request: _0x3875d6,
                headers: _0xfd77a2,
                body: _0x2e612a
              } = _0x5e7537,
              _0x1274bd = {
                statusCode: _0x16b7e3,
                headers: _0xfd77a2,
                body: _0x2e612a
              };
            _0x53c818(null, _0x3875d6, _0x1274bd);
          }, _0x5b1d12 => _0x53c818(_0x5b1d12));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
                url: _0x29b336,
                ..._0x40d513
              } = _0x21540c,
              _0xaf88ce = {
                followRedirect: false
              };
            this.instance = this.got.extend(_0xaf88ce);
            this.instance[_0x1fde03](_0x29b336, _0x40d513).then(_0x310353 => {
              const {
                  statusCode: _0x2c12f9,
                  request: _0x50e4cb,
                  headers: _0x32cda8,
                  body: _0x2bd7f0
                } = _0x310353,
                _0xc468b2 = {
                  statusCode: _0x2c12f9,
                  headers: _0x32cda8,
                  body: _0x2bd7f0
                };
              _0x53c818(null, _0x50e4cb, _0xc468b2);
            }, _0x4f35c5 => {
              const {
                message: _0x31d6ad,
                request: _0x2f6106,
                response: _0x161d8c
              } = _0x4f35c5;
              _0x53c818(_0x31d6ad, _0x2f6106, _0x161d8c);
            });
          }
        }
      }
    }
    time(_0xd3a33, _0x169bf9 = null) {
      let _0x4392ed = _0x169bf9 ? new Date(_0x169bf9) : new Date(),
        _0x1ef7e1 = {
          "M+": _0x4392ed.getMonth() + 1,
          "d+": _0x4392ed.getDate(),
          "h+": _0x4392ed.getHours(),
          "m+": _0x4392ed.getMinutes(),
          "s+": _0x4392ed.getSeconds(),
          "q+": Math.floor((_0x4392ed.getMonth() + 3) / 3),
          S: _0x4392ed.getMilliseconds()
        };
      /(y+)/.test(_0xd3a33) && (_0xd3a33 = _0xd3a33.replace(RegExp.$1, (_0x4392ed.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0xcbdc51 in _0x1ef7e1) new RegExp("(" + _0xcbdc51 + ")").test(_0xd3a33) && (_0xd3a33 = _0xd3a33.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x1ef7e1[_0xcbdc51] : ("00" + _0x1ef7e1[_0xcbdc51]).substr(("" + _0x1ef7e1[_0xcbdc51]).length)));
      return _0xd3a33;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let _0x44184f = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x14e444.isNode()) {
        var _0x3c80f8 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x3c80f8.sendNotify(this.name, _0x44184f);
      } else {
        this.msg(_0x44184f);
      }
    }
    logAndNotify(_0x24b1c5) {
      console.log(_0x24b1c5);
      this.notifyStr += _0x24b1c5;
      this.notifyStr += "\n";
    }
    logAndNotifyWithTime(_0x42e5e8) {
      let _0x9ea2c8 = "[" + this.time("hh:mm:ss.S") + "]" + _0x42e5e8;
      console.log(_0x9ea2c8);
      this.notifyStr += _0x9ea2c8;
      this.notifyStr += "\n";
    }
    logWithTime(_0x3cc237) {
      console.log("[" + this.time("hh:mm:ss.S") + "]" + _0x3cc237);
    }
    msg(_0x418bd8 = t, _0x18998b = "", _0x45fe62 = "", _0x26df7b) {
      const _0x39966a = _0xc01a72 => {
        if (!_0xc01a72) {
          return _0xc01a72;
        }
        if ("string" == typeof _0xc01a72) {
          return this.isLoon() ? _0xc01a72 : this.isQuanX() ? {
            "open-url": _0xc01a72
          } : this.isSurge() ? {
            url: _0xc01a72
          } : void 0;
        }
        if ("object" == typeof _0xc01a72) {
          if (this.isLoon()) {
            let _0x4ef303 = _0xc01a72.openUrl || _0xc01a72.url || _0xc01a72["open-url"],
              _0x2798ef = _0xc01a72.mediaUrl || _0xc01a72["media-url"];
            const _0x240de3 = {
              openUrl: _0x4ef303,
              mediaUrl: _0x2798ef
            };
            return _0x240de3;
          }
          if (this.isQuanX()) {
            let _0x4336f9 = _0xc01a72["open-url"] || _0xc01a72.url || _0xc01a72.openUrl,
              _0x21b5a2 = _0xc01a72["media-url"] || _0xc01a72.mediaUrl;
            const _0x3b9eaf = {
              "open-url": _0x4336f9,
              "media-url": _0x21b5a2
            };
            return _0x3b9eaf;
          }
          if (this.isSurge()) {
            let _0x5eb19a = _0xc01a72.url || _0xc01a72.openUrl || _0xc01a72["open-url"];
            const _0x369fd4 = {
              url: _0x5eb19a
            };
            return _0x369fd4;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x418bd8, _0x18998b, _0x45fe62, _0x39966a(_0x26df7b)) : this.isQuanX() && $notify(_0x418bd8, _0x18998b, _0x45fe62, _0x39966a(_0x26df7b)));
      let _0x52c1e2 = ["", "============== 系统通知 =============="];
      _0x52c1e2.push(_0x418bd8);
      _0x18998b && _0x52c1e2.push(_0x18998b);
      _0x45fe62 && _0x52c1e2.push(_0x45fe62);
      console.log(_0x52c1e2.join("\n"));
    }
    getMin(_0x4f31c1, _0x1ca0d4) {
      return _0x4f31c1 < _0x1ca0d4 ? _0x4f31c1 : _0x1ca0d4;
    }
    getMax(_0x49d669, _0x147cb1) {
      return _0x49d669 < _0x147cb1 ? _0x147cb1 : _0x49d669;
    }
    padStr(_0x26260b, _0x1cee56, _0x618fa9 = "0") {
      let _0x7e0328 = String(_0x26260b),
        _0x4f0978 = _0x1cee56 > _0x7e0328.length ? _0x1cee56 - _0x7e0328.length : 0,
        _0x3d2257 = "";
      for (let _0x1d1768 = 0; _0x1d1768 < _0x4f0978; _0x1d1768++) {
        _0x3d2257 += _0x618fa9;
      }
      _0x3d2257 += _0x7e0328;
      return _0x3d2257;
    }
    json2str(_0x4b11e5, _0x4feb01, _0x1fe057 = false) {
      let _0x1852a9 = [];
      for (let _0x3c8854 of Object.keys(_0x4b11e5).sort()) {
        let _0x591252 = _0x4b11e5[_0x3c8854];
        if (_0x591252 && _0x1fe057) {
          _0x591252 = encodeURIComponent(_0x591252);
        }
        _0x1852a9.push(_0x3c8854 + "=" + _0x591252);
      }
      return _0x1852a9.join(_0x4feb01);
    }
    str2json(_0x57b455, _0x3c6491 = false) {
      let _0x256416 = {};
      for (let _0x1329fc of _0x57b455.split("&")) {
        if (!_0x1329fc) {
          continue;
        }
        let _0x40f550 = _0x1329fc.indexOf("=");
        if (_0x40f550 == -1) {
          continue;
        }
        let _0x37254b = _0x1329fc.substr(0, _0x40f550),
          _0x12e803 = _0x1329fc.substr(_0x40f550 + 1);
        if (_0x3c6491) {
          _0x12e803 = decodeURIComponent(_0x12e803);
        }
        _0x256416[_0x37254b] = _0x12e803;
      }
      return _0x256416;
    }
    randomPattern(_0x1eb224, _0x38b2c7 = "abcdef0123456789") {
      let _0x1168ba = "";
      for (let _0x483c33 of _0x1eb224) {
        if (_0x483c33 == "x") {
          _0x1168ba += _0x38b2c7.charAt(Math.floor(Math.random() * _0x38b2c7.length));
        } else {
          _0x483c33 == "X" ? _0x1168ba += _0x38b2c7.charAt(Math.floor(Math.random() * _0x38b2c7.length)).toUpperCase() : _0x1168ba += _0x483c33;
        }
      }
      return _0x1168ba;
    }
    randomString(_0x3e3624, _0x149143 = "abcdef0123456789") {
      let _0xef9cd5 = "";
      for (let _0x3b9b49 = 0; _0x3b9b49 < _0x3e3624; _0x3b9b49++) {
        _0xef9cd5 += _0x149143.charAt(Math.floor(Math.random() * _0x149143.length));
      }
      return _0xef9cd5;
    }
    randomList(_0x3078c4) {
      let _0x483e99 = Math.floor(Math.random() * _0x3078c4.length);
      return _0x3078c4[_0x483e99];
    }
    wait(_0x19db52) {
      return new Promise(_0x1c5a37 => setTimeout(_0x1c5a37, _0x19db52));
    }
    async done(_0x4887a7 = {}) {
      await this.showmsg();
      const _0x2894af = new Date().getTime(),
        _0x53fc4d = (_0x2894af - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x53fc4d + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x4887a7);
      }
    }
  }(_0x2806f6, _0x12ff7e);
}
