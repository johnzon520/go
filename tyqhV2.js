/*
统一茄皇三期 v3.01

从二期脚本改的, 大家先测试下有没有bug和有啥没加上去的吧

微信小程序: 统一快乐星球 -> 活动 -> 统一茄皇三期
捉这个登录包的请求体: https://qiehuang-apig.xiaoyisz.com/qiehuangsecond/ga/public/api/login
把请求体(body)的thirdId和wid和备注用#连起来填到变量 tyqhCookie 里面, 多账号换行或&或@隔开
thirdId和wid是必填的, 备注可选
export tyqhCookie="thirdId#wid#备注"

cron: 23 7-23/2 * * *
const $ = new Env("统一茄皇三期");
*/

const _0xad3684 = _0x4726c3("统一茄皇三期"),
  _0x176f31 = require("got"),
  _0x59e21d = require("crypto-js"),
  _0x21f3f4 = "tyqh",
  _0x526520 = /[\n\&\@]/,
  _0x49dccd = [_0x21f3f4 + "Cookie"],
  _0x355f5a = 20000,
  _0x173316 = 3;
const _0x8ec2bd = 3.01,
  _0x2d7777 = "tyqh",
  _0x3a2cdf = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x1ab4f2 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.39(0x18002730) NetType/WIFI Language/zh_CN miniProgram/wx532ecb3bdaaf92f9",
  _0x2e5446 = "https://thekingoftomato.ioutu.cn",
  _0xc87099 = "https://thekingoftomato.ioutu.cn/",
  _0x502584 = "https://qiehuang-apig.xiaoyisz.com",
  _0x5d5b6b = "game",
  _0x6846b2 = "BxzTx45uIGT25TTHIIBU2",
  _0x231b72 = 5,
  _0x5d9aa4 = 13,
  _0x43e1e2 = 1000,
  _0x3aee12 = 3600000,
  _0x1eae0b = 0,
  _0x212f0b = _0x21f3f4 + "RewardId",
  _0x1605b5 = process.env[_0x212f0b] || "",
  _0x163d2b = ["邀请新人助力", "邀请好友助力"],
  _0x31209a = false;
const _0x2c95ac = {
  "1": "发育期",
  "2": "幼苗期",
  "3": "开花期",
  "4": "结果期",
  "5": "收获期"
};
class _0x27023c {
  constructor() {
    this.index = _0xad3684.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x57023b = {
      limit: 0
    };
    const _0x2f0fa4 = {
      Connection: "keep-alive"
    };
    const _0x2711c6 = {
      retry: _0x57023b,
      timeout: _0x355f5a,
      followRedirect: false,
      headers: _0x2f0fa4
    };
    this.got = _0x176f31.extend(_0x2711c6);
  }
  update(_0x2a8e13) {
    Object.assign(this, _0x2a8e13);
  }
  log(_0x2d4d06, _0x4bf2b5 = {}) {
    var _0x1a3e58 = "",
      _0x424ff3 = _0xad3684.userCount.toString().length;
    if (this.index) {
      _0x1a3e58 += "账号[" + _0xad3684.padStr(this.index, _0x424ff3) + "]";
    }
    if (this.name) {
      _0x1a3e58 += "[" + this.name + "]";
    }
    _0xad3684.log(_0x1a3e58 + _0x2d4d06, _0x4bf2b5);
  }
  async request(_0x208e76) {
    const _0x7c8d30 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x2cca16 = ["TimeoutError"];
    var _0x39f791 = null,
      _0x939381 = 0,
      _0x4b2779 = _0x208e76.fn || _0x208e76.url;
    _0x208e76.method = _0x208e76?.["method"]?.["toUpperCase"]() || "GET";
    let _0x10e814;
    while (_0x939381 < _0x173316) {
      try {
        _0x939381++;
        _0x10e814 = null;
        let _0x414109 = null,
          _0x43eb98 = _0x208e76?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x355f5a,
          _0x3fbc94 = false;
        await new Promise(async _0x2a96fe => {
          setTimeout(() => {
            _0x3fbc94 = true;
            _0x2a96fe();
          }, _0x43eb98);
          await this.got(_0x208e76).then(_0x2fe9cf => {
            _0x39f791 = _0x2fe9cf;
          }, _0x536e37 => {
            _0x414109 = _0x536e37;
            _0x39f791 = _0x536e37.response;
            _0x10e814 = _0x414109?.["code"];
          });
          _0x2a96fe();
        });
        if (_0x3fbc94) {
          this.log("[" + _0x4b2779 + "]请求超时(" + _0x43eb98 / 1000 + "秒)，重试第" + _0x939381 + "次");
        } else {
          if (_0x2cca16.includes(_0x414109?.["name"])) {
            this.log("[" + _0x4b2779 + "]请求超时(" + _0x414109.code + ")，重试第" + _0x939381 + "次");
          } else {
            if (_0x7c8d30.includes(_0x414109?.["code"])) {
              this.log("[" + _0x4b2779 + "]请求错误(" + _0x414109.code + ")，重试第" + _0x939381 + "次");
            } else {
              let _0x46da6c = _0x39f791?.["statusCode"] || 999,
                _0x187b64 = _0x46da6c / 100 | 0;
              if (_0x187b64 > 3) {
                this.log("请求[" + _0x4b2779 + "]返回[" + _0x46da6c + "]");
              }
              if (_0x187b64 <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0xe3b67c) {
        _0xe3b67c.name == "TimeoutError" ? this.log("[" + _0x4b2779 + "]请求超时，重试第" + _0x939381 + "次") : this.log("[" + _0x4b2779 + "]请求错误(" + _0xe3b67c.message + ")，重试第" + _0x939381 + "次");
      }
    }
    const _0x151bb4 = {
      statusCode: _0x10e814 || -1,
      headers: null,
      result: null
    };
    if (_0x39f791 == null) {
      return Promise.resolve(_0x151bb4);
    }
    let {
      statusCode: _0x4e0288,
      headers: _0x3e8601,
      body: _0x342d64
    } = _0x39f791;
    if (_0x342d64) {
      try {
        _0x342d64 = JSON.parse(_0x342d64);
      } catch {}
    }
    const _0x4fb472 = {
      statusCode: _0x4e0288,
      headers: _0x3e8601,
      result: _0x342d64
    };
    return Promise.resolve(_0x4fb472);
  }
}
let _0x14cd21 = new _0x27023c();
class _0x5823dc extends _0x27023c {
  constructor(_0xef19ba) {
    super();
    let _0x3ced82 = _0xef19ba.split("#");
    if (_0x3ced82.length >= 2) {
      this.thirdId = _0x3ced82[0];
      this.wid = _0x3ced82[1];
      this.remark = _0x3ced82?.[2] || "";
      this.name = this.remark;
      this.auth = "";
      this.land = {};
      this.refresh_land_step = false;
      this.gold = 0;
      this.sun = 0;
      this.risk_num = 0;
      this.can_go_risk = true;
      this.can_add_friend = true;
      this.can_help_task = true;
      this.can_help_risk = true;
      this.can_help_unlock = true;
      this.help_task_config = {};
      this.help_role_config = {};
      this.need_help_risk = true;
      this.need_help_unlock = false;
      this.all_land_unlock = true;
      this.all_role_unlock = true;
      this.got = this.got.extend({
        cookieJar: this.cookieJar,
        headers: {
          "User-Agent": _0x1ab4f2,
          Authorization: this.auth,
          Origin: _0x2e5446,
          Referer: _0xc87099
        }
      });
    } else {
      this.log("变量填写错误: " + _0xef19ba);
      this.valid = false;
    }
  }
  gen_sign(_0x1a9b69 = {}, _0xe0ab50 = null) {
    let _0x52c27d = [];
    for (let _0x2b5714 of Object.keys(_0x1a9b69).sort()) {
      _0x1a9b69[_0x2b5714] instanceof Object ? _0x52c27d.push(_0x2b5714 + "=" + JSON.stringify(_0x1a9b69[_0x2b5714])) : _0x52c27d.push(_0x2b5714 + "=" + _0x1a9b69[_0x2b5714]);
    }
    let _0x38890a = Date.now(),
      _0x300af0 = _0x6846b2.split(""),
      _0x29bc8e = _0x38890a.toString().slice(-3);
    for (let _0x128213 of _0x29bc8e) {
      _0x300af0.splice(parseInt(_0x128213), 0, _0x128213);
    }
    let _0x49531e = _0x59e21d.MD5(_0x300af0.join("")).toString(),
      _0x46a53b = {
        client_id: _0x5d5b6b,
        nonstr: _0xad3684.randomString(16, "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"),
        timestamp: _0x38890a,
        body: _0xe0ab50 ? JSON.stringify(_0xe0ab50) : "",
        query: _0x52c27d.length ? _0x52c27d.join("&") : "",
        secret: _0x49531e
      },
      _0x4a121c = Object.values(_0x46a53b).join("|");
    return {
      client_id: _0x5d5b6b,
      timestamp: _0x46a53b.timestamp,
      nonstr: _0x46a53b.nonstr,
      sign: _0x59e21d.MD5(_0x4a121c).toString().toUpperCase()
    };
  }
  async login(_0x1ddcc6 = {}) {
    let _0xc3b9bc = false;
    try {
      let _0x48c394 = {
          thirdId: this.thirdId,
          wid: this.wid
        },
        _0x2e9525 = {
          fn: "login",
          method: "post",
          url: _0x502584 + "/qiehuangsecond/ga/public/api/login",
          json: _0x48c394,
          headers: this.gen_sign({}, _0x48c394)
        },
        {
          statusCode: _0x113a92,
          result: _0x4db9ea
        } = await this.request(_0xad3684.copy(_0x2e9525)),
        _0x185b98 = _0xad3684.get(_0x4db9ea, "code", _0x113a92);
      if (_0x185b98 == 0) {
        this.auth = _0x4db9ea?.["data"]?.["token"] || "";
        this.auth ? (_0xc3b9bc = true, this.valid = true, this.got = this.got.extend({
          headers: {
            Authorization: this.auth
          }
        }), this.log("登录成功")) : this.log("登录获取auth失败");
      } else {
        if (_0x113a92 == 403) {
          const _0x101d59 = {
            notify: true
          };
          this.log("登录失败[" + _0x113a92 + "]: 黑IP了, 换个IP试试吧", _0x101d59);
        } else {
          let _0x215ca5 = _0xad3684.get(_0x4db9ea, "message", "");
          this.log("登录获取auth失败[" + _0x185b98 + "]: " + _0x215ca5);
        }
      }
    } catch (_0xacd1d2) {
      console.log(_0xacd1d2);
    } finally {
      return _0xc3b9bc;
    }
  }
  async userInfo_get(_0x526412 = {}) {
    try {
      let _0x126449 = {
          fn: "userInfo_get",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/userInfo/get",
          headers: this.gen_sign()
        },
        {
          result: _0x16c6f2
        } = await this.request(_0xad3684.copy(_0x126449)),
        _0x11daab = _0xad3684.get(_0x16c6f2, "code", -1);
      if (_0x11daab == 0) {
        let {
          nickName: _0xa78c26,
          userId: _0x1ef58d,
          gold: _0x4f9a1e,
          score: _0x448d7e,
          sun: _0x25a74e,
          sunMax: _0x2b125a
        } = _0x16c6f2?.["data"];
        this.name = this.remark || _0xa78c26;
        const _0x4e8fea = {
          userId: _0x1ef58d,
          gold: _0x4f9a1e,
          score: _0x448d7e,
          sun: _0x25a74e,
          sunMax: _0x2b125a
        };
        this.update(_0x4e8fea);
      } else {
        let _0x38740a = _0xad3684.get(_0x16c6f2, "message", "");
        this.log("获取账号信息失败[" + _0x11daab + "]: " + _0x38740a);
      }
    } catch (_0x5358f1) {
      console.log(_0x5358f1);
    }
  }
  async userInfo_autoSun(_0x1c7960 = {}) {
    try {
      let _0x120aa1 = {
          fn: "userInfo_autoSun",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/userInfo/autoSun",
          headers: this.gen_sign()
        },
        {
          result: _0x5e2101
        } = await this.request(_0xad3684.copy(_0x120aa1)),
        _0x20f0eb = _0xad3684.get(_0x5e2101, "code", -1);
      if (_0x20f0eb == 0) {
        let _0x3b662a = _0x5e2101?.["data"]?.["sun"] || 0;
        _0x3b662a && (this.sun += _0x3b662a, this.log("刷新收集到" + _0x3b662a + "阳光"));
      } else {
        let _0x593b62 = _0xad3684.get(_0x5e2101, "message", "");
        this.log("刷新收集阳光失败[" + _0x20f0eb + "]: " + _0x593b62);
      }
    } catch (_0x3fd4f2) {
      console.log(_0x3fd4f2);
    }
  }
  async task_get(_0x8138ab = {}) {
    try {
      let _0x4fa7d6 = {
          fn: "task_get",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/task/get",
          headers: this.gen_sign()
        },
        {
          result: _0x4a6915
        } = await this.request(_0xad3684.copy(_0x4fa7d6)),
        _0x32e7a4 = _0xad3684.get(_0x4a6915, "code", -1);
      if (_0x32e7a4 == 0) {
        for (let _0x34473d of _0x4a6915?.["data"] || []) {
          if (_0x34473d.title == "邀请好友助力") {
            const _0x329658 = {
              id: _0x34473d.id,
              progress: _0x34473d.currentProgress,
              max: _0x34473d.progress
            };
            this.help_task_config = _0x329658;
          }
          switch (_0x34473d.status) {
            case 0:
              if (_0x163d2b.includes(_0x34473d.title)) {
                break;
              }
              for (let _0x475e5a = _0x34473d.currentProgress; _0x475e5a < _0x34473d.progress; _0x475e5a++) {
                await this.task_doTask(_0x34473d);
              }
            case 1:
              await this.task_reward(_0x34473d);
              break;
          }
        }
      } else {
        let _0x483eb5 = _0xad3684.get(_0x4a6915, "message", "");
        this.log("获取任务列表失败[" + _0x32e7a4 + "]: " + _0x483eb5);
      }
    } catch (_0x2be545) {
      console.log(_0x2be545);
    }
  }
  async task_doTask(_0x5dccda, _0x59056b = {}) {
    try {
      let _0x385dee = {
          id: _0x5dccda.id
        },
        _0x121ce2 = {
          fn: "task_doTask",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/task/doTask",
          searchParams: _0x385dee,
          headers: this.gen_sign(_0x385dee)
        },
        {
          result: _0x5b4da1
        } = await this.request(_0xad3684.copy(_0x121ce2)),
        _0x104a09 = _0xad3684.get(_0x5b4da1, "code", -1);
      if (_0x104a09 == 0) {
        this.log("完成任务[" + _0x5dccda.title + "]成功");
      } else {
        let _0x38551d = _0xad3684.get(_0x5b4da1, "message", "");
        this.log("完成任务[" + _0x5dccda.title + "]失败[" + _0x104a09 + "]: " + _0x38551d);
      }
    } catch (_0x36992a) {
      console.log(_0x36992a);
    }
  }
  async task_doHelpTask(_0x11bddd, _0xcf7e75 = {}) {
    try {
      let _0x26162a = {
          id: _0x11bddd.help_task_config.id
        },
        _0x468ed3 = {
          fn: "task_doTask",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/task/doTask",
          searchParams: _0x26162a,
          headers: this.gen_sign(_0x26162a)
        },
        {
          result: _0x2d22cc
        } = await this.request(_0xad3684.copy(_0x468ed3)),
        _0xa1d879 = _0xad3684.get(_0x2d22cc, "code", -1);
      if (_0xa1d879 == 0) {
        this.can_help_task = false;
        _0x11bddd.help_task_config.progress++;
        this.log("助力账号[" + _0x11bddd.index + "][" + _0x11bddd.name + "]成功: 已邀请" + _0x11bddd.help_task_config.progress + "/" + _0x11bddd.help_task_config.max);
      } else {
        let _0x57ee0c = _0xad3684.get(_0x2d22cc, "message", "");
        this.log("助力账号[" + _0x11bddd.index + "][" + _0x11bddd.name + "]失败[" + _0xa1d879 + "]: " + _0x57ee0c);
      }
    } catch (_0x52ac45) {
      console.log(_0x52ac45);
    }
  }
  async task_reward(_0x19e603, _0x1729d7 = {}) {
    try {
      let _0x57fbdc = {
          id: _0x19e603.id
        },
        _0x13d09e = {
          fn: "task_reward",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/task/reward",
          searchParams: _0x57fbdc,
          headers: this.gen_sign(_0x57fbdc)
        },
        {
          result: _0x2e0f11
        } = await this.request(_0xad3684.copy(_0x13d09e)),
        _0x50713c = _0xad3684.get(_0x2e0f11, "code", -1);
      if (_0x50713c == 0) {
        this.log("领取任务[" + _0x19e603.title + "]奖励成功");
      } else {
        let _0x159a60 = _0xad3684.get(_0x2e0f11, "message", "");
        this.log("领取任务[" + _0x19e603.title + "]奖励失败[" + _0x50713c + "]: " + _0x159a60);
      }
    } catch (_0x483e06) {
      console.log(_0x483e06);
    }
  }
  async user_role_get(_0x59044d = {}) {
    try {
      let _0x18a31b = {
          fn: "user_role_get",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/user-role/get",
          headers: this.gen_sign()
        },
        {
          result: _0x228c30
        } = await this.request(_0xad3684.copy(_0x18a31b)),
        _0x147bd9 = _0xad3684.get(_0x228c30, "code", -1);
      if (_0x147bd9 == 0) {
        _0x228c30?.["data"]?.["isReward"] && (await this.user_role_reward());
        for (let _0x4a365d of _0x228c30?.["data"]?.["roleList"] || []) {
          if (_0x4a365d.status > 0) {
            continue;
          }
          if (_0x4a365d.unlockType == 1) {
            this.gold >= _0x4a365d.unlockNum ? await this.user_role_goldUnlock(_0x4a365d) : this.all_role_unlock = false;
          } else {
            _0x4a365d.unlockType == 2 && (this.need_help_unlock = true, await this.user_role_findFriendHelpInfo(_0x4a365d));
          }
        }
      } else {
        let _0x5160f6 = _0xad3684.get(_0x228c30, "message", "");
        this.log("查询伴手礼失败[" + _0x147bd9 + "]: " + _0x5160f6);
      }
    } catch (_0x5d762f) {
      console.log(_0x5d762f);
    }
  }
  async user_role_findFriendHelpInfo(_0x403339, _0x409211 = {}) {
    try {
      let _0x3728b9 = {
          userRoleId: _0x403339.id
        },
        _0x51923d = {
          fn: "user_role_findFriendHelpInfo",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/user-role/findFriendHelpInfo",
          searchParams: _0x3728b9,
          headers: this.gen_sign(_0x3728b9)
        },
        {
          result: _0x1300e9
        } = await this.request(_0xad3684.copy(_0x51923d)),
        _0x4b0731 = _0xad3684.get(_0x1300e9, "code", -1);
      if (_0x4b0731 == 0) {
        const _0xb338c5 = {
          id: _0x403339.id,
          progress: _0x1300e9?.["data"]?.["length"] || 0,
          max: _0x403339.unlockNum
        };
        this.help_role_config = _0xb338c5;
      } else {
        let _0x4ccea4 = _0xad3684.get(_0x1300e9, "message", "");
        this.log("查询角色[" + _0x403339.name + "]邀请进度失败[" + _0x4b0731 + "]: " + _0x4ccea4);
      }
    } catch (_0x103272) {
      console.log(_0x103272);
    }
  }
  async user_role_friendHelpUnlock(_0x347417, _0x54988d = {}) {
    try {
      let _0x539d7f = {
          userRoleId: _0x347417.help_role_config.id
        },
        _0x36d9ac = {
          fn: "user_role_friendHelpUnlock",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/user-role/friendHelpUnlock",
          searchParams: _0x539d7f,
          headers: this.gen_sign(_0x539d7f)
        },
        {
          result: _0xf9c3e1
        } = await this.request(_0xad3684.copy(_0x36d9ac)),
        _0x4486a8 = _0xad3684.get(_0xf9c3e1, "code", -1);
      if (_0x4486a8 == 0) {
        _0x347417.help_role_config.progress++;
        this.log("助力账号[" + _0x347417.index + "][" + _0x347417.name + "]解锁角色成功: 已邀请" + _0x347417.help_role_config.progress + "/" + _0x347417.help_role_config.max);
      } else {
        let _0x4aade5 = _0xad3684.get(_0xf9c3e1, "message", "");
        this.log("助力账号[" + _0x347417.index + "][" + _0x347417.name + "]解锁角色失败[" + _0x4486a8 + "]: " + _0x4aade5);
      }
    } catch (_0x1f617d) {
      console.log(_0x1f617d);
    }
  }
  async user_role_goldUnlock(_0xfdde3c, _0x5792d0 = {}) {
    try {
      let _0x5bb23a = {
          roleId: _0xfdde3c.roleId
        },
        _0x49a7b7 = {
          fn: "user_role_goldUnlock",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/user-role/goldUnlock",
          searchParams: _0x5bb23a,
          headers: this.gen_sign(_0x5bb23a)
        },
        {
          result: _0x3b0acd
        } = await this.request(_0xad3684.copy(_0x49a7b7)),
        _0x4361d7 = _0xad3684.get(_0x3b0acd, "code", -1);
      if (_0x4361d7 == 0) {
        this.gold -= _0xfdde3c.unlockNum;
        this.log("解锁角色[" + _0xfdde3c.name + "]成功");
        await this.user_role_reward();
      } else {
        let _0x4ba733 = _0xad3684.get(_0x3b0acd, "message", "");
        this.log("解锁角色[" + _0xfdde3c.name + "]失败[" + _0x4361d7 + "]: " + _0x4ba733);
      }
    } catch (_0x2bd84f) {
      console.log(_0x2bd84f);
    }
  }
  async user_role_reward(_0x476aff = {}) {
    try {
      let _0x358522 = {
          fn: "user_role_reward",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/user-role/reward",
          headers: this.gen_sign()
        },
        {
          result: _0x2f53a6
        } = await this.request(_0xad3684.copy(_0x358522)),
        _0x40a5d8 = _0xad3684.get(_0x2f53a6, "code", -1);
      if (_0x40a5d8 == 0) {
        this.log("领取伴手礼成功: " + _0x2f53a6?.["data"]?.["name"]);
      } else {
        let _0x2fd967 = _0xad3684.get(_0x2f53a6, "message", "");
        this.log("领取伴手礼失败[" + _0x40a5d8 + "]: " + _0x2fd967);
      }
    } catch (_0xebc6c4) {
      console.log(_0xebc6c4);
    }
  }
  async user_land_get(_0xcd7978 = {}) {
    try {
      let _0x592e59 = {
          fn: "user_land_get",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/user-land/get",
          headers: this.gen_sign()
        },
        {
          result: _0x1b0eb7
        } = await this.request(_0xad3684.copy(_0x592e59)),
        _0x2b5a5c = _0xad3684.get(_0x1b0eb7, "code", -1);
      if (_0x2b5a5c == 0) {
        for (let _0x413b63 of _0x1b0eb7?.["data"]?.["gaUserLandList"] || []) {
          let {
            id: _0x3f09d2,
            no: _0x35d42e,
            status: _0x280b39,
            step: _0x4bbe6a,
            leftSunCount: _0xcfabb2,
            sumSunCount: _0x1a7aaa,
            sunTime: _0x168a7a,
            sunTimestamp: _0x159a2f,
            needSun: _0x5d0ab1,
            useSunCount: _0x19f62b,
            unlockGold: _0x39a918
          } = _0x413b63;
          if (!this.land[_0x35d42e]) {
            this.land[_0x35d42e] = {};
          }
          Object.assign(this.land[_0x35d42e], {
            id: _0x3f09d2,
            no: _0x35d42e,
            status: _0x280b39,
            step: _0x4bbe6a,
            leftSunCount: _0xcfabb2,
            sumSunCount: _0x1a7aaa,
            sunTime: _0x168a7a,
            sunTimestamp: _0x159a2f,
            needSun: _0x5d0ab1,
            useSunCount: _0x19f62b
          });
          _0x280b39 == 0 && (this.gold >= _0x39a918 ? await this.user_land_unlock(_0x413b63) : this.all_land_unlock = false);
        }
      } else {
        let _0x75345e = _0xad3684.get(_0x1b0eb7, "message", "");
        this.log("获取账号信息失败[" + _0x2b5a5c + "]: " + _0x75345e);
      }
    } catch (_0x47a858) {
      console.log(_0x47a858);
    }
  }
  async user_land_unlock(_0x3e44a9, _0x426426 = {}) {
    try {
      let _0x2f0702 = {
          fn: "user_land_unlock",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/user-land/unlock",
          headers: this.gen_sign()
        },
        {
          result: _0x5272f9
        } = await this.request(_0xad3684.copy(_0x2f0702)),
        _0x259885 = _0xad3684.get(_0x5272f9, "code", -1);
      if (_0x259885 == 0) {
        this.log("[" + _0x3e44a9.no + "号土地]解锁成功");
        this.gold -= _0x3e44a9.unlockGold;
        await this.user_land_get();
      } else {
        let _0x4eff66 = _0xad3684.get(_0x5272f9, "message", "");
        this.log("[" + _0x3e44a9.no + "号土地]解锁失败[" + _0x259885 + "]: " + _0x4eff66);
      }
    } catch (_0x106a5e) {
      console.log(_0x106a5e);
    }
  }
  async user_land_result(_0x1ded2d, _0x915393 = {}) {
    let _0x3b1d6c = false;
    try {
      let _0x12b873 = {
          no: _0x1ded2d.no
        },
        _0x135571 = {
          fn: "user_land_result",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/user-land/result",
          searchParams: _0x12b873,
          headers: this.gen_sign(_0x12b873)
        },
        {
          result: _0x451959
        } = await this.request(_0xad3684.copy(_0x135571)),
        _0x36fbf1 = _0xad3684.get(_0x451959, "code", -1);
      if (_0x36fbf1 == 0) {
        _0x3b1d6c = true;
        this.refresh_land_step = true;
        this.log("[" + _0x1ded2d.no + "号土地]收获成功: 番茄x" + (_0x451959?.["data"] || 0));
        await this.user_land_get();
      } else {
        let _0x297d02 = _0xad3684.get(_0x451959, "message", "");
        this.log("[" + _0x1ded2d.no + "号土地]收获失败[" + _0x36fbf1 + "]: " + _0x297d02);
      }
    } catch (_0x34dad9) {
      console.log(_0x34dad9);
    } finally {
      return _0x3b1d6c;
    }
  }
  async user_land_sow(_0x370ee4, _0x539b53 = {}) {
    let _0x1b02db = false;
    try {
      let _0x27dffe = {
          no: _0x370ee4.no
        },
        _0x385311 = {
          fn: "user_land_sow",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/user-land/sow",
          searchParams: _0x27dffe,
          headers: this.gen_sign(_0x27dffe)
        },
        {
          result: _0x3bfbc6
        } = await this.request(_0xad3684.copy(_0x385311)),
        _0x2ddd11 = _0xad3684.get(_0x3bfbc6, "code", -1);
      if (_0x2ddd11 == 0) {
        _0x1b02db = true;
        this.refresh_land_step = true;
        this.log("[" + _0x370ee4.no + "号土地]种植成功");
        await this.user_land_get();
      } else {
        let _0x392b82 = _0xad3684.get(_0x3bfbc6, "message", "");
        this.log("[" + _0x370ee4.no + "号土地]种植失败[" + _0x2ddd11 + "]: " + _0x392b82);
      }
    } catch (_0x41d48f) {
      console.log(_0x41d48f);
    } finally {
      return _0x1b02db;
    }
  }
  async user_land_sun(_0x1ac415, _0x1cbbc5 = {}) {
    let _0x5e1c57 = false;
    try {
      let _0xb8aee1 = {
          no: _0x1ac415.no
        },
        _0x293385 = {
          fn: "user_land_sun",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/user-land/sun",
          searchParams: _0xb8aee1,
          headers: this.gen_sign(_0xb8aee1)
        },
        {
          result: _0x547548
        } = await this.request(_0xad3684.copy(_0x293385)),
        _0x50c6c2 = _0xad3684.get(_0x547548, "code", -1);
      if (_0x50c6c2 == 0) {
        _0x5e1c57 = true;
        this.log("[" + _0x1ac415.no + "号土地]撒阳光成功");
        this.sun -= _0x1ac415.needSun;
        await this.user_land_get();
      } else {
        let _0x481c6f = _0xad3684.get(_0x547548, "message", "");
        this.log("[" + _0x1ac415.no + "号土地]撒阳光失败[" + _0x50c6c2 + "]: " + _0x481c6f);
      }
    } catch (_0x54313b) {
      console.log(_0x54313b);
    } finally {
      return _0x5e1c57;
    }
  }
  async user_land_level(_0x320762, _0x40a5e4 = {}) {
    let _0x337f56 = false;
    try {
      let _0x1631f7 = {
          no: _0x320762.no
        },
        _0x3700b3 = {
          fn: "user_land_level",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/user-land/level",
          searchParams: _0x1631f7,
          headers: this.gen_sign(_0x1631f7)
        },
        {
          result: _0x2416d7
        } = await this.request(_0xad3684.copy(_0x3700b3)),
        _0x5c13d6 = _0xad3684.get(_0x2416d7, "code", -1);
      if (_0x5c13d6 == 0) {
        _0x337f56 = true;
        this.refresh_land_step = true;
        this.log("[" + _0x320762.no + "号土地]浇水升级成功");
        await this.user_land_get();
      } else {
        let _0x1e3af7 = _0xad3684.get(_0x2416d7, "message", "");
        this.log("[" + _0x320762.no + "号土地]浇水升级失败[" + _0x5c13d6 + "]: " + _0x1e3af7);
      }
    } catch (_0x35aa58) {
      console.log(_0x35aa58);
    } finally {
      return _0x337f56;
    }
  }
  async take_risk_online(_0x407a24 = {}) {
    let _0x12d212 = false;
    try {
      let _0x5e2806 = {
          fn: "take_risk_online",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/take-risk/online",
          headers: this.gen_sign()
        },
        {
          result: _0x2e91fa
        } = await this.request(_0xad3684.copy(_0x5e2806)),
        _0x160341 = _0xad3684.get(_0x2e91fa, "code", -1);
      if (_0x160341 != 0) {
        let _0x2ec71a = _0xad3684.get(_0x2e91fa, "message", "");
        this.log("进入冒险页失败[" + _0x160341 + "]: " + _0x2ec71a);
      }
    } catch (_0x12bbf4) {
      console.log(_0x12bbf4);
    } finally {
      return _0x12d212;
    }
  }
  async take_risk_get(_0xf110bf = {}) {
    let _0x46cbac = false;
    try {
      let _0x868cc5 = {
          fn: "take_risk_get",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/common/take-risk/get",
          headers: this.gen_sign()
        },
        {
          result: _0xdb9965
        } = await this.request(_0xad3684.copy(_0x868cc5)),
        _0x15d130 = _0xad3684.get(_0xdb9965, "code", -1);
      if (_0x15d130 == 0) {
        this.risk_num = _0xdb9965?.["data"]?.["num"] || 0;
        _0xdb9965?.["data"]?.["complete"] === false && (await this.take_risk_up(_0xdb9965?.["data"]?.["gameMapEvent"]));
      } else {
        let _0x8573ba = _0xad3684.get(_0xdb9965, "message", "");
        this.log("查询冒险次数失败[" + _0x15d130 + "]: " + _0x8573ba);
      }
    } catch (_0x4ea0ab) {
      console.log(_0x4ea0ab);
    } finally {
      return _0x46cbac;
    }
  }
  task_risk_print_award(_0x1db5d9) {
    let _0x5e960e = _0x1db5d9?.["data"]?.["gameMapEvent"]?.["gameMapEventAnswerList"]?.["filter"](_0x215951 => _0x215951?.["dropReward"]?.["finalNum"]) || [];
    _0x5e960e?.["length"] ? this.log("触发冒险事件奖励: " + _0x5e960e.map(_0x5bc7c7 => _0x5bc7c7.dropReward.name + "x" + _0x5bc7c7.dropReward.finalNum).join(", ")) : this.log("触发冒险事件没有获取奖励");
  }
  async take_risk_go(_0x1af964 = {}) {
    let _0x2a247a = false;
    try {
      let _0xc3e0c4 = {
          fn: "take_risk_go",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/common/take-risk/go",
          headers: this.gen_sign()
        },
        {
          result: _0x330dac
        } = await this.request(_0xad3684.copy(_0xc3e0c4)),
        _0x16ff65 = _0xad3684.get(_0x330dac, "code", -1);
      if (_0x16ff65 == 0) {
        this.risk_num = _0x330dac?.["data"]?.["num"] || 0;
        _0x330dac?.["data"]?.["complete"] ? this.task_risk_print_award(_0x330dac) : await this.take_risk_up(_0x330dac?.["data"]?.["gameMapEvent"]);
      } else {
        let _0x1a8965 = _0xad3684.get(_0x330dac, "message", "");
        this.log("冒险失败[" + _0x16ff65 + "]: " + _0x1a8965);
        _0x1a8965?.["includes"]("冒险暂停中") && (this.can_go_risk = false);
      }
    } catch (_0x387f93) {
      console.log(_0x387f93);
    } finally {
      return _0x2a247a;
    }
  }
  async take_risk_up(_0x38d71f, _0x15bfd7 = {}) {
    let _0xf30dd0 = false;
    try {
      let _0x3cd314 = _0xad3684.randomList(_0x38d71f?.["gameMapEventAnswerList"] || [])?.["jsonId"] || "";
      let _0xc675a4 = {
          jsonId: _0x3cd314
        },
        _0x309231 = {
          fn: "take_risk_up",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/common/take-risk/up",
          searchParams: _0xc675a4,
          headers: this.gen_sign(_0xc675a4)
        },
        {
          result: _0x444e64
        } = await this.request(_0xad3684.copy(_0x309231)),
        _0x2543c4 = _0xad3684.get(_0x444e64, "code", -1);
      if (_0x2543c4 == 0) {
        this.risk_num = _0x444e64?.["data"]?.["num"] || 0;
        this.task_risk_print_award(_0x444e64);
      } else {
        let _0x160c53 = _0xad3684.get(_0x444e64, "message", "");
        this.log("触发冒险事件[" + _0x3cd314 + "]失败[" + _0x2543c4 + "]: " + _0x160c53);
      }
    } catch (_0x4b6e05) {
      console.log(_0x4b6e05);
    } finally {
      return _0xf30dd0;
    }
  }
  async take_risk_reward(_0x367bc7 = {}) {
    try {
      let _0x4df981 = {
          fn: "take_risk_reward",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/take-risk/reward",
          headers: this.gen_sign()
        },
        {
          result: _0x2725ed
        } = await this.request(_0xad3684.copy(_0x4df981)),
        _0x197653 = _0xad3684.get(_0x2725ed, "code", -1);
      if (_0x197653 == 0) {
        this.log("领取冒险定时奖励成功");
      } else {
        let _0x499a1a = _0xad3684.get(_0x2725ed, "message", "");
        this.log("领取冒险定时奖励失败[" + _0x197653 + "]: " + _0x499a1a);
      }
    } catch (_0x367e83) {
      console.log(_0x367e83);
    }
  }
  async friend_help_task_risk(_0x51d2b1, _0x284dde = {}) {
    try {
      let _0x31b10d = {
          userId: _0x51d2b1.userId,
          type: 1,
          randomId: _0xad3684.randomString(32, "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM")
        },
        _0x31e6a0 = {
          fn: "friend_help_task_risk",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/friend-help/help",
          searchParams: _0x31b10d,
          headers: this.gen_sign(_0x31b10d)
        },
        {
          result: _0x5b3d5d
        } = await this.request(_0xad3684.copy(_0x31e6a0)),
        _0x193859 = _0xad3684.get(_0x5b3d5d, "code", -1);
      if (_0x193859 == 0) {
        if (_0x5b3d5d?.["data"]) {
          this.can_help_risk = false;
          this.log("冒险助力账号[" + _0x51d2b1.index + "][" + _0x51d2b1.name + "]成功");
          await _0x51d2b1.take_risk_reward();
        } else {
          let _0x24d287 = _0xad3684.get(_0x5b3d5d, "message", "") || "";
          _0x24d287 = _0x24d287?.["replace"](/\r/, "")?.["split"]("\n")?.["filter"](_0x643c83 => _0x643c83)?.["join"](",") || "";
          this.log("冒险助力账号[" + _0x51d2b1.index + "][" + _0x51d2b1.name + "]失败: " + _0x24d287);
          if (_0x24d287?.["includes"]("助力次数")) {
            this.can_help_risk = false;
          } else {
            _0x24d287?.["includes"]("挂机时间已完成") && (_0x51d2b1.need_help_risk = false);
          }
        }
      } else {
        let _0xf33b34 = _0xad3684.get(_0x5b3d5d, "message", "");
        this.log("冒险助力账号[" + _0x51d2b1.index + "][" + _0x51d2b1.name + "]错误[" + _0x193859 + "]: " + _0xf33b34);
      }
    } catch (_0x84d0bd) {
      console.log(_0x84d0bd);
    }
  }
  async friend_help(_0xd5de2a, _0x4203d1 = {}) {
    try {
      let _0x2df20d = {
          userId: _0xd5de2a.userId,
          type: 0,
          randomId: _0xad3684.randomString(32, "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM")
        },
        _0x2c57d6 = {
          fn: "friend_help",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/friend-help/help",
          searchParams: _0x2df20d,
          headers: this.gen_sign(_0x2df20d)
        },
        {
          result: _0x3dbe2b
        } = await this.request(_0xad3684.copy(_0x2c57d6)),
        _0x5f5202 = _0xad3684.get(_0x3dbe2b, "code", -1);
      if (_0x5f5202 == 0) {
        if (_0x3dbe2b?.["data"]) {
          await this.task_doHelpTask(_0xd5de2a);
        } else {
          let _0x549d87 = _0xad3684.get(_0x3dbe2b, "message", "") || "";
          _0x549d87 = _0x549d87?.["replace"](/\r/, "")?.["split"]("\n")?.["filter"](_0x1a2a74 => _0x1a2a74)?.["join"](",") || "";
          this.log("请求助力账号[" + _0xd5de2a.index + "][" + _0xd5de2a.name + "]失败: " + _0x549d87);
          _0x549d87?.["includes"]("助力次数") && (this.can_help_task = false);
        }
      } else {
        let _0x57f5e5 = _0xad3684.get(_0x3dbe2b, "message", "");
        this.log("请求助力账号[" + _0xd5de2a.index + "][" + _0xd5de2a.name + "]错误[" + _0x5f5202 + "]: " + _0x57f5e5);
      }
    } catch (_0x58fafd) {
      console.log(_0x58fafd);
    }
  }
  async friend_findRecommend(_0x30cc4a = {}) {
    try {
      let _0x14ebf9 = {
          fn: "friend_findRecommend",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/friend/findRecommend",
          headers: this.gen_sign()
        },
        {
          result: _0x45be65
        } = await this.request(_0xad3684.copy(_0x14ebf9)),
        _0x2819df = _0xad3684.get(_0x45be65, "code", -1);
      if (_0x2819df == 0) {
        for (let _0x1c537c of _0x45be65?.["data"] || []) {
          if (!this.can_add_friend) {
            break;
          }
          if (_0xad3684.userList.filter(_0x3d7be2 => _0x3d7be2.userId == _0x1c537c.userId).length > 0) {
            continue;
          }
          await this.friend_addFriend(_0x1c537c);
        }
      } else {
        let _0x2ee780 = _0xad3684.get(_0x45be65, "message", "");
        this.log("查询添加好友列表失败[" + _0x2819df + "]: " + _0x2ee780);
      }
    } catch (_0x46419a) {
      console.log(_0x46419a);
    }
  }
  async friend_addFriend(_0x434571, _0x11171d = {}) {
    try {
      let _0x573b5c = {
          friendUserId: _0x434571.userId
        },
        _0x43a566 = {
          fn: "friend_addFriend",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/friend/addFriend",
          searchParams: _0x573b5c,
          headers: this.gen_sign(_0x573b5c)
        },
        {
          result: _0x308671
        } = await this.request(_0xad3684.copy(_0x43a566)),
        _0x480c3b = _0xad3684.get(_0x308671, "code", -1);
      if (_0x480c3b == 0) {
        this.log("添加好友[" + _0x434571.nickName + "]成功");
      } else {
        let _0x53f0f0 = _0xad3684.get(_0x308671, "message", "");
        this.log("添加好友[" + _0x434571.nickName + "]失败[" + _0x480c3b + "]: " + _0x53f0f0);
        _0x53f0f0?.["includes"]("达到好友上限") && (this.can_add_friend = false);
      }
    } catch (_0x193831) {
      console.log(_0x193831);
    }
  }
  async friend_deleteFriend(_0x5621f6, _0xbd6f53 = {}) {
    try {
      let _0x239674 = {
          friendUserId: _0x5621f6.userId
        },
        _0xaedd19 = {
          fn: "friend_deleteFriend",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/friend/deleteFriend",
          searchParams: _0x239674,
          headers: this.gen_sign(_0x239674)
        },
        {
          result: _0x437037
        } = await this.request(_0xad3684.copy(_0xaedd19)),
        _0x3804fe = _0xad3684.get(_0x437037, "code", -1);
      if (_0x3804fe == 0) {
        this.log("删除好友[" + _0x5621f6.nickName + "]成功");
      } else {
        let _0x43c20e = _0xad3684.get(_0x437037, "message", "");
        this.log("删除好友[" + _0x5621f6.nickName + "]失败[" + _0x3804fe + "]: " + _0x43c20e);
      }
    } catch (_0x160f0d) {
      console.log(_0x160f0d);
    }
  }
  async friend_findFriend(_0x27e94e = {}) {
    try {
      let _0x546819 = {
          fn: "friend_findFriend",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/friend/findFriend",
          headers: this.gen_sign()
        },
        {
          result: _0x3b8d6a
        } = await this.request(_0xad3684.copy(_0x546819)),
        _0xc0bbf8 = _0xad3684.get(_0x3b8d6a, "code", -1);
      if (_0xc0bbf8 == 0) {
        for (let _0x17f17f of (_0x3b8d6a?.["data"]?.["friendList"] || []).sort(function (_0x445d4c, _0x1c88d7) {
          return _0x1c88d7.gold - _0x445d4c.gold;
        })) {
          await this.friend_stealGold(_0x17f17f);
        }
      } else {
        let _0x83a984 = _0xad3684.get(_0x3b8d6a, "message", "");
        this.log("查询好友列表失败[" + _0xc0bbf8 + "]: " + _0x83a984);
      }
    } catch (_0x243b98) {
      console.log(_0x243b98);
    }
  }
  async friend_stealGold(_0x5e95a7, _0x10c847 = {}) {
    try {
      let _0x50898d = {
          friendUserId: _0x5e95a7.userId
        },
        _0x11b3fc = {
          fn: "friend_stealGold",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/friend/stealGold",
          searchParams: _0x50898d,
          headers: this.gen_sign(_0x50898d)
        },
        {
          result: _0x4770e9
        } = await this.request(_0xad3684.copy(_0x11b3fc)),
        _0x5ab95d = _0xad3684.get(_0x4770e9, "code", -1);
      if (_0x5ab95d == 0) {
        this.log("偷取好友[" + _0x5e95a7.nickName + "]: 阳光x" + (_0x4770e9?.["data"] || 0));
      } else {
        let _0xd0ebd0 = _0xad3684.get(_0x4770e9, "message", "");
        this.log("偷取好友[" + _0x5e95a7.nickName + "]阳光失败[" + _0x5ab95d + "]: " + _0xd0ebd0);
      }
    } catch (_0x35a6d7) {
      console.log(_0x35a6d7);
    }
  }
  async exchange_reward(_0x510231 = {}) {
    try {
      let _0x3c71f6 = {
          id: _0x1605b5
        },
        _0x2c2b4c = {
          fn: "exchange_reward",
          method: "get",
          url: _0x502584 + "/qiehuangsecond/ga/exchange/reward",
          searchParams: _0x3c71f6,
          headers: this.gen_sign(_0x3c71f6)
        },
        {
          result: _0x15d32d
        } = await this.request(_0xad3684.copy(_0x2c2b4c)),
        _0x2665ef = _0xad3684.get(_0x15d32d, "code", -1);
      if (_0x2665ef == 0) {
        const _0x38ee89 = {
          notify: true
        };
        this.log("兑换[" + (_0x15d32d?.["data"]?.["name"] || "") + "]成功", _0x38ee89);
      } else {
        let _0x9f093a = _0xad3684.get(_0x15d32d, "message", "");
        this.log("兑换[id=" + _0x1605b5 + "]失败[" + _0x2665ef + "]: " + _0x9f093a);
      }
    } catch (_0x3d0811) {
      console.log(_0x3d0811);
    }
  }
  async risk_task(_0x5827c1 = {}) {
    await this.take_risk_get();
    await this.take_risk_online();
    await this.take_risk_reward();
    this.log("可以冒险" + this.risk_num + "次");
    while (this.risk_num-- > 0 && this.can_go_risk) {
      await this.take_risk_go();
    }
  }
  async land_task(_0x223fb6 = {}) {
    await this.user_land_get();
    this.all_land_unlock && this.all_role_unlock;
    for (let _0x5839ae in this.land) {
      let _0x10413b = this.land[_0x5839ae];
      if (_0x10413b.status == 0) {
        continue;
      }
      let {
          step: _0x1bbb3b,
          useSunCount: _0x124ae7,
          leftSunCount: _0x349803
        } = _0x10413b,
        _0x56d102 = _0x124ae7 + _0x349803;
      this.log("[" + _0x10413b.no + "号土地]: " + _0x2c95ac[_0x1bbb3b] + ", 阶段" + _0x1bbb3b + ", 进度" + _0x124ae7 + "/" + _0x56d102);
      this.refresh_land_step = true;
      while (this.refresh_land_step) {
        this.refresh_land_step = false;
        switch (_0x1bbb3b) {
          case 0:
            await this.user_land_sow(_0x10413b);
            break;
          default:
            if (_0x349803 == 0) {
              if (_0x1bbb3b == 5) {
                await this.user_land_result(_0x10413b);
              } else {
                let _0x28ea88 = Date.now();
                _0x28ea88 >= (_0x10413b.sunTime + _0x10413b.sunTimestamp) * 1000 && (await this.user_land_level(_0x10413b));
              }
            } else {
              if (this.sun >= _0x10413b.needSun) {
                let _0x27421f = Date.now();
                _0x27421f >= (_0x10413b.sunTime + _0x10413b.sunTimestamp) * 1000 && (await this.user_land_sun(_0x10413b));
              }
            }
            break;
        }
      }
    }
  }
  async userInfo_print() {
    await this.userInfo_get();
    const _0x5c1917 = {
      notify: true
    };
    this.log(": 阳光x" + this.sun + ", 调料x" + this.gold + ", 番茄x" + this.score, _0x5c1917);
  }
  async userTask(_0x1f76d1 = {}) {
    if (!(await this.login())) {
      return;
    }
    await this.userInfo_autoSun();
    await this.task_get();
    await this.userInfo_get();
    await this.user_role_get();
    await this.risk_task();
    await this.land_task();
  }
  async steal_task(_0x9a46bb = 5, _0x2d2c77 = {}) {
    for (let _0xde6b16 = 0; _0xde6b16 < _0x9a46bb && this.can_add_friend && _0x31209a; _0xde6b16++) {
      await this.friend_findRecommend();
    }
    await this.friend_findFriend();
  }
}
!(async () => {
  if (!(await _0x2b613f())) {
    return;
  }
  if (!_0xad3684.read_env(_0x5823dc)) {
    return;
  }
  _0xad3684.log("\n--------------- 开始日常任务 ---------------");
  for (let _0x34b5c6 of _0xad3684.userList) {
    await _0x34b5c6.userTask();
  }
  let _0x14f3fd = _0xad3684.userList.filter(_0x52bbee => _0x52bbee.valid);
  if (_0x14f3fd.length == 0) {
    return;
  }
  if (_0x14f3fd.length > 1) {
    _0xad3684.log("\n--------------- 开始冒险互助 ---------------");
    for (let _0x15e39f of _0x14f3fd.filter(_0x35c569 => _0x35c569.need_help_risk)) {
      for (let _0x1e5651 of _0x14f3fd.filter(_0x433b12 => _0x433b12.index != _0x15e39f.index && _0x433b12.can_help_risk)) {
        if (!_0x15e39f.need_help_risk) {
          break;
        }
        await _0x1e5651.friend_help_task_risk(_0x15e39f);
      }
    }
    _0xad3684.log("\n--------------- 开始角色解锁互助 ---------------");
    for (let _0x3baf72 of _0x14f3fd.filter(_0x3f98ba => _0x3f98ba.need_help_unlock)) {
      _0x3baf72.log("角色解锁已邀请" + _0x3baf72.help_role_config.progress + "/" + _0x3baf72.help_role_config.max);
      for (let _0x3561ff of _0x14f3fd.filter(_0x360e60 => _0x360e60.index != _0x3baf72.index && _0x360e60.can_help_unlock)) {
        if (_0x3baf72.help_role_config.progress >= _0x3baf72.help_role_config.max) {
          break;
        }
        await _0x3561ff.user_role_friendHelpUnlock(_0x3baf72);
      }
    }
    _0xad3684.log("\n--------------- 开始阳光互助 ---------------");
    for (let _0xa54a2e = 0; _0xa54a2e < _0x14f3fd.length; _0xa54a2e++) {
      let _0x296d88 = _0x14f3fd[_0xa54a2e];
      _0x296d88.log("任务已邀请" + _0x296d88.help_task_config.progress + "/" + _0x296d88.help_task_config.max);
      for (let _0x3d1faa = 0; _0x3d1faa < _0x14f3fd.length - 1; _0x3d1faa++) {
        let _0x1549a8 = _0x14f3fd[(_0xa54a2e + _0x3d1faa + 1) % _0x14f3fd.length];
        if (_0x296d88.help_task_config.progress >= _0x296d88.help_task_config.max) {
          break;
        }
        if (!_0x1549a8.can_help_task) {
          continue;
        }
        await _0x1549a8.friend_help(_0x296d88);
      }
    }
  }
  _0xad3684.log("\n--------------- 查询状态 ---------------");
  for (let _0x42d808 of _0x14f3fd) {
    await _0x42d808.userInfo_print();
  }
})().catch(_0x3ebaf1 => _0xad3684.log(_0x3ebaf1)).finally(() => _0xad3684.exitNow());
async function _0x2b613f(_0xc107f1 = 0) {
  let _0x8c5347 = false;
  try {
    let _0x3769da = {
        fn: "auth",
        method: "get",
        url: _0x3a2cdf,
        timeout: 20000
      },
      {
        statusCode: _0x390ffa,
        result: _0x48d381
      } = await _0x14cd21.request(_0x3769da);
    if (_0x390ffa != 200) {
      _0xc107f1++ < _0x231b72 && (_0x8c5347 = await _0x2b613f(_0xc107f1));
      return _0x8c5347;
    }
    if (_0x48d381?.["code"] == 0) {
      _0x48d381 = JSON.parse(_0x48d381.data.file.data);
      if (_0x48d381?.["commonNotify"] && _0x48d381.commonNotify.length > 0) {
        const _0x22a633 = {
          notify: true
        };
        _0xad3684.log(_0x48d381.commonNotify.join("\n") + "\n", _0x22a633);
      }
      _0x48d381?.["commonMsg"] && _0x48d381.commonMsg.length > 0 && _0xad3684.log(_0x48d381.commonMsg.join("\n") + "\n");
      if (_0x48d381[_0x2d7777]) {
        let _0x2c1ee6 = _0x48d381[_0x2d7777];
        _0x2c1ee6.status == 0 ? _0x8ec2bd >= _0x2c1ee6.version ? (_0x8c5347 = true, _0xad3684.log(_0x2c1ee6.msg[_0x2c1ee6.status]), _0xad3684.log(_0x2c1ee6.updateMsg), _0xad3684.log("现在运行的脚本版本是：" + _0x8ec2bd + "，最新脚本版本：" + _0x2c1ee6.latestVersion)) : _0xad3684.log(_0x2c1ee6.versionMsg) : _0xad3684.log(_0x2c1ee6.msg[_0x2c1ee6.status]);
      } else {
        _0xad3684.log(_0x48d381.errorMsg);
      }
    } else {
      _0xc107f1++ < _0x231b72 && (_0x8c5347 = await _0x2b613f(_0xc107f1));
    }
  } catch (_0x5d63c5) {
    _0xad3684.log(_0x5d63c5);
  } finally {
    return _0x8c5347;
  }
}
function _0x4726c3(_0x5e240c) {
  return new class {
    constructor(_0x250039) {
      this.name = _0x250039;
      this.startTime = Date.now();
      const _0x17ff88 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x17ff88);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0x56645f, _0xe2d2c8 = {}) {
      let _0x2cc68f = {
        console: true
      };
      Object.assign(_0x2cc68f, _0xe2d2c8);
      if (_0x2cc68f.time) {
        let _0x2abebb = _0x2cc68f.fmt || "hh:mm:ss";
        _0x56645f = "[" + this.time(_0x2abebb) + "]" + _0x56645f;
      }
      if (_0x2cc68f.notify) {
        this.notifyStr.push(_0x56645f);
      }
      if (_0x2cc68f.console) {
        console.log(_0x56645f);
      }
    }
    get(_0x33e1eb, _0x1805a7, _0x289e56 = "") {
      let _0x30f6c3 = _0x289e56;
      _0x33e1eb?.["hasOwnProperty"](_0x1805a7) && (_0x30f6c3 = _0x33e1eb[_0x1805a7]);
      return _0x30f6c3;
    }
    pop(_0x2e1820, _0x1d8fd1, _0x53ab31 = "") {
      let _0x485b0c = _0x53ab31;
      _0x2e1820?.["hasOwnProperty"](_0x1d8fd1) && (_0x485b0c = _0x2e1820[_0x1d8fd1], delete _0x2e1820[_0x1d8fd1]);
      return _0x485b0c;
    }
    copy(_0x47e955) {
      return Object.assign({}, _0x47e955);
    }
    read_env(_0x239b56) {
      let _0x54ca25 = _0x49dccd.map(_0x4f9796 => process.env[_0x4f9796]);
      for (let _0x521139 of _0x54ca25.filter(_0x21f570 => !!_0x21f570)) {
        for (let _0x2b91ec of _0x521139.split(_0x526520).filter(_0x215d2a => !!_0x215d2a)) {
          if (this.userList.includes(_0x2b91ec)) {
            continue;
          }
          this.userList.push(new _0x239b56(_0x2b91ec));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x15d949 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x49dccd.map(_0x4ab611 => "[" + _0x4ab611 + "]").join("或"), _0x15d949);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x2754c8, _0x33714c, _0x452da1 = {}) {
      while (_0x33714c.idx < _0xad3684.userList.length) {
        let _0x509b65 = _0xad3684.userList[_0x33714c.idx++];
        if (!_0x509b65.valid) {
          continue;
        }
        await _0x509b65[_0x2754c8](_0x452da1);
      }
    }
    async threadTask(_0x36d323, _0x1e5aef) {
      let _0x402c70 = [];
      let _0x344ffc = {
        idx: 0
      };
      while (_0x1e5aef--) {
        _0x402c70.push(this.threads(_0x36d323, _0x344ffc));
      }
      await Promise.all(_0x402c70);
    }
    time(_0x40fc15, _0x1ba51c = null) {
      let _0x2cccfc = _0x1ba51c ? new Date(_0x1ba51c) : new Date(),
        _0x88002c = {
          "M+": _0x2cccfc.getMonth() + 1,
          "d+": _0x2cccfc.getDate(),
          "h+": _0x2cccfc.getHours(),
          "m+": _0x2cccfc.getMinutes(),
          "s+": _0x2cccfc.getSeconds(),
          "q+": Math.floor((_0x2cccfc.getMonth() + 3) / 3),
          S: this.padStr(_0x2cccfc.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x40fc15) && (_0x40fc15 = _0x40fc15.replace(RegExp.$1, (_0x2cccfc.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x5b58b6 in _0x88002c) new RegExp("(" + _0x5b58b6 + ")").test(_0x40fc15) && (_0x40fc15 = _0x40fc15.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x88002c[_0x5b58b6] : ("00" + _0x88002c[_0x5b58b6]).substr(("" + _0x88002c[_0x5b58b6]).length)));
      return _0x40fc15;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x44a805 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x44a805.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x547b1c, _0x2ed08a, _0x1082bf = {}) {
      let _0x50439c = _0x1082bf.padding || "0",
        _0x49f2f0 = _0x1082bf.mode || "l",
        _0xb2fdf4 = String(_0x547b1c),
        _0x4c2a14 = _0x2ed08a > _0xb2fdf4.length ? _0x2ed08a - _0xb2fdf4.length : 0,
        _0x2c05b1 = "";
      for (let _0x3a0783 = 0; _0x3a0783 < _0x4c2a14; _0x3a0783++) {
        _0x2c05b1 += _0x50439c;
      }
      _0x49f2f0 == "r" ? _0xb2fdf4 = _0xb2fdf4 + _0x2c05b1 : _0xb2fdf4 = _0x2c05b1 + _0xb2fdf4;
      return _0xb2fdf4;
    }
    json2str(_0x39e113, _0xdf8580, _0x530d5c = false) {
      let _0x30fcbb = [];
      for (let _0x8c97cc of Object.keys(_0x39e113).sort()) {
        let _0x1d292f = _0x39e113[_0x8c97cc];
        if (_0x1d292f && _0x530d5c) {
          _0x1d292f = encodeURIComponent(_0x1d292f);
        }
        _0x30fcbb.push(_0x8c97cc + "=" + _0x1d292f);
      }
      return _0x30fcbb.join(_0xdf8580);
    }
    str2json(_0x5bfff8, _0x185d2a = false) {
      let _0x3f485d = {};
      for (let _0x39f95a of _0x5bfff8.split("&")) {
        if (!_0x39f95a) {
          continue;
        }
        let _0x57c37d = _0x39f95a.indexOf("=");
        if (_0x57c37d == -1) {
          continue;
        }
        let _0x37a158 = _0x39f95a.substr(0, _0x57c37d),
          _0x1fe770 = _0x39f95a.substr(_0x57c37d + 1);
        if (_0x185d2a) {
          _0x1fe770 = decodeURIComponent(_0x1fe770);
        }
        _0x3f485d[_0x37a158] = _0x1fe770;
      }
      return _0x3f485d;
    }
    randomPattern(_0x4e9221, _0x457320 = "abcdef0123456789") {
      let _0x43db6d = "";
      for (let _0x2cf39f of _0x4e9221) {
        if (_0x2cf39f == "x") {
          _0x43db6d += _0x457320.charAt(Math.floor(Math.random() * _0x457320.length));
        } else {
          _0x2cf39f == "X" ? _0x43db6d += _0x457320.charAt(Math.floor(Math.random() * _0x457320.length)).toUpperCase() : _0x43db6d += _0x2cf39f;
        }
      }
      return _0x43db6d;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x47097b, _0x4e2503 = "abcdef0123456789") {
      let _0x146896 = "";
      for (let _0x161f6d = 0; _0x161f6d < _0x47097b; _0x161f6d++) {
        _0x146896 += _0x4e2503.charAt(Math.floor(Math.random() * _0x4e2503.length));
      }
      return _0x146896;
    }
    randomList(_0x18bea8) {
      let _0x1357e1 = Math.floor(Math.random() * _0x18bea8.length);
      return _0x18bea8[_0x1357e1];
    }
    wait(_0x33f137) {
      return new Promise(_0x396172 => setTimeout(_0x396172, _0x33f137));
    }
    async exitNow() {
      await this.showmsg();
      let _0x583b85 = Date.now(),
        _0x44515d = (_0x583b85 - this.startTime) / 1000;
      this.log("");
      const _0x1b839b = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x44515d + "秒", _0x1b839b);
      process.exit(0);
    }
    normalize_time(_0x1d3ad7, _0x51e28c = {}) {
      let _0x61fed7 = _0x51e28c.len || _0x5d9aa4;
      _0x1d3ad7 = _0x1d3ad7.toString();
      let _0x273fb9 = _0x1d3ad7.length;
      while (_0x273fb9 < _0x61fed7) {
        _0x1d3ad7 += "0";
      }
      _0x273fb9 > _0x61fed7 && (_0x1d3ad7 = _0x1d3ad7.slice(0, 13));
      return parseInt(_0x1d3ad7);
    }
    async wait_until(_0xc07f1b, _0x37cbcf = {}) {
      let _0x2fe8e3 = _0x37cbcf.logger || this,
        _0x5a0be6 = _0x37cbcf.interval || _0x43e1e2,
        _0x3290e0 = _0x37cbcf.limit || _0x3aee12,
        _0x43eeee = _0x37cbcf.ahead || _0x1eae0b;
      if (typeof _0xc07f1b == "string" && _0xc07f1b.includes(":")) {
        if (_0xc07f1b.includes("-")) {
          _0xc07f1b = new Date(_0xc07f1b).getTime();
        } else {
          let _0x5f2bd5 = this.time("yyyy-MM-dd ");
          _0xc07f1b = new Date(_0x5f2bd5 + _0xc07f1b).getTime();
        }
      }
      let _0x3395f4 = this.normalize_time(_0xc07f1b) - _0x43eeee,
        _0x22fe3b = this.time("hh:mm:ss.S", _0x3395f4),
        _0x8bb098 = Date.now();
      _0x8bb098 > _0x3395f4 && (_0x3395f4 += 86400000);
      let _0x2f9aa7 = _0x3395f4 - _0x8bb098;
      if (_0x2f9aa7 > _0x3290e0) {
        const _0x24fa56 = {
          time: true
        };
        _0x2fe8e3.log("离目标时间[" + _0x22fe3b + "]大于" + _0x3290e0 / 1000 + "秒,不等待", _0x24fa56);
      } else {
        const _0xc197bf = {
          time: true
        };
        _0x2fe8e3.log("离目标时间[" + _0x22fe3b + "]还有" + _0x2f9aa7 / 1000 + "秒,开始等待", _0xc197bf);
        while (_0x2f9aa7 > 0) {
          let _0x3cf5b5 = Math.min(_0x2f9aa7, _0x5a0be6);
          await this.wait(_0x3cf5b5);
          _0x8bb098 = Date.now();
          _0x2f9aa7 = _0x3395f4 - _0x8bb098;
        }
        const _0x52b278 = {
          time: true
        };
        _0x2fe8e3.log("已完成等待", _0x52b278);
      }
    }
    async wait_gap_interval(_0x2a69dc, _0x48c324) {
      let _0x254aef = Date.now() - _0x2a69dc;
      _0x254aef < _0x48c324 && (await this.wait(_0x48c324 - _0x254aef));
    }
  }(_0x5e240c);
}
