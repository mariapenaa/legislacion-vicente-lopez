import { Inter, Josefin_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import "../styles/globals.css";

const josefin = Josefin_Sans({ subsets: ['latin'] })

export default function Footer() {
    return (
        <footer className="w-full">
            <p className={`footer-subtitle ${josefin.className}`}></p>
            <div className="bg-gradient-to-r from-[#54317F] to-[#7C2C79] w-full h-2"></div>
            <div className="bg-[#ececec]">
                <div className="flex py-8 px-7 flex-col lg:flex-row lg:justify-between">
                    <div className="px-4 w-full sm:w-1/2 md:w-full flex-col sm:flex-row flex sm:justify-start md:justify-between ">
                        <div className="sm:w-1/4 px-4 lg:mb-0">
                            <div className="flex-col mb-4">
                                <h4 className={`footer-title ${josefin.className} text-center sm:text-left`}>Datos del municipio</h4>
                                <p className={`footer-subtitle ${josefin.className} text-center sm:text-left`}>Dirección de Administración y Legislación</p>
                                <p className={`footer-subtitle ${josefin.className} text-center sm:text-left`}>Subdirección Digesto</p>
                            </div>
                            <div className="flex-col mb-4">
                                <h4 className={`footer-title ${josefin.className} bricolage-grotesque text-center sm:text-left`}>Dirección</h4>
                                <p className={`footer-subtitle ${josefin.className} text-center sm:text-left`}>Av. Maipú 2609, Olivos.</p>
                            </div>
                        </div>
                        <div className="sm:w-1/3  px-4  lg:mb-0">
                            <div className="flex-col mb-4">
                                <h4 className={`footer-title ${josefin.className} bricolage-grotesque text-center sm:text-left`}>Email</h4>
                                <p className={`footer-subtitle ${josefin.className} text-center sm:text-left`}>digesto@vicentelopez.gov.ar</p>
                            </div>
                            <div className="flex-col mb-4">
                                <h4 className={`footer-title ${josefin.className} bricolage-grotesque text-center sm:text-left`}>Teléfono</h4>
                                <p className={`footer-subtitle ${josefin.className} text-center sm:text-left`}>4711-2824/2836</p>
                            </div>
                        </div>
                        <div className="sm:w-1/4 px-4  lg:mb-0">
                            <div className="flex-col mb-4">
                                <h4 className={`footer-title ${josefin.className} bricolage-grotesque text-center sm:text-left`}>Validador Blockchain</h4>
                                <p className={`footer-subtitle ${josefin.className} text-center sm:text-left`}>Valide los boletines en blockchain</p>
                            </div>
                            <div className="flex-col mb-4">
                                <h4 className={`footer-title ${josefin.className} bricolage-grotesque text-center sm:text-left`}>Web</h4>
                                <p className={`footer-subtitle ${josefin.className} text-center sm:text-left`}>https://www.vicentelopez.gov.ar</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full sm:w-1/2 md:w-full flex-col sm:flex-row">
                        <div className="sm:w-1/6 mb-7 sm:mb-0 flex flex-col items-center">
                            <img className="h-16 mb-4" src="/icons/warning.png" alt="Warning" />
                            <p className={`footer-number ${josefin.className}`}>911</p>
                            <p className={`footer-nav ${josefin.className}`}>Emergencias</p>
                        </div>
                        <div className="sm:w-1/6 mb-7 sm:mb-0 flex flex-col items-center">
                            <img className="h-16 mb-4" src="/icons/kit.png" alt="Warning" />
                            <p className={`footer-number ${josefin.className}`}>107</p>
                            <p className={`footer-nav ${josefin.className}`}>Emergencias médicas</p>
                        </div>
                        <div className="sm:w-1/6 mb-7 sm:mb-0 flex flex-col items-center">
                            <img className="h-16 mb-4" src="/icons/fire.png" alt="Warning" />
                            <p className={`footer-number ${josefin.className}`}>100</p>
                            <p className={`footer-nav ${josefin.className}`}>Bomberos</p>
                        </div>
                        <div className="sm:w-1/6 mb-7 sm:mb-0 flex flex-col items-center">
                            <img className="h-16 mb-4" src="/icons/people.png" alt="Warning" />
                            <p className={`footer-number ${josefin.className}`}>103</p>
                            <p className={`footer-nav ${josefin.className}`}>Defensa Civil</p>
                        </div>
                        <div className="sm:w-1/6 mb-7 sm:mb-0 flex flex-col items-center">
                            <img className="h-16 mb-4" src="/icons/phone.png" alt="Warning" />
                            <p className={`footer-number ${josefin.className}`}>109</p>
                            <p className={`footer-nav ${josefin.className}`}>Seguridad</p>
                        </div>
                        <div className="sm:w-1/6 mb-7 sm:mb-0 flex flex-col items-center">
                            <img className="h-16 mb-4" src="/icons/help.png" alt="Warning" />
                            <p className={`footer-number ${josefin.className}`}>147</p>
                            <p className={`footer-nav ${josefin.className}`}>Atención al vecino</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={styles.backgroundBlack} className="w-full relative h-24">
                <Image src="/logo-mvl.png" alt="Logo" 
                fill={true}
                objectFit="contain" />
            </div>
            <div style={styles.backgroundGreen} className="w-full h-2"></div>
        </footer>
    );
}

const styles = {
    headerTitle: {
        fontSize: 16,
        color: '#616161',
    },
    backgroundBlack: {
        backgroundColor:'#212121',
        padding:20,
    },
    backgroundGreen: {
        backgroundColor:'#8cb03e',
    },
}
