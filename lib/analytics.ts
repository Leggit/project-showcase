export const analyticsIsOptedOut = () => {
  return document.cookie
    .split(";")
    .some((item) => item.trim().startsWith("analyticsOptOut="));
};

export const setOptOutCookie = () => {
  console.log("OPT OUT");
  const cookieName = "analyticsOptOut";
  const cookieValue = "true";
  const daysToExpire = 365;

  const d = new Date();
  d.setTime(d.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();

  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";

  window.location.reload();
};
