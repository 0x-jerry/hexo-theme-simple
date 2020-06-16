export function getMeta() {
  const metas = document.getElementsByTagName('meta')
  const metadata = {}

  for (const meta of metas) {
    metadata[meta.name] = meta.content
  }

  return metadata
}
