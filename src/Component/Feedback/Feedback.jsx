import React from 'react';

const Feedback = () => {
    return (
        <div className='mb-20'>
            <h3 className='mt-20 mb-10 text-center text-3xl font-bold text-red-500'>
                Our Happy Client
            </h3>
            <p className='w-[50%] text-center mx-auto mb-10'>Read what our customers have to say about their experience with us</p>
            <div className="carousel w-[100%] text-center">

                <div id="item1" className="carousel-item mx-auto w-[100%] ">
                    <div className='mx-auto flex card items-center'>
                        <img className='w-40 flex rounded-full first-letter mb-5' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tommy-shelby-cillian-murphy-peaky-blinders-1569234705.jpg?crop=0.552xw:0.368xh;0.378xw,0.0295xh&resize=1200:*" alt="" />
                        <p className='text-center w-96 mx-auto mt-5'>Absolutely delicious! The flavors were perfectly balanced and the presentation was beautiful.</p>
                        <p className='text-sm mt-3'>
                            Ratings : 4.8
                        </p>
                    </div>
                </div>

                <div id="item2" className="carousel-item mx-auto w-[100%]">
                    <div className='mx-auto flex card items-center'>
                        <img className='w-40 flex rounded-full ' src="https://i.redd.it/fhcxuep2kla41.jpg" alt="" />
                        <p className='text-center w-60 mx-auto mt-5'>I never knew vegan food could taste this good. I was blown away by the creativity and taste.</p>
                        <p className='text-sm mt-3'>
                            Ratings : 5.00
                        </p>
                    </div>
                </div>

                <div id="item3" className="carousel-item mx-auto w-[100%]">
                    <div className='mx-auto flex card items-center'>
                        <img className='w-40 flex rounded-full ' src="https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.jpg" alt="" />
                        <p className='text-center w-60 mx-auto mt-5'>The attention to detail was impressive. You can tell that each dish was made with care and passion.</p>
                        <p className='text-sm mt-3'>
                            Ratings : 4.5
                        </p>
                    </div>
                </div>

                <div id="item4" className="carousel-item mx-auto w-[100%]">
                    <div className='mx-auto flex card items-center'>
                        <img className='w-40 flex rounded-full ' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                        <p className='text-center w-60 mx-auto mt-5'>I'm a picky eater but I was pleasantly surprised by how much I enjoyed the dishes. I can't wait to try more.</p>
                        <p className='text-sm mt-3'>
                            Ratings : 4.2
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-[50%] py-2 gap-5 mx-auto mt-10">
                <a href="#item1" className="btn btn-xs bg-red-500 border-none">1</a>
                <a href="#item2" className="btn btn-xs bg-red-500 border-none">2</a>
                <a href="#item3" className="btn btn-xs bg-red-500 border-none">3</a>
                <a href="#item4" className="btn btn-xs bg-red-500 border-none">4</a>
            </div>
        </div>
    );
};

export default Feedback;