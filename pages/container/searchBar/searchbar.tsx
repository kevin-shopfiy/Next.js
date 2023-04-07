import Image from "next/image";
import styles from '@/styles/SearchBar.module.css'
import ButtonIcon from '../../assets/icon/btnIcon.svg';
import PatternIconBlack from '../../assets/icon/patternIconBlack.svg';
import PatternIconWhite from '../../assets/icon/patternIconWhite.svg';


const SearchBar = () => {
    const sortData = [
        'Dashboard',
        'Settings',
        'Earnings',
        'Sign out',
    ];
    return (
        <>
            <main>
                <div className="max-w-7xl mx-auto z-10 text-[#331B3B]">
                     <div className="pt-32 gap-4 flex flex-col sm:flex-row xl:px-0 md:px-4 px-2">
                       <div className="lg:w-2/3 w-full flex gap-4 items-center justify-between">
                            <div className="filter bg-[#F2CE3D] rounded-[12px] py-3 w-2/6 flex lg:gap-4 gap-2 justify-center items-center cursor-pointer">
                                <Image src={ButtonIcon} alt='png' draggable='false' />
                                <span className="text-sm sm:text-base">Filter</span>
                            </div>
                            <div className="search w-full">
                                <form className="flex items-center">   
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" id="simple-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 py-3 focus-visible:ring" placeholder="Search collection by athlete name, event name or location" required />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="lg:w-1/3 w-full flex gap-4 items-center justify-between z-10">
                            <div className="sort md:w-3/4 w-full">
                                <div className={styles.sortButton}>
                                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-full flex justify-between text-[#331B3B] bg-[#fff] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center " type="button">Sort by: Date<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                </div>
                                 <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        {
                                            sortData.map((data, index) => {
                                                return(
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{data}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="pattern flex md:w-1/4 sm:w-auto justify-right">
                                <div className={styles.borderRadiusLeft}>
                                    <div className="bg-[#fff] w-12 h-12 relative">
                                        <Image src={PatternIconWhite} alt='png' draggable='false' className={styles.patternIcon} />
                                    </div>
                                </div>
                                <div className={styles.borderRadiusRight}> 
                                    <div className="bg-[#F2CE3D] w-12 h-12 relative">
                                        <Image src={PatternIconBlack} alt='png' draggable='false' className={styles.patternIcon}/>
                                    </div>
                                </div>
                                
                            </div>
                        </div> 
                     </div>
                </div>
            </main>
        </>
    )
}

export default SearchBar;