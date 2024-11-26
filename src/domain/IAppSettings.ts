export type Theme = "light" | "dark";

export interface IAppSettings {
  theme: Theme;
  notificationsEnabled: boolean;
  autoUpdate: boolean;
}
