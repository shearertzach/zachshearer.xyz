import Background from '../components/Background'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='min-h-screen'>
      <Header />
      <div className='max-w-5xl mx-auto'>
        <Component {...pageProps} />
        <Background />
      </div>
    </div>
  )
}

export default MyApp
