import { format } from "date-fns";

export function getUserTime() {
  // Get user's timezone
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Get current time in user's timezone
  const userTime = new Date().toLocaleString(undefined, {
    timeZone: userTimezone,
  });

  return format(userTime, "HH:mm:ss");
}
