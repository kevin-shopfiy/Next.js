import Image from "next/image";
import styles from '@/styles/Faq.module.css';
import questionMark from '../../assets/icon/question.png';

const About = (props) => {
    return (
        <>
            <div className="max-w-5xl m-auto relative z-10 text-[#331B3B]">
                <div className="pt-32 w-full md:px-6">
                    <h1 className='w-full sm:text-4xl text-2xl font-semibold mb-1.5 sm:pb-8 pb-4'>About us</h1>
                    <div className='w-full sm:text-base text-sm font-medium'>
                        Tap is a platform for athletes to distribute NFTs to their fans IRL (in Real Life) and around the world.
                        As a fan, you can build collections of your favorite players' NFTs and prove your fandom to fellow fans and friends.
                        On blockchain, your NFT’s are authenticated and verified as originating from the athletes themselves, they will have full visibility into who their biggest fans are in order to recognize and reward you for your loyalty.<br/><br/>
                                            
                        IRL: Tap utilizes a proprietary method for athletes to mint NFTs on-the-spot, just like giving an autograph. This in-person tap proves you had a face-to-face, real-life, interaction. These NFTs are FREE because collecting an autograph should never cost you money.<br/><br/>

                        Minting Link: Athletes are able to create minting links to distribute online so fans around the world can collect. These NFTs are affordable for all fans and can be acquired for $1.99.<br/><br/>
                    </div>
                    <h1 className='w-full sm:text-4xl text-2xl font-semibold mb-1.5 sm:pb-8 pb-4'>FAQ</h1>
                    <div>
                        <div className='privacy-accordion py-4 px-0'>                  
                            {/* <Accordion className='md:w-2/3' allowMultiple>
                                {
                                    props.data.map((data, index) => {
                                        return (
                                        <AccordionItem className='accordion-item px-5 py-4 mb-4'>
                                                <h2>
                                                <AccordionButton className='flex justify-between'>
                                                    <div className='flex gap-4'>
                                                        <Image src={questionMark} alt='png' className='h-full'/>
                                                        <span className='text-left font-medium text-navy-900 sm:text-base text-sm' flex='1'>
                                                        {data.title}
                                                        </span>
                                                    </div>                                                
                                                    <AccordionIcon className='text-left !text-navy-900 dark:!text-white'/>
                                                </AccordionButton>
                                                </h2>
                                                <AccordionPanel className='text-left text-medium mt-2 !text-navy-900 sm:text-base text-sm' pb={4}>
                                                    {data.content}
                                                </AccordionPanel>
                                            </AccordionItem> 
                                        )
                                    })
                                }
                            </Accordion> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;