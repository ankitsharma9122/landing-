import React from "react";
import styles from './App.module.css';
import Leftnav from "./components/Leftnav";
import Rightnav from "./components/Rightnav";
import Box from './components/Box';
import MergeBox from "./components/Mergebox";
function App() {
  return (
    <div>
    <div className={styles.main}>
      <Leftnav/>
      <Rightnav/>
     </div>
      <Box/>
      <MergeBox/>
     </div>
  );
}

export default App;
