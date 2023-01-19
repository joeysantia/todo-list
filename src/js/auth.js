import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import DOM from './dom'

DOM.loginButton.addEventListener('click', async () => {
    console.log('happy auth path')
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  })