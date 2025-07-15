export default async function handler(req, res) {
  try {
    const sv = await import('../../lib/i18n/locales/sv.json')
    res.status(200).json({ success: true, data: sv.default })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
} 