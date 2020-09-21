import React, { useEffect } from 'react'

import useSWR from 'swr'
import fetcher from '../lib/fetch'

import Layout from '../components/layout'
import Tweet from '../components/tweet'
import Loading from '../components/loading'

function HomePage() {
  const { data, error } = useSWR('/api/tweet', fetcher)

  return (
    <Layout>
      {!data && (
        <div className="loading">
          <Loading />
        </div>
      )}
      {data?.statuses.map((tweet) => {
        return <Tweet key={tweet.id} {...tweet} />
      })}
    </Layout>
  )
}

export default HomePage
