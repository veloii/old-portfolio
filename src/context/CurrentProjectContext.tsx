import React, { createContext, useState } from "react";

type CurrentProjectContextType = {
  myVirtualPet: boolean;
  setMyVirtualPet: (value: boolean) => void;
  unifiedBookmarks: boolean;
  setUnifiedBookmarks: (value: boolean) => void;
};

export const CurrentProjectContext = createContext<CurrentProjectContextType>({
  myVirtualPet: false,
  setMyVirtualPet: () => null,
  unifiedBookmarks: false,
  setUnifiedBookmarks: () => null,
});

export const CurrentProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [unifiedBookmarks, setUnifiedBookmarks] = useState<boolean>(false);
  const [myVirtualPet, setMyVirtualPet] = useState<boolean>(false);

  return (
    <CurrentProjectContext.Provider
      value={{
        unifiedBookmarks,
        setUnifiedBookmarks,
        myVirtualPet,
        setMyVirtualPet,
      }}
    >
      {children}
    </CurrentProjectContext.Provider>
  );
};
