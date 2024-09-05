import React, { useState } from 'react';
import { FaEnvelope, FaChevronDown } from "react-icons/fa";
import styles from './Home.module.css';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';  

function Sidebar({ openSidebarToggle }) {
    const [anchorEl, setAnchorEl] = useState({});
    const navigate = useNavigate();  

    const handleClick = (event, index) => {
        setAnchorEl(prevState => ({ ...prevState, [index]: event.currentTarget }));
    };

    const handleClose = (index) => {
        setAnchorEl(prevState => ({ ...prevState, [index]: null }));
    };

    const menuItems = [
        { name: 'Students',
             links: [{ name: 'Student Registration', href: '../../Student/StudentRegistration' }, { name: 'Student List', href: '../../Student/StudentList' }] },
        { name: 'Teachers', 
            links: [{ name: 'Teacher Registration', href: '../../Teacher/TeacherRegistration' }, { name: 'Teacher List', href: '../../Teacher/TeacherList' }] },
        { name: 'Subjects', 
            links: [{ name: 'Subject Add', href: '../../Subjects/SubjectAdd' }, { name: 'Subject List', href: '../../Subjects/SubjectList' }] },
        { name: 'Syllabus',
             links: [{ name: 'Syllabus Form', href: '../../Syllabus/SyllabusForm' }, { name: 'Syllabus List', href: '../../Syllabus/SyllabusList' }] },
        { name: 'School', 
            links: [{ name: 'Student Registration', href: '../../Student/StudentRegistration' }, { name: 'Teacher Registration', href: '../../Teacher/TeacherRegistration' }] },
        { name: 'Class', 
            links: [{ name: 'Class Form', href: '../../Class/ClassForm' }, { name: 'Class List', href: '../../Class/ClassList' }] },
        { name: 'Fees',
             links: [{ name: 'Fees Structure', href: '../../Fees/FeeStructure' }, { name: 'Fee Voucher', href: '../../Fees/FeeVoucher' } , { name: 'Fee Submission', href: '../../Fees/FeeSubmission' }] },
        { name: 'Admission',
             links: [{ name: 'Admission Form', href: '../../Admission/AdmissionForm' }] },
        { name: 'Exam', 
            links: [{ name: 'Exam Schedule', href: '../../Exam/ExamSchedule' }, { name: 'Exam Result', href: '../../Exam/ExamResult' }] },
    ];

    return (
        <aside id="sidebar" className={`${styles.sidebar} ${openSidebarToggle ? styles.sidebarresponsive : ''}`}>
            <ul className={`${styles.sidebarList} ${openSidebarToggle ? styles.showSidebarList : ''}`}>
                {menuItems.map((item, index) => (
                    <li key={index} className={styles.sidebarListItem}>
                        <a href="#">
                            <FaEnvelope className={styles.icon} /> {item.name}
                        </a>
                        <IconButton
                            sx={{ color: "#5A0007", position: "relative", left: "25px", top: "15px" }}
                            onClick={(event) => handleClick(event, index)}
                            className={styles.dropdownIcon}
                            aria-controls={anchorEl[index] ? `simple-menu-${index}` : undefined}
                            aria-haspopup="true"
                        >
                            <FaChevronDown />
                        </IconButton>
                        <Menu
                            id={`simple-menu-${index}`}
                            anchorEl={anchorEl[index]}
                            keepMounted
                            open={Boolean(anchorEl[index])}
                            onClose={() => handleClose(index)}
                            className={styles.dropdownMenu}
                        >
                            {item.links.map((link, linkIndex) => (
                                <MenuItem
                                    key={linkIndex}
                                    onClick={() => {
                                        navigate(link.href); 
                                        handleClose(index);
                                    }}
                                >
                                    {link.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;
