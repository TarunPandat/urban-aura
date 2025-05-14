import React from "react";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Urban Aura",
    description: "Learn more about Urban Aura - our story, mission, and values.",
  };

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Urban Aura</title>
        <meta name="description" content="Learn more about Urban Aura - our story, mission, and values." />
      </Head>

      <main className="max-w-5xl mx-auto px-6 py-12 text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">About Urban Aura</h1>

        <section className="space-y-6">
          <p className="text-lg leading-relaxed">
            <strong>Urban Aura</strong> is a modern eCommerce destination built for individuals who believe in style, authenticity, and effortless living.
            We blend urban trends with timeless pieces to help you express your aura — your unique personality, lifestyle, and fashion voice.
          </p>

          <p className="text-lg leading-relaxed">
            Founded with the vision to redefine everyday shopping, Urban Aura offers a curated range of apparel, accessories, tech gadgets,
            and lifestyle products that elevate your day-to-day experiences — all at prices that don’t compromise quality or ethics.
          </p>

          <p className="text-lg leading-relaxed">
            We are committed to:
          </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Providing high-quality, trend-forward products</li>
              <li>Ensuring excellent customer experience from browsing to delivery</li>
              <li>Maintaining transparency, inclusivity, and sustainability in everything we do</li>
            </ul>

          <p className="text-lg leading-relaxed">
            Whether you&apos;re looking for the latest fashion, practical everyday essentials, or the perfect gift — Urban Aura is your go-to online destination.
            Thank you for being part of our journey.
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
