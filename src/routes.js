import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';

export default createStackNavigator({
    Main
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#da552f"
            
        },
        headerTintColor: "#fff",
        headerTitleStyle:{
            textAlign: 'center',
            flexGrow:1,
            alignSelf:'center',
        },
    },
});