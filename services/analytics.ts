/**
 * Analytics service for Google Analytics 4 tracking
 */

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

/**
 * Tracks a custom event in GA4
 * @param eventName Name of the event
 * @param params Event parameters
 */
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else {
    console.warn(`GA4 trackEvent failed: gtag is not available for event "${eventName}"`);
  }
};

/**
 * Specifically tracks clicks to WhatsApp
 * @param location Where the button was clicked (e.g., 'hero', 'floating', 'footer')
 */
export const trackWhatsAppClick = (location: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'Lead Generation',
    event_label: `WhatsApp Click from ${location}`,
    location: location
  });
};
