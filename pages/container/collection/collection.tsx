import Image from "next/image";
import styles from '@/styles/Product.module.css';
import productImage from '../../assets/collection/productImage.png';
import productBadge from '../../assets/collection/productBadge.png';
import productTicket from '../../assets/collection/productTicket.png';
import quoteImage from '../../assets/collection/quote.png';

const Product = (props) => {
    
    return (
        <>
            <div className="max-w-7xl mx-auto relative z-10 text-[#331B3B]">
                <div className="pt-20 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 gap-y-8 px-4 xl:px-0">
                    {
                        props.data.map((data, index)=> {
                            return (
                                <div className="sm:w-full w-7/8 m-auto" key={index}>
                                    <div className={styles.productItem}>
                                        <img src={data} alt='png' draggable='false' className="w-full" />
                                        <div className="text flex flex-col w-full p-4 pb-2">
                                            <div className="flex justify-between items-center pb-3">
                                                <div className="text w-3/5">
                                                    <span className="sm:text-2xl text-xl font-bold block text-left">Benjamin</span>
                                                    <span className="sm:text-2xl text-xl block text-left">Pedersen</span>
                                                </div>
                                                <div>
                                                    <Image src={productBadge} alt='png' draggable='false'/>
                                                </div>
                                            </div>
                                            
                                                <div className={styles.productQuoteSection}>
                                                    <Image src={quoteImage} alt='png' draggable='false' />
                                                    <span className="text-sm">First pole but I’m not finished, let’s...</span>
                                                </div>
                                            
                                            <div className="flex gap-2 justify-between items-first">
                                                <div className="mt-2">
                                                    <Image src={productTicket} alt='png' draggable='false'/>
                                                </div>
                                                <div className="w-full">
                                                    <span className="sm:text-sm text-xs font-semibold block pb-1">Indy Lights Grand Prix of Portland 2022</span>
                                                    <span className="sm:text-sm text-xs block">Portland International Raceway 6/8</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }                     
                </div>
            </div>
        </>
    )
}

export default Product;