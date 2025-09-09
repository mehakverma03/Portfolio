export interface GvizTable {
  cols: { label: string }[]
  rows: { c: ({ v: any } | null)[] }[]
}

export async function fetchSheetAsRecords(sheetId: string, gid: string | number): Promise<Record<string, any>[]> {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&gid=${gid}`
  const res = await fetch(url, { next: { revalidate: 60 } })
  const text = await res.text()
  // Strip gviz wrapper
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')
  if (start === -1 || end === -1) return []
  const json = JSON.parse(text.slice(start, end + 1)) as { table: GvizTable }
  let cols = json.table.cols.map(c => (c.label || '').trim())
  const rows = json.table.rows
  const records: Record<string, any>[] = []

  // If all labels are empty, try to use the first non-empty row as headers
  const allLabelsEmpty = cols.every(l => l === '')
  let startIndex = 0
  if (allLabelsEmpty) {
    for (let i = 0; i < rows.length; i++) {
      const candidate = rows[i]
      const values = candidate.c.map(c => (c && c.v != null ? String(c.v) : '')).map(s => s.trim())
      if (values.some(v => v.length > 0)) {
        cols = values.map((v, idx) => v || `col_${idx}`)
        startIndex = i + 1
        break
      }
    }
  }

  for (let r = startIndex; r < rows.length; r++) {
    const row = rows[r]
    const obj: Record<string, any> = {}
    row.c.forEach((cell, idx) => {
      const key = cols[idx] || `col_${idx}`
      obj[key] = cell ? cell.v : ''
    })
    if (Object.values(obj).some(v => v !== '' && v != null)) {
      records.push(obj)
    }
  }
  return records
}


