import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'about',
      type: 'group',
      label: 'About',
      admin: {
        description: 'Homepage intro under your name.',
      },
      fields: [
        {
          name: 'role',
          type: 'text',
          defaultValue: 'Frontend Lead',
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Software Engineer',
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
