/*
酷狗音乐

捉包把token, userid和openid填到kgyyCookie，多账户换行隔开
格式：token=xxxx&userid=12345678&openid=xxxxs
openid提现用，非必须，没捉到就删掉

默认9点提现，需要改的把提现时间(小时)填到kgWithdrawTime，如：
export kgWithdrawTime=10

一天跑50次以上
cron: 1-59/20 0,7-23 * * *

const $ = new Env("酷狗音乐");
*/

const _0x227d03 = new _0x3bc472("酷狗音乐");
let _0x4575f7 = ["\n"],
  _0x85d25e = "kgyyCookie",
  _0x27221c = (_0x227d03.isNode() ? process.env[_0x85d25e] : _0x227d03.getdata(_0x85d25e)) || "",
  _0x3a23fa = (_0x227d03.isNode() ? process.env.kgWithdrawTime : _0x227d03.getdata("kgWithdrawTime")) || 9,
  _0x6eec9f = [],
  _0x2a8f75 = 0,
  _0xb16581 = 0,
  _0x3f5c83 = new Date().getHours(),
  _0x9726d2 = "application/json;charset=utf-8",
  _0x3340b4 = "Mozilla/5.0 (Linux; Android 9; MI 8 Build/PQ3A.190801.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 KugouBrowser/6.2 TBS/046010 Mobile Safari/537.36 GDTTangramMobSDK/8.455.2731 GDTMobSDK/8.455.2731",
  _0x9511bb = "https://h5.kugou.com/",
  _0x17c13e = "https://h5.kugou.com",
  _0x5bb8e9 = 1005,
  _0x1ad373 = 11209,
  _0x5297c3 = "client",
  _0x5c42de = "OIlwieks28dk2k092lksi2UIkp",
  _0x1e9fb6 = 300,
  _0x5e8d97 = 1500,
  _0x1f6439 = "0123456789",
  _0x36412a = "qwertyuiopasdfghjklzxcvbnm",
  _0x5b8f13 = "QWERTYUIOPASDFGHJKLZXCVBNM",
  _0x168977 = 8,
  _0x308bdc = 1.01,
  _0x389e40 = "kugou",
  _0x188dcc = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json";
class _0x502821 {
  constructor(_0x5477a0) {
    this.index = ++_0x2a8f75;
    this.name = this.index;
    this.valid = false;
    Object.assign(this, _0x227d03.str2json(_0x5477a0));
    this.dfid = _0x227d03.randomString(24, _0x1f6439 + _0x36412a + _0x5b8f13);
    this.uuid = _0x227d03.randomString(32);
    this.mid = _0x227d03.randomString(39, _0x1f6439);
    this.tasks = [];
    this.needSign = false;
    this.needLotteryVedio = false;
    this.meals = [];
    this.withdrawFlag = this.withdraw || 1;
    this.withdrawSucc = false;
    this.hasRealnameAuth = true;
  }
  getDefaultQueryParam() {
    let _0x4132a7 = {
      appid: _0x5bb8e9,
      dfid: this.dfid || "",
      clienttime: Date.now() / 1000 | 0,
      clientver: _0x1ad373,
      from: _0x5297c3,
      mid: this.mid || "",
      token: this.token || "",
      userid: this.userid || "",
      uuid: this.uuid || ""
    };
    return _0x4132a7;
  }
  genSign(_0x142eb2, _0xb32db2) {
    let _0x535d35 = _0x227d03.json2str(_0x142eb2, ""),
      _0x53613f = _0x3de3a1("" + _0x5c42de + _0x535d35 + _0xb32db2 + _0x5c42de);
    return _0x53613f;
  }
  async taskApi(_0x187022 = {}) {
    let _0x1e3253 = {};
    try {
      let _0x1dc4c4 = _0x187022.url.replace("//", "/").split("/")[1],
        _0xe7aa27 = this.getDefaultQueryParam();
      if (_0x187022.queryParam) {
        _0xe7aa27 = Object.assign(_0xe7aa27, _0x187022.queryParam);
      }
      const _0x131f01 = {
        Host: _0x1dc4c4,
        Connection: "keep-alive",
        "User-Agent": _0x3340b4,
        Referer: _0x9511bb,
        Origin: _0x17c13e
      };
      let _0xaca163 = {
        headers: _0x131f01,
        timeout: 5000
      };
      if (_0x187022.body) {
        _0xaca163.headers["Content-Type"] = _0x187022["Content-Type"] || _0x9726d2;
        if (typeof _0x187022.body === "object") {
          if (_0xaca163.headers["Content-Type"].includes("json")) {
            _0xaca163.body = JSON.stringify(_0x187022.body);
          } else {
            for (let _0x27b480 in _0x187022.body) {
              typeof _0x187022.body[_0x27b480] === "object" && (_0x187022.body[_0x27b480] = JSON.stringify(_0x187022.body[_0x27b480]));
            }
            _0xaca163.body = _0x227d03.json2str(_0x187022.body, "&");
          }
        } else {
          _0xaca163.body = _0x187022.body;
        }
      }
      if (_0x187022.urlObjectParam) {
        Object.assign(_0xaca163, _0x187022.urlObjectParam);
      }
      if (_0x187022.headerParam) {
        Object.assign(_0xaca163.headers, _0x187022.headerParam);
      }
      _0xe7aa27.signature = this.genSign(_0xe7aa27, _0xaca163.body || "");
      _0xaca163.url = _0x187022.url + "?" + _0x227d03.json2str(_0xe7aa27, "&", true);
      _0x1e3253 = Object.assign({}, await _0x372aac(_0x187022.method, _0xaca163));
      _0x1e3253.statusCode = _0x1e3253?.["err"]?.["response"]?.["statusCode"] || _0x1e3253?.["resp"]?.["statusCode"];
      _0x1e3253.statusCode != 200 && console.log("[" + _0x187022.fn + "]返回[" + _0x1e3253.statusCode + "]");
      if (_0x1e3253?.["resp"]?.["body"]) {
        if (typeof _0x1e3253.resp.body === "object") {
          _0x1e3253.result = _0x1e3253.resp.body;
        } else {
          try {
            _0x1e3253.result = JSON.parse(_0x1e3253.resp.body);
          } catch (_0x58ce5a) {
            _0x1e3253.result = _0x1e3253.resp.body;
          }
        }
      }
    } catch (_0x3870cd) {
      console.log(_0x3870cd);
    } finally {
      return Promise.resolve(_0x1e3253);
    }
  }
  async getUserInfo() {
    let _0x12251e = {};
    try {
      let _0xe1488c = {
        fn: "getUserInfo",
        method: "get",
        url: "https://gateway.kugou.com/mstc/musicsymbol/v1/user/info"
      };
      _0x12251e = Object.assign({}, await this.taskApi(_0xe1488c));
      let _0x5e88af = _0x12251e.result;
      _0x5e88af.errcode == 0 ? (this.valid = true, this.name = _0x5e88af.data.base.nickname, this.coin = _0x5e88af.data.account.balance_coins, console.log("[" + this.name + "]登录成功，金币：" + this.coin)) : console.log("查询账户失败: " + _0x5e88af.error);
    } catch (_0x1632b5) {
      console.log(_0x1632b5);
    } finally {
      return Promise.resolve(_0x12251e);
    }
  }
  async getCoin() {
    let _0x436040 = {};
    try {
      let _0x2b253f = {
        fn: "getCoin",
        method: "get",
        url: "https://gateway.kugou.com/mstc/musicsymbol/v1/user/info"
      };
      _0x436040 = Object.assign({}, await this.taskApi(_0x2b253f));
      let _0x397779 = _0x436040.result;
      _0x397779.errcode == 0 ? (this.name = _0x397779.data.base.nickname, this.coin = _0x397779.data.account.balance_coins, console.log("昵称：" + this.name), console.log("金币：" + this.coin)) : console.log("查询账户失败: " + _0x397779.error);
    } catch (_0x601a53) {
      console.log(_0x601a53);
    } finally {
      return Promise.resolve(_0x436040);
    }
  }
  async getTaskList() {
    let _0x2772e5 = {};
    try {
      let _0x5e1da3 = {
        fn: "getTaskList",
        method: "post",
        url: "https://gateway.kugou.com/mstc/musicsymbol/v1/system/infos"
      };
      _0x2772e5 = Object.assign({}, await this.taskApi(_0x5e1da3));
      let _0x3472c0 = _0x2772e5.result;
      if (_0x3472c0.errcode == 0) {
        let _0x2fb210 = Date.now() / 1000 | 0;
        for (let _0x301cbf of _0x3472c0.data.tasks) {
          let _0x16186a = _0x301cbf.state.state == 0,
            _0x46f482 = _0x301cbf.profile.name + "[id=" + _0x301cbf.profile.taskid + "] " + _0x301cbf.state.done_count + "/" + _0x301cbf.state.max_done_count + "，" + (_0x301cbf.state.state == 0 ? "未" : "已") + "完成";
          if (_0x16186a) {
            if (_0x301cbf.profile.name.indexOf("每日签到") > -1) {
              this.needSign = true;
            } else {
              if (_0x301cbf.profile.name.indexOf("定时领取金币") > -1) {
                if (_0x301cbf.state.next_award_time && _0x2fb210 < _0x301cbf.state.next_award_time) {
                  _0x46f482 += "，冷却还有" + (_0x301cbf.state.next_award_time - _0x2fb210) + "秒";
                } else {
                  const _0x211e72 = {
                    task: _0x301cbf,
                    mealId: ""
                  };
                  this.tasks.push(_0x211e72);
                }
              } else {
                if (_0x301cbf.profile.name.indexOf("吃饭补贴") > -1) {
                  for (let _0x66caa4 of _0x301cbf.state.meals) {
                    if (_0x66caa4.state == 0 && _0x2fb210 >= _0x66caa4.start_time) {
                      const _0x2dc637 = {
                        task: _0x301cbf,
                        mealId: _0x66caa4.id
                      };
                      this.tasks.push(_0x2dc637);
                    }
                  }
                  this.meals.length == 0 && (_0x46f482 += "，未到吃饭补贴时间");
                } else {
                  if (_0x301cbf.profile.name.indexOf("实名认证") > -1) {
                    const _0x18978d = {
                      task: _0x301cbf,
                      mealId: ""
                    };
                    this.tasks.push(_0x18978d);
                    this.hasRealnameAuth = false;
                  } else {
                    if (_0x301cbf.profile.name.indexOf("抽奖活动") > -1) {
                      const _0x34e8e1 = {
                        task: _0x301cbf,
                        mealId: ""
                      };
                      this.tasks.push(_0x34e8e1);
                      _0x301cbf.state.lottery && _0x301cbf.state.lottery.chances == 0 && (this.needLotteryVedio = true);
                    } else {
                      const _0x3a8d8c = {
                        task: _0x301cbf,
                        mealId: ""
                      };
                      this.tasks.push(_0x3a8d8c);
                    }
                  }
                }
              }
            }
          }
          console.log(_0x46f482);
        }
      } else {
        console.log("查询任务列表失败: " + _0x3472c0.error);
      }
    } catch (_0x10a77f) {
      console.log(_0x10a77f);
    } finally {
      return Promise.resolve(_0x2772e5);
    }
  }
  async getTaskListProfile() {
    let _0x50030e = {};
    try {
      const _0xec3786 = {
        user_label: {}
      };
      let _0x17f7cc = {
        fn: "getTaskListProfile",
        method: "post",
        url: "https://gateway.kugou.com/mstc/musicsymbol/v1/system/profile",
        body: _0xec3786
      };
      _0x50030e = Object.assign({}, await this.taskApi(_0x17f7cc));
      let _0x465815 = _0x50030e.result;
      if (_0x465815.errcode == 0) {
        for (let _0x28b1d8 of _0x465815.data.task) {
          if (_0x28b1d8.open == 1) {
            await this.getTaskInfo(_0x28b1d8.taskid);
          }
        }
      } else {
        console.log("查询任务列表失败: " + _0x465815.error);
      }
    } catch (_0x4c527f) {
      console.log(_0x4c527f);
    } finally {
      return Promise.resolve(_0x50030e);
    }
  }
  async signon(_0x2a4f5b = "") {
    let _0x2139a2 = {};
    try {
      let _0x20ecf8 = {
        code: _0x227d03.time("yyyyMMdd")
      };
      _0x2a4f5b && (_0x20ecf8.double_code = _0x2a4f5b);
      let _0x52d7b8 = {
        fn: "signon",
        method: "post",
        url: "https://gateway.kugou.com/mstc/musicsymbol/v1/task/signon",
        body: _0x20ecf8
      };
      _0x2139a2 = Object.assign({}, await this.taskApi(_0x52d7b8));
      let _0x527f11 = _0x2139a2.result;
      if (_0x527f11.errcode == 0) {
        let _0x53fb16 = "";
        if (_0x527f11.data.double_awards) {
          _0x53fb16 = "，可看视频额外获得" + _0x527f11.data.double_awards.coins + "狗狗币";
        }
        _0x2a4f5b ? console.log("看签到翻倍视频获得" + _0x527f11.data.awards.coins + "狗狗币" + _0x53fb16) : console.log("签到获得" + _0x527f11.data.awards.coins + "狗狗币" + _0x53fb16);
        _0x527f11.data.double_awards && _0x527f11.data.double_code && (await _0x227d03.wait(_0x5e8d97), await this.signon(_0x527f11.data.double_code));
      } else {
        console.log("完成任务[" + taskid + "]失败: " + _0x527f11.error);
      }
    } catch (_0x43e333) {
      console.log(_0x43e333);
    } finally {
      return Promise.resolve(_0x2139a2);
    }
  }
  async submitTask(_0x423a95, _0x54ae84, _0x1836cc = "") {
    let _0x36afa1 = {};
    try {
      let _0xdc20bb = {
        taskid: _0x423a95.profile.taskid
      };
      if (_0x1836cc) {
        _0xdc20bb.meal_id = _0x1836cc;
      }
      _0x54ae84 && (_0xdc20bb.double_code = _0x54ae84);
      let _0x354b1f = {
        fn: "submitTask",
        method: "post",
        url: "https://gateway.kugou.com/mstc/musicsymbol/v1/task/submit",
        body: _0xdc20bb
      };
      _0x36afa1 = Object.assign({}, await this.taskApi(_0x354b1f));
      let _0x2186bb = _0x36afa1.result,
        _0x5ef058 = _0x423a95.profile.name;
      if (_0x54ae84) {
        _0x5ef058 += "翻倍视频";
      }
      if (_0x2186bb.errcode == 0) {
        let _0x26ce60 = "";
        if (_0x2186bb.data.double_awards) {
          _0x26ce60 = "，可看视频额外获得" + _0x2186bb.data.double_awards.coins + "狗狗币";
        }
        console.log("领取[" + _0x5ef058 + "]奖励获得" + _0x2186bb.data.awards.coins + "狗狗币" + _0x26ce60);
        _0x2186bb.data.double_awards && _0x2186bb.data.double_code && (await _0x227d03.wait(_0x5e8d97), await this.submitTask(_0x423a95, _0x2186bb.data.double_code, _0x1836cc));
      } else {
        console.log("领取[" + _0x5ef058 + "]奖励失败: " + _0x2186bb.error);
      }
    } catch (_0x4b2b02) {
      console.log(_0x4b2b02);
    } finally {
      return Promise.resolve(_0x36afa1);
    }
  }
  async getTaskInfo(_0x10b183) {
    let _0x260b13 = {};
    try {
      const _0x4c6ebc = {
        taskid: _0x10b183
      };
      let _0x40d3a1 = {
        fn: "getTaskInfo",
        method: "post",
        url: "https://gateway.kugou.com/mstc/musicsymbol/v1/task/info",
        body: _0x4c6ebc
      };
      _0x260b13 = Object.assign({}, await this.taskApi(_0x40d3a1));
      let _0x489eaf = _0x260b13.result;
      if (_0x489eaf.errcode == 0) {
        if (!_0x489eaf.data.state) {
          return;
        }
        let _0x392640 = Date.now() / 1000 | 0,
          _0x12a390 = _0x489eaf.data.state.state == 0,
          _0x3846b5 = _0x489eaf.data.profile.name + "[id=" + _0x489eaf.data.profile.taskid + "] " + _0x489eaf.data.state.done_count + "/" + _0x489eaf.data.state.max_done_count + "，" + (_0x489eaf.data.state.state == 0 ? "未" : "已") + "完成";
        if (_0x12a390) {
          if (_0x489eaf.data.profile.name.indexOf("每日签到") > -1) {
            this.needSign = true;
          } else {
            if (_0x489eaf.data.profile.name.indexOf("定时领取金币") > -1) {
              if (_0x489eaf.data.state.next_award_time && _0x392640 < _0x489eaf.data.state.next_award_time) {
                _0x3846b5 += "，冷却还有" + (_0x489eaf.data.state.next_award_time - _0x392640) + "秒";
              } else {
                const _0xbe672c = {
                  task: _0x489eaf.data,
                  mealId: ""
                };
                this.tasks.push(_0xbe672c);
              }
            } else {
              if (_0x489eaf.data.profile.name.indexOf("吃饭补贴") > -1) {
                for (let _0x16191a of _0x489eaf.data.state.meals) {
                  if (_0x16191a.state == 0 && _0x392640 >= _0x16191a.start_time) {
                    const _0x43e9bf = {
                      task: _0x489eaf.data,
                      mealId: _0x16191a.id
                    };
                    this.tasks.push(_0x43e9bf);
                  }
                }
                this.meals.length == 0 && (_0x3846b5 += "，未到吃饭补贴时间");
              } else {
                if (!_0x489eaf.data.state.lottery) {
                  const _0x10865b = {
                    task: _0x489eaf.data,
                    mealId: ""
                  };
                  this.tasks.push(_0x10865b);
                }
              }
            }
          }
        }
        console.log(_0x3846b5);
      } else {
        console.log("查询任务[" + _0x10b183 + "]失败: " + _0x489eaf.error);
      }
    } catch (_0x18e230) {
      console.log(_0x18e230);
    } finally {
      return Promise.resolve(_0x260b13);
    }
  }
  async lotteryExchange() {
    let _0x54e0da = {};
    try {
      const _0x535473 = {
        way: "ad"
      };
      let _0x2b179f = {
        fn: "lotteryExchange",
        method: "post",
        url: "https://gateway.kugou.com/mstc/musicsymbol/v1/lottery/exchange",
        body: _0x535473
      };
      _0x54e0da = Object.assign({}, await this.taskApi(_0x2b179f));
      let _0x2ffa21 = _0x54e0da.result;
      _0x2ffa21.errcode == 0 ? console.log("看视频获取抽奖次数成功") : console.log("看视频获取抽奖次数失败: " + _0x2ffa21.error);
    } catch (_0x442d6f) {
      console.log(_0x442d6f);
    } finally {
      return Promise.resolve(_0x54e0da);
    }
  }
  async withdrawLevels() {
    let _0x320aab = {};
    try {
      let _0x4c791b = {
        fn: "withdrawLevels",
        method: "get",
        url: "https://gateway.kugou.com/mstc/musicsymbol/v1/withdraw/levels"
      };
      _0x320aab = Object.assign({}, await this.taskApi(_0x4c791b));
      let _0x418a69 = _0x320aab.result;
      if (_0x418a69.errcode == 0) {
        let _0x49d95c = _0x418a69.data.list.sort(function (_0x2c4e41, _0x288f8f) {
          return _0x288f8f.coins - _0x2c4e41.coins;
        });
        for (let _0x3e1e7c of _0x49d95c) {
          if (this.coin < _0x3e1e7c.coins) {
            continue;
          }
          await this.withdraw(_0x3e1e7c);
          if (this.withdrawSucc) {
            break;
          }
        }
      } else {
        console.log("查询提现列表失败: " + _0x418a69.error);
      }
    } catch (_0x2d3921) {
      console.log(_0x2d3921);
    } finally {
      return Promise.resolve(_0x320aab);
    }
  }
  async withdraw(_0x5a2202) {
    let _0x1a4e97 = {};
    try {
      let _0xe9cd15 = {
        fn: "withdraw",
        method: "post",
        url: "https://gateway.kugou.com/mstc/musicsymbol/v1/withdraw/apply",
        body: {
          coins: _0x5a2202.coins,
          nickname: this.name,
          openid: this.openid,
          total_fee: _0x5a2202.coins / 100,
          channel: 3
        }
      };
      _0x1a4e97 = Object.assign({}, await this.taskApi(_0xe9cd15));
      let _0x1ee57f = _0x1a4e97.result;
      _0x1ee57f.errcode == 0 ? (this.withdrawSucc = true, _0x227d03.logAndNotify("账号[" + this.name + "]提现" + _0x5a2202.coins / 10000 + "元成功")) : console.log("账号[" + this.name + "]提现" + _0x5a2202.coins / 10000 + "元失败: " + _0x1ee57f.error);
    } catch (_0x391112) {
      console.log(_0x391112);
    } finally {
      return Promise.resolve(_0x1a4e97);
    }
  }
  async userTask() {
    let _0xf083a6 = {};
    try {
      console.log("\n============= 账号[" + this.index + "] =============");
      await this.getUserInfo();
      if (!this.valid) {
        return Promise.resolve(_0xf083a6);
      }
      console.log("\n----------- 任务列表 -----------");
      await this.getTaskList();
      this.needSign && (console.log("\n----------- 签到 -----------"), await _0x227d03.wait(_0x1e9fb6), await this.signon());
      this.needLotteryVedio && (console.log("\n----------- 抽奖视频 -----------"), await _0x227d03.wait(_0x1e9fb6), await this.lotteryExchange());
      if (this.tasks.length > 0) {
        console.log("\n----------- 做任务 -----------");
        for (let _0x2e08ec of this.tasks) {
          await _0x227d03.wait(_0x1e9fb6);
          await this.submitTask(_0x2e08ec.task, "", _0x2e08ec.mealId);
        }
      }
      console.log("\n----------- 查询金币 -----------");
      await this.getCoin();
      console.log("\n----------- 提现 -----------");
      if (this.withdrawFlag == 0) {
        console.log("账号" + this.index + "[" + this.name + "]当前设置了不提现");
      } else {
        if (!this.openid) {
          console.log("账号" + this.index + "[" + this.name + "]缺少参数openid，无法提现");
        } else {
          !this.hasRealnameAuth ? console.log("账号" + this.index + "[" + this.name + "]未完成实名认证，无法提现") : _0x3f5c83 == _0x3a23fa ? await this.withdrawLevels() : console.log("非提现时间，现在的设置为每天" + _0x3a23fa + "点提现");
        }
      }
    } catch (_0x2b9eb7) {
      console.log(_0x2b9eb7);
    } finally {
      return Promise.resolve(_0xf083a6);
    }
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x54301c();
  } else {
    if (!(await _0x518aac())) {
      return;
    }
    if (!_0x9829ea()) {
      return;
    }
    for (let _0x2a9dbd of _0x6eec9f) {
      await _0x2a9dbd.userTask();
    }
  }
})().catch(_0x4bd426 => console.log(_0x4bd426)).finally(() => _0x227d03.done());
async function _0x54301c() {
  if ($request.url.includes("v1/app/userAppInfo")) {
    try {
      let _0x444afe = $request.url.match(/v1\/app\/userAppInfo\/(\w+)/)[1],
        _0x438157 = $request.headers.Authorization.match(/Bearer (\w+)/)[1],
        _0x1c201a = _0x444afe + "#" + _0x438157,
        _0x4b1ad3 = _0x4575f7[0];
      for (let _0x104a7f of _0x4575f7) {
        if (_0x27221c?.["includes"](_0x104a7f)) {
          _0x4b1ad3 = _0x104a7f;
          break;
        }
      }
      if (!_0x27221c?.["includes"](_0x444afe)) {
        let _0x1cdde7 = _0x27221c ? _0x27221c.split(_0x4b1ad3) : [];
        _0x1cdde7.push(_0x1c201a);
        _0x27221c = _0x1cdde7.join(_0x4b1ad3);
        _0x227d03.setdata(_0x27221c, _0x85d25e);
        _0x227d03.msg("获取第" + _0x1cdde7.length + "个账户CK成功，保存到变量[" + _0x85d25e + "]: " + _0x1c201a);
      } else {
        let _0x4e05c1 = _0x27221c.split(_0x4b1ad3);
        for (let _0x3e947e in _0x4e05c1) {
          console.log(_0x3e947e);
          if (_0x4e05c1[_0x3e947e]?.["includes"](_0x444afe)) {
            _0x4e05c1[_0x3e947e] = _0x1c201a;
            _0x227d03.msg("更新第" + (Number(_0x3e947e) + 1) + "个账户CK成功，保存到变量[" + _0x85d25e + "]: " + _0x1c201a);
            break;
          }
        }
        _0x27221c = _0x4e05c1.join(_0x4b1ad3);
        _0x227d03.setdata(_0x27221c, _0x85d25e);
      }
    } catch (_0x95025d) {}
  }
}
function _0x9829ea() {
  if (_0x27221c) {
    let _0x2e4b43 = _0x4575f7[0];
    for (let _0x4911e3 of _0x4575f7) {
      if (_0x27221c.indexOf(_0x4911e3) > -1) {
        _0x2e4b43 = _0x4911e3;
        break;
      }
    }
    for (let _0x186536 of _0x27221c.split(_0x2e4b43)) {
      if (_0x186536) {
        _0x6eec9f.push(new _0x502821(_0x186536));
      }
    }
    _0xb16581 = _0x6eec9f.length;
  } else {
    console.log("未找到CK: " + _0x85d25e);
    return false;
  }
  console.log("共找到" + _0xb16581 + "个账号");
  return true;
}
async function _0x518aac(_0x1c2ad3 = 0) {
  let _0x2b66b3 = false;
  try {
    let _0x399009 = {
        url: _0x188dcc,
        timeout: 5000
      },
      _0x26ebfd = null,
      _0xedbf3b = await _0x372aac("get", _0x399009);
    if (_0xedbf3b.err) {
      console.log("服务器错误[" + _0xedbf3b?.["resp"]?.["statusCode"] + "]，重试...");
    } else {
      try {
        _0x26ebfd = JSON.parse(_0xedbf3b.resp.body);
        _0x26ebfd = JSON.parse(_0x26ebfd.data.file.data);
      } catch (_0x23bc47) {
        console.log(_0x23bc47);
      }
    }
    if (!_0x26ebfd) {
      if (_0x1c2ad3 < _0x168977) {
        _0x2b66b3 = await _0x518aac(++_0x1c2ad3);
      }
    } else {
      _0x26ebfd?.["commonNotify"] && _0x26ebfd.commonNotify.length > 0 && _0x227d03.logAndNotify(_0x26ebfd.commonNotify.join("\n") + "\n", false);
      _0x26ebfd?.["commonMsg"] && _0x26ebfd.commonMsg.length > 0 && console.log(_0x26ebfd.commonMsg.join("\n") + "\n");
      if (_0x26ebfd[_0x389e40]) {
        let _0xfaf11c = _0x26ebfd[_0x389e40];
        _0xfaf11c.status == 0 ? _0x308bdc >= _0xfaf11c.version ? (_0x2b66b3 = true, console.log(_0xfaf11c.msg[_0xfaf11c.status]), console.log(_0xfaf11c.updateMsg), console.log("现在运行的脚本版本是：" + _0x308bdc + "，最新脚本版本：" + _0xfaf11c.latestVersion)) : console.log(_0xfaf11c.versionMsg) : console.log(_0xfaf11c.msg[_0xfaf11c.status]);
      } else {
        console.log(_0x26ebfd.errorMsg);
      }
    }
  } catch (_0x188ebb) {
    console.log(_0x188ebb);
  } finally {
    return Promise.resolve(_0x2b66b3);
  }
}
async function _0x372aac(_0x1aa3ef, _0x34dcaa) {
  return new Promise(_0x25408a => {
    _0x227d03.send(_0x1aa3ef, _0x34dcaa, async (_0x458f2e, _0x3d8878, _0x328020) => {
      const _0x16d82c = {
        err: _0x458f2e,
        req: _0x3d8878,
        resp: _0x328020
      };
      _0x25408a(_0x16d82c);
    });
  });
}
function _0x3de3a1(_0x55bc85) {
  function _0x28704c(_0x425138, _0x4376c2) {
    return _0x425138 << _0x4376c2 | _0x425138 >>> 32 - _0x4376c2;
  }
  function _0xa83315(_0x592efd, _0x13cab1) {
    var _0x1f626c, _0x251f82, _0x6b2639, _0x4f62cc, _0x603e20;
    _0x6b2639 = 2147483648 & _0x592efd;
    _0x4f62cc = 2147483648 & _0x13cab1;
    _0x1f626c = 1073741824 & _0x592efd;
    _0x251f82 = 1073741824 & _0x13cab1;
    _0x603e20 = (1073741823 & _0x592efd) + (1073741823 & _0x13cab1);
    return _0x1f626c & _0x251f82 ? 2147483648 ^ _0x603e20 ^ _0x6b2639 ^ _0x4f62cc : _0x1f626c | _0x251f82 ? 1073741824 & _0x603e20 ? 3221225472 ^ _0x603e20 ^ _0x6b2639 ^ _0x4f62cc : 1073741824 ^ _0x603e20 ^ _0x6b2639 ^ _0x4f62cc : _0x603e20 ^ _0x6b2639 ^ _0x4f62cc;
  }
  function _0x39c9a6(_0x28775b, _0x308277, _0x4ceaa5) {
    return _0x28775b & _0x308277 | ~_0x28775b & _0x4ceaa5;
  }
  function _0x5057c2(_0x562989, _0x2af477, _0x354e13) {
    return _0x562989 & _0x354e13 | _0x2af477 & ~_0x354e13;
  }
  function _0x48a7df(_0x3be159, _0x309781, _0x56811d) {
    return _0x3be159 ^ _0x309781 ^ _0x56811d;
  }
  function _0x2b1955(_0x122866, _0x1de0a0, _0x22ec3e) {
    return _0x1de0a0 ^ (_0x122866 | ~_0x22ec3e);
  }
  function _0xc59494(_0x53bee2, _0x25f550, _0x30feb2, _0x2b638a, _0x140612, _0x48437a, _0xa2cf17) {
    _0x53bee2 = _0xa83315(_0x53bee2, _0xa83315(_0xa83315(_0x39c9a6(_0x25f550, _0x30feb2, _0x2b638a), _0x140612), _0xa2cf17));
    return _0xa83315(_0x28704c(_0x53bee2, _0x48437a), _0x25f550);
  }
  function _0x2742d7(_0x54e4aa, _0x3ce1dd, _0xa0be5, _0x2d7d2d, _0x535ea0, _0x4c81e6, _0x108ad3) {
    _0x54e4aa = _0xa83315(_0x54e4aa, _0xa83315(_0xa83315(_0x5057c2(_0x3ce1dd, _0xa0be5, _0x2d7d2d), _0x535ea0), _0x108ad3));
    return _0xa83315(_0x28704c(_0x54e4aa, _0x4c81e6), _0x3ce1dd);
  }
  function _0xe0d036(_0x1559fa, _0x146253, _0x1ff016, _0x22ccd8, _0x2394aa, _0x3131d6, _0x3621ae) {
    _0x1559fa = _0xa83315(_0x1559fa, _0xa83315(_0xa83315(_0x48a7df(_0x146253, _0x1ff016, _0x22ccd8), _0x2394aa), _0x3621ae));
    return _0xa83315(_0x28704c(_0x1559fa, _0x3131d6), _0x146253);
  }
  function _0x2748cc(_0x4e795c, _0x4c0f0e, _0x2bd865, _0x4ca6b0, _0x52741d, _0x430167, _0x405457) {
    _0x4e795c = _0xa83315(_0x4e795c, _0xa83315(_0xa83315(_0x2b1955(_0x4c0f0e, _0x2bd865, _0x4ca6b0), _0x52741d), _0x405457));
    return _0xa83315(_0x28704c(_0x4e795c, _0x430167), _0x4c0f0e);
  }
  function _0x12a060(_0xa73886) {
    for (var _0x6cad1f, _0x236c80 = _0xa73886.length, _0x3dbb1e = _0x236c80 + 8, _0xc40aef = (_0x3dbb1e - _0x3dbb1e % 64) / 64, _0x18e4c0 = 16 * (_0xc40aef + 1), _0x4bf985 = new Array(_0x18e4c0 - 1), _0x2b5dfa = 0, _0x7b7cd0 = 0; _0x236c80 > _0x7b7cd0;) {
      _0x6cad1f = (_0x7b7cd0 - _0x7b7cd0 % 4) / 4;
      _0x2b5dfa = _0x7b7cd0 % 4 * 8;
      _0x4bf985[_0x6cad1f] = _0x4bf985[_0x6cad1f] | _0xa73886.charCodeAt(_0x7b7cd0) << _0x2b5dfa;
      _0x7b7cd0++;
    }
    _0x6cad1f = (_0x7b7cd0 - _0x7b7cd0 % 4) / 4;
    _0x2b5dfa = _0x7b7cd0 % 4 * 8;
    _0x4bf985[_0x6cad1f] = _0x4bf985[_0x6cad1f] | 128 << _0x2b5dfa;
    _0x4bf985[_0x18e4c0 - 2] = _0x236c80 << 3;
    _0x4bf985[_0x18e4c0 - 1] = _0x236c80 >>> 29;
    return _0x4bf985;
  }
  function _0x21b094(_0x5a2623) {
    var _0x326765,
      _0x36f6f5,
      _0x4a0053 = "",
      _0x31076d = "";
    for (_0x36f6f5 = 0; 3 >= _0x36f6f5; _0x36f6f5++) {
      _0x326765 = _0x5a2623 >>> 8 * _0x36f6f5 & 255;
      _0x31076d = "0" + _0x326765.toString(16);
      _0x4a0053 += _0x31076d.substr(_0x31076d.length - 2, 2);
    }
    return _0x4a0053;
  }
  function _0x171be3(_0x2e64dd) {
    _0x2e64dd = _0x2e64dd.replace(/\r\n/g, "\n");
    for (var _0x42a8c3 = "", _0x64be7c = 0; _0x64be7c < _0x2e64dd.length; _0x64be7c++) {
      var _0x41a489 = _0x2e64dd.charCodeAt(_0x64be7c);
      128 > _0x41a489 ? _0x42a8c3 += String.fromCharCode(_0x41a489) : _0x41a489 > 127 && 2048 > _0x41a489 ? (_0x42a8c3 += String.fromCharCode(_0x41a489 >> 6 | 192), _0x42a8c3 += String.fromCharCode(63 & _0x41a489 | 128)) : (_0x42a8c3 += String.fromCharCode(_0x41a489 >> 12 | 224), _0x42a8c3 += String.fromCharCode(_0x41a489 >> 6 & 63 | 128), _0x42a8c3 += String.fromCharCode(63 & _0x41a489 | 128));
    }
    return _0x42a8c3;
  }
  var _0x33e93a,
    _0x150ec3,
    _0x48240a,
    _0xdbde83,
    _0x3f8b86,
    _0x1bce72,
    _0x20d24a,
    _0x66340,
    _0x398e9b,
    _0x1417dc = [],
    _0x366f17 = 7,
    _0x562cb0 = 12,
    _0x3d8c71 = 17,
    _0x54e624 = 22,
    _0x366fb1 = 5,
    _0x2d8839 = 9,
    _0x13e3a5 = 14,
    _0x38c251 = 20,
    _0x2da29f = 4,
    _0x3637fa = 11,
    _0x5c9e26 = 16,
    _0x4b0fc7 = 23,
    _0x575853 = 6,
    _0x2b9805 = 10,
    _0x3fa1cd = 15,
    _0x54b04e = 21;
  for (_0x55bc85 = _0x171be3(_0x55bc85), _0x1417dc = _0x12a060(_0x55bc85), _0x1bce72 = 1732584193, _0x20d24a = 4023233417, _0x66340 = 2562383102, _0x398e9b = 271733878, _0x33e93a = 0; _0x33e93a < _0x1417dc.length; _0x33e93a += 16) {
    _0x150ec3 = _0x1bce72;
    _0x48240a = _0x20d24a;
    _0xdbde83 = _0x66340;
    _0x3f8b86 = _0x398e9b;
    _0x1bce72 = _0xc59494(_0x1bce72, _0x20d24a, _0x66340, _0x398e9b, _0x1417dc[_0x33e93a + 0], _0x366f17, 3614090360);
    _0x398e9b = _0xc59494(_0x398e9b, _0x1bce72, _0x20d24a, _0x66340, _0x1417dc[_0x33e93a + 1], _0x562cb0, 3905402710);
    _0x66340 = _0xc59494(_0x66340, _0x398e9b, _0x1bce72, _0x20d24a, _0x1417dc[_0x33e93a + 2], _0x3d8c71, 606105819);
    _0x20d24a = _0xc59494(_0x20d24a, _0x66340, _0x398e9b, _0x1bce72, _0x1417dc[_0x33e93a + 3], _0x54e624, 3250441966);
    _0x1bce72 = _0xc59494(_0x1bce72, _0x20d24a, _0x66340, _0x398e9b, _0x1417dc[_0x33e93a + 4], _0x366f17, 4118548399);
    _0x398e9b = _0xc59494(_0x398e9b, _0x1bce72, _0x20d24a, _0x66340, _0x1417dc[_0x33e93a + 5], _0x562cb0, 1200080426);
    _0x66340 = _0xc59494(_0x66340, _0x398e9b, _0x1bce72, _0x20d24a, _0x1417dc[_0x33e93a + 6], _0x3d8c71, 2821735955);
    _0x20d24a = _0xc59494(_0x20d24a, _0x66340, _0x398e9b, _0x1bce72, _0x1417dc[_0x33e93a + 7], _0x54e624, 4249261313);
    _0x1bce72 = _0xc59494(_0x1bce72, _0x20d24a, _0x66340, _0x398e9b, _0x1417dc[_0x33e93a + 8], _0x366f17, 1770035416);
    _0x398e9b = _0xc59494(_0x398e9b, _0x1bce72, _0x20d24a, _0x66340, _0x1417dc[_0x33e93a + 9], _0x562cb0, 2336552879);
    _0x66340 = _0xc59494(_0x66340, _0x398e9b, _0x1bce72, _0x20d24a, _0x1417dc[_0x33e93a + 10], _0x3d8c71, 4294925233);
    _0x20d24a = _0xc59494(_0x20d24a, _0x66340, _0x398e9b, _0x1bce72, _0x1417dc[_0x33e93a + 11], _0x54e624, 2304563134);
    _0x1bce72 = _0xc59494(_0x1bce72, _0x20d24a, _0x66340, _0x398e9b, _0x1417dc[_0x33e93a + 12], _0x366f17, 1804603682);
    _0x398e9b = _0xc59494(_0x398e9b, _0x1bce72, _0x20d24a, _0x66340, _0x1417dc[_0x33e93a + 13], _0x562cb0, 4254626195);
    _0x66340 = _0xc59494(_0x66340, _0x398e9b, _0x1bce72, _0x20d24a, _0x1417dc[_0x33e93a + 14], _0x3d8c71, 2792965006);
    _0x20d24a = _0xc59494(_0x20d24a, _0x66340, _0x398e9b, _0x1bce72, _0x1417dc[_0x33e93a + 15], _0x54e624, 1236535329);
    _0x1bce72 = _0x2742d7(_0x1bce72, _0x20d24a, _0x66340, _0x398e9b, _0x1417dc[_0x33e93a + 1], _0x366fb1, 4129170786);
    _0x398e9b = _0x2742d7(_0x398e9b, _0x1bce72, _0x20d24a, _0x66340, _0x1417dc[_0x33e93a + 6], _0x2d8839, 3225465664);
    _0x66340 = _0x2742d7(_0x66340, _0x398e9b, _0x1bce72, _0x20d24a, _0x1417dc[_0x33e93a + 11], _0x13e3a5, 643717713);
    _0x20d24a = _0x2742d7(_0x20d24a, _0x66340, _0x398e9b, _0x1bce72, _0x1417dc[_0x33e93a + 0], _0x38c251, 3921069994);
    _0x1bce72 = _0x2742d7(_0x1bce72, _0x20d24a, _0x66340, _0x398e9b, _0x1417dc[_0x33e93a + 5], _0x366fb1, 3593408605);
    _0x398e9b = _0x2742d7(_0x398e9b, _0x1bce72, _0x20d24a, _0x66340, _0x1417dc[_0x33e93a + 10], _0x2d8839, 38016083);
    _0x66340 = _0x2742d7(_0x66340, _0x398e9b, _0x1bce72, _0x20d24a, _0x1417dc[_0x33e93a + 15], _0x13e3a5, 3634488961);
    _0x20d24a = _0x2742d7(_0x20d24a, _0x66340, _0x398e9b, _0x1bce72, _0x1417dc[_0x33e93a + 4], _0x38c251, 3889429448);
    _0x1bce72 = _0x2742d7(_0x1bce72, _0x20d24a, _0x66340, _0x398e9b, _0x1417dc[_0x33e93a + 9], _0x366fb1, 568446438);
    _0x398e9b = _0x2742d7(_0x398e9b, _0x1bce72, _0x20d24a, _0x66340, _0x1417dc[_0x33e93a + 14], _0x2d8839, 3275163606);
    _0x66340 = _0x2742d7(_0x66340, _0x398e9b, _0x1bce72, _0x20d24a, _0x1417dc[_0x33e93a + 3], _0x13e3a5, 4107603335);
    _0x20d24a = _0x2742d7(_0x20d24a, _0x66340, _0x398e9b, _0x1bce72, _0x1417dc[_0x33e93a + 8], _0x38c251, 1163531501);
    _0x1bce72 = _0x2742d7(_0x1bce72, _0x20d24a, _0x66340, _0x398e9b, _0x1417dc[_0x33e93a + 13], _0x366fb1, 2850285829);
    _0x398e9b = _0x2742d7(_0x398e9b, _0x1bce72, _0x20d24a, _0x66340, _0x1417dc[_0x33e93a + 2], _0x2d8839, 4243563512);
    _0x66340 = _0x2742d7(_0x66340, _0x398e9b, _0x1bce72, _0x20d24a, _0x1417dc[_0x33e93a + 7], _0x13e3a5, 1735328473);
    _0x20d24a = _0x2742d7(_0x20d24a, _0x66340, _0x398e9b, _0x1bce72, _0x1417dc[_0x33e93a + 12], _0x38c251, 2368359562);
    _0x1bce72 = _0xe0d036(_0x1bce72, _0x20d24a, _0x66340, _0x398e9b, _0x1417dc[_0x33e93a + 5], _0x2da29f, 4294588738);
    _0x398e9b = _0xe0d036(_0x398e9b, _0x1bce72, _0x20d24a, _0x66340, _0x1417dc[_0x33e93a + 8], _0x3637fa, 2272392833);
    _0x66340 = _0xe0d036(_0x66340, _0x398e9b, _0x1bce72, _0x20d24a, _0x1417dc[_0x33e93a + 11], _0x5c9e26, 1839030562);
    _0x20d24a = _0xe0d036(_0x20d24a, _0x66340, _0x398e9b, _0x1bce72, _0x1417dc[_0x33e93a + 14], _0x4b0fc7, 4259657740);
    _0x1bce72 = _0xe0d036(_0x1bce72, _0x20d24a, _0x66340, _0x398e9b, _0x1417dc[_0x33e93a + 1], _0x2da29f, 2763975236);
    _0x398e9b = _0xe0d036(_0x398e9b, _0x1bce72, _0x20d24a, _0x66340, _0x1417dc[_0x33e93a + 4], _0x3637fa, 1272893353);
    _0x66340 = _0xe0d036(_0x66340, _0x398e9b, _0x1bce72, _0x20d24a, _0x1417dc[_0x33e93a + 7], _0x5c9e26, 4139469664);
    _0x20d24a = _0xe0d036(_0x20d24a, _0x66340, _0x398e9b, _0x1bce72, _0x1417dc[_0x33e93a + 10], _0x4b0fc7, 3200236656);
    _0x1bce72 = _0xe0d036(_0x1bce72, _0x20d24a, _0x66340, _0x398e9b, _0x1417dc[_0x33e93a + 13], _0x2da29f, 681279174);
    _0x398e9b = _0xe0d036(_0x398e9b, _0x1bce72, _0x20d24a, _0x66340, _0x1417dc[_0x33e93a + 0], _0x3637fa, 3936430074);
    _0x66340 = _0xe0d036(_0x66340, _0x398e9b, _0x1bce72, _0x20d24a, _0x1417dc[_0x33e93a + 3], _0x5c9e26, 3572445317);
    _0x20d24a = _0xe0d036(_0x20d24a, _0x66340, _0x398e9b, _0x1bce72, _0x1417dc[_0x33e93a + 6], _0x4b0fc7, 76029189);
    _0x1bce72 = _0xe0d036(_0x1bce72, _0x20d24a, _0x66340, _0x398e9b, _0x1417dc[_0x33e93a + 9], _0x2da29f, 3654602809);
    _0x398e9b = _0xe0d036(_0x398e9b, _0x1bce72, _0x20d24a, _0x66340, _0x1417dc[_0x33e93a + 12], _0x3637fa, 3873151461);
    _0x66340 = _0xe0d036(_0x66340, _0x398e9b, _0x1bce72, _0x20d24a, _0x1417dc[_0x33e93a + 15], _0x5c9e26, 530742520);
    _0x20d24a = _0xe0d036(_0x20d24a, _0x66340, _0x398e9b, _0x1bce72, _0x1417dc[_0x33e93a + 2], _0x4b0fc7, 3299628645);
    _0x1bce72 = _0x2748cc(_0x1bce72, _0x20d24a, _0x66340, _0x398e9b, _0x1417dc[_0x33e93a + 0], _0x575853, 4096336452);
    _0x398e9b = _0x2748cc(_0x398e9b, _0x1bce72, _0x20d24a, _0x66340, _0x1417dc[_0x33e93a + 7], _0x2b9805, 1126891415);
    _0x66340 = _0x2748cc(_0x66340, _0x398e9b, _0x1bce72, _0x20d24a, _0x1417dc[_0x33e93a + 14], _0x3fa1cd, 2878612391);
    _0x20d24a = _0x2748cc(_0x20d24a, _0x66340, _0x398e9b, _0x1bce72, _0x1417dc[_0x33e93a + 5], _0x54b04e, 4237533241);
    _0x1bce72 = _0x2748cc(_0x1bce72, _0x20d24a, _0x66340, _0x398e9b, _0x1417dc[_0x33e93a + 12], _0x575853, 1700485571);
    _0x398e9b = _0x2748cc(_0x398e9b, _0x1bce72, _0x20d24a, _0x66340, _0x1417dc[_0x33e93a + 3], _0x2b9805, 2399980690);
    _0x66340 = _0x2748cc(_0x66340, _0x398e9b, _0x1bce72, _0x20d24a, _0x1417dc[_0x33e93a + 10], _0x3fa1cd, 4293915773);
    _0x20d24a = _0x2748cc(_0x20d24a, _0x66340, _0x398e9b, _0x1bce72, _0x1417dc[_0x33e93a + 1], _0x54b04e, 2240044497);
    _0x1bce72 = _0x2748cc(_0x1bce72, _0x20d24a, _0x66340, _0x398e9b, _0x1417dc[_0x33e93a + 8], _0x575853, 1873313359);
    _0x398e9b = _0x2748cc(_0x398e9b, _0x1bce72, _0x20d24a, _0x66340, _0x1417dc[_0x33e93a + 15], _0x2b9805, 4264355552);
    _0x66340 = _0x2748cc(_0x66340, _0x398e9b, _0x1bce72, _0x20d24a, _0x1417dc[_0x33e93a + 6], _0x3fa1cd, 2734768916);
    _0x20d24a = _0x2748cc(_0x20d24a, _0x66340, _0x398e9b, _0x1bce72, _0x1417dc[_0x33e93a + 13], _0x54b04e, 1309151649);
    _0x1bce72 = _0x2748cc(_0x1bce72, _0x20d24a, _0x66340, _0x398e9b, _0x1417dc[_0x33e93a + 4], _0x575853, 4149444226);
    _0x398e9b = _0x2748cc(_0x398e9b, _0x1bce72, _0x20d24a, _0x66340, _0x1417dc[_0x33e93a + 11], _0x2b9805, 3174756917);
    _0x66340 = _0x2748cc(_0x66340, _0x398e9b, _0x1bce72, _0x20d24a, _0x1417dc[_0x33e93a + 2], _0x3fa1cd, 718787259);
    _0x20d24a = _0x2748cc(_0x20d24a, _0x66340, _0x398e9b, _0x1bce72, _0x1417dc[_0x33e93a + 9], _0x54b04e, 3951481745);
    _0x1bce72 = _0xa83315(_0x1bce72, _0x150ec3);
    _0x20d24a = _0xa83315(_0x20d24a, _0x48240a);
    _0x66340 = _0xa83315(_0x66340, _0xdbde83);
    _0x398e9b = _0xa83315(_0x398e9b, _0x3f8b86);
  }
  var _0x543e69 = _0x21b094(_0x1bce72) + _0x21b094(_0x20d24a) + _0x21b094(_0x66340) + _0x21b094(_0x398e9b);
  return _0x543e69.toLowerCase();
}
function _0x3bc472(_0x568361, _0x416e3b) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x117ca8, _0x1f0a84) {
      this.name = _0x117ca8;
      this.notifyStr = "";
      this.notifyFlag = false;
      this.startTime = new Date().getTime();
      Object.assign(this, _0x1f0a84);
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
    getdata(_0xb016cd) {
      let _0x3eb24b = this.getval(_0xb016cd);
      if (/^@/.test(_0xb016cd)) {
        const [, _0x1761b4, _0x4e7876] = /^@(.*?)\.(.*?)$/.exec(_0xb016cd),
          _0xe26d5e = _0x1761b4 ? this.getval(_0x1761b4) : "";
        if (_0xe26d5e) {
          try {
            const _0x3f7498 = JSON.parse(_0xe26d5e);
            _0x3eb24b = _0x3f7498 ? this.lodash_get(_0x3f7498, _0x4e7876, "") : _0x3eb24b;
          } catch (_0x24a5f5) {
            _0x3eb24b = "";
          }
        }
      }
      return _0x3eb24b;
    }
    setdata(_0x4ac057, _0x21021c) {
      let _0x2a7a5a = !1;
      if (/^@/.test(_0x21021c)) {
        const [, _0x3d5970, _0x366e2a] = /^@(.*?)\.(.*?)$/.exec(_0x21021c),
          _0x3d1976 = this.getval(_0x3d5970),
          _0x162805 = _0x3d5970 ? "null" === _0x3d1976 ? null : _0x3d1976 || "{}" : "{}";
        try {
          const _0x426297 = JSON.parse(_0x162805);
          this.lodash_set(_0x426297, _0x366e2a, _0x4ac057);
          _0x2a7a5a = this.setval(JSON.stringify(_0x426297), _0x3d5970);
        } catch (_0x436e5d) {
          const _0x93e65d = {};
          this.lodash_set(_0x93e65d, _0x366e2a, _0x4ac057);
          _0x2a7a5a = this.setval(JSON.stringify(_0x93e65d), _0x3d5970);
        }
      } else {
        _0x2a7a5a = this.setval(_0x4ac057, _0x21021c);
      }
      return _0x2a7a5a;
    }
    getval(_0x17756b) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x17756b) : this.isQuanX() ? $prefs.valueForKey(_0x17756b) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x17756b]) : this.data && this.data[_0x17756b] || null;
    }
    setval(_0x28ab63, _0x195c19) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x28ab63, _0x195c19) : this.isQuanX() ? $prefs.setValueForKey(_0x28ab63, _0x195c19) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x195c19] = _0x28ab63, this.writedata(), !0) : this.data && this.data[_0x195c19] || null;
    }
    send(_0x539a6d, _0xd7620a, _0x448cfd = () => {}) {
      if (_0x539a6d != "get" && _0x539a6d != "post" && _0x539a6d != "put" && _0x539a6d != "delete") {
        console.log("无效的http方法：" + _0x539a6d);
        return;
      }
      if (_0x539a6d == "get" && _0xd7620a.headers) {
        delete _0xd7620a.headers["Content-Type"];
        delete _0xd7620a.headers["Content-Length"];
      } else {
        if (_0xd7620a.body && _0xd7620a.headers) {
          if (!_0xd7620a.headers["Content-Type"]) {
            _0xd7620a.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0xd7620a.headers = _0xd7620a.headers || {};
          const _0x449c1f = {
            "X-Surge-Skip-Scripting": !1
          };
          Object.assign(_0xd7620a.headers, _0x449c1f);
        }
        let _0x1077e5 = {
          method: _0x539a6d,
          url: _0xd7620a.url,
          headers: _0xd7620a.headers,
          timeout: _0xd7620a.timeout,
          data: _0xd7620a.body
        };
        if (_0x539a6d == "get") {
          delete _0x1077e5.data;
        }
        $axios(_0x1077e5).then(_0x4e0943 => {
          const {
              status: _0x1c96fd,
              request: _0x2cf0ab,
              headers: _0x44de1f,
              data: _0xc61c06
            } = _0x4e0943,
            _0x256209 = {
              statusCode: _0x1c96fd,
              headers: _0x44de1f,
              body: _0xc61c06
            };
          _0x448cfd(null, _0x2cf0ab, _0x256209);
        }).catch(_0x3180f5 => console.log(_0x3180f5));
      } else {
        if (this.isQuanX()) {
          const _0x5219a2 = {
            hints: !1
          };
          _0xd7620a.method = _0x539a6d.toUpperCase();
          this.isNeedRewrite && (_0xd7620a.opts = _0xd7620a.opts || {}, Object.assign(_0xd7620a.opts, _0x5219a2));
          $task.fetch(_0xd7620a).then(_0x34b25e => {
            const {
                statusCode: _0x3cd923,
                request: _0x127f5b,
                headers: _0x4259dd,
                body: _0x3b5323
              } = _0x34b25e,
              _0x26715a = {
                statusCode: _0x3cd923,
                headers: _0x4259dd,
                body: _0x3b5323
              };
            _0x448cfd(null, _0x127f5b, _0x26715a);
          }, _0x25f8ca => _0x448cfd(_0x25f8ca));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
                url: _0x562b04,
                ..._0x696ae8
              } = _0xd7620a,
              _0xf893c5 = {
                followRedirect: false
              };
            this.instance = this.got.extend(_0xf893c5);
            this.instance[_0x539a6d](_0x562b04, _0x696ae8).then(_0x30e363 => {
              const {
                  statusCode: _0x529892,
                  request: _0x13bc4c,
                  headers: _0x3277dc,
                  body: _0x5f434b
                } = _0x30e363,
                _0x3f3611 = {
                  statusCode: _0x529892,
                  headers: _0x3277dc,
                  body: _0x5f434b
                };
              _0x448cfd(null, _0x13bc4c, _0x3f3611);
            }, _0x2d2067 => {
              const {
                message: _0x1179a5,
                request: _0x162f34,
                response: _0x1fb659
              } = _0x2d2067;
              _0x448cfd(_0x1179a5, _0x162f34, _0x1fb659);
            });
          }
        }
      }
    }
    time(_0x13796c, _0x27c89d = null) {
      let _0x49a16e = _0x27c89d ? new Date(_0x27c89d) : new Date(),
        _0x418329 = {
          "M+": _0x49a16e.getMonth() + 1,
          "d+": _0x49a16e.getDate(),
          "h+": _0x49a16e.getHours(),
          "m+": _0x49a16e.getMinutes(),
          "s+": _0x49a16e.getSeconds(),
          "q+": Math.floor((_0x49a16e.getMonth() + 3) / 3),
          S: this.padStr(_0x49a16e.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x13796c) && (_0x13796c = _0x13796c.replace(RegExp.$1, (_0x49a16e.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x11e7f9 in _0x418329) new RegExp("(" + _0x11e7f9 + ")").test(_0x13796c) && (_0x13796c = _0x13796c.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x418329[_0x11e7f9] : ("00" + _0x418329[_0x11e7f9]).substr(("" + _0x418329[_0x11e7f9]).length)));
      return _0x13796c;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr) {
        return;
      }
      let _0x1f42f1 = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x227d03.isNode()) {
        var _0x4bf669 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x4bf669.sendNotify(this.name, _0x1f42f1);
      } else {
        this.msg(_0x1f42f1);
      }
    }
    logAndNotify(_0x4a0f30, _0x741f0a = true) {
      if (_0x741f0a) {
        this.notifyFlag = true;
      }
      console.log(_0x4a0f30);
      this.notifyStr += _0x4a0f30;
      this.notifyStr += "\n";
    }
    logAndNotifyWithTime(_0x19988e, _0x120a21 = true) {
      if (_0x120a21) {
        this.notifyFlag = true;
      }
      let _0x554056 = "[" + this.time("hh:mm:ss.S") + "]" + _0x19988e;
      console.log(_0x554056);
      this.notifyStr += _0x554056;
      this.notifyStr += "\n";
    }
    logWithTime(_0x59893d) {
      console.log("[" + this.time("hh:mm:ss.S") + "]" + _0x59893d);
    }
    msg(_0x454625 = t, _0x9bbed8 = "", _0x333c8b = "", _0x219bab) {
      const _0x41c2a4 = _0x3ed45b => {
        if (!_0x3ed45b) {
          return _0x3ed45b;
        }
        if ("string" == typeof _0x3ed45b) {
          return this.isLoon() ? _0x3ed45b : this.isQuanX() ? {
            "open-url": _0x3ed45b
          } : this.isSurge() ? {
            url: _0x3ed45b
          } : void 0;
        }
        if ("object" == typeof _0x3ed45b) {
          if (this.isLoon()) {
            let _0x51b3f8 = _0x3ed45b.openUrl || _0x3ed45b.url || _0x3ed45b["open-url"],
              _0x9a5a9 = _0x3ed45b.mediaUrl || _0x3ed45b["media-url"];
            const _0x4e1f30 = {
              openUrl: _0x51b3f8,
              mediaUrl: _0x9a5a9
            };
            return _0x4e1f30;
          }
          if (this.isQuanX()) {
            let _0x331b9d = _0x3ed45b["open-url"] || _0x3ed45b.url || _0x3ed45b.openUrl,
              _0x117b71 = _0x3ed45b["media-url"] || _0x3ed45b.mediaUrl;
            const _0x491046 = {
              "open-url": _0x331b9d,
              "media-url": _0x117b71
            };
            return _0x491046;
          }
          if (this.isSurge()) {
            let _0x443f8a = _0x3ed45b.url || _0x3ed45b.openUrl || _0x3ed45b["open-url"];
            const _0xdda560 = {
              url: _0x443f8a
            };
            return _0xdda560;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x454625, _0x9bbed8, _0x333c8b, _0x41c2a4(_0x219bab)) : this.isQuanX() && $notify(_0x454625, _0x9bbed8, _0x333c8b, _0x41c2a4(_0x219bab)));
      let _0xe89908 = ["", "============== 系统通知 =============="];
      _0xe89908.push(_0x454625);
      _0x9bbed8 && _0xe89908.push(_0x9bbed8);
      _0x333c8b && _0xe89908.push(_0x333c8b);
      console.log(_0xe89908.join("\n"));
    }
    getMin(_0x55e119, _0x5eff1e) {
      return _0x55e119 < _0x5eff1e ? _0x55e119 : _0x5eff1e;
    }
    getMax(_0x5f0f86, _0x41d274) {
      return _0x5f0f86 < _0x41d274 ? _0x41d274 : _0x5f0f86;
    }
    padStr(_0x2ecb38, _0x34e06a, _0x461a8e = "0") {
      let _0x2eb5c8 = String(_0x2ecb38),
        _0xea4cc9 = _0x34e06a > _0x2eb5c8.length ? _0x34e06a - _0x2eb5c8.length : 0,
        _0x360c88 = "";
      for (let _0x5f49ac = 0; _0x5f49ac < _0xea4cc9; _0x5f49ac++) {
        _0x360c88 += _0x461a8e;
      }
      _0x360c88 += _0x2eb5c8;
      return _0x360c88;
    }
    json2str(_0x32da44, _0x3ab53f, _0x478a03 = false) {
      let _0x22b56e = [];
      for (let _0x5878e5 of Object.keys(_0x32da44).sort()) {
        let _0x4a7560 = _0x32da44[_0x5878e5];
        if (_0x4a7560 && _0x478a03) {
          _0x4a7560 = encodeURIComponent(_0x4a7560);
        }
        _0x22b56e.push(_0x5878e5 + "=" + _0x4a7560);
      }
      return _0x22b56e.join(_0x3ab53f);
    }
    str2json(_0x3f654f, _0x4bcab5 = false) {
      let _0x3ade7f = {};
      for (let _0x3b6004 of _0x3f654f.split("&")) {
        if (!_0x3b6004) {
          continue;
        }
        let _0x442aa2 = _0x3b6004.indexOf("=");
        if (_0x442aa2 == -1) {
          continue;
        }
        let _0xe7375b = _0x3b6004.substr(0, _0x442aa2),
          _0x55c316 = _0x3b6004.substr(_0x442aa2 + 1);
        if (_0x4bcab5) {
          _0x55c316 = decodeURIComponent(_0x55c316);
        }
        _0x3ade7f[_0xe7375b] = _0x55c316;
      }
      return _0x3ade7f;
    }
    randomPattern(_0x37899b, _0x454153 = "abcdef0123456789") {
      let _0x302895 = "";
      for (let _0x58409c of _0x37899b) {
        if (_0x58409c == "x") {
          _0x302895 += _0x454153.charAt(Math.floor(Math.random() * _0x454153.length));
        } else {
          _0x58409c == "X" ? _0x302895 += _0x454153.charAt(Math.floor(Math.random() * _0x454153.length)).toUpperCase() : _0x302895 += _0x58409c;
        }
      }
      return _0x302895;
    }
    randomString(_0x20a221, _0x4be1c4 = "abcdef0123456789") {
      let _0x314c2f = "";
      for (let _0x5613bf = 0; _0x5613bf < _0x20a221; _0x5613bf++) {
        _0x314c2f += _0x4be1c4.charAt(Math.floor(Math.random() * _0x4be1c4.length));
      }
      return _0x314c2f;
    }
    randomList(_0x5a7ea4) {
      let _0x4497a1 = Math.floor(Math.random() * _0x5a7ea4.length);
      return _0x5a7ea4[_0x4497a1];
    }
    wait(_0x29f5f4) {
      return new Promise(_0x376633 => setTimeout(_0x376633, _0x29f5f4));
    }
    async done(_0x51d1d5 = {}) {
      await this.showmsg();
      const _0x127915 = new Date().getTime(),
        _0x3b7873 = (_0x127915 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x3b7873 + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x51d1d5);
      }
    }
  }(_0x568361, _0x416e3b);
}
