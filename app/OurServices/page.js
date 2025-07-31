"use client";
import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
  return (
    <section className="bg-white py-16 px-0 md:px-0 text-center ">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
        How We Make It Easy For You
      </h2>
      <p className="text-2xl font-semibold text-blue-800 border-b-4 inline-block border-yellow-500 mb-6">
        Our Services
      </p>

      {/* Full-width image */}
      <div className="w-full my-6">
        <Image
          src="/servies.png" // Replace with your actual image path in public/
          alt="Our Services Full Banner"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="mt-16">
        <Link href="/booking">
          <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base">
            BOOK MY FREE ONLINE COUNSELLING
          </button>
        </Link>
      </div>
    </section>
  );
}
