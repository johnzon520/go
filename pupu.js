/*
朴朴超市 v1.01

自动签到和组队赚朴分, 朴分可以抵扣50%的金额
组队瓜分需要4人成团, 每个号每天只能开团和入队各一次
每天跑一两次即可

使用扫码或自己想办法捉refreshToken
扫码获取token: (先微信进入朴朴超市小程序并登录注册过账号再扫码)
https://service.leafxxx.win/pupu/login.html
把获取的refreshToken和备注(非必须)填到文件pupuCookie.txt里(第一次运行会自动创建), 多账号换行或&或@隔开
export pupuCookie="refreshToken#备注"

cron: 26 8,19 * * *
const $ = new Env("朴朴超市");
*/

const _0x37cb99 = _0x128935("朴朴超市"),
  _0x2561d9 = require("fs"),
  _0x493a69 = require("got"),
  _0x5e14f3 = "pupu",
  _0x464627 = _0x5e14f3 + "Cookie.txt",
  _0x10d311 = 20000,
  _0x229b73 = 3;
const _0x452dab = 1.01,
  _0x13e27e = "pupu",
  _0x198ea4 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x4b9874 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.46(0x18002e2c) NetType/WIFI Language/zh_CN miniProgram/wx122ef876a7132eb4",
  _0x5b285d = 2000,
  _0x592e57 = 5;
class _0x5dc3bb {
  constructor() {
    this.index = _0x37cb99.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x2e7047 = {
      limit: 0
    };
    const _0x5015ad = {
      Connection: "keep-alive"
    };
    const _0x4081e3 = {
      retry: _0x2e7047,
      timeout: _0x10d311,
      followRedirect: false,
      headers: _0x5015ad
    };
    this.got = _0x493a69.extend(_0x4081e3);
  }
  get_prefix(_0x4f5787 = {}) {
    var _0x1f2f74 = "",
      _0x76b73a = _0x37cb99.userCount.toString().length;
    if (this.index) {
      _0x1f2f74 += "账号[" + _0x37cb99.padStr(this.index, _0x76b73a) + "]";
    }
    if (this.name) {
      _0x1f2f74 += "[" + this.name + "]";
    }
    return _0x1f2f74;
  }
  log(_0xbfb8d9, _0x53db7f = {}) {
    let _0x53e40b = this.get_prefix();
    _0x37cb99.log(_0x53e40b + _0xbfb8d9, _0x53db7f);
  }
  async request(_0x445864) {
    const _0x575d5a = ["RequestError"],
      _0x459041 = ["TimeoutError"];
    let _0x50d695 = _0x37cb99.copy(_0x445864),
      _0x4a2d70 = {};
    try {
      let _0x415a30 = null,
        _0x54ce61 = 0,
        _0x5e578a = _0x50d695.fn || _0x50d695.url,
        _0x5e600f = _0x50d695.valid_code || [200];
      if (_0x50d695.form) {
        for (let _0x25dc9f in _0x50d695.form) {
          typeof _0x50d695.form[_0x25dc9f] == "object" && (_0x50d695.form[_0x25dc9f] = JSON.stringify(_0x50d695.form[_0x25dc9f]));
        }
      }
      _0x50d695.method = _0x50d695?.["method"]?.["toUpperCase"]() || "GET";
      if (_0x50d695.searchParams) {
        for (let _0x3f228a in _0x50d695.searchParams) {
          typeof _0x50d695.searchParams[_0x3f228a] == "object" && (_0x50d695.searchParams[_0x3f228a] = JSON.stringify(_0x50d695.searchParams[_0x3f228a]));
        }
      }
      let _0xc8f535 = _0x50d695.got_client || this.got;
      _0x50d695.debug_in && console.log(_0x50d695);
      while (_0x54ce61 < _0x229b73) {
        if (_0x54ce61 > 0) {
          await _0x37cb99.wait(_0x5b285d * _0x54ce61);
          let _0x1b0e51 = _0x37cb99.get(_0x50d695, "retryer", null);
          if (_0x1b0e51) {
            let _0x5d2f0a = _0x37cb99.get(_0x50d695, "retryer_opt", {});
            await _0x1b0e51(_0x50d695, _0x5d2f0a);
          }
        }
        _0x54ce61++;
        let _0x576406 = null;
        try {
          let _0x2c9984 = Number(_0x50d695?.["timeout"]?.["request"] || _0x50d695?.["timeout"] || _0x10d311),
            _0x3b590e = false,
            _0x6cad05 = Date.now(),
            _0x254ba0 = _0xc8f535(_0x50d695),
            _0x4d7e58 = setTimeout(() => {
              _0x3b590e = true;
              _0x254ba0.cancel();
            }, _0x2c9984);
          await _0x254ba0.then(_0xc8827d => {
            _0x415a30 = _0xc8827d;
          }, _0x3e9f7c => {
            _0x576406 = _0x3e9f7c;
            _0x415a30 = _0x3e9f7c.response;
          }).finally(() => clearTimeout(_0x4d7e58));
          let _0x208981 = Date.now(),
            _0x3c8fbb = _0x208981 - _0x6cad05,
            _0x5329ce = _0x415a30?.["statusCode"] || null;
          if (_0x3b590e || _0x459041.includes(_0x576406?.["name"])) {
            let _0x1a2906 = "";
            _0x576406?.["code"] && (_0x1a2906 += "(" + _0x576406.code, _0x576406?.["event"] && (_0x1a2906 += ":" + _0x576406.event), _0x1a2906 += ")");
            this.log("[" + _0x5e578a + "]请求超时" + _0x1a2906 + "(" + _0x3c8fbb + "ms)，重试第" + _0x54ce61 + "次");
          } else {
            if (_0x575d5a.includes(_0x576406?.["name"])) {
              this.log("[" + _0x5e578a + "]请求错误(" + _0x576406.code + ")(" + _0x3c8fbb + "ms)，重试第" + _0x54ce61 + "次");
            } else {
              if (_0x5329ce) {
                _0x576406 && !_0x5e600f.includes(_0x5329ce) && this.log("请求[" + _0x5e578a + "]返回[" + _0x5329ce + "]");
              } else {
                let {
                  code = "unknown",
                  name = "unknown"
                } = _0x576406 || {};
                this.log("请求[" + _0x5e578a + "]错误[" + code + "][" + name + "]");
              }
              break;
            }
          }
        } catch (_0x498eee) {
          this.log("[" + _0x5e578a + "]请求错误(" + _0x498eee.message + ")，重试第" + _0x54ce61 + "次");
        }
      }
      if (_0x415a30 === null || _0x415a30 === undefined) {
        const _0x307026 = {
          statusCode: -1,
          headers: null,
          result: null
        };
        return _0x307026;
      }
      let {
          statusCode: _0x219ff0,
          headers: _0x92c309,
          body: _0x38c00a
        } = _0x415a30,
        _0x2a980f = _0x37cb99.get(_0x50d695, "decode_json", true);
      if (_0x38c00a && _0x2a980f) {
        try {
          _0x38c00a = JSON.parse(_0x38c00a);
        } catch {}
      }
      const _0x2d2919 = {
        statusCode: _0x219ff0,
        headers: _0x92c309,
        result: _0x38c00a
      };
      _0x4a2d70 = _0x2d2919;
      _0x50d695.debug_out && console.log(_0x4a2d70);
    } catch (_0xb0ab57) {
      console.log(_0xb0ab57);
    } finally {
      return _0x4a2d70;
    }
  }
}
let _0x2f36fb = new _0x5dc3bb();
class _0x5f4758 extends _0x5dc3bb {
  constructor(_0x1ca9d3) {
    super();
    let _0xde21fd = _0x1ca9d3.split("#");
    this.refresh_token = _0xde21fd[0];
    this.remark = _0xde21fd?.[1] || "";
    this.team_code = "";
    this.team_need_help = false;
    this.team_can_help = true;
    this.team_max_help = 0;
    this.team_helped_count = 0;
    const _0x3583a6 = {
      "User-Agent": _0x4b9874
    };
    const _0x545ce9 = {
      headers: _0x3583a6
    };
    this.got = this.got.extend(_0x545ce9);
  }
  async user_refresh_token(_0x5a0d61 = {}) {
    let _0x48da77 = false;
    try {
      const _0x235528 = {
        refresh_token: this.refresh_token
      };
      let _0x2919c3 = {
          fn: "user_refresh_token",
          method: "put",
          url: "https://cauth.pupuapi.com/clientauth/user/refresh_token",
          json: _0x235528
        },
        {
          result: _0x1fb5ad,
          statusCode: _0x574cc9
        } = await this.request(_0x2919c3),
        _0x3dbfd8 = _0x37cb99.get(_0x1fb5ad, "errcode", _0x574cc9);
      if (_0x3dbfd8 == 0) {
        this.valid = true;
        let {
          access_token: _0x42c57d,
          refresh_token: _0x26b5f6,
          user_id: _0x5b96ca,
          nick_name: _0x312ba1
        } = _0x1fb5ad?.["data"];
        this.access_token = _0x42c57d;
        this.refresh_token = _0x26b5f6;
        this.user_id = _0x5b96ca;
        this.name = this.remark || _0x312ba1;
        this.got = this.got.extend({
          headers: {
            Authorization: "Bearer " + _0x42c57d,
            "pp-userid": _0x5b96ca
          }
        });
        _0x48da77 = true;
        await this.user_info();
        _0x163725();
      } else {
        let _0x46ff18 = _0x37cb99.get(_0x1fb5ad, "errmsg", "");
        this.log("刷新token失败[" + _0x3dbfd8 + "]: " + _0x46ff18);
      }
    } catch (_0x1b1755) {
      console.log(_0x1b1755);
    } finally {
      return _0x48da77;
    }
  }
  async user_info(_0x139c5b = {}) {
    try {
      let _0x5aaf61 = {
          fn: "user_info",
          method: "get",
          url: "https://cauth.pupuapi.com/clientauth/user/info"
        },
        {
          result: _0x25b2d6,
          statusCode: _0x39e815
        } = await this.request(_0x5aaf61),
        _0x544d92 = _0x37cb99.get(_0x25b2d6, "errcode", _0x39e815);
      if (_0x544d92 == 0) {
        let {
          phone: _0x3ae7ad,
          invite_code: _0x44d5ab
        } = _0x25b2d6?.["data"];
        this.phone = _0x3ae7ad;
        this.name = this.remark || _0x3ae7ad || this.name;
        this.invite_code = _0x44d5ab;
        this.log("登录成功");
      } else {
        let _0x17cf4b = _0x37cb99.get(_0x25b2d6, "errmsg", "");
        this.log("查询用户信息失败[" + _0x544d92 + "]: " + _0x17cf4b);
      }
    } catch (_0x43c449) {
      console.log(_0x43c449);
    }
  }
  async near_location_by_city(_0x3d0f8a = {}) {
    try {
      let _0x17df4b = {
          fn: "near_location_by_city",
          method: "get",
          url: "https://j1.pupuapi.com/client/store/place/near_location_by_city/v2",
          searchParams: {
            lng: "119.31" + _0x37cb99.randomString(4, _0x37cb99.ALL_DIGIT),
            lat: "26.06" + _0x37cb99.randomString(4, _0x37cb99.ALL_DIGIT)
          }
        },
        {
          result: _0x50fbab,
          statusCode: _0x513e95
        } = await this.request(_0x17df4b),
        _0x5a7eab = _0x37cb99.get(_0x50fbab, "errcode", _0x513e95);
      if (_0x5a7eab == 0) {
        let _0x19bc4f = _0x50fbab?.["data"];
        this.location = _0x37cb99.randomList(_0x19bc4f);
        let {
          service_store_id: _0x5b4d12,
          city_zip: _0x541f2e,
          lng_x: _0x4bbe23,
          lat_y: _0x183d9f
        } = this.location;
        this.store_id = _0x5b4d12;
        this.zip = _0x541f2e;
        this.lng = _0x4bbe23;
        this.lat = _0x183d9f;
        const _0x1d8d57 = {
          pp_storeid: _0x5b4d12,
          "pp-cityzip": _0x541f2e
        };
        const _0x22c4d1 = {
          headers: _0x1d8d57
        };
        this.got = this.got.extend(_0x22c4d1);
      } else {
        let _0x58af6c = _0x37cb99.get(_0x50fbab, "errmsg", "");
        this.log("选取随机地点失败[" + _0x5a7eab + "]: " + _0x58af6c);
      }
    } catch (_0x55e1d2) {
      console.log(_0x55e1d2);
    }
  }
  async sign_index(_0x5624af = {}) {
    try {
      let _0x32309f = {
          fn: "sign_index",
          method: "get",
          url: "https://j1.pupuapi.com/client/game/sign/v2/index"
        },
        {
          result: _0x43451f,
          statusCode: _0x579d63
        } = await this.request(_0x32309f),
        _0x3eb9e3 = _0x37cb99.get(_0x43451f, "errcode", _0x579d63);
      if (_0x3eb9e3 == 0) {
        let {
          is_signed: _0x2e7fe6
        } = _0x43451f?.["data"];
        _0x2e7fe6 ? this.log("今天已签到") : await this.do_sign();
      } else {
        let _0x5ccc3c = _0x37cb99.get(_0x43451f, "errmsg", "");
        this.log("查询签到信息失败[" + _0x3eb9e3 + "]: " + _0x5ccc3c);
      }
    } catch (_0x4ed99c) {
      console.log(_0x4ed99c);
    }
  }
  async do_sign(_0x1ba8d8 = {}) {
    try {
      const _0x366b8e = {
        supplement_id: ""
      };
      let _0x27870f = {
          fn: "do_sign",
          method: "post",
          url: "https://j1.pupuapi.com/client/game/sign/v2",
          searchParams: _0x366b8e
        },
        {
          result: _0x108eb4,
          statusCode: _0x2ccbc6
        } = await this.request(_0x27870f),
        _0xa4620b = _0x37cb99.get(_0x108eb4, "errcode", _0x2ccbc6);
      if (_0xa4620b == 0) {
        let {
            daily_sign_coin: _0x5759b6,
            coupon_list = []
          } = _0x108eb4?.["data"],
          _0x14ee44 = [];
        _0x14ee44.push(_0x5759b6 + "积分");
        for (let _0x22c711 of coupon_list) {
          let _0x2aa7f5 = (_0x22c711.condition_amount / 100).toFixed(2),
            _0x3e30fa = (_0x22c711.discount_amount / 100).toFixed(2);
          _0x14ee44.push("满" + _0x2aa7f5 + "减" + _0x3e30fa + "券");
        }
        this.log("签到成功: " + _0x14ee44.join(", "));
      } else {
        let _0x57bc27 = _0x37cb99.get(_0x108eb4, "errmsg", "");
        this.log("签到失败[" + _0xa4620b + "]: " + _0x57bc27);
      }
    } catch (_0x304e31) {
      console.log(_0x304e31);
    }
  }
  async get_team_code(_0x617f6 = {}) {
    try {
      let _0x580586 = {
          fn: "get_team_code",
          method: "post",
          url: "https://j1.pupuapi.com/client/game/coin_share/team"
        },
        {
          result: _0x56792a,
          statusCode: _0x1454c3
        } = await this.request(_0x580586),
        _0x331002 = _0x37cb99.get(_0x56792a, "errcode", _0x1454c3);
      if (_0x331002 == 0) {
        this.team_code = _0x56792a?.["data"] || "";
        await this.check_my_team();
      } else {
        let _0x384910 = _0x37cb99.get(_0x56792a, "errmsg", "");
        this.log("获取组队码失败[" + _0x331002 + "]: " + _0x384910);
      }
    } catch (_0x1ed6c3) {
      console.log(_0x1ed6c3);
    }
  }
  async check_my_team(_0x1a9c65 = {}) {
    try {
      let _0x4dcdfe = {
          fn: "check_my_team",
          method: "get",
          url: "https://j1.pupuapi.com/client/game/coin_share/teams/" + this.team_code
        },
        {
          result: _0x9f0d12,
          statusCode: _0x4ce78d
        } = await this.request(_0x4dcdfe),
        _0x37e7db = _0x37cb99.get(_0x9f0d12, "errcode", _0x4ce78d);
      if (_0x37e7db == 0) {
        let {
          status: _0x5a036f,
          target_team_member_num: _0xb4aaa,
          current_team_member_num: _0x23893e,
          current_user_reward_coin: _0x3ad227
        } = _0x9f0d12?.["data"];
        switch (_0x5a036f) {
          case 10:
            {
              this.team_need_help = true;
              this.team_max_help = _0xb4aaa;
              this.team_helped_count = _0x23893e;
              this.log("组队未完成: " + _0x23893e + "/" + _0xb4aaa);
              break;
            }
          case 30:
            {
              this.log("已组队成功, 获得了" + _0x3ad227 + "积分");
              break;
            }
          default:
            {
              this.log("组队状态[" + _0x5a036f + "]");
              this.log(": " + JSON.stringify(_0x9f0d12?.["data"]));
            }
        }
      } else {
        let _0x24a20f = _0x37cb99.get(_0x9f0d12, "errmsg", "");
        this.log("查询组队信息失败[" + _0x37e7db + "]: " + _0x24a20f);
      }
    } catch (_0x4a0a53) {
      console.log(_0x4a0a53);
    }
  }
  async join_team(_0xa523bd, _0x5e42ba = {}) {
    try {
      let _0x3a13c4 = {
          fn: "join_team",
          method: "post",
          url: "https://j1.pupuapi.com/client/game/coin_share/teams/" + _0xa523bd.team_code + "/join"
        },
        {
          result: _0x285f2c,
          statusCode: _0x56fa78
        } = await this.request(_0x3a13c4),
        _0x1424b4 = _0x37cb99.get(_0x285f2c, "errcode", _0x56fa78);
      if (_0x1424b4 == 0) {
        this.team_can_help = false;
        _0xa523bd.team_helped_count += 1;
        this.log("加入账号[" + _0xa523bd.index + "][" + _0xa523bd.name + "]队伍成功: " + _0xa523bd.team_helped_count + "/" + _0xa523bd.team_max_help);
        _0xa523bd.team_helped_count >= _0xa523bd.team_max_help && (_0xa523bd.team_need_help = false, _0xa523bd.log("组队已满"));
      } else {
        let _0x3cd5d1 = _0x37cb99.get(_0x285f2c, "errmsg", "");
        this.log("加入账号[" + _0xa523bd.index + "][" + _0xa523bd.name + "]队伍失败[" + _0x1424b4 + "]: " + _0x3cd5d1);
        switch (_0x1424b4) {
          case 100007:
            {
              _0xa523bd.team_need_help = false;
              break;
            }
          case 100009:
            {
              this.team_can_help = false;
              break;
            }
        }
      }
    } catch (_0x39b1e) {
      console.log(_0x39b1e);
    }
  }
  async query_coin(_0x562a07 = {}) {
    try {
      let _0x559a8e = {
          fn: "query_coin",
          method: "get",
          url: "https://j1.pupuapi.com/client/coin"
        },
        {
          result: _0x4b47df,
          statusCode: _0x5a10ab
        } = await this.request(_0x559a8e),
        _0x24bb2e = _0x37cb99.get(_0x4b47df, "errcode", _0x5a10ab);
      if (_0x24bb2e == 0) {
        let {
          balance: _0x3ac9d0,
          expiring_coin: _0x2d5517,
          expire_time: _0x184244
        } = _0x4b47df?.["data"];
        const _0x5f2e20 = {
          notify: true
        };
        this.log("朴分: " + _0x3ac9d0, _0x5f2e20);
        if (_0x2d5517 && _0x184244) {
          let _0x4ab83a = _0x37cb99.time("yyyy-MM-dd", _0x184244);
          const _0xca13c2 = {
            notify: true
          };
          this.log("有" + _0x2d5517 + "朴分将于" + _0x4ab83a + "过期", _0xca13c2);
        }
      } else {
        let _0x1b4f29 = _0x37cb99.get(_0x4b47df, "errmsg", "");
        const _0x4ad6b2 = {
          notify: true
        };
        this.log("查询朴分失败[" + _0x24bb2e + "]: " + _0x1b4f29, _0x4ad6b2);
      }
    } catch (_0x2a45eb) {
      console.log(_0x2a45eb);
    }
  }
  async userTask(_0x57bb07 = {}) {
    await this.user_info();
    await this.near_location_by_city();
    await this.sign_index();
    await this.get_team_code();
  }
}
function _0x3a159d() {
  if (_0x2561d9.existsSync("./" + _0x464627)) {
    const _0x56113a = {
      flag: "r",
      encoding: "utf-8"
    };
    let _0x42cae9 = _0x2561d9.readFileSync("./" + _0x464627, _0x56113a);
    _0x42cae9 = _0x42cae9?.["replace"](/\r/g, "")?.["split"]("\n")?.["filter"](_0x232085 => _0x232085) || [];
    for (let _0x3c3316 of _0x42cae9) {
      _0x37cb99.userList.push(new _0x5f4758(_0x3c3316));
    }
  } else {
    const _0x497815 = {
      flag: "w",
      encoding: "utf-8"
    };
    _0x2561d9.writeFileSync("./" + _0x464627, "", _0x497815);
    _0x37cb99.log("CK文件[" + _0x464627 + "]不存在, 默认为你新建一个, 如有需要请填入ck");
  }
  _0x37cb99.userCount = _0x37cb99.userList.length;
  if (!_0x37cb99.userCount) {
    const _0x2447a3 = {
      notify: true
    };
    _0x37cb99.log("未找到变量，请检查文件[" + _0x464627 + "]", _0x2447a3);
    return false;
  }
  _0x37cb99.log("共找到" + _0x37cb99.userCount + "个账号");
  return true;
}
function _0x163725() {
  let _0x3532b5 = [];
  for (let _0x3c70b9 of _0x37cb99.userList) {
    let _0x463db9 = _0x3c70b9.remark || _0x3c70b9.mobile || _0x3c70b9.name || "",
      _0x3dc6fa = _0x3c70b9.refresh_token;
    _0x3532b5.push(_0x3dc6fa + "#" + _0x463db9);
  }
  if (_0x3532b5.length) {
    const _0x5358a7 = {
      flag: "w",
      encoding: "utf-8"
    };
    _0x2561d9.writeFileSync("./" + _0x464627, _0x3532b5.join("\n"), _0x5358a7);
  }
}
!(async () => {
  if (!(await _0x5d7660())) {
    return;
  }
  if (!_0x3a159d()) {
    return;
  }
  _0x37cb99.log("\n------------------- 登录 -------------------");
  for (let _0x28910e of _0x37cb99.userList) {
    await _0x28910e.user_refresh_token();
  }
  let _0xb0aaa5 = _0x37cb99.userList.filter(_0x2d95a7 => _0x2d95a7.valid);
  _0x37cb99.log("\n------------------- 签到组队 -------------------");
  for (let _0x2f3629 of _0xb0aaa5) {
    await _0x2f3629.userTask();
  }
  _0x37cb99.log("\n------------------- 助力 -------------------");
  for (let _0x3003b6 of _0xb0aaa5.filter(_0x4431eb => _0x4431eb.team_need_help)) {
    for (let _0x1261ff of _0xb0aaa5.filter(_0x41013f => _0x41013f.team_can_help && _0x41013f.index != _0x3003b6.index)) {
      if (!_0x3003b6.team_need_help) {
        break;
      }
      await _0x1261ff.join_team(_0x3003b6);
    }
  }
  _0x37cb99.log("\n------------------- 查询 -------------------");
  for (let _0x239fb0 of _0xb0aaa5) {
    await _0x239fb0.query_coin();
  }
})().catch(_0x2bd776 => _0x37cb99.log(_0x2bd776)).finally(() => _0x37cb99.exitNow());
async function _0x5d7660(_0xfea13c = 0) {
  let _0x3344de = true;
  try {
    let _0x3f732e = {
        fn: "auth",
        method: "get",
        url: _0x198ea4,
        timeout: 20000
      },
      {
        statusCode: _0x283cbd,
        result: _0x31b1b5
      } = await _0x2f36fb.request(_0x3f732e);
    if (_0x283cbd != 200) {
      _0xfea13c++ < _0x592e57 && (_0x3344de = await _0x5d7660(_0xfea13c));
      return _0x3344de;
    }
    if (_0x31b1b5?.["code"] == 0) {
      _0x31b1b5 = JSON.parse(_0x31b1b5.data.file.data);
      if (_0x31b1b5?.["commonNotify"] && _0x31b1b5.commonNotify.length > 0) {
        const _0x44a612 = {
          notify: true
        };
        _0x37cb99.log(_0x31b1b5.commonNotify.join("\n") + "\n", _0x44a612);
      }
      _0x31b1b5?.["commonMsg"] && _0x31b1b5.commonMsg.length > 0 && _0x37cb99.log(_0x31b1b5.commonMsg.join("\n") + "\n");
      if (_0x31b1b5[_0x13e27e]) {
        let _0x3f5e32 = _0x31b1b5[_0x13e27e];
        _0x3f5e32.status == 0 ? _0x452dab >= _0x3f5e32.version ? (_0x3344de = true, _0x37cb99.log(_0x3f5e32.msg[_0x3f5e32.status]), _0x37cb99.log(_0x3f5e32.updateMsg), _0x37cb99.log("现在运行的脚本版本是：" + _0x452dab + "，最新脚本版本：" + _0x3f5e32.latestVersion)) : _0x37cb99.log(_0x3f5e32.versionMsg) : _0x37cb99.log(_0x3f5e32.msg[_0x3f5e32.status]);
      } else {
        _0x37cb99.log(_0x31b1b5.errorMsg);
      }
    } else {
      _0xfea13c++ < _0x592e57 && (_0x3344de = await _0x5d7660(_0xfea13c));
    }
  } catch (_0x26bcc1) {
    _0x37cb99.log(_0x26bcc1);
  } finally {
    return _0x3344de;
  }
}
function _0x128935(_0x4941c2) {
  return new class {
    constructor(_0x309afe) {
      this.name = _0x309afe;
      this.startTime = Date.now();
      const _0x4ec938 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x4ec938);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
      this.ALL_DIGIT = "0123456789";
      this.ALL_ALPHABET = "qwertyuiopasdfghjklzxcvbnm";
      this.ALL_CHAR = this.ALL_DIGIT + this.ALL_ALPHABET + this.ALL_ALPHABET.toUpperCase();
    }
    log(_0x4cb057, _0x397e62 = {}) {
      let _0x4ff22f = {
        console: true
      };
      Object.assign(_0x4ff22f, _0x397e62);
      if (_0x4ff22f.time) {
        let _0x1eff6a = _0x4ff22f.fmt || "hh:mm:ss";
        _0x4cb057 = "[" + this.time(_0x1eff6a) + "]" + _0x4cb057;
      }
      if (_0x4ff22f.notify) {
        this.notifyStr.push(_0x4cb057);
      }
      if (_0x4ff22f.console) {
        console.log(_0x4cb057);
      }
    }
    get(_0xb69a76, _0x9e0c2b, _0x218036 = "") {
      let _0x3ffcfd = _0x218036;
      _0xb69a76?.["hasOwnProperty"](_0x9e0c2b) && (_0x3ffcfd = _0xb69a76[_0x9e0c2b]);
      return _0x3ffcfd;
    }
    pop(_0x45266d, _0x519b27, _0xba6621 = "") {
      let _0x2f6844 = _0xba6621;
      _0x45266d?.["hasOwnProperty"](_0x519b27) && (_0x2f6844 = _0x45266d[_0x519b27], delete _0x45266d[_0x519b27]);
      return _0x2f6844;
    }
    copy(_0xc618aa) {
      return Object.assign({}, _0xc618aa);
    }
    read_env(_0x48a998) {
      let _0xf73c50 = ckNames.map(_0xa2c778 => process.env[_0xa2c778]);
      for (let _0x10cbdd of _0xf73c50.filter(_0x491965 => !!_0x491965)) {
        for (let _0x3036c7 of _0x10cbdd.split(envSplitor).filter(_0x2729f3 => !!_0x2729f3)) {
          this.userList.push(new _0x48a998(_0x3036c7));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x28902a = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + ckNames.map(_0x3603ee => "[" + _0x3603ee + "]").join("或"), _0x28902a);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x17df0c, _0x5e98b1 = null) {
      let _0x3b5912 = _0x5e98b1 ? new Date(_0x5e98b1) : new Date(),
        _0x565417 = {
          "M+": _0x3b5912.getMonth() + 1,
          "d+": _0x3b5912.getDate(),
          "h+": _0x3b5912.getHours(),
          "m+": _0x3b5912.getMinutes(),
          "s+": _0x3b5912.getSeconds(),
          "q+": Math.floor((_0x3b5912.getMonth() + 3) / 3),
          S: this.padStr(_0x3b5912.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x17df0c) && (_0x17df0c = _0x17df0c.replace(RegExp.$1, (_0x3b5912.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x1b26b2 in _0x565417) new RegExp("(" + _0x1b26b2 + ")").test(_0x17df0c) && (_0x17df0c = _0x17df0c.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x565417[_0x1b26b2] : ("00" + _0x565417[_0x1b26b2]).substr(("" + _0x565417[_0x1b26b2]).length)));
      return _0x17df0c;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      try {
        var _0x56258a = require("./sendNotify");
        this.log("\n============== 推送 ==============");
        await _0x56258a.sendNotify(this.name, this.notifyStr.join("\n"));
      } catch {
        this.log("\n=================================");
        this.log("读取推送依赖[sendNotify.js]失败, 请检查同目录下是否有依赖");
      }
    }
    padStr(_0x56ea31, _0x5bfd2e, _0x4d2f65 = {}) {
      let _0x8e047e = _0x4d2f65.padding || "0",
        _0x3b604a = _0x4d2f65.mode || "l",
        _0x2ccb2a = String(_0x56ea31),
        _0x1ade82 = _0x5bfd2e > _0x2ccb2a.length ? _0x5bfd2e - _0x2ccb2a.length : 0,
        _0x55c902 = "";
      for (let _0x1cf5f2 = 0; _0x1cf5f2 < _0x1ade82; _0x1cf5f2++) {
        _0x55c902 += _0x8e047e;
      }
      _0x3b604a == "r" ? _0x2ccb2a = _0x2ccb2a + _0x55c902 : _0x2ccb2a = _0x55c902 + _0x2ccb2a;
      return _0x2ccb2a;
    }
    json2str(_0x3adfdc, _0x321ded, _0x1d5fc7 = false) {
      let _0x1031ad = [];
      for (let _0x5083c1 of Object.keys(_0x3adfdc).sort()) {
        let _0x49f9f4 = _0x3adfdc[_0x5083c1];
        if (_0x49f9f4 && _0x1d5fc7) {
          _0x49f9f4 = encodeURIComponent(_0x49f9f4);
        }
        _0x1031ad.push(_0x5083c1 + "=" + _0x49f9f4);
      }
      return _0x1031ad.join(_0x321ded);
    }
    str2json(_0x34766b, _0x2e68cc = false) {
      let _0x58903f = {};
      for (let _0x136935 of _0x34766b.split("&")) {
        if (!_0x136935) {
          continue;
        }
        let _0x241769 = _0x136935.indexOf("=");
        if (_0x241769 == -1) {
          continue;
        }
        let _0x40f95d = _0x136935.substr(0, _0x241769),
          _0x171fb8 = _0x136935.substr(_0x241769 + 1);
        if (_0x2e68cc) {
          _0x171fb8 = decodeURIComponent(_0x171fb8);
        }
        _0x58903f[_0x40f95d] = _0x171fb8;
      }
      return _0x58903f;
    }
    randomPattern(_0x2d6af6, _0x517489 = "abcdef0123456789") {
      let _0x559bdd = "";
      for (let _0x263d6d of _0x2d6af6) {
        if (_0x263d6d == "x") {
          _0x559bdd += _0x517489.charAt(Math.floor(Math.random() * _0x517489.length));
        } else {
          _0x263d6d == "X" ? _0x559bdd += _0x517489.charAt(Math.floor(Math.random() * _0x517489.length)).toUpperCase() : _0x559bdd += _0x263d6d;
        }
      }
      return _0x559bdd;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x34b7b2, _0x3a63fb = "abcdef0123456789") {
      let _0x6cebb4 = "";
      for (let _0x581f0d = 0; _0x581f0d < _0x34b7b2; _0x581f0d++) {
        _0x6cebb4 += _0x3a63fb.charAt(Math.floor(Math.random() * _0x3a63fb.length));
      }
      return _0x6cebb4;
    }
    randomList(_0x1114eb) {
      let _0x58e570 = Math.floor(Math.random() * _0x1114eb.length);
      return _0x1114eb[_0x58e570];
    }
    wait(_0x41fb20) {
      return new Promise(_0x45eac4 => setTimeout(_0x45eac4, _0x41fb20));
    }
    async exitNow() {
      await this.showmsg();
      let _0x207148 = Date.now(),
        _0x5d8daf = (_0x207148 - this.startTime) / 1000;
      this.log("");
      const _0x3183c8 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x5d8daf + "秒", _0x3183c8);
      process.exit(0);
    }
    normalize_time(_0x3fd950, _0x57f85f = {}) {
      let _0x2f11f0 = _0x57f85f.len || this.default_timestamp_len;
      _0x3fd950 = _0x3fd950.toString();
      let _0x5f5349 = _0x3fd950.length;
      while (_0x5f5349 < _0x2f11f0) {
        _0x3fd950 += "0";
      }
      _0x5f5349 > _0x2f11f0 && (_0x3fd950 = _0x3fd950.slice(0, 13));
      return parseInt(_0x3fd950);
    }
    async wait_until(_0x582606, _0xe0d1c1 = {}) {
      let _0x3096ab = _0xe0d1c1.logger || this,
        _0xb87187 = _0xe0d1c1.interval || this.default_wait_interval,
        _0x4aa12e = _0xe0d1c1.limit || this.default_wait_limit,
        _0x2d07f8 = _0xe0d1c1.ahead || this.default_wait_ahead;
      if (typeof _0x582606 == "string" && _0x582606.includes(":")) {
        if (_0x582606.includes("-")) {
          _0x582606 = new Date(_0x582606).getTime();
        } else {
          let _0x1bfe5a = this.time("yyyy-MM-dd ");
          _0x582606 = new Date(_0x1bfe5a + _0x582606).getTime();
        }
      }
      let _0x1f4e3a = this.normalize_time(_0x582606) - _0x2d07f8,
        _0xaab303 = this.time("hh:mm:ss.S", _0x1f4e3a),
        _0x550218 = Date.now();
      _0x550218 > _0x1f4e3a && (_0x1f4e3a += 86400000);
      let _0x5bbf2c = _0x1f4e3a - _0x550218;
      if (_0x5bbf2c > _0x4aa12e) {
        const _0x24e226 = {
          time: true
        };
        _0x3096ab.log("离目标时间[" + _0xaab303 + "]大于" + _0x4aa12e / 1000 + "秒,不等待", _0x24e226);
      } else {
        const _0x1a12f8 = {
          time: true
        };
        _0x3096ab.log("离目标时间[" + _0xaab303 + "]还有" + _0x5bbf2c / 1000 + "秒,开始等待", _0x1a12f8);
        while (_0x5bbf2c > 0) {
          let _0x33de31 = Math.min(_0x5bbf2c, _0xb87187);
          await this.wait(_0x33de31);
          _0x550218 = Date.now();
          _0x5bbf2c = _0x1f4e3a - _0x550218;
        }
        const _0x4f0651 = {
          time: true
        };
        _0x3096ab.log("已完成等待", _0x4f0651);
      }
    }
    async wait_gap_interval(_0x35a463, _0x5d000e) {
      let _0x1c8072 = Date.now() - _0x35a463;
      _0x1c8072 < _0x5d000e && (await this.wait(_0x5d000e - _0x1c8072));
    }
  }(_0x4941c2);
}
