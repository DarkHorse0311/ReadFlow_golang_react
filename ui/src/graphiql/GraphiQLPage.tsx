import 'graphiql/graphiql.css'

import React, { Suspense, useCallback, useContext, useState } from 'react'
import { AuthContext } from 'react-oidc-context'
import { RouteComponentProps } from 'react-router'

import { API_BASE_URL } from '../constants'

const GraphiQL = React.lazy(() => import('graphiql'))

type AllProps = RouteComponentProps

export default ({ location }: AllProps) => {
  const query = new URLSearchParams(location.search)
  const auth = useContext(AuthContext)
  const [basePath] = useState(query.has('admin') ? '/admin' : '/graphql')

  const fetcher = useCallback(
    async (graphQLParams: any) => {
      const user = auth?.user
      const headers: HeadersInit = new Headers()
      headers.set('Content-Type', 'application/json')
      if (user && user.access_token) {
        headers.set('authorization', 'Bearer ' + user.access_token)
      }
      return fetch(API_BASE_URL + basePath, {
        method: 'post',
        headers,
        credentials: 'same-origin',
        body: JSON.stringify(graphQLParams),
      }).then((response) => response.json())
    },
    [auth, basePath]
  )

  return (
    <Suspense fallback={<div>loading...</div>}>
      <GraphiQL fetcher={fetcher} />
    </Suspense>
  )
}
