import React, { useState } from 'react';
import { BsPersonCircle, BsJustify } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../Configuration/Firebase'; 
import styles from './Home.module.css';

function Header({ OpenSidebar }) {
  const [showLogout, setShowLogout] = useState(false); 
  const navigate = useNavigate();

  const handleLogout = async () => {
    // first clear the local storage after logout
    try {
      await signOut(auth); 
      localStorage.clear(); 
      navigate('/'); 
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const toggleLogoutButton = () => {
    setShowLogout(!showLogout); 
  };

  return (
    <header className={styles.header}>
      <div className={styles.menuicon}>
        <BsJustify className={styles.icon} onClick={OpenSidebar} />
      </div>
      <div className={styles.headerleft}>
        <FaGraduationCap className={styles.iconheader} />
        <b className={styles.bold}>Learning Management System</b>
      </div>
      <div className={styles.headerright}>
        <div className={styles.personContainer} onClick={toggleLogoutButton}>
          <BsPersonCircle className={styles.iconheader} />
          {showLogout && (  
            <button className={styles.logoutButton} onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
