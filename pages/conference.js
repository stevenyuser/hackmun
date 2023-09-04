import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout.js"

export default function Conference() {
    return (
        <Layout>
            <Head>
                <title>{"Conference - " + siteTitle}</title>
            </Head>

            <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex items-center w-full">
                    <div className="mb-8 w-full">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-sky-500 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                            HackMUN IV Conference Details
                        </h1>

                        <br />

                        <h2 className="text-2xl font-semibold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                            General
                        </h2>

                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                            The fourth annual Hackley Model United Nations Conference will be hosted in-person on Saturday, March 4th, 2023 from 9 AM to 5 PM. It is a single-day regional high school Model UN conference targeted towards inspiring both intellectual debate and enjoyment. The conference is organized by the Hackley School Model United Nations Club. We aim to explore contemporary movements, historical moments, and to promote a healthy means of dialogue and conversation for our generation through our various committees. We welcome new and returning participants this year back onto the Hackley hilltop this coming spring!
                        </p>

                        <br />

                        <h2 className="text-2xl font-semibold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                            Schedule
                        </h2>
                        {/* mobile */}
                        <div className='w-full pt-5 md:hidden'>
                            <div className="">
                                <p className="text-xl leading-normal font-semibold text-gray-600">
                                    Opening Ceremony
                                </p>
                                <p className="pt-1 pl-5 text-l leading-normal text-gray-500">
                                    9:00-9:30
                                </p>
                            </div>

                            <div className="pt-2">
                                <p className="text-xl leading-normal font-semibold text-gray-600">
                                    Morning Committee Session
                                </p>
                                <p className="pt-1 pl-5 text-l leading-normal text-gray-500">
                                    9:30-12:00
                                </p>
                            </div>

                            <div className="pt-2">
                                <p className="text-xl leading-normal font-semibold text-gray-600">
                                    Lunch Break
                                </p>
                                <p className="pt-1 pl-5 text-l leading-normal text-gray-500">
                                    12:00-1:00
                                </p>
                            </div>

                            <div className="pt-2">
                                <p className="text-xl leading-normal font-semibold text-gray-600">
                                    Afternoon Committee Session 1
                                </p>
                                <p className="pt-1 pl-5 text-l leading-normal text-gray-500">
                                    1:00-2:45
                                </p>
                            </div>

                            <div className="pt-2">
                                <p className="text-xl leading-normal font-semibold text-gray-600">
                                    Break
                                </p>
                                <p className="pt-1 pl-5 text-l leading-normal text-gray-500">
                                    2:45-3:00
                                </p>
                            </div>

                            <div className="pt-2">
                                <p className="text-xl leading-normal font-semibold text-gray-600">
                                    Afternoon Committee Session 2
                                </p>
                                <p className="pt-1 pl-5 text-l leading-normal text-gray-500">
                                    3:00-4:30
                                </p>
                            </div>

                            <div className="pt-2">
                                <p className="text-xl leading-normal font-semibold text-gray-600">
                                    Closing Ceremonies
                                </p>
                                <p className="pt-1 pl-5 text-l leading-normal text-gray-500">
                                    4:30-5:00
                                </p>
                            </div>
                        </div>

                        {/* desktop */}
                        <div className='w-full pt-5 hidden md:block'>
                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Opening Ceremony
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    9:00-9:30
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Morning Committee Session
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    9:30-12:00
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Lunch Break
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    12:00-1:00
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Afternoon Committee Session 1
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    1:00-2:45
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Break
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    2:45-3:00
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Afternoon Committee Session 2
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    3:00-4:30
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Closing Ceremonies
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    4:30-5:00
                                </p>
                            </div>
                        </div>

                        <h2 className="pt-5 text-2xl font-semibold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                            Deadlines
                        </h2>
                        {/* mobile */}
                        <div className='w-full pt-5 md:hidden'>
                            <div className="">
                                <p className="text-xl leading-normal font-semibold text-gray-600">
                                    Registration Opens
                                </p>
                                <p className="pt-1 pl-5 text-l leading-normal text-gray-500">
                                    Tuesday, January 10th
                                </p>
                            </div>

                            <div className="pt-2">
                                <p className="text-xl leading-normal font-semibold text-gray-600">
                                    Background Guides Released
                                </p>
                                <p className="pt-1 pl-5 text-l leading-normal text-gray-500">
                                    Tuesday, January 10th
                                </p>
                            </div>

                            <div className="pt-2">
                                <p className="text-xl leading-normal font-semibold text-gray-600">
                                    Registration Closes
                                </p>
                                <p className="pt-1 pl-5 text-l leading-normal text-gray-500">
                                    Wednesday, March 1st
                                </p>
                            </div>

                            <div className="pt-2">
                                <p className="text-xl leading-normal font-semibold text-gray-600">
                                    Committee Assignments Released
                                </p>
                                <p className="pt-1 pl-5 text-l leading-normal text-gray-500">
                                    Wednesday, March 1st
                                </p>
                            </div>

                            <div className="pt-2">
                                <p className="text-xl leading-normal font-semibold text-gray-600">
                                    Position Papers Due
                                </p>
                                <p className="pt-1 pl-5 text-l leading-normal text-gray-500">
                                    Saturday Morning, March 4th
                                </p>
                            </div>

                            <div className="pt-2">
                                <p className="text-xl leading-normal font-semibold text-gray-600">
                                    HackMUN IV Conference
                                </p>
                                <p className="pt-1 pl-5 text-l leading-normal text-gray-500">
                                    Saturday, March 4th
                                </p>
                            </div>
                        </div>

                        {/* desktop */}
                        <div className='w-full pt-5 hidden md:block'>
                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Registration Opens
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Tuesday, January 10th
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Background Guides Released
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Tuesday, January 10th
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Registration Closes
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Wednesday, March 1st
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Committee Assignments Released
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Wednesday, March 1st
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Position Papers Due
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Saturday Morning, March 4th
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    HackMUN IV Conference
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Saturday, March 4th
                                </p>
                            </div>

                        </div>

                        <h2 className="pt-5 text-2xl font-semibold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                            Fees
                        </h2>

                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                            Given the in-person nature of HackMUN IV, we will be charging $15 per delegate as a registration fee. To pay for the conference, please make out to &quot;Hackley School&quot; with &quot;Hackley Model United Nations IV&quot; in the memo line. Schools can either collect all of the money in one check, or delegates can pay individually. Delegates can give their check to the conference organizers at registration on March 4th.
                        </p>

                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                            If you or a delegate from your school experience financial difficulties but would still like to participate, to keep HackMUN accessible, you may request a fee waiver by simply emailing us by including your name and school information to the HackMUN secretariat at vmalik@students.hackleyschool.org and melee@students.hackleyschool.org.
                        </p>

                        <h2 className="pt-5 text-2xl font-semibold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                            Dress Code
                        </h2>

                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                            All delegates should wear western business attire.
                        </p>

                        <h2 className="pt-5 text-2xl font-semibold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                            Transportation
                        </h2>

                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                            HackMUN does not provide transportations nor cover costs for transportation. If you face financial difficulties traveling to Hackley, please email the secretariat at vmalik@students.hackleyschool.org and melee@students.hackleyschool.org and we will try to help you work out a solution.
                        </p>


                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                            If you need directions to the campus of Hackley School, please visit the directions tab.
                        </p>
                    </div>
                </div>
            </div>

        </Layout>
    )
}