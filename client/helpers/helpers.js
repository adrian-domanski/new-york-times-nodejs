export const textCapitalize = string => {
  let str = string.toString()
  let firstLetter = str[0].toUpperCase()
  return `${firstLetter}${str.slice(1, str.length)}`
}

export const getNYTArticleId = uri => {
  const arr = uri.split("/")
  return arr[arr.length - 1]
}
