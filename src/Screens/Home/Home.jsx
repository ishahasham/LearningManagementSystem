import { useState } from 'react';
import styles from './Home.module.css';
import Header from './Header';
import Sidebar from './Sidebar';


function Home() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  return (
    <div className={styles.gridContainer}>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
    </div>
  );
}

export default Home;


