import { graphql } from 'msw'

interface GraphQLRequest {
    query: string,
    variables?: Record<string, any>
}

export const handlers = [
    graphql.query('list', null),
]

