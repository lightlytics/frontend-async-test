# Frontend Async Tet

Your goal is to implement the 'timed-fetcher' component which takes an async fetcher function, and a timeout in MS as props, displays a loading state while data is being fetched, displays the fetched data if it's available withing < 'timeout' MS, or display "N/A" otherwise (the component should render its final state after at most 'timeout' MS)
