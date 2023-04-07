import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BiMessageSquareAdd, BiSearchAlt } from 'react-icons/bi';
import { AiOutlineControl } from 'react-icons/ai';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./Message.css"
import Primary from './Primary';
import General from './General';
import Requests from './Requests';
import Footer from '../Mainpage/Footer';
import DemoContext from '../../contexts/Democontext';
const Messages = () => {
    const context = useContext(DemoContext);
    const { darkMode } = context;
    return (
        <div className='d-flex flex-column'>
            <div className={`msg-div`} style={{ backgroundColor: darkMode ? 'black' : '#F8F9FA' }}>
                <div className="d-flex justify-content-between mx-3 py-3">
                    <h6>Messages</h6>
                    <Link to="/" style={{ color: "#818589", textDecoration: "none", fontWeight: "500" }}><BiMessageSquareAdd /></Link>
                </div>

                <div>
                    <form className='d-flex msg-form' role="search">
                        <i style={{ backgroundColor: "#E8E8E8", marginLeft: "15px", border: "none", borderRadius: "20px 0px 0px 20px" }}><BiSearchAlt className='search-icon' /></i>
                        <input className="msg-search-bar" type="search" placeholder="Search" aria-label="Search" />
                        <i style={{ backgroundColor: "#E8E8E8", border: "none", borderRadius: "0px 20px 20px 0px" }}><AiOutlineControl className='search-icon mx-2' /></i>
                    </form>
                </div>
                <Tabs>
                    <TabList>
                        <div className="msg-tab msg-tab-ul mt-3">
                            <Tab>Primary</Tab>
                            <Tab>General</Tab>
                            <Tab>Requests(2)</Tab>
                        </div>
                    </TabList>
                    <TabPanel>
                        <div className="primary-msg">
                            <Primary />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="primary-msg">
                            <General />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="primary-msg">
                            <Requests />
                        </div>
                    </TabPanel>
                </Tabs>


            </div>
            <div className='ft bg-dark'>
                <Footer />
            </div>
        </div>
    )
}

export default Messages