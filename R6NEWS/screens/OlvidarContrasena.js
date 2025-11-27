import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OlvidarContrasena() {

    const [modalVisible, setModalVisible] = useState(false);
    const [showNewPass, setShowNewPass] = useState(false);
    const [passVisible, setPassVisible] = useState(false);
    const [pass2Visible, setPass2Visible] = useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.box}>

                <Text style={styles.title}>R6News</Text>

                {!showNewPass && (
                    <>
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

                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.buttonText}>Enviar código</Text>
                        </TouchableOpacity>
                    </>
                )}

                {showNewPass && (
                    <>
                        <Text style={styles.subtitle}>Nueva contraseña</Text>

                        {/* CONTRASEÑA 1 */}
                        <View style={styles.passContainer}>
                            <TextInput
                                style={styles.passInput}
                                placeholder="Nueva contraseña"
                                placeholderTextColor="#7F7F7F"
                                secureTextEntry={!passVisible}
                            />
                            <TouchableOpacity onPress={() => setPassVisible(!passVisible)}>
                                <Ionicons 
                                    name={passVisible ? "eye-off" : "eye"} 
                                    size={24} 
                                    color="#fff" 
                                />
                            </TouchableOpacity>
                        </View>

                        {/* CONTRASEÑA 2 */}
                        <View style={styles.passContainer}>
                            <TextInput
                                style={styles.passInput}
                                placeholder="Confirmar contraseña"
                                placeholderTextColor="#7F7F7F"
                                secureTextEntry={!pass2Visible}
                            />
                            <TouchableOpacity onPress={() => setPass2Visible(!pass2Visible)}>
                                <Ionicons 
                                    name={pass2Visible ? "eye-off" : "eye"} 
                                    size={24} 
                                    color="#fff" 
                                />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.button}
                         onPress={() => navigation.navigate("IniciarSesion")}>
                            <Text style={styles.buttonText}>Guardar</Text>
                        </TouchableOpacity>
                    </>
                )}

            </View>

            {/* ===== MODAL ===== */}
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalBox}>
                        <Text style={styles.modalText}>
                            ✔ Código enviado a tu correo
                        </Text>

                        <TouchableOpacity 
                            style={styles.modalButton}
                            onPress={() => {
                                setModalVisible(false);
                                setShowNewPass(true);
                            }}
                        >
                            <Text style={styles.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    );
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

    passContainer: {
        width: '80%',
        backgroundColor: '#1A1A1A',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 12,
        marginBottom: 25,
    },

    passInput: {
        flex: 1,
        color: '#fff',
        paddingVertical: 10,
        fontSize: 16,
    },

    button: {
        width: '65%',
        backgroundColor: '#F9D708',
        paddingVertical: 14,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },

    // MODAL
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalBox: {
        width: '75%',
        backgroundColor: '#1A1A1A',
        padding: 25,
        borderRadius: 18,
        alignItems: 'center',
    },

    modalText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },

    modalButton: {
        backgroundColor: '#F9D708',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 12,
    },

    modalButtonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
