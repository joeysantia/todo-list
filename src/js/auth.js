import { signInWithPopup, signOut, getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth'
import DOM from './dom'

DOM.loginButton.addEventListener('click', async () => handleSignIn())

async function handleSignIn() {
  const auth = getAuth()
  if (!auth.currentUser) {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    DOM.loginButton.textContent = getAuth().currentUser.displayName
  } else {
    await signOut(getAuth())
    DOM.loginButton.textContent = "Sign In With Google"
  }
}
  