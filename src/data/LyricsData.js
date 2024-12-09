const questions = [
    {
        id: 0,
        ans: "王妃",
        lyrics: ["搖晃的紅酒杯 嘴唇上染著鮮血", "那不尋常的美 難赦免罪"],
        artist: "蕭敬騰",
        english: "Princess"
    },
    {
        id: 1,
        ans: "成全",
        lyrics: ["不為了勉強可笑的尊嚴", "所有的悲傷丟在 分手那天"],
        artist: "林宥嘉",
        english: "Step Aside"
    },
    {
        id: 2,
        ans: "馬德里不思議",
        lyrics: ["火紅的舞衣旋轉在綠蔭小徑", "連腳步都佛朗明哥的聲音", "懸在窗櫺 小酒瓶晃的輕輕", "對著風溫柔回應", "原來愛可以寂靜"],
        artist: "蔡依林",
        english: "A Wonder In Madrid"
    },

    {
        id: 3,
        ans: "帥到分手",
        lyrics: ["不用再爭誰錯誰對", "愛到了底你進我退 uh", "如果我付出你當無所謂", "愛情失敗到分手的罪", "就讓我來背"],
        artist: "周湯豪",
        english: ""
    },
    {
        id: 4,
        ans: "突然好想你",
        lyrics: ["我們像一首最美麗的歌曲", "變成兩部悲傷的電影為什麼你", "帶我走過最難忘的旅行", "然後留下 最痛的紀念品"],
        artist: "五月天",
        english: "Suddenly Missing You so Bad"
    },
    {
        id: 5,
        ans: "年少有為",
        lyrics: ["給你形容", "美好今後你常常眼睛會紅", "原來心疼我", "我那時候不懂"],
        artist: "李榮浩",
        english: "If I Were Young"
    },
    {
        id: 6,
        ans: "光年之外",
        lyrics: ["緣份讓我們相遇亂世以外", "命運卻要我們危難中相愛", "也許未來遙遠在光年之外", "我願守候未知裡為你等待"],
        artist: "鄧紫棋",
        english: "Light Years Away"
    },
    {
        id: 7,
        ans: "你啊你啊",
        lyrics: ["咦嗚咦嗚咦咦 嗚嗚嗚喔喔", "咿耶咿耶咦 嗚嗚嗚喔喔", "咿耶咿耶咦 嗚喔喔 喔"],
        artist: "魏如萱",
        english: "Only You"
    },
    {
        id: 8,
        ans: "怎麼了",
        lyrics: ["是不是我錯了 搞錯了 天灰了", "雨下著 凝望著 你走了", "都回不去了 像從前快樂"],
        artist: "周興哲",
        english: "What's Wrong"
    },
    {
        id: 9,
        ans: "漂向北方",
        lyrics: ["他住在燕郊區 殘破的求職公寓", "擁擠的大樓裡 堆滿陌生人都來自外地"],
        artist: "黃明志 ft.王力宏",
        english: "Stranger In the North"
    },
    {
        id: 10,
        ans: "十年",
        lyrics: ["如果對於明天沒有要求 牽牽手就像旅遊", "成千上萬個門口 總有一個人要先走"],
        artist: "陳奕迅",
        english: "Ten Years"
    },
    {
        id: 11,
        ans: "以後別做朋友",
        lyrics: ["最好的朋友 有些夢 不能說出口", "就不用承擔 會失去你的心痛"],
        artist: "周興哲",
        english: "The Distance of Love"
    },
    {
        id: 12,
        ans: "江南",
        lyrics: ["圈圈圓圓圈圈 天天年年天天 的我", "深深看你的臉 生氣的溫柔 埋怨的溫柔的臉"],
        artist: "林俊傑",
        english: "River South"
    },
    {
        id: 13,
        ans: "煎熬",
        lyrics: ["我想要 安靜的思考", "天平上 讓愛恨不再 動搖", "一想你就平衡不了", "我關燈還是關不掉 這風暴"],
        artist: "李佳薇",
        english: "Suffering"
    },
    {
        id: 14,
        ans: "聽海",
        lyrics: ["一定不是我 至少我很冷靜", "可是淚水 就連淚水也都不相信"],
        artist: "張惠妹",
        english: "Listen to the Sea"
    },
    {
        id: 15,
        ans: "失落沙洲",
        lyrics: ["我不是一定要你回來 只是當又一個人看海", "回頭才發現你不在 留下我迂迴的徘徊"],
        artist: "徐佳瑩",
        english: "Lost Desert"
    },
    {
        id: 16,
        ans: "沒那麼簡單",
        lyrics: ["一杯紅酒配電影", "在周末晚上 關上了手機", "舒服窩在沙發裡"],
        artist: "黃小琥",
        english: "More Difficult Than It Seems"
    },
    {
        id: 17,
        ans: "泡沫",
        lyrics: ["再美的花朵 盛開過就凋落", "再亮眼的星 一閃過就墜落", "愛本是泡沫 如果能夠看破 有什麼難過"],
        artist: "鄧紫棋",
        english: "Bubble"
    },
    {
        id: 18,
        ans: "喜劇之王",
        lyrics: ["為什麼全世界的戀 我都失一遍", "為所有的悲劇 當特約演員"],
        artist: "李榮浩",
        english: "King of Comedy"
    },
    {
        id: 19,
        ans: "稻香",
        lyrics: ["笑一個吧 功成名就不是目的", "讓自己快樂快樂這才叫做意義", "童年的紙飛機 現在終於飛回我手裡"],
        artist: "周杰倫",
        english: "Rice Field"
    },
    {
        id: 20,
        ans: "我還年輕 我還年輕",
        lyrics: ["他們都說 我們把理想都忘在", "在那輕狂的日子裡 我不哭泣 我不逃避"],
        artist: "老王樂隊",
        english: "Teens Edge"
    },
    {
        id: 21,
        ans: "倒帶",
        lyrics: ["你總是要我乖 慢慢計畫將來", "我的眼淚卻一直掉下來"],
        artist: "蔡依林",
        english: "Dao Dai"
    },
    {
        id: 22,
        ans: "龍捲風",
        lyrics: ["我不要再想 我不要再想", "我不 我不 我不要再想你"],
        artist: "周杰倫",
        english: "Tornado"
    },
    {
        id: 23,
        ans: "你是我的眼",
        lyrics: ["眼前的黑不是黑 你說的白是什麼白", "人們說的天空藍 是我記憶中那團白雲背後的藍天"],
        artist: "蕭煌奇",
        english: "You Are My Eyes"
    },
    {
        id: 24,
        ans: "溫柔",
        lyrics: ["不知道 不明瞭 不想要 為什麼 我的心", "那愛情的綺麗 總是在孤單裡"],
        artist: "五月天",
        english: "Tenderness"
    },
    {
        id: 25,
        ans: "演員",
        lyrics: ["可你曾經那麼愛我幹嘛演出細節", "我該變成什麼樣子才能延緩厭倦"],
        artist: "薛之謙",
        english: "Actor"
    },
    {
        id: 26,
        ans: "精武門",
        lyrics: ["小老弟 年輕耍酷那一丁點 本領", "洗耳恭聽 快卯起來學習"],
        artist: "羅志祥",
        english: "N/A"
    },
    {
        id: 27,
        ans: "雨愛",
        lyrics: ["聽雨的聲音 一滴滴清晰", "你的呼吸像雨滴滲入我的愛裡", "真希望雨能下不停"],
        artist: "楊丞琳",
        english: "Rainie & Love...?"
    },
    {
        id: 28,
        ans: "天后",
        lyrics: ["雙腳懸空 在妳冷酷熱情間遊走", "被侵佔所有還要笑著接受"],
        artist: "陳勢安",
        english: "Stardom"
    },
    {
        id: 29,
        ans: "新不了情",
        lyrics: ["回憶過去 痛苦的相思忘不了", "為何你還來 撥動我心跳"],
        artist: "萬芳",
        english: "New Endless Love"
    },
    {
        id: 30,
        ans: "K歌之王",
        lyrics: ["只想你明白 我心甘情願 愛愛愛愛到要吐", "那是醉生夢死 才能熬成的苦"],
        artist: "陳奕迅",
        english: "King of Karaoke"
    }
]

export default questions;