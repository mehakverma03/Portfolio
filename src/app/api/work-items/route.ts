import { NextResponse } from 'next/server'
import { fetchSheetAsRecords } from '@/lib/sheets'
import { normalizeToWorkItem } from '@/data/workItems'

// Public Google Sheet info provided by user
const SHEET_ID = '1_C_I44A98iYxlSYWY13qtVWzVrnLp5OFYiBkKLThJ7k'
const GID = '0'

export async function GET() {
  try {
    const raw = await fetchSheetAsRecords(SHEET_ID, GID)
    // Sheet columns: Title | Link of the Work | Work Done | Platform  | Page Link
    // There are also section header rows like "USER-GENERATED CONTENT (UGC)" and "VIDEO CONTENT"
    let currentSection: string | null = null
    const mapped = raw.map((r) => {
      const title: string = String(r['Title'] || '').trim()
      const link: string = String(r['Link of the Work'] || '').trim()
      const workDone: string = String(r['Work Done'] || '').trim()
      const platform: string = String((r['Platform'] || r['Platform ']) || '').trim()
      const pageLink: string = String(r['Page Link'] || '').trim()

      // Detect section rows: row with a title but no link/work/platform
      const isSectionRow = title && !link && !workDone && !platform
      if (isSectionRow) {
        // Normalize to our three sections
        const t = title.toUpperCase()
        if (t.includes('UGC')) currentSection = 'UGC'
        else if (t.includes('VIDEO CONTENT')) currentSection = 'Video Content'
        else if (t.includes('STATIC') || t.includes('DESIGN')) currentSection = 'Campaign Posts'
        else if (t.includes('CAMPAIGN')) currentSection = 'Campaign Posts'
        else if (t.includes('PODCAST')) currentSection = 'Campaign Posts'
        else currentSection = null
        return null
      }

      if (!title) return null
      // Skip Instagram profile-only links (no reel/post/tv code)
      try {
        if (link) {
          const u = new URL(link)
          if (u.hostname.includes('instagram.com')) {
            const parts = u.pathname.split('/').filter(Boolean)
            // Valid content links look like /reel/{code}, /p/{code}, /tv/{code}
            const allowed = ['reel', 'p', 'tv']
            if (!(parts.length >= 2 && allowed.includes(parts[0]))) {
              // treat as non-content link → drop this row to avoid empty cards
              return null
            }
          }
        }
      } catch {}
      const record = {
        id: `${(currentSection || 'other')}-${title}`.toLowerCase().replace(/\s+/g, '-'),
        section: currentSection || 'Campaign Posts',
        title,
        workDone,
        platform,
        // If pageLink is same host as link or identical, drop it to avoid duplicate chips
        link: link || undefined,
        pageLink: (() => {
          try {
            if (!pageLink) return undefined
            if (!link) return pageLink
            const a = new URL(pageLink)
            const b = new URL(link)
            if (a.href === b.href) return undefined
            if (a.hostname === b.hostname) return undefined
            return pageLink
          } catch {
            return pageLink || undefined
          }
        })(),
      }
      return normalizeToWorkItem(record)
    })
    const items = mapped
      .filter((x): x is NonNullable<typeof x> => Boolean(x))

    return NextResponse.json({ items })
  } catch (e) {
    return NextResponse.json({ items: [] }, { status: 200 })
  }
}


