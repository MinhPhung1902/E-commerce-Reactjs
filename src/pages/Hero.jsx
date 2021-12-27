import React from 'react'

const Hero = () => {
    const heroItems = [
        {id: 1,  text: 'browse ready-to-wear', img:'https://cdn-images.farfetch-contents.com/17/47/01/22/17470122_36350623_600.jpg'},
        {id: 2, text: 'browse shoes', img:'https://cdn-images.farfetch-contents.com/16/34/91/80/16349180_31737707_600.jpg'},
        {id: 3,  text: 'browse accessory', img:'https://cdn-images.farfetch-contents.com/16/72/02/36/16720236_33597334_600.jpg'},
        {id: 4,  text: 'browse jewelry', img:'https://cdn-images.farfetch-contents.com/15/78/94/26/15789426_30733122_600.jpg'},
    ]

    return (
        <div>
            <div className='bg-red-500 text-white justify-center items-center p-10'>
                <h1 className="font-bold text-4xl uppercase text-center">winter sale</h1>
                <p className='text-center mt-3'>Even more styles at up to <strong>50% off</strong>. Shop now-because they'll be gone soon</p>
                <div className='flex items-center justify-center p-5'>
                    <button className='bg-transparent text-decoration: underline mr-5'> 
                        Browse Women
                    </button>
                    <button className='bg-transparent text-decoration: underline mr-5'> 
                        Browse Men
                    </button>
                </div>
            </div>
            <div className="mt-10 p-5 sm:p-1">
                <h1 className="font-bold text-4xl text-center">Your Items</h1>
                <div className='flex flex-row p-3 gap-5 m-14'>
                    {heroItems.map((heroItem) => {
                        return (
                            <div key={heroItem.id} className='mr-4'>
                            <div className='object-cover'>
                                <img src={heroItem.img} alt="" />
                            </div>
                            <p className='text-decoration: underline uppercase text-center cursor-pointer'> 
                            {heroItem.text}
                        </p>
                        </div>
                        )
                    })}
                   </div>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 m-2 sm:m-14">
                <div className='object-cover'>
                    <img src="https://cdn-static.farfetch-contents.com/cms-cm/vn/media/3055110/data/d72ba2935d6f2148631c62cfd8692463.jpg?ratio=1x1_messaging-side&minWidth=936" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center m-14">
                    <h2 className="font-bold text-2xl mt-3">New trend</h2>
                    <p className='font-light text-base mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sapiente culpa fuga libero, et magni commodi officiis impedit nobis reiciendis rem accusamus harum maiores. Repellendus dignissimos officiis harum aperiam mollitia.</p>
                    <button className='bg-transparent  border-black border-2 rounded-xl p-2 m-3 mt-5 hover:text-gray-600'>Read and Shop</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 m-2 sm:m-14">
                <div className="flex flex-col justify-center items-center m-12">
                    <h2 className="font-bold text-2xl mt-3">Explore your styles</h2>
                    <p className='font-light text-base mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sapiente culpa fuga libero, et magni commodi officiis impedit nobis reiciendis rem accusamus harum maiores. Repellendus dignissimos officiis harum aperiam mollitia.</p>
                    <div className='object-cover mt-5'>
                        <img  src="https://cdn-static.farfetch-contents.com/cms-cm/vn/media/3058862/data/646e9de8cbac9ec6538d20234cc16593.jpg?ratio=1x1_two-columns&minWidth=624" alt="" />
                    </div>
                </div>
                <div className='object-cover mt-20 flex flex-col items-center justify-center'>
                    <img className='w-11/12' src="https://cdn-static.farfetch-contents.com/cms-cm/vn/media/3058796/data/0989965915d5a8aa2e6bb2cf18bf757d.jpg?ratio=1x1_messaging-side&minWidth=936" alt="" />
                    <button className='uppercase text-base m-5 p-2  bg-transparent border-black border-2 rounded-xl hover:text-gray-600'>Shop now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
                
