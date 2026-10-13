import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        try {
          const { revalidatePath } = await import('next/cache')
          revalidatePath('/', 'layout')
        } catch (error) {
          if (
            !(error instanceof Error) ||
            !error.message.includes('static generation store missing')
          ) {
            throw error
          }
        }
      },
    ],
  },
  fields: [
    {
      name: 'about',
      type: 'group',
      label: 'About',
      admin: {
        description:
          'Supporting copy for the site. The homepage headline is fixed in the page: “Engineering on products people use.”',
      },
      fields: [
        {
          name: 'role',
          type: 'text',
          defaultValue: 'Software Engineering Lead',
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'MTN Nigeria',
        },
        {
          name: 'intro',
          type: 'textarea',
          admin: {
            description: 'First paragraph. Highlighted terms below are emphasized automatically.',
          },
        },
        {
          name: 'body',
          type: 'textarea',
          admin: {
            description:
              'Second paragraph. Add links with [[label|/path]], e.g. [[write|/articles]].',
          },
        },
        {
          name: 'highlights',
          type: 'array',
          labels: {
            singular: 'Highlight',
            plural: 'Highlights',
          },
          admin: {
            description: 'Words or phrases to emphasize in the intro paragraph.',
          },
          fields: [
            {
              name: 'term',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Contact',
      admin: {
        description: 'WhatsApp and other direct contact options.',
      },
      fields: [
        {
          name: 'whatsappPhone',
          type: 'text',
          admin: {
            description:
              'Digits only with country code (no + or spaces). Example: 2348012345678.',
          },
        },
        {
          name: 'whatsappMessage',
          type: 'textarea',
          defaultValue:
            'Hello Nnamdi, I came from your website and would like to talk.',
          admin: {
            description: 'Prefill message when someone opens WhatsApp.',
          },
        },
      ],
    },
    {
      name: 'resume',
      type: 'group',
      label: 'Resume / CV',
      admin: {
        description:
          'Public resume link used in the footer, contact page, and experience page.',
      },
      fields: [
        {
          name: 'url',
          type: 'text',
          label: 'Resume URL',
          admin: {
            description:
              'Google Drive, Dropbox, or any public CV link. No code change needed after updating.',
            placeholder: 'https://drive.google.com/file/d/.../view',
          },
        },
      ],
    },
    {
      name: 'experienceIntro',
      type: 'textarea',
      label: 'Experience intro',
      admin: {
        description: 'Opening paragraph on /experience.',
      },
    },
    {
      name: 'experience',
      type: 'array',
      label: 'Experience',
      labels: {
        singular: 'Role',
        plural: 'Roles',
      },
      admin: {
        description: 'Roles on /experience and the record on /about. Order here is the order on the page.',
      },
      fields: [
        {
          name: 'company',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          required: true,
        },
        {
          name: 'badge',
          type: 'text',
          admin: {
            description: 'Optional chip next to the role (e.g. Promoted to Team Lead).',
          },
        },
        {
          name: 'period',
          type: 'text',
          admin: {
            description: 'e.g. 2023 — Present',
          },
        },
        {
          name: 'summary',
          type: 'textarea',
          admin: {
            description: 'One-line scope for the role.',
          },
        },
        {
          name: 'highlights',
          type: 'array',
          labels: {
            singular: 'Highlight',
            plural: 'Highlights',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'profile',
      type: 'group',
      label: 'About page',
      admin: {
        description:
          'Copy on /about. In a paragraph, write a link as [[Work|/projects]].',
      },
      fields: [
        { name: 'lede', type: 'textarea' },
        { name: 'meta', type: 'text' },
        { name: 'overviewHeading', type: 'text', label: 'Overview heading' },
        {
          name: 'overview',
          type: 'array',
          labels: { singular: 'Paragraph', plural: 'Paragraphs' },
          fields: [{ name: 'text', type: 'textarea', required: true }],
        },
        { name: 'practiceHeading', type: 'text', label: 'Practice heading' },
        { name: 'practiceIntro', type: 'textarea', label: 'Practice intro' },
        {
          name: 'practice',
          type: 'array',
          labels: { singular: 'Practice', plural: 'Practice' },
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'detail', type: 'textarea', required: true },
          ],
        },
        { name: 'stack', type: 'textarea', label: 'Working stack' },
      ],
    },
    {
      name: 'education',
      type: 'array',
      labels: { singular: 'Credential', plural: 'Education' },
      admin: {
        description: 'Shown on /about and /experience.',
      },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'institution', type: 'text', required: true },
        { name: 'detail', type: 'text' },
      ],
    },
    {
      name: 'expertise',
      type: 'array',
      label: 'Scope',
      labels: { singular: 'Scope', plural: 'Scope' },
      admin: {
        description: 'Scope list on /experience.',
      },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'items', type: 'textarea', required: true },
      ],
    },
    {
      name: 'toolkit',
      type: 'array',
      labels: { singular: 'Group', plural: 'Toolkit' },
      admin: {
        description: 'Toolkit groups on /experience.',
      },
      fields: [
        { name: 'label', type: 'text', required: true },
        {
          name: 'items',
          type: 'array',
          labels: { singular: 'Tool', plural: 'Tools' },
          fields: [{ name: 'name', type: 'text', required: true }],
        },
      ],
    },
    {
      name: 'funProjects',
      type: 'array',
      label: 'Fun projects',
      labels: { singular: 'Project', plural: 'Fun projects' },
      admin: {
        description: 'Side projects on /fun. Order here is the order on the page.',
      },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'kind', type: 'text', required: true },
        { name: 'summary', type: 'textarea', required: true },
        { name: 'stack', type: 'text' },
        { name: 'github', type: 'text', label: 'GitHub URL' },
        { name: 'live', type: 'text', label: 'Live URL' },
      ],
    },
    {
      name: 'community',
      type: 'array',
      label: 'Community',
      labels: {
        singular: 'Seat',
        plural: 'Seats',
      },
      admin: {
        description:
          'Campus and community seats, earliest first. This is not employment. Order here is the order on the page.',
      },
      fields: [
        {
          name: 'shortName',
          type: 'text',
          admin: {
            description:
              'Name on the homepage strip. Repeated names are shown once. Falls back to the organization.',
          },
        },
        {
          name: 'period',
          type: 'text',
          admin: {
            description: 'e.g. August 2020 – 2021, or 300 level. Leave empty if undated.',
          },
        },
        {
          name: 'role',
          type: 'text',
          required: true,
        },
        {
          name: 'organization',
          type: 'text',
          required: true,
        },
        {
          name: 'summary',
          type: 'textarea',
          required: true,
        },
        {
          name: 'responsibilities',
          type: 'array',
          labels: {
            singular: 'Responsibility',
            plural: 'Responsibilities',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'logos',
          type: 'array',
          labels: {
            singular: 'Logo',
            plural: 'Logos',
          },
          fields: [
            {
              name: 'src',
              type: 'text',
              required: true,
              admin: {
                description: 'Public path, e.g. /img/community/gdg.png',
              },
            },
            {
              name: 'alt',
              type: 'text',
              required: true,
            },
            {
              name: 'mark',
              type: 'checkbox',
              defaultValue: false,
              admin: {
                description: 'Square marks render taller than wide wordmarks.',
              },
            },
          ],
        },
        {
          name: 'links',
          type: 'array',
          labels: {
            singular: 'Link',
            plural: 'Links',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'navLinks',
      type: 'array',
      labels: {
        singular: 'Nav Link',
        plural: 'Nav Links',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      labels: {
        singular: 'Social Link',
        plural: 'Social Links',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'uri',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Footer',
      admin: {
        description:
          'Copyright line. Year is generated automatically from the current date.',
      },
      fields: [
        {
          name: 'copyrightName',
          type: 'text',
          defaultValue: 'NNAMDI AZUBUIKE',
          admin: {
            description: 'Shown as © {year} NAME',
          },
        },
        {
          name: 'location',
          type: 'text',
          defaultValue: 'LAGOS, NIGERIA',
        },
        {
          name: 'timezone',
          type: 'text',
          defaultValue: 'Africa/Lagos',
          admin: {
            description:
              'IANA timezone (e.g. Africa/Lagos). Offset is computed live as UTC±X — not stored as a fixed string.',
          },
        },
      ],
    },
    {
      name: 'footerColumns',
      type: 'array',
      labels: {
        singular: 'Footer Column',
        plural: 'Footer Columns',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'links',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
            {
              name: 'isEmail',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
      ],
    },
  ],
}
