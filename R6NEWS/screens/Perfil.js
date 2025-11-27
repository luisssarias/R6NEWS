import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Perfil extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <Image
                    source={{ uri: 'https://external-preview.redd.it/EvEzuUfte5MFPLKMHSWQzgVJFTC1UBx1HOXxZtL8yww.png?width=640&crop=smart&auto=webp&s=d24f16e94428a29e67c5c93496742c12c6a70bc1' }}
                    style={styles.avatar}
                />

                <Text style={styles.username}>Username</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Editar perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Notificaciones</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        );
    }
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
        color: '#FFEB3B',
        fontSize: 20,
        marginBottom: 40,
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
