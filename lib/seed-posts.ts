import { parse } from 'node-html-parser'

const setContent = (content: string, index: number): any => {
  const root = parse(content, {
    voidTag: {
      tags: ['area', 'base', 'br', 'col', 'embed', 'hr', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']
    }
  })

  let newRoot = ''

  root.childNodes.map((childNode) => {

    // TODO: recursively get root Node, and test it is either text or its parent has an img

    const imageEls = childNode.childNodes[0]?.parentNode.querySelectorAll("img")

    const text = childNode.innerText

    if (imageEls?.length) {
      imageEls.map((img) => {
        newRoot += `<figure><img src="${img.rawAttributes.src}" />`;
        newRoot += text ? `<figcaption>${text}</figcaption></figure>` : `</figure>`;
      })
    } else if (text) {
      newRoot += `<p>${text}</p>`
    }
  })

  return newRoot
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
