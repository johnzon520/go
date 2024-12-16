"""
name: 益禾堂
Author: MK集团本部
export yht="备注#token#inviteUserId"
cron: 0 5 * * *
备注：ck不过期 只能浇水了助力不行
"""
#import notify
import requests, json, re, os, sys, time, random, datetime, urllib3, certifi, logging
response = requests.get("https://mkjt.jdmk.xyz/mkjt.txt")
response.encoding = 'utf-8'
txt = response.text
print(txt)
logging.basicConfig(format='%(message)s',level=logging.DEBUG)
logging.getLogger().setLevel(logging.ERROR)
logging.getLogger().setLevel(logging.INFO)
environ = "yht"
name = "益禾༒奶茶"
session = requests.session()
helpid = []
#--------------------- 控制区块 ---------------------
control_js = 1  # 0 → 储水模式，1 → 浇水模式
control_sh = 0  # 0 → 手动点击最后一次浇水，1 → 自动浇水
#---------------------主代码区块---------------------

def run(id,two):
    url_info = 'https://webapi.qmai.cn/web/cmk-center/nurture/activityInfo'
    url = 'https://webapi.qmai.cn/web/cmk-center/nurture/add/nutrient'
    header = {
        "Host": "webapi.qmai.cn",
        "Connection": "keep-alive",
        "Accept": "v=1.0",
        "content-type": "application/json",
        "Qm-From": "wechat",
        "Qm-From-Type": "catering",
        "Qm-User-Token": two,
        "charset": "https://servicewechat.com/wx4080846d0cec2fd5/411/page-frame.html",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.188 Mobile Safari/537.36 XWEB/1260117 MMWEBSDK/20240801 MMWEBID/6533 MicroMessenger/8.0.51.2720(0x28003339) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
    }
    data = {"activityId":"1025694534292430849","appid":"10086"}
    try:
        level,name,nextName,nutrientRemaining,nutrientUsed,upgradeThreshold = activityInfo(id,two)
        response = session.post(url=url_info, headers=header, json=data)
        time.sleep(1)
        print(f"-----模 式-----")
        if control_js != 0:
            print(f"☁️浇水模式：浇水")
            if control_sh != 0:
                controljs = 0
                print(f"☁️收获模式：自动\n---------------")
            else:
                controljs = 1
                print(f"☁️收获模式：手动\n---------------")
            m = 0
            while "树苗" in name:
                #print(f"☁️浇水：开始浇水")
                response = session.post(url=url, headers=header, json=data)
                response = json.loads(response.text)['message']
                if 'ok' in response:
                    #print(f"☁️树苗浇水：{m+1}次")
                    pass
                else:
                    print(f'☁️浇水完毕：{m}次')
                    break
                m = m+1
                level,name,nextName,nutrientRemaining,nutrientUsed,upgradeThreshold = activityInfo(id,two)
                time.sleep(1)
            js = int(upgradeThreshold) - int(nutrientUsed)
            
            while "小树" in name and js > controljs:
                #print(f"☁️浇水：开始浇水")
                response = session.post(url=url, headers=header, json=data)
                response = json.loads(response.text)['message']
                if 'ok' in response:
                    #print(f"☁️小树浇水：{m+1}次")
                    pass
                else:
                    print(f'☁️浇水完毕：{m}次')
                    break
                m = m+1
                level,name,nextName,nutrientRemaining,nutrientUsed,upgradeThreshold = activityInfo(id,two)
                js = int(upgradeThreshold) - int(nutrientUsed)
                time.sleep(1)
            if js == 1:
                print(f"☁️当前阶段：{name}\n☁️下一阶段：{nextName}\n☁️阶段浇水：{nutrientUsed}次\n☁️尚需浇水：{js}次\n☁️剩余可浇：{nutrientRemaining}次")
            elif js == 0:
                print(f"☁️当前阶段：{nextName}\n☁️剩余可浇：{nutrientRemaining}次")
            else:
                print(f"☁️当前阶段：{name}\n☁️下一阶段：{nextName}\n☁️阶段浇水：{nutrientUsed}次\n☁️尚需浇水：{js}次")
            if upgradeThreshold == 0:
                print("🌈果树状态：成熟")
                Reward(id,two)
                time.sleep(0.5)
                plant(id,two)
        else:
            js = int(upgradeThreshold) - int(nutrientUsed)
            print(f"☁️浇水模式：储水")
            print(f"☁️当前阶段：{name}\n☁️下一阶段：{nextName}\n☁️阶段浇水：{nutrientUsed}次\n☁️尚需浇水：{js}次\n🌈当前储水：{nutrientRemaining}次")
        
    except Exception as e:
        print(e)

def help(id,two):
    url_h = 'https://webapi.qmai.cn/web/cmk-center/task/userHelp'
    header = {
        "Host": "webapi.qmai.cn",
        "Connection": "keep-alive",
        "store-id": "203009",
        "Accept": "v=1.0",
        "content-type": "application/json",
        "Qm-From": "wechat",
        "Qm-From-Type": "catering",
        "Qm-User-Token": two,
        "charset": "utf-8",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.188 Mobile Safari/537.36 XWEB/1260117 MMWEBSDK/20240801 MMWEBID/6533 MicroMessenger/8.0.51.2720(0x28003339) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
    }
    try:
        for i in helpid:
            data_h = {"activityId": "1025694534292430849", "inviteUserId": i,"appid": "10086"}
            response = session.post(url=url_h, headers=header, json=data_h)
            response = json.loads(response.text)['message']
            if 'ok' in response:
                #print(f"{id}助力：{response}")
                pass
            elif '上限' in response:
                #print(f'{id}助力：{response}')
                pass
            elif '不可以给自己助力' in response:
                pass
            elif  '已助力' in response:
                #print(f"{id}助力：重复助力")
                pass
            else:
                #print(f'{id}助力：{response}')
                pass
    except Exception as e:
        print(e)

def activityInfo(id,two):
    url = 'https://webapi.qmai.cn/web/cmk-center/nurture/activityInfo'
    header = {
        "Host": "webapi.qmai.cn",
        "Connection": "keep-alive",
        "Accept": "v=1.0",
        "content-type": "application/json",
        "Qm-From": "wechat",
        "Qm-From-Type": "catering",
        "Qm-User-Token": two,
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.188 Mobile Safari/537.36 XWEB/1260117 MMWEBSDK/20240801 MMWEBID/6533 MicroMessenger/8.0.51.2720(0x28003339) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
    }
    data = {"activityId":"1025694534292430849","appid":"10086"}
    try:
        response = session.post(url=url, headers=header, json=data)
        response = json.loads(response.text)
        #print(response)
        if response["code"] == 0:
            nurtureStageVo = response['data']["nurtureStageVo"]
            level = nurtureStageVo["level"]
            name = nurtureStageVo["name"]
            nextName = nurtureStageVo.get("nextName","成熟")
            nutrientRemaining = nurtureStageVo["nutrientRemaining"]
            nutrientUsed = nurtureStageVo.get("nutrientUsed","0")
            upgradeThreshold = nurtureStageVo["upgradeThreshold"]
            return level,name,nextName,nutrientRemaining,nutrientUsed,upgradeThreshold
        else:
            print(response)
    except Exception as e:
        print(e)

def Reward(id,two):
    url = 'https://webapi.qmai.cn/web/cmk-center/nurture/sendReward'
    header = {
        "Host": "webapi.qmai.cn",
        "Connection": "keep-alive",
        "Accept": "v=1.0",
        "content-type": "application/json",
        "Qm-From": "wechat",
        "Qm-From-Type": "catering",
        "Qm-User-Token": two,
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.188 Mobile Safari/537.36 XWEB/1260117 MMWEBSDK/20240801 MMWEBID/6533 MicroMessenger/8.0.51.2720(0x28003339) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
    }
    data = {"activityId":"1025694534292430849","appid":"10086"}
    try:
        response = session.post(url=url, headers=header, json=data)
        response = json.loads(response.text)['message']
        if 'ok' in response:
            print("🌈开始收取：成功")
        elif '当前状态不可领取' in response:
            pass
        else:
            print(response)
    except Exception as e:
        print(e)

def plant(id,two):
    url = 'https://webapi.qmai.cn/web/cmk-center/nurture/takePartInNurture'
    header = {
        "Host": "webapi.qmai.cn",
        "Connection": "keep-alive",
        "Accept": "v=1.0",
        "content-type": "application/json",
        "Qm-From": "wechat",
        "Qm-From-Type": "catering",
        "Qm-User-Token": two,
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.188 Mobile Safari/537.36 XWEB/1260117 MMWEBSDK/20240801 MMWEBID/6533 MicroMessenger/8.0.51.2720(0x28003339) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
    }
    data = {"activityId":"1025694534292430849","appid":"10086"}
    try:
        response = session.post(url=url, headers=header, json=data)
        response = json.loads(response.text)
        if response["status"]:
            print("🌈重新种植：成功")
        elif '当前状态不' in response:
            pass
        else:
            print(response)
    except Exception as e:
        print(e)

def coupon(id,two):
    url = 'https://webapi.qmai.cn/web/catering/crm/coupon/list'
    header = {
        "Host": "webapi.qmai.cn",
        "Connection": "keep-alive",
        "Accept": "v=1.0",
        "content-type": "application/json",
        "Qm-From": "wechat",
        "Qm-From-Type": "catering",
        "Qm-User-Token": two,
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.188 Mobile Safari/537.36 XWEB/1260117 MMWEBSDK/20240801 MMWEBID/6533 MicroMessenger/8.0.51.2720(0x28003339) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
    }
    data = {"pageNo":1,"pageSize":1000,"useStatus":0,"appid":"10086"}
    try:
        response = session.post(url=url, headers=header, json=data)
        response = json.loads(response.text)
        if 'ok' in response['message']:
            if response["data"]:
                for quan in response["data"]["data"]:
                    title = quan["title"]
                    beginAt = quan["beginAt"].split(" ")[0]
                    endAt = quan["endAt"].split(" ")[0]
                    print(f"\n🌤️已有券：")
                    print(f"🍉{title}:{beginAt} - {endAt}")
        else:
            print(response)
    except Exception as e:
        print(e)

def main():
    global help
    if os.environ.get(environ):
        ck = os.environ.get(environ)
    else:
        ck = ""
        if ck == "":
            print("请设置变量")
            sys.exit()

    ck_run = ck.split('\n')
    print(f"{' ' * 10}꧁༺ {name} ༻꧂\n")
    '''for i in ck_run:
        three = i.split('#', 2)[2]
        helpid.append(three)
    print(f'\n------------ 🍺执 行  助 力🍺 ------------\n☁️静默助力')
    for i, ck_run_n in enumerate(ck_run):
        try:
            id,two,three = ck_run_n.split('#',2)
            id = id[:3] + "*****" + id[-3:]
            help(id,two)
            time.sleep(random.randint(1, 2))
        except Exception as e:
            print(e)'''
    for i, ck_run_n in enumerate(ck_run):
        print(f'\n----------- 🍺账号【{i + 1}/{len(ck_run)}】执行🍺 -----------')
        try:
            id,two,three = ck_run_n.split('#',2)
            id = id[:3] + "***" + id[-3:]
            print(f"📱：{id}")
            run(id,two)
            time.sleep(1)
            coupon(id,two)
            time.sleep(random.randint(1, 2))
        except Exception as e:
            print(e)
            #notify.send('title', 'message')

    print(f'\n----------- 🎊 执 行  结 束 🎊 -----------')
if __name__ == '__main__':
    main()
