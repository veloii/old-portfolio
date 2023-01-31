import React from "react";
import MyVirtualPet from "./MyVirtualPet";
import UnifiedBookmarks from "./UnifiedBookmarks";
import RandomRobloxGame from "./RandomRobloxGame";

export const Projects = () => {
  return (
    <div className="pb-32">
      <UnifiedBookmarks />
      <MyVirtualPet />
      <RandomRobloxGame />
    </div>
  );
};
