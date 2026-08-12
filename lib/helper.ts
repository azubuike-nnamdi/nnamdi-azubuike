//function to get current year
export const getCurrentYear = () => {
  return new Date().getFullYear();
}

/** Format a zone's current offset as UTC, UTC+1, UTC-5, UTC+5:30, etc. */
export const formatUtcOffset = (timeZone = 'Africa/Lagos', date = new Date()) => {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeZoneName: 'shortOffset',
    }).formatToParts(date)
    const raw = parts.find((part) => part.type === 'timeZoneName')?.value ?? 'GMT'
    // shortOffset → "GMT", "GMT+0", "GMT+1", "GMT-5", "GMT+5:30"
    if (raw === 'GMT' || raw === 'GMT+0' || raw === 'GMT-0') return 'UTC'
    return raw.replace(/^GMT/, 'UTC')
  } catch {
    return 'UTC'
  }
}


