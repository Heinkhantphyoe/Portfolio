import React from 'react';
import ReactPageFlip from 'react-pageflip';
import spring from "../assets/images/spring.jpg";



const CertificatesBook = () => {

    const certificates = [
       
        {
            id: 1,
            path: spring
        }

    ];


    return (
        <div className="w-[320px] md:w-[480px] shadow-2xl rounded-lg overflow-hidden">
            <ReactPageFlip
                width={320}
                height={420}
                size="stretch"
                minWidth={315}
                maxWidth={480}
                minHeight={400}
                maxHeight={600}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                className="cert-book"
            >
                <div className="page-content relative flex flex-col items-center justify-center h-full bg-gradient-to-br from-primary to-pink-400 dark:from-gray-900 dark:to-gray-700 text-white overflow-hidden">
                    <div className="relative z-10 text-center">

                        <h1 className="text-2xl md:text-4xl font-bold mt-10 mb-5 tracking-wide">My Certificates</h1>
                        <div className="flex items-center justify-center gap-2 text-sm opacity-75">
                            <span>Click to flip pages</span>
                            <div className="flex gap-1 ml-2">
                                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse delay-200"></div>
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-400"></div>
                            </div>
                        </div>
                    </div>
                </div>


                {certificates.map(cert => (
                    <div key={cert.id} className="page-content relative h-full bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                        <div className="absolute inset-0 opacity-5 dark:opacity-10">
                            <div className="absolute inset-4 border-8 border-primary rounded-lg transform rotate-1"></div>
                            <div className="absolute inset-8 border-4 border-primary rounded-lg transform -rotate-1"></div>
                        </div>
                        <img
                            src={cert.path}
                            alt='no certificate'
                            className="w-[85%] mx-auto h-full object-contain"
                        />
                        <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-primary/30 rounded-tl-lg"></div>
                        <div className="absolute top-0 right-0 w-12 h-12 border-r-4 border-t-4 border-primary/30 rounded-tr-lg"></div>
                        <div className="absolute bottom-0 left-0 w-12 h-12 border-l-4 border-b-4 border-primary/30 rounded-bl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-primary/30 rounded-br-lg"></div>
                    </div>
                ))}


            </ReactPageFlip>
        </div>
    );
};

export default CertificatesBook;