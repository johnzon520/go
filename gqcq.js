/*
广汽传祺 v2.06
扫码注册：https://raw.githubusercontent.com/leafTheFish/DeathNote/main/gqcq.png
微信扫码或短信取token: https://gqcq.leafxxx.win

可以直接用token或用网站的refreshToken, token有效期7天, refreshToken可以一直续期
两种token填写后都可以在token后面加 #我是备注 的方法添加ck备注
refreshToken填写:
在gqcqCookie.txt文件(第一次运行脚本会新建此文件)内填写refreshToken, 每行一个ck
token填写:
app或微信小程序登录后, 捉 next.gacmotor.com 域名下任意包的header里面的apptoken(app)或token(小程序), 填到变量 gqcqCookie 里, 多账号换行或&或@隔开
export gqcqCookie="AT-77777-asdbjkasudsa#我的备注1"
注意如果用APP捉包, 请不要主动退出账号, 否则CK会马上失效

每天跑一到两次就行, 默认抽奖10次, 不做发文章任务和评论任务
想做发文章的设置变量 gqcqPostArt 为1
想做评论任务的设置变量 gqcqComment 为1
想改抽奖次数的设置变量 gqcqDrawTime 为每天需要抽奖的次数(第一次免费)

cron: 25 7,18 * * *
const $ = new Env("广汽传祺");
*/

const _0x44f22e = _0x4ea981("广汽传祺"),
  _0x1552b2 = require("got"),
  _0x4b6f1e = require("fs"),
  _0x2cd72e = require("crypto-js"),
  _0x40cb07 = "gqcq",
  _0x1bd405 = /[\n\&\@]/,
  _0x42a954 = [_0x40cb07 + "Cookie"],
  _0x37c25b = _0x40cb07 + "Cookie.txt",
  _0xaf1b61 = 20000,
  _0x624ac5 = 3,
  _0x2190c3 = parseInt(process.env[_0x40cb07 + "PostArt"] || 0),
  _0x58e0c1 = parseInt(process.env[_0x40cb07 + "Comment"] || 0),
  _0x3f7eb1 = parseInt(process.env[_0x40cb07 + "DrawTime"] || 10);
const _0x21d263 = 2.06,
  _0x180f9e = "gqcq",
  _0x47e76e = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x47be26 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x180f9e + ".json",
  _0x1df9de = "Trumpchi-Release/5.1.0 (iPhone; iOS 16.1.2; Scale/3.00)",
  _0x376de8 = 2000,
  _0x39cd92 = 5,
  _0x88bf60 = "5.1.0",
  _0x58ed14 = "17aaf8118ffb270b766c6d6774317a13",
  _0x421beb = "不知道发些什么好，要不给您劈个叉吧？希望快点拿到积分",
  _0x5c52fb = ["shop-draw"];
let _0x18f49e = [];
class _0x164e83 {
  constructor() {
    this.index = _0x44f22e.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x2b00e1 = {
      limit: 0
    };
    const _0x20a508 = {
      Connection: "keep-alive"
    };
    const _0x532ff7 = {
      retry: _0x2b00e1,
      timeout: _0xaf1b61,
      followRedirect: false,
      headers: _0x20a508
    };
    this.got = _0x1552b2.extend(_0x532ff7);
  }
  get_prefix(_0x30624c = {}) {
    var _0x90fba8 = "",
      _0x1a4d5c = _0x44f22e.userCount.toString().length;
    if (this.index) {
      _0x90fba8 += "账号[" + _0x44f22e.padStr(this.index, _0x1a4d5c) + "]";
    }
    if (this.name) {
      _0x90fba8 += "[" + this.name + "]";
    }
    return _0x90fba8;
  }
  log(_0x82ccb, _0xf6b46a = {}) {
    let _0x29ac5f = this.get_prefix();
    _0x44f22e.log(_0x29ac5f + _0x82ccb, _0xf6b46a);
  }
  async request(_0x56fd39) {
    const _0xc5f3c3 = ["RequestError"],
      _0x449e87 = ["TimeoutError"];
    let _0x56248a = _0x44f22e.copy(_0x56fd39),
      _0x541c37 = {};
    try {
      let _0x3c98ff = null,
        _0x4e882b = 0,
        _0x45b9bc = _0x56248a.fn || _0x56248a.url,
        _0x22e74b = _0x56248a.valid_code || [200];
      if (_0x56248a.form) {
        for (let _0x82e688 in _0x56248a.form) {
          typeof _0x56248a.form[_0x82e688] == "object" && (_0x56248a.form[_0x82e688] = JSON.stringify(_0x56248a.form[_0x82e688]));
        }
      }
      _0x56248a.method = _0x56248a?.["method"]?.["toUpperCase"]() || "GET";
      let _0x174f46 = _0x56248a.got_client || this.got;
      _0x56248a.debug_in && console.log(_0x56248a);
      while (_0x4e882b < _0x624ac5) {
        if (_0x4e882b > 0) {
          await _0x44f22e.wait(_0x376de8 * _0x4e882b);
          let _0x13eb55 = _0x44f22e.get(_0x56248a, "retryer", null);
          if (_0x13eb55) {
            let _0x5a4010 = _0x44f22e.get(_0x56248a, "retryer_opt", {});
            await _0x13eb55(_0x56248a, _0x5a4010);
          }
        }
        _0x4e882b++;
        let _0xfb5f1a = null;
        try {
          let _0x33167d = Number(_0x56248a?.["timeout"]?.["request"] || _0x56248a?.["timeout"] || _0xaf1b61),
            _0x3e1cc1 = false,
            _0x40fd40 = Date.now(),
            _0x3dc178 = _0x174f46(_0x56248a),
            _0x562842 = setTimeout(() => {
              _0x3e1cc1 = true;
              _0x3dc178.cancel();
            }, _0x33167d);
          await _0x3dc178.then(_0x1c23c7 => {
            _0x3c98ff = _0x1c23c7;
          }, _0x4bc08f => {
            _0xfb5f1a = _0x4bc08f;
            _0x3c98ff = _0x4bc08f.response;
          }).finally(() => clearTimeout(_0x562842));
          let _0x379e8b = Date.now(),
            _0x81f363 = _0x379e8b - _0x40fd40,
            _0x16aa7b = _0x3c98ff?.["statusCode"] || null;
          if (_0x3e1cc1 || _0x449e87.includes(_0xfb5f1a?.["name"])) {
            let _0x5e4416 = "";
            _0xfb5f1a?.["code"] && (_0x5e4416 += "(" + _0xfb5f1a.code, _0xfb5f1a?.["event"] && (_0x5e4416 += ":" + _0xfb5f1a.event), _0x5e4416 += ")");
            this.log("[" + _0x45b9bc + "]请求超时" + _0x5e4416 + "(" + _0x81f363 + "ms)，重试第" + _0x4e882b + "次");
          } else {
            if (_0xc5f3c3.includes(_0xfb5f1a?.["name"])) {
              this.log("[" + _0x45b9bc + "]请求错误(" + _0xfb5f1a.code + ")(" + _0x81f363 + "ms)，重试第" + _0x4e882b + "次");
            } else {
              if (_0x16aa7b) {
                _0xfb5f1a && !_0x22e74b.includes(_0x16aa7b) && this.log("请求[" + _0x45b9bc + "]返回[" + _0x16aa7b + "]");
              } else {
                let {
                  code = "unknown",
                  name = "unknown"
                } = _0xfb5f1a || {};
                this.log("请求[" + _0x45b9bc + "]错误[" + code + "][" + name + "]");
              }
              break;
            }
          }
        } catch (_0x4c28f0) {
          this.log("[" + _0x45b9bc + "]请求错误(" + _0x4c28f0.message + ")，重试第" + _0x4e882b + "次");
        }
      }
      if (_0x3c98ff === null || _0x3c98ff === undefined) {
        const _0x14d19a = {
          statusCode: -1,
          headers: null,
          result: null
        };
        return _0x14d19a;
      }
      let {
          statusCode: _0x33dbe7,
          headers: _0x216fff,
          body: _0x25a375
        } = _0x3c98ff,
        _0xbbb5c1 = _0x44f22e.get(_0x56248a, "decode_json", true);
      if (_0x25a375 && _0xbbb5c1) {
        try {
          _0x25a375 = JSON.parse(_0x25a375);
        } catch {}
      }
      const _0x44316e = {
        statusCode: _0x33dbe7,
        headers: _0x216fff,
        result: _0x25a375
      };
      _0x541c37 = _0x44316e;
      _0x56248a.debug_out && console.log(_0x541c37);
    } catch (_0x9ee8cf) {
      console.log(_0x9ee8cf);
    } finally {
      return _0x541c37;
    }
  }
}
let _0x1297ca = new _0x164e83();
function _0x187ef7() {
  let _0x5b68f1 = [];
  for (let _0x3d8356 of _0x44f22e.userList.filter(_0x3ec9a8 => _0x3ec9a8.refreshToken)) {
    let _0x3a56db = _0x3d8356.refreshToken;
    if (_0x3d8356.remark) {
      _0x3a56db += "#" + _0x3d8356.remark;
    }
    _0x5b68f1.push(_0x3a56db);
  }
  if (_0x5b68f1.length) {
    const _0x1f8621 = {
      flag: "w",
      encoding: "utf-8"
    };
    _0x4b6f1e.writeFileSync("./" + _0x37c25b, _0x5b68f1.join("\n"), _0x1f8621);
    _0x44f22e.log("已更新CK文件");
  }
}
class _0x121813 extends _0x164e83 {
  constructor(_0x488d16) {
    super();
    let _0x5239d0 = _0x488d16?.["split"]("#"),
      _0x55c79d = _0x5239d0?.[0] || "";
    _0x55c79d.startsWith("RT-") ? (this.token = _0x55c79d.replace("RT", "AT"), this.refreshToken = _0x55c79d) : this.token = _0x55c79d;
    this.remark = _0x5239d0?.[1] || null;
    this.name = this.remark;
    this.got = this.got.extend({
      headers: {
        "User-Agent": _0x1df9de,
        appToken: this?.["token"]
      }
    });
  }
  get_sign() {
    let _0xe8b644 = Date.now(),
      _0x24776e = _0x44f22e.randomString(6, "123456789"),
      _0x3263e1 = "signature" + _0x24776e + _0xe8b644 + _0x58ed14 + _0x88bf60,
      _0x4dba93 = _0x2cd72e.MD5(_0x3263e1).toString();
    const _0x58ea06 = {
      reqTs: _0xe8b644,
      version: _0x88bf60,
      reqNonc: _0x24776e,
      reqSign: _0x4dba93
    };
    return _0x58ea06;
  }
  async user_info(_0x5c7a70 = {}) {
    let _0x4fe7c2 = false;
    try {
      let _0x44176f = {
          fn: "user_info",
          method: "post",
          url: "https://next.gacmotor.com/mall/customer-app/customer/user/info",
          headers: this.get_sign(),
          json: {}
        },
        {
          result: _0x1c38f4,
          statusCode: _0x386d08
        } = await this.request(_0x44f22e.copy(_0x44176f)),
        _0x50cf9f = _0x44f22e.get(_0x1c38f4, "code", _0x386d08);
      if (_0x50cf9f == "0000") {
        let {
          mobile: _0x53f7eb,
          nickname: _0x9ceeb3,
          id: _0x19a699
        } = _0x1c38f4?.["data"];
        this.name = _0x53f7eb;
        this.valid = true;
        _0x4fe7c2 = true;
      } else {
        let _0x1c4ab4 = _0x44f22e.get(_0x1c38f4, "msg", "");
        const _0xdba8d3 = {
          notify: true
        };
        this.log("获取账号信息失败[" + _0x50cf9f + "]: " + _0x1c4ab4, _0xdba8d3);
      }
    } catch (_0x333515) {
      console.log(_0x333515);
    } finally {
      return _0x4fe7c2;
    }
  }
  async refresh_ck(_0x597b32 = {}) {
    let _0x3419d5 = false;
    try {
      let _0x4707bb = {
          fn: "refresh_ck",
          method: "post",
          url: "https://next.gacmotor.com/app/app-api/login/refreshAt",
          headers: this.get_sign(),
          json: {
            refreshToken: this.refreshToken
          }
        },
        {
          result: _0x5b63db,
          statusCode: _0x495ffd
        } = await this.request(_0x44f22e.copy(_0x4707bb)),
        _0x50293c = _0x44f22e.get(_0x5b63db, "resultCode", _0x495ffd);
      if (_0x50293c == 0) {
        let {
          accessToken = "",
          refreshToken = ""
        } = _0x5b63db?.["data"];
        this.token = accessToken;
        this.refreshToken = refreshToken;
        this.got = this.got.extend({
          headers: {
            appToken: this?.["token"]
          }
        });
        _0x3419d5 = true;
        this.log("刷新token成功");
        _0x187ef7();
      } else {
        let _0x67cd0c = _0x44f22e.get(_0x5b63db, "resultMsg", "");
        const _0x2aaa96 = {
          notify: true
        };
        this.log("刷新token失败[" + _0x50293c + "]: " + _0x67cd0c, _0x2aaa96);
      }
    } catch (_0xa5b390) {
      console.log(_0xa5b390);
    } finally {
      return _0x3419d5;
    }
  }
  async getLoginUser(_0x57c1ba = {}) {
    let _0x473ae1 = false;
    try {
      let _0xc14caa = {
          fn: "getLoginUser",
          method: "post",
          url: "https://next.gacmotor.com/app/app-api/user/getLoginUser",
          headers: this.get_sign()
        },
        {
          result: _0x5d16f0,
          statusCode: _0x5c54ff
        } = await this.request(_0x44f22e.copy(_0xc14caa)),
        _0x109086 = _0x44f22e.get(_0x5d16f0, "resultCode", _0x5c54ff);
      if (_0x109086 == 0) {
        let {
          mobile = "",
          nickname = "",
          userOneId = ""
        } = _0x5d16f0?.["data"];
        this.name = this.remark || mobile || nickname || userOneId;
        this.valid = true;
        _0x473ae1 = true;
      } else {
        let _0x313e4b = _0x44f22e.get(_0x5d16f0, "resultMsg", "");
        const _0x4519d2 = {
          notify: true
        };
        this.log("获取账号信息失败[" + _0x109086 + "]: " + _0x313e4b, _0x4519d2);
      }
    } catch (_0x3557d5) {
      console.log(_0x3557d5);
    } finally {
      return _0x473ae1;
    }
  }
  async signStatus(_0x45c69b = {}) {
    try {
      let _0x5d9d64 = {
          fn: "signStatus",
          method: "get",
          url: "https://next.gacmotor.com/app/app-api/sign/signStatus",
          headers: this.get_sign()
        },
        {
          result: _0x191c70,
          statusCode: _0x2f465a
        } = await this.request(_0x44f22e.copy(_0x5d9d64)),
        _0x2da197 = _0x44f22e.get(_0x191c70, "resultCode", _0x2f465a);
      if (_0x2da197 == 0) {
        this.log("今天" + (_0x191c70?.["data"] ? "已" : "未") + "签到");
        !_0x191c70?.["data"] && (await this.doSign());
      } else {
        let _0x4f84c9 = _0x44f22e.get(_0x191c70, "resultMsg", "");
        this.log("获取签到信息失败[" + _0x2da197 + "]: " + _0x4f84c9);
      }
    } catch (_0x2749b4) {
      console.log(_0x2749b4);
    }
  }
  async doSign(_0x1d83c6 = {}) {
    try {
      let _0x672c5c = {
          fn: "doSign",
          method: "get",
          url: "https://next.gacmotor.com/app/app-api/sign/submit",
          headers: this.get_sign()
        },
        {
          result: _0x5f3cd5,
          statusCode: _0x4ccba4
        } = await this.request(_0x44f22e.copy(_0x672c5c)),
        _0x3c5960 = _0x44f22e.get(_0x5f3cd5, "resultCode", _0x4ccba4);
      if (_0x3c5960 == 0) {
        let {
          dayCount: _0x1831a4,
          operationValue: _0x2b20c9
        } = _0x5f3cd5?.["data"];
        this.log("签到获得" + _0x2b20c9 + "豆, 已连续签到" + _0x1831a4 + "天");
      } else {
        let _0x26a0b9 = _0x44f22e.get(_0x5f3cd5, "resultMsg", "");
        this.log("签到失败[" + _0x3c5960 + "]: " + _0x26a0b9);
      }
    } catch (_0x52b078) {
      console.log(_0x52b078);
    }
  }
  async getUserGdou(_0x1196e1 = {}) {
    try {
      let _0x3744cf = {
          fn: "getUserGdou",
          method: "get",
          url: "https://next.gacmotor.com/app/app-api/user/getUserGdou",
          headers: this.get_sign()
        },
        {
          result: _0x274aff,
          statusCode: _0x593f70
        } = await this.request(_0x44f22e.copy(_0x3744cf)),
        _0x4f4d96 = _0x44f22e.get(_0x274aff, "resultCode", _0x593f70);
      if (_0x4f4d96 == 0) {
        const _0x11d131 = {
          notify: true
        };
        this.log("G豆: " + (_0x274aff?.["data"] || 0), _0x11d131);
      } else {
        let _0x20b33f = _0x44f22e.get(_0x274aff, "resultMsg", "");
        const _0x22cd79 = {
          notify: true
        };
        this.log("查询G豆失败[" + _0x4f4d96 + "]: " + _0x20b33f, _0x22cd79);
      }
    } catch (_0x44feb8) {
      console.log(_0x44feb8);
    }
  }
  async applatestlist(_0x5e0d7d = {}) {
    try {
      let _0x51a577 = {
          fn: "applatestlist",
          method: "get",
          url: "https://next.gacmotor.com/app/community-api/community/api/post/applatestlist",
          headers: this.get_sign(),
          searchParams: {
            pageNum: _0x44f22e.get(_0x5e0d7d, "pageNum", 1),
            pageSize: _0x44f22e.get(_0x5e0d7d, "pageSize", 10)
          }
        },
        {
          result: _0x3fefea,
          statusCode: _0x56cafa
        } = await this.request(_0x44f22e.copy(_0x51a577)),
        _0x4b3b80 = _0x44f22e.get(_0x3fefea, "resultCode", _0x56cafa);
      if (_0x4b3b80 == 0) {
        _0x18f49e = _0x3fefea?.["data"]?.["list"] || null;
        this.log("获取到" + ret.length + "篇文章信息");
      } else {
        let _0x5120b8 = _0x44f22e.get(_0x3fefea, "resultMsg", "");
        this.log("查询文章列表失败[" + _0x4b3b80 + "]: " + _0x5120b8);
      }
    } catch (_0x40595a) {
      console.log(_0x40595a);
    }
  }
  async getUserMissionList(_0x3d627f = 1, _0x2dfc2e = {}) {
    try {
      const _0x17be78 = {
        place: _0x3d627f
      };
      let _0x4f544e = {
          fn: "getUserMissionList",
          method: "get",
          url: "https://next.gacmotor.com/app/community-api/user/mission/getUserMissionList",
          headers: this.get_sign(),
          searchParams: _0x17be78
        },
        {
          result: _0x272fe1,
          statusCode: _0x2663d6
        } = await this.request(_0x44f22e.copy(_0x4f544e)),
        _0x360465 = _0x44f22e.get(_0x272fe1, "resultCode", _0x2663d6);
      if (_0x360465 == 0) {
        let _0xfc8801 = _0x272fe1?.["data"] || [],
          _0x650480 = 0,
          _0x19e879 = 0;
        for (let _0x551326 of _0xfc8801.filter(_0x357aca => _0x357aca.finishedNum < _0x357aca.total)) {
          for (let _0x212762 = _0x551326.finishedNum; _0x212762 < _0x551326.total; _0x212762++) {
            switch (_0x551326.itemType) {
              case 1:
                {
                  _0x650480 = _0x551326.total - _0x551326.finishedNum;
                  break;
                }
              case 2:
                {
                  _0x19e879 = _0x551326.total - _0x551326.finishedNum;
                  break;
                }
              case 3:
                {
                  if (!_0x18f49e) {
                    _0x18f49e = await this.applatestlist();
                  }
                  if (_0x18f49e) {
                    let _0x293d97 = _0x44f22e.randomList(_0x18f49e)?.["itemId"] || "25160483";
                    await this.task_forward(_0x293d97);
                  }
                  break;
                }
            }
          }
        }
        if (_0x2190c3) {
          let _0x34c9ca = _0x650480,
            _0x158f3e = false;
          _0x58e0c1 ? (_0x34c9ca = Math.max(_0x650480, _0x19e879), _0x158f3e = true) : this.log("不做评论任务");
          for (let _0x2c397c = 0; _0x2c397c < _0x34c9ca; _0x2c397c++) {
            await this.task_art_post(_0x158f3e);
          }
        } else {
          this.log("不做发文章任务");
          if (_0x58e0c1) {
            if (_0x19e879) {
              if (!_0x18f49e) {
                _0x18f49e = await this.applatestlist();
              }
              if (_0x18f49e) {
                for (let _0x1e193e = 0; _0x1e193e < _0x19e879; _0x1e193e++) {
                  let _0x22333c = _0x44f22e.randomList(_0x18f49e)?.["itemId"] || "25160484";
                  await this.task_comment_add(_0x22333c);
                }
              }
            }
          } else {
            this.log("不做评论任务");
          }
        }
      } else {
        let _0x8e5e71 = _0x44f22e.get(_0x272fe1, "resultMsg", "");
        this.log("查询任务列表失败[" + _0x360465 + "]: " + _0x8e5e71);
      }
    } catch (_0x20aba8) {
      console.log(_0x20aba8);
    }
  }
  async task_forward(_0x1bec9d, _0x59f250 = {}) {
    try {
      const _0x406579 = {
        postId: _0x1bec9d
      };
      let _0x4f9f93 = {
          fn: "task_forward",
          method: "post",
          url: "https://next.gacmotor.com/app/community-api/community/api/post/forward",
          headers: this.get_sign(),
          json: _0x406579
        },
        {
          result: _0x36e125,
          statusCode: _0x18682e
        } = await this.request(_0x44f22e.copy(_0x4f9f93)),
        _0x159d53 = _0x44f22e.get(_0x36e125, "resultCode", _0x18682e);
      if (_0x159d53 == 0) {
        this.log("转发文章[" + _0x1bec9d + "]成功");
      } else {
        let _0x5dc971 = _0x44f22e.get(_0x36e125, "resultMsg", "");
        this.log("转发文章[" + _0x1bec9d + "]失败[" + _0x159d53 + "]: " + _0x5dc971);
      }
    } catch (_0x2a7d78) {
      console.log(_0x2a7d78);
    }
  }
  async tiangou_comment(_0xa639e = {}) {
    let _0x156e7e = _0x421beb;
    try {
      let _0x5b6b6d = {
          fn: "tiangou_comment",
          method: "get",
          url: "https://api.oick.cn/dog/api.php"
        },
        {
          result: _0x2d5aec,
          statusCode: _0x32b786
        } = await this.request(_0x44f22e.copy(_0x5b6b6d));
      _0x32b786 == 200 ? _0x156e7e = _0x2d5aec.replace(/"/g, "") : this.log("获取舔狗语录失败");
    } catch (_0x361229) {
      console.log(_0x361229);
    } finally {
      return _0x156e7e;
    }
  }
  async task_comment_add(_0x475ded, _0x1353af = {}) {
    try {
      let _0x91fa57 = await this.tiangou_comment();
      const _0x4c2d64 = {
        commentType: 0,
        postId: _0x475ded,
        commentContent: _0x91fa57,
        isReplyComment: 1,
        commentImg: ""
      };
      let _0x536fb8 = {
          fn: "task_comment_add",
          method: "post",
          url: "https://next.gacmotor.com/app/community-api/community/api/comment/add",
          headers: this.get_sign(),
          json: _0x4c2d64
        },
        {
          result: _0x1ba9b3,
          statusCode: _0x5ef77f
        } = await this.request(_0x44f22e.copy(_0x536fb8)),
        _0x5ad4fa = _0x44f22e.get(_0x1ba9b3, "resultCode", _0x5ef77f);
      if (_0x5ad4fa == 0) {
        let _0x4231b8 = _0x1ba9b3?.["data"] || "";
        this.log("评论文章[" + _0x475ded + "]成功: " + _0x4231b8);
        _0x4231b8 && (await this.task_comment_delete(_0x4231b8));
      } else {
        let _0x268792 = _0x44f22e.get(_0x1ba9b3, "resultMsg", "");
        this.log("评论文章[" + _0x475ded + "]失败[" + _0x5ad4fa + "]: " + _0x268792);
      }
    } catch (_0x399f03) {
      console.log(_0x399f03);
    }
  }
  async task_comment_delete(_0x34d7ed, _0x2cfe61 = {}) {
    try {
      const _0x4c7326 = {
        commentId: _0x34d7ed
      };
      let _0x270d27 = {
          fn: "task_comment_delete",
          method: "post",
          url: "https://next.gacmotor.com/app/community-api/community/api/comment/delete",
          headers: this.get_sign(),
          json: _0x4c7326
        },
        {
          result: _0x224b7d,
          statusCode: _0x29c7a0
        } = await this.request(_0x44f22e.copy(_0x270d27)),
        _0x352f94 = _0x44f22e.get(_0x224b7d, "resultCode", _0x29c7a0);
      if (_0x352f94 == 0) {
        this.log("删除评论[" + _0x34d7ed + "]成功");
      } else {
        let _0x94bede = _0x44f22e.get(_0x224b7d, "resultMsg", "");
        this.log("删除评论[" + _0x34d7ed + "]失败[" + _0x352f94 + "]: " + _0x94bede);
      }
    } catch (_0x445bb0) {
      console.log(_0x445bb0);
    }
  }
  async task_art_post(_0xd40fe9 = false, _0x3e7f6b = {}) {
    try {
      let _0x44a9e4 = await this.tiangou_comment(),
        _0x4bb37e = {
          fn: "task_art_post",
          method: "post",
          url: "https://next.gacmotor.com/app/community-api/community/api/post/appsavepost",
          headers: this.get_sign(),
          json: {
            contentWords: _0x44a9e4,
            channelInfoId: "",
            contentImgNums: "1",
            coverImg: "https://pic-gsp.gacmotor.com/app/edad15f4-1545-441e-b320-f47cbc5c944b_TM.jpg",
            customCover: "https://pic-gsp.gacmotor.com/app/45eb79d0-db30-4304-9bce-018ce89de150_T.jpg",
            postType: "2",
            topicId: "",
            columnId: "",
            postContent: JSON.stringify([{
              text: _0x44a9e4
            }])
          }
        },
        {
          result: _0x1c10c9,
          statusCode: _0x3fa2f4
        } = await this.request(_0x44f22e.copy(_0x4bb37e)),
        _0x3466b7 = _0x44f22e.get(_0x1c10c9, "resultCode", _0x3fa2f4);
      if (_0x3466b7 == 0) {
        let _0x48d160 = _0x1c10c9?.["data"]?.["postId"] || "";
        this.log("发表文章成功: " + _0x48d160);
        if (_0x48d160) {
          if (_0xd40fe9) {
            await this.task_comment_add(_0x48d160);
          }
          await this.task_art_delete(_0x48d160);
        }
      } else {
        let _0x596ae4 = _0x44f22e.get(_0x1c10c9, "resultMsg", "");
        this.log("发表文章失败[" + _0x3466b7 + "]: " + _0x596ae4);
      }
    } catch (_0x5c2038) {
      console.log(_0x5c2038);
    }
  }
  async task_art_delete(_0x21e9ec, _0x1dec77 = {}) {
    try {
      const _0x3ee9d7 = {
        postId: _0x21e9ec
      };
      let _0xc3d4ed = {
          fn: "task_art_delete",
          method: "post",
          url: "https://next.gacmotor.com/app/community-api/community/api/post/delete",
          headers: this.get_sign(),
          json: _0x3ee9d7
        },
        {
          result: _0x1c400c,
          statusCode: _0x150eb5
        } = await this.request(_0x44f22e.copy(_0xc3d4ed)),
        _0x34c5b0 = _0x44f22e.get(_0x1c400c, "resultCode", _0x150eb5);
      if (_0x34c5b0 == 0) {
        this.log("删除文章[" + _0x21e9ec + "]成功");
      } else {
        let _0x291d2b = _0x44f22e.get(_0x1c400c, "resultMsg", "");
        this.log("删除文章[" + _0x21e9ec + "]失败[" + _0x34c5b0 + "]: " + _0x291d2b);
      }
    } catch (_0x8252ee) {
      console.log(_0x8252ee);
    }
  }
  async draw_getchances(_0x3ee381, _0x19ceb8 = {}) {
    try {
      const _0x1ea211 = {
        activityCode: _0x3ee381
      };
      let _0x4e6ed1 = {
          fn: "draw_getchances",
          method: "get",
          url: "https://next.gacmotor.com/app/activity/shopDraw/getchances",
          headers: this.get_sign(),
          searchParams: _0x1ea211
        },
        {
          result: _0x2f4b40,
          statusCode: _0xdd28ff
        } = await this.request(_0x44f22e.copy(_0x4e6ed1)),
        _0x1d3892 = _0x44f22e.get(_0x2f4b40, "resultCode", _0xdd28ff);
      if (_0x1d3892 == 0) {
        let _0x5ea49d = _0x2f4b40?.["data"] || 0,
          _0x41251f = 10 - _0x5ea49d,
          _0x2c1d3f = Math.min(_0x5ea49d, _0x3f7eb1 - _0x41251f);
        this.log("抽奖[" + _0x3ee381 + "]还有" + _0x5ea49d + "次机会, 去抽" + _0x2c1d3f + "次");
        while (_0x2c1d3f-- > 0) {
          await this.luckyDraw(_0x3ee381);
        }
      } else {
        let _0x3bd790 = _0x44f22e.get(_0x2f4b40, "resultMsg", "");
        this.log("查询[" + _0x3ee381 + "]抽奖次数失败[" + _0x1d3892 + "]: " + _0x3bd790);
      }
    } catch (_0x546ca4) {
      console.log(_0x546ca4);
    }
  }
  async luckyDraw(_0xb5d264, _0x251509 = {}) {
    try {
      const _0x3bb3ce = {
        activityCode: _0xb5d264,
        repeatcheck: true
      };
      let _0x528078 = {
          fn: "luckyDraw",
          method: "post",
          url: "https://next.gacmotor.com/app/activity/shopDraw/luckyDraw",
          headers: this.get_sign(),
          searchParams: _0x3bb3ce
        },
        {
          result: _0x5e4e27,
          statusCode: _0x8ab9b3
        } = await this.request(_0x44f22e.copy(_0x528078)),
        _0x55a73c = _0x44f22e.get(_0x5e4e27, "resultCode", _0x8ab9b3);
      if (_0x55a73c == 0) {
        let {
          medalName: _0x2e12e0
        } = _0x5e4e27?.["data"];
        const _0xa9297d = {
          notify: true
        };
        this.log("抽奖: " + (_0x2e12e0 || "空气"), _0xa9297d);
      } else {
        let _0x51481f = _0x44f22e.get(_0x5e4e27, "resultMsg", "");
        this.log("抽奖失败[" + _0x55a73c + "]: " + _0x51481f);
      }
    } catch (_0x36a1f7) {
      console.log(_0x36a1f7);
    }
  }
  async userTask(_0xd29dc0 = {}) {
    if (this.refreshToken) {
      if (!(await this.refresh_ck())) {
        return;
      }
    }
    if (!(await this.getLoginUser())) {
      return;
    }
    await this.signStatus();
    await this.getUserMissionList();
    for (let _0x364a34 of _0x5c52fb) {
      await this.draw_getchances(_0x364a34);
    }
    await this.getUserGdou();
  }
}
!(async () => {
  if (!(await _0x92d5ef())) {
    return;
  }
  _0x44f22e.read_env(_0x121813);
  _0x44f22e.log("设置了" + (_0x2190c3 ? "自动做" : "不做") + "发文章任务");
  _0x44f22e.log("设置了" + (_0x58e0c1 ? "自动做" : "不做") + "评论任务");
  _0x44f22e.log("设置了每个号自动抽奖" + _0x3f7eb1 + "次\n");
  for (let _0x1d1368 of _0x44f22e.userList) {
    await _0x1d1368.userTask();
  }
})().catch(_0x2e6c76 => _0x44f22e.log(_0x2e6c76)).finally(() => _0x44f22e.exitNow());
async function _0x92d5ef(_0x2927a3 = 0) {
  let _0x2ada58 = true;
  try {
    let _0x419a66 = {
        fn: "auth",
        method: "get",
        url: _0x47e76e,
        timeout: 20000
      },
      {
        statusCode: _0x51dc1c,
        result: _0x49064b
      } = await _0x1297ca.request(_0x419a66);
    if (_0x51dc1c != 200) {
      _0x2927a3++ < _0x39cd92 && (_0x2ada58 = await _0x92d5ef(_0x2927a3));
      return _0x2ada58;
    }
    if (_0x49064b?.["code"] == 0) {
      _0x49064b = JSON.parse(_0x49064b.data.file.data);
      if (_0x49064b?.["commonNotify"] && _0x49064b.commonNotify.length > 0) {
        const _0x1a0562 = {
          notify: true
        };
        _0x44f22e.log(_0x49064b.commonNotify.join("\n") + "\n", _0x1a0562);
      }
      _0x49064b?.["commonMsg"] && _0x49064b.commonMsg.length > 0 && _0x44f22e.log(_0x49064b.commonMsg.join("\n") + "\n");
      if (_0x49064b[_0x180f9e]) {
        let _0xe922df = _0x49064b[_0x180f9e];
        _0xe922df.status == 0 ? _0x21d263 >= _0xe922df.version ? (_0x2ada58 = true, _0x44f22e.log(_0xe922df.msg[_0xe922df.status]), _0x44f22e.log(_0xe922df.updateMsg), _0x44f22e.log("现在运行的脚本版本是：" + _0x21d263 + "，最新脚本版本：" + _0xe922df.latestVersion)) : _0x44f22e.log(_0xe922df.versionMsg) : _0x44f22e.log(_0xe922df.msg[_0xe922df.status]);
      } else {
        _0x44f22e.log(_0x49064b.errorMsg);
      }
    } else {
      _0x2927a3++ < _0x39cd92 && (_0x2ada58 = await _0x92d5ef(_0x2927a3));
    }
  } catch (_0x385c39) {
    _0x44f22e.log(_0x385c39);
  } finally {
    return _0x2ada58;
  }
}
async function _0xbb5545() {
  let _0x4de5b1 = true;
  try {
    let _0x4fa5ef = {
        fn: "auth",
        method: "get",
        url: _0x47be26
      },
      {
        statusCode: _0x5e9d0c,
        result: _0x511b72
      } = await _0x1297ca.request(_0x4fa5ef);
    if (_0x5e9d0c != 200) {
      return Promise.resolve();
    }
    if (_0x511b72?.["code"] == 0) {
      _0x511b72 = JSON.parse(_0x511b72.data.file.data);
      ownerId = _0x511b72?.["ownerId"] || ownerId;
      share_app = _0x511b72?.["share_app"] || share_app;
      for (let _0x563aca of _0x511b72.chdTask.simple) {
        !task_chd_simple_list.filter(_0x430bc5 => _0x430bc5.missionDefId == _0x563aca.missionDefId && _0x430bc5.missionCollectionId == _0x563aca.missionCollectionId).length && task_chd_simple_list.push(_0x563aca);
      }
      for (let _0x11a4a8 of _0x511b72.chdTask.pageview) {
        !task_chd_pageview_list.filter(_0x242229 => _0x242229.missionDefId == _0x11a4a8.missionDefId && _0x242229.missionCollectionId == _0x11a4a8.missionCollectionId).length && task_chd_pageview_list.push(_0x11a4a8);
      }
      for (let _0x18eea0 of _0x511b72.tkjTask.simple) {
        !task_tkj_simple_list.filter(_0x41df67 => _0x41df67.missionDefId == _0x18eea0.missionDefId && _0x41df67.missionCollectionId == _0x18eea0.missionCollectionId).length && task_tkj_simple_list.push(_0x18eea0);
      }
      for (let _0x389829 of _0x511b72.tkjTask.pageview) {
        !task_tkj_pageview_list.filter(_0x6f3d5c => _0x6f3d5c.missionDefId == _0x389829.missionDefId && _0x6f3d5c.missionCollectionId == _0x389829.missionCollectionId).length && task_tkj_pageview_list.push(_0x389829);
      }
    }
  } catch (_0x562001) {
    _0x44f22e.log(_0x562001);
  } finally {
    return Promise.resolve(_0x4de5b1);
  }
}
function _0x4ea981(_0x1547bf) {
  return new class {
    constructor(_0x40b4c0) {
      this.name = _0x40b4c0;
      this.startTime = Date.now();
      const _0x2a99a7 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x2a99a7);
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
    log(_0x5bea03, _0x2d64f6 = {}) {
      let _0x2a3926 = {
        console: true
      };
      Object.assign(_0x2a3926, _0x2d64f6);
      if (_0x2a3926.time) {
        let _0x2f2115 = _0x2a3926.fmt || "hh:mm:ss";
        _0x5bea03 = "[" + this.time(_0x2f2115) + "]" + _0x5bea03;
      }
      if (_0x2a3926.notify) {
        this.notifyStr.push(_0x5bea03);
      }
      if (_0x2a3926.console) {
        console.log(_0x5bea03);
      }
    }
    get(_0x336ec6, _0x5b94df, _0x2900f9 = "") {
      let _0x3b7561 = _0x2900f9;
      _0x336ec6?.["hasOwnProperty"](_0x5b94df) && (_0x3b7561 = _0x336ec6[_0x5b94df]);
      return _0x3b7561;
    }
    pop(_0x2c3096, _0x2e8353, _0x256819 = "") {
      let _0x362698 = _0x256819;
      _0x2c3096?.["hasOwnProperty"](_0x2e8353) && (_0x362698 = _0x2c3096[_0x2e8353], delete _0x2c3096[_0x2e8353]);
      return _0x362698;
    }
    copy(_0x1f51d8) {
      return Object.assign({}, _0x1f51d8);
    }
    read_env(_0x300685) {
      let _0x3bb510 = _0x42a954.map(_0x14158d => process.env[_0x14158d]);
      for (let _0x280e5f of _0x3bb510.filter(_0x194b9b => !!_0x194b9b)) {
        for (let _0x56dc3e of _0x280e5f.split(_0x1bd405).filter(_0xfb87b4 => !!_0xfb87b4)) {
          this.userList.push(new _0x300685(_0x56dc3e));
        }
      }
      if (_0x4b6f1e.existsSync("./" + _0x37c25b)) {
        const _0x232d7b = {
          flag: "r",
          encoding: "utf-8"
        };
        let _0x37bc7d = _0x4b6f1e.readFileSync("./" + _0x37c25b, _0x232d7b);
        _0x37bc7d = _0x37bc7d?.["replace"](/\r/g, "")?.["split"]("\n")?.["filter"](_0x42a0b3 => _0x42a0b3) || [];
        for (let _0x54bc2a of _0x37bc7d) {
          this.userList.push(new _0x300685(_0x54bc2a));
        }
      } else {
        const _0x3ee0b7 = {
          flag: "w",
          encoding: "utf-8"
        };
        _0x4b6f1e.writeFileSync("./" + _0x37c25b, "", _0x3ee0b7);
        this.log("CK文件[" + _0x37c25b + "]不存在, 默认为你新建一个, 如有需要请填入ck");
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x3f8557 = {
          notify: true
        };
        this.log("未找到变量，请检查文件[" + _0x37c25b + "]或变量" + _0x42a954.map(_0x2c7cac => "[" + _0x2c7cac + "]").join("或"), _0x3f8557);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x1699f9, _0x4aa7fc = null) {
      let _0x5876e5 = _0x4aa7fc ? new Date(_0x4aa7fc) : new Date(),
        _0x298ac9 = {
          "M+": _0x5876e5.getMonth() + 1,
          "d+": _0x5876e5.getDate(),
          "h+": _0x5876e5.getHours(),
          "m+": _0x5876e5.getMinutes(),
          "s+": _0x5876e5.getSeconds(),
          "q+": Math.floor((_0x5876e5.getMonth() + 3) / 3),
          S: this.padStr(_0x5876e5.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x1699f9) && (_0x1699f9 = _0x1699f9.replace(RegExp.$1, (_0x5876e5.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x29c84e in _0x298ac9) new RegExp("(" + _0x29c84e + ")").test(_0x1699f9) && (_0x1699f9 = _0x1699f9.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x298ac9[_0x29c84e] : ("00" + _0x298ac9[_0x29c84e]).substr(("" + _0x298ac9[_0x29c84e]).length)));
      return _0x1699f9;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      try {
        var _0x53639d = require("./sendNotify");
        this.log("\n============== 推送 ==============");
        await _0x53639d.sendNotify(this.name, this.notifyStr.join("\n"));
      } catch {
        this.log("\n=================================");
        this.log("读取推送依赖[sendNotify.js]失败, 请检查同目录下是否有依赖");
      }
    }
    padStr(_0x1d28a3, _0x4244f0, _0x4da039 = {}) {
      let _0x209a21 = _0x4da039.padding || "0",
        _0x550d66 = _0x4da039.mode || "l",
        _0x421b84 = String(_0x1d28a3),
        _0x17fe6f = _0x4244f0 > _0x421b84.length ? _0x4244f0 - _0x421b84.length : 0,
        _0x55c31e = "";
      for (let _0x3c1d9d = 0; _0x3c1d9d < _0x17fe6f; _0x3c1d9d++) {
        _0x55c31e += _0x209a21;
      }
      _0x550d66 == "r" ? _0x421b84 = _0x421b84 + _0x55c31e : _0x421b84 = _0x55c31e + _0x421b84;
      return _0x421b84;
    }
    json2str(_0x305a6e, _0x312af7, _0x5f57eb = false) {
      let _0x193f33 = [];
      for (let _0x1dd499 of Object.keys(_0x305a6e).sort()) {
        let _0x3d20aa = _0x305a6e[_0x1dd499];
        if (_0x3d20aa && _0x5f57eb) {
          _0x3d20aa = encodeURIComponent(_0x3d20aa);
        }
        _0x193f33.push(_0x1dd499 + "=" + _0x3d20aa);
      }
      return _0x193f33.join(_0x312af7);
    }
    str2json(_0x5802c3, _0x386de0 = false) {
      let _0x23076e = {};
      for (let _0x5d20ac of _0x5802c3.split("&")) {
        if (!_0x5d20ac) {
          continue;
        }
        let _0x3f409f = _0x5d20ac.indexOf("=");
        if (_0x3f409f == -1) {
          continue;
        }
        let _0x51e1af = _0x5d20ac.substr(0, _0x3f409f),
          _0x3b3da0 = _0x5d20ac.substr(_0x3f409f + 1);
        if (_0x386de0) {
          _0x3b3da0 = decodeURIComponent(_0x3b3da0);
        }
        _0x23076e[_0x51e1af] = _0x3b3da0;
      }
      return _0x23076e;
    }
    randomPattern(_0x16f665, _0x46cac1 = "abcdef0123456789") {
      let _0x34401b = "";
      for (let _0x2a18f5 of _0x16f665) {
        if (_0x2a18f5 == "x") {
          _0x34401b += _0x46cac1.charAt(Math.floor(Math.random() * _0x46cac1.length));
        } else {
          _0x2a18f5 == "X" ? _0x34401b += _0x46cac1.charAt(Math.floor(Math.random() * _0x46cac1.length)).toUpperCase() : _0x34401b += _0x2a18f5;
        }
      }
      return _0x34401b;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x5a2f2d, _0x4612a8 = "abcdef0123456789") {
      let _0x2cf0af = "";
      for (let _0x227ef7 = 0; _0x227ef7 < _0x5a2f2d; _0x227ef7++) {
        _0x2cf0af += _0x4612a8.charAt(Math.floor(Math.random() * _0x4612a8.length));
      }
      return _0x2cf0af;
    }
    randomList(_0xa6a75e) {
      let _0x4d01a1 = Math.floor(Math.random() * _0xa6a75e.length);
      return _0xa6a75e[_0x4d01a1];
    }
    wait(_0x29b6f2) {
      return new Promise(_0x5d618d => setTimeout(_0x5d618d, _0x29b6f2));
    }
    async exitNow() {
      await this.showmsg();
      let _0x511f50 = Date.now(),
        _0x3d8dfb = (_0x511f50 - this.startTime) / 1000;
      this.log("");
      const _0x5c8caa = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x3d8dfb + "秒", _0x5c8caa);
      process.exit(0);
    }
    normalize_time(_0x38506b, _0x14b946 = {}) {
      let _0x296808 = _0x14b946.len || this.default_timestamp_len;
      _0x38506b = _0x38506b.toString();
      let _0x5a4d5d = _0x38506b.length;
      while (_0x5a4d5d < _0x296808) {
        _0x38506b += "0";
      }
      _0x5a4d5d > _0x296808 && (_0x38506b = _0x38506b.slice(0, 13));
      return parseInt(_0x38506b);
    }
    async wait_until(_0x55d318, _0xcd3318 = {}) {
      let _0xa01bf8 = _0xcd3318.logger || this,
        _0x594cc9 = _0xcd3318.interval || this.default_wait_interval,
        _0x131493 = _0xcd3318.limit || this.default_wait_limit,
        _0x43ca51 = _0xcd3318.ahead || this.default_wait_ahead;
      if (typeof _0x55d318 == "string" && _0x55d318.includes(":")) {
        if (_0x55d318.includes("-")) {
          _0x55d318 = new Date(_0x55d318).getTime();
        } else {
          let _0x121ca2 = this.time("yyyy-MM-dd ");
          _0x55d318 = new Date(_0x121ca2 + _0x55d318).getTime();
        }
      }
      let _0x2be118 = this.normalize_time(_0x55d318) - _0x43ca51,
        _0x454992 = this.time("hh:mm:ss.S", _0x2be118),
        _0x206d5f = Date.now();
      _0x206d5f > _0x2be118 && (_0x2be118 += 86400000);
      let _0x5a87d7 = _0x2be118 - _0x206d5f;
      if (_0x5a87d7 > _0x131493) {
        const _0x3863ab = {
          time: true
        };
        _0xa01bf8.log("离目标时间[" + _0x454992 + "]大于" + _0x131493 / 1000 + "秒,不等待", _0x3863ab);
      } else {
        const _0x360ebc = {
          time: true
        };
        _0xa01bf8.log("离目标时间[" + _0x454992 + "]还有" + _0x5a87d7 / 1000 + "秒,开始等待", _0x360ebc);
        while (_0x5a87d7 > 0) {
          let _0x5a857c = Math.min(_0x5a87d7, _0x594cc9);
          await this.wait(_0x5a857c);
          _0x206d5f = Date.now();
          _0x5a87d7 = _0x2be118 - _0x206d5f;
        }
        const _0x5a5108 = {
          time: true
        };
        _0xa01bf8.log("已完成等待", _0x5a5108);
      }
    }
    async wait_gap_interval(_0x3fae46, _0x235e86) {
      let _0x33ab61 = Date.now() - _0x3fae46;
      _0x33ab61 < _0x235e86 && (await this.wait(_0x235e86 - _0x33ab61));
    }
  }(_0x1547bf);
}
