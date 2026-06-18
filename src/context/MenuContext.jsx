import React, { createContext, useState } from 'react'
export const OptionsContext = createContext()

const MenuContext = ({children}) => {

  const [Opened, SetOpened] = useState(false)

  return (
    <div>
      <OptionsContext.Provider value={[Opened, SetOpened]}>
        {children}
      </OptionsContext.Provider>
    </div>
  )
}

export default MenuContext
