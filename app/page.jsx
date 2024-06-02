import Image from "next/image";
import Link from "next/link";

import GetButton from "@/app/ui/GetButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100">

        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-[50px] h-[50px] relative left-4 bottom-2">
                        <Image
                            src="/small-plant.png"
                            alt="3d image of a watering can"
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <span className="font-medium self-center text-xl whitespace-nowrap text-base-content">Garden Guru</span>
                </a>
                <div>
                    <ul className="font-medium flex flex-row p-0 space-x-8 rtl:space-x-reverse mt-0 items-center text-base-content text-xl">
                        <li>
                            <a href="#"
                               className="py-2 px-3">Pricing</a>
                        </li>
                        <li>
                            <a href="#"
                               className="py-2 px-3 rounded">Contact</a>
                        </li>
                        <li>
                            <Link href="/login"
                               className="py-2 px-3 rounded">Log In</Link>
                        </li>
                        <li>
                            <Link className="btn btn-neutral font-medium text-base" href="/login">Get Started</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="hero min-h-screen ">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-8xl font-extrabold text-base-content -tracking-1 pb-10">Plan  your <span className="rotated-bg text-base-100">garden</span></h1>
                    <p className="text-base-content-secondary pb-6 text-2xl">The tool your small garden needs to become botanical ! <br/>
                        Keep track of your vegetables and fruit to make them better than Walmart&aposs !</p>
                    <div className="flex justify-center text-left text-2xl">
                        <ul className="text-base-content-secondary pb-10">
                            <li>🪴 clear dashboard</li>
                            <li>🪴 massive fruit, vegetables and plant database</li>
                            <li>🪴 funny tips & tricks</li>
                        </ul>
                    </div>
                    <GetButton />
                </div>
            </div>
        </div>

        <div className="bg-primary h-[520px] flex items-center justify-center flex-col text-center">
            <h3 className="font-extrabold text-primary-content text-5xl m-6">If they can grow it, so can you !</h3>
            <p>
                Your girlfriend&aposs dad is bragging non-stop <br/>
                about growing his own tomatoes in his small appartement ? <br/>
                Do it better than him !
            </p>

            <div className="flex flex-row items-center justify-between mt-10">

                <div className="w-[190px] h-[190px] relative left-3 hover:scale-125 transition-transform duration-500 ease-in-out">
                    <Image
                        src="/small-plant.png"
                        alt="3d image of a small plant"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>

                <svg width="305" height="76" viewBox="0 0 305 76" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative bottom-2">
                    <path d="M304.293 33.9562C304.821 33.7946 305.118 33.2355 304.956 32.7073L302.323 24.1013C302.161 23.5732 301.602 23.2761 301.074 23.4377C300.546 23.5993 300.249 24.1585 300.41 24.6866L302.751 32.3364L295.101 34.6774C294.573 34.839 294.276 35.3982 294.438 35.9263C294.599 36.4544 295.158 36.7515 295.687 36.5899L304.293 33.9562ZM1.42347 75.4061C17.4766 67.9019 32.3467 60.6131 46.3117 53.7323C60.2797 46.8499 73.3363 40.3786 85.7771 34.5018C110.662 22.7468 133.027 13.3973 155.164 7.9363C199.351 -2.9644 242.762 1.59295 303.531 33.883L304.469 32.1169C243.357 -0.35598 199.441 -5.04661 154.685 5.99451C132.35 11.5044 109.839 20.9233 84.9229 32.6934C72.4632 38.5791 59.388 45.0597 45.4277 51.9382C31.4644 58.8182 16.6098 66.0994 0.576526 73.5943L1.42347 75.4061Z" fill="white"/>
                </svg>

                <div className="w-[200px] h-[200px] relative hover:scale-125 transition-transform duration-500 ease-in-out">
                    <Image
                        src="/watering-can.png"
                        alt="3d image of a watering can"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>

                <svg width="265" height="74" viewBox="0 0 265 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative top-14 right-8">
                    <path d="M264.948 4.3183C265.124 3.79474 264.842 3.22781 264.318 3.05201L255.786 0.187279C255.263 0.0114851 254.696 0.293405 254.52 0.816965C254.344 1.34052 254.626 1.90746 255.15 2.08326L262.734 4.62969L260.187 12.2136C260.011 12.7372 260.293 13.3041 260.817 13.4799C261.341 13.6557 261.907 13.3738 262.083 12.8502L264.948 4.3183ZM0.157025 33.538C10.0268 49.004 21.4087 60.0379 35.5117 66.5681C49.6115 73.0968 66.3309 75.0775 86.7965 72.6149C127.67 67.6967 183.768 45.0135 264.445 4.8954L263.555 3.1046C182.849 43.2369 127.042 65.7579 86.5576 70.6292C66.3446 73.0614 50.0226 71.0831 36.352 64.7532C22.6847 58.4247 11.5673 47.7002 1.84298 32.462L0.157025 33.538Z" fill="white"/>
                </svg>

                <div className="w-[200px] h-[200px] relative right-3 top-5 hover:scale-125 transition-transform duration-500 ease-in-out">
                    <Image
                        src="/plate.png"
                        alt="3d image of a watering can"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>

            <div className="flex flex-row justify-center gap-[397px] pt-4 pb-10">
                <p className="text-4xl font-medium">plant</p>
                <p className="text-4xl font-medium">grow</p>
                <p className="text-4xl font-medium">eat</p>
            </div>
        </div>

        <div className="card card-side bg-base-200 shadow-xl h-[400px] w-[1200px] mt-20 mb-10 ml-3 hover:scale-[101%] transition-transform duration-200 ease-in-out">
            <div className="card-body text-base-content">
                <h2 className="text-[40px] font-semibold -tracking-1">Clear and accessible dashboard</h2>
                <ul className="leading-[226%] font-medium text-xl mt-3">
                    <li>🪴 Get a <strong>good view</strong> of your current garden</li>
                    <li>🪴 Track your plants, vegetables or fruit <strong>easily</strong></li>
                    <li>🪴 Gather <strong>important data</strong> about your garden on a glimpse</li>
                    <li>🪴 Discover your next favorite produce with <strong>our suggestions</strong></li>
                    <li>🪴 Easily understandable and usable, <strong>even for kids</strong> !</li>
                </ul>
            </div>

            <div className="w-[468px] h-[329px] bg-secondary rounded-3xl my-auto mr-5">

            </div>
        </div>

        <div className="card card-side bg-base-200 shadow-xl h-[400px] w-[1200px] ml-[310px] mb-24 hover:scale-[101%] transition-transform duration-200 ease-in-out">
            <div className="w-[280px] h-[280px] bg-secondary rounded-3xl my-auto ml-5">

            </div>

            <div className="card-body text-base-content">
                <h2 className="text-[40px] font-semibold -tracking-1">Access a massive database in one click !</h2>
                <ul className="leading-[226%] font-medium text-xl mt-3">
                    <li>🪴 Gather <strong>detailed data</strong> about every plant, vegetable and fruit</li>
                    <li>🪴 Add <strong>any produce</strong> into your virtual garden</li>
                    <li>🪴 Get recommendations from our <strong>seasonal planting guide</strong> on what and when to plant</li>
                    <li>🪴 Acquire precious knowledge about <strong>fertilizer</strong> for your garden</li>
                </ul>
            </div>
        </div>

        <h2 className="text-base-content font-bold text-6xl text-center -tracking-1">And our <span className="text-secondary-content bg-secondary px-2">key feature...</span></h2>

        <div className="card card-side bg-base-100 shadow-xl h-[400px] w-[1200px] mx-auto mt-16 mb-28 border-secondary border-4">

            <div className="card-body text-base-content w-2/3">
                <h2 className="text-[40px] font-semibold text-nowrap -tracking-1">Simplify watering and maintenance schedule !</h2>
                <ul className="leading-[226%] font-medium text-xl mt-3">
                    <li>🪴 Get <strong>customized watering schedules</strong> tailored to each plant in your garden</li>
                    <li>🪴 Never forget to water your plants with our <strong>notification system</strong></li>
                    <li>🪴 <strong>Receive advice</strong> on pruning, weeding, and other garden maintenance tasks</li>
                    <li>🪴 Keep track of all your gardening tasks with an <strong>easy-to-use calendar</strong></li>
                </ul>
            </div>

            <div className="w-[394px] h-[394px] relative my-auto rotate-[20deg]">
                <Image
                    src="/watering-can-on-plant.png"
                    alt="3d image of a watering can watering a plant"
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
        </div>

        <h2 className="text-base-content font-extrabold text-6xl text-center -tracking-1">Harvest the best deals</h2>

        <div className="card card-side bg-primary shadow-xl h-[719px] w-[719px] mx-auto my-20 ">

            <div className="card-body text-base-content items-center">
                <h2 className="text-6xl font-bold text-center text-base-100 -tracking-1">Full Bloom access</h2>
                <h4 className="text-primary-content text-3xl text-center -tracking-[2px] font-medium -mt-2">Access to every feature for life</h4>
                <h1 className="text-8xl font-extrabold text-center text-base-100 my-3">5€</h1>
                <ul className="leading-[226%] font-medium text-3xl mt-3">

                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="w-[40px] h-[40px] opacity-80 shrink-0">
                            <path fill-rule="evenodd"
                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        <span>All the data about your garden</span>
                    </li>

                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="w-[40px] h-[40px] opacity-80 shrink-0">
                            <path fill-rule="evenodd"
                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        <span>Daily recommendations & tips</span>
                    </li>

                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="w-[40px] h-[40px] opacity-80 shrink-0">
                            <path fill-rule="evenodd"
                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        <span>Watering & maintenance schedule</span>
                    </li>

                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="w-[40px] h-[40px] opacity-80 shrink-0">
                            <path fill-rule="evenodd"
                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        <span>Share your garden w/ friends</span>
                    </li>
                </ul>
                <a className="btn btn-neutral btn-wide btn-lg group text-xl rounded-full mt-10">Get GardenGuru
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                         className="w-4 h-4 fill-current group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200">
                        <path fill-rule="evenodd"
                              d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                              clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>

        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    </main>
  );
}
