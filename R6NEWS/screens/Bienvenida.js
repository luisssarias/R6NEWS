import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Bienvenida({ navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>R6News</Text>

            <Text style={styles.subtitle}>
                Conecta con el mundo competitivo de{"\n"}Rainbow Six
            </Text>

            <TouchableOpacity 
                style={styles.loginBtn}
                onPress={() => navigation.navigate("IniciarSesion")}
            >
                <Text style={styles.loginText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.registerBtn}
                onPress={() => navigation.navigate("RegistroSesion")}
            >
                <Text style={styles.registerText}>Registrarse</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25
    },
    title: {
        color: '#F9D708',
        fontSize: 42,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 45,
    },
    loginBtn: {
        backgroundColor: '#F9D708',
        width: '70%',
        paddingVertical: 14,
        borderRadius: 10,
        marginBottom: 15,
    },
    loginText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerBtn: {
        backgroundColor: '#1E1E1E',
        width: '70%',
        paddingVertical: 14,
        borderRadius: 10,
    },
    registerText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
