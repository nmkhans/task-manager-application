import React from 'react';
import LinkTo from './../LinkTo/LinkTo';

const HomeLinks = ({path, name, Icon}) => {
    return (
        <li>
            <LinkTo to={path}>
                <span>
                    <Icon />
                </span>
                {name}
            </LinkTo>
        </li>
    );
};

export default HomeLinks;