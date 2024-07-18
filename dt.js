/*
读特

自己捉包把Authorization值(去掉Bearer)填到dtCookie里，不提供重写了
定时一天一两次

变量：
dtCookie -- 必填，账号Authorization，只填去掉Bearer的值就行。多账号换行隔开

cron: 26 8,17 * * *
const $ = new Env('读特');
*/

const _0x2ce247 = new _0x216d56("读特");
let _0x432c91,
  _0x58c2e9,
  _0x116a70,
  _0x3aecbf = ["\n", "@"],
  _0x29fc2b = (_0x2ce247.isNode() ? process.env.dtCookie : _0x2ce247.getdata("dtCookie")) || "",
  _0x2b63e0 = [],
  _0x1f6d9e = 0,
  _0x5e62c2 = 0,
  _0x1ada1d = "01ff984b3118a8ec815058f03025b6ac",
  _0x41e202 = 8,
  _0x22618b = 1.02,
  _0xf0dd4c = false,
  _0x2b8813 = "dt",
  _0x440532 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json";
class _0x4fc0f8 {
  constructor(_0x1342f8) {
    this.index = ++_0x1f6d9e;
    this.auth = _0x1342f8;
    this.memberid = "";
    this.valid = false;
    this.task = [];
  }
  createReqObj() {
    let _0x2e3a0d = {
      app_version: "7.1.1",
      device_id: _0x2ce247.randomString(8).toUpperCase() + "-" + _0x2ce247.randomString(4).toUpperCase() + "-" + _0x2ce247.randomString(4).toUpperCase() + "-" + _0x2ce247.randomString(4).toUpperCase() + "-" + _0x2ce247.randomString(12).toUpperCase(),
      system_name: "7.1.1",
      memberid: this.memberid,
      memberId: this.memberid,
      ip: "192.168.0." + Math.floor(Math.random() * 240 + 2),
      siteid: "10001",
      clientid: "1",
      type: "ios"
    };
    return _0x2e3a0d;
  }
  async getMemberInfo() {
    let _0x27b7ee = new Date().getTime(),
      _0x5f114d = this.createReqObj();
    _0x5f114d.time = _0x27b7ee;
    _0x5f114d.modules = "getmember:2";
    let _0x26e845 = _0x2ce247.json2str(_0x5f114d, "&", true),
      _0x4cf1e8 = _0x3eafcd(_0x26e845),
      _0x4d2b81 = _0x4cf1e8 + _0x1ada1d + _0x27b7ee;
    _0x5f114d.sign = _0x3eafcd(_0x4d2b81);
    let _0x19d276 = "https://api.dutenews.com/gateway/pgc/v2/member?" + _0x2ce247.json2str(_0x5f114d, "&", true),
      _0x33e926 = "",
      _0x4f235b = _0x4ba2ac(_0x19d276, this.auth, _0x33e926);
    await _0x52266a("get", _0x4f235b);
    let _0x4d554d = _0x432c91;
    if (!_0x4d554d) {
      return;
    }
    if (_0x4d554d.state == true) {
      this.valid = true;
      this.memberid = _0x4d554d.data.getmember.info.memberid;
      this.credit = _0x4d554d.data.getmember.info.credits;
      this.name = _0x4d554d.data.getmember.info.nickname;
      console.log("账号[" + this.name + "]登录成功，积分" + this.credit);
    } else {
      _0x2ce247.logAndNotify("账号[" + this.index + "]登录失败: " + _0x4d554d.error);
    }
  }
  async getPoint() {
    let _0x129466 = new Date().getTime(),
      _0x9f40d6 = this.createReqObj();
    _0x9f40d6.time = _0x129466;
    _0x9f40d6.modules = "getmember:2";
    let _0x25199b = _0x2ce247.json2str(_0x9f40d6, "&", true),
      _0x4e313e = _0x3eafcd(_0x25199b),
      _0x4fdeb6 = _0x4e313e + _0x1ada1d + _0x129466;
    _0x9f40d6.sign = _0x3eafcd(_0x4fdeb6);
    let _0x2dc558 = "https://api.dutenews.com/gateway/pgc/v2/member?" + _0x2ce247.json2str(_0x9f40d6, "&", true),
      _0x1e5765 = "",
      _0x3da4ee = _0x4ba2ac(_0x2dc558, this.auth, _0x1e5765);
    await _0x52266a("get", _0x3da4ee);
    let _0x23d9ec = _0x432c91;
    if (!_0x23d9ec) {
      return;
    }
    _0x23d9ec.state == true ? (this.credit = _0x23d9ec.data.getmember.info.credits, _0x2ce247.logAndNotify("账号" + this.index + "[" + this.name + "]积分: " + this.credit)) : console.log("账号[" + this.index + "]查询积分失败: " + _0x23d9ec.error);
  }
  async getTaskList() {
    let _0x1e6756 = new Date().getTime(),
      _0x1fadd0 = this.createReqObj();
    _0x1fadd0.modules = "integral:1";
    _0x1fadd0.bind_id = this.memberid;
    let _0xf8fe16 = _0x2ce247.json2str(_0x1fadd0, "&", true),
      _0x542ef4 = _0x3eafcd(_0xf8fe16),
      _0x2119fa = _0x542ef4 + _0x1ada1d + _0x1e6756;
    _0x1fadd0.sign = _0x3eafcd(_0x2119fa);
    _0x1fadd0.time = _0x1e6756;
    let _0x1f51b4 = "https://api.dutenews.com/gateway/pgc/v2/app/mall?" + _0x2ce247.json2str(_0x1fadd0, "&", true),
      _0x1ba22c = "",
      _0x1f762d = _0x4ba2ac(_0x1f51b4, this.auth, _0x1ba22c);
    await _0x52266a("get", _0x1f762d);
    let _0x441e47 = _0x432c91;
    if (!_0x441e47) {
      return;
    }
    if (_0x441e47.state == true) {
      for (let _0x42b90c of _0x441e47.data.integral.rule) {
        if (_0x42b90c.name.indexOf("注册") > -1 || _0x42b90c.name.indexOf("邀请") > -1 || _0x42b90c.name.indexOf("邀请") > -1) {
          continue;
        }
        let _0x517c3b = _0x42b90c.current_times == _0x42b90c.reward_num,
          _0x3cdd32 = _0x517c3b ? "已完成" : "未完成";
        console.log("【" + _0x42b90c.name + "】" + _0x42b90c.current_times + "/" + _0x42b90c.reward_num + "，" + _0x3cdd32);
        if (!_0x517c3b) {
          this.task.push(_0x42b90c);
        }
      }
    } else {
      console.log("账号[" + this.name + "]查询任务列表失败: " + _0x441e47.error);
    }
  }
  async doSign() {
    let _0x4248db = new Date().getTime(),
      _0x3c1292 = this.createReqObj();
    _0x3c1292.modules = "sign:1";
    _0x3c1292.bind_id = this.memberid;
    let _0x3de2ca = _0x2ce247.json2str(_0x3c1292, "&", true),
      _0x1c8be5 = _0x3eafcd(_0x3de2ca),
      _0x47b622 = _0x1c8be5 + _0x1ada1d + _0x4248db;
    _0x3c1292.sign = _0x3eafcd(_0x47b622);
    _0x3c1292.time = _0x4248db;
    let _0x2d8f70 = "https://api.dutenews.com/gateway/pgc/v2/app/mall?" + _0x2ce247.json2str(_0x3c1292, "&", true),
      _0x47d7aa = "",
      _0xce0dcc = _0x4ba2ac(_0x2d8f70, this.auth, _0x47d7aa);
    await _0x52266a("get", _0xce0dcc);
    let _0x27dc80 = _0x432c91;
    if (!_0x27dc80) {
      return;
    }
    _0x27dc80.state == true ? console.log("账号[" + this.name + "]签到: " + _0x27dc80.data.sign) : console.log("账号[" + this.name + "]签到失败: " + _0x27dc80.error);
  }
  async finishTask(_0x3ad518) {
    let _0x2f4183 = new Date().getTime(),
      _0x4fae05 = this.createReqObj();
    _0x4fae05.creditType = _0x3ad518.action_sign;
    _0x4fae05.modules = "common:1";
    _0x4fae05.contentId = this.memberid + "_" + _0x2f4183;
    _0x4fae05.memberId = this.memberid;
    let _0xe1b07b = _0x2ce247.json2str(_0x4fae05, "&", true),
      _0xa09964 = _0x3eafcd(_0xe1b07b),
      _0x159797 = _0xa09964 + _0x1ada1d + _0x2f4183;
    _0x4fae05.sign = _0x3eafcd(_0x159797);
    _0x4fae05.time = _0x2f4183;
    let _0x499fc7 = "https://api.dutenews.com/gateway/pgc/v2/credit?" + _0x2ce247.json2str(_0x4fae05, "&", true),
      _0x540c52 = "",
      _0x199cab = _0x4ba2ac(_0x499fc7, this.auth, _0x540c52);
    await _0x52266a("get", _0x199cab);
    let _0x3b4730 = _0x432c91;
    if (!_0x3b4730) {
      return;
    }
    if (_0x3b4730.state == true) {
      let _0x31c2a2 = _0x3b4730.data.common.message ? _0x3b4730.data.common.message : "没有获得积分";
      console.log("账号[" + this.name + "]完成任务" + _0x3ad518.name + "成功：" + _0x31c2a2);
    } else {
      console.log("账号[" + this.name + "]完成任务" + _0x3ad518.name + "失败: " + _0x3b4730.error);
    }
  }
  async doTask() {
    for (let _0x54d69d of this.task) {
      let _0x3c2b2d = _0x54d69d.reward_num - _0x54d69d.current_times;
      for (let _0x20d7c0 = 0; _0x20d7c0 < _0x3c2b2d; _0x20d7c0++) {
        await _0x2ce247.wait(2000);
        await this.finishTask(_0x54d69d);
      }
    }
  }
  async userTask() {
    console.log("\n=============== 账号[" + this.index + "] ===============");
    await this.getMemberInfo();
    if (!this.valid) {
      return;
    }
    await _0x2ce247.wait(200);
    await this.getTaskList();
    await _0x2ce247.wait(200);
    await this.doTask();
    await _0x2ce247.wait(200);
    await this.getPoint();
    await _0x2ce247.wait(200);
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x1b5076();
  } else {
    await _0x55cfcd();
    if (_0xf0dd4c == false) {
      return;
    }
    if (!(await _0x35baa3())) {
      return;
    }
    for (let _0x51770d of _0x2b63e0) {
      await _0x51770d.userTask();
    }
    _0x2ce247.showmsg();
  }
})().catch(_0x30a1f5 => console.log(_0x30a1f5)).finally(() => _0x2ce247.done());
async function _0x1b5076() {}
async function _0x35baa3() {
  if (_0x29fc2b) {
    let _0x247308 = _0x3aecbf[0];
    for (let _0x4eef4e of _0x3aecbf) {
      if (_0x29fc2b.indexOf(_0x4eef4e) > -1) {
        _0x247308 = _0x4eef4e;
        break;
      }
    }
    for (let _0x3ea79e of _0x29fc2b.split(_0x247308)) {
      if (_0x3ea79e) {
        _0x2b63e0.push(new _0x4fc0f8(_0x3ea79e));
      }
    }
    _0x5e62c2 = _0x2b63e0.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + _0x5e62c2 + "个账号");
  return true;
}
async function _0x55cfcd(_0x36aad3 = 0) {
  let _0x1dcfe7 = {
    url: _0x440532
  };
  await _0x52266a("get", _0x1dcfe7);
  let _0x5127ff = _0x432c91;
  if (!_0x5127ff) {
    if (_0x36aad3 < _0x41e202) {
      await _0x55cfcd(++_0x36aad3);
    }
    return;
  }
  _0x5127ff?.["code"] == 0 && (_0x5127ff = JSON.parse(_0x5127ff.data.file.data));
  _0x5127ff?.["commonNotify"] && _0x5127ff.commonNotify.length > 0 && _0x2ce247.logAndNotify(_0x5127ff.commonNotify.join("\n") + "\n");
  _0x5127ff?.["commonMsg"] && _0x5127ff.commonMsg.length > 0 && console.log(_0x5127ff.commonMsg.join("\n") + "\n");
  if (_0x5127ff[_0x2b8813]) {
    let _0x29629a = _0x5127ff[_0x2b8813];
    if (_0x29629a.status == 0) {
      if (_0x22618b >= _0x29629a.version) {
        _0xf0dd4c = true;
        console.log(_0x29629a.msg[_0x29629a.status]);
        console.log(_0x29629a.updateMsg);
        console.log("现在运行的脚本版本是：" + _0x22618b + "，最新脚本版本：" + _0x29629a.latestVersion);
        taskUrlPro = "https://leafxcy.coding.net/p/validcode/d/validCode/git/raw/master/xjbw.json";
      } else {
        console.log(_0x29629a.versionMsg);
      }
    } else {
      console.log(_0x29629a.msg[_0x29629a.status]);
    }
  } else {
    console.log(_0x5127ff.errorMsg);
  }
}
function _0x4ba2ac(_0x586a60, _0x54795b, _0x2f4d0c = "") {
  let _0x268c5a = _0x586a60.replace("//", "/").split("/")[1];
  const _0x45e43a = {
    Host: _0x268c5a,
    Authorization: "Bearer " + _0x54795b,
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.1"
  };
  let _0x5e2c7f = {
    url: _0x586a60,
    headers: _0x45e43a
  };
  if (_0x2f4d0c) {
    _0x5e2c7f.body = _0x2f4d0c;
  }
  return _0x5e2c7f;
}
async function _0x52266a(_0x6cef46, _0x3bbc48) {
  _0x432c91 = null;
  _0x58c2e9 = null;
  _0x116a70 = null;
  return new Promise(_0x4cfe65 => {
    _0x2ce247.send(_0x6cef46, _0x3bbc48, async (_0x39623a, _0x16ad36, _0x370e26) => {
      try {
        _0x58c2e9 = _0x16ad36;
        _0x116a70 = _0x370e26;
        if (_0x39623a) {
          console.log(_0x6cef46 + "请求失败");
          console.log(JSON.stringify(_0x39623a));
        } else {
          if (_0x370e26.body) {
            if (typeof _0x370e26.body == "object") {
              _0x432c91 = _0x370e26.body;
            } else {
              try {
                _0x432c91 = JSON.parse(_0x370e26.body);
              } catch (_0x18bdb0) {
                _0x432c91 = _0x370e26.body;
              }
            }
          }
        }
      } catch (_0xa9ec35) {
        console.log(_0xa9ec35);
      } finally {
        _0x4cfe65();
      }
    });
  });
}
var _0x28a44c = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (_0x16a55e) {
    var _0x50e504 = "";
    var _0x5a6453, _0x5b9eb1, _0x3a6de6, _0x38e2e9, _0xff0818, _0x20e2a9, _0x36827a;
    var _0x23db13 = 0;
    _0x16a55e = _0x28a44c._utf8_encode(_0x16a55e);
    while (_0x23db13 < _0x16a55e.length) {
      _0x5a6453 = _0x16a55e.charCodeAt(_0x23db13++);
      _0x5b9eb1 = _0x16a55e.charCodeAt(_0x23db13++);
      _0x3a6de6 = _0x16a55e.charCodeAt(_0x23db13++);
      _0x38e2e9 = _0x5a6453 >> 2;
      _0xff0818 = (_0x5a6453 & 3) << 4 | _0x5b9eb1 >> 4;
      _0x20e2a9 = (_0x5b9eb1 & 15) << 2 | _0x3a6de6 >> 6;
      _0x36827a = _0x3a6de6 & 63;
      if (isNaN(_0x5b9eb1)) {
        _0x20e2a9 = _0x36827a = 64;
      } else {
        isNaN(_0x3a6de6) && (_0x36827a = 64);
      }
      _0x50e504 = _0x50e504 + this._keyStr.charAt(_0x38e2e9) + this._keyStr.charAt(_0xff0818) + this._keyStr.charAt(_0x20e2a9) + this._keyStr.charAt(_0x36827a);
    }
    return _0x50e504;
  },
  decode: function (_0x2c80f9) {
    var _0x3340fa = "";
    var _0xaddb18, _0x3a0a61, _0x21b224;
    var _0x20416a, _0x3beb20, _0x39d299, _0x3320e9;
    var _0x4cbe11 = 0;
    _0x2c80f9 = _0x2c80f9.replace(/[^A-Za-z0-9+/=]/g, "");
    while (_0x4cbe11 < _0x2c80f9.length) {
      _0x20416a = this._keyStr.indexOf(_0x2c80f9.charAt(_0x4cbe11++));
      _0x3beb20 = this._keyStr.indexOf(_0x2c80f9.charAt(_0x4cbe11++));
      _0x39d299 = this._keyStr.indexOf(_0x2c80f9.charAt(_0x4cbe11++));
      _0x3320e9 = this._keyStr.indexOf(_0x2c80f9.charAt(_0x4cbe11++));
      _0xaddb18 = _0x20416a << 2 | _0x3beb20 >> 4;
      _0x3a0a61 = (_0x3beb20 & 15) << 4 | _0x39d299 >> 2;
      _0x21b224 = (_0x39d299 & 3) << 6 | _0x3320e9;
      _0x3340fa = _0x3340fa + String.fromCharCode(_0xaddb18);
      _0x39d299 != 64 && (_0x3340fa = _0x3340fa + String.fromCharCode(_0x3a0a61));
      _0x3320e9 != 64 && (_0x3340fa = _0x3340fa + String.fromCharCode(_0x21b224));
    }
    _0x3340fa = _0x28a44c._utf8_decode(_0x3340fa);
    return _0x3340fa;
  },
  _utf8_encode: function (_0x414f8d) {
    _0x414f8d = _0x414f8d.replace(/rn/g, "n");
    var _0x265bbb = "";
    for (var _0x3f754c = 0; _0x3f754c < _0x414f8d.length; _0x3f754c++) {
      var _0x15e7a1 = _0x414f8d.charCodeAt(_0x3f754c);
      if (_0x15e7a1 < 128) {
        _0x265bbb += String.fromCharCode(_0x15e7a1);
      } else {
        _0x15e7a1 > 127 && _0x15e7a1 < 2048 ? (_0x265bbb += String.fromCharCode(_0x15e7a1 >> 6 | 192), _0x265bbb += String.fromCharCode(_0x15e7a1 & 63 | 128)) : (_0x265bbb += String.fromCharCode(_0x15e7a1 >> 12 | 224), _0x265bbb += String.fromCharCode(_0x15e7a1 >> 6 & 63 | 128), _0x265bbb += String.fromCharCode(_0x15e7a1 & 63 | 128));
      }
    }
    return _0x265bbb;
  },
  _utf8_decode: function (_0x366cc9) {
    var _0x5bea99 = "";
    var _0x465a7c = 0;
    c1 = c2 = 0;
    var _0x2543f8 = c1;
    while (_0x465a7c < _0x366cc9.length) {
      _0x2543f8 = _0x366cc9.charCodeAt(_0x465a7c);
      if (_0x2543f8 < 128) {
        _0x5bea99 += String.fromCharCode(_0x2543f8);
        _0x465a7c++;
      } else {
        _0x2543f8 > 191 && _0x2543f8 < 224 ? (c2 = _0x366cc9.charCodeAt(_0x465a7c + 1), _0x5bea99 += String.fromCharCode((_0x2543f8 & 31) << 6 | c2 & 63), _0x465a7c += 2) : (c2 = _0x366cc9.charCodeAt(_0x465a7c + 1), c3 = _0x366cc9.charCodeAt(_0x465a7c + 2), _0x5bea99 += String.fromCharCode((_0x2543f8 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x465a7c += 3);
      }
    }
    return _0x5bea99;
  }
};
function _0x3eafcd(_0x187e5d) {
  function _0xc2ce1e(_0x2ec7b9, _0x13826a) {
    return _0x2ec7b9 << _0x13826a | _0x2ec7b9 >>> 32 - _0x13826a;
  }
  function _0xb7cf0d(_0x1aba44, _0x3bf383) {
    var _0x5c64aa, _0x6bb264, _0x358f81, _0x4b6536, _0x220257;
    _0x358f81 = 2147483648 & _0x1aba44;
    _0x4b6536 = 2147483648 & _0x3bf383;
    _0x5c64aa = 1073741824 & _0x1aba44;
    _0x6bb264 = 1073741824 & _0x3bf383;
    _0x220257 = (1073741823 & _0x1aba44) + (1073741823 & _0x3bf383);
    return _0x5c64aa & _0x6bb264 ? 2147483648 ^ _0x220257 ^ _0x358f81 ^ _0x4b6536 : _0x5c64aa | _0x6bb264 ? 1073741824 & _0x220257 ? 3221225472 ^ _0x220257 ^ _0x358f81 ^ _0x4b6536 : 1073741824 ^ _0x220257 ^ _0x358f81 ^ _0x4b6536 : _0x220257 ^ _0x358f81 ^ _0x4b6536;
  }
  function _0x1c3d85(_0x487341, _0x39e5f4, _0x4ed38d) {
    return _0x487341 & _0x39e5f4 | ~_0x487341 & _0x4ed38d;
  }
  function _0x3366a4(_0x11db84, _0x1075be, _0x24f4a7) {
    return _0x11db84 & _0x24f4a7 | _0x1075be & ~_0x24f4a7;
  }
  function _0xc239c0(_0xb29b6, _0x372fd6, _0x21edc5) {
    return _0xb29b6 ^ _0x372fd6 ^ _0x21edc5;
  }
  function _0x2c91bf(_0x1a30f8, _0x2f5d78, _0x20dbe3) {
    return _0x2f5d78 ^ (_0x1a30f8 | ~_0x20dbe3);
  }
  function _0x58a193(_0x226ba4, _0x5b3efd, _0x3b90c6, _0x5c643c, _0x2c8258, _0x374786, _0x17fa40) {
    _0x226ba4 = _0xb7cf0d(_0x226ba4, _0xb7cf0d(_0xb7cf0d(_0x1c3d85(_0x5b3efd, _0x3b90c6, _0x5c643c), _0x2c8258), _0x17fa40));
    return _0xb7cf0d(_0xc2ce1e(_0x226ba4, _0x374786), _0x5b3efd);
  }
  function _0x3fa3dc(_0x32392e, _0x547b34, _0x24f1b5, _0xa98c51, _0x24b322, _0xb9a8c1, _0x19b167) {
    _0x32392e = _0xb7cf0d(_0x32392e, _0xb7cf0d(_0xb7cf0d(_0x3366a4(_0x547b34, _0x24f1b5, _0xa98c51), _0x24b322), _0x19b167));
    return _0xb7cf0d(_0xc2ce1e(_0x32392e, _0xb9a8c1), _0x547b34);
  }
  function _0x1ca566(_0x24b4b5, _0x2f1587, _0x514e46, _0x4a9090, _0x12ed00, _0x3f5427, _0x386bae) {
    _0x24b4b5 = _0xb7cf0d(_0x24b4b5, _0xb7cf0d(_0xb7cf0d(_0xc239c0(_0x2f1587, _0x514e46, _0x4a9090), _0x12ed00), _0x386bae));
    return _0xb7cf0d(_0xc2ce1e(_0x24b4b5, _0x3f5427), _0x2f1587);
  }
  function _0x58ffe9(_0xa7e5bb, _0xc49419, _0xa7251, _0x4cdd5f, _0x32eaf8, _0xffa25b, _0x1e2b36) {
    _0xa7e5bb = _0xb7cf0d(_0xa7e5bb, _0xb7cf0d(_0xb7cf0d(_0x2c91bf(_0xc49419, _0xa7251, _0x4cdd5f), _0x32eaf8), _0x1e2b36));
    return _0xb7cf0d(_0xc2ce1e(_0xa7e5bb, _0xffa25b), _0xc49419);
  }
  function _0x2f15b7(_0x1f9897) {
    for (var _0x562000, _0x561c63 = _0x1f9897.length, _0x13dfdb = _0x561c63 + 8, _0x394a00 = (_0x13dfdb - _0x13dfdb % 64) / 64, _0x2dc927 = 16 * (_0x394a00 + 1), _0x4c5e55 = new Array(_0x2dc927 - 1), _0x4169be = 0, _0x2b8351 = 0; _0x561c63 > _0x2b8351;) {
      _0x562000 = (_0x2b8351 - _0x2b8351 % 4) / 4;
      _0x4169be = _0x2b8351 % 4 * 8;
      _0x4c5e55[_0x562000] = _0x4c5e55[_0x562000] | _0x1f9897.charCodeAt(_0x2b8351) << _0x4169be;
      _0x2b8351++;
    }
    _0x562000 = (_0x2b8351 - _0x2b8351 % 4) / 4;
    _0x4169be = _0x2b8351 % 4 * 8;
    _0x4c5e55[_0x562000] = _0x4c5e55[_0x562000] | 128 << _0x4169be;
    _0x4c5e55[_0x2dc927 - 2] = _0x561c63 << 3;
    _0x4c5e55[_0x2dc927 - 1] = _0x561c63 >>> 29;
    return _0x4c5e55;
  }
  function _0x406e4b(_0x30d904) {
    var _0x5ee28f,
      _0x24d57e,
      _0x3390b8 = "",
      _0x1ab4ef = "";
    for (_0x24d57e = 0; 3 >= _0x24d57e; _0x24d57e++) {
      _0x5ee28f = _0x30d904 >>> 8 * _0x24d57e & 255;
      _0x1ab4ef = "0" + _0x5ee28f.toString(16);
      _0x3390b8 += _0x1ab4ef.substr(_0x1ab4ef.length - 2, 2);
    }
    return _0x3390b8;
  }
  function _0x26efaa(_0x3cac27) {
    _0x3cac27 = _0x3cac27.replace(/\r\n/g, "\n");
    for (var _0x3a52ae = "", _0x28cdb2 = 0; _0x28cdb2 < _0x3cac27.length; _0x28cdb2++) {
      var _0x4f137f = _0x3cac27.charCodeAt(_0x28cdb2);
      128 > _0x4f137f ? _0x3a52ae += String.fromCharCode(_0x4f137f) : _0x4f137f > 127 && 2048 > _0x4f137f ? (_0x3a52ae += String.fromCharCode(_0x4f137f >> 6 | 192), _0x3a52ae += String.fromCharCode(63 & _0x4f137f | 128)) : (_0x3a52ae += String.fromCharCode(_0x4f137f >> 12 | 224), _0x3a52ae += String.fromCharCode(_0x4f137f >> 6 & 63 | 128), _0x3a52ae += String.fromCharCode(63 & _0x4f137f | 128));
    }
    return _0x3a52ae;
  }
  var _0x178e13,
    _0x3f05b7,
    _0x540922,
    _0x19a1d,
    _0x278f8c,
    _0x38c7d5,
    _0x117206,
    _0x5815f2,
    _0x226416,
    _0x107f13 = [],
    _0x2c541e = 7,
    _0x1c8c59 = 12,
    _0x5bf6ed = 17,
    _0x242a14 = 22,
    _0xb97d72 = 5,
    _0x448113 = 9,
    _0x2b223f = 14,
    _0xf65ec6 = 20,
    _0xeec42d = 4,
    _0x518a79 = 11,
    _0x3b9fbf = 16,
    _0x1f3d99 = 23,
    _0x461f09 = 6,
    _0x4d07ab = 10,
    _0x446603 = 15,
    _0x527f08 = 21;
  for (_0x187e5d = _0x26efaa(_0x187e5d), _0x107f13 = _0x2f15b7(_0x187e5d), _0x38c7d5 = 1732584193, _0x117206 = 4023233417, _0x5815f2 = 2562383102, _0x226416 = 271733878, _0x178e13 = 0; _0x178e13 < _0x107f13.length; _0x178e13 += 16) {
    _0x3f05b7 = _0x38c7d5;
    _0x540922 = _0x117206;
    _0x19a1d = _0x5815f2;
    _0x278f8c = _0x226416;
    _0x38c7d5 = _0x58a193(_0x38c7d5, _0x117206, _0x5815f2, _0x226416, _0x107f13[_0x178e13 + 0], _0x2c541e, 3614090360);
    _0x226416 = _0x58a193(_0x226416, _0x38c7d5, _0x117206, _0x5815f2, _0x107f13[_0x178e13 + 1], _0x1c8c59, 3905402710);
    _0x5815f2 = _0x58a193(_0x5815f2, _0x226416, _0x38c7d5, _0x117206, _0x107f13[_0x178e13 + 2], _0x5bf6ed, 606105819);
    _0x117206 = _0x58a193(_0x117206, _0x5815f2, _0x226416, _0x38c7d5, _0x107f13[_0x178e13 + 3], _0x242a14, 3250441966);
    _0x38c7d5 = _0x58a193(_0x38c7d5, _0x117206, _0x5815f2, _0x226416, _0x107f13[_0x178e13 + 4], _0x2c541e, 4118548399);
    _0x226416 = _0x58a193(_0x226416, _0x38c7d5, _0x117206, _0x5815f2, _0x107f13[_0x178e13 + 5], _0x1c8c59, 1200080426);
    _0x5815f2 = _0x58a193(_0x5815f2, _0x226416, _0x38c7d5, _0x117206, _0x107f13[_0x178e13 + 6], _0x5bf6ed, 2821735955);
    _0x117206 = _0x58a193(_0x117206, _0x5815f2, _0x226416, _0x38c7d5, _0x107f13[_0x178e13 + 7], _0x242a14, 4249261313);
    _0x38c7d5 = _0x58a193(_0x38c7d5, _0x117206, _0x5815f2, _0x226416, _0x107f13[_0x178e13 + 8], _0x2c541e, 1770035416);
    _0x226416 = _0x58a193(_0x226416, _0x38c7d5, _0x117206, _0x5815f2, _0x107f13[_0x178e13 + 9], _0x1c8c59, 2336552879);
    _0x5815f2 = _0x58a193(_0x5815f2, _0x226416, _0x38c7d5, _0x117206, _0x107f13[_0x178e13 + 10], _0x5bf6ed, 4294925233);
    _0x117206 = _0x58a193(_0x117206, _0x5815f2, _0x226416, _0x38c7d5, _0x107f13[_0x178e13 + 11], _0x242a14, 2304563134);
    _0x38c7d5 = _0x58a193(_0x38c7d5, _0x117206, _0x5815f2, _0x226416, _0x107f13[_0x178e13 + 12], _0x2c541e, 1804603682);
    _0x226416 = _0x58a193(_0x226416, _0x38c7d5, _0x117206, _0x5815f2, _0x107f13[_0x178e13 + 13], _0x1c8c59, 4254626195);
    _0x5815f2 = _0x58a193(_0x5815f2, _0x226416, _0x38c7d5, _0x117206, _0x107f13[_0x178e13 + 14], _0x5bf6ed, 2792965006);
    _0x117206 = _0x58a193(_0x117206, _0x5815f2, _0x226416, _0x38c7d5, _0x107f13[_0x178e13 + 15], _0x242a14, 1236535329);
    _0x38c7d5 = _0x3fa3dc(_0x38c7d5, _0x117206, _0x5815f2, _0x226416, _0x107f13[_0x178e13 + 1], _0xb97d72, 4129170786);
    _0x226416 = _0x3fa3dc(_0x226416, _0x38c7d5, _0x117206, _0x5815f2, _0x107f13[_0x178e13 + 6], _0x448113, 3225465664);
    _0x5815f2 = _0x3fa3dc(_0x5815f2, _0x226416, _0x38c7d5, _0x117206, _0x107f13[_0x178e13 + 11], _0x2b223f, 643717713);
    _0x117206 = _0x3fa3dc(_0x117206, _0x5815f2, _0x226416, _0x38c7d5, _0x107f13[_0x178e13 + 0], _0xf65ec6, 3921069994);
    _0x38c7d5 = _0x3fa3dc(_0x38c7d5, _0x117206, _0x5815f2, _0x226416, _0x107f13[_0x178e13 + 5], _0xb97d72, 3593408605);
    _0x226416 = _0x3fa3dc(_0x226416, _0x38c7d5, _0x117206, _0x5815f2, _0x107f13[_0x178e13 + 10], _0x448113, 38016083);
    _0x5815f2 = _0x3fa3dc(_0x5815f2, _0x226416, _0x38c7d5, _0x117206, _0x107f13[_0x178e13 + 15], _0x2b223f, 3634488961);
    _0x117206 = _0x3fa3dc(_0x117206, _0x5815f2, _0x226416, _0x38c7d5, _0x107f13[_0x178e13 + 4], _0xf65ec6, 3889429448);
    _0x38c7d5 = _0x3fa3dc(_0x38c7d5, _0x117206, _0x5815f2, _0x226416, _0x107f13[_0x178e13 + 9], _0xb97d72, 568446438);
    _0x226416 = _0x3fa3dc(_0x226416, _0x38c7d5, _0x117206, _0x5815f2, _0x107f13[_0x178e13 + 14], _0x448113, 3275163606);
    _0x5815f2 = _0x3fa3dc(_0x5815f2, _0x226416, _0x38c7d5, _0x117206, _0x107f13[_0x178e13 + 3], _0x2b223f, 4107603335);
    _0x117206 = _0x3fa3dc(_0x117206, _0x5815f2, _0x226416, _0x38c7d5, _0x107f13[_0x178e13 + 8], _0xf65ec6, 1163531501);
    _0x38c7d5 = _0x3fa3dc(_0x38c7d5, _0x117206, _0x5815f2, _0x226416, _0x107f13[_0x178e13 + 13], _0xb97d72, 2850285829);
    _0x226416 = _0x3fa3dc(_0x226416, _0x38c7d5, _0x117206, _0x5815f2, _0x107f13[_0x178e13 + 2], _0x448113, 4243563512);
    _0x5815f2 = _0x3fa3dc(_0x5815f2, _0x226416, _0x38c7d5, _0x117206, _0x107f13[_0x178e13 + 7], _0x2b223f, 1735328473);
    _0x117206 = _0x3fa3dc(_0x117206, _0x5815f2, _0x226416, _0x38c7d5, _0x107f13[_0x178e13 + 12], _0xf65ec6, 2368359562);
    _0x38c7d5 = _0x1ca566(_0x38c7d5, _0x117206, _0x5815f2, _0x226416, _0x107f13[_0x178e13 + 5], _0xeec42d, 4294588738);
    _0x226416 = _0x1ca566(_0x226416, _0x38c7d5, _0x117206, _0x5815f2, _0x107f13[_0x178e13 + 8], _0x518a79, 2272392833);
    _0x5815f2 = _0x1ca566(_0x5815f2, _0x226416, _0x38c7d5, _0x117206, _0x107f13[_0x178e13 + 11], _0x3b9fbf, 1839030562);
    _0x117206 = _0x1ca566(_0x117206, _0x5815f2, _0x226416, _0x38c7d5, _0x107f13[_0x178e13 + 14], _0x1f3d99, 4259657740);
    _0x38c7d5 = _0x1ca566(_0x38c7d5, _0x117206, _0x5815f2, _0x226416, _0x107f13[_0x178e13 + 1], _0xeec42d, 2763975236);
    _0x226416 = _0x1ca566(_0x226416, _0x38c7d5, _0x117206, _0x5815f2, _0x107f13[_0x178e13 + 4], _0x518a79, 1272893353);
    _0x5815f2 = _0x1ca566(_0x5815f2, _0x226416, _0x38c7d5, _0x117206, _0x107f13[_0x178e13 + 7], _0x3b9fbf, 4139469664);
    _0x117206 = _0x1ca566(_0x117206, _0x5815f2, _0x226416, _0x38c7d5, _0x107f13[_0x178e13 + 10], _0x1f3d99, 3200236656);
    _0x38c7d5 = _0x1ca566(_0x38c7d5, _0x117206, _0x5815f2, _0x226416, _0x107f13[_0x178e13 + 13], _0xeec42d, 681279174);
    _0x226416 = _0x1ca566(_0x226416, _0x38c7d5, _0x117206, _0x5815f2, _0x107f13[_0x178e13 + 0], _0x518a79, 3936430074);
    _0x5815f2 = _0x1ca566(_0x5815f2, _0x226416, _0x38c7d5, _0x117206, _0x107f13[_0x178e13 + 3], _0x3b9fbf, 3572445317);
    _0x117206 = _0x1ca566(_0x117206, _0x5815f2, _0x226416, _0x38c7d5, _0x107f13[_0x178e13 + 6], _0x1f3d99, 76029189);
    _0x38c7d5 = _0x1ca566(_0x38c7d5, _0x117206, _0x5815f2, _0x226416, _0x107f13[_0x178e13 + 9], _0xeec42d, 3654602809);
    _0x226416 = _0x1ca566(_0x226416, _0x38c7d5, _0x117206, _0x5815f2, _0x107f13[_0x178e13 + 12], _0x518a79, 3873151461);
    _0x5815f2 = _0x1ca566(_0x5815f2, _0x226416, _0x38c7d5, _0x117206, _0x107f13[_0x178e13 + 15], _0x3b9fbf, 530742520);
    _0x117206 = _0x1ca566(_0x117206, _0x5815f2, _0x226416, _0x38c7d5, _0x107f13[_0x178e13 + 2], _0x1f3d99, 3299628645);
    _0x38c7d5 = _0x58ffe9(_0x38c7d5, _0x117206, _0x5815f2, _0x226416, _0x107f13[_0x178e13 + 0], _0x461f09, 4096336452);
    _0x226416 = _0x58ffe9(_0x226416, _0x38c7d5, _0x117206, _0x5815f2, _0x107f13[_0x178e13 + 7], _0x4d07ab, 1126891415);
    _0x5815f2 = _0x58ffe9(_0x5815f2, _0x226416, _0x38c7d5, _0x117206, _0x107f13[_0x178e13 + 14], _0x446603, 2878612391);
    _0x117206 = _0x58ffe9(_0x117206, _0x5815f2, _0x226416, _0x38c7d5, _0x107f13[_0x178e13 + 5], _0x527f08, 4237533241);
    _0x38c7d5 = _0x58ffe9(_0x38c7d5, _0x117206, _0x5815f2, _0x226416, _0x107f13[_0x178e13 + 12], _0x461f09, 1700485571);
    _0x226416 = _0x58ffe9(_0x226416, _0x38c7d5, _0x117206, _0x5815f2, _0x107f13[_0x178e13 + 3], _0x4d07ab, 2399980690);
    _0x5815f2 = _0x58ffe9(_0x5815f2, _0x226416, _0x38c7d5, _0x117206, _0x107f13[_0x178e13 + 10], _0x446603, 4293915773);
    _0x117206 = _0x58ffe9(_0x117206, _0x5815f2, _0x226416, _0x38c7d5, _0x107f13[_0x178e13 + 1], _0x527f08, 2240044497);
    _0x38c7d5 = _0x58ffe9(_0x38c7d5, _0x117206, _0x5815f2, _0x226416, _0x107f13[_0x178e13 + 8], _0x461f09, 1873313359);
    _0x226416 = _0x58ffe9(_0x226416, _0x38c7d5, _0x117206, _0x5815f2, _0x107f13[_0x178e13 + 15], _0x4d07ab, 4264355552);
    _0x5815f2 = _0x58ffe9(_0x5815f2, _0x226416, _0x38c7d5, _0x117206, _0x107f13[_0x178e13 + 6], _0x446603, 2734768916);
    _0x117206 = _0x58ffe9(_0x117206, _0x5815f2, _0x226416, _0x38c7d5, _0x107f13[_0x178e13 + 13], _0x527f08, 1309151649);
    _0x38c7d5 = _0x58ffe9(_0x38c7d5, _0x117206, _0x5815f2, _0x226416, _0x107f13[_0x178e13 + 4], _0x461f09, 4149444226);
    _0x226416 = _0x58ffe9(_0x226416, _0x38c7d5, _0x117206, _0x5815f2, _0x107f13[_0x178e13 + 11], _0x4d07ab, 3174756917);
    _0x5815f2 = _0x58ffe9(_0x5815f2, _0x226416, _0x38c7d5, _0x117206, _0x107f13[_0x178e13 + 2], _0x446603, 718787259);
    _0x117206 = _0x58ffe9(_0x117206, _0x5815f2, _0x226416, _0x38c7d5, _0x107f13[_0x178e13 + 9], _0x527f08, 3951481745);
    _0x38c7d5 = _0xb7cf0d(_0x38c7d5, _0x3f05b7);
    _0x117206 = _0xb7cf0d(_0x117206, _0x540922);
    _0x5815f2 = _0xb7cf0d(_0x5815f2, _0x19a1d);
    _0x226416 = _0xb7cf0d(_0x226416, _0x278f8c);
  }
  var _0x57ae65 = _0x406e4b(_0x38c7d5) + _0x406e4b(_0x117206) + _0x406e4b(_0x5815f2) + _0x406e4b(_0x226416);
  return _0x57ae65.toLowerCase();
}
function _0x216d56(_0x2870c2, _0x2fb4ad) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x377689, _0x10e276) {
      this.name = _0x377689;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x10e276);
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
    getdata(_0x71a000) {
      let _0x103352 = this.getval(_0x71a000);
      if (/^@/.test(_0x71a000)) {
        const [, _0x44e6c2, _0x35809e] = /^@(.*?)\.(.*?)$/.exec(_0x71a000),
          _0x12da00 = _0x44e6c2 ? this.getval(_0x44e6c2) : "";
        if (_0x12da00) {
          try {
            const _0x24e333 = JSON.parse(_0x12da00);
            _0x103352 = _0x24e333 ? this.lodash_get(_0x24e333, _0x35809e, "") : _0x103352;
          } catch (_0x563047) {
            _0x103352 = "";
          }
        }
      }
      return _0x103352;
    }
    setdata(_0x4297cc, _0x1d8658) {
      let _0x5266b0 = !1;
      if (/^@/.test(_0x1d8658)) {
        const [, _0x3f1aca, _0x1c54a9] = /^@(.*?)\.(.*?)$/.exec(_0x1d8658),
          _0x4dbfc5 = this.getval(_0x3f1aca),
          _0x10e6e3 = _0x3f1aca ? "null" === _0x4dbfc5 ? null : _0x4dbfc5 || "{}" : "{}";
        try {
          const _0xc180cc = JSON.parse(_0x10e6e3);
          this.lodash_set(_0xc180cc, _0x1c54a9, _0x4297cc);
          _0x5266b0 = this.setval(JSON.stringify(_0xc180cc), _0x3f1aca);
        } catch (_0x579dee) {
          const _0x51abc5 = {};
          this.lodash_set(_0x51abc5, _0x1c54a9, _0x4297cc);
          _0x5266b0 = this.setval(JSON.stringify(_0x51abc5), _0x3f1aca);
        }
      } else {
        _0x5266b0 = this.setval(_0x4297cc, _0x1d8658);
      }
      return _0x5266b0;
    }
    getval(_0x5d1870) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x5d1870) : this.isQuanX() ? $prefs.valueForKey(_0x5d1870) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x5d1870]) : this.data && this.data[_0x5d1870] || null;
    }
    setval(_0x34a966, _0x3d91ce) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x34a966, _0x3d91ce) : this.isQuanX() ? $prefs.setValueForKey(_0x34a966, _0x3d91ce) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x3d91ce] = _0x34a966, this.writedata(), !0) : this.data && this.data[_0x3d91ce] || null;
    }
    send(_0x1608fb, _0x47b8d7, _0x55e314 = () => {}) {
      if (_0x1608fb != "get" && _0x1608fb != "post" && _0x1608fb != "put" && _0x1608fb != "delete") {
        console.log("无效的http方法：" + _0x1608fb);
        return;
      }
      if (_0x1608fb == "get" && _0x47b8d7.headers) {
        delete _0x47b8d7.headers["Content-Type"];
        delete _0x47b8d7.headers["Content-Length"];
      } else {
        if (_0x47b8d7.body && _0x47b8d7.headers) {
          if (!_0x47b8d7.headers["Content-Type"]) {
            _0x47b8d7.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x47b8d7.headers = _0x47b8d7.headers || {};
          const _0x1b8fa7 = {
            "X-Surge-Skip-Scripting": !1
          };
          Object.assign(_0x47b8d7.headers, _0x1b8fa7);
        }
        let _0x38475e = {
          method: _0x1608fb,
          url: _0x47b8d7.url,
          headers: _0x47b8d7.headers,
          timeout: _0x47b8d7.timeout,
          data: _0x47b8d7.body
        };
        if (_0x1608fb == "get") {
          delete _0x38475e.data;
        }
        $axios(_0x38475e).then(_0x134f11 => {
          const {
              status: _0x3374af,
              request: _0x154bcd,
              headers: _0x540bb4,
              data: _0x5a2de8
            } = _0x134f11,
            _0x423c1b = {
              statusCode: _0x3374af,
              headers: _0x540bb4,
              body: _0x5a2de8
            };
          _0x55e314(null, _0x154bcd, _0x423c1b);
        }).catch(_0x2486c2 => console.log(_0x2486c2));
      } else {
        if (this.isQuanX()) {
          const _0x4fd365 = {
            hints: !1
          };
          _0x47b8d7.method = _0x1608fb.toUpperCase();
          this.isNeedRewrite && (_0x47b8d7.opts = _0x47b8d7.opts || {}, Object.assign(_0x47b8d7.opts, _0x4fd365));
          $task.fetch(_0x47b8d7).then(_0x290282 => {
            const {
                statusCode: _0x5aa0bb,
                request: _0x8314ea,
                headers: _0x3220c6,
                body: _0x1744b5
              } = _0x290282,
              _0x3ad52b = {
                statusCode: _0x5aa0bb,
                headers: _0x3220c6,
                body: _0x1744b5
              };
            _0x55e314(null, _0x8314ea, _0x3ad52b);
          }, _0x2d8afb => _0x55e314(_0x2d8afb));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
                url: _0x5909a3,
                ..._0x183fb2
              } = _0x47b8d7,
              _0x10899e = {
                followRedirect: false
              };
            this.instance = this.got.extend(_0x10899e);
            this.instance[_0x1608fb](_0x5909a3, _0x183fb2).then(_0x641740 => {
              const {
                  statusCode: _0x3465e2,
                  request: _0x550785,
                  headers: _0x286fc4,
                  body: _0x5e9d11
                } = _0x641740,
                _0x120ccf = {
                  statusCode: _0x3465e2,
                  headers: _0x286fc4,
                  body: _0x5e9d11
                };
              _0x55e314(null, _0x550785, _0x120ccf);
            }, _0x1f9b2b => {
              const {
                message: _0xa196f3,
                response: _0x1f73a2
              } = _0x1f9b2b;
              _0x55e314(_0xa196f3, _0x1f73a2, _0x1f73a2 && _0x1f73a2.body);
            });
          }
        }
      }
    }
    time(_0x1f25ed) {
      let _0x307143 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x1f25ed) && (_0x1f25ed = _0x1f25ed.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x12dc3a in _0x307143) new RegExp("(" + _0x12dc3a + ")").test(_0x1f25ed) && (_0x1f25ed = _0x1f25ed.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x307143[_0x12dc3a] : ("00" + _0x307143[_0x12dc3a]).substr(("" + _0x307143[_0x12dc3a]).length)));
      return _0x1f25ed;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let _0x3572bd = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x2ce247.isNode()) {
        var _0x1db396 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x1db396.sendNotify(this.name, _0x3572bd);
      } else {
        this.msg(_0x3572bd);
      }
    }
    logAndNotify(_0x5920b4) {
      console.log(_0x5920b4);
      this.notifyStr += _0x5920b4;
      this.notifyStr += "\n";
    }
    msg(_0x1c19d0 = t, _0x495dec = "", _0x795354 = "", _0x580658) {
      const _0x52e847 = _0x37c767 => {
        if (!_0x37c767) {
          return _0x37c767;
        }
        if ("string" == typeof _0x37c767) {
          return this.isLoon() ? _0x37c767 : this.isQuanX() ? {
            "open-url": _0x37c767
          } : this.isSurge() ? {
            url: _0x37c767
          } : void 0;
        }
        if ("object" == typeof _0x37c767) {
          if (this.isLoon()) {
            let _0x2d5aa2 = _0x37c767.openUrl || _0x37c767.url || _0x37c767["open-url"],
              _0xd75574 = _0x37c767.mediaUrl || _0x37c767["media-url"];
            const _0x51756e = {
              openUrl: _0x2d5aa2,
              mediaUrl: _0xd75574
            };
            return _0x51756e;
          }
          if (this.isQuanX()) {
            let _0x348662 = _0x37c767["open-url"] || _0x37c767.url || _0x37c767.openUrl,
              _0x5942b1 = _0x37c767["media-url"] || _0x37c767.mediaUrl;
            const _0x1be558 = {
              "open-url": _0x348662,
              "media-url": _0x5942b1
            };
            return _0x1be558;
          }
          if (this.isSurge()) {
            let _0x39f4eb = _0x37c767.url || _0x37c767.openUrl || _0x37c767["open-url"];
            const _0x3366fb = {
              url: _0x39f4eb
            };
            return _0x3366fb;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x1c19d0, _0x495dec, _0x795354, _0x52e847(_0x580658)) : this.isQuanX() && $notify(_0x1c19d0, _0x495dec, _0x795354, _0x52e847(_0x580658)));
      let _0x4063e6 = ["", "============== 系统通知 =============="];
      _0x4063e6.push(_0x1c19d0);
      _0x495dec && _0x4063e6.push(_0x495dec);
      _0x795354 && _0x4063e6.push(_0x795354);
      console.log(_0x4063e6.join("\n"));
    }
    getMin(_0xb56953, _0x39f17f) {
      return _0xb56953 < _0x39f17f ? _0xb56953 : _0x39f17f;
    }
    getMax(_0x5d0d56, _0x3b6ac5) {
      return _0x5d0d56 < _0x3b6ac5 ? _0x3b6ac5 : _0x5d0d56;
    }
    padStr(_0x4b5059, _0x557b48, _0x3c8492 = "0") {
      let _0x30eaf8 = String(_0x4b5059),
        _0x1a0ed4 = _0x557b48 > _0x30eaf8.length ? _0x557b48 - _0x30eaf8.length : 0,
        _0x20a9b7 = "";
      for (let _0x4a5534 = 0; _0x4a5534 < _0x1a0ed4; _0x4a5534++) {
        _0x20a9b7 += _0x3c8492;
      }
      _0x20a9b7 += _0x30eaf8;
      return _0x20a9b7;
    }
    json2str(_0x3bd391, _0x4e597f, _0x9cc1cd = false) {
      let _0x2b9f6e = [];
      for (let _0x91e3cf of Object.keys(_0x3bd391).sort()) {
        let _0x36387c = _0x3bd391[_0x91e3cf];
        if (_0x36387c && _0x9cc1cd) {
          _0x36387c = encodeURIComponent(_0x36387c);
        }
        _0x2b9f6e.push(_0x91e3cf + "=" + _0x36387c);
      }
      return _0x2b9f6e.join(_0x4e597f);
    }
    str2json(_0x2bc23a, _0x20ac83 = false) {
      let _0x28bfc8 = {};
      for (let _0x34ea5b of _0x2bc23a.split("&")) {
        if (!_0x34ea5b) {
          continue;
        }
        let _0x363a71 = _0x34ea5b.indexOf("=");
        if (_0x363a71 == -1) {
          continue;
        }
        let _0x137b02 = _0x34ea5b.substr(0, _0x363a71),
          _0x44b12d = _0x34ea5b.substr(_0x363a71 + 1);
        if (_0x20ac83) {
          _0x44b12d = decodeURIComponent(_0x44b12d);
        }
        _0x28bfc8[_0x137b02] = _0x44b12d;
      }
      return _0x28bfc8;
    }
    randomString(_0x1e856f, _0x1ddda3 = "abcdef0123456789") {
      let _0x4e572 = "";
      for (let _0x47a5a2 = 0; _0x47a5a2 < _0x1e856f; _0x47a5a2++) {
        _0x4e572 += _0x1ddda3.charAt(Math.floor(Math.random() * _0x1ddda3.length));
      }
      return _0x4e572;
    }
    randomList(_0x5c5070) {
      let _0xcb8553 = Math.floor(Math.random() * _0x5c5070.length);
      return _0x5c5070[_0xcb8553];
    }
    wait(_0x48002f) {
      return new Promise(_0x9532d0 => setTimeout(_0x9532d0, _0x48002f));
    }
    done(_0x3e1886 = {}) {
      const _0x319dc9 = new Date().getTime(),
        _0x3b427 = (_0x319dc9 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x3b427 + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x3e1886);
      }
    }
  }(_0x2870c2, _0x2fb4ad);
}
