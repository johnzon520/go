/*
永辉生活 v1.01

登录前开启捉包, 捉登录包响应里面的uid和refreshToken
或网页登录获取: https://service.leafxxx.win/yonghui/login.html
把捉包或者网页登录获取的uid,refreshToken和备注(非必须)填到文件 yhshCookie.txt 里(第一次运行会自动创建), 多账号换行写
uid#refreshToken#备注
例子: 
123456789321654987#12345678-1345-3546-69c3-xxxxxxxxxxxx#doubi
679113468143213246#yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy#huoge

自动签到和组队互助
目前组队互助是积分大头, 一队需要3个号, N个号可以组满N/2队
500积分可以抵扣1元(上限貌似是抵扣20%), 小毛

cron: 16 7,8,20 * * *
const $ = new Env("永辉生活");
*/

const _0x454ec0 = _0x427c74("永辉生活"),
  _0x408278 = require("fs"),
  _0xbc0ee4 = require("got"),
  {
    CookieJar: _0x3e25a4
  } = require("tough-cookie"),
  _0x43b4a6 = "yhsh",
  _0x4031d7 = _0x43b4a6 + "Cookie.txt",
  _0x5a1d0b = 20000,
  _0x2ca80d = 3;
const _0x14be7e = 1.01,
  _0x3a423f = "yhsh",
  _0x13f210 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x22a328 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003127) NetType/WIFI Language/zh_CN miniProgram/wxc9cf7c95499ee604",
  _0x3814f0 = "10.4.5.3",
  _0x297eb2 = "9601",
  _0x5b0990 = _0x297eb2,
  _0x3bd5e2 = 2000,
  _0x3989bb = 5;
class _0x55ea0b {
  constructor() {
    this.index = _0x454ec0.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x33629c = {
      limit: 0
    };
    const _0xb8726f = {
      Connection: "keep-alive"
    };
    const _0x38bfa1 = {
      retry: _0x33629c,
      timeout: _0x5a1d0b,
      followRedirect: false,
      headers: _0xb8726f
    };
    this.got = _0xbc0ee4.extend(_0x38bfa1);
  }
  get_prefix(_0x4166ea = {}) {
    var _0x411b32 = "",
      _0x5caca2 = _0x454ec0.userCount.toString().length;
    if (this.index) {
      _0x411b32 += "账号[" + _0x454ec0.padStr(this.index, _0x5caca2) + "]";
    }
    if (this.name) {
      _0x411b32 += "[" + this.name + "]";
    }
    return _0x411b32;
  }
  log(_0x322169, _0x1bb66a = {}) {
    let _0x232f8a = this.get_prefix();
    _0x454ec0.log(_0x232f8a + _0x322169, _0x1bb66a);
  }
  async request(_0x5adfb9) {
    const _0x847a9a = ["RequestError"],
      _0x576188 = ["TimeoutError"];
    let _0x54fbe8 = _0x454ec0.copy(_0x5adfb9),
      _0x5892e3 = {};
    try {
      let _0x41dc1e = null,
        _0x487db1 = 0,
        _0x5ae7cb = _0x54fbe8.fn || _0x54fbe8.url,
        _0x5c1049 = _0x54fbe8.valid_code || [200];
      if (_0x54fbe8.form) {
        for (let _0x2699e9 in _0x54fbe8.form) {
          typeof _0x54fbe8.form[_0x2699e9] == "object" && (_0x54fbe8.form[_0x2699e9] = JSON.stringify(_0x54fbe8.form[_0x2699e9]));
        }
      }
      _0x54fbe8.method = _0x54fbe8?.["method"]?.["toUpperCase"]() || "GET";
      if (_0x54fbe8.searchParams) {
        for (let _0x5d7789 in _0x54fbe8.searchParams) {
          typeof _0x54fbe8.searchParams[_0x5d7789] == "object" && (_0x54fbe8.searchParams[_0x5d7789] = JSON.stringify(_0x54fbe8.searchParams[_0x5d7789]));
        }
      }
      let _0x1acf6b = _0x54fbe8.got_client || this.got;
      _0x54fbe8.debug_in && console.log(_0x54fbe8);
      while (_0x487db1 < _0x2ca80d) {
        if (_0x487db1 > 0) {
          await _0x454ec0.wait(_0x3bd5e2 * _0x487db1);
          let _0x2d61dc = _0x454ec0.get(_0x54fbe8, "retryer", null);
          if (_0x2d61dc) {
            let _0x4cacdd = _0x454ec0.get(_0x54fbe8, "retryer_opt", {});
            await _0x2d61dc(_0x54fbe8, _0x4cacdd);
          }
        }
        _0x487db1++;
        let _0x1f5fee = null;
        try {
          let _0x26051d = Number(_0x54fbe8?.["timeout"]?.["request"] || _0x54fbe8?.["timeout"] || _0x5a1d0b),
            _0x4b6e22 = false,
            _0x2ba956 = Date.now(),
            _0x438927 = _0x1acf6b(_0x54fbe8),
            _0x329f0b = setTimeout(() => {
              _0x4b6e22 = true;
              _0x438927.cancel();
            }, _0x26051d);
          await _0x438927.then(_0x32218e => {
            _0x41dc1e = _0x32218e;
          }, _0xb670ca => {
            _0x1f5fee = _0xb670ca;
            _0x41dc1e = _0xb670ca.response;
          }).finally(() => clearTimeout(_0x329f0b));
          let _0x2e4856 = Date.now(),
            _0x151e7e = _0x2e4856 - _0x2ba956,
            _0x2c8400 = _0x41dc1e?.["statusCode"] || null;
          if (_0x4b6e22 || _0x576188.includes(_0x1f5fee?.["name"])) {
            let _0x10f960 = "";
            _0x1f5fee?.["code"] && (_0x10f960 += "(" + _0x1f5fee.code, _0x1f5fee?.["event"] && (_0x10f960 += ":" + _0x1f5fee.event), _0x10f960 += ")");
            this.log("[" + _0x5ae7cb + "]请求超时" + _0x10f960 + "(" + _0x151e7e + "ms)，重试第" + _0x487db1 + "次");
          } else {
            if (_0x847a9a.includes(_0x1f5fee?.["name"])) {
              this.log("[" + _0x5ae7cb + "]请求错误(" + _0x1f5fee.code + ")(" + _0x151e7e + "ms)，重试第" + _0x487db1 + "次");
            } else {
              if (_0x2c8400) {
                _0x1f5fee && !_0x5c1049.includes(_0x2c8400) && this.log("请求[" + _0x5ae7cb + "]返回[" + _0x2c8400 + "]");
              } else {
                let {
                  code = "unknown",
                  name = "unknown"
                } = _0x1f5fee || {};
                this.log("请求[" + _0x5ae7cb + "]错误[" + code + "][" + name + "]");
              }
              break;
            }
          }
        } catch (_0x25b471) {
          this.log("[" + _0x5ae7cb + "]请求错误(" + _0x25b471.message + ")，重试第" + _0x487db1 + "次");
        }
      }
      if (_0x41dc1e === null || _0x41dc1e === undefined) {
        const _0x5602c3 = {
          statusCode: -1,
          headers: null,
          result: null
        };
        return _0x5602c3;
      }
      let {
          statusCode: _0x73cc5d,
          headers: _0x15aff2,
          body: _0x58c221
        } = _0x41dc1e,
        _0x39b9b1 = _0x454ec0.get(_0x54fbe8, "decode_json", true);
      if (_0x58c221 && _0x39b9b1) {
        try {
          _0x58c221 = JSON.parse(_0x58c221);
        } catch {}
      }
      const _0x47806c = {
        statusCode: _0x73cc5d,
        headers: _0x15aff2,
        result: _0x58c221
      };
      _0x5892e3 = _0x47806c;
      _0x54fbe8.debug_out && console.log(_0x5892e3);
    } catch (_0x16826f) {
      console.log(_0x16826f);
    } finally {
      return _0x5892e3;
    }
  }
}
let _0x43afe8 = new _0x55ea0b();
class _0x35e111 extends _0x55ea0b {
  constructor(_0x3abc2a) {
    super();
    let _0x652d60 = _0x3abc2a.split("#");
    this.uid = _0x652d60[0];
    this.refresh_token = _0x652d60[1];
    this.name = _0x652d60?.[2] || "";
    this.access_token = "";
    this.mobile = "";
    this.nickname = "";
    this.need_help_team_count = 0;
    this.helped_team_count = 0;
    this.need_help_team = true;
    this.can_join_team = true;
    this.cookieJar = new _0x3e25a4();
    const _0x5d2a9d = {
      "User-Agent": _0x22a328
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x5d2a9d
    });
  }
  get_sign() {
    return _0x454ec0.randomString();
  }
  get_common_param() {
    let _0x450629 = {
      timestamp: Date.now(),
      channel: "ios",
      platform: "ios",
      v: _0x3814f0,
      app_version: _0x3814f0,
      sellerid: "",
      channelSub: "",
      jysessionid: "",
      brand: "iPhone",
      model: "iPhone15,1",
      os: "ios",
      osVersion: "16.1.0",
      networkType: "WIFI",
      screen: "420*910",
      productLine: "YhStore",
      appType: "h5",
      cityid: "",
      deviceid: "",
      shopid: _0x297eb2,
      memberid: this.uid,
      access_token: this.access_token,
      sign: ""
    };
    return _0x450629;
  }
  async get_accessToken(_0x44f116 = {}) {
    let _0xce5fc5 = false;
    try {
      let _0x1dc8a1 = {
          fn: "get_accessToken",
          method: "post",
          url: "https://api.yonghuivip.com/web/passport/member/accessToken/775",
          searchParams: this.get_common_param(),
          json: {
            uid: this.uid,
            refresh_token: this.refresh_token
          }
        },
        {
          result: _0x44fe16,
          statusCode: _0x4dccc0
        } = await this.request(_0x1dc8a1),
        _0x4afae9 = _0x454ec0.get(_0x44fe16, "code", _0x4dccc0);
      if (_0x4afae9 == 0) {
        let {
          refresh_token: _0x1c286b,
          access_token: _0x2aecb6
        } = _0x44fe16?.["data"];
        this.access_token = _0x2aecb6;
        _0x1c286b != this.refresh_token && (this.refresh_token = _0x1c286b, _0x462bc1());
        _0xce5fc5 = true;
        this.valid = true;
      } else {
        let _0x4af38c = _0x454ec0.get(_0x44fe16, "message", "");
        const _0x2beb2d = {
          notify: true
        };
        this.log("登录失败[" + _0x4afae9 + "]: " + _0x4af38c, _0x2beb2d);
      }
    } catch (_0x3b7716) {
      console.log(_0x3b7716);
    } finally {
      return _0xce5fc5;
    }
  }
  async getinfo(_0x3c37e6 = {}) {
    try {
      let _0x27a276 = {
          fn: "getinfo",
          method: "get",
          url: "https://api.yonghuivip.com/api/web/user/member/getinfo/760",
          searchParams: this.get_common_param()
        },
        {
          result: _0x2f37d0,
          statusCode: _0x489688
        } = await this.request(_0x27a276),
        _0x3d6a0c = _0x454ec0.get(_0x2f37d0, "code", _0x489688);
      if (_0x3d6a0c == 0) {
        let {
          mobile: _0x32f9c8,
          memberid: _0x4338c0,
          nickname: _0x4eedef
        } = _0x2f37d0?.["data"];
        this.name = this.name || _0x32f9c8;
        this.memberid = _0x4338c0;
        this.nickname = _0x4eedef;
      } else {
        let _0x3804df = _0x454ec0.get(_0x2f37d0, "message", "");
        this.log("获取账户信息失败[" + _0x3d6a0c + "]: " + _0x3804df);
      }
    } catch (_0xed813f) {
      console.log(_0xed813f);
    }
  }
  async signreward_detail(_0x15a6e1 = {}) {
    try {
      let _0x139c58 = {
          fn: "signreward_detail",
          method: "get",
          url: "https://api.yonghuivip.com/web/coupon/signreward/detail",
          searchParams: this.get_common_param()
        },
        {
          result: _0x1d4db0,
          statusCode: _0x294401
        } = await this.request(_0x139c58),
        _0x4b889e = _0x454ec0.get(_0x1d4db0, "code", _0x294401);
      if (_0x4b889e == 0) {
        let {
          signflag: _0x2c224a,
          missionid: _0x588166
        } = _0x1d4db0?.["data"];
        _0x2c224a ? this.log("今天已签到") : await this.signreward_sign(_0x588166);
      } else {
        let _0x362e9a = _0x454ec0.get(_0x1d4db0, "message", "");
        this.log("签到失败[" + _0x4b889e + "]: " + _0x362e9a);
      }
    } catch (_0x5a2de0) {
      console.log(_0x5a2de0);
    }
  }
  async signreward_sign(_0x8a6836, _0x1673fe = {}) {
    try {
      const _0x37d8d8 = {
        shopId: _0x5b0990,
        missionid: _0x8a6836
      };
      let _0x2ee2d0 = {
          fn: "signreward_sign",
          method: "post",
          url: "https://api.yonghuivip.com/web/coupon/signreward/sign",
          searchParams: this.get_common_param(),
          json: _0x37d8d8
        },
        {
          result: _0x4d56c6,
          statusCode: _0x4dd145
        } = await this.request(_0x2ee2d0),
        _0x4ceae8 = _0x454ec0.get(_0x4d56c6, "code", _0x4dd145);
      if (_0x4ceae8 == 0) {
        let {
          credit = 0,
          couponvos: _0x2c723e
        } = _0x4d56c6?.["data"]?.["signrewardvo"];
        this.log("签到成功: " + credit + "积分");
        if (_0x2c723e && _0x2c723e?.["length"]) {
          let _0x4bf8b4 = _0x2c723e.map(_0x2922d0 => _0x2922d0.orderminamount / 100 + "减" + _0x2922d0.amount / 100 + "优惠券");
          this.log("签到获得: " + _0x4bf8b4.join(", "));
        }
      } else {
        let _0x3c6707 = _0x454ec0.get(_0x4d56c6, "message", "");
        this.log("签到失败[" + _0x4ceae8 + "]: " + _0x3c6707);
      }
    } catch (_0x2774b4) {
      console.log(_0x2774b4);
    }
  }
  async teamDetail(_0x629a6d = {}) {
    try {
      const _0x29933b = {
        shopId: _0x5b0990
      };
      let _0x18a974 = {
          fn: "teamDetail",
          method: "post",
          url: "https://api.yonghuivip.com/web/coupon/credit/dividePoint/teamDetail",
          searchParams: this.get_common_param(),
          json: _0x29933b
        },
        {
          result: _0x4a4e26,
          statusCode: _0x24abbd
        } = await this.request(_0x18a974),
        _0x873253 = _0x454ec0.get(_0x4a4e26, "code", _0x24abbd);
      if (_0x873253 == 0) {
        let {
          hasTeam: _0xfa23dd,
          teamSize: _0x2f9c21,
          teamStatus: _0x3fb874,
          teamCode: _0x25a0c0,
          teamDetailList: _0x278558
        } = _0x4a4e26?.["data"];
        _0xfa23dd ? (this.teamCode = _0x25a0c0, this.need_help_team_count = _0x2f9c21, this.helped_team_count = _0x278558.length, this.need_help_team_count > this.helped_team_count ? this.need_help_team = true : this.need_help_team = false) : await this.createTeam();
        this.log("组队进度: " + this.helped_team_count + "/" + this.need_help_team_count);
      } else {
        let _0x4dcf57 = _0x454ec0.get(_0x4a4e26, "message", "");
        this.log("查询组队信息失败[" + _0x873253 + "]: " + _0x4dcf57);
      }
    } catch (_0x30874e) {
      console.log(_0x30874e);
    }
  }
  async createTeam(_0x1d4ffb = {}) {
    try {
      const _0x4e67a5 = {
        shopId: _0x5b0990
      };
      let _0x52346a = {
          fn: "createTeam",
          method: "post",
          url: "https://api.yonghuivip.com/web/coupon/credit/dividePoint/createTeam",
          searchParams: this.get_common_param(),
          json: _0x4e67a5
        },
        {
          result: _0x42f020,
          statusCode: _0x16f7b6
        } = await this.request(_0x52346a),
        _0x3a9825 = _0x454ec0.get(_0x42f020, "code", _0x16f7b6);
      if (_0x3a9825 == 0) {
        let {
          teamSize: _0x10d817,
          teamStatus: _0x5a4cde,
          teamCode: _0x4f6b44,
          teamDetailList: _0x5b800a
        } = _0x42f020?.["data"];
        this.teamCode = _0x4f6b44;
        this.need_help_team_count = _0x10d817;
        this.helped_team_count = _0x5b800a.length;
        this.need_help_team_count > this.helped_team_count ? this.need_help_team = true : this.need_help_team = false;
        this.log("开启组队成功");
      } else {
        let _0x4c347a = _0x454ec0.get(_0x42f020, "message", "");
        this.log("开启组队失败[" + _0x3a9825 + "]: " + _0x4c347a);
      }
    } catch (_0x2f938d) {
      console.log(_0x2f938d);
    }
  }
  async joinTheParty(_0x4fe00d, _0x359bba = {}) {
    try {
      let _0x20a96c = _0x4fe00d.name || "账号" + _0x4fe00d.index;
      const _0x440144 = {
        teamCode: _0x4fe00d.teamCode,
        shopId: _0x5b0990
      };
      let _0x46d128 = {
          fn: "joinTheParty",
          method: "post",
          url: "https://api.yonghuivip.com/web/coupon/credit/dividePoint/joinTheParty",
          searchParams: this.get_common_param(),
          json: _0x440144
        },
        {
          result: _0x131869,
          statusCode: _0x2aa84d
        } = await this.request(_0x46d128),
        _0xbb601a = _0x454ec0.get(_0x131869, "code", _0x2aa84d);
      if (_0xbb601a == 0) {
        this.can_join_team = false;
        this.log("加入[" + _0x20a96c + "]队伍成功");
        _0x4fe00d.helped_team_count++;
        _0x4fe00d.helped_team_count >= _0x4fe00d.need_help_team_count && (_0x4fe00d.need_help_team = false, _0x4fe00d.log("组队已完成"));
      } else {
        let _0x3095d5 = _0x454ec0.get(_0x131869, "message", "");
        this.log("加入[" + _0x20a96c + "]队伍失败[" + _0xbb601a + "]: " + _0x3095d5);
        if (_0x3095d5?.["includes"]("队伍人数已达上限")) {
          _0x4fe00d.need_help_team = false;
        } else {
          _0x3095d5?.["includes"]("组队上限") && (this.can_join_team = false);
        }
      }
    } catch (_0x2cdbce) {
      console.log(_0x2cdbce);
    }
  }
  async getcreditcouponpageinfo_v2(_0x4d1ee3 = {}) {
    try {
      let _0x198a62 = {
          fn: "getcreditcouponpageinfo_v2",
          method: "get",
          url: "https://api.yonghuivip.com/web/coupon/credit/coupon/getcreditcouponpageinfo/v2",
          searchParams: this.get_common_param()
        },
        {
          result: _0x568e34,
          statusCode: _0x53a888
        } = await this.request(_0x198a62),
        _0x1c5e8c = _0x454ec0.get(_0x568e34, "code", _0x53a888);
      if (_0x1c5e8c == 0) {
        this.credit = _0x568e34?.["data"]?.["availableCredit"] || 0;
        const _0x3e72f8 = {
          notify: true
        };
        this.log("积分: " + this.credit, _0x3e72f8);
      } else {
        let _0x34cbbf = _0x454ec0.get(_0x568e34, "message", "");
        const _0x235642 = {
          notify: true
        };
        this.log("查询积分失败[" + _0x1c5e8c + "]: " + _0x34cbbf, _0x235642);
      }
    } catch (_0x4efa9e) {
      console.log(_0x4efa9e);
    }
  }
  async userTask(_0xc73f9f = {}) {
    if (!(await this.get_accessToken())) {
      return;
    }
    await this.signreward_detail();
    await this.teamDetail();
  }
}
function _0x5d5328() {
  if (_0x408278.existsSync("./" + _0x4031d7)) {
    const _0x11946c = {
      flag: "r",
      encoding: "utf-8"
    };
    let _0x1e7f43 = _0x408278.readFileSync("./" + _0x4031d7, _0x11946c);
    _0x1e7f43 = _0x1e7f43?.["replace"](/\r/g, "")?.["split"]("\n")?.["filter"](_0x53b306 => _0x53b306) || [];
    for (let _0x448a94 of _0x1e7f43) {
      _0x454ec0.userList.push(new _0x35e111(_0x448a94));
    }
  } else {
    const _0x1f304a = {
      flag: "w",
      encoding: "utf-8"
    };
    _0x408278.writeFileSync("./" + _0x4031d7, "", _0x1f304a);
    _0x454ec0.log("CK文件[" + _0x4031d7 + "]不存在, 默认为你新建一个, 如有需要请填入ck");
  }
  _0x454ec0.userCount = _0x454ec0.userList.length;
  if (!_0x454ec0.userCount) {
    const _0xb11180 = {
      notify: true
    };
    _0x454ec0.log("未找到变量，请检查文件[" + _0x4031d7 + "]", _0xb11180);
    return false;
  }
  _0x454ec0.log("共找到" + _0x454ec0.userCount + "个账号");
  return true;
}
function _0x462bc1() {
  let _0x3a0e01 = [];
  for (let _0x398211 of _0x454ec0.userList) {
    let _0x37b7d3 = _0x398211.name || _0x398211.mobile || "";
    _0x3a0e01.push(_0x398211.uid + "#" + _0x398211.refresh_token + "#" + _0x37b7d3);
  }
  if (_0x3a0e01.length) {
    const _0x325451 = {
      flag: "w",
      encoding: "utf-8"
    };
    _0x408278.writeFileSync("./" + _0x4031d7, _0x3a0e01.join("\n"), _0x325451);
  }
}
!(async () => {
  if (!(await _0x1976a1())) {
    return;
  }
  if (!_0x5d5328()) {
    return;
  }
  _0x454ec0.log("\n------------------- 任务 -------------------");
  for (let _0x2c7835 of _0x454ec0.userList) {
    await _0x2c7835.userTask();
  }
  let _0x99ee20 = _0x454ec0.userList.filter(_0x10efa2 => _0x10efa2.valid);
  _0x454ec0.log("\n------------------- 组队助力 -------------------");
  for (let _0x115179 of _0x99ee20.filter(_0x3b5ab2 => _0x3b5ab2.need_help_team)) {
    for (let _0x546299 of _0x99ee20.filter(_0x51a672 => _0x51a672.can_join_team && _0x51a672.index != _0x115179.index)) {
      if (!_0x115179.need_help_team) {
        break;
      }
      await _0x546299.joinTheParty(_0x115179);
    }
  }
  _0x454ec0.log("\n------------------- 查询积分 -------------------");
  for (let _0x22a19d of _0x99ee20) {
    await _0x22a19d.getcreditcouponpageinfo_v2();
  }
})().catch(_0x2cd514 => _0x454ec0.log(_0x2cd514)).finally(() => _0x454ec0.exitNow());
async function _0x1976a1(_0x4d12f6 = 0) {
  let _0x129863 = true;
  try {
    let _0x3cb372 = {
        fn: "auth",
        method: "get",
        url: _0x13f210,
        timeout: 20000
      },
      {
        statusCode: _0x4edbd5,
        result: _0x10312b
      } = await _0x43afe8.request(_0x3cb372);
    if (_0x4edbd5 != 200) {
      _0x4d12f6++ < _0x3989bb && (_0x129863 = await _0x1976a1(_0x4d12f6));
      return _0x129863;
    }
    if (_0x10312b?.["code"] == 0) {
      _0x10312b = JSON.parse(_0x10312b.data.file.data);
      if (_0x10312b?.["commonNotify"] && _0x10312b.commonNotify.length > 0) {
        const _0x10553b = {
          notify: true
        };
        _0x454ec0.log(_0x10312b.commonNotify.join("\n") + "\n", _0x10553b);
      }
      _0x10312b?.["commonMsg"] && _0x10312b.commonMsg.length > 0 && _0x454ec0.log(_0x10312b.commonMsg.join("\n") + "\n");
      if (_0x10312b[_0x3a423f]) {
        let _0x3240cc = _0x10312b[_0x3a423f];
        _0x3240cc.status == 0 ? _0x14be7e >= _0x3240cc.version ? (_0x129863 = true, _0x454ec0.log(_0x3240cc.msg[_0x3240cc.status]), _0x454ec0.log(_0x3240cc.updateMsg), _0x454ec0.log("现在运行的脚本版本是：" + _0x14be7e + "，最新脚本版本：" + _0x3240cc.latestVersion)) : _0x454ec0.log(_0x3240cc.versionMsg) : _0x454ec0.log(_0x3240cc.msg[_0x3240cc.status]);
      } else {
        _0x454ec0.log(_0x10312b.errorMsg);
      }
    } else {
      _0x4d12f6++ < _0x3989bb && (_0x129863 = await _0x1976a1(_0x4d12f6));
    }
  } catch (_0x14af46) {
    _0x454ec0.log(_0x14af46);
  } finally {
    return _0x129863;
  }
}
function _0x427c74(_0xb7969a) {
  return new class {
    constructor(_0x1b26b1) {
      this.name = _0x1b26b1;
      this.startTime = Date.now();
      const _0x57824c = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x57824c);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }
    log(_0x2e1db9, _0x3087f3 = {}) {
      let _0x53bae5 = {
        console: true
      };
      Object.assign(_0x53bae5, _0x3087f3);
      if (_0x53bae5.time) {
        let _0x11376f = _0x53bae5.fmt || "hh:mm:ss";
        _0x2e1db9 = "[" + this.time(_0x11376f) + "]" + _0x2e1db9;
      }
      if (_0x53bae5.notify) {
        this.notifyStr.push(_0x2e1db9);
      }
      if (_0x53bae5.console) {
        console.log(_0x2e1db9);
      }
    }
    get(_0x231fbf, _0x109846, _0x528a07 = "") {
      let _0x8db8d2 = _0x528a07;
      _0x231fbf?.["hasOwnProperty"](_0x109846) && (_0x8db8d2 = _0x231fbf[_0x109846]);
      return _0x8db8d2;
    }
    pop(_0x4587e2, _0x27e058, _0x10e405 = "") {
      let _0x909233 = _0x10e405;
      _0x4587e2?.["hasOwnProperty"](_0x27e058) && (_0x909233 = _0x4587e2[_0x27e058], delete _0x4587e2[_0x27e058]);
      return _0x909233;
    }
    copy(_0x25ee1d) {
      return Object.assign({}, _0x25ee1d);
    }
    read_env(_0xfeac9a) {
      let _0x140825 = ckNames.map(_0x5c5257 => process.env[_0x5c5257]);
      for (let _0x2562d8 of _0x140825.filter(_0x136531 => !!_0x136531)) {
        for (let _0x1d07da of _0x2562d8.split(envSplitor).filter(_0xc11955 => !!_0xc11955)) {
          this.userList.push(new _0xfeac9a(_0x1d07da));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x5e3f06 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + ckNames.map(_0x743ea9 => "[" + _0x743ea9 + "]").join("或"), _0x5e3f06);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x4e1333, _0x2ad27f = null) {
      let _0x2c3121 = _0x2ad27f ? new Date(_0x2ad27f) : new Date(),
        _0x45d059 = {
          "M+": _0x2c3121.getMonth() + 1,
          "d+": _0x2c3121.getDate(),
          "h+": _0x2c3121.getHours(),
          "m+": _0x2c3121.getMinutes(),
          "s+": _0x2c3121.getSeconds(),
          "q+": Math.floor((_0x2c3121.getMonth() + 3) / 3),
          S: this.padStr(_0x2c3121.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x4e1333) && (_0x4e1333 = _0x4e1333.replace(RegExp.$1, (_0x2c3121.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x420378 in _0x45d059) new RegExp("(" + _0x420378 + ")").test(_0x4e1333) && (_0x4e1333 = _0x4e1333.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x45d059[_0x420378] : ("00" + _0x45d059[_0x420378]).substr(("" + _0x45d059[_0x420378]).length)));
      return _0x4e1333;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      try {
        var _0x23b8d2 = require("./sendNotify");
        this.log("\n============== 推送 ==============");
        await _0x23b8d2.sendNotify(this.name, this.notifyStr.join("\n"));
      } catch {
        this.log("\n=================================");
        this.log("读取推送依赖[sendNotify.js]失败, 请检查同目录下是否有依赖");
      }
    }
    padStr(_0x207b14, _0x4c5df8, _0x2a0033 = {}) {
      let _0x1e40df = _0x2a0033.padding || "0",
        _0xc9ab61 = _0x2a0033.mode || "l",
        _0x125900 = String(_0x207b14),
        _0x3e10d8 = _0x4c5df8 > _0x125900.length ? _0x4c5df8 - _0x125900.length : 0,
        _0x38482b = "";
      for (let _0x397370 = 0; _0x397370 < _0x3e10d8; _0x397370++) {
        _0x38482b += _0x1e40df;
      }
      _0xc9ab61 == "r" ? _0x125900 = _0x125900 + _0x38482b : _0x125900 = _0x38482b + _0x125900;
      return _0x125900;
    }
    json2str(_0x3cc57f, _0x2bd0ec, _0x59a36d = false) {
      let _0x4f6c1c = [];
      for (let _0x43827d of Object.keys(_0x3cc57f).sort()) {
        let _0x1a57cb = _0x3cc57f[_0x43827d];
        if (_0x1a57cb && _0x59a36d) {
          _0x1a57cb = encodeURIComponent(_0x1a57cb);
        }
        _0x4f6c1c.push(_0x43827d + "=" + _0x1a57cb);
      }
      return _0x4f6c1c.join(_0x2bd0ec);
    }
    str2json(_0x5dd8a9, _0x4dfef0 = false) {
      let _0x49e746 = {};
      for (let _0x259052 of _0x5dd8a9.split("&")) {
        if (!_0x259052) {
          continue;
        }
        let _0x30854f = _0x259052.indexOf("=");
        if (_0x30854f == -1) {
          continue;
        }
        let _0x51b33b = _0x259052.substr(0, _0x30854f),
          _0x2201f0 = _0x259052.substr(_0x30854f + 1);
        if (_0x4dfef0) {
          _0x2201f0 = decodeURIComponent(_0x2201f0);
        }
        _0x49e746[_0x51b33b] = _0x2201f0;
      }
      return _0x49e746;
    }
    randomPattern(_0x56a7a2, _0x1e86b1 = "abcdef0123456789") {
      let _0x13cad6 = "";
      for (let _0x32c259 of _0x56a7a2) {
        if (_0x32c259 == "x") {
          _0x13cad6 += _0x1e86b1.charAt(Math.floor(Math.random() * _0x1e86b1.length));
        } else {
          _0x32c259 == "X" ? _0x13cad6 += _0x1e86b1.charAt(Math.floor(Math.random() * _0x1e86b1.length)).toUpperCase() : _0x13cad6 += _0x32c259;
        }
      }
      return _0x13cad6;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x98302f = 32, _0x251fc3 = "abcdef0123456789") {
      let _0x27b7e0 = "";
      for (let _0x140d01 = 0; _0x140d01 < _0x98302f; _0x140d01++) {
        _0x27b7e0 += _0x251fc3.charAt(Math.floor(Math.random() * _0x251fc3.length));
      }
      return _0x27b7e0;
    }
    randomList(_0x3174c0) {
      let _0x1ca8be = Math.floor(Math.random() * _0x3174c0.length);
      return _0x3174c0[_0x1ca8be];
    }
    wait(_0x5d71f8) {
      return new Promise(_0x13e2e7 => setTimeout(_0x13e2e7, _0x5d71f8));
    }
    async exitNow() {
      await this.showmsg();
      let _0x12cc86 = Date.now(),
        _0x15d519 = (_0x12cc86 - this.startTime) / 1000;
      this.log("");
      const _0x5967f7 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x15d519 + "秒", _0x5967f7);
      process.exit(0);
    }
    normalize_time(_0x33d355, _0x32b915 = {}) {
      let _0x1740d5 = _0x32b915.len || this.default_timestamp_len;
      _0x33d355 = _0x33d355.toString();
      let _0x5a38fe = _0x33d355.length;
      while (_0x5a38fe < _0x1740d5) {
        _0x33d355 += "0";
      }
      _0x5a38fe > _0x1740d5 && (_0x33d355 = _0x33d355.slice(0, 13));
      return parseInt(_0x33d355);
    }
    async wait_until(_0x509a30, _0x9acf04 = {}) {
      let _0x15913e = _0x9acf04.logger || this,
        _0x56db21 = _0x9acf04.interval || this.default_wait_interval,
        _0x292a98 = _0x9acf04.limit || this.default_wait_limit,
        _0x48bacf = _0x9acf04.ahead || this.default_wait_ahead;
      if (typeof _0x509a30 == "string" && _0x509a30.includes(":")) {
        if (_0x509a30.includes("-")) {
          _0x509a30 = new Date(_0x509a30).getTime();
        } else {
          let _0x970a75 = this.time("yyyy-MM-dd ");
          _0x509a30 = new Date(_0x970a75 + _0x509a30).getTime();
        }
      }
      let _0x2c9980 = this.normalize_time(_0x509a30) - _0x48bacf,
        _0x5e7e0d = this.time("hh:mm:ss.S", _0x2c9980),
        _0xc66caa = Date.now();
      _0xc66caa > _0x2c9980 && (_0x2c9980 += 86400000);
      let _0x53be30 = _0x2c9980 - _0xc66caa;
      if (_0x53be30 > _0x292a98) {
        const _0x72d8c5 = {
          time: true
        };
        _0x15913e.log("离目标时间[" + _0x5e7e0d + "]大于" + _0x292a98 / 1000 + "秒,不等待", _0x72d8c5);
      } else {
        const _0x4bebd1 = {
          time: true
        };
        _0x15913e.log("离目标时间[" + _0x5e7e0d + "]还有" + _0x53be30 / 1000 + "秒,开始等待", _0x4bebd1);
        while (_0x53be30 > 0) {
          let _0x412b22 = Math.min(_0x53be30, _0x56db21);
          await this.wait(_0x412b22);
          _0xc66caa = Date.now();
          _0x53be30 = _0x2c9980 - _0xc66caa;
        }
        const _0x49822b = {
          time: true
        };
        _0x15913e.log("已完成等待", _0x49822b);
      }
    }
    async wait_gap_interval(_0x162518, _0x52edcc) {
      let _0x37b01d = Date.now() - _0x162518;
      _0x37b01d < _0x52edcc && (await this.wait(_0x52edcc - _0x37b01d));
    }
  }(_0xb7969a);
}
