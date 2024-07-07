import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full">
            <div className="bg-gradient-to-r from-[#54317F] to-[#7C2C79] w-full h-2"></div>
            <div className="bg-gray-300">
                <div>

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
    }
}