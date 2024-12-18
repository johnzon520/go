"""
抓包方法，进小程序，注册登录，再进游戏抓包，捉 https://huodong1.lzlj.com/api/game/info 【Authorization】
name: 泸州老窖
Author: MK集团本部
Date: 0000-00-00
export lzljck="备注#ck"
cron: 0 5 * * *
const $ = new Env("泸州老窖")
"""
#import notify
import requests, json, re, os, sys, time, random, datetime
from threading import Thread, Semaphore
environ = "lzljck"
name = "泸州༒老窖"
#---------------------控制区块，1开启，0关闭---------------------
cj = 1          # 抽奖并发
sc = 0          # 在线时长并发
lotter_nz = 0   # 浓珠抽奖
lotter_mj = 0   # 秘籍抽奖
#---------------------控制区块，lotter_nz浓珠，lotter_mj秘籍，1开启，0关闭---------------------

def info():
    url_info = "https://huodong1.lzlj.com/api/game/info?is_weixin=true&refresh_official=0"
    response = requests.get(url_info, headers=headers).json()
    if not response['signIns']['today_signIn']:
        url_sign_in = "https://huodong1.lzlj.com/api/game/signIn"
        response = requests.post(url_sign_in, headers=headers)
        if response.ok:
            print("☁️签到：成功")
        else:
            print("❌签到：失败")
    else:
        print("☁️签到：已签")
    time.sleep(1)
    url_info = "https://huodong1.lzlj.com/api/game/info?is_weixin=true&refresh_official=0"
    response = requests.get(url_info, headers=headers).json()
    try:
        if response['signIns']['list']:
            consecutive_days = max(record['consecutive_days'] for record in response['signIns']['list'])
        else:
            consecutive_days = 0
        print(f"☁️连签天数：{consecutive_days}")
    except Exception as e:
        pass
    today_games = set(response['today_games'])
    completed_games = set(response['completed_games'])
    togame_list = list(today_games - completed_games)
    if togame_list:
        for togame in togame_list:
            url_log = "https://huodong1.lzlj.com/api/game/log"
            payload = json.dumps({"source": togame})
            response = requests.post(url_log, headers=headers, data=payload).json()
            if response["message"] == "success":
                url = "https://huodong1.lzlj.com/api/game/log"
                payload = json.dumps({"source": togame,"log_id": response.get("log_id")})
                response_data = requests.post(url, headers=headers, data=payload).json()
                if response_data["message"] == "success":
                    if "points" in response_data:
                        print(f"☁️游戏完成：{response_data['points']}积分")
                else:
                    print(f"❌游戏'{togame}'失败")
            else:
                print(f"❌游戏'{togame}'失败")
    print(f"☁️游戏任务：✓")
    log()
    if lotter_mj == 1:
        for i in range(100):
            url = "https://huodong1.lzlj.com/api/lottery/draw"
            data = {"consume_type": "badge", "pool": "game_2412"}
            response = requests.post(url, json=data, headers=headers)
            if "没有凑齐" in response.json()['message']:
                #print(f"☁️抽奖秘籍：数量不够")
                break
            elif '频繁' in response.json()['message']:
                pass
            elif 'Unauth' in response.json()['message']:
                break
            elif '未中奖' in response.json()['message']:
                pass
            else:
                print(f"🌈抽奖秘籍：{response.json()['message']}")
            time.sleep(3)
    if lotter_nz == 1:
        for i in range(100):
            url = "https://huodong1.lzlj.com/api/lottery/draw"
            data = {"consume_type": "points", "pool": "game_2412"}
            response = requests.post(url, json=data, headers=headers)
            if "浓珠不足" in response.json()['message']:
                #print(f"☁️抽奖浓珠：数量不够")
                break
            elif '频繁' in response.json()['message']:
                pass
            elif 'Unauth' in response.json()['message']:
                break
            elif '未中奖' in response.json()['message']:
                pass
            else:
                print(f"🌈抽奖浓珠：{response.json()['message']}")
            time.sleep(3)
    url_info = "https://huodong1.lzlj.com/api/game/info?is_weixin=true&refresh_official=0"
    data = requests.get(url_info, headers=headers).json()
    print(f"☁️当前秘籍：{data['badges']}张")
    print(f"☁️当前浓珠：{data['points']}")


def log(ck_bf = ""):
    try:
        if ck_bf != "":
            id_bf, ck = ck_bf.split('#', 1)
            headers['authorization'] = f"Bearer {ck}"
        url_info = "https://huodong1.lzlj.com/api/game/info?is_weixin=true&refresh_official=0"
        response = requests.get(url_info, headers=headers)
        today_online_points = response.json()["today_online_points"]
        if today_online_points:
            if ck_bf != "":
                print(f"☁️[{id_bf}]时长任务：✓")
            else:
                print(f"☁️时长任务：✓")
        else:
            if ck_bf != "":
                print(f"☁️[{id_bf}]时长任务：刷时长中")
            else:
                #print(f"☁️时长任务：刷时长中")
                pass
            url = "https://huodong1.lzlj.com/api/game/log"
            data = {"source":"online"}
            response = requests.post(url, json=data, headers=headers)
            if response.json()['message'] == 'success':
                time.sleep(185)
                log_id = response.json()['log_id']
                data = {"source":"online","log_id":log_id}
                response = requests.post(url, json=data, headers=headers).json()
                if response.get("message") == "success":
                    if "points" in response:
                        if ck_bf != "":
                            print(f"☁️[{id_bf}]时长任务：{response['points']}积分")
                        else:
                            print(f"☁️时长任务：{response['points']}积分")
                    else:
                        if ck_bf != "":
                            print(f"☁️[{id_bf}]时长任务：时长不足")
                        else:
                            print(f"☁️时长任务：时长不足")
                else:
                    if ck_bf != "":
                        print(f"❌[{id_bf}]在线时长失败: {response}")
                    else:
                        print(f"❌在线时长失败: {response}")
            else:
                print("任务黑了")
    except Exception as e:
        print(e)

def cjbf(ck_bf):
    id_bf, ck = ck_bf.split('#', 1)
    headers['authorization'] = f"Bearer {ck}"
    if True:
        for i in range(100):
            url = "https://huodong1.lzlj.com/api/lottery/draw"
            data = {"consume_type": "badge", "pool": "game_2412"}
            response = requests.post(url, json=data, headers=headers)
            if "没有凑齐" in response.json()['message']:
                #print(f"☁️[{id_bf}]抽奖秘籍：没有凑齐")
                break
            elif '频繁' in response.json()['message']:
                pass
            elif 'Unauth' in response.json()['message']:
                break
            elif '未中奖' in response.json()['message']:
                pass
            else:
                print(f"🌈[{id_bf}]抽奖秘籍：{response.json()['message']}")
            time.sleep(3)
    if True:
        for i in range(100):
            url = "https://huodong1.lzlj.com/api/lottery/draw"
            data = {"consume_type": "points", "pool": "game_2412"}
            response = requests.post(url, json=data, headers=headers)
            if "浓珠不足" in response.json()['message']:
                #print(f"☁️[{id_bf}]抽奖浓珠：浓珠不够")
                break
            elif '频繁' in response.json()['message']:
                pass
            elif 'Unauth' in response.json()['message']:
                break
            elif '未中奖' in response.json()['message']:
                pass
            else:
                print(f"🌈[{id_bf}]抽奖浓珠：{response.json()['message']}")
            time.sleep(3)

headers = {
    'User-Agent': "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36",
    'Accept': "application/json",
    'Accept-Encoding': "gzip, deflate, br, zstd",
    'sec-ch-ua-platform': "\"Android\"",
    'sec-ch-ua': "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
    'sec-ch-ua-mobile': "?1",
    'source': "game",
    'Cookie': 'tgw_l7_route=7ef603bb6950a433b61c6cde4bb9298a',
    'Content-Type': "application/json",
    'Sec-Fetch-Site': "same-origin",
    'Sec-Fetch-Mode': "cors",
    'Sec-Fetch-Dest': "empty",
    'Referer': "https://huodong1.lzlj.com/history/?fromid=7a4af846eef6a55208e068dd60269456&org_id=200282401019674482",
    'Accept-Language': "zh-CN,zh;q=0.9,zh-TW;q=0.8,en;q=0.7,ru;q=0.6"
}

def main():
    if os.environ.get(environ):
        ck = os.environ.get(environ)
    else:
        ck = ""
        if ck == "":
            print("请设置变量")
            sys.exit()
    ck_run = ck.split('\n')
    print(f"{' ' * 10}꧁༺ {name} ༻꧂\n")
    if cj == 1:
        max_threads = 1
        semaphore = Semaphore(max_threads)
        threadss = []
        print(f'\n----------- 🍺 抽 奖  并 发 🍺 -----------')
        for nn, ck_bfcj in enumerate(ck_run):
            def do_work(ck_bfcj):
                semaphore.acquire()
                try:
                    cjbf(ck_bfcj)
                finally:
                    semaphore.release()
            thread = Thread(target=do_work, args=(ck_bfcj,))
            threadss.append(thread)
            thread.start()
        for thread in threadss:
            thread.join()

    if sc == 1:
        max_threads = 1
        semaphore = Semaphore(max_threads)
        threads = []
        print(f'\n----------- 🍺 时 长  并 发 🍺 -----------')
        for n, ck_bf in enumerate(ck_run):
            def do_work(ck_bf):
                semaphore.acquire()
                try:
                    log(ck_bf)
                finally:
                    semaphore.release()
            thread = Thread(target=do_work, args=(ck_bf,))
            threads.append(thread)
            thread.start()
            time.sleep(1)
        for thread in threads:
            thread.join()

    for i, ck_run_n in enumerate(ck_run):
        try:
            print(f'\n----------- 🍺账号【{i + 1}/{len(ck_run)}】执行🍺 -----------')
            id,ck = ck_run_n.split('#',1)
            headers['authorization'] = f"Bearer {ck}"
            print(f"📱：{id}")
            info()
            time.sleep(random.randint(1, 2))
        except Exception as e:
            print(e)
            #notify.send('title', 'message')
    print(f'\n----------- 🎊 执 行  结 束 🎊 -----------')

if __name__ == '__main__':
    main()
