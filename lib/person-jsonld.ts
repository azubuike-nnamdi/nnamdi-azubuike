import { GITHUB_URL, HASHNODE_URL, LINKEDIN_URL, MEDIUM_URL, TWITTER_URL } from '@/config/routes'

const siteUrl = 'https://www.nnamdiazubuike.dev'

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Nnamdi Azubuike',
        url: siteUrl,
        jobTitle: 'Software Engineering Lead',
        worksFor: {
          '@type': 'Organization',
          name: 'MTN Nigeria',
        },
        homeLocation: {
          '@type': 'Place',
          name: 'Lagos, Nigeria',
        },
        image: `${siteUrl}/img/portrait.jpg`,
        sameAs: [LINKEDIN_URL, GITHUB_URL, TWITTER_URL, MEDIUM_URL, HASHNODE_URL],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Nnamdi Azubuike',
        publisher: { '@id': `${siteUrl}/#person` },
      },
    ],
  }
}
