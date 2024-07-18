/*
长城炮
扫码注册：https://raw.githubusercontent.com/leafTheFish/DeathNote/main/ccp.png

积分换实物和视频会员
一天跑三四次吧，有时做任务会出错以免做不完

青龙变量  ccpAccount
注册后先设置密码，两种填变量的方法，多账号都是换行或@或&隔开:
1. 把账号密码按 账号#密码 的格式填到ccpAccount里
2. (需要crypto-js依赖)先退出登录，再用密码登录一次，捉https://marketing-api.gwm.com.cn/api-u/v1/pickup/user/auth/loginForPwd的包，把body里面的password字段的值和账号按 账号|password值 的格式填到ccpAccount里

重写：
[task_local]
#长城炮
14 0,9,16,21 * * * https://raw.githubusercontent.com/leafTheFish/DeathNote/main/ccp.js, tag=长城炮, enabled=true
[rewrite_local]
https://marketing-api.gwm.com.cn/api-u/v1/pickup/user/auth/loginForPwd url script-request-body https://raw.githubusercontent.com/leafTheFish/DeathNote/main/ccp.js
[MITM]
hostname = marketing-api.gwm.com.cn

cron: 14 0,9,16,21 * * *
const $ = new Env("长城炮")
*/

const _0x29cb97 = new _0x40cedb("长城炮");
let _0x55e34b = "",
  _0x2dd07d = ["\n", "@", "&"],
  _0x46ed2d,
  _0x169bf6,
  _0x402847,
  _0x15bac9 = (_0x29cb97.isNode() ? process.env.ccpAccount : _0x29cb97.getdata("ccpAccount")) || "",
  _0xbef58d = [],
  _0x264e60 = [],
  _0x35bdd6 = 0,
  _0x24b1c3 = 0,
  _0x27fea2 = "null",
  _0x358dcb = "7192783674488620",
  _0x23b834 = "8bc742859a7849ec9a924c979afa5a00",
  _0x2d4a70 = "GWM719278367448862",
  _0x2e3d3d = "PICKUP",
  _0x19414 = "IOS",
  _0x202ff0 = "3.5.3",
  _0x46a3b8 = "GwmPickup-iOS/3.5.3 (com.gwm.truck; build:2; iOS 15.0.0) Alamofire/5.4.1",
  _0x5dadbc = ["Joe", "Mary", "Nick", "Amy", "John", "Mark", "Jacky", "Jack", "Abbie", "Janna", "Allen", "Aaron", "David", "Iris", "Janet", "Joanna", "Kelly", "Lucy", "Sally", "Samuel", "Terry"],
  _0x35f13a = "不知道发些什么好，要不给您劈个叉吧？希望快点拿到积分",
  _0x3622cc = 2000,
  _0x44ef25 = 20,
  _0x3b9ab5 = "",
  _0x4335b9 = [],
  _0x4e8a4f = 1.01,
  _0x3cbaf0 = 0,
  _0x555407 = "ccp",
  _0x454aba = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x3b66f5 = "https://127.0.0.1/";
class _0x546acf {
  constructor(_0xa63083) {
    this.index = ++_0x35bdd6;
    this.name = this.index;
    this.valid = false;
    this.pwdValid = false;
    this.auth = "";
    this.deviceId = "ffffffff-" + _0x29cb97.randomString(4) + "-" + _0x29cb97.randomString(4) + "-ffff-ffff" + _0x29cb97.randomString(8);
    this.account = "";
    this.pwd = "";
    this.encPwd = "";
    try {
      if (_0xa63083.indexOf("#") > -1) {
        let _0x4fd229 = _0xa63083.split("#");
        this.account = _0x4fd229[0];
        this.pwd = _0x4fd229[1];
        this.account && this.pwd ? this.valid = true : _0x29cb97.logAndNotify("账号[" + this.index + "]变量格式错误");
      } else {
        if (_0xa63083.indexOf("|") > -1) {
          let _0x518681 = _0xa63083.split("|");
          this.account = _0x518681[0];
          this.encPwd = _0x518681[1];
          this.account && this.encPwd ? this.valid = true : _0x29cb97.logAndNotify("账号[" + this.index + "]变量格式错误");
        } else {
          _0x29cb97.logAndNotify("账号[" + this.index + "]变量格式错误");
        }
      }
    } catch (_0x940f02) {
      _0x29cb97.logAndNotify("账号[" + this.index + "]变量格式错误");
    }
  }
  async login() {
    try {
      let _0x3cddd0 = "https://marketing-api.gwm.com.cn/api-u/v1/pickup/user/auth/loginForPwd",
        _0x52c24a = "";
      if (this.pwd) {
        if (!_0x55e34b) {
          _0x55e34b = require("crypto-js");
        }
        _0x52c24a = _0x2a6329("AES", "ECB", "Pkcs7", this.pwd, _0x358dcb, _0x27fea2);
      } else {
        _0x52c24a = this.encPwd;
      }
      let _0x4109dc = "{\"pushId\":\"" + this.deviceId + "\",\"password\":\"" + _0x52c24a + "\",\"areaCode\":\"000000\",\"pwdType\":1,\"deviceId\":\"" + this.deviceId + "\",\"account\":\"" + this.account + "\"}",
        _0x48b34c = _0x3c2490(_0x3cddd0, this.auth, _0x4109dc);
      await _0x1913fa("post", _0x48b34c);
      let _0x379839 = _0x46ed2d;
      if (!_0x379839) {
        return;
      }
      if (_0x379839.code == 0) {
        this.pwdValid = true;
        this.auth = _0x379839.data.tokenValue;
        this.userId = _0x379839.data.userInfoVo.id;
        this.phone = _0x379839.data.userInfoVo.phone;
        this.score = _0x379839.data.userInfoVo.userDetailVo.totalScore;
        let _0x18957e = "";
        _0x18957e += "\n============= 账号[" + this.index + "] =============\n";
        _0x18957e += "手机：" + this.phone + "\n";
        _0x18957e += "炮弹：" + this.score + "\n";
        _0x18957e += "UID：" + this.userId + "\n";
        console.log(_0x18957e);
      } else {
        _0x29cb97.logAndNotify("\n账号[" + this.index + "]登录失败: " + _0x379839.message);
      }
    } catch (_0x317164) {
      console.log(_0x317164);
    } finally {
      return new Promise(_0x4e1a92 => {
        _0x4e1a92(1);
      });
    }
  }
  async getUserInfo() {
    try {
      let _0x15240a = "https://marketing-api.gwm.com.cn/api-u/v1/user/info/get",
        _0x402493 = "",
        _0xb1d2a1 = _0x3c2490(_0x15240a, this.auth, _0x402493);
      await _0x1913fa("get", _0xb1d2a1);
      let _0x3b0d01 = _0x46ed2d;
      if (!_0x3b0d01) {
        return;
      }
      _0x3b0d01.code == 0 ? (this.isSigned = _0x3b0d01.data.isSigned, console.log("账号[" + this.index + "]今天" + (this.isSigned ? "已" : "未") + "签到")) : console.log("账号[" + this.index + "]获取签到状态失败: " + _0x3b0d01.message);
    } catch (_0x3421a7) {
      console.log(_0x3421a7);
    } finally {
      return new Promise(_0x1bc526 => {
        _0x1bc526(1);
      });
    }
  }
  async doSign() {
    try {
      let _0x30909c = "https://marketing-api.gwm.com.cn/api-u/v1/user/sign/sureNew?userId=" + this.userId,
        _0x5f4c95 = "",
        _0xfe9d16 = _0x3c2490(_0x30909c, this.auth, _0x5f4c95);
      await _0x1913fa("get", _0xfe9d16);
      let _0x2001c1 = _0x46ed2d;
      if (!_0x2001c1) {
        return;
      }
      _0x2001c1.code == 0 ? console.log("账号[" + this.index + "]签到成功获得" + _0x2001c1.data.dailyScore + "炮弹") : console.log("账号[" + this.index + "]签到失败: " + _0x2001c1.message);
    } catch (_0x104b8e) {
      console.log(_0x104b8e);
    } finally {
      return new Promise(_0x370d3a => {
        _0x370d3a(1);
      });
    }
  }
  async queryChoicenessRecommendList() {
    try {
      let _0xb940e0 = "https://marketing-api.gwm.com.cn/api-c/v1/community/infoFlow/queryChoicenessRecommendList";
      const _0x454a29 = {
        pageNum: 1,
        pageSize: 20
      };
      let _0x2e70ae = JSON.stringify(_0x454a29),
        _0x179ce5 = _0x3c2490(_0xb940e0, this.auth, _0x2e70ae);
      await _0x1913fa("post", _0x179ce5);
      let _0x14b7f4 = _0x46ed2d;
      if (!_0x14b7f4) {
        return;
      }
      _0x14b7f4.code == 0 ? (this.artsList = _0x14b7f4.data.list, console.log("账号[" + this.index + "]获取到" + this.artsList.length + "篇文章")) : console.log("账号[" + this.index + "]获取文章列表失败: " + _0x14b7f4.message);
    } catch (_0x2ff01b) {
      console.log(_0x2ff01b);
    } finally {
      return new Promise(_0xd87932 => {
        _0xd87932(1);
      });
    }
  }
  async getTaskList() {
    try {
      let _0x4ef15d = "https://marketing-api.gwm.com.cn/api-u/v1/user/member/taskList",
        _0x2d484c = "",
        _0x5630e = _0x3c2490(_0x4ef15d, this.auth, _0x2d484c);
      await _0x1913fa("get", _0x5630e);
      let _0x285398 = _0x46ed2d;
      if (!_0x285398) {
        return;
      }
      if (_0x285398.code == 0) {
        if (_0x285398.data.typeTaskList && _0x285398.data.typeTaskList.length > 0) {
          for (let _0x5edc4b of _0x285398.data.typeTaskList) {
            for (let _0x39ecb8 of _0x5edc4b.taskList) {
              let _0x35ddf6 = _0x39ecb8.limitScore ? _0x39ecb8.limitScore - _0x39ecb8.currentTaskCount : 1,
                _0x33cc42 = Math.floor(Math.random() * this.artsList.length);
              if (_0x39ecb8.name.indexOf("点赞内容") > -1) {
                for (let _0x2d9a8e = 0; _0x2d9a8e < _0x35ddf6; _0x2d9a8e++) {
                  let _0x4b96c0 = this.artsList[(_0x33cc42 + _0x2d9a8e) % this.artsList.length];
                  await this.likeToast(_0x4b96c0);
                  await _0x29cb97.wait(_0x3622cc);
                  await this.likeToast(_0x4b96c0);
                  if (_0x2d9a8e < _0x35ddf6 - 1) {
                    await _0x29cb97.wait(_0x3622cc);
                  }
                }
              } else {
                if (_0x39ecb8.name.indexOf("发评论/回复评论") > -1) {
                  for (let _0x4125d5 = 0; _0x4125d5 < _0x35ddf6; _0x4125d5++) {
                    let _0x1f83d9 = this.artsList[(_0x33cc42 + _0x4125d5) % this.artsList.length];
                    await this.putComment(_0x1f83d9);
                    if (_0x4125d5 < _0x35ddf6 - 1) {
                      await _0x29cb97.wait(Math.floor(Math.random() * 10000) + 10000);
                    }
                  }
                } else {
                  _0x39ecb8.name.indexOf("完善资料") > -1 && (await this.changeNickname());
                }
              }
            }
          }
        }
      } else {
        console.log("账号[" + this.index + "]获取任务列表失败: " + _0x285398.message);
      }
    } catch (_0x4a5f3d) {
      console.log(_0x4a5f3d);
    } finally {
      return new Promise(_0x2d01a0 => {
        _0x2d01a0(1);
      });
    }
  }
  async likeToast(_0x5c085b) {
    try {
      let _0x5e1008 = "https://marketing-api.gwm.com.cn/api-c/v1/community/bbsLike/likeToast";
      const _0x5534be = {
        commentTemId: _0x5c085b.id,
        commentTemType: "6"
      };
      let _0x29b252 = JSON.stringify(_0x5534be),
        _0x16a1ea = _0x3c2490(_0x5e1008, this.auth, _0x29b252);
      await _0x1913fa("post", _0x16a1ea);
      let _0x2c44d6 = _0x46ed2d;
      if (!_0x2c44d6) {
        return;
      }
      _0x2c44d6.code == 0 ? console.log("账号[" + this.index + "]" + _0x2c44d6.data.message) : console.log("账号[" + this.index + "]点赞失败: " + _0x2c44d6.message);
    } catch (_0x2aab70) {
      console.log(_0x2aab70);
    } finally {
      return new Promise(_0x5ebd12 => {
        _0x5ebd12(1);
      });
    }
  }
  async putComment(_0x41eb04) {
    try {
      let _0x1718b2 = "https://marketing-api.gwm.com.cn/api-c/v1/community/comment/putComment";
      await _0x2d67a9();
      let _0x239229 = _0x3b9ab5 || _0x35f13a,
        _0x2acaef = JSON.stringify({
          replyName: "",
          replyId: "",
          commentContent: encodeURIComponent(_0x239229),
          commentParentId: "",
          parentId: "",
          commentTemType: "6",
          commentTemId: _0x41eb04.id
        }),
        _0x5c9fbc = _0x3c2490(_0x1718b2, this.auth, _0x2acaef);
      await _0x1913fa("post", _0x5c9fbc);
      let _0x1a39da = _0x46ed2d;
      if (!_0x1a39da) {
        return;
      }
      _0x1a39da.code == 0 ? (console.log("账号[" + this.index + "]发表评论成功"), await _0x29cb97.wait(_0x3622cc), await this.deleteComment(_0x1a39da.data.id)) : console.log("账号[" + this.index + "]发表评论失败: " + _0x1a39da.message);
    } catch (_0x1f5dc0) {
      console.log(_0x1f5dc0);
    } finally {
      return new Promise(_0x19ab4c => {
        _0x19ab4c(1);
      });
    }
  }
  async deleteComment(_0x5cf9a3) {
    try {
      let _0x385241 = "https://marketing-api.gwm.com.cn/api-c/v1/community/comment/deleteComment?id=" + _0x5cf9a3,
        _0x4c892a = "",
        _0x338165 = _0x3c2490(_0x385241, this.auth, _0x4c892a);
      await _0x1913fa("delete", _0x338165);
      let _0x452d9a = _0x46ed2d;
      if (!_0x452d9a) {
        return;
      }
      _0x452d9a.code == 0 ? console.log("账号[" + this.index + "]删除评论成功") : console.log("账号[" + this.index + "]删除评论失败: " + _0x452d9a.message);
    } catch (_0x566d63) {
      console.log(_0x566d63);
    } finally {
      return new Promise(_0x249e13 => {
        _0x249e13(1);
      });
    }
  }
  async getScore() {
    try {
      let _0x597705 = "https://marketing-api.gwm.com.cn/api-u/v1/user/score/get",
        _0xc3372 = "",
        _0x51a6a7 = _0x3c2490(_0x597705, this.auth, _0xc3372);
      await _0x1913fa("get", _0x51a6a7);
      let _0x3f9397 = _0x46ed2d;
      if (!_0x3f9397) {
        return;
      }
      _0x3f9397.code == 0 ? (this.score = _0x3f9397.data.totalPoint, _0x29cb97.logAndNotify("账号[" + this.index + "]炮弹：" + this.score)) : console.log("账号[" + this.index + "]获取账号炮弹数失败: " + _0x3f9397.message);
    } catch (_0x15b596) {
      console.log(_0x15b596);
    } finally {
      return new Promise(_0x303924 => {
        _0x303924(1);
      });
    }
  }
  async attention(_0x246d75) {
    try {
      let _0x96d589 = "https://marketing-api.gwm.com.cn/api-u/v1/user/follow/attention",
        _0x229edb = "{\"followedId\":\"" + _0x246d75 + "\"}",
        _0x321bdf = _0x3c2490(_0x96d589, this.auth, _0x229edb);
      await _0x1913fa("post", _0x321bdf);
      let _0x259090 = _0x46ed2d;
      if (!_0x259090) {
        return;
      }
      _0x259090.code == 0 ? console.log("账号[" + this.index + "]关注[" + _0x246d75 + "]成功") : console.log("账号[" + this.index + "]关注[" + _0x246d75 + "]失败: " + _0x259090.message);
    } catch (_0x4886ac) {
      console.log(_0x4886ac);
    } finally {
      return new Promise(_0x4768ed => {
        _0x4768ed(1);
      });
    }
  }
  async camcelAttention(_0x3da096) {
    try {
      let _0x1b78f6 = "https://marketing-api.gwm.com.cn/api-u/v1/user/follow/cancel",
        _0x5b2b39 = "{\"followedId\":\"" + _0x3da096 + "\"}",
        _0x30838f = _0x3c2490(_0x1b78f6, this.auth, _0x5b2b39);
      await _0x1913fa("post", _0x30838f);
      let _0x4be814 = _0x46ed2d;
      if (!_0x4be814) {
        return;
      }
      _0x4be814.code == 0 ? console.log("账号[" + this.index + "]取关[" + _0x3da096 + "]成功") : console.log("账号[" + this.index + "]取关[" + _0x3da096 + "]失败: " + _0x4be814.message);
    } catch (_0x1e928c) {
      console.log(_0x1e928c);
    } finally {
      return new Promise(_0x4f16e4 => {
        _0x4f16e4(1);
      });
    }
  }
  async changeNickname() {
    try {
      let _0x268a75 = Math.floor(Math.random() * 4) + 4,
        _0x47e87b = _0x29cb97.randomList(_0x5dadbc) + _0x29cb97.randomString(_0x268a75, "0123456789"),
        _0x3beda8 = "https://marketing-api.gwm.com.cn/api-u/v1/user/info/change",
        _0x1c8c43 = "{\"id\":\"" + this.userId + "\",\"nickName\":\"" + _0x47e87b + "\"}",
        _0x2a9815 = _0x3c2490(_0x3beda8, this.auth, _0x1c8c43);
      await _0x1913fa("post", _0x2a9815);
      let _0x4242d9 = _0x46ed2d;
      if (!_0x4242d9) {
        return;
      }
      _0x4242d9.code == 0 ? console.log("账号[" + this.index + "]完成新手任务更改昵称成功：" + _0x47e87b) : console.log("账号[" + this.index + "]完成新手任务更改昵称[" + _0x47e87b + "]失败: " + _0x4242d9.message);
    } catch (_0x50beb2) {
      console.log(_0x50beb2);
    } finally {
      return new Promise(_0x4d9192 => {
        _0x4d9192(1);
      });
    }
  }
  async attentionMe(_0x56317f) {
    try {
      let _0x2de575 = "https://marketing-api.gwm.com.cn/api-u/v1/user/follow/attention",
        _0x553eac = "{\"followedId\":\"" + _0x56317f + "\"}",
        _0x5b9d98 = _0x3c2490(_0x2de575, this.auth, _0x553eac);
      await _0x1913fa("post", _0x5b9d98);
    } catch (_0x191d23) {
      console.log(_0x191d23);
    } finally {
      return new Promise(_0x30df5e => {
        _0x30df5e(1);
      });
    }
  }
  async camcelAttentionMe(_0x39efbe) {
    try {
      let _0x48531e = "https://marketing-api.gwm.com.cn/api-u/v1/user/follow/cancel",
        _0x478005 = "{\"followedId\":\"" + _0x39efbe + "\"}",
        _0x69804c = _0x3c2490(_0x48531e, this.auth, _0x478005);
      await _0x1913fa("post", _0x69804c);
    } catch (_0x1a69e5) {
      console.log(_0x1a69e5);
    } finally {
      return new Promise(_0x40990d => {
        _0x40990d(1);
      });
    }
  }
  async userFollowMeTask() {
    try {
      for (let _0x103d6f of _0x4335b9) {
        if (this.userId == _0x103d6f) {
          continue;
        }
        await this.attentionMe(_0x103d6f);
        await _0x29cb97.wait(500);
        await this.camcelAttentionMe(_0x103d6f);
        await _0x29cb97.wait(500);
      }
    } catch (_0x26855a) {
      console.log(_0x26855a);
    } finally {
      return new Promise(_0x2b2104 => {
        _0x2b2104(1);
      });
    }
  }
  async userFollowTask() {
    try {
      for (let _0x1f5ccb of _0x264e60.filter(_0x4ace0c => _0x4ace0c.index != this.index)) {
        await this.attention(_0x1f5ccb.userId);
        await _0x29cb97.wait(500);
        await this.camcelAttention(_0x1f5ccb.userId);
        await _0x29cb97.wait(500);
      }
    } catch (_0x2daf17) {
      console.log(_0x2daf17);
    } finally {
      return new Promise(_0x39ec4b => {
        _0x39ec4b(1);
      });
    }
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x5d9b48();
  } else {
    await _0x3aacda();
    if (_0x3cbaf0 == false) {
      return;
    }
    await _0x2e5566();
    if (!(await _0x36d29c())) {
      return;
    }
    console.log("\n-------------- 登录 --------------");
    let _0xb2e50 = [];
    for (let _0x2561d7 of _0xbef58d.filter(_0x2e53d5 => _0x2e53d5.valid)) {
      _0xb2e50.push(_0x2561d7.login());
      await _0x29cb97.wait(_0x44ef25);
    }
    await Promise.all(_0xb2e50);
    _0x264e60 = _0xbef58d.filter(_0x13dc61 => _0x13dc61.pwdValid);
    if (_0x264e60.length > 0) {
      _0xb2e50 = [];
      for (let _0x483e86 of _0x264e60) {
        _0xb2e50.push(_0x483e86.userFollowMeTask());
        await _0x29cb97.wait(_0x44ef25);
      }
      await Promise.all(_0xb2e50);
      console.log("\n-------------- 签到 --------------");
      _0xb2e50 = [];
      for (let _0x5ecb0b of _0x264e60) {
        _0xb2e50.push(_0x5ecb0b.getUserInfo());
        await _0x29cb97.wait(_0x44ef25);
      }
      await Promise.all(_0xb2e50);
      _0xb2e50 = [];
      for (let _0x4db8e1 of _0x264e60.filter(_0x6c59b6 => !_0x6c59b6.isSigned)) {
        _0xb2e50.push(_0x4db8e1.doSign());
        await _0x29cb97.wait(_0x44ef25);
      }
      await Promise.all(_0xb2e50);
      console.log("\n-------------- 获取文章 --------------");
      _0xb2e50 = [];
      for (let _0x2ee2ee of _0x264e60) {
        _0xb2e50.push(_0x2ee2ee.queryChoicenessRecommendList());
        await _0x29cb97.wait(_0x44ef25);
      }
      await Promise.all(_0xb2e50);
      console.log("\n-------------- 任务 --------------");
      _0xb2e50 = [];
      for (let _0x22787f of _0x264e60.filter(_0x59bc11 => _0x59bc11.artsList.length > 0)) {
        _0xb2e50.push(_0x22787f.getTaskList());
        await _0x29cb97.wait(_0x44ef25);
      }
      await Promise.all(_0xb2e50);
      if (_0x264e60.length > 1) {
        console.log("\n-------------- 互相关注 --------------");
        _0xb2e50 = [];
        for (let _0x4daf75 of _0x264e60) {
          _0xb2e50.push(_0x4daf75.userFollowTask());
          await _0x29cb97.wait(_0x44ef25);
        }
        await Promise.all(_0xb2e50);
      }
      console.log("\n-------------- 积分 --------------");
      _0xb2e50 = [];
      for (let _0xf39991 of _0x264e60) {
        _0xb2e50.push(_0xf39991.getScore());
        await _0x29cb97.wait(_0x44ef25);
      }
      await Promise.all(_0xb2e50);
    }
    await _0x29cb97.showmsg();
  }
})().catch(_0x353abc => console.log(_0x353abc)).finally(() => _0x29cb97.done());
async function _0x5d9b48() {
  if ($request.url.indexOf("/user/auth/loginForPwd") > -1) {
    let _0x1a348f = $request.body.match(/"password" *: *"([\w\+\/\=]+)"/),
      _0x396667 = $request.body.match(/"account" *: *"(\d+)"/);
    if (_0x1a348f && _0x396667) {
      let _0x1d9f3e = _0x1a348f[1],
        _0x54a469 = _0x396667[1],
        _0x50223d = _0x54a469 + "|" + _0x1d9f3e;
      if (_0x15bac9) {
        if (_0x15bac9.indexOf(_0x54a469 + "|") == -1) {
          _0x15bac9 = _0x15bac9 + "\n" + _0x50223d;
          _0x29cb97.setdata(_0x15bac9, "ccpAccount");
          let _0x3a4ea1 = _0x15bac9.split("\n");
          _0x29cb97.msg("获取第" + _0x3a4ea1.length + "个账号成功: " + _0x50223d);
        } else {
          let _0x4b8d76 = _0x15bac9.split("\n");
          for (let _0x545e41 in _0x4b8d76) {
            if (_0x4b8d76[_0x545e41].indexOf(_0x54a469 + "|") > -1) {
              _0x4b8d76[_0x545e41] = _0x50223d;
              _0x29cb97.msg("更新第" + (parseInt(_0x545e41) + 1) + "个账号成功: " + _0x50223d);
              break;
            }
          }
          _0x15bac9 = _0x4b8d76.join("\n");
          _0x29cb97.setdata(_0x15bac9, "ccpAccount");
        }
      } else {
        _0x29cb97.setdata(_0x50223d, "ccpAccount");
        _0x29cb97.msg("获取第1个账号成功: " + _0x50223d);
      }
    }
  }
}
async function _0x36d29c() {
  if (_0x15bac9) {
    let _0x16cbcc = _0x2dd07d[0];
    for (let _0x3f4f4c of _0x2dd07d) {
      if (_0x15bac9.indexOf(_0x3f4f4c) > -1) {
        _0x16cbcc = _0x3f4f4c;
        break;
      }
    }
    for (let _0x41f8c8 of _0x15bac9.split(_0x16cbcc)) {
      if (_0x41f8c8) {
        _0xbef58d.push(new _0x546acf(_0x41f8c8));
      }
    }
    _0x24b1c3 = _0xbef58d.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + _0x24b1c3 + "个账号");
  return true;
}
async function _0x2d67a9() {
  _0x3b9ab5 = "";
  try {
    const _0x1646a8 = {
      Host: "api.oick.cn"
    };
    let _0x5248c4 = {
      url: "https://api.oick.cn/dog/api.php",
      headers: _0x1646a8,
      timeout: 5000
    };
    await _0x1913fa("get", _0x5248c4);
    _0x3b9ab5 = _0x46ed2d;
  } catch (_0xb68ef9) {
    console.log(_0xb68ef9);
  } finally {
    return new Promise(_0x1adde5 => {
      _0x1adde5(1);
    });
  }
}
async function _0x3aacda() {
  let _0x588554 = {
    url: _0x454aba
  };
  await _0x1913fa("get", _0x588554);
  let _0x48e5b7 = _0x46ed2d;
  if (!_0x48e5b7) {
    return;
  }
  _0x48e5b7?.["code"] == 0 && (_0x48e5b7 = JSON.parse(_0x48e5b7.data.file.data));
  if (_0x48e5b7[_0x555407]) {
    let _0x1ba025 = _0x48e5b7[_0x555407];
    _0x1ba025.status == 0 ? _0x4e8a4f >= _0x1ba025.version ? (_0x3cbaf0 = true, _0x3b66f5 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x555407 + ".json", console.log(_0x1ba025.msg[_0x1ba025.status]), console.log(_0x1ba025.updateMsg), console.log("现在运行的脚本版本是：" + _0x4e8a4f + "，最新脚本版本：" + _0x1ba025.latestVersion)) : console.log(_0x1ba025.versionMsg) : console.log(_0x1ba025.msg[_0x1ba025.status]);
  } else {
    console.log(_0x48e5b7.errorMsg);
  }
}
async function _0x2e5566() {
  let _0xf0a113 = "";
  let _0x49257c = {
    url: _0x3b66f5
  };
  await _0x1913fa("get", _0x49257c);
  let _0x165c07 = _0x46ed2d;
  if (!_0x165c07) {
    return _0xf0a113;
  }
  _0x165c07?.["code"] == 0 && (_0x165c07 = JSON.parse(_0x165c07.data.file.data));
  _0x4335b9 = _0x165c07?.["uidList"] || [];
  return _0xf0a113;
}
function _0x3c2490(_0x2738eb, _0x937d5d, _0x2f950f = "") {
  let _0x2f307b = Date.now(),
    _0x5167cb = _0x1a8c10("" + _0x2f307b + _0x2d4a70 + _0x23b834),
    _0x1d00ac = _0x2738eb.replace("//", "/").split("/")[1],
    _0x410417 = {
      url: _0x2738eb,
      headers: {
        Host: _0x1d00ac,
        Connection: "keep-alive",
        Authorization: _0x937d5d,
        Secret: _0x23b834,
        AppId: _0x2d4a70,
        SourceType: _0x19414,
        SourceApp: _0x2e3d3d,
        SourceAppVer: _0x202ff0,
        "User-Agent": _0x46a3b8,
        TimeStamp: _0x2f307b,
        DeviceId: "71FB632B-579E-4187-AA53-EDA124D0E576",
        Sign: _0x5167cb,
        "x-dynatrace": "MT_3_3_218289270013521_7-0_5ef0fd62-37bc-4888-9034-ce1fe55fc52c_" + Math.floor(Math.random() * 300) + "_1_" + Math.floor(Math.random() * 2500)
      },
      timeout: 5000
    };
  _0x2f950f && (_0x410417.body = _0x2f950f, _0x410417.headers["Content-Type"] = "application/json; charset=UTF-8", _0x410417.headers["Content-Length"] = _0x410417.body ? _0x410417.body.length : 0);
  return _0x410417;
}
async function _0x1913fa(_0x3da2ea, _0x351571) {
  _0x46ed2d = null;
  _0x169bf6 = null;
  _0x402847 = null;
  return new Promise(_0x2b32b7 => {
    _0x29cb97.send(_0x3da2ea, _0x351571, async (_0x5801aa, _0x140794, _0x54e070) => {
      try {
        _0x169bf6 = _0x140794;
        _0x402847 = _0x54e070;
        if (_0x5801aa) {
          console.log(_0x3da2ea + "请求失败");
          console.log(JSON.stringify(_0x5801aa));
        } else {
          if (_0x54e070.body) {
            if (typeof _0x54e070.body == "object") {
              _0x46ed2d = _0x54e070.body;
            } else {
              try {
                _0x46ed2d = JSON.parse(_0x54e070.body);
              } catch (_0x3e0ae1) {
                _0x46ed2d = _0x54e070.body;
              }
            }
          }
        }
      } catch (_0x27a9b9) {
        console.log(_0x27a9b9);
      } finally {
        _0x2b32b7();
      }
    });
  });
}
function _0x2a6329(_0x2480f4, _0x11a175, _0x2b86a8, _0x8b858a, _0x6213eb, _0x5497c7) {
  return _0x55e34b[_0x2480f4].encrypt(_0x55e34b.enc.Utf8.parse(_0x8b858a), _0x55e34b.enc.Utf8.parse(_0x6213eb), {
    mode: _0x55e34b.mode[_0x11a175],
    padding: _0x55e34b.pad[_0x2b86a8],
    iv: _0x55e34b.enc.Utf8.parse(_0x5497c7)
  }).ciphertext.toString(_0x55e34b.enc.Base64);
}
function _0x206548(_0x2c9e03, _0x10855b, _0x2a3c45, _0x179e3a, _0x5943ba, _0xb6217c) {
  return _0x55e34b[_0x2c9e03].decrypt({
    ciphertext: _0x55e34b.enc.Base64.parse(_0x179e3a)
  }, _0x55e34b.enc.Utf8.parse(_0x5943ba), {
    mode: _0x55e34b.mode[_0x10855b],
    padding: _0x55e34b.pad[_0x2a3c45],
    iv: _0x55e34b.enc.Utf8.parse(_0xb6217c)
  }).toString(_0x55e34b.enc.Utf8);
}
var _0x1bad4a = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (_0x5067c8) {
    var _0x920a56 = "";
    var _0x30df6f, _0x1bd738, _0x1a65a1, _0xad4077, _0x2d778a, _0x5fa86b, _0x58fd6e;
    var _0x59d392 = 0;
    _0x5067c8 = _0x1bad4a._utf8_encode(_0x5067c8);
    while (_0x59d392 < _0x5067c8.length) {
      _0x30df6f = _0x5067c8.charCodeAt(_0x59d392++);
      _0x1bd738 = _0x5067c8.charCodeAt(_0x59d392++);
      _0x1a65a1 = _0x5067c8.charCodeAt(_0x59d392++);
      _0xad4077 = _0x30df6f >> 2;
      _0x2d778a = (_0x30df6f & 3) << 4 | _0x1bd738 >> 4;
      _0x5fa86b = (_0x1bd738 & 15) << 2 | _0x1a65a1 >> 6;
      _0x58fd6e = _0x1a65a1 & 63;
      if (isNaN(_0x1bd738)) {
        _0x5fa86b = _0x58fd6e = 64;
      } else {
        isNaN(_0x1a65a1) && (_0x58fd6e = 64);
      }
      _0x920a56 = _0x920a56 + this._keyStr.charAt(_0xad4077) + this._keyStr.charAt(_0x2d778a) + this._keyStr.charAt(_0x5fa86b) + this._keyStr.charAt(_0x58fd6e);
    }
    return _0x920a56;
  },
  decode: function (_0x45edea) {
    var _0x2512cf = "";
    var _0x2a78ad, _0x3633df, _0x4929fc;
    var _0x51c68b, _0x18a779, _0x3bb8a1, _0x498a0a;
    var _0x39cc90 = 0;
    _0x45edea = _0x45edea.replace(/[^A-Za-z0-9+/=]/g, "");
    while (_0x39cc90 < _0x45edea.length) {
      _0x51c68b = this._keyStr.indexOf(_0x45edea.charAt(_0x39cc90++));
      _0x18a779 = this._keyStr.indexOf(_0x45edea.charAt(_0x39cc90++));
      _0x3bb8a1 = this._keyStr.indexOf(_0x45edea.charAt(_0x39cc90++));
      _0x498a0a = this._keyStr.indexOf(_0x45edea.charAt(_0x39cc90++));
      _0x2a78ad = _0x51c68b << 2 | _0x18a779 >> 4;
      _0x3633df = (_0x18a779 & 15) << 4 | _0x3bb8a1 >> 2;
      _0x4929fc = (_0x3bb8a1 & 3) << 6 | _0x498a0a;
      _0x2512cf = _0x2512cf + String.fromCharCode(_0x2a78ad);
      _0x3bb8a1 != 64 && (_0x2512cf = _0x2512cf + String.fromCharCode(_0x3633df));
      _0x498a0a != 64 && (_0x2512cf = _0x2512cf + String.fromCharCode(_0x4929fc));
    }
    _0x2512cf = _0x1bad4a._utf8_decode(_0x2512cf);
    return _0x2512cf;
  },
  _utf8_encode: function (_0x3c97bf) {
    _0x3c97bf = _0x3c97bf.replace(/rn/g, "n");
    var _0x123c0c = "";
    for (var _0x3ee753 = 0; _0x3ee753 < _0x3c97bf.length; _0x3ee753++) {
      var _0x515d3f = _0x3c97bf.charCodeAt(_0x3ee753);
      if (_0x515d3f < 128) {
        _0x123c0c += String.fromCharCode(_0x515d3f);
      } else {
        _0x515d3f > 127 && _0x515d3f < 2048 ? (_0x123c0c += String.fromCharCode(_0x515d3f >> 6 | 192), _0x123c0c += String.fromCharCode(_0x515d3f & 63 | 128)) : (_0x123c0c += String.fromCharCode(_0x515d3f >> 12 | 224), _0x123c0c += String.fromCharCode(_0x515d3f >> 6 & 63 | 128), _0x123c0c += String.fromCharCode(_0x515d3f & 63 | 128));
      }
    }
    return _0x123c0c;
  },
  _utf8_decode: function (_0x4ff100) {
    var _0x2134d4 = "";
    var _0x57b015 = 0;
    c1 = c2 = 0;
    var _0x3d2708 = c1;
    while (_0x57b015 < _0x4ff100.length) {
      _0x3d2708 = _0x4ff100.charCodeAt(_0x57b015);
      if (_0x3d2708 < 128) {
        _0x2134d4 += String.fromCharCode(_0x3d2708);
        _0x57b015++;
      } else {
        _0x3d2708 > 191 && _0x3d2708 < 224 ? (c2 = _0x4ff100.charCodeAt(_0x57b015 + 1), _0x2134d4 += String.fromCharCode((_0x3d2708 & 31) << 6 | c2 & 63), _0x57b015 += 2) : (c2 = _0x4ff100.charCodeAt(_0x57b015 + 1), c3 = _0x4ff100.charCodeAt(_0x57b015 + 2), _0x2134d4 += String.fromCharCode((_0x3d2708 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x57b015 += 3);
      }
    }
    return _0x2134d4;
  }
};
function _0x2bb884(_0x53630d) {
  function _0x2c19fe(_0x291f60, _0x1941c6) {
    return _0x291f60 << _0x1941c6 | _0x291f60 >>> 32 - _0x1941c6;
  }
  function _0x582673(_0x13ed0c, _0x551d72) {
    var _0x3f8038, _0x3339c8, _0x2d30f4, _0x423d0b, _0x36cc8c;
    _0x2d30f4 = 2147483648 & _0x13ed0c;
    _0x423d0b = 2147483648 & _0x551d72;
    _0x3f8038 = 1073741824 & _0x13ed0c;
    _0x3339c8 = 1073741824 & _0x551d72;
    _0x36cc8c = (1073741823 & _0x13ed0c) + (1073741823 & _0x551d72);
    return _0x3f8038 & _0x3339c8 ? 2147483648 ^ _0x36cc8c ^ _0x2d30f4 ^ _0x423d0b : _0x3f8038 | _0x3339c8 ? 1073741824 & _0x36cc8c ? 3221225472 ^ _0x36cc8c ^ _0x2d30f4 ^ _0x423d0b : 1073741824 ^ _0x36cc8c ^ _0x2d30f4 ^ _0x423d0b : _0x36cc8c ^ _0x2d30f4 ^ _0x423d0b;
  }
  function _0x5685ff(_0x2fd434, _0x5c2a0a, _0x519849) {
    return _0x2fd434 & _0x5c2a0a | ~_0x2fd434 & _0x519849;
  }
  function _0x497e10(_0x9f167a, _0x104690, _0x174d76) {
    return _0x9f167a & _0x174d76 | _0x104690 & ~_0x174d76;
  }
  function _0x11e2dd(_0x50345b, _0x57393d, _0x5e95f3) {
    return _0x50345b ^ _0x57393d ^ _0x5e95f3;
  }
  function _0x56729c(_0x3b6f16, _0x5709f8, _0xfa7a29) {
    return _0x5709f8 ^ (_0x3b6f16 | ~_0xfa7a29);
  }
  function _0x2ab154(_0xc9e78c, _0x221cfd, _0x2fb348, _0x4242bc, _0xe5755d, _0x5c1d6b, _0x46fcb6) {
    _0xc9e78c = _0x582673(_0xc9e78c, _0x582673(_0x582673(_0x5685ff(_0x221cfd, _0x2fb348, _0x4242bc), _0xe5755d), _0x46fcb6));
    return _0x582673(_0x2c19fe(_0xc9e78c, _0x5c1d6b), _0x221cfd);
  }
  function _0x22640c(_0x1d2283, _0x3800d0, _0x488909, _0x4882c0, _0x4b21e6, _0xfce10f, _0x334b82) {
    _0x1d2283 = _0x582673(_0x1d2283, _0x582673(_0x582673(_0x497e10(_0x3800d0, _0x488909, _0x4882c0), _0x4b21e6), _0x334b82));
    return _0x582673(_0x2c19fe(_0x1d2283, _0xfce10f), _0x3800d0);
  }
  function _0x2578cf(_0x402de3, _0x423570, _0x6af484, _0x153bc4, _0x42e003, _0x509a1b, _0x27c3ee) {
    _0x402de3 = _0x582673(_0x402de3, _0x582673(_0x582673(_0x11e2dd(_0x423570, _0x6af484, _0x153bc4), _0x42e003), _0x27c3ee));
    return _0x582673(_0x2c19fe(_0x402de3, _0x509a1b), _0x423570);
  }
  function _0x45a508(_0x13b304, _0x313847, _0x5baa9b, _0x20e14a, _0x15004f, _0x200e98, _0x3b7327) {
    _0x13b304 = _0x582673(_0x13b304, _0x582673(_0x582673(_0x56729c(_0x313847, _0x5baa9b, _0x20e14a), _0x15004f), _0x3b7327));
    return _0x582673(_0x2c19fe(_0x13b304, _0x200e98), _0x313847);
  }
  function _0x5c68f1(_0x558ded) {
    for (var _0xde511a, _0x1d3ab0 = _0x558ded.length, _0x2f0f8d = _0x1d3ab0 + 8, _0x2162df = (_0x2f0f8d - _0x2f0f8d % 64) / 64, _0x56a740 = 16 * (_0x2162df + 1), _0x16627b = new Array(_0x56a740 - 1), _0x59fc4c = 0, _0x1b3fd9 = 0; _0x1d3ab0 > _0x1b3fd9;) {
      _0xde511a = (_0x1b3fd9 - _0x1b3fd9 % 4) / 4;
      _0x59fc4c = _0x1b3fd9 % 4 * 8;
      _0x16627b[_0xde511a] = _0x16627b[_0xde511a] | _0x558ded.charCodeAt(_0x1b3fd9) << _0x59fc4c;
      _0x1b3fd9++;
    }
    _0xde511a = (_0x1b3fd9 - _0x1b3fd9 % 4) / 4;
    _0x59fc4c = _0x1b3fd9 % 4 * 8;
    _0x16627b[_0xde511a] = _0x16627b[_0xde511a] | 128 << _0x59fc4c;
    _0x16627b[_0x56a740 - 2] = _0x1d3ab0 << 3;
    _0x16627b[_0x56a740 - 1] = _0x1d3ab0 >>> 29;
    return _0x16627b;
  }
  function _0x4dc90c(_0x5168bf) {
    var _0x52a75c,
      _0x98f213,
      _0x40bc51 = "",
      _0x3f2f79 = "";
    for (_0x98f213 = 0; 3 >= _0x98f213; _0x98f213++) {
      _0x52a75c = _0x5168bf >>> 8 * _0x98f213 & 255;
      _0x3f2f79 = "0" + _0x52a75c.toString(16);
      _0x40bc51 += _0x3f2f79.substr(_0x3f2f79.length - 2, 2);
    }
    return _0x40bc51;
  }
  function _0x2ab358(_0x490316) {
    _0x490316 = _0x490316.replace(/\r\n/g, "\n");
    for (var _0x442102 = "", _0x52801a = 0; _0x52801a < _0x490316.length; _0x52801a++) {
      var _0xd4555f = _0x490316.charCodeAt(_0x52801a);
      128 > _0xd4555f ? _0x442102 += String.fromCharCode(_0xd4555f) : _0xd4555f > 127 && 2048 > _0xd4555f ? (_0x442102 += String.fromCharCode(_0xd4555f >> 6 | 192), _0x442102 += String.fromCharCode(63 & _0xd4555f | 128)) : (_0x442102 += String.fromCharCode(_0xd4555f >> 12 | 224), _0x442102 += String.fromCharCode(_0xd4555f >> 6 & 63 | 128), _0x442102 += String.fromCharCode(63 & _0xd4555f | 128));
    }
    return _0x442102;
  }
  var _0x1bceab,
    _0xb40ab,
    _0x3651be,
    _0x11c5ca,
    _0x489784,
    _0x5731c0,
    _0x54fdaa,
    _0x5c15f8,
    _0x4fab92,
    _0x374627 = [],
    _0x12a7d8 = 7,
    _0x30c4b9 = 12,
    _0x27d393 = 17,
    _0x59621d = 22,
    _0x11afd4 = 5,
    _0x266ad4 = 9,
    _0x4b62aa = 14,
    _0x2367b3 = 20,
    _0x4a90c2 = 4,
    _0x50845b = 11,
    _0x5e3770 = 16,
    _0x12e076 = 23,
    _0x18b1f1 = 6,
    _0x23ca64 = 10,
    _0x11913c = 15,
    _0x4b4b4f = 21;
  for (_0x53630d = _0x2ab358(_0x53630d), _0x374627 = _0x5c68f1(_0x53630d), _0x5731c0 = 1732584193, _0x54fdaa = 4023233417, _0x5c15f8 = 2562383102, _0x4fab92 = 271733878, _0x1bceab = 0; _0x1bceab < _0x374627.length; _0x1bceab += 16) {
    _0xb40ab = _0x5731c0;
    _0x3651be = _0x54fdaa;
    _0x11c5ca = _0x5c15f8;
    _0x489784 = _0x4fab92;
    _0x5731c0 = _0x2ab154(_0x5731c0, _0x54fdaa, _0x5c15f8, _0x4fab92, _0x374627[_0x1bceab + 0], _0x12a7d8, 3614090360);
    _0x4fab92 = _0x2ab154(_0x4fab92, _0x5731c0, _0x54fdaa, _0x5c15f8, _0x374627[_0x1bceab + 1], _0x30c4b9, 3905402710);
    _0x5c15f8 = _0x2ab154(_0x5c15f8, _0x4fab92, _0x5731c0, _0x54fdaa, _0x374627[_0x1bceab + 2], _0x27d393, 606105819);
    _0x54fdaa = _0x2ab154(_0x54fdaa, _0x5c15f8, _0x4fab92, _0x5731c0, _0x374627[_0x1bceab + 3], _0x59621d, 3250441966);
    _0x5731c0 = _0x2ab154(_0x5731c0, _0x54fdaa, _0x5c15f8, _0x4fab92, _0x374627[_0x1bceab + 4], _0x12a7d8, 4118548399);
    _0x4fab92 = _0x2ab154(_0x4fab92, _0x5731c0, _0x54fdaa, _0x5c15f8, _0x374627[_0x1bceab + 5], _0x30c4b9, 1200080426);
    _0x5c15f8 = _0x2ab154(_0x5c15f8, _0x4fab92, _0x5731c0, _0x54fdaa, _0x374627[_0x1bceab + 6], _0x27d393, 2821735955);
    _0x54fdaa = _0x2ab154(_0x54fdaa, _0x5c15f8, _0x4fab92, _0x5731c0, _0x374627[_0x1bceab + 7], _0x59621d, 4249261313);
    _0x5731c0 = _0x2ab154(_0x5731c0, _0x54fdaa, _0x5c15f8, _0x4fab92, _0x374627[_0x1bceab + 8], _0x12a7d8, 1770035416);
    _0x4fab92 = _0x2ab154(_0x4fab92, _0x5731c0, _0x54fdaa, _0x5c15f8, _0x374627[_0x1bceab + 9], _0x30c4b9, 2336552879);
    _0x5c15f8 = _0x2ab154(_0x5c15f8, _0x4fab92, _0x5731c0, _0x54fdaa, _0x374627[_0x1bceab + 10], _0x27d393, 4294925233);
    _0x54fdaa = _0x2ab154(_0x54fdaa, _0x5c15f8, _0x4fab92, _0x5731c0, _0x374627[_0x1bceab + 11], _0x59621d, 2304563134);
    _0x5731c0 = _0x2ab154(_0x5731c0, _0x54fdaa, _0x5c15f8, _0x4fab92, _0x374627[_0x1bceab + 12], _0x12a7d8, 1804603682);
    _0x4fab92 = _0x2ab154(_0x4fab92, _0x5731c0, _0x54fdaa, _0x5c15f8, _0x374627[_0x1bceab + 13], _0x30c4b9, 4254626195);
    _0x5c15f8 = _0x2ab154(_0x5c15f8, _0x4fab92, _0x5731c0, _0x54fdaa, _0x374627[_0x1bceab + 14], _0x27d393, 2792965006);
    _0x54fdaa = _0x2ab154(_0x54fdaa, _0x5c15f8, _0x4fab92, _0x5731c0, _0x374627[_0x1bceab + 15], _0x59621d, 1236535329);
    _0x5731c0 = _0x22640c(_0x5731c0, _0x54fdaa, _0x5c15f8, _0x4fab92, _0x374627[_0x1bceab + 1], _0x11afd4, 4129170786);
    _0x4fab92 = _0x22640c(_0x4fab92, _0x5731c0, _0x54fdaa, _0x5c15f8, _0x374627[_0x1bceab + 6], _0x266ad4, 3225465664);
    _0x5c15f8 = _0x22640c(_0x5c15f8, _0x4fab92, _0x5731c0, _0x54fdaa, _0x374627[_0x1bceab + 11], _0x4b62aa, 643717713);
    _0x54fdaa = _0x22640c(_0x54fdaa, _0x5c15f8, _0x4fab92, _0x5731c0, _0x374627[_0x1bceab + 0], _0x2367b3, 3921069994);
    _0x5731c0 = _0x22640c(_0x5731c0, _0x54fdaa, _0x5c15f8, _0x4fab92, _0x374627[_0x1bceab + 5], _0x11afd4, 3593408605);
    _0x4fab92 = _0x22640c(_0x4fab92, _0x5731c0, _0x54fdaa, _0x5c15f8, _0x374627[_0x1bceab + 10], _0x266ad4, 38016083);
    _0x5c15f8 = _0x22640c(_0x5c15f8, _0x4fab92, _0x5731c0, _0x54fdaa, _0x374627[_0x1bceab + 15], _0x4b62aa, 3634488961);
    _0x54fdaa = _0x22640c(_0x54fdaa, _0x5c15f8, _0x4fab92, _0x5731c0, _0x374627[_0x1bceab + 4], _0x2367b3, 3889429448);
    _0x5731c0 = _0x22640c(_0x5731c0, _0x54fdaa, _0x5c15f8, _0x4fab92, _0x374627[_0x1bceab + 9], _0x11afd4, 568446438);
    _0x4fab92 = _0x22640c(_0x4fab92, _0x5731c0, _0x54fdaa, _0x5c15f8, _0x374627[_0x1bceab + 14], _0x266ad4, 3275163606);
    _0x5c15f8 = _0x22640c(_0x5c15f8, _0x4fab92, _0x5731c0, _0x54fdaa, _0x374627[_0x1bceab + 3], _0x4b62aa, 4107603335);
    _0x54fdaa = _0x22640c(_0x54fdaa, _0x5c15f8, _0x4fab92, _0x5731c0, _0x374627[_0x1bceab + 8], _0x2367b3, 1163531501);
    _0x5731c0 = _0x22640c(_0x5731c0, _0x54fdaa, _0x5c15f8, _0x4fab92, _0x374627[_0x1bceab + 13], _0x11afd4, 2850285829);
    _0x4fab92 = _0x22640c(_0x4fab92, _0x5731c0, _0x54fdaa, _0x5c15f8, _0x374627[_0x1bceab + 2], _0x266ad4, 4243563512);
    _0x5c15f8 = _0x22640c(_0x5c15f8, _0x4fab92, _0x5731c0, _0x54fdaa, _0x374627[_0x1bceab + 7], _0x4b62aa, 1735328473);
    _0x54fdaa = _0x22640c(_0x54fdaa, _0x5c15f8, _0x4fab92, _0x5731c0, _0x374627[_0x1bceab + 12], _0x2367b3, 2368359562);
    _0x5731c0 = _0x2578cf(_0x5731c0, _0x54fdaa, _0x5c15f8, _0x4fab92, _0x374627[_0x1bceab + 5], _0x4a90c2, 4294588738);
    _0x4fab92 = _0x2578cf(_0x4fab92, _0x5731c0, _0x54fdaa, _0x5c15f8, _0x374627[_0x1bceab + 8], _0x50845b, 2272392833);
    _0x5c15f8 = _0x2578cf(_0x5c15f8, _0x4fab92, _0x5731c0, _0x54fdaa, _0x374627[_0x1bceab + 11], _0x5e3770, 1839030562);
    _0x54fdaa = _0x2578cf(_0x54fdaa, _0x5c15f8, _0x4fab92, _0x5731c0, _0x374627[_0x1bceab + 14], _0x12e076, 4259657740);
    _0x5731c0 = _0x2578cf(_0x5731c0, _0x54fdaa, _0x5c15f8, _0x4fab92, _0x374627[_0x1bceab + 1], _0x4a90c2, 2763975236);
    _0x4fab92 = _0x2578cf(_0x4fab92, _0x5731c0, _0x54fdaa, _0x5c15f8, _0x374627[_0x1bceab + 4], _0x50845b, 1272893353);
    _0x5c15f8 = _0x2578cf(_0x5c15f8, _0x4fab92, _0x5731c0, _0x54fdaa, _0x374627[_0x1bceab + 7], _0x5e3770, 4139469664);
    _0x54fdaa = _0x2578cf(_0x54fdaa, _0x5c15f8, _0x4fab92, _0x5731c0, _0x374627[_0x1bceab + 10], _0x12e076, 3200236656);
    _0x5731c0 = _0x2578cf(_0x5731c0, _0x54fdaa, _0x5c15f8, _0x4fab92, _0x374627[_0x1bceab + 13], _0x4a90c2, 681279174);
    _0x4fab92 = _0x2578cf(_0x4fab92, _0x5731c0, _0x54fdaa, _0x5c15f8, _0x374627[_0x1bceab + 0], _0x50845b, 3936430074);
    _0x5c15f8 = _0x2578cf(_0x5c15f8, _0x4fab92, _0x5731c0, _0x54fdaa, _0x374627[_0x1bceab + 3], _0x5e3770, 3572445317);
    _0x54fdaa = _0x2578cf(_0x54fdaa, _0x5c15f8, _0x4fab92, _0x5731c0, _0x374627[_0x1bceab + 6], _0x12e076, 76029189);
    _0x5731c0 = _0x2578cf(_0x5731c0, _0x54fdaa, _0x5c15f8, _0x4fab92, _0x374627[_0x1bceab + 9], _0x4a90c2, 3654602809);
    _0x4fab92 = _0x2578cf(_0x4fab92, _0x5731c0, _0x54fdaa, _0x5c15f8, _0x374627[_0x1bceab + 12], _0x50845b, 3873151461);
    _0x5c15f8 = _0x2578cf(_0x5c15f8, _0x4fab92, _0x5731c0, _0x54fdaa, _0x374627[_0x1bceab + 15], _0x5e3770, 530742520);
    _0x54fdaa = _0x2578cf(_0x54fdaa, _0x5c15f8, _0x4fab92, _0x5731c0, _0x374627[_0x1bceab + 2], _0x12e076, 3299628645);
    _0x5731c0 = _0x45a508(_0x5731c0, _0x54fdaa, _0x5c15f8, _0x4fab92, _0x374627[_0x1bceab + 0], _0x18b1f1, 4096336452);
    _0x4fab92 = _0x45a508(_0x4fab92, _0x5731c0, _0x54fdaa, _0x5c15f8, _0x374627[_0x1bceab + 7], _0x23ca64, 1126891415);
    _0x5c15f8 = _0x45a508(_0x5c15f8, _0x4fab92, _0x5731c0, _0x54fdaa, _0x374627[_0x1bceab + 14], _0x11913c, 2878612391);
    _0x54fdaa = _0x45a508(_0x54fdaa, _0x5c15f8, _0x4fab92, _0x5731c0, _0x374627[_0x1bceab + 5], _0x4b4b4f, 4237533241);
    _0x5731c0 = _0x45a508(_0x5731c0, _0x54fdaa, _0x5c15f8, _0x4fab92, _0x374627[_0x1bceab + 12], _0x18b1f1, 1700485571);
    _0x4fab92 = _0x45a508(_0x4fab92, _0x5731c0, _0x54fdaa, _0x5c15f8, _0x374627[_0x1bceab + 3], _0x23ca64, 2399980690);
    _0x5c15f8 = _0x45a508(_0x5c15f8, _0x4fab92, _0x5731c0, _0x54fdaa, _0x374627[_0x1bceab + 10], _0x11913c, 4293915773);
    _0x54fdaa = _0x45a508(_0x54fdaa, _0x5c15f8, _0x4fab92, _0x5731c0, _0x374627[_0x1bceab + 1], _0x4b4b4f, 2240044497);
    _0x5731c0 = _0x45a508(_0x5731c0, _0x54fdaa, _0x5c15f8, _0x4fab92, _0x374627[_0x1bceab + 8], _0x18b1f1, 1873313359);
    _0x4fab92 = _0x45a508(_0x4fab92, _0x5731c0, _0x54fdaa, _0x5c15f8, _0x374627[_0x1bceab + 15], _0x23ca64, 4264355552);
    _0x5c15f8 = _0x45a508(_0x5c15f8, _0x4fab92, _0x5731c0, _0x54fdaa, _0x374627[_0x1bceab + 6], _0x11913c, 2734768916);
    _0x54fdaa = _0x45a508(_0x54fdaa, _0x5c15f8, _0x4fab92, _0x5731c0, _0x374627[_0x1bceab + 13], _0x4b4b4f, 1309151649);
    _0x5731c0 = _0x45a508(_0x5731c0, _0x54fdaa, _0x5c15f8, _0x4fab92, _0x374627[_0x1bceab + 4], _0x18b1f1, 4149444226);
    _0x4fab92 = _0x45a508(_0x4fab92, _0x5731c0, _0x54fdaa, _0x5c15f8, _0x374627[_0x1bceab + 11], _0x23ca64, 3174756917);
    _0x5c15f8 = _0x45a508(_0x5c15f8, _0x4fab92, _0x5731c0, _0x54fdaa, _0x374627[_0x1bceab + 2], _0x11913c, 718787259);
    _0x54fdaa = _0x45a508(_0x54fdaa, _0x5c15f8, _0x4fab92, _0x5731c0, _0x374627[_0x1bceab + 9], _0x4b4b4f, 3951481745);
    _0x5731c0 = _0x582673(_0x5731c0, _0xb40ab);
    _0x54fdaa = _0x582673(_0x54fdaa, _0x3651be);
    _0x5c15f8 = _0x582673(_0x5c15f8, _0x11c5ca);
    _0x4fab92 = _0x582673(_0x4fab92, _0x489784);
  }
  var _0x16e9b9 = _0x4dc90c(_0x5731c0) + _0x4dc90c(_0x54fdaa) + _0x4dc90c(_0x5c15f8) + _0x4dc90c(_0x4fab92);
  return _0x16e9b9.toLowerCase();
}
function _0x18f0de(_0x2bff2c) {
  function _0x48eaaf(_0x311e29, _0x2f48af) {
    return (_0x311e29 & 2147483647) + (_0x2f48af & 2147483647) ^ _0x311e29 & 2147483648 ^ _0x2f48af & 2147483648;
  }
  function _0x51383b(_0x18424c) {
    var _0x5f2361 = "0123456789abcdef",
      _0x3eb903 = "";
    for (var _0x254234 = 7; _0x254234 >= 0; _0x254234--) {
      _0x3eb903 += _0x5f2361.charAt(_0x18424c >> _0x254234 * 4 & 15);
    }
    return _0x3eb903;
  }
  function _0x30b996(_0x246899) {
    var _0x42f5c1 = (_0x246899.length + 8 >> 6) + 1,
      _0x5307b5 = new Array(_0x42f5c1 * 16);
    for (var _0x569f90 = 0; _0x569f90 < _0x42f5c1 * 16; _0x569f90++) {
      _0x5307b5[_0x569f90] = 0;
    }
    for (_0x569f90 = 0; _0x569f90 < _0x246899.length; _0x569f90++) {
      _0x5307b5[_0x569f90 >> 2] |= _0x246899.charCodeAt(_0x569f90) << 24 - (_0x569f90 & 3) * 8;
    }
    _0x5307b5[_0x569f90 >> 2] |= 128 << 24 - (_0x569f90 & 3) * 8;
    _0x5307b5[_0x42f5c1 * 16 - 1] = _0x246899.length * 8;
    return _0x5307b5;
  }
  function _0x4f7613(_0x4ace0a, _0x27b9ef) {
    return _0x4ace0a << _0x27b9ef | _0x4ace0a >>> 32 - _0x27b9ef;
  }
  function _0x117db9(_0x473701, _0x4966a7, _0x169560, _0x198495) {
    if (_0x473701 < 20) {
      return _0x4966a7 & _0x169560 | ~_0x4966a7 & _0x198495;
    }
    if (_0x473701 < 40) {
      return _0x4966a7 ^ _0x169560 ^ _0x198495;
    }
    if (_0x473701 < 60) {
      return _0x4966a7 & _0x169560 | _0x4966a7 & _0x198495 | _0x169560 & _0x198495;
    }
    return _0x4966a7 ^ _0x169560 ^ _0x198495;
  }
  function _0x5cda73(_0x341b95) {
    return _0x341b95 < 20 ? 1518500249 : _0x341b95 < 40 ? 1859775393 : _0x341b95 < 60 ? -1894007588 : -899497514;
  }
  var _0x316d7f = _0x30b996(_0x2bff2c),
    _0x186be9 = new Array(80),
    _0x2a61d1 = 1732584193,
    _0x13e842 = -271733879,
    _0x3293c5 = -1732584194,
    _0x34a20c = 271733878,
    _0x57dae9 = -1009589776;
  for (var _0x3e62a4 = 0; _0x3e62a4 < _0x316d7f.length; _0x3e62a4 += 16) {
    var _0x4a16c8 = _0x2a61d1,
      _0x1633ed = _0x13e842,
      _0x5e7caf = _0x3293c5,
      _0x2fc101 = _0x34a20c,
      _0x3e07e7 = _0x57dae9;
    for (var _0x48859a = 0; _0x48859a < 80; _0x48859a++) {
      if (_0x48859a < 16) {
        _0x186be9[_0x48859a] = _0x316d7f[_0x3e62a4 + _0x48859a];
      } else {
        _0x186be9[_0x48859a] = _0x4f7613(_0x186be9[_0x48859a - 3] ^ _0x186be9[_0x48859a - 8] ^ _0x186be9[_0x48859a - 14] ^ _0x186be9[_0x48859a - 16], 1);
      }
      t = _0x48eaaf(_0x48eaaf(_0x4f7613(_0x2a61d1, 5), _0x117db9(_0x48859a, _0x13e842, _0x3293c5, _0x34a20c)), _0x48eaaf(_0x48eaaf(_0x57dae9, _0x186be9[_0x48859a]), _0x5cda73(_0x48859a)));
      _0x57dae9 = _0x34a20c;
      _0x34a20c = _0x3293c5;
      _0x3293c5 = _0x4f7613(_0x13e842, 30);
      _0x13e842 = _0x2a61d1;
      _0x2a61d1 = t;
    }
    _0x2a61d1 = _0x48eaaf(_0x2a61d1, _0x4a16c8);
    _0x13e842 = _0x48eaaf(_0x13e842, _0x1633ed);
    _0x3293c5 = _0x48eaaf(_0x3293c5, _0x5e7caf);
    _0x34a20c = _0x48eaaf(_0x34a20c, _0x2fc101);
    _0x57dae9 = _0x48eaaf(_0x57dae9, _0x3e07e7);
  }
  SHA1Value = _0x51383b(_0x2a61d1) + _0x51383b(_0x13e842) + _0x51383b(_0x3293c5) + _0x51383b(_0x34a20c) + _0x51383b(_0x57dae9);
  return SHA1Value;
}
function _0x1a8c10(_0x31d170) {
  const _0x289a26 = 8,
    _0x283c64 = 0;
  function _0x1be7b2(_0x77cb55, _0x39dd32) {
    const _0x11f570 = (65535 & _0x77cb55) + (65535 & _0x39dd32);
    return (_0x77cb55 >> 16) + (_0x39dd32 >> 16) + (_0x11f570 >> 16) << 16 | 65535 & _0x11f570;
  }
  function _0xaf7add(_0xe1126, _0x1e2520) {
    return _0xe1126 >>> _0x1e2520 | _0xe1126 << 32 - _0x1e2520;
  }
  function _0x57d53a(_0x572639, _0x3ad678) {
    return _0x572639 >>> _0x3ad678;
  }
  function _0x23a893(_0x24207c, _0x148b3e, _0x351208) {
    return _0x24207c & _0x148b3e ^ ~_0x24207c & _0x351208;
  }
  function _0x53ec56(_0x453691, _0xe3cc9, _0x140a08) {
    return _0x453691 & _0xe3cc9 ^ _0x453691 & _0x140a08 ^ _0xe3cc9 & _0x140a08;
  }
  function _0x323115(_0x32feee) {
    return _0xaf7add(_0x32feee, 2) ^ _0xaf7add(_0x32feee, 13) ^ _0xaf7add(_0x32feee, 22);
  }
  function _0x428f0f(_0x30f72d) {
    return _0xaf7add(_0x30f72d, 6) ^ _0xaf7add(_0x30f72d, 11) ^ _0xaf7add(_0x30f72d, 25);
  }
  function _0x87bb3d(_0x3d62e7) {
    return _0xaf7add(_0x3d62e7, 7) ^ _0xaf7add(_0x3d62e7, 18) ^ _0x57d53a(_0x3d62e7, 3);
  }
  return function (_0x437994) {
    const _0x452fc5 = _0x283c64 ? "0123456789ABCDEF" : "0123456789abcdef";
    let _0x3fec70 = "";
    for (let _0x21fff9 = 0; _0x21fff9 < 4 * _0x437994.length; _0x21fff9++) {
      _0x3fec70 += _0x452fc5.charAt(_0x437994[_0x21fff9 >> 2] >> 8 * (3 - _0x21fff9 % 4) + 4 & 15) + _0x452fc5.charAt(_0x437994[_0x21fff9 >> 2] >> 8 * (3 - _0x21fff9 % 4) & 15);
    }
    return _0x3fec70;
  }(function (_0x56f76c, _0x40533a) {
    const _0x45a6ba = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      _0x14eadc = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
      _0x1a258f = new Array(64);
    let _0x4b5586, _0x4c1da0, _0x3ccb28, _0x4f065c, _0x5c4ded, _0xc4ea9a, _0x2e7818, _0x2a8b16, _0x4a4096, _0x498c55, _0x2b558b, _0x2ffb1d;
    for (_0x56f76c[_0x40533a >> 5] |= 128 << 24 - _0x40533a % 32, _0x56f76c[15 + (_0x40533a + 64 >> 9 << 4)] = _0x40533a, _0x4a4096 = 0; _0x4a4096 < _0x56f76c.length; _0x4a4096 += 16) {
      for (_0x4b5586 = _0x14eadc[0], _0x4c1da0 = _0x14eadc[1], _0x3ccb28 = _0x14eadc[2], _0x4f065c = _0x14eadc[3], _0x5c4ded = _0x14eadc[4], _0xc4ea9a = _0x14eadc[5], _0x2e7818 = _0x14eadc[6], _0x2a8b16 = _0x14eadc[7], _0x498c55 = 0; _0x498c55 < 64; _0x498c55++) {
        _0x1a258f[_0x498c55] = _0x498c55 < 16 ? _0x56f76c[_0x498c55 + _0x4a4096] : _0x1be7b2(_0x1be7b2(_0x1be7b2(_0xaf7add(_0x21acdd = _0x1a258f[_0x498c55 - 2], 17) ^ _0xaf7add(_0x21acdd, 19) ^ _0x57d53a(_0x21acdd, 10), _0x1a258f[_0x498c55 - 7]), _0x87bb3d(_0x1a258f[_0x498c55 - 15])), _0x1a258f[_0x498c55 - 16]);
        _0x2b558b = _0x1be7b2(_0x1be7b2(_0x1be7b2(_0x1be7b2(_0x2a8b16, _0x428f0f(_0x5c4ded)), _0x23a893(_0x5c4ded, _0xc4ea9a, _0x2e7818)), _0x45a6ba[_0x498c55]), _0x1a258f[_0x498c55]);
        _0x2ffb1d = _0x1be7b2(_0x323115(_0x4b5586), _0x53ec56(_0x4b5586, _0x4c1da0, _0x3ccb28));
        _0x2a8b16 = _0x2e7818;
        _0x2e7818 = _0xc4ea9a;
        _0xc4ea9a = _0x5c4ded;
        _0x5c4ded = _0x1be7b2(_0x4f065c, _0x2b558b);
        _0x4f065c = _0x3ccb28;
        _0x3ccb28 = _0x4c1da0;
        _0x4c1da0 = _0x4b5586;
        _0x4b5586 = _0x1be7b2(_0x2b558b, _0x2ffb1d);
      }
      _0x14eadc[0] = _0x1be7b2(_0x4b5586, _0x14eadc[0]);
      _0x14eadc[1] = _0x1be7b2(_0x4c1da0, _0x14eadc[1]);
      _0x14eadc[2] = _0x1be7b2(_0x3ccb28, _0x14eadc[2]);
      _0x14eadc[3] = _0x1be7b2(_0x4f065c, _0x14eadc[3]);
      _0x14eadc[4] = _0x1be7b2(_0x5c4ded, _0x14eadc[4]);
      _0x14eadc[5] = _0x1be7b2(_0xc4ea9a, _0x14eadc[5]);
      _0x14eadc[6] = _0x1be7b2(_0x2e7818, _0x14eadc[6]);
      _0x14eadc[7] = _0x1be7b2(_0x2a8b16, _0x14eadc[7]);
    }
    var _0x21acdd;
    return _0x14eadc;
  }(function (_0x3846cd) {
    const _0x2cb4ec = [],
      _0x2c6ab5 = (1 << _0x289a26) - 1;
    for (let _0x120cc5 = 0; _0x120cc5 < _0x3846cd.length * _0x289a26; _0x120cc5 += _0x289a26) {
      _0x2cb4ec[_0x120cc5 >> 5] |= (_0x3846cd.charCodeAt(_0x120cc5 / _0x289a26) & _0x2c6ab5) << 24 - _0x120cc5 % 32;
    }
    return _0x2cb4ec;
  }(_0x31d170 = function (_0x3c0d28) {
    _0x3c0d28 = _0x3c0d28.replace(/\r\n/g, "\n");
    let _0x1f5f3a = "";
    for (let _0xe248bb = 0; _0xe248bb < _0x3c0d28.length; _0xe248bb++) {
      const _0x5f1df0 = _0x3c0d28.charCodeAt(_0xe248bb);
      _0x5f1df0 < 128 ? _0x1f5f3a += String.fromCharCode(_0x5f1df0) : _0x5f1df0 > 127 && _0x5f1df0 < 2048 ? (_0x1f5f3a += String.fromCharCode(_0x5f1df0 >> 6 | 192), _0x1f5f3a += String.fromCharCode(63 & _0x5f1df0 | 128)) : (_0x1f5f3a += String.fromCharCode(_0x5f1df0 >> 12 | 224), _0x1f5f3a += String.fromCharCode(_0x5f1df0 >> 6 & 63 | 128), _0x1f5f3a += String.fromCharCode(63 & _0x5f1df0 | 128));
    }
    return _0x1f5f3a;
  }(_0x31d170)), _0x31d170.length * _0x289a26));
}
function _0x40cedb(_0x144da3, _0x6b09ee) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x5092a1, _0x16d1d6) {
      this.name = _0x5092a1;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x16d1d6);
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
    getdata(_0x9f82d1) {
      let _0x1bb355 = this.getval(_0x9f82d1);
      if (/^@/.test(_0x9f82d1)) {
        const [, _0x2c445d, _0x4dd56c] = /^@(.*?)\.(.*?)$/.exec(_0x9f82d1),
          _0x44fd8a = _0x2c445d ? this.getval(_0x2c445d) : "";
        if (_0x44fd8a) {
          try {
            const _0x332da7 = JSON.parse(_0x44fd8a);
            _0x1bb355 = _0x332da7 ? this.lodash_get(_0x332da7, _0x4dd56c, "") : _0x1bb355;
          } catch (_0x1f031e) {
            _0x1bb355 = "";
          }
        }
      }
      return _0x1bb355;
    }
    setdata(_0x1d3674, _0x1c2c59) {
      let _0xf5b98 = !1;
      if (/^@/.test(_0x1c2c59)) {
        const [, _0x55d9db, _0x1dedc6] = /^@(.*?)\.(.*?)$/.exec(_0x1c2c59),
          _0x32206d = this.getval(_0x55d9db),
          _0xdb5f85 = _0x55d9db ? "null" === _0x32206d ? null : _0x32206d || "{}" : "{}";
        try {
          const _0x4970bc = JSON.parse(_0xdb5f85);
          this.lodash_set(_0x4970bc, _0x1dedc6, _0x1d3674);
          _0xf5b98 = this.setval(JSON.stringify(_0x4970bc), _0x55d9db);
        } catch (_0x54786e) {
          const _0xf6cb30 = {};
          this.lodash_set(_0xf6cb30, _0x1dedc6, _0x1d3674);
          _0xf5b98 = this.setval(JSON.stringify(_0xf6cb30), _0x55d9db);
        }
      } else {
        _0xf5b98 = this.setval(_0x1d3674, _0x1c2c59);
      }
      return _0xf5b98;
    }
    getval(_0x1b7084) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x1b7084) : this.isQuanX() ? $prefs.valueForKey(_0x1b7084) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1b7084]) : this.data && this.data[_0x1b7084] || null;
    }
    setval(_0x4e3069, _0x2b0084) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x4e3069, _0x2b0084) : this.isQuanX() ? $prefs.setValueForKey(_0x4e3069, _0x2b0084) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2b0084] = _0x4e3069, this.writedata(), !0) : this.data && this.data[_0x2b0084] || null;
    }
    send(_0x41777f, _0x284537, _0x33f5c1 = () => {}) {
      if (_0x41777f != "get" && _0x41777f != "post" && _0x41777f != "put" && _0x41777f != "delete") {
        console.log("无效的http方法：" + _0x41777f);
        return;
      }
      if (_0x41777f == "get" && _0x284537.headers) {
        delete _0x284537.headers["Content-Type"];
        delete _0x284537.headers["Content-Length"];
      } else {
        if (_0x284537.body && _0x284537.headers) {
          if (!_0x284537.headers["Content-Type"]) {
            _0x284537.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x284537.headers = _0x284537.headers || {};
          const _0x3d91a7 = {
            "X-Surge-Skip-Scripting": !1
          };
          Object.assign(_0x284537.headers, _0x3d91a7);
        }
        let _0x32fa65 = {
          method: _0x41777f,
          url: _0x284537.url,
          headers: _0x284537.headers,
          timeout: _0x284537.timeout,
          data: _0x284537.body
        };
        if (_0x41777f == "get") {
          delete _0x32fa65.data;
        }
        $axios(_0x32fa65).then(_0xf9715b => {
          const {
              status: _0x545b6e,
              request: _0x33efe8,
              headers: _0x35bdea,
              data: _0x140e7d
            } = _0xf9715b,
            _0x4e4ed4 = {
              statusCode: _0x545b6e,
              headers: _0x35bdea,
              body: _0x140e7d
            };
          _0x33f5c1(null, _0x33efe8, _0x4e4ed4);
        }).catch(_0x5d23e0 => console.log(_0x5d23e0));
      } else {
        if (this.isQuanX()) {
          const _0x2f8074 = {
            hints: !1
          };
          _0x284537.method = _0x41777f.toUpperCase();
          this.isNeedRewrite && (_0x284537.opts = _0x284537.opts || {}, Object.assign(_0x284537.opts, _0x2f8074));
          $task.fetch(_0x284537).then(_0x7d592f => {
            const {
                statusCode: _0x2558e4,
                request: _0x2518cb,
                headers: _0x2fe320,
                body: _0x5761b5
              } = _0x7d592f,
              _0x51b55f = {
                statusCode: _0x2558e4,
                headers: _0x2fe320,
                body: _0x5761b5
              };
            _0x33f5c1(null, _0x2518cb, _0x51b55f);
          }, _0x3ca966 => _0x33f5c1(_0x3ca966));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
                url: _0xfb6889,
                ..._0x505dc8
              } = _0x284537,
              _0x58268f = {
                followRedirect: false
              };
            this.instance = this.got.extend(_0x58268f);
            this.instance[_0x41777f](_0xfb6889, _0x505dc8).then(_0x288b72 => {
              const {
                  statusCode: _0x5e26eb,
                  request: _0x4956ca,
                  headers: _0x1ca587,
                  body: _0x2f7801
                } = _0x288b72,
                _0x95f5b4 = {
                  statusCode: _0x5e26eb,
                  headers: _0x1ca587,
                  body: _0x2f7801
                };
              _0x33f5c1(null, _0x4956ca, _0x95f5b4);
            }, _0xac7533 => {
              const {
                message: _0x3976c9,
                response: _0x18d04b
              } = _0xac7533;
              _0x33f5c1(_0x3976c9, _0x18d04b, _0x18d04b && _0x18d04b.body);
            });
          }
        }
      }
    }
    time(_0x3b05ae) {
      let _0x3ccf8f = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x3b05ae) && (_0x3b05ae = _0x3b05ae.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x333be6 in _0x3ccf8f) new RegExp("(" + _0x333be6 + ")").test(_0x3b05ae) && (_0x3b05ae = _0x3b05ae.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3ccf8f[_0x333be6] : ("00" + _0x3ccf8f[_0x333be6]).substr(("" + _0x3ccf8f[_0x333be6]).length)));
      return _0x3b05ae;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let _0x524883 = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x29cb97.isNode()) {
        var _0x3a00b3 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x3a00b3.sendNotify(this.name, _0x524883);
      } else {
        this.msg(_0x524883);
      }
    }
    logAndNotify(_0x455b4b) {
      console.log(_0x455b4b);
      this.notifyStr += _0x455b4b;
      this.notifyStr += "\n";
    }
    msg(_0x5ac7dc = t, _0x4f1511 = "", _0x4f0acb = "", _0x5e69c2) {
      const _0x2bd13d = _0x406893 => {
        if (!_0x406893) {
          return _0x406893;
        }
        if ("string" == typeof _0x406893) {
          return this.isLoon() ? _0x406893 : this.isQuanX() ? {
            "open-url": _0x406893
          } : this.isSurge() ? {
            url: _0x406893
          } : void 0;
        }
        if ("object" == typeof _0x406893) {
          if (this.isLoon()) {
            let _0x36518c = _0x406893.openUrl || _0x406893.url || _0x406893["open-url"],
              _0x51eac7 = _0x406893.mediaUrl || _0x406893["media-url"];
            const _0x46d422 = {
              openUrl: _0x36518c,
              mediaUrl: _0x51eac7
            };
            return _0x46d422;
          }
          if (this.isQuanX()) {
            let _0x51e3bd = _0x406893["open-url"] || _0x406893.url || _0x406893.openUrl,
              _0x91168b = _0x406893["media-url"] || _0x406893.mediaUrl;
            const _0x197f46 = {
              "open-url": _0x51e3bd,
              "media-url": _0x91168b
            };
            return _0x197f46;
          }
          if (this.isSurge()) {
            let _0x466b77 = _0x406893.url || _0x406893.openUrl || _0x406893["open-url"];
            const _0x3855e8 = {
              url: _0x466b77
            };
            return _0x3855e8;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x5ac7dc, _0x4f1511, _0x4f0acb, _0x2bd13d(_0x5e69c2)) : this.isQuanX() && $notify(_0x5ac7dc, _0x4f1511, _0x4f0acb, _0x2bd13d(_0x5e69c2)));
      let _0xbc8b2d = ["", "============== 系统通知 =============="];
      _0xbc8b2d.push(_0x5ac7dc);
      _0x4f1511 && _0xbc8b2d.push(_0x4f1511);
      _0x4f0acb && _0xbc8b2d.push(_0x4f0acb);
      console.log(_0xbc8b2d.join("\n"));
    }
    getMin(_0x1ca9a9, _0x443386) {
      return _0x1ca9a9 < _0x443386 ? _0x1ca9a9 : _0x443386;
    }
    getMax(_0x75de31, _0x2dbe13) {
      return _0x75de31 < _0x2dbe13 ? _0x2dbe13 : _0x75de31;
    }
    padStr(_0x2ad8c9, _0x94643b, _0xe55e51 = "0") {
      let _0x2d96ca = String(_0x2ad8c9),
        _0x1867a1 = _0x94643b > _0x2d96ca.length ? _0x94643b - _0x2d96ca.length : 0,
        _0x2b4fd0 = "";
      for (let _0x32747a = 0; _0x32747a < _0x1867a1; _0x32747a++) {
        _0x2b4fd0 += _0xe55e51;
      }
      _0x2b4fd0 += _0x2d96ca;
      return _0x2b4fd0;
    }
    json2str(_0x41bd45, _0x2fcfb0, _0x44cf8c = false) {
      let _0x2669b2 = [];
      for (let _0x59d951 of Object.keys(_0x41bd45).sort()) {
        let _0x472163 = _0x41bd45[_0x59d951];
        if (_0x472163 && _0x44cf8c) {
          _0x472163 = encodeURIComponent(_0x472163);
        }
        _0x2669b2.push(_0x59d951 + "=" + _0x472163);
      }
      return _0x2669b2.join(_0x2fcfb0);
    }
    str2json(_0x17237f, _0x1c15d1 = false) {
      let _0x8a28b6 = {};
      for (let _0x19615b of _0x17237f.split("&")) {
        if (!_0x19615b) {
          continue;
        }
        let _0x292bde = _0x19615b.indexOf("=");
        if (_0x292bde == -1) {
          continue;
        }
        let _0x24f0ca = _0x19615b.substr(0, _0x292bde),
          _0x222ef7 = _0x19615b.substr(_0x292bde + 1);
        if (_0x1c15d1) {
          _0x222ef7 = decodeURIComponent(_0x222ef7);
        }
        _0x8a28b6[_0x24f0ca] = _0x222ef7;
      }
      return _0x8a28b6;
    }
    randomString(_0x31a6b7, _0x445deb = "abcdef0123456789") {
      let _0x33de84 = "";
      for (let _0x143054 = 0; _0x143054 < _0x31a6b7; _0x143054++) {
        _0x33de84 += _0x445deb.charAt(Math.floor(Math.random() * _0x445deb.length));
      }
      return _0x33de84;
    }
    randomList(_0xe7f949) {
      let _0x79130d = Math.floor(Math.random() * _0xe7f949.length);
      return _0xe7f949[_0x79130d];
    }
    wait(_0x3463fc) {
      return new Promise(_0x2c2aeb => setTimeout(_0x2c2aeb, _0x3463fc));
    }
    done(_0x349f62 = {}) {
      const _0x57733d = new Date().getTime(),
        _0x590798 = (_0x57733d - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x590798 + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x349f62);
      }
    }
  }(_0x144da3, _0x6b09ee);
}
