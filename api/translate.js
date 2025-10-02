import fetch from "node-fetch";

const rankMap = {
  "Iron": "鐵牌",
  "Bronze": "銅牌",
  "Silver": "銀牌",
  "Gold": "黃金",
  "Platinum": "白金",
  "Diamond": "鑽石",
  "Master": "宗師",
  "Grandmaster": "大師",
  "Challenger": "菁英"
};

export default async function handler(req, res) {
  const { player } = req.query;
  if (!player) return res.status(400).json({ error: "player required" });

  try {
    // 取得原本英文排位
    const response = await fetch(`https://lolrank-b88x.vercel.app/api/${encodeURIComponent(player)}`);
    const data = await response.json();

    // 假設返回 data.rank = "Diamond IV"
    let rank = data.rank || "未知";
    for (const eng in rankMap) {
      if (rank.includes(eng)) rank = rank.replace(eng, rankMap[eng]);
    }

    res.status(200).json({ rank });
  } catch (err) {
    res.status(500).json({ error: "抓取失敗" });
  }
}
