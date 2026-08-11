import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'kind', 'publishedAt', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'kind',
      type: 'select',
      required: true,
      defaultValue: 'external',
      options: [
        { label: 'External link', value: 'external' },
        { label: 'Full post', value: 'full' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        condition: (_, siblingData) => (siblingData as { kind?: string })?.kind === 'full',
      },
      validate: (value: unknown, { siblingData }: { siblingData: Partial<{ kind?: string }> }) => {
        if (siblingData?.kind === 'full' && !value) {
          return 'Slug is required for full posts'
        }
        return true
      },
    },
    {
      name: 'externalUrl',
      type: 'text',
      label: 'External URL',
      admin: {
        condition: (_, siblingData) => (siblingData as { kind?: string })?.kind === 'external',
      },
      validate: (value: unknown, { siblingData }: { siblingData: Partial<{ kind?: string }> }) => {
        if (siblingData?.kind === 'external' && !value) {
          return 'External URL is required for external articles'
        }
        return true
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'readTime',
      type: 'text',
      required: true,
      label: 'Read time (minutes)',
    },
    {
      name: 'summary',
      type: 'textarea',
    },
    {
      name: 'categories',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'External image URL',
      admin: {
        description: 'Used when no uploaded image is set (e.g. Hashnode/Medium CDN)',
      },
    },
    {
      name: 'content',
      type: 'richText',
      admin: {
        condition: (_, siblingData) => (siblingData as { kind?: string })?.kind === 'full',
      },
      validate: (value: unknown, { siblingData }: { siblingData: Partial<{ kind?: string }> }) => {
        if (siblingData?.kind === 'full' && !value) {
          return 'Content is required for full posts'
        }
        return true
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Lower numbers appear first',
      },
    },
  ],
}
