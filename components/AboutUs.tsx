"use client";

import {
    Building2,
    Target,
    Eye,
    ShieldCheck,
    Users,
    Briefcase,
    Truck,
    Warehouse,
    FileCheck,
    PackageCheck,
} from "lucide-react";

const valueChain = [
    {
        icon: Briefcase,
        title: "Procurement",
        description:
            "Strategic sourcing and acquisition of goods and logistics resources.",
    },
    {
        icon: FileCheck,
        title: "Customs Clearance",
        description:
            "Efficient customs documentation and border clearance procedures.",
    },
    {
        icon: Warehouse,
        title: "Warehousing",
        description:
            "Secure storage and inventory management for client goods.",
    },
    {
        icon: Truck,
        title: "Transportation",
        description:
            "Reliable transportation and cargo movement across South Sudan.",
    },
    {
        icon: PackageCheck,
        title: "Delivery",
        description:
            "Timely and professional final delivery to customer destinations.",
    },
];

const coreValues = [
    "Integrity",
    "Professionalism",
    "Reliability",
    "Customer Satisfaction",
    "Efficiency",
    "Transparency",
];

export default function AboutUs() {
    return (
        <section
            id="about"
            className="py-14 bg-gradient-to-b from-white to-blue-50"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION HEADER */}
                <div className="text-center max-w-3xl mx-auto">
                    {/* WHO WE ARE */}
                    <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">
                        {/* Background Glow */}
                        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

                        <div className="relative max-w-6xl mx-auto px-6">

                            {/* SECTION LABEL */}
                            <div className="flex justify-center">
                                <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-sm">
                                    About Us
                                </span>
                            </div>

                            {/* TITLE */}
                            <h2 className="mt-6 text-center text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                                Who We Are
                            </h2>

                            {/* DECORATIVE LINE */}
                            <div className="mt-6 flex justify-center">
                                <div className="w-28 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-700"></div>
                            </div>

                            {/* CONTENT CARD */}
                            <div className="mt-8 bg-white/80 backdrop-blur-md border border-blue-100 shadow-2xl rounded-3xl p-8 md:p-14">

                                <p className="text-lg md:text-2xl leading-[2.2rem] md:leading-[3rem] text-gray-700 text-center font-light">

                                    <span className="font-semibold text-gray-900">
                                        Established in 2024,
                                    </span>{" "}
                                    Life Cycle General Trading Company Limited has quickly become a trusted
                                    leader in logistics and trading solutions at the Nimule Border Station
                                    and Juba International Airport. Under the leadership of
                                    <span className="font-semibold text-blue-700">
                                        {" "}Mr. Silas Majok Achirin,
                                    </span>{" "}
                                    an industry expert with over seven years of experience in freight
                                    forwarding and customs, the company is dedicated to providing exceptional
                                    services and building lasting client relationships.

                                    <br />
                                    
                                </p>
                            </div>
                        </div>
                    </section>

                </div>

                {/* COMPANY OVERVIEW */}
                <div className="mt-20 grid lg:grid-cols-2 gap-14 items-center">

                    {/* IMAGE */}
                    <div className="relative">
                        <img
                            src="/images/about-company.jpg"
                            alt="About Company"
                            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                        />

                        <div className="absolute inset-0 bg-blue-950/20 rounded-3xl"></div>
                    </div>

                    {/* CONTENT */}
                    <div>

                        <div className="flex items-center gap-4">

                            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 shadow-sm">
                                <Building2 size={30} />
                            </div>

                            <div>

                                <span className="text-blue-600 font-medium uppercase tracking-wide text-sm">
                                    Company Overview
                                </span>

                                <h3 className="text-3xl font-bold text-gray-900">
                                    The Organization
                                </h3>

                            </div>

                        </div>

                        <div className="mt-8 space-y-5">

                            <p className="text-gray-600 leading-relaxed text-lg">
                                Life Cycle General Trading Company Limited operates as a dynamic
                                logistics and trading organization focused on providing dependable
                                customs clearance, freight forwarding, transportation,
                                warehousing, brokerage, and supply chain support services.
                            </p>

                            <p className="text-gray-600 leading-relaxed text-lg">
                                Our experienced team combines industry knowledge, operational
                                efficiency, and customer-focused service to ensure smooth and
                                reliable movement of goods across borders and within South Sudan.
                            </p>

                            <p className="text-gray-600 leading-relaxed text-lg">
                                We continuously invest in professional service delivery,
                                compliance, and strategic logistics partnerships to support
                                businesses, organizations, and institutions with tailored supply
                                chain solutions.
                            </p>

                        </div>

                    </div>

                </div>

                {/* MISSION & VISION */}
                <div className="mt-24 grid md:grid-cols-2 gap-8">

                    {/* MISSION */}
                    <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl border border-blue-100 transition duration-300">

                        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700">
                            <Target size={30} />
                        </div>

                        <h3 className="mt-6 text-2xl font-bold text-gray-900">
                            Our Mission
                        </h3>

                        <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                            To deliver exceptional services in customs clearance, transportation, warehousing,
                            brokerage, and general supply by prioritizing efficiency, integrity, and customer
                            satisfaction. We are committed to simplifying trade processes and supporting
                            businesses with tailored solutions that drive success and growth
                        </p>

                    </div>

                    {/* VISION */}
                    <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl border border-blue-100 transition duration-300">

                        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700">
                            <Eye size={30} />
                        </div>

                        <h3 className="mt-6 text-2xl font-bold text-gray-900">
                            Our Vision
                        </h3>

                        <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                            To become the leading provider of innovative and reliable logistics, customs
                            clearance, and trading solutions in South Sudan and beyond, fostering sustainable
                            growth and long-term partnerships with our clients
                        </p>

                    </div>

                </div>

                {/* CORE VALUES */}
                <div className="mt-24">

                    <div className="text-center max-w-2xl mx-auto">

                        <h3 className="text-3xl font-bold text-gray-900">
                            Our Philosophy & Core Values
                        </h3>

                        <p className="mt-4 text-gray-600 text-lg">
                            We believe in building long-term partnerships through trust,
                            professionalism, and service excellence.
                        </p>

                    </div>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

                        {coreValues.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-blue-100 hover:shadow-lg hover:-translate-y-1 transition duration-300"
                            >

                                <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                                    <ShieldCheck size={26} />
                                </div>

                                <h4 className="mt-4 font-semibold text-gray-900">
                                    {value}
                                </h4>

                            </div>
                        ))}

                    </div>

                </div>

                {/* MARKET APPROACH */}
                <div className="mt-24 bg-gradient-to-r from-blue-950 to-slate-900 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">

                    <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_white,_transparent_40%)]"></div>
                    </div>

                    <div className="relative z-10">

                        <div className="flex items-center gap-4">

                            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                                <Users size={28} />
                            </div>

                            <div>

                                <span className="text-blue-200 uppercase tracking-wide text-sm font-medium">
                                    Strategic Focus
                                </span>

                                <h3 className="text-3xl font-bold">
                                    Our Market Approach
                                </h3>

                            </div>

                        </div>

                        <p className="mt-6 text-blue-100 leading-relaxed text-lg max-w-4xl">
                            Our market approach is centered on customer satisfaction,
                            operational efficiency, and strategic partnerships. We focus on
                            delivering tailored logistics and supply chain solutions that meet
                            the evolving needs of businesses, organizations, and institutions
                            operating within South Sudan and cross-border trade environments.
                        </p>

                    </div>

                </div>

                {/* VALUE CHAIN ANALYSIS */}
                <div className="mt-24">

                    <div className="text-center max-w-2xl mx-auto">

                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Value Chain Analysis
                        </h3>

                        <p className="mt-4 text-gray-600 text-lg">
                            Our integrated logistics process ensures efficient movement of
                            goods from sourcing to final delivery.
                        </p>

                    </div>

                    <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-6">

                        {valueChain.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center"
                                >

                                    <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700">
                                        <Icon size={28} />
                                    </div>

                                    <h4 className="mt-5 text-lg font-bold text-gray-900">
                                        {item.title}
                                    </h4>

                                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>
        </section>
    );
}