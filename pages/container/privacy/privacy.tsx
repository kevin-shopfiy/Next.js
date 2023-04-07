import Image from 'next/image';
import style from '@/styles/Provacy.module.css';

const Privacy = (props) => {
    return(
        <>
            <div className='max-w-6xl mx-auto text-[#331B3B] px-6 relative z-10 text-[#331B3B]'>
                <div className='pt-32 w-full'>
                    <h1 className='sm:text-4xl text-2xl font-semibold pb-1'>Privacy Policy</h1>
                    <span className='text-xs sm:text-base text-sm pb-4 block sm:leading-8'>Last Updated: January 2, 2023</span>
                    <div className='w-full sm:text-base text-sm font-medium'>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.<br/>
                        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.<br/>
                        Interpretation and Definitions<br/>
                        Interpretation<br/>
                        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.<br/>
                        Definitions<br/>
                        For the purposes of this Privacy Policy:<br/>
                        <ul>
                            {
                                props.data1.map((item, index) => {
                                    return (
                                        <li key={item}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                     <hr className='sm:my-10 my-3'/>
                    <div>
                        <div className='privacy-accordion py-4 px-0'>                  
                            {/* <Accordion className='w-full' allowMultiple>
                                {
                                    accordionData.map((item, index) => {
                                        return (
                                        <AccordionItem className='accordion-item px-5 py-4 mb-4' key={item}>
                                                <h2>
                                                <AccordionButton className='flex justify-between'>
                                                    <span className='text-left font-medium text-navy-900 sm:text-base text-sm' flex='1'>
                                                    {item.title}
                                                    </span>
                                                    <AccordionIcon className='text-left !text-navy-900 dark:!text-white'/>
                                                </AccordionButton>
                                                </h2>
                                                <AccordionPanel className='text-left text-medium mt-2 !text-navy-900 sm:text-base text-sm' pb={4}>
                                                    {item.content}
                                                </AccordionPanel>
                                            </AccordionItem> 
                                        )
                                    })
                                }
                            </Accordion> */}
                            {/* <Accordion
                                active={0}
                                collapses={[
                                {
                                    title: "Collapsible group Item #1",
                                    content:
                                    "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                                },
                                {
                                    title: "Collapsible group Item #2",
                                    content:
                                    "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                                },
                                {
                                    title: "Collapsible group Item #3",
                                    content:
                                    "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                                }
                                ]}
                                /> */}
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}
export default Privacy;