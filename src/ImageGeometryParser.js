class ImageGeometryParser {
    static parse(src) {
    const matches = src.match(/\b(\d*)x?(\d*)(\@\>|\>\@|[\>\<\#\@\%^!])?/i)
    const first = Number(matches[1])
    const second = Number(matches[2])
    const operator = matches[3]

    if (operator === '%') {
      if (second) {
        return { widthScale: first,  heightScale: second }
      }
      return { scale: first }
    }

    let geometry = {}
    if (first) {
      geometry.width = first
    }
    if (second) {
      geometry.height = second
    }
    if (operator) {
      geometry.operator = operator
    }
    return geometry
  }
}
export default ImageGeometryParser;
