import type { PageProps } from '@inertiajs/core'
import type { Config } from 'ziggy-js'

export interface Auth {
  user: User
}

export interface SharedData extends PageProps {
  name: string
  auth: Auth
  ziggy: Config & { location: string }
}
