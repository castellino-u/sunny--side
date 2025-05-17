
export const SectionImageText = () => {
    return (

    <section >

        <div className=" h-[100vh] flex flex-col md:flex-row">
            <div className=" h-[50vh]">
                <img src="./images/mobile/image-transform.jpg" alt=""  className="h-[100%] w-[100%] object-cover"/>
            </div>
            
            <div className="text-center h-[50vh]" >
                <h2 className="font-extrabold text-3xl pt-12  ">
                    Transform your brand
                </h2>
                <p className="p-7 opacity-50">
                    We are a full-service creative agency specializing in helping brands grow fast.
                    Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                    <a href="https://github.com/castellino-u" className="font-bold text-lg tracking-wide relative after:block after:absolute after:h-1 after:w-full after:bg-yellow-200 after:bottom-0 after:left-0" target="_BLANK">LEARN MORE</a>
            </div>
        </div>

        <div className=" h-[100vh]" >
            <div className=" h-[50vh]">
                <img src="./images/mobile/image-stand-out.jpg" alt="" className="h-[100%] w-[100%] object-cover"/>
            </div>
            <div className="text-center h-[50vh]" >
                <h2 className="font-extrabold text-3xl pt-12  ">
                    Stand out to the right audience
                </h2>
                <p className="p-7 opacity-50">
                    Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places. 
                </p>
                    <a href="https://github.com/castellino-u" className="font-bold text-lg tracking-wide relative after:block after:absolute after:h-1 after:w-full after:bg-yellow-200 after:bottom-0 after:left-0" target="_blank">LEARN MORE</a>
            </div>

            <div>
                <div className="bg-[url(./images/mobile/image-graphic-design.jpg)] bg-cover h-[100vh]">
                    <div className="opacity-75 text-center p-5 pt-[65vh]">
                        <h1 className="font-extrabold text-5xl p-8">
                            Graphic Design 
                        </h1>
                        <p className="text-gray-700 text-lg">
                            Great desing makes you memorable. We deliver artwork that underscores   your brand message and captures potential clients'attention
                        </p>
                    </div>
                </div>

            </div>



            <div>
                <div className="bg-[url(./images/mobile/image-photography.jpg)] bg-cover h-[100vh]">
                    <div className="opacity-75 text-center p-5 pt-[65vh]">
                        <h1 className="font-extrabold text-5xl p-8">
                            Photography
                        </h1>
                        <p className="text-gray-700 text-lg">
                            Incrase your credibility by getting the most stunning, high-quality photos that improve your business image.
                        </p>
                    </div>
                </div>

            </div>


        </div>
        
    </section>

    );
};