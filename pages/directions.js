import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout.js"

export default function Directions() {
    return (
        <Layout>
            <Head>
                <title>{"Directions - " + siteTitle}</title>
            </Head>

            <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="items-center w-full">
                    <div className="mb-8 w-full">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-sky-500 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                            HackMUN V Directions
                        </h1>

                        {/* desktop */}
                        <div className="w-full hidden md:block pt-2">
                            <div className="content flex py-2">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1222.954317362553!2d-73.8432224122659!3d41.06970726552474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2eacaa3d59cd7%3A0xfb49b406a39181d2!2sHackley%20Upper%20School!5e0!3m2!1sen!2sus!4v1647567104221!5m2!1sen!2sus"
                                    className="w-96 h-72 px-4 self-center"
                                    loading="lazy">
                                </iframe>
                                <div className="item-body px-4">
                                    <p className="py-2 text-xl leading-normal text-gray-500 lg:text-xl">
                                        This year&apos;s HackMUN conference will be hosted in person at Hackley School in Tarrytown, New York (293 Benedict Avenue, Tarrytown, NY 10591). 
                                    </p>
                                    <p className="py-2 text-xl leading-normal text-gray-500 lg:text-xl">
                                        Please arrive at the Upper School building, which is where the circle is (shown on map).
                                    </p>
                                    <p className="py-2 text-xl leading-normal text-gray-500 lg:text-xl">
                                        Hackley School can be reached through the MetroNorth train and the Cross Westchester Expressway (I-287), as well as the Saw Mill Parkway.
                                    </p>
                                    <p className="py-2 text-xl leading-normal text-gray-500 lg:text-xl">
                                        If you plan to transit by train, you must arrive at the Tarrytown MetroNorth Train Station. From there on it&apos;s most convenient to take a taxi or Uber to the Hackley campus. If you intend to walk from the train station to the Hackley campus, know that it’s roughly a 30-40 minutes hike that’s almost entirely uphill.
                                    </p>
                                </div>
                            </div>
                            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl">
                                If you&apos;re traveling on I-287, please take exit 1 onto White Plains road, and then unto Benedict Avenue, until you see signs leading you into the Hackley Campus. The conference will be hosted in the Upper School. If you’re traveling northwards up the Saw Mill River Parkway, take exit 21W and follow W Main Street towards Tarrytown, then onto Benedict Avenue to the Hackley campus. If you’re traveling Southward on the Saw Mill River Parkway, take exit 22 and follow signs for Tarrytown onto White Plains Road, then Benedict Avenue and once again the Hackley campus.
                            </p>
                        </div>

                        {/* mobile */}
                        <div className='w-full pt-5 md:hidden mx-auto items-center'>
                            <p className="lg:h-72 text-base text-top align-text-top mb-3 text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                This year&apos;s HackMUN conference will be hosted in person at Hackley School in Tarrytown, New York (293 Benedict Avenue, Tarrytown, NY 10591). 
                            </p>

                            <p className="lg:h-72 text-base text-top align-text-top mb-3 text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Please arrive at the Upper School building, which is where the circle is (shown on map).
                            </p>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1222.954317362553!2d-73.8432224122659!3d41.06970726552474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2eacaa3d59cd7%3A0xfb49b406a39181d2!2sHackley%20Upper%20School!5e0!3m2!1sen!2sus!4v1647567104221!5m2!1sen!2sus"
                                className="max-w-96 h-72 self-center my-5 mx-auto"
                                loading="lazy">
                            </iframe>

                            <p className="lg:h-72 text-base text-top align-text-top mb-3 text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Hackley School can be reached through the MetroNorth train and the Cross Westchester Expressway (I-287), as well as the Saw Mill Parkway.
                            </p>

                            <p className="lg:h-72 text-base text-top align-text-top mb-3 text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                If you plan to transit by train, you must arrive at the Tarrytown MetroNorth Train Station. From there on it’s most convenient to take a taxi or Uber to the Hackley campus. If you intend to walk from the train station to the Hackley campus, know that it&apos;s roughly a 30-40 minutes hike that&apos;s almost entirely uphill.
                            </p>

                            <p className="lg:h-72 text-base text-top align-text-top mb-3 text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                If you&apos;re traveling on I-287, please take exit 1 onto White Plains road, and then unto Benedict Avenue, until you see signs leading you into the Hackley Campus. The conference will be hosted in the Upper School. If you&apos;re traveling northwards up the Saw Mill River Parkway, take exit 21W and follow W Main Street towards Tarrytown, then onto Benedict Avenue to the Hackley campus. If you’re traveling Southward on the Saw Mill River Parkway, take exit 22 and follow signs for Tarrytown onto White Plains Road, then Benedict Avenue and once again the Hackley campus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}