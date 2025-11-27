import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {

    const navigation = useNavigation();

    const handleLogout = () => {
        Alert.alert(
            "Cerrar sesión",
            "¿Estás seguro de que quieres cerrar sesión?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Cerrar sesión",
                    style: "destructive",
                    onPress: () => navigation.replace("Bienvenida")
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            
            <Image
                source={require("../assets/user.jpg")}
                style={styles.avatar}
            />

            <Text style={styles.username}>Username</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EditarPerfil")}>
                <Text style={styles.buttonText}>Editar perfil</Text>

                
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Notificaciones</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        paddingTop: 60,
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 60,
        marginBottom: 10,
    },
    username: { 
        color: "#FFD426",
        fontSize: 40,
        fontWeight: "900",
    },
    button: {
        width: '70%',
        backgroundColor: '#1E1E1E',
        paddingVertical: 12,
        borderRadius: 10,
        marginVertical: 8,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    }
});
