import React, { createContext, useState } from "react";

type CurrentProjectContextType = {
  randomRobloxGame: boolean;
  setRandomRobloxGame: (value: boolean) => void;
  myVirtualPet: boolean;
  setMyVirtualPet: (value: boolean) => void;
  unifiedBookmarks: boolean;
  setUnifiedBookmarks: (value: boolean) => void;
};

export const CurrentProjectContext = createContext<CurrentProjectContextType>({
  randomRobloxGame: false,
  setRandomRobloxGame: () => null,
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
  const [randomRobloxGame, setRandomRobloxGame] = useState<boolean>(false);

  return (
    <CurrentProjectContext.Provider
      value={{
        unifiedBookmarks,
        randomRobloxGame,
        setRandomRobloxGame,
        setUnifiedBookmarks,
        myVirtualPet,
        setMyVirtualPet,
      }}
    >
      {children}
    </CurrentProjectContext.Provider>
  );
};
