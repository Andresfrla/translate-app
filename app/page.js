"use client"
import React, { useState } from "react";
import { Toaster, toast } from 'sonner'

export default function Home() {
  const [inputText, setInputText] = useState('Hello how are you?');
  const [translatedText, setTranslatedText] = useState('Bonjour, comment allez-vous?');
  const [inputLanguage, setInputLanguage] = useState('en');
  const [outputLanguage, setOutputLanguage] = useState('fr');

  const copyInputText = () => {
    navigator.clipboard.writeText(inputText);
    toast.success('Text copied');
  };

  const copyOutputText = () => {
    navigator.clipboard.writeText(translatedText);
    toast.success('Text copied');
  }

  const detectLanguage = async (text) => {
    try {
      const response = await fetch(`https://translation.googleapis.com/language/translate/v2/detect?key=${process.env.API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
        }),
      });
      console.log(response)
      const data = await response.json();
      if (data && data.data && data.data.detections && data.data.detections.length > 0) {
        return data.data.detections[0][0].language;
      } else {
        console.error('Error detecting language:', data);
        return null;
      }
    } catch (error) {
      console.error('Error detecting language:', error);
      return null;
    }
  };

  const handleDetectLanguage = async () => {
    const detectedLanguage = await detectLanguage(inputText);
    if (detectedLanguage) {
      setInputLanguage(detectedLanguage);
    }
  };

  const translateText = async () => {
    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${inputLanguage}|${outputLanguage}`);
      const data = await response.json();
      if (data.responseData && data.responseData.translatedText) {
        setTranslatedText(data.responseData.translatedText);
      } else {
        console.error('Error translating text:', data);
      }
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <main className="bg-[url('../public/hero_img.jpg')] bg-contain bg-[#040711] bg-no-repeat w-[100%] h-screen flex flex-col items-center">
      <Toaster richColors  />
      <header className="mt-[100px] md:mb-[0px]"><img src='/logo.svg' alt="logo" className="md:h-14"/></header>
      <div className="flex flex-col items-center xl:grid xl:grid-cols-2">
        <div className="mt-[60px] bg-[#212936cc] rounded-3xl border border-[#4D5562] w-[590px] h-[340px] md:w-[880px] md:h-[340px] md:mr-[70px] md:ml-[70px] mr-[60px] ml-[60px] md:text-[20px] xl:w-[560px] xl:h-[340px] xl:ml-[70px] xl:mr-[156px]">
          <div className="flex p-5 md:p-6 ml-4 md:ml-5 pb-3 full-w space-x-7 items-center text-[0.875rem] md:text-[19px] xl:text-[16px]">
            <button onClick={handleDetectLanguage} className="text-[#4D5562] font-bold">Detect Language</button>
            <button 
              className={`rounded-xl p-2 pr-[0.75rem] pl-[0.75rem] ${inputLanguage === 'en' ? 'bg-[#4D5562] text-white' : 'text-[#4D5562] font-bold'}`} 
              onClick={() => setInputLanguage('en')}
            >
              English
            </button>
            <button 
              className={`rounded-xl p-2 pr-[0.75rem] pl-[0.75rem] ${inputLanguage === 'fr' ? 'bg-[#4D5562] text-white' : 'text-[#4D5562] font-bold'}`} 
              onClick={() => setInputLanguage('fr')}
            >
              French
            </button>
            <button 
              className={`rounded-xl p-2 pr-[0.75rem] pl-[0.75rem] ${inputLanguage === 'es' ? 'bg-[#4D5562] text-white' : 'text-[#4D5562] font-bold'}`} 
              onClick={() => setInputLanguage('es')}
            >
              Spanish
            </button>
          </div>
            
          <div>
            <hr className="border-t border-[#394150] md:ml-7 md:mr-7 ml-5 mr-5"/>
            <textarea 
              className="bg-transparent w-full h-[160px] md:h-[130px] pt-6 pl-6 pr-6 resize-none" 
              type="input" 
              placeholder="Hello how are you?"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <p className="text-right mr-5 text-[#4D5562] text-[0.75rem]">{inputText.length}/500</p>
          </div>
            
          <div className="flex justify-between m-5 mt-3 mb-5 md:ml-7 md:mr-7">
            <div className="space-x-2">
              <button className="border-[2.3px] border-[#4D5562] rounded-xl p-[6px]"><img src='/sound_max_fill.svg' className="md:size-7 md:m-[2px]"/></button>
              <button className="border-[2.3px] border-[#4D5562] rounded-xl p-[6px]" onClick={copyInputText}><img src='/Copy.svg' className="md:size-7 md:m-[2px]"/></button>
              
            </div>

            

            <button onClick={translateText} className="bg-[#3662E3] rounded-xl flex p-[11.7px] pl-7 pr-7 border border-[#CDD5E0]/60"><img src='/Sort_alfa.svg' className="pr-1.5"/>Translate</button>
          </div>
        </div>

        <div className="mt-5 bg-[#212936cc] rounded-3xl border border-[#4D5562] w-[590px] h-[340px] md:w-[880px] md:mr-[70px] md:ml-[70px] mr-[60px] ml-[60px] md:text-[20px] xl:w-[560px] xl:h-[340px] xl:mr-[70px] xl:ml-[0px] xl:mt-[60px] xl:text-[16px]">
          <div className="flex justify-between">
            <div className="flex p-5 ml-4 pb-3 full-w space-x-7 items-center text-[0.875rem] md:text-[19px] md:ml-7 md:mr-7 md:p-6 md:pt-8 xl:text-[16px]">
              <button 
                className={`rounded-xl p-2 pr-[0.75rem] pl-[0.75rem] ${outputLanguage === 'en' ? 'bg-[#4D5562] text-white' : 'text-[#4D5562] font-bold'}`} 
                onClick={() => setOutputLanguage('en')}
              >
                English
              </button>
              <button 
                className={`rounded-xl p-2 pr-[0.75rem] pl-[0.75rem] ${outputLanguage === 'fr' ? 'bg-[#4D5562] text-white' : 'text-[#4D5562] font-bold'}`} 
                onClick={() => setOutputLanguage('fr')}
              >
                French
              </button>
              <button 
                className={`rounded-xl p-2 pr-[0.75rem] pl-[0.75rem] ${outputLanguage === 'es' ? 'bg-[#4D5562] text-white' : 'text-[#4D5562] font-bold'}`} 
                onClick={() => setOutputLanguage('es')}
              >
                Spanish
              </button>
            </div>
            <button className="border-[2.5px] border-[#4D5562] rounded-xl pr-[4.8px] pl-[4.8px] m-4 md:m-7"><img src='/Horizontal_top_left_main.svg' className="md:size-6 md:m-[2px]"/></button>
          </div>
          <div>
            <hr className="border-t border-[#394150] ml-5 mr-5 md:ml-7 md:mr-7"/>
            <p className="ml-5 mr-5 mt-7 m-36 font-semibold md:ml-7 md:mr-7 md:mb-[110px] xl:pb-[10px]">{translatedText}</p>
          </div>
            
          <div className="flex justify-between m-5 mt-3 mb-5">
            <div className="space-x-2 md:ml-2 md:mr-2">
              <button className="border-[2.5px] border-[#4D5562] rounded-xl p-[6px]"><img src='/sound_max_fill.svg' className="md:size-7 md:m-[2px]"/></button>
              <button className="border-[2.5px] border-[#4D5562] rounded-xl p-[6px]" onClick={copyOutputText}><img src='/Copy.svg' className="md:size-7 md:m-[2px]"/></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
