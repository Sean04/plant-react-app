import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


export default function SideNav() {
    return (
        <div>
            <h2>Plants</h2>
            <Nav vertical>
                <NavItem>
                    <NavLink href="/dashboard/plant1">Plant 1</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/dashboard/plant2">Plant 2</NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}
