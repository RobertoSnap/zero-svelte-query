import type { Query, QueryType, Smash, TableSchema } from '@rocicorp/zero/advanced';
import { createSubscriber } from 'svelte/reactivity';

export class ZeroQueryClass<
    TSchema extends TableSchema,
    TReturn extends QueryType,
> {
    #view
    #subscribe
    #resultType: 'unknown' | 'complete' = 'unknown';
    constructor(_query: Query<TSchema, TReturn>) {
        this.#view = _query.materialize()
        this.#view.data
        this.#subscribe = createSubscriber((update) => {
            const off = this.#view.addListener((data, resultType) => {
                this.#resultType = resultType
                update()
            })
            return () => {
                this.#view.destroy()
                off()
            }
        })
    }
    get current(): Smash<TReturn> {
        this.#subscribe()
        return this.#view.data
    }
    get resultType() {
        this.#subscribe()
        return this.#resultType
    }
}
export const useQuery = <TSchema extends TableSchema, TReturn extends QueryType>(
    query: Query<TSchema, TReturn>
) => new ZeroQueryClass<TSchema, TReturn>(query)
