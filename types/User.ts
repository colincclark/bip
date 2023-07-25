interface Preferences {
  theme: string
}

export interface User {
  name: string
  preferences: Preferences
  role: string
}
