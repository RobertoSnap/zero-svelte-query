import { schema } from "$zero/schema";
import { type CustomMutatorDefs } from "@rocicorp/zero";
import { createMutators as createClientMutators, type AuthData } from "./client-mutators";



export function createMutators(authData: AuthData | undefined) {
    return {
        // Reuse all client mutators except the ones in `issue`
        ...createClientMutators(authData),
    } as const satisfies CustomMutatorDefs<typeof schema>;
}