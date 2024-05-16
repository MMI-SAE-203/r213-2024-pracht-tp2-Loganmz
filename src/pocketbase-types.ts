/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Agents = "agents",
	Maison = "maison",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AgentsRecord = {
	email?: string
	nom?: string
	prenom?: string
	tel?: number
}

export type MaisonRecord = {
	Adresse?: string
	Favori?: boolean
	Images?: string
	Nom_de_la_maison?: string
	Nombre_de_chambres?: number
	Nombre_de_salles_de_bain?: number
	Prix?: number
	Superficie?: number
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AgentsResponse<Texpand = unknown> = Required<AgentsRecord> & BaseSystemFields<Texpand>
export type MaisonResponse<Texpand = unknown> = Required<MaisonRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	agents: AgentsRecord
	maison: MaisonRecord
	users: UsersRecord
}

export type CollectionResponses = {
	agents: AgentsResponse
	maison: MaisonResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'agents'): RecordService<AgentsResponse>
	collection(idOrName: 'maison'): RecordService<MaisonResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
