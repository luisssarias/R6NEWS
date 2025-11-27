import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class OlvidarContrasena extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.box}>

                    <Text style={styles.title}>R6News</Text>

                    <Text style={styles.subtitle}>
                        Recuperar{"\n"}contraseña
                    </Text>

                    <Text style={styles.description}>
                        Introduce tu correo electrónico.{"\n"}
                        Te enviaremos un código para{"\n"}
                        restablecer tu contraseña.
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Correo electrónico"
                        placeholderTextColor="#7F7F7F"
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Enviar código</Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
    },

    box: {
        width: '88%',
        marginTop: 100,
        alignItems: 'center',
    },

    title: {
        color: '#F9D708',
        fontSize: 38,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },

    subtitle: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 32,
    },

    description: {
        color: '#CFCFCF',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 45,
        lineHeight: 22,
    },

    input: {
        width: '80%',           
        backgroundColor: '#1A1A1A',
        paddingVertical: 10,
        paddingHorizontal: 15,
        color: '#FFFFFF',
        borderRadius: 12,
        marginBottom: 40,
        fontSize: 16,
        alignSelf: 'center',
    },

    button: {
        width: '65%',              // 🔥 Más corto, igual al diseño
        backgroundColor: '#F9D708',
        paddingVertical: 14,       // Altura exacta
        borderRadius: 16,          // Muy redondeado como el mockup
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
});
