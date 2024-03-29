import React, {useContext} from 'react';
import { CountContext } from '../App';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/profile')
            .then(response => response.json())
            .then(data => setUserData(data));
    }, []);

    if (!userData) {
        return <Text>Loading...</Text>;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mon profil</Text>
            <Image
                style={styles.image}
                source={require('../assets/profil.png')}
            />
            <Text style={styles.text}>Ceci est mon profil.</Text>
            <Text style={styles.text}>Nombre de visites à la page d'accueil : {count}</Text>

            <Text style={styles.text}>Name: {userData.name}</Text>
            <Text style={styles.text}>Age: {userData.age}</Text>
            <Text style={styles.text}>Occupation: {userData.occupation}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    image: {
        width: 200,
        height: 200,
        margin: 15,
    },
    text: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default ProfileScreen;