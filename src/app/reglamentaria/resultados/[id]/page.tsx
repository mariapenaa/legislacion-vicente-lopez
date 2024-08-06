"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page({ params }: { params: { id: string } }) {
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (params.id) {
            const fetchLegislacion = async () => {
                try {
                    const response = await fetch(`/api/legislacion/detail/${params.id}`);
                    if (response.ok) {
                        const blob = await response.blob();
                        const url = URL.createObjectURL(blob);
                        setPdfUrl(url);
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
            <Breadcrumb />
            <div className="flex justify-center w-full mt-5">
                {loading ? (
                    <p>Loading...</p>
                ) : pdfUrl ? (
                    <embed
                        src={pdfUrl}
                        type="application/pdf"
                        style={{ width: '100%', height: '70vh' }}
                    />
                ) : (
                    <p>No PDF available</p>
                )}
            </div>
        </div>
    );
}
