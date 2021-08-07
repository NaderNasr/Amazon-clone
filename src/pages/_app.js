import '../styles/globals.css'
import {store} from '../app/store'
import {Provider as AuthProvider} from 'next-auth/client'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
  //auth can be used through out application
  <AuthProvider session={pageProps.session}>
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  </AuthProvider>
  )
}

export default MyApp
