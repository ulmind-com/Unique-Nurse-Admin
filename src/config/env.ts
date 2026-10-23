function resolveApiBaseUrl(): string {
  const raw = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim();
  if (!raw) {
    return "https://unique-nurse-backend.onrender.com/api/v1";
  }
  const stripped = raw.replace(/\/+$/, "");
  return stripped.endsWith("/api/v1") ? stripped : `${stripped}/api/v1`;
}

export const env = {
  API_BASE_URL: resolveApiBaseUrl(),
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
