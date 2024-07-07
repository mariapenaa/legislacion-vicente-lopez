import Breadcrumb from "@/components/Breadcrumb";

export default function Page({ params }: { params: { id: string } }) {
    return (
      <div className="py-5 px-5 sm:py-12 sm:px-20">
        <Breadcrumb/>
        <div className="flex justify-center w-full mt-5">
          <embed
            src="https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf"
            type="application/pdf"
            style={{ width: '100%', height: '70vh' }}
          />
        </div>
      </div>
    )
  }