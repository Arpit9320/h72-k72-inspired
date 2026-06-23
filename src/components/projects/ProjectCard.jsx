

const ProjectCard = ({img1, img2}) => {

  return (
    <>
          
        <div className="leftside lg:w-1/2  w-full h-full overflow-hidden relative group">
        <img  className='group-hover:rounded-[40px] transition-all duration-400  w-full h-full object-cover' loading="lazy" src={img1} alt="" />
        <div className="h-full w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-400">
            <h3 className="text-6xl border-3 border-white text-white font-[font1] px-4 pt-2 uppercase rounded-full">Voir le projet</h3>
        </div>
        </div>
        <div className="rightside lg:w-1/2  w-full h-full overflow-hidden relative group">
        <img className='group-hover:rounded-[40px] transition-all duration-400  w-full h-full object-cover' loading="lazy" src={img2} alt="" />
        <div className="h-full w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-400">
            <h3 className="text-6xl border-3 border-white text-white font-[font1] px-4 pt-2 uppercase rounded-full">Voir le projet</h3>
        </div>
        </div>
        
    </>
  )
}

export default ProjectCard
