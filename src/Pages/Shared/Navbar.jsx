import 'boxicons'
const Navbar = () => {
    return (
        <>
            <div className="flex mx-auto justify-center">
                <div className="container flex justify-between py-4">
                    <p className="text-[#666666] inter text-[13px]">Free shipping on all orders over $50</p>
                    <div className="text-[#666666] flex flex-row gap-4 inter">
                        <div className='flex flex-row flex-wrap items-center'>
                            <p>Eng</p>
                            <box-icon name='chevron-down' color="#666666"></box-icon>
                        </div>
                        <p>Faqs</p>
                        <div className='flex flex-row flex-wrap items-center gap-1'>
                            <box-icon name='info-circle' color="#666666" animation='tada'></box-icon>
                            <p>Need Help</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar

