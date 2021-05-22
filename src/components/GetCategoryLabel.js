const getCategoryLabel = (string) => {
  if (!string) return
  switch (string.toString()) {
    case "honeys":
      return "Honeys"
    case "purehoneys":
      return "Pure Honeys"
    case "creamedhoneys":
      return "Creamed Honeys"
    case "beeproducts":
      return "Bee Products"
    case "tea":
      return "Tea"
    case "blacktea":
      return "Black Tea"
    case "greentea":
      return "Green Tea"
    case "fruittea":
      return "Fruit Tea"
    case "functionaltea":
      return "Functional Tea"
    case "cannedtea":
      return "Canned Tea"
    case "rooibos":
      return "Rooibos"
    case "yerbamate":
      return "Yerba Mate"
    default:
      return string.toString()
  }
}
module.exports = getCategoryLabel
