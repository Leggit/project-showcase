export const analyticsIsOptedOut = () => {
  return !!localStorage.getItem("analyticsOptOut");
};

export const setAnalyticsOptOut = () => {
  localStorage.setItem("analyticsOptOut", "true");
  window.location.reload();
};
