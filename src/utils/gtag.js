export const GA_TRACKING_ID = "G-4CVME25L4E"; // Replace with your own Google Analytics tracking code

// Define the gtag function for tracking pageviews and other events
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
