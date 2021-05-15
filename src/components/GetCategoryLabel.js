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
    case "teas":
      return "Tea"
    case "blackteas":
      return "Black Tea"
    case "greenteas":
      return "Green Tea"
    case "fruitteas":
      return "Fruit Tea"
    default:
      output = string.toString()
  }

  return output
}
module.exports = getCategoryLabel
