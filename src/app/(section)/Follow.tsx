'use client'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import { useEffect } from "react";

const Follow = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const splitType = document.querySelectorAll(".contact-head")
        splitType.forEach((char, i) => {
            if (char instanceof HTMLElement) {
                const text = new SplitType(char, { types: "chars" })
                gsap.from(text.chars, {
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        markers: false
                    },
                    opacity: 0.2,
                    stagger: 0.2
                })
            }
        })

        gsap.to(".contact-container", {
            scrollTrigger: {
                trigger: ".contact-container",
                toggleActions: 'restart none none none',
            },
            y: -30,
            duration: 1.5
        })



        // const lenis = new Lenis();

        // lenis.on("scroll", (e) => {
        //   console.log(e, "===e");
        // })

        // const raf = (time: number) => {
        //   lenis.raf(time)
        //   requestAnimationFrame(raf)
        // }
        // requestAnimationFrame(raf)

        // return () => {
        //   lenis.destroy(); // Cleanup Lenis instance to avoid memory leaks
        // };
    }, [])
    return (
        <section
            style={{
                backgroundImage: "url('/images/home/pattern.png')",
                backgroundSize: "contain",
                backgroundPosition: "center",
            }}
            className='w-full flex justify-center items-center px-3 min-h-[90vh] md:px-0 py-12 md:py-24'
        >
            <div className='w-full max-w-[1300px] h-full flex flex-col items-center gap-8 md:gap-14'>
                <div className='w-full flex flex-col'>
                    <p className='w-full text-center font-caramel text-xl text-primary text-[#FBEAD2] font-[400] uppercase tracking-[1.76px]'>Connect with us</p>
                    <p className='contact-head w-full text-center text-[#FFF4E3] font-inter font-[600] text-5xl md:text-6xl'>Contact Us</p>
                </div>
                <div className='contact-container w-full flex flex-col md:flex-row gap-5 mt-[30px]'>
                    <div className='w-full md:w-1/3 flex flex-col items-center justify-center gap-3 border-[1px] bg-[#0b0c0c] border-[#202121] rounded-lg py-12'>
                        <p className='text-[#FBEAD2] font-inter font-[600] w-full text-center uppercase '>Booking request</p>
                        <Link href="tel:+442477350145" className='w-full text-primary font-inter font-[400] text-center text-4xl'>+442477350145</Link>
                    </div>
                    <div className='w-full md:w-1/3 flex flex-col items-center justify-center gap-3 border-[1px] bg-[#0b0c0c] border-[#202121] rounded-lg py-12'>
                        <p className='text-[#FBEAD2] font-inter font-[600] w-full text-center uppercase '>Location</p>
                        <Link href="https://maps.app.goo.gl/Mtxz3ZAGU44Za8K2A" target='_blank' className='w-full text-[#848484] font-inter font-[400] text-center'>9 Earlsdon St, Earlsdon,<br />
                            Coventry CV5 6EP, UK</Link>
                    </div>
                    <div className='w-full md:w-1/3 flex flex-col items-center justify-center gap-3 border-[1px] bg-[#0b0c0c] border-[#202121] rounded-lg py-12'>
                        <p className='text-[#FBEAD2] font-inter font-[600] w-full text-center uppercase '>Opening Hours</p>
                        <p className='w-full text-[#848484] font-inter font-[400] text-center'>Monday to Saturday <br />11:00am - 11:00pm<br />Sunday 11:00am - 10:00pm</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Follow