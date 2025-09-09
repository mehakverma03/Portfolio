export type WorkPlatform = 'Instagram' | 'Facebook' | 'YouTube' | 'LinkedIn' | 'Other'

export interface WorkItem {
  id: string
  section: 'UGC' | 'Video Content' | 'Campaign Posts'
  title: string
  workDone: string
  platform: WorkPlatform
  link?: string
  pageLink?: string
  tags?: string[]
  previewVideo?: string
}

// Curated high-impact items pulled from the provided sheet
export const curatedItems: WorkItem[] = [
  {
    id: 'ugc-hyphen',
    section: 'UGC',
    title: 'Hyphen Collaboration',
    workDone: 'Ideation, Shooting & Editing',
    platform: 'Instagram',
    link: 'https://www.instagram.com/reel/DB1E3rVh_J3/?igsh=NXVmdmhhc3lyY3pm',
    pageLink: 'https://www.instagram.com/letshyphen?igsh=MXc5NXdoZTRhcGZwYw=='
  },
  {
    id: 'ugc-culinary-craft',
    section: 'UGC',
    title: 'The Culinary Craft Collaboration',
    workDone: 'Ideation & Editing',
    platform: 'Instagram',
    link: 'https://www.instagram.com/reel/DFFm3gABstF/?igsh=angwbWFwYnZ0YmQ1',
    pageLink: 'https://www.instagram.com/culinarycraftpowai?igsh=MWh1Y3V2aDJlZzZjaw=='
  },
  {
    id: 'ugc-quick-registries-1',
    section: 'UGC',
    title: 'Quick Registries (Paid)',
    workDone: 'Shooting & Editing',
    platform: 'Instagram',
    link: 'https://www.instagram.com/reel/DKMj_v0M9CO/?igsh=MXBjcGtvdnc1YWZ2bw=='
  },
  {
    id: 'video-ibs-cha-raja',
    section: 'Video Content',
    title: 'IBS Cha Raja — Ganpati Bappa Edit',
    workDone: 'Coverage/Shooting',
    platform: 'Instagram',
    link: 'https://www.instagram.com/reel/DFDZF3qIfA3/?igsh=MXdia2d2MjZ6aXRtag==',
    pageLink: 'https://www.instagram.com/ifocus_ibsm?igsh=Y3E5cHY1bTJicmdh'
  },
  {
    id: 'video-diwali-team',
    section: 'Video Content',
    title: 'Diwali Reel',
    workDone: 'Ideation & Shooting (with team)',
    platform: 'Instagram',
    link: 'https://www.instagram.com/reel/DB1SDAitiNf/?igsh=bHU1emdpdHdzbXA4'
  },
  {
    id: 'video-kumbarwada',
    section: 'Video Content',
    title: 'Kumbarwada Diwali Edit — Photowalk',
    workDone: 'Shooting',
    platform: 'Instagram',
    link: 'https://www.instagram.com/reel/C_xSd5Ktzd6/?igsh=aWtsYzY2MHN2Nm44'
  },
  {
    id: 'fb-campaign-601200319302712',
    section: 'Campaign Posts',
    title: 'Campaign Post',
    workDone: 'Designing & Content',
    platform: 'Facebook',
    link: 'https://www.facebook.com/OfficialM360/videos/601200319302712/?mibextid=rS40aB7S9Ucbxw6v',
    pageLink: 'https://www.facebook.com/OfficialM360'
  },
  {
    id: 'fb-campaign-1939406580233377',
    section: 'Campaign Posts',
    title: 'Campaign Post',
    workDone: 'Designing & Content',
    platform: 'Facebook',
    link: 'https://www.facebook.com/OfficialM360/videos/1939406580233377/?mibextid=rS40aB7S9Ucbxw6v'
  },
  {
    id: 'fb-campaign-1182990739804819',
    section: 'Campaign Posts',
    title: 'Campaign Post',
    workDone: 'Designing & Content',
    platform: 'Facebook',
    link: 'https://www.facebook.com/reel/1182990739804819/?mibextid=rS40aB7S9Ucbxw6v'
  }
]

export const featuredIds: string[] = [
  'ugc-hyphen',
  'video-ibs-cha-raja',
  'fb-campaign-601200319302712'
]

export const sections = ['UGC', 'Video Content', 'Campaign Posts'] as const

export const bySection = {
  'UGC': curatedItems.filter(i => i.section === 'UGC'),
  'Video Content': curatedItems.filter(i => i.section === 'Video Content'),
  'Campaign Posts': curatedItems.filter(i => i.section === 'Campaign Posts')
} as const

export const featured = curatedItems.filter(i => featuredIds.includes(i.id))

// Utility to map arbitrary records to WorkItem safely
export function normalizeToWorkItem(record: Record<string, any>): WorkItem | null {
  const section = (record.section || record.Section || '').toString().trim()
  const title = (record.title || record.Title || '').toString().trim()
  const workDone = (record.workDone || record.WorkDone || record['Work Done'] || '').toString().trim()
  const platformRaw = (record.platform || record.Platform || '').toString().trim()
  if (!section || !title) return null
  const platform = (['Instagram','Facebook','YouTube','LinkedIn','Other'].includes(platformRaw) ? platformRaw : 'Other') as WorkPlatform
  const id = (record.id || record.Id || record.ID || `${section}-${title}`).toString().replace(/\s+/g, '-').toLowerCase()
  const link = (record.link || record.Link) ? String(record.link || record.Link) : undefined
  const pageLink = (record.pageLink || record['Page Link']) ? String(record.pageLink || record['Page Link']) : undefined
  const tags = record.tags ? String(record.tags).split(',').map((t: string) => t.trim()).filter(Boolean) : undefined
  const previewVideo = record.previewVideo ? String(record.previewVideo) : undefined
  const allowedSections = ['UGC','Video Content','Campaign Posts'] as const
  if (!allowedSections.includes(section as any)) return null
  return { id, section: section as any, title, workDone, platform, link, pageLink, tags, previewVideo }
}


