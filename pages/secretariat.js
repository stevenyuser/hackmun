import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout.js"
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Secretariat() {
    return (
        <Layout>
            <Head>
                <title>{"Secretariat - " + siteTitle}</title>
            </Head>
            <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="items-center w-full">
                    <div className="mb-8 w-full">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-sky-500 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                            HackMUN V Secretariat
                        </h1>
                    </div>

                    <Tab.Group>
                        <Tab.List className='flex p-1 space-x-1 bg-sky-500/20 rounded-xl'>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full sm:p-3 lg:p-3 sm:text-xl lg:text-2xl leading-5 font-semibold rounded-lg',
                                        selected
                                            ? 'bg-sky-500 text-white shadow'
                                            : 'text-sky-500 hover:bg-white/[0.12]')
                                }
                            >
                                The Secretariat
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full sm:p-3 lg:p-3 sm:text-xl lg:text-2xl leading-5 font-semibold rounded-lg',
                                        selected
                                            ? 'bg-sky-500 text-white shadow'
                                            : 'text-sky-500 hover:bg-white/[0.12]')
                                }
                            >
                                Note from the Secretariat
                            </Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                {/* Meet the Secretariat*/}
                                <br />
                                <div className="container px-2 mx-auto">
                                    <h1 className="text-2xl text-center font-semibold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                                        Meet the Secretariat
                                    </h1>

                                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">


                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/stevenyu.jpeg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Steven Yu</h1>

                                                    <p className="mt-2 text-gray-500 ">Co-Secretaries General</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500">Hello delegates, I&apos;m Steven Yu, a senior at Hackley. I&apos;m very interested in history and politics, especially international politics, which fueled my dedication to Model UN. In addition to my love of Model UN, I also love computer science (hardware and software) and watching NBA basketball. I&apos;m excited to see all of the delegates at HackMUN!</p>
                                        </div>

                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/tibetyakut.jpeg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Tibet Yakut</h1>

                                                    <p className="mt-2 text-gray-500 capitalize">Co-Secretaries General</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500">Hi everyone, I&apos;m Tibet Yakut. I&apos;m a Senior at Hackley, and a Co-Secretaries General in our MUN team. I&apos;ve been participating in Model UN conferences since 6th grade. Aside from Model UN, I lead the Chess Club and Students for Refugees Club at Hackley. I&apos;m passionate about computer science, philosophy, and politics. I&apos;m honored to be hosting another HackMUN, and excited to see everyone!</p>
                                        </div>

                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/advithsharma.jpeg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Advith Sharma</h1>

                                                    <p className="mt-2 text-gray-500 capitalize">Co-Secretaries General</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500">Hello all, I&apos;m Advith Sharma, a senior, and have been a Model UN enthusiast since 9th grade. I enjoy the learning and spirit of collaborative problem solving involved in all MUN conferences, whether in-person or virtual! My passion for travel, geography and global affairs have motivated me to start multiple Geo Clubs where younger students can explore these cool topics. I&apos;m interested in the topics of finance, international business and environmental sustainability. I look forward to once again chairing a committee at HackMUN and wish all participating delegates a fun experience! </p>

                                        </div>

                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/danielcai_cool.jpeg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Daniel Cai</h1>

                                                    <p className="mt-2 text-gray-500 capitalize">Eternal General Secretary of the Dissolved Hackley Model Union of Soviet Socialist Republics</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500">Daniel Cai was eternal leader of the Hackley Model USSR before its collapse after the fall of the Hackley Model Berlin Wall. Mr. Cai was known for his persecution of the Co-Secretaries Generals, which was the leading factor in the coup against him. After the coup attempt, Mr. Cai sought refuge in Hanover, New Hampshire. Currently, Mr. Cai is an amateur basketball player that is unable to dunk. Mr. Cai was born in Batman, Turkey, where he was born as Bruce Wayne, before legally changing his name before assuming office as Eternal General Secretary of the now-defunct Hackley Model USSR.</p>

                                        </div>

                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                {/* Note from the Secretariat*/}
                                <br />
                                <div className="mb-8 w-full">
                                    <h2 className="text-2xl font-semibold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                                        Note from the Secretaries General:
                                    </h2>

                                    <div className='py-5 text-l leading-normal text-gray-800 lg:text-l xl:text-l'>
                                        <p>Greetings Delegates!</p>
                                        <br />
                                        <p>This year&apos;s secretariat for Hackley School&apos;s 5th annual Model UN conference looks to extend its mission and values to both new and returning delegates, moderating debate that is fun, challenging, and transformative to each delegate&apos;s perspective of different facets of our world. In the year 2024, the need for young students to push themselves to think critically about global issues and together find solutions through disagreements, compromises, and discourses are more necessary than ever. </p>
                                        <br />
                                        <p>For many of us, the last few years seem to have been a perpetual crisis. To name a few: a global pandemic, a polarizing election culminating on January 6th at the US Capitol, the war in Israel and Ukraine, drought and environmental refugee crises, and the rise of great power competition between the US, Russia, and China. This is an important reminder that our next generation of young delegates attending HackMUN are the ones that will face such challenges in the future and should be prepared to tackle them through unity and collaboration. </p>
                                        <br />
                                        <p>The United Nations was formed in the aftermath of the second World War. Through this period of time, the UN has presided over what we dub as the Long Peace, where major world powers have not fought each other since 1945. In this peace, our world has changed immeasurably for the better. Technology has driven the human race to new frontiers far in the lands, deep in the oceans, high in the skies, and out there in our galaxy. Global movements for peace and justice have created a world order that, for the first time in history, gives everyday citizens a voice in government. And though we still have a long way to go, in the grand scheme of human civilization our progress has been unprecedented. But today we are once again at a crossroads. War has once again descended onto the European continent, democracies, and autocracies are once again at an impasse, and a new cold war is brewing. This year&apos;s HackMUN conference confers on this turning point in our common history where our Long Peace is ending. For you, each of our delegates, this will be a year to remember - one that will surely transform the world&apos;s geopolitical landscape for decades to come.</p>
                                        <br />
                                        <p>Thus, this year at HackMUN V, we wish for delegates of all backgrounds, whether first-timers or more polished debaters, to engage with the challenging issues at hand, while having fun and enjoying the experience of an in-person conference. Most importantly, grow and prosper in your perspectives. It is through this that we collectively stand a chance to right our world&apos;s wrongs.</p>
                                        <br />
                                        <p>Whether in resolving historical crises, addressing pressing current events in a general assembly, or securing the health and economy of the United States in a governmental body, there is something for everyone at HackMUN this year. We encourage you to strike an effective balance during committee between being a leader and a listener, a voice of optimism as well as a voice of practicalism, challenging yourself to be both a team player and the best individual delegate you can be. </p>
                                        <br />
                                        <p>Don&apos;t hesitate to reach out to any of the staff this year at HackMUN. We implore you to make the best of the resources you are given and help us make this conference the best it has ever been!</p>
                                        <br />
                                        <p className='italic'>ad meliora</p>
                                        <br />
                                        <p>Vivek Malik and Meredith Lee,</p>
                                        <br />
                                        <p>Secretaries-General of HackMUN V</p>
                                    </div>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </Layout>
    )
}