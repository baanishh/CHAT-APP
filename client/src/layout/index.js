import Logo from '../assets/logo.png'
const AuthLayout = ({children}) => {
  return (
    <>
      <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white'>
            <img 
              src={Logo}
              alt='logo'
              width={180}
              height={60}
            />
      </header>

      {children}
    </>
  )
}

export default AuthLayout
