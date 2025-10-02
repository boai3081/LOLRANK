export default function handler(req, res) {
  const rank = req.query.rank || "";
  let translated = rank
    .replace("Iron", "鐵")
    .replace("Bronze", "銅")
    .replace("Silver", "銀")
    .replace("Gold", "金")
    .replace("Platinum", "白金")
    .replace("Emerald", "翡翠")
    .replace("Diamond", "鑽石")
    .replace("Master", "大師")
    .replace("Grandmaster", "宗師")
    .replace("Challenger", "菁英")
    .replace(" IV", " 4")
    .replace(" III", " 3")
    .replace(" II", " 2")
    .replace(" I", " 1");

  res.status(200).send(translated);
}
