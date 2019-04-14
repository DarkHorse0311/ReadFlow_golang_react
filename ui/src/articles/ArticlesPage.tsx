import React, { useCallback } from 'react'
import { useQuery, useMutation } from 'react-apollo-hooks'

import { GetArticlesResponse, GetArticlesRequest, Article } from './models'
import { GetArticles, MarkAllArticlesAsRead } from './queries'
import Page from  '../common/Page'
import ArticleList from './components/ArticleList'
import ErrorPanel from '../error/ErrorPanel'
import { matchResponse, getURLParam, getGQLError } from '../common/helpers'
import Loader from '../common/Loader'
import Panel from '../common/Panel'
import { RouteComponentProps } from 'react-router'
import { Category } from '../categories/models'
import ArticlesPageMenu from './components/ArticlesPageMenu'
import { IMessageDispatchProps, connectMessageDispatch } from '../containers/MessageContainer';

type Props = {
  category?: Category
}

type AllProps = Props & RouteComponentProps & IMessageDispatchProps

export const ArticlesPage = (props : AllProps) => {
  const {category, location, match, showMessage} = props
  const params = new URLSearchParams(location.search)
  const req: GetArticlesRequest = {
    limit: getURLParam<number>(params, 'limit', 10),
    sortOrder: getURLParam<string>(params, 'sort', 'asc'),
    status: 'unread',
  }
  
  let title = 'to read'
  let basePath = match.url + '/'
  let emptyMessage = 'no article to read'
  if (category) {
    req.category = category.id
    req.status = getURLParam<string>(params, 'status', 'unread'),
    title = (req.status === 'unread') ? "to read" : "read"
    title = title + ' in "' + category.title + '"'
    basePath += 'articles/'
    emptyMessage = 'no article to read in this category'
  }

  if (basePath.startsWith('/history')) {
    title = 'read'
    req.status = 'read'
    emptyMessage = 'history is empty'
    if (!params.has('sort')) {
      req.sortOrder = 'desc'
    }
  }
  
  const { data, error, loading, fetchMore, refetch } = useQuery<GetArticlesResponse>(GetArticles, {
    variables: req
  })
  
  const fetchMoreArticles = useCallback(async () => {
    if (!data!.articles.hasNext) {
      return
    }
    console.log('fetching more articles...')
    await fetchMore({
      variables: {...req, afterCursor: data!.articles.endCursor, category: null},
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        const nbFetchedArticles = fetchMoreResult.articles.entries.length
        console.log(nbFetchedArticles + ' article(s) fetched')
        const articles =  {
          ...fetchMoreResult.articles,
          entries: [...prev.articles.entries, ...fetchMoreResult.articles.entries]
        }
        return {articles}
      }
    })
  }, [data])

  const markAllArticlesAsReadMutation = useMutation<{category?: number}>(MarkAllArticlesAsRead)

  const markAllArticlesAsRead = async () => {
    try{
      const res = await markAllArticlesAsReadMutation({
        variables: {category: category ? category.id : null},
      })
      await refetch()
    } catch (err) {
      showMessage(getGQLError(err), true)
    }
  }

  const markAllAsRead = useCallback(() => {
    markAllArticlesAsRead()
  }, [category])
  
  const render = matchResponse<GetArticlesResponse>({
    Loading: () => <Loader />,
    Error: (err) => <Panel><ErrorPanel>{err.message}</ErrorPanel></Panel>,
    Data: (d) => <ArticleList
      articles={d.articles.entries}
      basePath={basePath}
      emptyMessage={emptyMessage}
      filter={(a) => a.status === req.status}
      hasMore={d.articles.hasNext}
      refetch={refetch}
      fetchMoreArticles={fetchMoreArticles}
    />,
    Other: () => <Panel><ErrorPanel>Unable to fetch articles!</ErrorPanel></Panel>
  })

  if (data && data.articles) {
    const {totalCount} = data.articles
    const plural = totalCount > 1 ? " articles " : " article " 
    title = totalCount + plural + title
  } else (
    title = " "
  )

  return (
    <Page title={title} actions={
        <ArticlesPageMenu 
          refresh={refetch}
          markAllAsRead={req.status == 'unread' ? markAllAsRead : undefined}
          canToggleStatus={category !== undefined} />
      }>
      {render(data, error, loading)}
    </Page>
  )
}

export default connectMessageDispatch(ArticlesPage)
