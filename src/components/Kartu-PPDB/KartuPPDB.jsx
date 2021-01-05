import React from "react";
import Logo from '../../assets/images/logo-loyola.png'
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import './KartuPPDB.css'

Font.register({
    family: 'Asul',
    src: 'http://fonts.gstatic.com/s/asul/v5/VAzkC2TIhQ2e4KQLDKf9Rw.ttf'
});

Font.register({
    family: 'Mukta',
    src: 'http://fonts.gstatic.com/s/mukta/v7/iJWHBXyXfDDVXbEyjlma-2HW7ZB_.ttf'
});

const styles = StyleSheet.create({
    sectionImage: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sectionIdentity: {
        marginTop: '10px'
    },
    sectionQRCode: {
        alignItems: 'center'
    },
    body: {
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 32,
        // fontFamily: 'Mukta',
        fontStyle: 'normal',
        fontWeight: 'normal',
        textAlign: 'center',
        color: '#072A6F',
        lineHeight: '53px'
    },
    author: {
        fontFamily: 'Asul',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 36,
        textAlign: 'center',
         color: '#072A6F'
    },
    name: {
        fontSize: 36,
        // fontFamily: 'Mukta',
        fontStyle: 'normal',
        fontWeight: 700,
        textAlign: 'center',
        color: 'black'
    },
    identity: {
        fontSize: 24,
        // fontFamily: 'Mukta',
        fontStyle: 'normal',
        fontWeight: 'normal',
        textAlign: 'center',
        color: 'black'
    },
    logo: {
        width: '72px',
        height: '72px',
        marginTop: '67px',
        marginBottom: '10px'
    },
    photo: {
        width: '200px',
        height: '200px',
        marginTop: '55px',
        marginBottom: '16px'
    },
    qrcode: {
        width: '160px',
        height: '160px',
        marginTop: '35px',
        marginBottom: '0px'
    }
});

class KartuPPDB extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [],
            namaSiswa: "",
            noRegistrasi: "",
            sekolahAsal: "",

            ready: false
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8090/api/penerimaan/cetakKartu/view?top&skip&orderby&filter=noRegistrasi='202101010'").then(response => {
            console.log(response)
            this.setState({
                user: response.data.items,
                namaSiswa: response.data.items[0].namaSiswa,
                noRegistrasi: response.data.items[0].noRegistrasi,
                sekolahAsal: response.data.items[0].sekolahAsal
            })
        })
    }

    toggle() {
        this.setState((prevState) => ({
            ready: false
        }), () => {     // THIS IS THE HACK
            setTimeout(() => {
                this.setState({ ready: true });
            }, 1);
        });
    }

    render() {
        const { ready } = this.state;

        const hasil = this.state.user.map((user, index) => {
            if (index === 0) {
                return (
                    "Nama Siswa: " + user.namaSiswa + 
                    ", Sekolah Asal: " + user.sekolahAsal +
                    ", No Registrasi: " + user.noRegistrasi
                )
            }
        })

        return (
            <div className="kartu-ppdb">
                {ready && (
                    <PDFViewer style={{height:'100%', width:'100%', borderWidth:'0px'}}>
                    <Document>
                        <Page size="A4" style={styles.body}>
                        <View style={styles.sectionImage}>
                            <Image
                                style={styles.logo}
                                src={Logo}
                            />
                        </View>
                        <Text style={styles.title}>Kartu Peserta PPDB</Text>
                        <Text style={styles.author}>SMA Kolese Loyola Semarang</Text>
                        <View style={styles.sectionImage}>
                            <Image
                                style={styles.photo}
                                src="http://localhost:8090/api/uploadSuratKeputusan/lihatFoto?id=11"
                            />
                        </View>
                        <View style={styles.sectionIdentity}>
                            <Text style={styles.name}>{this.state.namaSiswa}</Text>
                        </View>
                        <View style={styles.sectionIdentity}>
                            <Text style={styles.identity}>{this.state.sekolahAsal}</Text>
                        </View>
                        <View style={styles.sectionIdentity}>
                            <Text style={styles.identity}>No. Peserta : {this.state.noRegistrasi}</Text>
                        </View>
                        <View style={styles.sectionQRCode}>
                            <Image style={styles.qrcode} src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${hasil}`} />
                        </View>
                        </Page>
                    </Document>
                </PDFViewer>
                )}
                {!ready && (
                   <Button className="lihat-kartu-ppdb" variant="primary" onClick={() => this.toggle()}>
                        Lihat PDF Kartu PPDB
                    </Button>
                )}
                
            </div>
        )
    }
}

export default KartuPPDB