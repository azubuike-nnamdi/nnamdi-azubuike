import type { CollectionConfig } from 'payload'

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'featured', 'order', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) return data
        if (!data.slug && typeof data.name === 'string') {
          data.slug = slugify(data.name)
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'URL slug for /projects/[slug]. Auto-generated from name if left empty.',
      },
    },
    {
      name: 'proof',
      type: 'textarea',
      label: 'Proof (short)',
      admin: {
        description: 'One-line outcome shown on the homepage and project list.',
      },
    },
    {
      name: 'problem',
      type: 'textarea',
      admin: {
        description: 'What problem did this solve?',
      },
    },
    {
      name: 'role',
      type: 'textarea',
      label: 'Your role',
      admin: {
        description: 'What you owned on this project.',
      },
    },
    {
      name: 'outcome',
      type: 'textarea',
      admin: {
        description: 'Measurable or concrete result.',
      },
    },
    {
      name: 'decisions',
      type: 'textarea',
      label: 'Decisions / tradeoffs',
      admin: {
        description: 'What you chose (and why) — state, data fetching, architecture, etc.',
      },
    },
    {
      name: 'metrics',
      type: 'array',
      label: 'Metrics',
      labels: {
        singular: 'Metric',
        plural: 'Metrics',
      },
      admin: {
        description: 'Short proof points (e.g. Monthly users / 1M+). Prefer real numbers.',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'desc',
      type: 'textarea',
      label: 'Additional notes',
      admin: {
        description: 'Optional longer context. Prefer problem / role / outcome above.',
      },
    },
    {
      name: 'action',
      type: 'text',
      defaultValue: 'View Project',
      required: true,
    },
    {
      name: 'uri',
      type: 'text',
      required: true,
      label: 'Live URL',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Screenshot',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Screenshot URL',
      admin: {
        description:
          'Optional override. If empty, a live screenshot is generated from the project Live URL.',
      },
    },
    {
      name: 'seoDescription',
      type: 'textarea',
      label: 'SEO / social description',
      admin: {
        description: 'Overrides proof for Open Graph and meta description when set.',
      },
    },
    {
      name: 'technologies',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
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
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Show on the home page featured section',
      },
    },
  ],
}
