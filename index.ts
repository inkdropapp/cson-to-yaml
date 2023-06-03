export function cson2yaml(cson: string): string {
  const lines = cson.split('\n')
  const res: string[] = []
  let inArray = false

  for (const line of lines) {
    if (line.endsWith('[')) {
      inArray = true
      res.push(line)
      continue
    } else if (line.endsWith(']')) {
      inArray = false
    }

    res.push(line + (inArray ? ',' : ''))
  }
  return res.join('\n')
}
