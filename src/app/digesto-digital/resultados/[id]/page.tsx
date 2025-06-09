'use client';
import Breadcrumb from "@/components/Breadcrumb";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';
import { Button } from "@mui/material";

export default function Page({ params }: { params: { id: string } }) {
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [legislacionDetails, setLegislacionDetails] = useState<any>(null); // Adjust type as needed
    const [loading, setLoading] = useState(true);
    const [temaName, setTemaName] = useState('')
    const [subtemaName, setSubtemaName] = useState('')

    const handleDownloadClick = () => {
        if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'pdf_download', {
                event_category: 'PDF',
                event_label: `PDF ${params.id}`,
            });
        }
    };
    
    useEffect(() => {
        setLoading(true);
        if (params.id) {
            const fetchLegislacion = async () => {
                try {
                    const response = await fetch(`/api/legislacion/detail/${params.id}`);
                    if (response.ok) {
                        const data = await response.json();
                        setLegislacionDetails(data.legislacion);
                        setTemaName(data.ctema)
                        setSubtemaName(data.csubtema)
                        setPdfUrl(`/api/pdf/${params.id}`);
                    } else {
                        console.error('Error fetching legislacion:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error connecting to the server:', error);
                } finally {
                    setLoading(false);
                }
            };
            fetchLegislacion();
        }
    }, [params.id]);

    return (
        <div className="py-5 px-5 sm:py-12 sm:px-20">
            {loading ? (
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100}/>
            ): (
                <Breadcrumb 
                items={[
                    {
                        href: '/digesto-digital',
                        name: 'Digesto Digital',
                        bold: false
                    },
                    {
                        href: `/digesto-digital/resultados?tema=${legislacionDetails.eidtema}&subtema=${legislacionDetails.eidsubtema}`,
                        name: 'Resultados',
                        bold: false
                    },
                    {
                        href: `/digesto-digital/resultados?tema=${legislacionDetails.eidtema}&subtema=${legislacionDetails.eidsubtema}`,
                        name: temaName,
                        bold: false
                    },
                    {
                        href: `/digesto-digital/resultados?tema=${legislacionDetails.eidtema}&subtema=${legislacionDetails.eidsubtema}`,
                        name: subtemaName,
                        bold: false
                    },
                    {
                        href: ``,
                        name: 'PDF',
                        bold: true
                    },
                ]}
                />
            )}

            <div className="flex w-full mt-5 flex-col items-end">
                {loading ? (
                    <Skeleton variant="rectangular" width="100%" height="70vh" />
                ) : pdfUrl ? (
                    <>
                    <Button
                    variant="contained"
                    component="a"
                    href={`${pdfUrl}?download=true`}
                    onClick={handleDownloadClick}
                    download
                    className="mb-2 text-white  hover:text-opacity-100"
                    >
                        Descargar
                    </Button>
                    <iframe
                        src={pdfUrl+"#toolbar=0&navpanes=0&scrollbar=0"}
                        style={{ width: '100%', height: '70vh' }}
                    />
                </>
                ) : (
                    <p>No PDF available</p>
                )}
            </div>
        </div>
    );
}
