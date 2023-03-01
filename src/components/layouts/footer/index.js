/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
    return (
        <section className="w-full md:p-[60px] pb-0 md:pb-0 font-light bg-[#E5E5E5] mt-10">
            <div className="flex flex-col justify-center items-center">
                <div className='md:min-h-[182px] w-[278px] relative'>
                    <Image fill src="/footer_logo.png" alt="sb" className="w-full py-[58px] absolute" />
                </div>
                <div className='flex text-[15px] font-bold'>
                    <p>Махатма Ганди гудамж 39, Сүхбаатар, Улаанбаатар, Монгол, 17011 </p>
                    <p className=''>- (+976) 7000 2030 - INFO@CORPORATEHOTEL.MN</p>
                </div>

            </div>
        </section>
    )
}
export default Footer