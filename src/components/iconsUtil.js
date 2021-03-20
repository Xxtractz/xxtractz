import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

export const AddBrandIcon = ({icon, url}) =>(
        <i className={'pr-2'}>
            <a href={url}>
                <FontAwesomeIcon icon={['fab', `${icon}`]} size="4x"/>
            </a>
        </i>
)

export const AddIcon = ({icon, url}) =>(
    <i className={'pr-2'}>
        <a href={url}>
            <FontAwesomeIcon icon={['fas', `${icon}`]} size="4x"/>
        </a>
    </i>
)