import type { HumanReadable, Query } from '@rocicorp/zero/advanced';
import type { ResultType, Schema } from '@rocicorp/zero/react';
import { createSubscriber } from 'svelte/reactivity';

export type QueryResultDetails = Readonly<{
    type: ResultType;
}>;

export type QueryResult<TReturn> = readonly [
    HumanReadable<TReturn>,
    QueryResultDetails,
];


export class ZeroQueryClass<
    TSchema extends Schema,
    TTable extends keyof TSchema['tables'] & string,
    TReturn,
> {
    #view
    #subscribe
    #resultType: 'unknown' | 'complete' = 'unknown';
    constructor(_query: Query<TSchema, TTable, TReturn>,) {
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
    get current(): HumanReadable<TReturn> {
        this.#subscribe()
        return this.#view.data as HumanReadable<TReturn>
    }
    get resultType() {
        this.#subscribe()
        return this.#resultType
    }
}
export const useQuery = <
    TSchema extends Schema,
    TTable extends keyof TSchema['tables'] & string,
    TReturn,
>(
    query: Query<TSchema, TTable, TReturn>
) => new ZeroQueryClass<TSchema, TTable, TReturn>(query)