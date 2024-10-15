'use client';
import Breadcrumb from "@/components/Breadcrumb";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';

export default function Page({ params }: { params: { id: string } }) {
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [legislacionDetails, setLegislacionDetails] = useState<any>(null); // Adjust type as needed
    const [loading, setLoading] = useState(true);
    const [temaName, setTemaName] = useState('')
    const [subtemaName, setSubtemaName] = useState('')

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
                        href: '/legislacion',
                        name: 'Legislación',
                        bold: false
                    },
                    {
                        href: `/legislacion/resultados?tema=${legislacionDetails.eidtema}&subtema=${legislacionDetails.eidsubtema}`,
                        name: 'Resultados',
                        bold: false
                    },
                    {
                        href: `/legislacion/resultados?tema=${legislacionDetails.eidtema}&subtema=${legislacionDetails.eidsubtema}`,
                        name: temaName,
                        bold: false
                    },
                    {
                        href: `/legislacion/resultados?tema=${legislacionDetails.eidtema}&subtema=${legislacionDetails.eidsubtema}`,
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

            <div className="flex justify-center w-full mt-5">
                {loading ? (
                    <Skeleton
                        variant="rectangular"
                        width="100%"
                        height="70vh"
                    />
                ) : pdfUrl ? (
                    <>
                        <embed
                            src={pdfUrl}
                            type="application/pdf"
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
