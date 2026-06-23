

const ProjectCard = ({img1, img2}) => {

  return (
    <div className="eachRow w-full h-130 flex gap-4  pl-2 pr-2 ">
          
        <div className="leftside w-1/2 h-full overflow-hidden relative group">
        <img  className='group-hover:rounded-[40px] transition-all duration-400  w-full h-full object-cover' src={img1} alt="" />
        <div className="h-full w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-400">
            <h3 className="text-6xl border-3 border-white text-white font-[font1] px-4 pt-2 uppercase rounded-full">Voir le projet</h3>
        </div>
        </div>
        <div className="rightside w-1/2 h-full overflow-hidden relative group">
        <img className='group-hover:rounded-[40px] transition-all duration-400  w-full h-full object-cover' src={img2} alt="" />
        <div className="h-full w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-400">
            <h3 className="text-6xl border-3 border-white text-white font-[font1] px-4 pt-2 uppercase rounded-full">Voir le projet</h3>
        </div>
        </div>
        
    </div>
  )
}

export default ProjectCard
