"""
抓包方法，进小程序，捉 https://jdbapi.socialark.net/api/user/getUserInfo 【Frontauthorization】
name: 加多宝༒村奥
Author: MK集团本部
Date: 0000-00-00
export jdb="备注#ck"
cron: 25 10 * * *
const $ = new Env("加多宝村奥")
"""
#import notify
import requests, json, re, os, sys, time, random, datetime,execjs, io, contextlib
from send_msg import push

environ = "jdb"
name = "加多宝༒奥运"
session = requests.session()

#---------------------抽奖 控制---------------------
control_lucky = 1
#---------------------主代码区块---------------------

def capture_output(func, *args, **kwargs):
    captured_output = io.StringIO()
    with contextlib.redirect_stdout(captured_output):
        func(*args, **kwargs)
    return captured_output.getvalue()

def game(two):
    header["FrontAuthorization"] = two
    url = 'https://jdbapi.socialark.net/api/game/redRainOk'
    data = {"id":3}
    try:
        for _ in range(10):
            time.sleep(2)
            response = session.post(url=url, headers=header, json=data).json()
            if "每人每天最多" in response["msg"]:
                #print(f"🌥️游戏：次数用完")
                break
            elif "操作成功" in response["msg"]:
                print(f"🌥️游戏：+20 积分")
                time.sleep(1)
    except Exception as e:
        print(e)

def NineScore(two):
    header["FrontAuthorization"] = two
    url = 'https://jdbapi.socialark.net/api/game/startNineScore'
    data = {}
    try:
        for _ in range(10):
            time.sleep(2)
            response = session.post(url=url, headers=header, json=data).json()
            if "积分不足" in response["msg"]:
                break
            elif "操作成功" in response["msg"]:
                print(f"🌥️抽奖：{response['data']['prizeName']}")
    except Exception as e:
        print(e)
def run(two):
    header["FrontAuthorization"] = two
    url = 'https://jdbapi.socialark.net/api/user/getUserInfo'
    data = {}
    try:
        #add(two)
        game(two)
        if control_lucky == 1:
            NineScore(two)
        print(f"-----信息-----")
        response = session.post(url=url, headers=header, json=data).json()
        leftScore = response["data"]["leftScore"]
        a,b,c,d,e,f = response["data"]["numMedal1"],response["data"]["numMedal2"],response["data"]["numMedal3"],response["data"]["numMedal4"],response["data"]["numMedal5"],response["data"]["numMedal6"]
        print(f"🌥️积分：{leftScore}积分")
        for ii,i in enumerate([a,b,c,d,e,f],start=1):
            if i != 0:
                print(f"🌥️奖牌：[{ii}]_{i}枚")
        if a>0 and b>0 and c>0 and d>0 and e>0 and f>0:
            time.sleep(2)
            realMedal(two)
    except Exception as e:
        print(e)

def realMedal(two):
    header["FrontAuthorization"] = two
    url = 'https://jdbapi.socialark.net/api/medal/realMedal'
    data = {}
    try:
        response = session.post(url=url, headers=header, json=data).json()
        if response["code"] == 200:
            print(f"🌈合成奖牌：成功，请及时领取")
        else:
            print(f"🌈合成奖牌：失败，{response}")
    except Exception as e:
        print(e)

def main():
    if os.environ.get(environ):
        ck = os.environ.get(environ)
    else:
        ck = ""
        if ck == "":
            print("请设置变量")
            sys.exit()
    ck_run = ck.split('\n')
    ck_run = [item for item in ck_run if item]
    print(f"{' ' * 10}꧁༺ {name} ༻꧂\n")
    total_output = ""
    for i, ck_run_n in enumerate(ck_run):
        print(f'\n----------- 🍺账号【{i + 1}/{len(ck_run)}】执行🍺 -----------')
        try:
            id,two= ck_run_n.split('#',2)
            #id = id[:3] + "*****" + id[-3:]
            print(f"📱：{id}")
            run(two)
            user_output = capture_output(run, two)
            total_output += f"[账号 {i + 1}][{id}]{user_output}"
            time.sleep(random.randint(1, 2))
        except Exception as e:
            print(e)
            #notify.send('title', 'message')
    print(f'\n----------- 🎊 执 行  结 束 🎊 -----------')
    push(f"{name}", f"{total_output}")

if __name__ == '__main__':
    header = {
        "Connection": "keep-alive",
        "Host": "jdbapi.socialark.net",
        "xweb_xhr": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b13)XWEB/11275",
        "Content-Type": "application/json;charset=UTF-8",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9"
    }
    main()
