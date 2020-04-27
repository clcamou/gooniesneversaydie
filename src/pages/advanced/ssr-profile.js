export async function getServerSideProps({ req, res }) {
    // Here you can check authentication status directly before rendering the page,
    // however the page would be a serverless function, which is more expensive and
    // slower than a static page with client side authentication
    const { user } = await auth0.getSession(req)
  
    if (!user) {
      res.writeHead(302, {
        Location: '/api/login',
      })
      res.end()
      return
    }
  
    return { props: { user } }
  }
  
  export default Profile