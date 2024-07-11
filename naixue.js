/*
奈雪签到 微信小程序

感谢浦浦大佬提供的加密算法
现在仅有签到功能，好像也没啥其他活动能做的
定时随意，每天一到两次就行

奈雪点单 微信小程序
捉tm-api.pin-dao.cn的包，把header里面的Authorization(删掉Bearer)后填到变量naixueCookie
多账号换行隔开

const $ = new Env("奈雪签到")
cron: 20 8,18 * * *
*/

const _0x1558be = new _0x555c13("奈雪签到"),
  _0x5c28c8 = require("crypto-js"),
  _0x4214ca = require("dayjs");
let _0x1c1dcf = ["\n"],
  _0x1b4740 = "naixueCookie",
  _0x1ee715 = (_0x1558be.isNode() ? process.env[_0x1b4740] : _0x1558be.getdata(_0x1b4740)) || "",
  _0x6c0ae8 = [],
  _0x21331e = 0,
  _0x4ab923 = 0,
  _0x1514a9 = "application/json",
  _0x1a3f59 = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.27(0x18001b37) NetType/WIFI Language/zh_CN miniProgram/wxab7430e6e8b9a4ab",
  _0x88e09e = "https://tm-web.pin-dao.cn/",
  _0x56f2bf = "https://tm-web.pin-dao.cn";
const _0x181651 = "QL6ZOftGzbziPlZwfiXM",
  _0x300ddb = "sArMTldQ9tqU19XIRDMWz7BO5WaeBnrezA";
let _0x5b7fe6 = 8,
  _0x1af5ff = 1.01,
  _0x44a18d = "naixue",
  _0x1247d0 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json";
class _0x447874 {
  constructor(_0x1dae60) {
    this.index = ++_0x21331e;
    this.name = this.index;
    this.valid = false;
    this.auth = _0x1dae60;
  }
  getBody() {
    let _0xfcecbc = parseInt(_0x1558be.randomString(6, "123456789")),
      _0x387ae5 = Math.floor(Date.now() / 1000),
      _0x3c484d = "nonce=" + _0xfcecbc + "&openId=" + _0x181651 + "&timestamp=" + _0x387ae5,
      _0x172f0c = _0x5c28c8.HmacSHA1(_0x3c484d, _0x300ddb).toString(_0x5c28c8.enc.Base64);
    const _0x405170 = {
      platform: "wxapp",
      version: "4.4.23",
      imei: "",
      osn: "iPhone 12<iPhone13,2>",
      sv: "iOS 15.0",
      lang: "zh_CN",
      currency: "CNY",
      timeZone: "",
      nonce: _0xfcecbc,
      openId: _0x181651,
      timestamp: _0x387ae5,
      signature: _0x172f0c
    };
    const _0x3f81af = {
      businessType: 1,
      brand: 26000252,
      tenantId: 1,
      channel: 2,
      stallType: null,
      storeId: null
    };
    let _0x4f36fc = {
      common: _0x405170,
      params: _0x3f81af
    };
    return _0x4f36fc;
  }
  async taskApi(_0x3d365e = {}) {
    let _0x192174 = {};
    try {
      let _0x4fd752 = _0x3d365e.url.replace("//", "/").split("/")[1],
        _0x4293ce = _0x3d365e.url;
      if (_0x3d365e.queryParam) {
        _0x4293ce += "?" + _0x1558be.json2str(_0x3d365e.queryParam, "&", true);
      }
      let _0x49f7b0 = {
        url: _0x4293ce,
        headers: {
          Host: _0x4fd752,
          Connection: "keep-alive",
          "User-Agent": _0x1a3f59,
          Authorization: "Bearer " + this.auth,
          Referer: _0x88e09e,
          Origin: _0x56f2bf
        },
        timeout: 5000
      };
      if (_0x3d365e.body) {
        let _0x53f53e = this.getBody();
        Object.assign(_0x53f53e.params, _0x3d365e.body);
        _0x49f7b0.headers["Content-Type"] = _0x3d365e["Content-Type"] || _0x1514a9;
        if (_0x49f7b0.headers["Content-Type"].includes("json")) {
          _0x49f7b0.body = JSON.stringify(_0x53f53e);
        } else {
          for (let _0xe4d08e in _0x53f53e) {
            typeof _0x53f53e[_0xe4d08e] === "object" && (_0x53f53e[_0xe4d08e] = JSON.stringify(_0x53f53e[_0xe4d08e]));
          }
          _0x49f7b0.body = _0x1558be.json2str(_0x53f53e, "&");
        }
        _0x49f7b0.headers["Content-Length"] = _0x49f7b0.body ? Buffer.byteLength(_0x49f7b0.body, "utf8") : 0;
      }
      if (_0x3d365e.urlObjectParam) {
        Object.assign(_0x49f7b0, _0x3d365e.urlObjectParam);
      }
      if (_0x3d365e.headerParam) {
        Object.assign(_0x49f7b0.headers, _0x3d365e.headerParam);
      }
      _0x192174 = Object.assign({}, await _0x3f844e(_0x3d365e.method, _0x49f7b0));
      _0x192174.statusCode = _0x192174?.["err"]?.["response"]?.["statusCode"] || _0x192174?.["resp"]?.["statusCode"];
      _0x192174.statusCode != 200 && console.log("[" + _0x3d365e.fn + "]返回[" + _0x192174.statusCode + "]");
      if (_0x192174?.["resp"]?.["body"]) {
        if (typeof _0x192174.resp.body === "object") {
          _0x192174.result = _0x192174.resp.body;
        } else {
          try {
            _0x192174.result = JSON.parse(_0x192174.resp.body);
          } catch (_0x428503) {
            _0x192174.result = _0x192174.resp.body;
          }
        }
      }
    } catch (_0x11f957) {
      console.log(_0x11f957);
    } finally {
      return Promise.resolve(_0x192174);
    }
  }
  async baseUserinfo() {
    let _0x1d6ad7 = {};
    try {
      let _0x2232f8 = {
        fn: "baseUserinfo",
        method: "post",
        url: "https://tm-web.pin-dao.cn/user/base-userinfo",
        body: {}
      };
      _0x1d6ad7 = Object.assign({}, await this.taskApi(_0x2232f8));
      let _0x55da9f = _0x1d6ad7.result;
      if (_0x55da9f.code == 0) {
        this.valid = true;
        this.name = _0x55da9f.data.phone;
        console.log("账号[" + this.index + "][" + this.name + "]登录成功");
        await this.signRecord();
        await this.userAccount();
      } else {
        console.log("账号[" + this.index + "]登录失败: " + _0x55da9f.message);
      }
    } catch (_0xc6ead1) {
      console.log(_0xc6ead1);
    } finally {
      return Promise.resolve(_0x1d6ad7);
    }
  }
  async userAccount() {
    let _0x53d895 = {};
    try {
      let _0x1b993f = {
        fn: "userAccount",
        method: "post",
        url: "https://tm-web.pin-dao.cn/user/account/user-account",
        body: {}
      };
      _0x53d895 = Object.assign({}, await this.taskApi(_0x1b993f));
      let _0x533188 = _0x53d895.result;
      _0x533188.code == 0 ? (this.coin = _0x533188.data.coin, _0x1558be.logAndNotify("账号[" + this.index + "][" + this.name + "]奈雪币: " + this.coin)) : _0x1558be.logAndNotify("账号[" + this.index + "][" + this.name + "]查询奈雪币失败: " + _0x533188.message);
    } catch (_0x4e82c2) {
      console.log(_0x4e82c2);
    } finally {
      return Promise.resolve(_0x53d895);
    }
  }
  async signRecord() {
    let _0x4a0b3c = {};
    try {
      let _0xf082e5 = _0x4214ca().startOf("month").format("YYYY-MM-DD"),
        _0x4a8803 = _0x4214ca().format("YYYY-MM-DD");
      const _0x3d8ba6 = {
        signDate: _0xf082e5,
        startDate: _0x4a8803
      };
      let _0x4c2fd6 = {
        fn: "signRecord",
        method: "post",
        url: "https://tm-web.pin-dao.cn/user/sign/records",
        body: _0x3d8ba6
      };
      _0x4a0b3c = Object.assign({}, await this.taskApi(_0x4c2fd6));
      let _0x2c3d91 = _0x4a0b3c.result;
      _0x2c3d91.code == 0 ? (console.log("今天" + (_0x2c3d91.data.status ? "已" : "未") + "签到，已签到" + _0x2c3d91.data.signCount + "天"), !_0x2c3d91.data.status && (await this.signSave())) : console.log("查询签到失败: " + _0x2c3d91.message);
    } catch (_0x32006d) {
      console.log(_0x32006d);
    } finally {
      return Promise.resolve(_0x4a0b3c);
    }
  }
  async signSave() {
    let _0x18ba5b = {};
    try {
      let _0x3fd188 = _0x4214ca().format("YYYY-MM-DD");
      const _0x434606 = {
        signDate: _0x3fd188
      };
      let _0x3611f0 = {
        fn: "signSave",
        method: "post",
        url: "https://tm-web.pin-dao.cn/user/sign/save",
        body: _0x434606
      };
      _0x18ba5b = Object.assign({}, await this.taskApi(_0x3611f0));
      let _0x2215c8 = _0x18ba5b.result;
      _0x2215c8.code == 0 ? _0x2215c8.data.flag ? console.log("签到成功") : console.log("今天已经签到过了") : console.log("签到失败: " + _0x2215c8.message);
    } catch (_0x1c4407) {
      console.log(_0x1c4407);
    } finally {
      return Promise.resolve(_0x18ba5b);
    }
  }
  async userTask() {
    let _0xf7d672 = {};
    try {
      console.log("\n============= 账号[" + this.index + "] =============");
      await this.baseUserinfo();
      if (!this.valid) {
        return Promise.resolve(_0xf7d672);
      }
    } catch (_0x23d8b6) {
      console.log(_0x23d8b6);
    } finally {
      return Promise.resolve(_0xf7d672);
    }
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x13596c();
  } else {
    if (!(await _0x511dd6())) {
      return;
    }
    if (!_0x392a60()) {
      return;
    }
    for (let _0x3e5eaf of _0x6c0ae8) {
      await _0x3e5eaf.userTask();
    }
  }
})().catch(_0x270e22 => console.log(_0x270e22)).finally(() => _0x1558be.done());
async function _0x13596c() {
  if ($request.url.includes("user/base-userinfo")) {
    try {
      let _0x2d95f1 = $request.headers.Authorization.replace("Bearer ", ""),
        _0x3fd741 = _0x1c1dcf[0];
      for (let _0x104a7f of _0x1c1dcf) {
        if (_0x1ee715?.["includes"](_0x104a7f)) {
          _0x3fd741 = _0x104a7f;
          break;
        }
      }
      if (!_0x1ee715?.["includes"](id)) {
        let _0x309da5 = _0x1ee715 ? _0x1ee715.split(_0x3fd741) : [];
        _0x309da5.push(_0x2d95f1);
        _0x1ee715 = _0x309da5.join(_0x3fd741);
        _0x1558be.setdata(_0x1ee715, _0x1b4740);
        _0x1558be.msg("获取第" + _0x309da5.length + "个账户CK成功，保存到变量[" + _0x1b4740 + "]: " + _0x2d95f1);
      } else {
        let _0x4d1628 = _0x1ee715.split(_0x3fd741);
        for (let _0x18a74a in _0x4d1628) {
          console.log(_0x18a74a);
          if (_0x4d1628[_0x18a74a]?.["includes"](id)) {
            _0x4d1628[_0x18a74a] = _0x2d95f1;
            _0x1558be.msg("更新第" + (Number(_0x18a74a) + 1) + "个账户CK成功，保存到变量[" + _0x1b4740 + "]: " + _0x2d95f1);
            break;
          }
        }
        _0x1ee715 = _0x4d1628.join(_0x3fd741);
        _0x1558be.setdata(_0x1ee715, _0x1b4740);
      }
    } catch (_0x312dfd) {}
  }
}
function _0x392a60() {
  if (_0x1ee715) {
    let _0x4695da = _0x1c1dcf[0];
    for (let _0x3fa23f of _0x1c1dcf) {
      if (_0x1ee715.indexOf(_0x3fa23f) > -1) {
        _0x4695da = _0x3fa23f;
        break;
      }
    }
    for (let _0x192f55 of _0x1ee715.split(_0x4695da)) {
      if (_0x192f55) {
        _0x6c0ae8.push(new _0x447874(_0x192f55));
      }
    }
    _0x4ab923 = _0x6c0ae8.length;
  } else {
    console.log("未找到CK: " + _0x1b4740);
    return false;
  }
  console.log("共找到" + _0x4ab923 + "个账号");
  return true;
}
async function _0x511dd6(_0x33bba8 = 0) {
  let _0x40ca20 = true;
  try {
    let _0x17224a = {
        url: _0x1247d0,
        timeout: 5000
      },
      _0xdf6b71 = null,
      _0x5bf14b = await _0x3f844e("get", _0x17224a);
    if (_0x5bf14b.err) {
      console.log("服务器错误[" + _0x5bf14b?.["resp"]?.["statusCode"] + "]，重试...");
    } else {
      try {
        _0xdf6b71 = JSON.parse(_0x5bf14b.resp.body);
        _0xdf6b71 = JSON.parse(_0xdf6b71.data.file.data);
      } catch (_0x1a0777) {
        console.log(_0x1a0777);
      }
    }
    if (!_0xdf6b71) {
      if (_0x33bba8 < _0x5b7fe6) {
        _0x40ca20 = await _0x511dd6(++_0x33bba8);
      }
    } else {
      _0xdf6b71?.["commonNotify"] && _0xdf6b71.commonNotify.length > 0 && _0x1558be.logAndNotify(_0xdf6b71.commonNotify.join("\n") + "\n", false);
      _0xdf6b71?.["commonMsg"] && _0xdf6b71.commonMsg.length > 0 && console.log(_0xdf6b71.commonMsg.join("\n") + "\n");
      if (_0xdf6b71[_0x44a18d]) {
        let _0x232651 = _0xdf6b71[_0x44a18d];
        _0x232651.status == 0 ? _0x1af5ff >= _0x232651.version ? (_0x40ca20 = true, console.log(_0x232651.msg[_0x232651.status]), console.log(_0x232651.updateMsg), console.log("现在运行的脚本版本是：" + _0x1af5ff + "，最新脚本版本：" + _0x232651.latestVersion)) : console.log(_0x232651.versionMsg) : console.log(_0x232651.msg[_0x232651.status]);
      } else {
        console.log(_0xdf6b71.errorMsg);
      }
    }
  } catch (_0x276f70) {
    console.log(_0x276f70);
  } finally {
    return Promise.resolve(_0x40ca20);
  }
}
async function _0x3f844e(_0x38f768, _0x522013) {
  return new Promise(_0x54c634 => {
    _0x1558be.send(_0x38f768, _0x522013, async (_0x1c61f8, _0x40d8a2, _0x1f4289) => {
      const _0x125eea = {
        err: _0x1c61f8,
        req: _0x40d8a2,
        resp: _0x1f4289
      };
      _0x54c634(_0x125eea);
    });
  });
}
function _0x555c13(_0x414333, _0x174318) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x74d04f, _0x3c955f) {
      this.name = _0x74d04f;
      this.notifyStr = "";
      this.notifyFlag = false;
      this.startTime = new Date().getTime();
      Object.assign(this, _0x3c955f);
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
    getdata(_0x8c45c0) {
      let _0x296859 = this.getval(_0x8c45c0);
      if (/^@/.test(_0x8c45c0)) {
        const [, _0x153872, _0x984855] = /^@(.*?)\.(.*?)$/.exec(_0x8c45c0),
          _0x5e22ed = _0x153872 ? this.getval(_0x153872) : "";
        if (_0x5e22ed) {
          try {
            const _0x593dac = JSON.parse(_0x5e22ed);
            _0x296859 = _0x593dac ? this.lodash_get(_0x593dac, _0x984855, "") : _0x296859;
          } catch (_0x8f28ce) {
            _0x296859 = "";
          }
        }
      }
      return _0x296859;
    }
    setdata(_0x51cdb9, _0xd7d5b1) {
      let _0xaf7a5c = !1;
      if (/^@/.test(_0xd7d5b1)) {
        const [, _0x43558d, _0x5c3226] = /^@(.*?)\.(.*?)$/.exec(_0xd7d5b1),
          _0x52f1f3 = this.getval(_0x43558d),
          _0x5cda88 = _0x43558d ? "null" === _0x52f1f3 ? null : _0x52f1f3 || "{}" : "{}";
        try {
          const _0x59ca60 = JSON.parse(_0x5cda88);
          this.lodash_set(_0x59ca60, _0x5c3226, _0x51cdb9);
          _0xaf7a5c = this.setval(JSON.stringify(_0x59ca60), _0x43558d);
        } catch (_0x29dcd7) {
          const _0x507eb5 = {};
          this.lodash_set(_0x507eb5, _0x5c3226, _0x51cdb9);
          _0xaf7a5c = this.setval(JSON.stringify(_0x507eb5), _0x43558d);
        }
      } else {
        _0xaf7a5c = this.setval(_0x51cdb9, _0xd7d5b1);
      }
      return _0xaf7a5c;
    }
    getval(_0x4ecc89) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x4ecc89) : this.isQuanX() ? $prefs.valueForKey(_0x4ecc89) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4ecc89]) : this.data && this.data[_0x4ecc89] || null;
    }
    setval(_0x23a07e, _0x13baa2) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x23a07e, _0x13baa2) : this.isQuanX() ? $prefs.setValueForKey(_0x23a07e, _0x13baa2) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x13baa2] = _0x23a07e, this.writedata(), !0) : this.data && this.data[_0x13baa2] || null;
    }
    send(_0x2a3fea, _0x35efd6, _0x347778 = () => {}) {
      if (_0x2a3fea != "get" && _0x2a3fea != "post" && _0x2a3fea != "put" && _0x2a3fea != "delete") {
        console.log("无效的http方法：" + _0x2a3fea);
        return;
      }
      if (_0x2a3fea == "get" && _0x35efd6.headers) {
        delete _0x35efd6.headers["Content-Type"];
        delete _0x35efd6.headers["Content-Length"];
      } else {
        if (_0x35efd6.body && _0x35efd6.headers) {
          if (!_0x35efd6.headers["Content-Type"]) {
            _0x35efd6.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x35efd6.headers = _0x35efd6.headers || {};
          const _0x1866da = {
            "X-Surge-Skip-Scripting": !1
          };
          Object.assign(_0x35efd6.headers, _0x1866da);
        }
        let _0x4fba3d = {
          method: _0x2a3fea,
          url: _0x35efd6.url,
          headers: _0x35efd6.headers,
          timeout: _0x35efd6.timeout,
          data: _0x35efd6.body
        };
        if (_0x2a3fea == "get") {
          delete _0x4fba3d.data;
        }
        $axios(_0x4fba3d).then(_0x4e7231 => {
          const {
              status: _0x3cbc40,
              request: _0x28388a,
              headers: _0x2a6a59,
              data: _0x357594
            } = _0x4e7231,
            _0xdf13b6 = {
              statusCode: _0x3cbc40,
              headers: _0x2a6a59,
              body: _0x357594
            };
          _0x347778(null, _0x28388a, _0xdf13b6);
        }).catch(_0x27d59f => console.log(_0x27d59f));
      } else {
        if (this.isQuanX()) {
          const _0x2fe7da = {
            hints: !1
          };
          _0x35efd6.method = _0x2a3fea.toUpperCase();
          this.isNeedRewrite && (_0x35efd6.opts = _0x35efd6.opts || {}, Object.assign(_0x35efd6.opts, _0x2fe7da));
          $task.fetch(_0x35efd6).then(_0x580337 => {
            const {
                statusCode: _0x3d2ccb,
                request: _0x3d50fb,
                headers: _0x32d9d9,
                body: _0x3be451
              } = _0x580337,
              _0x2e3b5f = {
                statusCode: _0x3d2ccb,
                headers: _0x32d9d9,
                body: _0x3be451
              };
            _0x347778(null, _0x3d50fb, _0x2e3b5f);
          }, _0x59896d => _0x347778(_0x59896d));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
                url: _0x4fefe6,
                ..._0x2e66e7
              } = _0x35efd6,
              _0x2b5417 = {
                followRedirect: false
              };
            this.instance = this.got.extend(_0x2b5417);
            this.instance[_0x2a3fea](_0x4fefe6, _0x2e66e7).then(_0x301df6 => {
              const {
                  statusCode: _0x3b8a3b,
                  request: _0x1e0124,
                  headers: _0x2cce85,
                  body: _0x583713
                } = _0x301df6,
                _0x33ffde = {
                  statusCode: _0x3b8a3b,
                  headers: _0x2cce85,
                  body: _0x583713
                };
              _0x347778(null, _0x1e0124, _0x33ffde);
            }, _0x3dd0ee => {
              const {
                message: _0x1fa93c,
                request: _0x462e08,
                response: _0x115ddb
              } = _0x3dd0ee;
              _0x347778(_0x1fa93c, _0x462e08, _0x115ddb);
            });
          }
        }
      }
    }
    time(_0xc16e28, _0x4ab7f6 = null) {
      let _0x4a784c = _0x4ab7f6 ? new Date(_0x4ab7f6) : new Date(),
        _0x4cb401 = {
          "M+": _0x4a784c.getMonth() + 1,
          "d+": _0x4a784c.getDate(),
          "h+": _0x4a784c.getHours(),
          "m+": _0x4a784c.getMinutes(),
          "s+": _0x4a784c.getSeconds(),
          "q+": Math.floor((_0x4a784c.getMonth() + 3) / 3),
          S: this.padStr(_0x4a784c.getMilliseconds(), 3)
        };
      /(y+)/.test(_0xc16e28) && (_0xc16e28 = _0xc16e28.replace(RegExp.$1, (_0x4a784c.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0xeba19 in _0x4cb401) new RegExp("(" + _0xeba19 + ")").test(_0xc16e28) && (_0xc16e28 = _0xc16e28.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x4cb401[_0xeba19] : ("00" + _0x4cb401[_0xeba19]).substr(("" + _0x4cb401[_0xeba19]).length)));
      return _0xc16e28;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr) {
        return;
      }
      let _0x1fb760 = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x1558be.isNode()) {
        var _0x1d65b1 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x1d65b1.sendNotify(this.name, _0x1fb760);
      } else {
        this.msg(_0x1fb760);
      }
    }
    logAndNotify(_0x357cd8, _0xe27ce1 = true) {
      if (_0xe27ce1) {
        this.notifyFlag = true;
      }
      console.log(_0x357cd8);
      this.notifyStr += _0x357cd8;
      this.notifyStr += "\n";
    }
    logAndNotifyWithTime(_0x32ca32, _0xa5fe9 = true) {
      if (_0xa5fe9) {
        this.notifyFlag = true;
      }
      let _0x3c9607 = "[" + this.time("hh:mm:ss.S") + "]" + _0x32ca32;
      console.log(_0x3c9607);
      this.notifyStr += _0x3c9607;
      this.notifyStr += "\n";
    }
    logWithTime(_0x55b317) {
      console.log("[" + this.time("hh:mm:ss.S") + "]" + _0x55b317);
    }
    msg(_0x182f6a = t, _0x583d34 = "", _0x44ca46 = "", _0x44a649) {
      const _0x1a0028 = _0x38fa24 => {
        if (!_0x38fa24) {
          return _0x38fa24;
        }
        if ("string" == typeof _0x38fa24) {
          return this.isLoon() ? _0x38fa24 : this.isQuanX() ? {
            "open-url": _0x38fa24
          } : this.isSurge() ? {
            url: _0x38fa24
          } : void 0;
        }
        if ("object" == typeof _0x38fa24) {
          if (this.isLoon()) {
            let _0x1a0ad7 = _0x38fa24.openUrl || _0x38fa24.url || _0x38fa24["open-url"],
              _0x44574c = _0x38fa24.mediaUrl || _0x38fa24["media-url"];
            const _0x40061e = {
              openUrl: _0x1a0ad7,
              mediaUrl: _0x44574c
            };
            return _0x40061e;
          }
          if (this.isQuanX()) {
            let _0x3155d7 = _0x38fa24["open-url"] || _0x38fa24.url || _0x38fa24.openUrl,
              _0x6b169c = _0x38fa24["media-url"] || _0x38fa24.mediaUrl;
            const _0x2a8120 = {
              "open-url": _0x3155d7,
              "media-url": _0x6b169c
            };
            return _0x2a8120;
          }
          if (this.isSurge()) {
            let _0x585030 = _0x38fa24.url || _0x38fa24.openUrl || _0x38fa24["open-url"];
            const _0x484bd6 = {
              url: _0x585030
            };
            return _0x484bd6;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x182f6a, _0x583d34, _0x44ca46, _0x1a0028(_0x44a649)) : this.isQuanX() && $notify(_0x182f6a, _0x583d34, _0x44ca46, _0x1a0028(_0x44a649)));
      let _0x472169 = ["", "============== 系统通知 =============="];
      _0x472169.push(_0x182f6a);
      _0x583d34 && _0x472169.push(_0x583d34);
      _0x44ca46 && _0x472169.push(_0x44ca46);
      console.log(_0x472169.join("\n"));
    }
    getMin(_0x14a829, _0x4f6485) {
      return _0x14a829 < _0x4f6485 ? _0x14a829 : _0x4f6485;
    }
    getMax(_0x27a80f, _0x4bfe5b) {
      return _0x27a80f < _0x4bfe5b ? _0x4bfe5b : _0x27a80f;
    }
    padStr(_0x397113, _0x292598, _0x577c29 = "0") {
      let _0x294519 = String(_0x397113),
        _0x277a64 = _0x292598 > _0x294519.length ? _0x292598 - _0x294519.length : 0,
        _0x533ae7 = "";
      for (let _0x364aec = 0; _0x364aec < _0x277a64; _0x364aec++) {
        _0x533ae7 += _0x577c29;
      }
      _0x533ae7 += _0x294519;
      return _0x533ae7;
    }
    json2str(_0x324847, _0x2ba4c0, _0x39933b = false) {
      let _0x355024 = [];
      for (let _0x4b1ef2 of Object.keys(_0x324847).sort()) {
        let _0x3b680f = _0x324847[_0x4b1ef2];
        if (_0x3b680f && _0x39933b) {
          _0x3b680f = encodeURIComponent(_0x3b680f);
        }
        _0x355024.push(_0x4b1ef2 + "=" + _0x3b680f);
      }
      return _0x355024.join(_0x2ba4c0);
    }
    str2json(_0x5bb8d5, _0x229adf = false) {
      let _0x1caa52 = {};
      for (let _0x24f00b of _0x5bb8d5.split("&")) {
        if (!_0x24f00b) {
          continue;
        }
        let _0x55fb4e = _0x24f00b.indexOf("=");
        if (_0x55fb4e == -1) {
          continue;
        }
        let _0x32fcd6 = _0x24f00b.substr(0, _0x55fb4e),
          _0x47d724 = _0x24f00b.substr(_0x55fb4e + 1);
        if (_0x229adf) {
          _0x47d724 = decodeURIComponent(_0x47d724);
        }
        _0x1caa52[_0x32fcd6] = _0x47d724;
      }
      return _0x1caa52;
    }
    randomPattern(_0x4b7ef6, _0x246e7d = "abcdef0123456789") {
      let _0x41d0e2 = "";
      for (let _0x46764f of _0x4b7ef6) {
        if (_0x46764f == "x") {
          _0x41d0e2 += _0x246e7d.charAt(Math.floor(Math.random() * _0x246e7d.length));
        } else {
          _0x46764f == "X" ? _0x41d0e2 += _0x246e7d.charAt(Math.floor(Math.random() * _0x246e7d.length)).toUpperCase() : _0x41d0e2 += _0x46764f;
        }
      }
      return _0x41d0e2;
    }
    randomString(_0x23b47e, _0x4f6ffd = "abcdef0123456789") {
      let _0xdcd72b = "";
      for (let _0x49a828 = 0; _0x49a828 < _0x23b47e; _0x49a828++) {
        _0xdcd72b += _0x4f6ffd.charAt(Math.floor(Math.random() * _0x4f6ffd.length));
      }
      return _0xdcd72b;
    }
    randomList(_0x4eb24b) {
      let _0x237f96 = Math.floor(Math.random() * _0x4eb24b.length);
      return _0x4eb24b[_0x237f96];
    }
    wait(_0x244bac) {
      return new Promise(_0x3915f5 => setTimeout(_0x3915f5, _0x244bac));
    }
    async done(_0x57003b = {}) {
      await this.showmsg();
      const _0x1845a8 = new Date().getTime(),
        _0x53aec7 = (_0x1845a8 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x53aec7 + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x57003b);
      }
    }
  }(_0x414333, _0x174318);
}
