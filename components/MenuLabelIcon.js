import React from 'react'

import FeedIcon from './icons/FeedIcon'
import LibraryIcon from './icons/LibraryIcon'
import SurpriseIcon from './icons/SurpriseIcon'
import SearchIcon from './icons/SearchIcon'
import SettingsIcon from './icons/SettingsIcon'
import SignOutIcon from './icons/SignOutIcon'
import NewList from './icons/NewList'
import Archive from './icons/Archive'




export default function Platform({ labelid }) {
    switch (labelid) {
        case 1:
            return <FeedIcon style={{ margin: 2 }} />;
            break;
        case 2:
            return <LibraryIcon style={{ margin: 2 }} />
            break;
        case 3:
            return <SurpriseIcon style={{ margin: 2 }} />
            break;
        case 4:
            return <SearchIcon style={{ margin: 2 }} />;
            break;
        case 5:
            return <SettingsIcon style={{ margin: 2 }} />
            break;
        case 6:
            return <SignOutIcon style={{ margin: 2 }} />
            break;
        case 7:
            return <NewList style={{ margin: 2 }} />

        case 8:
            return <Archive style={{ margin: 2 }} />

        default:
            return '';

    }



}