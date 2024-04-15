export default function Home() {
  return (
    <main className="bg-[url('../public/hero_img.jpg')] bg-contain bg-[#040711] bg-no-repeat w-[100%] h-screen flex flex-col items-center">
      <header className="mt-[100px] md:mb-[0px]"><img src='/logo.svg' alt="logo" className="md:h-14"/></header>
      <div className="flex flex-col items-center xl:grid xl:grid-cols-2 ">

        <div className="mt-[60px] bg-[#212936cc] rounded-3xl border border-[#4D5562] w-[590px] md:w-[880px] md:mr-[70px] md:ml-[70px] mr-[60px] ml-[60px] md:text-[20px] xl:w-[560px] xl:ml-[70px] xl:mr-[156px]">
          <div className="flex p-5 md:p-6 ml-4 md:ml-5 pb-3 full-w space-x-7 items-center text-[0.875rem] md:text-[19px] xl:text-[16px]">
            <p className="text-[#4D5562] font-bold">Detect Language</p>
            <button className="bg-[#4D5562] rounded-xl p-2 pr-[0.75rem] pl-[0.75rem]">English</button>
            <button className="text-[#4D5562] font-bold">French</button>
            <button className="text-[#4D5562] font-bold flex items-center">Spanish <img src="/Expand_down.svg" className="ml-2"/></button>
            
          </div>
            
          <div>
          <hr className="border-t border-[#394150] md:ml-7 md:mr-7 ml-5 mr-5"/>
            <textarea className="bg-transparent w-full h-[400px]" type="input" placeholder="Hello how are you?"/>
            <p className="text-right mr-5 text-[#4D5562] text-[0.75rem]">19/500</p>
          </div>
            
          <div className="flex justify-between m-5 mt-3 mb-5 md:ml-7 md:mr-7 ">
            <div className="space-x-2">
              <button className="border-[2.3px] border-[#4D5562] rounded-2xl p-[6px]"><img src='/sound_max_fill.svg' className="md:size-7 md:m-[2px]"/></button>
              <button className="border-[2.3px] border-[#4D5562] rounded-2xl p-[6px]"><img src='/Copy.svg' className="md:size-7 md:m-[2px]"/></button>
            </div>

            <button className="bg-[#3662E3] rounded-xl flex p-[11.7px] pl-7 pr-7 border border-[#CDD5E0]/60"><img src='/Sort_alfa.svg' className="pr-1.5"/>Translate</button>
          </div>
        </div>

        <div className="mt-5 bg-[#212936cc] rounded-3xl border border-[#4D5562] w-[590px] md:w-[880px] md:mr-[70px] md:ml-[70px] mr-[60px] ml-[60px] md:text-[20px] xl:w-[560px] xl:mr-[70px] xl:ml-[0px] xl:mt-[60px] xl:text-[16px]">
          <div className="flex justify-between">
            <div className="flex p-5 ml-4 pb-3 full-w space-x-7 items-center text-[0.875rem] md:text-[19px] md:ml-7 md:mr-7 md:p-6 md:pt-8 xl:text-[16px]">
              <button className="text-[#4D5562] font-bold">English</button>
              <button className="bg-[#4D5562] rounded-xl p-2 pr-[0.75rem] pl-[0.75rem]" >French</button>
              <button className="text-[#4D5562] font-bold flex items-center">Spanish <img src="/Expand_down.svg" className="ml-2"/></button>
            </div>

            <button className="border-[2.5px] border-[#4D5562] rounded-xl pr-[4.8px] pl-[4.8px] m-4 md:m-7"><img src='/Horizontal_top_left_main.svg' className="md:size-6 md:m-[2px]"/></button>
          </div>

          <div >
          <hr className="border-t border-[#394150] ml-5 mr-5 md:ml-7 md:mr-7"/>
            <p className="ml-5 mr-5 mt-7 m-36 font-semibold md:ml-7 md:mr-7 xl:pb-[50px]">Bonjour, comment allez-vouz?</p>
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
