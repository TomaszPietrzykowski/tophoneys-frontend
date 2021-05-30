import categories from "../config/categories"

const getCategoryLabel = (string) => {
  const matched = categories.filter((cat) => cat[1] === string)
  if (matched.length > 0) {
    return matched[0][0]
  }
  return string
}
export default getCategoryLabel
