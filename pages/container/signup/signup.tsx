
import Image from 'next/image';
import styles from '@/styles/Signup.module.css';
import signupImage from '../../assets/signup/signupbg.png';
import Logo from '../../assets/logo/logo.svg';
import googleIcon from '../../assets/signup/googleIcon.svg';
            
const Signup = () => {
    return(
        <>
            <div className='max-w-xs md:max-w-md m-auto h-screen flex text-[#331B3B]'>
                 <div className='my-auto'> 
                <div className={styles.signupPage}>
                        <div className='w-full relative'>
                            <div>
                                <Image src={signupImage} alt='png' draggable='false' />
                            </div>
                            <Image src={Logo} alt='png' draggable='false' className={styles.logoImage}/>     
                        </div>
                        <div className='w-full lg:py-5 py-3 lg:px-10 px-4 text-left'>
                            <div className='pb-5'>
                                <span className='md:text-xl text-lg font-medium block pb-1'>Welcome to Tap</span>
                                <span className='md:text-base text-sm font-medium'>Your easiest and most secure way to manage all your NFTs</span>
                            </div>
                            <div>
                                <span className='md:text-base text-sm font-medium block pb-1'>Sign up or sign in</span>
                                <div className='pb-4'>
                                    <input type="text" id="simple-search" className="bg-white border text-gray-900 text-sm rounded-lg block w-full pl-3 p-2.5 sm:py-4 py-3" placeholder="Type here.." required />
                                </div>
                                <div>
                                    <button className='bg-[#9823EC] py-4 w-full rounded-[10px] sm:text-base text-sm font-medium text-center text-white'>Continue</button>
                                </div>
                                <div className='flex justify-between items-center py-2'>
                                    <hr className='block h-0.5 w-5/12' />
                                    <span className='text-sm'>Or</span>
                                    <hr className='block h-0.5 w-5/12'/>
                                </div>
                                
                                <div className='pb-5 w-full'>
                                    <button className='pl-4 py-4 flex justify-left items-center gap-3 bg-[#F0F0F0] rounded-[10px] w-full'>
                                        <Image src={googleIcon} alt='png' draggable='false' />
                                        <span className='sm:text-base text-sm font-medium'>Continue with Google</span>
                                    </button>
                                </div>
                                <hr />
                                <span className='text-xs md:text-sm font-medium block py-3 relative z-10'>By continuing, you acknowledge that you have read and agreed to Dapper's<a href='#' className='underline'>Terms of Service</a> and <a href='#' className='underline'>Privacy Policy</a>.</span>
                            </div>                         
                        </div>
                    </div>  
                </div>
            </div>   
        </>
    )
}           
            
export default Signup;      