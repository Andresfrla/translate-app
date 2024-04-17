"use client"
import LanguageSelector from "@/components/LanguageSelector";
import { AUTO_LANGUAGE } from "@/constants/constants";
import { useStore } from "@/hooks/useStore";
import React, { useState } from "react";

export default function Home() {
  const { fromLanguage, toLanguage, interchangeLanguage, setFromLanguage, setToLanguage } = useStore()

  return (
    <main className="bg-[url('../public/hero_img.jpg')] bg-contain bg-[#040711] bg-no-repeat w-[100%] h-screen flex flex-col items-center">
      <div className="header-container w-full flex justify-center">
        <header className="mt-[100px] md:mb-[0px]"><img src='/logo.svg' alt="logo" className="md:h-14"/></header>
      </div>

      <div className="flex flex-col items-center xl:grid xl:grid-cols-2">
        <div className="mt-[60px] bg-[#212936cc] rounded-3xl border border-[#4D5562] w-[590px] h-[340px] md:w-[880px] md:h-[340px] md:mr-[70px] md:ml-[70px] mr-[60px] ml-[60px] md:text-[20px] xl:w-[560px] xl:h-[340px] xl:ml-[70px] xl:mr-[156px]">
          <div className="flex p-5 md:p-6 ml-4 md:ml-5 pb-3 full-w space-x-7 items-center justify-start text-[0.875rem] md:text-[19px] xl:text-[16px]">
            <button onClick={() => {}} className="text-[#4D5562] font-bold">Detect Language</button>
            <button 
              className={`rounded-xl p-2 pr-[0.75rem] pl-[0.75rem] ${'en' === 'en' ? 'bg-[#4D5562] text-white' : 'text-[#4D5562] font-bold'}`} 
              onClick={() => setInputLanguage('en')}
            >
              English
            </button>
            <button 
              className={`rounded-xl p-2 pr-[0.75rem] pl-[0.75rem] ${'fr' === 'fr' ? 'bg-[#4D5562] text-white' : 'text-[#4D5562] font-bold'}`} 
              onClick={() => setInputLanguage('fr')}
            >
              French
            </button>
            <button 
              className={`rounded-xl p-2 pr-[0.75rem] pl-[0.75rem] ${'es' === 'es' ? 'bg-[#4D5562] text-white' : 'text-[#4D5562] font-bold'}`} 
              onClick={() => setInputLanguage('es')}
            >
              <LanguageSelector onChange={setFromLanguage}/>
            </button>
          </div>
            
          <div>
            <hr className="border-t border-[#394150] md:ml-7 md:mr-7 ml-5 mr-5"/>
            <textarea 
              className="bg-transparent w-full h-[160px] md:h-[130px] pt-6 pl-6 pr-6 resize-none" 
              type="input" 
              placeholder="Hello how are you?"
              value={() => {}}
              onChange={(e) => setInputText(e.target.value)}
            />
            <p className="text-right mr-5 text-[#4D5562] text-[0.75rem]">{() => {}}/500</p>
          </div>
            
          <div className="flex justify-between m-5 mt-3 mb-5 md:ml-7 md:mr-7">
            <div className="space-x-2">
              <button className="border-[2.3px] border-[#4D5562] rounded-xl p-[6px]"><img src='/sound_max_fill.svg' className="md:size-7 md:m-[2px]"/></button>
              <button className="border-[2.3px] border-[#4D5562] rounded-xl p-[6px]"><img src='/Copy.svg' className="md:size-7 md:m-[2px]"/></button>
            </div>

            <button onClick={() => {}} className="bg-[#3662E3] rounded-xl flex p-[11.7px] pl-7 pr-7 border border-[#CDD5E0]/60"><img src='/Sort_alfa.svg' className="pr-1.5"/>Translate</button>
          </div>
        </div>

        <div className="mt-5 bg-[#212936cc] rounded-3xl border border-[#4D5562] w-[590px] h-[340px] md:w-[880px] md:mr-[70px] md:ml-[70px] mr-[60px] ml-[60px] md:text-[20px] xl:w-[560px] xl:h-[340px] xl:mr-[70px] xl:ml-[0px] xl:mt-[60px] xl:text-[16px]">
          <div className="flex justify-between">
            <div className="flex p-5 ml-4 pb-3 full-w space-x-7 items-center justify-start text-[0.875rem] md:text-[19px] md:ml-7 md:mr-7 md:p-6 md:pt-8 xl:text-[16px]">
              <button 
                className={`rounded-xl p-2 pr-[0.75rem] pl-[0.75rem] ${'en' === 'en' ? 'bg-[#4D5562] text-white' : 'text-[#4D5562] font-bold'}`} 
                onClick={() => setOutputLanguage('en')}
              >
                English
              </button>
              <button 
                className={`rounded-xl p-2 pr-[0.75rem] pl-[0.75rem] ${'fr' === 'fr' ? 'bg-[#4D5562] text-white' : 'text-[#4D5562] font-bold'}`} 
                onClick={() => setOutputLanguage('fr')}
              >
                French
              </button>
              <button 
                className={`rounded-xl p-2 pr-[0.75rem] pl-[0.75rem] ${'es' === 'es' ? 'bg-[#4D5562] text-white' : 'text-[#4D5562] font-bold'}`} 
                onClick={() => setOutputLanguage('es')}
              >
                <LanguageSelector onChange={setToLanguage}/>
              </button>
            </div>
            <button 
              onClick={() => {
                interchangeLanguage
              }}
              disable={fromLanguage === AUTO_LANGUAGE}
              className="border-[2.5px] border-[#4D5562] rounded-xl pr-[4.8px] pl-[4.8px] m-4 md:m-7"><img src='/Horizontal_top_left_main.svg' className="md:size-6 md:m-[2px]"/></button>
          </div>
          <div>
            <hr className="border-t border-[#394150] ml-5 mr-5 md:ml-7 md:mr-7"/>
            <p className="ml-5 mr-5 mt-7 m-36 font-semibold md:ml-7 md:mr-7 md:mb-[110px] xl:pb-[10px]">{/*translated text*/}</p>
          </div>
            
          <div className="flex justify-between m-5 mt-3 mb-5">
            <div className="space-x-2 md:ml-2 md:mr-2">
              <button className="border-[2.5px] border-[#4D5562] rounded-xl p-[6px]"><img src='/sound_max_fill.svg' className="md:size-7 md:m-[2px]"/></button>
              <button className="border-[2.5px] border-[#4D5562] rounded-xl p-[6px]"><img src='/Copy.svg' className="md:size-7 md:m-[2px]"/></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
