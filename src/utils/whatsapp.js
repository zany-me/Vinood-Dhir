import { profileData } from '../data/profileData';

/**
 * Open WhatsApp directly with a pre-filled message
 * @param {string} text - Message text
 */
export function openWhatsApp(text) {
  const phone = profileData.contact.whatsappNumber;
  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank', 'noopener,noreferrer');
}

/**
 * Helper to build an inquiry string for a course
 */
export function buildCourseInquiry(course) {
  return `Hello Mr. Vinood Dhir,\n\nI would like to inquire about your training course:\n*${course.title}*\nDuration: ${course.days} Day(s)\nBatch Size: Up to ${course.maxParticipants} participants\n\nPlease share availability and onboarding details for our organization.`;
}

/**
 * Helper to build an audit consultation inquiry
 */
export function buildAuditInquiry(standard) {
  return `Hello Mr. Vinood Dhir,\n\nOur company is seeking consultancy/auditing services for:\n*${standard.code} - ${standard.title}*\n\nPlease let us know when we can schedule an initial gap analysis or consultation call.`;
}

/**
 * Helper to build custom cost estimator inquiry
 */
export function buildEstimateInquiry(selectedCourses, totalDays, estimatedCost) {
  const courseList = selectedCourses.map((c, i) => `${i + 1}. ${c.title}`).join('\n');
  return `Hello Mr. Vinood Dhir,\n\nI created an estimate on your website for the following training modules:\n\n${courseList}\n\n*Total Modules:* ${selectedCourses.length}\n*Estimated Days:* ${totalDays}\n*Estimated Budget:* ₹${estimatedCost.toLocaleString('en-IN')}\n\nPlease review and let us know your available dates.`;
}
