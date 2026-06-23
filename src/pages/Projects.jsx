import Navbar from "../components/common/Navbar"
import Logo from "../components/common/Logo"
import ProjectCard from "../components/projects/ProjectCard"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "../components/common/Footer";


const Projects = () => {

  const img=[{
      img1: 'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c',
      img2: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b'
    },
    {
      img1: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
      img2: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022'
    },
    {
      img1: 'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
      img2: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c'
    },
    {
      img1: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
      img2: 'https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd'
    },
    {
      img1: 'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47',
      img2: 'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f'
    },
    {
      img1: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda',
      img2: 'https://k72.ca/images/caseStudies/OSM/thumbnail_OSM_1280.jpg?w=1280&h=960&s=968b0d5b6e3ac3b7ab84c1706efd4377'
    },
    {
      img1: 'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14',
      img2: 'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124'
    },
    {
      img1: 'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757',
      img2: 'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000'
    }
  ]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function () {

    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", ()=>{
        gsap.from('.eachRow',{
        height: '125px',
        stagger:{
          amount: 0.1
        },
        scrollTrigger:{
          trigger: '.itemsSection',
          start: 'top 100%',
          end: 'top -1100%',
          scrub:true
        }
      })
    })

    mm.add("(max-width: 1023px)", ()=>{
        gsap.from('.eachRow',{
        height: '500px',
        stagger:{
          amount: 0.1
        },
        scrollTrigger:{
          trigger: '.itemsSection',
          start: 'top 100%',
          end: 'top -900%',
          scrub:true
        }
      })
    })

    
  })

  return (
    <div> 

      <Logo logoColor={'black'}/>

      <Navbar/>

      <div className="headingSection lg:mt-[51vh] mt-[49vh] pt-6 lg:pl-4 pl-2">
        <h2 className="font-[font2] lg:text-[12.5vw] uppercase lg:leading-[8vw] text-[19vw] leading-[12vw]">Projets</h2>
      </div>

      <div className="itemsSection flex flex-col gap-4 mt-1">

        {img.map((obj, idx)=>{
           return <div key={idx} className="eachRow w-full lg:h-130 h-225 flex lg:flex-row flex-col gap-4 lg:pl-2 lg:pr-2 ">
            <ProjectCard img1={obj.img1} img2={obj.img2}/>
           </div>  
        })}
      
      
      </div>


        <Footer/>

    </div>
  )
}

export default Projects
