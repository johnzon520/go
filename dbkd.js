/*
德邦快递 v1.01

微信小程序 - 德邦快递
每天领券和积分
登录之后, 捉包把域名www.deppon.com请求里面的Cookie ECO_TOKEN 的值填到变量 dbkdCookie 里, 多账号换行或&或@隔开
export dbkdCookie="A330DEF1111111112222222233333344"

cron: 36 9,19 * * *
const $ = new Env("德邦快递");
*/

const _0xa93efa = _0x28e6ce("德邦快递"),
  _0x1497de = require("got"),
  _0x53b388 = "dbkd",
  _0x3f23f6 = /[\n\&\@]/,
  _0x3d548f = [_0x53b388 + "Cookie"],
  _0x571729 = 20000,
  _0x40a384 = 3;
const _0x3a005c = 1.01,
  _0x472ed6 = "dbkd",
  _0x1304fe = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x3d2241 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.42(0x18002a2a) NetType/WIFI Language/zh_CN miniProgram/wxa1ebeeb0ed47f0b2",
  _0x4fa983 = "https://mas.deppon.com/cms/h5.html",
  _0x3f304c = "https://mas.deppon.com",
  _0x30fa34 = "Zv8i7IsOPZIQrvvupKXE1w==",
  _0x20b2e4 = 5,
  _0x207a84 = [8, 9, 11];
class _0x366658 {
  constructor() {
    this.index = _0xa93efa.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x1ece10 = {
      limit: 0
    };
    const _0x20b995 = {
      Connection: "keep-alive"
    };
    const _0x37f382 = {
      retry: _0x1ece10,
      timeout: _0x571729,
      followRedirect: false,
      headers: _0x20b995
    };
    this.got = _0x1497de.extend(_0x37f382);
  }
  log(_0x57da2f, _0x36f226 = {}) {
    var _0x1f6ecf = "",
      _0x47aff3 = _0xa93efa.userCount.toString().length;
    if (this.index) {
      _0x1f6ecf += "账号[" + _0xa93efa.padStr(this.index, _0x47aff3) + "]";
    }
    if (this.name) {
      _0x1f6ecf += "[" + this.name + "]";
    }
    _0xa93efa.log(_0x1f6ecf + _0x57da2f, _0x36f226);
  }
  async request(_0x490c58) {
    const _0x26d2e4 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x21d621 = ["TimeoutError"];
    var _0x4d62dc = null,
      _0x5aae4a = 0,
      _0x523bb1 = _0x490c58.fn || _0x490c58.url;
    _0x490c58.method = _0x490c58?.["method"]?.["toUpperCase"]() || "GET";
    let _0x2ae55a;
    while (_0x5aae4a < _0x40a384) {
      try {
        _0x5aae4a++;
        _0x2ae55a = null;
        let _0x5c6986 = null,
          _0x5d7574 = _0x490c58?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x571729,
          _0x5b3dbe = false;
        await new Promise(async _0x33b29b => {
          setTimeout(() => {
            _0x5b3dbe = true;
            _0x33b29b();
          }, _0x5d7574);
          await this.got(_0x490c58).then(_0x37e583 => {
            _0x4d62dc = _0x37e583;
          }, _0x393548 => {
            _0x5c6986 = _0x393548;
            _0x4d62dc = _0x393548.response;
            _0x2ae55a = _0x5c6986?.["code"];
          });
          _0x33b29b();
        });
        if (_0x5b3dbe) {
          this.log("[" + _0x523bb1 + "]请求超时(" + _0x5d7574 / 1000 + "秒)，重试第" + _0x5aae4a + "次");
        } else {
          if (_0x21d621.includes(_0x5c6986?.["name"])) {
            this.log("[" + _0x523bb1 + "]请求超时(" + _0x5c6986.code + ")，重试第" + _0x5aae4a + "次");
          } else {
            if (_0x26d2e4.includes(_0x5c6986?.["code"])) {
              this.log("[" + _0x523bb1 + "]请求错误(" + _0x5c6986.code + ")，重试第" + _0x5aae4a + "次");
            } else {
              let _0x22e107 = _0x4d62dc?.["statusCode"] || 999,
                _0x5ab9cb = _0x22e107 / 100 | 0;
              if (_0x5ab9cb > 3) {
                this.log("请求[" + _0x523bb1 + "]返回[" + _0x22e107 + "]");
              }
              if (_0x5ab9cb <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x3bd046) {
        _0x3bd046.name == "TimeoutError" ? this.log("[" + _0x523bb1 + "]请求超时，重试第" + _0x5aae4a + "次") : this.log("[" + _0x523bb1 + "]请求错误(" + _0x3bd046.message + ")，重试第" + _0x5aae4a + "次");
      }
    }
    if (_0x4d62dc == null) {
      return Promise.resolve({
        statusCode: _0x2ae55a || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0xe807ba,
      headers: _0x53db52,
      body: _0x28ee31
    } = _0x4d62dc;
    if (_0x28ee31) {
      try {
        _0x28ee31 = JSON.parse(_0x28ee31);
      } catch {}
    }
    const _0x4b1340 = {
      statusCode: _0xe807ba,
      headers: _0x53db52,
      result: _0x28ee31
    };
    return Promise.resolve(_0x4b1340);
  }
}
let _0x37f7ad = new _0x366658();
class _0x1154da extends _0x366658 {
  constructor(_0x9cb0d9) {
    super();
    this.ECO_TOKEN = _0x9cb0d9;
    const _0x12bd3b = {
      "User-Agent": _0x3d2241,
      Referer: _0x4fa983,
      Origin: _0x3f304c
    };
    const _0x4fa08c = {
      headers: _0x12bd3b
    };
    this.got = this.got.extend(_0x4fa08c);
  }
  async queryUserInfo(_0x5e8e5b = {}) {
    let _0x2af6e7 = false;
    try {
      const _0x262418 = {
        Cookie: "ECO_TOKEN=" + this.ECO_TOKEN + ";",
        Referer: "https://servicewechat.com/wxa1ebeeb0ed47f0b2/633/page-frame.html"
      };
      let _0x1fd494 = {
          fn: "queryUserInfo",
          method: "get",
          url: "https://www.deppon.com/ndcc-gwapi/userService/eco/user/secure/queryUserInfo",
          headers: _0x262418
        },
        {
          result: _0x2b81ab,
          statusCode: _0x3a3564
        } = await this.request(_0x1fd494),
        _0x3f2f23 = _0xa93efa.get(_0x2b81ab, "status", "?");
      if (_0x3f2f23 == "success") {
        this.name = _0x2b81ab?.["result"]?.["mobile"];
        _0x2af6e7 = await this.generateTmpToken();
      } else {
        let _0x3f412e = _0xa93efa.get(_0x2b81ab, "msg", "");
        const _0x4608cd = {
          notify: true
        };
        this.log("查询账户失败[" + _0x3a3564 + "]: " + _0x3f2f23 + " -- " + _0x3f412e, _0x4608cd);
      }
    } catch (_0x4a3e79) {
      console.log(_0x4a3e79);
    } finally {
      return _0x2af6e7;
    }
  }
  async generateTmpToken(_0x221482 = {}) {
    let _0x35edc6 = false;
    try {
      const _0x40f14a = {
        source: ""
      };
      const _0x52732b = {
        fn: "generateTmpToken",
        method: "get",
        url: "https://www.deppon.com/ndcc-gwapi/userService/eco/user/token/secure/generateTmpToken",
        searchParams: _0x40f14a,
        headers: {}
      };
      _0x52732b.headers.Cookie = "ECO_TOKEN=" + this.ECO_TOKEN + ";";
      _0x52732b.headers.Referer = "https://servicewechat.com/wxa1ebeeb0ed47f0b2/633/page-frame.html";
      let _0x1bc11e = _0x52732b,
        {
          result: _0x28f99c,
          statusCode: _0x17a0ec
        } = await this.request(_0x1bc11e),
        _0x37d2e0 = _0xa93efa.get(_0x28f99c, "status", "?");
      if (_0x37d2e0 == "success") {
        _0x35edc6 = await this.login_verify(_0x28f99c?.["result"]);
      } else {
        let _0x81ee61 = _0xa93efa.get(_0x28f99c, "msg", "");
        const _0x2d3130 = {
          notify: true
        };
        this.log("获取登录code失败[" + _0x17a0ec + "]: " + _0x37d2e0 + " -- " + _0x81ee61, _0x2d3130);
      }
    } catch (_0x229bf4) {
      console.log(_0x229bf4);
    } finally {
      return _0x35edc6;
    }
  }
  async login_verify(_0x227e63, _0x28895f = {}) {
    let _0x2b7c1b = false;
    try {
      const _0x15a7da = {
        code: _0x227e63,
        flag: true
      };
      let _0x114152 = {
          fn: "login_verify",
          method: "post",
          url: "https://mas.deppon.com/crm-api/login/verify",
          json: _0x15a7da
        },
        {
          result: _0x2223c3,
          statusCode: _0x90d3e7
        } = await this.request(_0x114152),
        _0x24d2f9 = _0xa93efa.get(_0x2223c3, "code", _0x90d3e7);
      if (_0x24d2f9 == 200) {
        _0x2b7c1b = true;
        let {
          mobile: _0xfdd1df,
          token: _0xaa9d79
        } = _0x2223c3?.["data"];
        this.phone = _0xfdd1df;
        this.token = _0xaa9d79;
        const _0x335682 = {
          token: _0xaa9d79
        };
        const _0x40290b = {
          headers: _0x335682
        };
        this.got = this.got.extend(_0x40290b);
      } else {
        let _0x3f34bc = _0xa93efa.get(_0x2223c3, "msg", "");
        const _0x3499e5 = {
          notify: true
        };
        this.log("登录失败[" + _0x24d2f9 + "]: " + _0x3f34bc, _0x3499e5);
      }
    } catch (_0x2bbda3) {
      console.log(_0x2bbda3);
    } finally {
      return _0x2b7c1b;
    }
  }
  async getSvipNewestInfo(_0x5ce5cb = {}) {
    try {
      const _0x35afb6 = {
        fn: "getSvipNewestInfo",
        method: "get",
        url: "https://www.deppon.com/ndcc-gwapi/memberService/eco/member/grade/secure/getSvipNewestInfo",
        headers: {}
      };
      _0x35afb6.headers.Cookie = "ECO_TOKEN=" + this.ECO_TOKEN + ";";
      _0x35afb6.headers.Referer = "https://servicewechat.com/wxa1ebeeb0ed47f0b2/633/page-frame.html";
      let _0x4d215 = _0x35afb6,
        {
          result: _0x17b2d7,
          statusCode: _0x175f91
        } = await this.request(_0x4d215),
        _0x2e25bb = _0xa93efa.get(_0x17b2d7, "status", "?");
      if (_0x2e25bb == "success") {
        const _0x4e7ecc = {
          notify: true
        };
        this.log("积分: " + (_0x17b2d7?.["result"]?.["points"] || 0), _0x4e7ecc);
      } else {
        let _0x2df597 = _0xa93efa.get(_0x17b2d7, "msg", "");
        const _0x4ab04f = {
          notify: true
        };
        this.log("查询积分失败[" + _0x175f91 + "]: " + _0x2e25bb + " -- " + _0x2df597, _0x4ab04f);
      }
    } catch (_0x3271) {
      console.log(_0x3271);
    }
  }
  async signIn_info(_0x5034a2 = {}) {
    try {
      const _0x15cf8a = {
        phone: this.phone
      };
      let _0x4d4d4c = {
          fn: "signIn_info",
          method: "post",
          url: "https://mas.deppon.com/crm-api/deppon/signIn/info",
          json: _0x15cf8a
        },
        {
          result: _0x1db67c,
          statusCode: _0x222714
        } = await this.request(_0x4d4d4c),
        _0x570e4d = _0xa93efa.get(_0x1db67c, "code", _0x222714);
      if (_0x570e4d == 200) {
        let {
          isSignIn: _0x18e434,
          signInDay: _0x3a2deb,
          recordDTOS: _0x3d04e5
        } = _0x1db67c?.["data"];
        !_0x18e434 && _0x3d04e5?.[0] ? await this.signIn(_0x3d04e5?.[0]) : this.log("[领券签到]今天已签到, 已签到" + _0x3a2deb + "天");
      } else {
        let _0x37be27 = _0xa93efa.get(_0x1db67c, "msg", "");
        this.log("查询领券签到信息失败[" + _0x570e4d + "]: " + _0x37be27);
      }
    } catch (_0x2c5854) {
      console.log(_0x2c5854);
    }
  }
  async points_signIn_info(_0x964f57 = {}) {
    try {
      const _0x22b81d = {
        phone: this.phone
      };
      let _0x170b82 = {
          fn: "signIn_info",
          method: "post",
          url: "https://mas.deppon.com/crm-api/deppon/points/task/signIn/info",
          json: _0x22b81d
        },
        {
          result: _0x14f3b0,
          statusCode: _0x4ddcbd
        } = await this.request(_0x170b82),
        _0x119e61 = _0xa93efa.get(_0x14f3b0, "code", _0x4ddcbd);
      if (_0x119e61 == 200) {
        let {
          isSignIn: _0x4e388b,
          signInDay: _0x59b3a4,
          signInDayInfo: _0x3521fc,
          recordDTOS: _0x3a20f4
        } = _0x14f3b0?.["data"];
        if (_0x4e388b) {
          for (let _0x5c9964 of _0x3a20f4 || []) {
            const _0x226847 = {
              note: _0x3521fc
            };
            await this.task_receive(_0x5c9964, _0x226847);
          }
        } else {
          this.log("[积分签到]今天已签到, 已签到" + _0x59b3a4 + "天");
        }
      } else {
        let _0x4aa46a = _0xa93efa.get(_0x14f3b0, "msg", "");
        this.log("查询积分签到信息失败[" + _0x119e61 + "]: " + _0x4aa46a);
      }
    } catch (_0x685e2f) {
      console.log(_0x685e2f);
    }
  }
  async task_list(_0x5516ae = {}) {
    try {
      const _0x4a2d7d = {
        phone: this.phone
      };
      let _0x246005 = {
          fn: "task_list",
          method: "post",
          url: "https://mas.deppon.com/crm-api/deppon/points/task/list",
          json: _0x4a2d7d
        },
        {
          result: _0x220126,
          statusCode: _0x2cc9ee
        } = await this.request(_0x246005),
        _0x206d2a = _0xa93efa.get(_0x220126, "code", _0x2cc9ee);
      if (_0x206d2a == 200) {
        for (let _0x32b23d of _0x220126?.["data"]?.["taskList"] || []) {
          switch (_0x32b23d.rightsClaimStatus) {
            case 0:
              if (_0x207a84.includes(_0x32b23d.taskRuleId)) {
                break;
              }
              await this.changeStatus(_0x32b23d);
            case 1:
              await this.task_receive(_0x32b23d);
              break;
          }
        }
      } else {
        let _0x2bc2d4 = _0xa93efa.get(_0x220126, "msg", "");
        this.log("查询积分任务失败[" + _0x206d2a + "]: " + _0x2bc2d4);
      }
    } catch (_0x2ca2e9) {
      console.log(_0x2ca2e9);
    }
  }
  async changeStatus(_0x2a8e4b, _0x2ca14e = {}) {
    try {
      const _0x608fe4 = {
        phone: this.phone,
        rightsClaimStatus: 1,
        taskRuleId: _0x2a8e4b.taskRuleId
      };
      let _0x4e026f = {
          fn: "changeStatus",
          method: "post",
          url: "https://mas.deppon.com/crm-api/deppon/points/task/changeStatus",
          json: _0x608fe4
        },
        {
          result: _0x1b499e,
          statusCode: _0x461d49
        } = await this.request(_0x4e026f),
        _0x592597 = _0xa93efa.get(_0x1b499e, "code", _0x461d49);
      if (_0x592597 == 200) {
        this.log("完成任务[" + _0x2a8e4b.name + "]成功");
      } else {
        let _0x18a9be = _0xa93efa.get(_0x1b499e, "msg", "");
        this.log("完成任务[" + _0x2a8e4b.name + "]失败[" + _0x592597 + "]: " + _0x18a9be);
      }
    } catch (_0x4184eb) {
      console.log(_0x4184eb);
    }
  }
  async task_receive(_0xbf0868, _0x5c0193 = {}) {
    try {
      let _0x14aead = _0xa93efa.get(_0x5c0193, "note", undefined);
      const _0x2b4e1e = {
        phone: this.phone,
        taskRuleId: _0xbf0868.taskRuleId,
        ruleId: _0xbf0868.taskRuleId,
        note: _0x14aead
      };
      let _0x46d456 = {
          fn: "task_receive",
          method: "post",
          url: "https://mas.deppon.com/crm-api/deppon/points/task/receive",
          json: _0x2b4e1e
        },
        {
          result: _0x33c19d,
          statusCode: _0x219874
        } = await this.request(_0x46d456),
        _0x5d35f6 = _0xa93efa.get(_0x33c19d, "code", _0x219874);
      if (_0x5d35f6 == 200) {
        this.log("领取任务[" + _0xbf0868.name + "]奖励成功");
      } else {
        let _0x2b5e2e = _0xa93efa.get(_0x33c19d, "msg", "");
        this.log("领取任务[" + _0xbf0868.name + "]奖励失败[" + _0x5d35f6 + "]: " + _0x2b5e2e);
      }
    } catch (_0x3a5ddd) {
      console.log(_0x3a5ddd);
    }
  }
  async signIn(_0x59f14c, _0x134a48 = {}) {
    try {
      const _0x2d94d5 = {
        phone: this.phone,
        taskRuleId: _0x59f14c.taskRuleId
      };
      let _0x2c47b9 = {
          fn: "signIn",
          method: "post",
          url: "https://mas.deppon.com/crm-api/deppon/signIn",
          json: _0x2d94d5
        },
        {
          result: _0x32efbb,
          statusCode: _0x186c3e
        } = await this.request(_0x2c47b9),
        _0x602bfb = _0xa93efa.get(_0x32efbb, "code", _0x186c3e);
      if (_0x602bfb == 200) {
        let _0x3b8ccb = _0x32efbb?.["data"]?.["map"](_0x29f220 => _0x29f220.remark)?.["filter"](_0x56247f => _0x56247f)?.["join"](", ") || "";
        this.log("签到成功: " + _0x3b8ccb);
      } else {
        let _0x47e10f = _0xa93efa.get(_0x32efbb, "msg", "");
        this.log("签到失败[" + _0x602bfb + "]: " + _0x47e10f);
      }
    } catch (_0x1dca5b) {
      console.log(_0x1dca5b);
    }
  }
  async lottery_query2(_0x4e3a2a = {}) {
    try {
      const _0x2f9e5a = {
        phone: this.phone
      };
      let _0x471f9b = {
          fn: "lottery_query2",
          method: "post",
          url: "https://mas.deppon.com/crm-api/points/balance/query2",
          json: _0x2f9e5a
        },
        {
          result: _0x3162a5,
          statusCode: _0x41b4ce
        } = await this.request(_0x471f9b),
        _0x379e43 = _0xa93efa.get(_0x3162a5, "code", _0x41b4ce);
      if (_0x379e43 == 200) {
        let _0x10fb2a = _0x3162a5?.["data"]?.["pointsAvailableValue"] || 0;
        this.log("可以抽奖" + _0x10fb2a + "次");
        while (_0x10fb2a-- > 0) {
          await this.lottery();
        }
      } else {
        let _0x1ba7f2 = _0xa93efa.get(_0x3162a5, "msg", "");
        this.log("签到失败[" + _0x379e43 + "]: " + _0x1ba7f2);
      }
    } catch (_0x25fd22) {
      console.log(_0x25fd22);
    }
  }
  async lottery(_0x16e8d5 = {}) {
    try {
      const _0x3d1a28 = {
        mobile: this.phone,
        gameId: _0x30fa34
      };
      let _0xefc2c1 = {
          fn: "lottery",
          method: "post",
          url: "https://mas.deppon.com/crm-api/game/draw/lottery",
          json: _0x3d1a28
        },
        {
          result: _0x69850f,
          statusCode: _0x3bb80a
        } = await this.request(_0xefc2c1),
        _0x38f8dd = _0xa93efa.get(_0x69850f, "code", _0x3bb80a);
      if (_0x38f8dd == 200) {
        this.log("抽奖: [" + (_0x69850f?.["data"]?.["name"] || "") + "]" + (_0x69850f?.["data"]?.["remark"] || ""));
      } else {
        let _0x52a705 = _0xa93efa.get(_0x69850f, "msg", "");
        this.log("抽奖失败[" + _0x38f8dd + "]: " + _0x52a705);
      }
    } catch (_0x283f18) {
      console.log(_0x283f18);
    }
  }
  async userTask(_0x417a93 = {}) {
    try {
      _0xa93efa.log("\n--------------- 账户[" + this.index + "] ---------------");
      if (!(await this.queryUserInfo())) {
        return;
      }
      await this.signIn_info();
      await this.lottery_query2();
      await this.points_signIn_info();
      await this.task_list();
      await this.getSvipNewestInfo();
    } catch (_0x50187b) {
      console.log(_0x50187b);
    }
  }
}
!(async () => {
  if (!(await _0x1f1a52())) {
    return;
  }
  _0xa93efa.read_env(_0x1154da);
  for (let _0x125ea7 of _0xa93efa.userList) {
    await _0x125ea7.userTask();
  }
})().catch(_0x3f4a72 => _0xa93efa.log(_0x3f4a72)).finally(() => _0xa93efa.exitNow());
async function _0x1f1a52(_0x1b4a0d = 0) {
  let _0x391d53 = false;
  try {
    let _0x107646 = {
        fn: "auth",
        method: "get",
        url: _0x1304fe,
        timeout: 20000
      },
      {
        statusCode: _0x576bbe,
        result: _0xf38887
      } = await _0x37f7ad.request(_0x107646);
    if (_0x576bbe != 200) {
      _0x1b4a0d++ < _0x20b2e4 && (_0x391d53 = await _0x1f1a52(_0x1b4a0d));
      return _0x391d53;
    }
    if (_0xf38887?.["code"] == 0) {
      _0xf38887 = JSON.parse(_0xf38887.data.file.data);
      if (_0xf38887?.["commonNotify"] && _0xf38887.commonNotify.length > 0) {
        const _0x4bbd58 = {
          notify: true
        };
        _0xa93efa.log(_0xf38887.commonNotify.join("\n") + "\n", _0x4bbd58);
      }
      _0xf38887?.["commonMsg"] && _0xf38887.commonMsg.length > 0 && _0xa93efa.log(_0xf38887.commonMsg.join("\n") + "\n");
      if (_0xf38887[_0x472ed6]) {
        let _0x2005d3 = _0xf38887[_0x472ed6];
        _0x2005d3.status == 0 ? _0x3a005c >= _0x2005d3.version ? (_0x391d53 = true, _0xa93efa.log(_0x2005d3.msg[_0x2005d3.status]), _0xa93efa.log(_0x2005d3.updateMsg), _0xa93efa.log("现在运行的脚本版本是：" + _0x3a005c + "，最新脚本版本：" + _0x2005d3.latestVersion)) : _0xa93efa.log(_0x2005d3.versionMsg) : _0xa93efa.log(_0x2005d3.msg[_0x2005d3.status]);
      } else {
        _0xa93efa.log(_0xf38887.errorMsg);
      }
    } else {
      _0x1b4a0d++ < _0x20b2e4 && (_0x391d53 = await _0x1f1a52(_0x1b4a0d));
    }
  } catch (_0x4d0eb7) {
    _0xa93efa.log(_0x4d0eb7);
  } finally {
    return _0x391d53;
  }
}
function _0x28e6ce(_0x2600e7) {
  return new class {
    constructor(_0x49a820) {
      this.name = _0x49a820;
      this.startTime = Date.now();
      const _0x4ba99e = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x4ba99e);
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
    log(_0x2a481c, _0x2b733e = {}) {
      let _0x35acad = {
        console: true
      };
      Object.assign(_0x35acad, _0x2b733e);
      if (_0x35acad.time) {
        let _0x43e8ab = _0x35acad.fmt || "hh:mm:ss";
        _0x2a481c = "[" + this.time(_0x43e8ab) + "]" + _0x2a481c;
      }
      if (_0x35acad.notify) {
        this.notifyStr.push(_0x2a481c);
      }
      if (_0x35acad.console) {
        console.log(_0x2a481c);
      }
    }
    get(_0x1ced8b, _0x3bc51c, _0x9ed2 = "") {
      let _0x229d5e = _0x9ed2;
      _0x1ced8b?.["hasOwnProperty"](_0x3bc51c) && (_0x229d5e = _0x1ced8b[_0x3bc51c]);
      return _0x229d5e;
    }
    pop(_0x30af48, _0x5c9206, _0x339fa7 = "") {
      let _0x441e79 = _0x339fa7;
      _0x30af48?.["hasOwnProperty"](_0x5c9206) && (_0x441e79 = _0x30af48[_0x5c9206], delete _0x30af48[_0x5c9206]);
      return _0x441e79;
    }
    copy(_0x3197e4) {
      return Object.assign({}, _0x3197e4);
    }
    read_env(_0x24b833) {
      let _0x429194 = _0x3d548f.map(_0xde7591 => process.env[_0xde7591]);
      for (let _0x4a311d of _0x429194.filter(_0x3cd316 => !!_0x3cd316)) {
        for (let _0x395b8d of _0x4a311d.split(_0x3f23f6).filter(_0x315dfa => !!_0x315dfa)) {
          if (this.userList.includes(_0x395b8d)) {
            continue;
          }
          this.userList.push(new _0x24b833(_0x395b8d));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0xaf8472 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x3d548f.map(_0x983afb => "[" + _0x983afb + "]").join("或"), _0xaf8472);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x38902a, _0x25d614 = null) {
      let _0x202756 = _0x25d614 ? new Date(_0x25d614) : new Date(),
        _0x317079 = {
          "M+": _0x202756.getMonth() + 1,
          "d+": _0x202756.getDate(),
          "h+": _0x202756.getHours(),
          "m+": _0x202756.getMinutes(),
          "s+": _0x202756.getSeconds(),
          "q+": Math.floor((_0x202756.getMonth() + 3) / 3),
          S: this.padStr(_0x202756.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x38902a) && (_0x38902a = _0x38902a.replace(RegExp.$1, (_0x202756.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x4c42d7 in _0x317079) new RegExp("(" + _0x4c42d7 + ")").test(_0x38902a) && (_0x38902a = _0x38902a.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x317079[_0x4c42d7] : ("00" + _0x317079[_0x4c42d7]).substr(("" + _0x317079[_0x4c42d7]).length)));
      return _0x38902a;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x7e07bc = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x7e07bc.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x1e05db, _0x331735, _0x4e0bc6 = {}) {
      let _0x5611fc = _0x4e0bc6.padding || "0",
        _0x51946f = _0x4e0bc6.mode || "l",
        _0x35e271 = String(_0x1e05db),
        _0x3e6fa3 = _0x331735 > _0x35e271.length ? _0x331735 - _0x35e271.length : 0,
        _0x39bf65 = "";
      for (let _0x1318e9 = 0; _0x1318e9 < _0x3e6fa3; _0x1318e9++) {
        _0x39bf65 += _0x5611fc;
      }
      _0x51946f == "r" ? _0x35e271 = _0x35e271 + _0x39bf65 : _0x35e271 = _0x39bf65 + _0x35e271;
      return _0x35e271;
    }
    json2str(_0x517b24, _0x4905bc, _0x4c534e = false) {
      let _0x3d9975 = [];
      for (let _0xa000b3 of Object.keys(_0x517b24).sort()) {
        let _0x411b0a = _0x517b24[_0xa000b3];
        if (_0x411b0a && _0x4c534e) {
          _0x411b0a = encodeURIComponent(_0x411b0a);
        }
        _0x3d9975.push(_0xa000b3 + "=" + _0x411b0a);
      }
      return _0x3d9975.join(_0x4905bc);
    }
    str2json(_0x2e0764, _0x31dacb = false) {
      let _0x16879f = {};
      for (let _0x8f37a3 of _0x2e0764.split("&")) {
        if (!_0x8f37a3) {
          continue;
        }
        let _0x42b201 = _0x8f37a3.indexOf("=");
        if (_0x42b201 == -1) {
          continue;
        }
        let _0x1d752c = _0x8f37a3.substr(0, _0x42b201),
          _0xee2313 = _0x8f37a3.substr(_0x42b201 + 1);
        if (_0x31dacb) {
          _0xee2313 = decodeURIComponent(_0xee2313);
        }
        _0x16879f[_0x1d752c] = _0xee2313;
      }
      return _0x16879f;
    }
    randomPattern(_0x33dc51, _0xab8cb7 = "abcdef0123456789") {
      let _0x2588f7 = "";
      for (let _0x332d8b of _0x33dc51) {
        if (_0x332d8b == "x") {
          _0x2588f7 += _0xab8cb7.charAt(Math.floor(Math.random() * _0xab8cb7.length));
        } else {
          _0x332d8b == "X" ? _0x2588f7 += _0xab8cb7.charAt(Math.floor(Math.random() * _0xab8cb7.length)).toUpperCase() : _0x2588f7 += _0x332d8b;
        }
      }
      return _0x2588f7;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x2266ec, _0x5a3dac = "abcdef0123456789") {
      let _0x56818c = "";
      for (let _0x579e9c = 0; _0x579e9c < _0x2266ec; _0x579e9c++) {
        _0x56818c += _0x5a3dac.charAt(Math.floor(Math.random() * _0x5a3dac.length));
      }
      return _0x56818c;
    }
    randomList(_0x1b0de8) {
      let _0x52505e = Math.floor(Math.random() * _0x1b0de8.length);
      return _0x1b0de8[_0x52505e];
    }
    wait(_0x4603e0) {
      return new Promise(_0x3c1023 => setTimeout(_0x3c1023, _0x4603e0));
    }
    async exitNow() {
      await this.showmsg();
      let _0x28ea0c = Date.now(),
        _0x2d6fa3 = (_0x28ea0c - this.startTime) / 1000;
      this.log("");
      const _0x159810 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x2d6fa3 + "秒", _0x159810);
      process.exit(0);
    }
    normalize_time(_0x5befd3, _0x44ebc5 = {}) {
      let _0x134815 = _0x44ebc5.len || this.default_timestamp_len;
      _0x5befd3 = _0x5befd3.toString();
      let _0x2bf708 = _0x5befd3.length;
      while (_0x2bf708 < _0x134815) {
        _0x5befd3 += "0";
      }
      _0x2bf708 > _0x134815 && (_0x5befd3 = _0x5befd3.slice(0, 13));
      return parseInt(_0x5befd3);
    }
    async wait_until(_0x5dfc9a, _0x71b340 = {}) {
      let _0xe15f2c = _0x71b340.logger || this,
        _0xefc48d = _0x71b340.interval || this.default_wait_interval,
        _0x66333c = _0x71b340.limit || this.default_wait_limit,
        _0x16e502 = _0x71b340.ahead || this.default_wait_ahead;
      if (typeof _0x5dfc9a == "string" && _0x5dfc9a.includes(":")) {
        if (_0x5dfc9a.includes("-")) {
          _0x5dfc9a = new Date(_0x5dfc9a).getTime();
        } else {
          let _0x2f4f0f = this.time("yyyy-MM-dd ");
          _0x5dfc9a = new Date(_0x2f4f0f + _0x5dfc9a).getTime();
        }
      }
      let _0x2fbc3a = this.normalize_time(_0x5dfc9a) - _0x16e502,
        _0x14aa59 = this.time("hh:mm:ss.S", _0x2fbc3a),
        _0x901fdb = Date.now();
      _0x901fdb > _0x2fbc3a && (_0x2fbc3a += 86400000);
      let _0x2de773 = _0x2fbc3a - _0x901fdb;
      if (_0x2de773 > _0x66333c) {
        const _0x519a5a = {
          time: true
        };
        _0xe15f2c.log("离目标时间[" + _0x14aa59 + "]大于" + _0x66333c / 1000 + "秒,不等待", _0x519a5a);
      } else {
        const _0x5836da = {
          time: true
        };
        _0xe15f2c.log("离目标时间[" + _0x14aa59 + "]还有" + _0x2de773 / 1000 + "秒,开始等待", _0x5836da);
        while (_0x2de773 > 0) {
          let _0x236720 = Math.min(_0x2de773, _0xefc48d);
          await this.wait(_0x236720);
          _0x901fdb = Date.now();
          _0x2de773 = _0x2fbc3a - _0x901fdb;
        }
        const _0x3e8877 = {
          time: true
        };
        _0xe15f2c.log("已完成等待", _0x3e8877);
      }
    }
    async wait_gap_interval(_0x3fddf4, _0x2ec885) {
      let _0x51d7b5 = Date.now() - _0x3fddf4;
      _0x51d7b5 < _0x2ec885 && (await this.wait(_0x2ec885 - _0x51d7b5));
    }
  }(_0x2600e7);
}
