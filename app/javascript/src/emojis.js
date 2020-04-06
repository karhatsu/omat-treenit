export const likingEmoji = liking => {
  switch (liking) {
    case 2:
      return '😀'
    case 1:
      return '🙂'
    case 0:
      return '😕'
    case -1:
      return '😠'
    default:
      return ''
  }
}
