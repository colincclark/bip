import { parse } from 'node-html-parser'

const cleanText = (textCode: string): string => {
  let cleanTextCode = textCode.replaceAll("<br clear=\"all\">", "")
  cleanTextCode = textCode.replaceAll("&nbsp;", " ")
  cleanTextCode = textCode.replaceAll("&amp;", "&")

  return cleanTextCode
}

const setContent = (content: string, slug: string): any => {
  // if (slug !== "a-day-out-in-oruro") return

  let newContent = "";

  const root = parse(content, {
    voidTag: {
      tags: ['area', 'base', 'br', 'col', 'embed', 'hr', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']
    }
  })

  let isInPTag = false

  const loopNodes = (root: any) => {
    root.childNodes.forEach((element: any) => {
      // handle raw text content
      if (element._rawText && element._rawText !== " " && element._rawText !== "&nbsp;") {
        const cleanRawText = cleanText(element._rawText)
        const parentTagName = element.parentNode.rawTagName

        // open first p tag
        if (!isInPTag) {
          newContent += "<p>"
          isInPTag = true
        }

        if (parentTagName == "em") {
          newContent += `<${parentTagName}>${cleanRawText}</${parentTagName}>`
        } else if (parentTagName == "a") {
          newContent += `<a href="${element.parentNode.rawAttributes.href}">${cleanRawText}</a>`
        } else {
          newContent += cleanRawText
        }
      }

      // close p tag when not in it anymore
      if (element.rawTagName != "p" && element.rawTagName != "em" && element.rawTagName != "a" && !element._rawText && isInPTag) {
        newContent += "</p>"
        isInPTag = false
      }

      // handle images
      if (element.rawTagName == "img") {
        let src = element.rawAttributes.src
        if (element.parentNode.rawTagName == "a") {
          src = element.parentNode.rawAttributes.href
        }
        newContent += `<figure><img src="${src}" /><figcaption></figcaption></figure>`
      }

      // recursion
      if (element.childNodes) loopNodes(element)
    });
  }
  loopNodes(root)

  return newContent
}

const setCountryId = (index: number): number => {
  if (index === 0) return 1
  if (index > 0 && index < 26) return 2
  if (index > 25 && index < 32) return 3
  if (
    (index > 31 && index < 45) ||
    (index > 45 && index < 64) ||
    (index > 66 && index < 69)
  ) return 4
  if (index > 44 && index < 49) return 5
  if (
    (index > 63 && index < 67) ||
    (index > 68 && index < 91)
  ) return 6
  if (index > 90 && index < 105) return 7
  if (index > 104 && index < 131) return 8
  if (index > 130 && index < 152) return 9
  if (index > 151 && index < 158) return 10
  return 11
}

const setTripId = (index: number): number => {
  if (index === 0) return 1
  if (index === 158) return 3
  return 2
}

export { setContent, setCountryId, setTripId }
