/* eslint-disable */
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../../assets/images/logos/white-text.png';
import logo1 from '../../assets/images/logos/dark-text1.png';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    /*--------------------------------------------------------------------------------*/
    /*To open NAVBAR in MOBILE VIEW                                                   */
    /*--------------------------------------------------------------------------------*/

    return (
        <div className="topbar" id="top">
        {props.view === "sign-in" 
                ?
            <div className="header6 bg-light">
                <Container className="po-relative bg">
                        <Navbar className="navbar-expand-lg h6-nav-bar">
                        <NavbarBrand href="/projectgreen/"><img id="project-green-logo" src={logo1} alt="wrapkit"/></NavbarBrand>
                        <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                        <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 ml-auto" id="h6-info">
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <Link className="nav-link text-dark" to="/projectgreen/#services">
                                        Services
                                    	</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link text-dark" to="/projectgreen/#case">
                                        Recent Project
                                    	</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link text-dark" to="/projectgreen/#companyNarrative">
                                        About Us
                                    	</Link>
                                </NavItem>
                            </Nav>
                            <div className="act-buttons">
                                <AnchorLink href={"#contact-us"} className="btn btn-success-gradiant font-14">Contact Us</AnchorLink>
                            </div>
                        </Collapse>
                    </Navbar>
                </Container>
                </div>
                :
                <div className="header6 mt-1">
                <Container className="po-relative">
                        <Navbar className="navbar-expand-lg h6-nav-bar">
                        <NavbarBrand href="/projectgreen/"><img id="project-green-logo" src={logo} alt="wrapkit"/></NavbarBrand>
                        <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                        <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 ml-auto" id="h6-info">
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <AnchorLink className="nav-link" href={"#services"}>
                                        Services
                                    	</AnchorLink>
                                </NavItem>
                                <NavItem>
                                    <AnchorLink className="nav-link" href={"#case"}>
                                        Recent Project
                                    	</AnchorLink>
                                </NavItem>
                                <NavItem>
                                    <AnchorLink className="nav-link" href={"#companyNarrative"}>
                                        About Us
                                    	</AnchorLink>
                                </NavItem>
                            </Nav>
                            <div className="act-buttons">
                                <AnchorLink href={"#contact-us"} className="btn btn-success-gradiant font-14">Contact Us</AnchorLink>
                            </div>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        }
        </div>
    );

}
export default Header;
