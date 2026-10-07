/** Typed access to Vite environment variables. */
export const env = {
  API_BASE_URL:
    (import.meta.env.VITE_API_BASE_URL as string) ??
    "http://localhost:8000/api/v1",
  APP_NAME:
    (import.meta.env.VITE_APP_NAME as string) ??
    "Unique Nurse and Aya Services",
} as const;

export const STORAGE_KEYS = {
  accessToken: "una.access_token",
  refreshToken: "una.refresh_token",
  user: "una.user",
  theme: "una.theme",
  sidebar: "una.sidebar_collapsed",
} as const;
