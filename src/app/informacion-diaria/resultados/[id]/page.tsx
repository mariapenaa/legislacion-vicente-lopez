export default function Page({ params }: { params: { id: string } }) {
    return (
      <div>
        Legislacion: {params.id}
        
      </div>
    )
  }