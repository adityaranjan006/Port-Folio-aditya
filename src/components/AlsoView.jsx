import React from "react";
import { styles } from "../style";
const AlsoView = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className={styles.padding}>
            <h5 className={[styles.sectionHeadText,'mb-5']}>Visit my profiles for more</h5>
            <br />
          {/* <p className={[styles.paddingY,styles.sectionSubText] }>These are my public profiles which you can visit and see my performance during the pediod</p> */}
          <div className="mb-10 xs:text-[20px] sm:text-[25px]">
          <ul className="list-none sm:flex flex-row gap-10">
            <li><a href="https://leetcode.com/1si20cs006/" target="_blank" className={styles.sectionSubText}>Leetcode</a></li>
            <li><a href="https://www.codechef.com/users/adi44" target="_blank"className={styles.sectionSubText}>Codechef</a></li>
            <li><a href="https://auth.geeksforgeeks.org/user/ranjanal5mf" target="_blank"className={styles.sectionSubText}>GeeksForGeeks</a></li>
            <li><a href="https://www.codingninjas.com/codestudio/profile/814978c9-fb22-4b12-aef4-e236c9fb0195" target="_blank"className={styles.sectionSubText}>CodeStudio</a></li>
            <li><a href="https://github.com/adityaranjan006" target="_blank"className={styles.sectionSubText}>GitHub</a></li>
            
          </ul>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default AlsoView;
