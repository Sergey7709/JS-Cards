import { Navigate } from 'react-router-dom'

import { SignIn } from '@/components/auth/sign-in'
import { useGetAuthUserMeDataQuery, useSignInUserMutation } from '@/service'

export const Login = () => {
  const [getSignIn] = useSignInUserMutation()

  const { isError, isLoading } = useGetAuthUserMeDataQuery()

  const isAuthenticated = !isError

  if (isLoading) return <div>Loading...</div> ///!!!!!!!!!!!!

  if (isAuthenticated) return <Navigate to={'/'} replace={true} />

  return (
    <div>
      <SignIn onHandleSubmit={getSignIn} />
    </div>
  )
}