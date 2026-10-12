import type { CollectionConfig } from 'payload'

export const TailoredPages: CollectionConfig = {
  slug: 'tailored-pages',
  admin: {
    useAsTitle: 'audience',
    defaultColumns: ['audience', 'slug', 'updatedAt'],
    description: 'Unlisted pages prepared for a role. The job description itself is not stored.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'audience',
      type: 'text',
      required: true,
      admin: {
        description: 'The role this page was prepared for. This is not a title held.',
      },
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'lede',
      type: 'textarea',
      required: true,
    },
    {
      name: 'skills',
      type: 'text',
      hasMany: true,
      admin: {
        description: 'Skills the job post and the site already share. The job description is not stored.',
      },
    },
    {
      name: 'projectSlugs',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'slug',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'experienceCompany',
      type: 'text',
    },
  ],
}
