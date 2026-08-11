import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig, type SharpDependency } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Articles } from './collections/Articles'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { Users } from './collections/Users'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

/** Keep current Node pg SSL behavior; avoid deprecation of sslmode=require as verify-full alias. */
function postgresConnectionString(url: string): string {
  if (!url) return url

  try {
    const parsed = new URL(url)
    const sslmode = parsed.searchParams.get('sslmode')

    if (sslmode === 'require' || sslmode === 'prefer' || sslmode === 'verify-ca') {
      parsed.searchParams.set('sslmode', 'verify-full')
    }

    return parsed.toString()
  } catch {
    return url
  }
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Projects, Articles],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: postgresConnectionString(process.env.DATABASE_URL || ''),
    },
  }),
  // Payload types target sharp@0.32; runtime uses 0.35+ for libvips security fixes
  sharp: sharp as unknown as SharpDependency,
})
