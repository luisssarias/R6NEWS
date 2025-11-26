import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Bienvenida extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title}>R6News</Text>
                <Text style={styles.subtitle}>Bienvenido</Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate("IniciarSesion")}
                >
                    <Text style={styles.buttonText}>Iniciar sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate("RegistroSesion")}
                >
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D0D0D',
        padding: 20,
    },
    title: {
        color: '#F9D708',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        color: '#fff',
        fontSize: 22,
        marginBottom: 40,
    },
    button: {
        width: '70%',
        backgroundColor: '#1E1E1E',
        paddingVertical: 12,
        borderRadius: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    }
});
