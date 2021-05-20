const getCategoryLabel = (string) => {
  if (!string) return
  let output = ""
  switch (string.toString()) {
    case "honeys":
      output = "Honeys"
      break
    case "purehoneys":
      output = "Pure Honeys"
      break
    case "creamedhoneys":
      output = "Creamed Honeys"
      break
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
      output = string.toString()
  }

  return output
}
module.exports = getCategoryLabel
