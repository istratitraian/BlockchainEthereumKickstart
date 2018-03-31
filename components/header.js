import React from 'react';
import { Menu } from 'semantic-ui-react';
//state = {}

export default () => {

    const marginTop = {
        marginTop: '10px'
    };

    return  (
            <Menu style={marginTop}>
                <Menu.Item name='crowdcoin' >
                    CrowdCoin
                </Menu.Item>
            
            
                <Menu.Menu position='right'>
                    <Menu.Item name='campaigns' >
                        Campaigns
                    </Menu.Item>
            
                    <Menu.Item name='add' >
                        +
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            );
};