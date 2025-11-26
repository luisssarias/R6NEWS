import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class OlvidarContrasena extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <Text style={styles.title}>R6News</Text>
                <Text style={styles.subtitle}>Recuperar contraseña</Text>

                <Text style={styles.text}>
                    Introduce tu correo electrónico. Te enviaremos un código para
                    restablecer tu contraseña.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                    placeholderTextColor="#777"
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Enviar código</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
        padding: 30,
        paddingTop: 80,
    },
    title: {
        color: '#F9D708',
        fontSize: 32,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#FFFFFF',
        fontSize: 22,
        marginBottom: 20,
    },
    text: {
        color: '#CCCCCC',
        fontSize: 14,
        marginBottom: 25,
    },
    input: {
        backgroundColor: '#1E1E1E',
        padding: 12,
        borderRadius: 10,
        color: '#fff',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#F9D708',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});
